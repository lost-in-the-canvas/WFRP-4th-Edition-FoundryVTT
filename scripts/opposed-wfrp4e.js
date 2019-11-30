class OpposedWFRP {
    /**
     * This class is the handler for opopsed tests
     */

    static opposedClicked(event)
    {
      let button = $(event.currentTarget),
      messageId = button.parents('.message').attr("data-message-id"),
      message = game.messages.get(messageId);
      let data = message.data.flags.data
      let actor = game.actors.get(message.data.speaker.actor);

      if (this.opposedInProgress)
        this.defenderClicked(data.postData, actor)
      else
      {
        this.opposedInProgress = true
        this.attackerClicked(data.postData, actor)
      }
    }

    static attackerClicked(testResult, actor)
    {
      this.attacker = {
        testResult : testResult,
        actor : actor
      }

      this.createOpposedStartMessage(actor);

    }

    static defenderClicked(testResult, actor)
    {
      this.defender = {
        testResult : testResult,
        actor : actor
      }

      this.evaluateOpposedTest();
    }
   
    static evaluateOpposedTest()
    {

      let opposeResult = {};
      let attackerSL = parseInt(this.attacker.testResult.SL);
      let defenderSL = parseInt(this.defender.testResult.SL);
    
      let differenceSL = 0;
      if (attackerSL >= defenderSL)
        {
          differenceSL = attackerSL - defenderSL;
          opposeResult.result = `<b>${this.attacker.actor.name}</b> won by ${differenceSL} SL`;
          if (this.attacker.testResult.damage)
            opposeResult.damage = 
            {
              description : `<b>Damage</b>: ${this.attacker.testResult.damage + differenceSL}`,
              value : this.attacker.testResult.damage + differenceSL
            };
          if (this.attacker.testResult.hitloc)
            opposeResult.hitloc  = 
            {
              description : `<b>Hit Location</b>: ${this.attacker.testResult.hitloc.description}`,
              value : this.attacker.testResult.hitloc.result
            };
            
            
        }
        else
        {
          differenceSL = defenderSL - attackerSL;
          opposeResult.result = `<b>${this.defender.actor.name}</b> won by ${differenceSL} SL`;        
        }

        renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html => {
          let chatOptions = {
            user : game.user.id,
            content : html,
            "flags.opposeResult" : opposeResult
          }
          this.startMessage.update(chatOptions).then(resultMsg =>{
            ui.chat.updateMessage(resultMsg)
            this.clearOpposed();

          })
        })
    }

    static createOpposedStartMessage(actor)
    {
      ChatMessage.create({
        user : game.user.id,
        content : `<b>${actor.name}<b> started an opposed test!`
      }).then(msg => this.startMessage = msg)
    }

    static clearOpposed()
    {
      this.opposedInProgress = false;
      this.attacker = {};
      this.defender = {};
      this.startMessage = null;
    }
  }