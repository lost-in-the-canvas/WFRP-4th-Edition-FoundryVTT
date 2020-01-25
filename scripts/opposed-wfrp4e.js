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

    this.evaluateOpposedTest(this.attacker, this.defender);
  }
  
  static evaluateOpposedTest(attacker, defender, options = {})
  {
    let result;
    try {
    let opposeResult = {};
    let attackerSL = parseInt(attacker.testResult.SL);
    let defenderSL = parseInt(defender.testResult.SL);
  
    let differenceSL = 0;
    if (attackerSL > defenderSL || (attackerSL == defenderSL && attacker.testResult.target > defender.testResult.target))
    {
      opposeResult.winner = "attacker"
      differenceSL = attackerSL - defenderSL;
      opposeResult.result = 
      `<b>${attacker.speaker.alias}</b> won against <b>${defender.speaker.alias}</b> by ${differenceSL} SL`
      opposeResult.img = attacker.img;
      opposeResult.speakerAttack= attacker.speaker
      opposeResult.speakerDefend = defender.speaker
      opposeResult.attackerTestResult = duplicate(attacker.testResult);
      opposeResult.defenderTestResult = duplicate(defender.testResult);
      if (!isNaN(opposeResult.attackerTestResult.damage))
      {
        let damageMultiplier = 1;
        let sizeDiff =  WFRP4E.actorSizeNums[opposeResult.attackerTestResult.size] - WFRP4E.actorSizeNums[opposeResult.defenderTestResult.size]
        damageMultiplier = sizeDiff >= 2 ? sizeDiff : 1
        if (opposeResult.attackerTestResult.trait)
        {
          if (sizeDiff >= 1)
          { 
            let SL = Number(opposeResult.attackerTestResult.SL)
            let unitValue = Number(opposeResult.attackerTestResult.roll.toString().split("").pop())
            if (unitValue == 0)
              unitValue = 10;
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
      else if (opposeResult.attackerTestResult.weapon || opposeResult.attackerTestResult.trait)
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
        opposeResult.winner = "defender"
        differenceSL = defenderSL - attackerSL;
        opposeResult.result = `<b>${defender.speaker.alias}</b> won against <b>${attacker.speaker.alias}</b> by ${differenceSL} SL`
        opposeResult.img = defender.img
      }

      if (options.target)
      {
        opposeResult.hideData = true;
        renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html => {
          let chatOptions = {
            user : game.user.id,
            content : html,
            "flags.opposeData" : opposeResult,
            "flags.startMessageId" : options.startMessageId,
          }
            ChatMessage.create(chatOptions)
        })
      }
      else 
      {
        opposeResult.hideData = true;
        renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html => {
          let chatOptions = {
            user : game.user.id,
            content : html,
            "flags.opposeData" : opposeResult
          }
          try {
            this.startMessage.update(chatOptions).then(resultMsg =>{
              ui.chat.updateMessage(resultMsg)
              this.clearOpposed();
            })
          }
          catch {
            ChatMessage.create(chatOptions)
            this.clearOpposed();
          }
        })
      }
    }
    catch (err)
    {
      console.error("Could not complete opposed test: " + err)
      ui.notifications.error("Could not complete opposed test: " + err)
      this.clearOpposed()
    }
  }

  static createOpposedStartMessage(speaker)
  {
    ChatMessage.create({
      user : game.user.id,
      hideData : true,
      content : `<div><b>${speaker.alias}<b> started an opposed test!<div>`
    }).then(msg => this.startMessage = msg)
  }

  static updateOpposedMessage(damageConfirmation, msgId)
  {
    let opposeMessage = game.messages.get(msgId)
    let newCard = {
      user : game.user.id,
      hideData : true,
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

  /**
   * Determines opposed status, sets flags accordingly, creates start/result messages.
   *
   * There's 3 paths handleOpposed can take, either 1. Responding to being targeted, 2. Starting an opposed test, or neither.
   *
   * 1. Responding to a target: If the actor has a value in flags.oppose, that means another actor targeted them: Organize
   *    attacker and defender data, and send it to the OpposedWFRP.evaluateOpposedTest() method. Afterward, remove the oppose
   *    flag
   * 2. Starting an opposed test: If the user using the actor has a target, start an opposed Test: create the message then
   *    insert oppose data into the target's flags.oppose object.
   * 3. Neither: If no data in the actor's oppose flags, and no targets, skip everything and return.
   *
   *
   * @param {Object} message    The message created by the override (see above) - this message is the Test result message.
   */
  static async handleOpposedTarget(message)
  {
    // Get actor/tokens and test results
    let actor = WFRP_Utility.getSpeaker(message.data.speaker)
    let testResult = message.data.flags.data.postData

    try 
    {
      /* -------------- IF OPPOSING AFTER BEING TARGETED -------------- */
      if (actor.data.flags.oppose) // If someone targets an actor, they insert data in the target's flags.oppose
      {                            // So if data exists here, this actor has been targeted, see below for what kind of data is stored here
        let attackMessage = game.messages.get(actor.data.flags.oppose.messageId) // Retrieve attacker's test result message
        // Organize attacker/defender data
        let attacker = {
          speaker : actor.data.flags.oppose.speaker,
          testResult : attackMessage.data.flags.data.postData,
          img : WFRP_Utility.getSpeaker(actor.data.flags.oppose.speaker).data.img
        }
        let defender = {
          speaker : message.data.speaker,
          testResult : testResult,
          img : actor.data.msg
        }                             // evaluateOpposedTest is usually for manual opposed tests, it requires extra options for targeted opposed test
        await OpposedWFRP.evaluateOpposedTest(attacker, defender, {target : true, startMessageId : actor.data.flags.oppose.startMessageId})
        await actor.update({"-=flags.oppose" : null}) // After opposing, remove oppose

      }

      /* -------------- IF TARGETING SOMEONE -------------- */
      else if (game.user.targets.size) // if user using the actor has targets
      {
        let attacker;
        // If token data was found in the message speaker (see setupCardOptions)
        if (message.data.speaker.token)
          attacker = canvas.tokens.get(message.data.speaker.token).data

        else // If no token data was found in the speaker, use the actor's token data instead
          attacker = actor.data.token

        // For each target, create a message, and insert oppose data in the targets' flags
        game.user.targets.forEach(async target => {
          let content =
          `<div class ="opposed-message">
            <b>${attacker.name}</b> is targeting <b>${target.data.name}</b>
          </div>
          <div class = "opposed-tokens">
          <div class = "attacker"><img src="${attacker.img}" width="50" height="50"/></div>
          <div class = "defender"><img src="${target.data.img}" width="50" height="50"/></div>
          </div>
          <div class="unopposed-button" data-target="true" title="Unopposed"><a><i class="fas fa-arrow-down"></i></a></div>`

          // Create the Opposed starting message
          //let startMessage = await ChatMessage.create({user : game.user._id, content : content, speaker : message.data.speaker, timestamp : message.data.timestamp - 1})
          let startMessage = await ChatMessage.create(
            {
              user : game.user._id, 
              content : content, 
              speaker : message.data.speaker,
              ["flags.unopposeData"] : {
                attackMessageId : message.data._id, 
                targetSpeaker: {
                  scene: target.scene.data._id,
                  token: target.data._id,
                  scene: target.actor.data._id,
                  alias: target.data.name
                }}
            })
          // Add oppose data flag to the target
          target.actor.update({"flags.oppose" : {speaker : message.data.speaker, messageId : message.data._id, startMessageId : startMessage.data._id}})
          // Remove current targets
          target.setTarget(false);
        })
      }
    }
    catch
    {
      await actor.update({"-=flags.oppose" : null}) // If something went wrong, remove incoming opposed tests
    }
  }

  static async resolveUnopposed(startMessageId)
  {

    let startMessage = game.messages.get(startMessageId)
    let unopposeData = startMessage.data.flags.unopposeData;

    let attackMessage = game.messages.get(unopposeData.attackMessageId) // Retrieve attacker's test result message
    // Organize attacker/defender data
    let attacker = {
      speaker : attackMessage.data.speaker,
      testResult : attackMessage.data.flags.data.postData,
    }

    let target = canvas.tokens.get(unopposeData.targetSpeaker.token)
    let defender = {
      speaker : unopposeData.targetSpeaker,
      testResult : {
        SL : 0,
        size : target.actor.data.data.details.size.value,
        target : 0,
        roll : 0
      }
    }

    await target.actor.update({"-=flags.oppose" : null})

    this.evaluateOpposedTest(attacker, defender, {target: true, startMessageId : startMessageId})
  }
  
}