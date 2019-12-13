class OpposedWFRP {
  /**
   * This class is the handler for opposed tests
   */

  static opposedClicked(event)
  {
    let button = $(event.currentTarget),
    messageId = button.parents('.message').attr("data-message-id"),
    message = game.messages.get(messageId);
    let data = message.data.flags.data

    if (this.opposedInProgress)
    {
      if (game.messages.get(this.startMessage._id)) // If the startMessage still exists, proceed with the opposed test. Otherwise, start a new opposed test
        this.defenderClicked(data.postData, message.data.speaker)
      else 
      {
        this.clearOpposed()
        this.opposedClicked(event);
      }
    }
    else
    {
      this.opposedInProgress = true
      this.attackerClicked(data.postData, message.data.speaker)
    }
  }

  static attackerClicked(testResult, speaker)
  {
    this.attacker = {
      testResult : testResult,
      speaker : speaker
    }

    this.createOpposedStartMessage(speaker);

  }

  static defenderClicked(testResult, speaker)
  {
    this.defender = {
      testResult : testResult,
      speaker : speaker
    }

    this.evaluateOpposedTest();
  }
  
  static evaluateOpposedTest()
  {
    try {
    let opposeResult = {};
    let attackerSL = parseInt(this.attacker.testResult.SL);
    let defenderSL = parseInt(this.defender.testResult.SL);
  
    let differenceSL = 0;
    if (attackerSL >= defenderSL)
      {
        differenceSL = attackerSL - defenderSL;
        opposeResult.result = `<b>${this.attacker.speaker.alias}</b> won by ${differenceSL} SL`;
        opposeResult.speakerAttack= this.attacker.speaker
        opposeResult.speakerDefend = this.defender.speaker
        opposeResult.attackerTestResult = duplicate(this.attacker.testResult);
        opposeResult.defenderTestResult = duplicate(this.defender.testResult);
        if (!isNaN(opposeResult.attackerTestResult.damage))
        {
          let damageMultiplier = 1;
          let sizeDiff =  CONFIG.actorSizeNums[opposeResult.attackerTestResult.size] - CONFIG.actorSizeNums[opposeResult.defenderTestResult.size]
          damageMultiplier = sizeDiff < 0 ? 0 : sizeDiff
          if (opposeResult.attackerTestResult.trait)
          {
            if (sizeDiff >= 1)
            { 
              let SL = Number(opposeResult.attackerTestResult.SL)
              let unitValue = Number(opposeResult.attackerTestResult.roll.toString().split("").pop())

              let damageToAdd = unitValue - SL
              if (damageToAdd > 0)
                opposeResult.attackerTestResult.damage += damageToAdd
              
            }
            if (sizeDiff >= 2)
            {
              let unitValue = Number(opposeResult.attackerTestResult.roll.toString().split("").pop())
              opposeResult.attackerTestResult.damage += unitValue
            }
          }

          opposeResult.damage = 
          {
            description : `<b>Damage</b>: ${(opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier}`,
            value : (opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier
          };
        }
        else 
        {
          opposeResult.damage = 
          {
            description : `<b>Damage</b>: ?`,
            value : null
          };
        }
        if (opposeResult.attackerTestResult.hitloc)
          opposeResult.hitloc  = 
          {
            description : `<b>Hit Location</b>: ${opposeResult.attackerTestResult.hitloc.description}`,
            value : opposeResult.attackerTestResult.hitloc.result
          };
          
          
      }
      else
      {
        differenceSL = defenderSL - attackerSL;
        opposeResult.result = `<b>${this.defender.speaker.alias}</b> won by ${differenceSL} SL`;        
      }

      renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html => {
        let chatOptions = {
          user : game.user.id,
          content : html,
          "flags.opposeData" : opposeResult
        }
        this.startMessage.update(chatOptions).then(resultMsg =>{
          ui.chat.updateMessage(resultMsg)
          this.clearOpposed();

        })
      })
    }
    catch 
    {
      this.clearOpposed()
    }
  }

  static createOpposedStartMessage(speaker)
  {
    ChatMessage.create({
      user : game.user.id,
      content : `<div><b>${speaker.alias}<b> started an opposed test!<div>`
    }).then(msg => this.startMessage = msg)
  }

  static updateOpposedMessage(damageConfirmation, msgId)
  {
    let opposeMessage = game.messages.get(msgId)
    let newCard = {
      user : game.user.id,
      content : $(opposeMessage.data.content).append(`<div>${damageConfirmation}</div>`).html()
    }

    opposeMessage.update(newCard).then(resultMsg =>{
        ui.chat.updateMessage(resultMsg)
    })
  }

  static clearOpposed()
  {
    this.opposedInProgress = false;
    this.attacker = {};
    this.defender = {};
    this.startMessage = null;
  }
}