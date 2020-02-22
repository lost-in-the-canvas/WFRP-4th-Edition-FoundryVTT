/**
 * This class is where all opposed rolls are calculated, both targeted and manual.
 * 
 * Manual flow: 
 * First click - attacker test result and speaker are stored, opposedInProgress flag raised, opposed roll message created (and stored for editing)
 * Second click - defender test result and speaker stored, opposed values compared, roll message updated with result.
 * 
 * Targeted flow:
 * Every roll (see roll overrides, ActorWfrp4e) checks to see if a target is selected, if so, handleOpposed is called. See this function for details
 * on how targeted opposed rolls are handled.
 */
class OpposedWFRP
{

  /**
   * The opposed button was clicked, evaluate whether it is an attacker or defender, then proceed
   * to evaluate if necessary.
   * 
   * @param {Object} event Click event for opposed button click
   */
  static opposedClicked(event)
  {
    let button = $(event.currentTarget),
      messageId = button.parents('.message').attr("data-message-id"),
      message = game.messages.get(messageId);
    let data = message.data.flags.data

    // If opposed already in progress, the click was for the defender
    if (this.opposedInProgress)
    {
      // If the startMessage still exists, proceed with the opposed test. Otherwise, start a new opposed test
      if (game.messages.get(this.startMessage._id)) 
        this.defenderClicked(data.postData, message.data.speaker)
      else
      {
        this.clearOpposed()
        this.opposedClicked(event);
      }
    }
    else // If no opposed roll in progress, click was for the attacker
    {
      this.opposedInProgress = true
      this.attackerClicked(data.postData, message.data.speaker)
    }
  }

  /**
   * Attacker starts an opposed test.
   * 
   * @param {Object} testResult Test result values
   * @param {Object} speaker actor, token, etc. for the attacker
   */
  static attackerClicked(testResult, speaker)
  {
    // Store attacker in object member
    this.attacker = {
      testResult: testResult,
      speaker: speaker
    }

    this.createOpposedStartMessage(speaker);
  }

  /**
   * Defender responds to an opposed test - evaluate result
   * 
   * @param {Object} testResult Test result values
   * @param {Object} speaker actor, token, etc. for the defender
   */
  static defenderClicked(testResult, speaker)
  {
    // Store defender in object member
    this.defender = {
      testResult: testResult,
      speaker: speaker
    }
    this.evaluateOpposedTest(this.attacker, this.defender);
  }

  /**
   * Main Opposed test evaluation logic. Takes attacker and defender test data and 
   * determines who won, by how much, etc. Displays who won accordingly, with different
   * logic for manual and targeted opposed tests
   * 
   * @param {Object} attacker Attacker data
   * @param {Object} defender Defender Data
   * @param {Object} options Targeted?
   */
  static evaluateOpposedTest(attacker, defender, options = {})
  {
    try
    {
      let opposeResult = {};
      let attackerSL = parseInt(attacker.testResult.SL);
      let defenderSL = parseInt(defender.testResult.SL);
      let differenceSL = 0;

      // If attacker has more SL OR the SLs are equal and the attacker's target number is greater than the defender's, then attacker wins. 
      // Note: I know this isn't technically correct by the book, where it states you use the tested characteristic/skill, not the target number, i'll be honest, I don't really care.
      if (attackerSL > defenderSL || (attackerSL == defenderSL && attacker.testResult.target > defender.testResult.target))
      {
        opposeResult.winner = "attacker"
        differenceSL = attackerSL - defenderSL;
        // Update message
        opposeResult.result =
          `<b>${attacker.speaker.alias}</b> won against <b>${defender.speaker.alias}</b> by ${differenceSL} SL`
        opposeResult.img = attacker.img;
        opposeResult.speakerAttack = attacker.speaker
        opposeResult.speakerDefend = defender.speaker
        opposeResult.attackerTestResult = duplicate(attacker.testResult);
        opposeResult.defenderTestResult = duplicate(defender.testResult);

        // If Damage is a numerical value
        if (!isNaN(opposeResult.attackerTestResult.damage))
        {
          // Calculate size damage multiplier 
          let damageMultiplier = 1;
          let sizeDiff = WFRP4E.actorSizeNums[opposeResult.attackerTestResult.size] - WFRP4E.actorSizeNums[opposeResult.defenderTestResult.size]
          damageMultiplier = sizeDiff >= 2 ? sizeDiff : 1

          // If the attacker is using a Trait0 to do damage, calculate damaging and impact if necessary
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

          opposeResult.damage = {
            description: `<b>${game.i18n.localize("Damage")}</b>: ${(opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier}`,
            value: (opposeResult.attackerTestResult.damage - defenderSL) * damageMultiplier
          };
        }
        // If attacker is using a weapon or trait but there wasn't a numerical damage value, output unknown
        else if (opposeResult.attackerTestResult.weapon || opposeResult.attackerTestResult.trait)
        {
          opposeResult.damage = {
            description: `<b>${game.i18n.localize("Damage")}</b>: ?`,
            value: null
          };
        }
        if (opposeResult.attackerTestResult.hitloc)
          opposeResult.hitloc = {
            description: `<b>${game.i18n.localize("ROLL.HitLocation")}</b>: ${opposeResult.attackerTestResult.hitloc.description}`,
            value: opposeResult.attackerTestResult.hitloc.result
          };
      }
      else // Defender won
      {
        opposeResult.winner = "defender"
        differenceSL = defenderSL - attackerSL;
        opposeResult.result = `<b>${defender.speaker.alias}</b> won against <b>${attacker.speaker.alias}</b> by ${differenceSL} SL`
        opposeResult.img = defender.img
      }

      // If targeting, Create a new result message
      if (options.target)
      {
        opposeResult.hideData = true;
        renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html =>
        {
          let chatOptions = {
            user: game.user.id,
            content: html,
            "flags.opposeData": opposeResult,
            "flags.startMessageId": options.startMessageId,
          }
          ChatMessage.create(chatOptions)
        })
      }
      else // If manual - update start message and clear opposed data
      {
        opposeResult.hideData = true;
        renderTemplate("systems/wfrp4e/templates/chat/opposed-result.html", opposeResult).then(html =>
        {
          let chatOptions = {
            user: game.user.id,
            content: html,
            "flags.opposeData": opposeResult
          }
          try
          {
            this.startMessage.update(chatOptions).then(resultMsg =>
            {
              ui.chat.updateMessage(resultMsg)
              this.clearOpposed();
            })
          }
          catch
          {
            ChatMessage.create(chatOptions)
            this.clearOpposed();
          }
        })
      }
    }
    catch (err)
    {
      ui.notifications.error(`${game.i18n.localize("Error.Opposed")}: ` + err)
      console.error("Could not complete opposed test: " + err)
      this.clearOpposed()
    }
  }

  // Opposed starting message - manual opposed
  static createOpposedStartMessage(speaker)
  {
    ChatMessage.create(
    {
      user: game.user.id,
      hideData: true,
      flags:
      {
        "opposedStartMessage": true
      },
      content: `<div><b>${speaker.alias}<b> ${game.i18n.localize("ROLL.OpposedStart")}<div>`
    }).then(msg => this.startMessage = msg)
  }

  // Update starting mesasge with result - manual opposed
  static updateOpposedMessage(damageConfirmation, msgId)
  {
    let opposeMessage = game.messages.get(msgId)
    let newCard = {
      user: game.user.id,
      hideData: true,
      content: $(opposeMessage.data.content).append(`<div>${damageConfirmation}</div>`).html()
    }

    opposeMessage.update(newCard).then(resultMsg =>
    {
      ui.chat.updateMessage(resultMsg)
    })
  }

  // Clear all opposed data - manual opposed
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
      { // So if data exists here, this actor has been targeted, see below for what kind of data is stored here
        let attackMessage = game.messages.get(actor.data.flags.oppose.messageId) // Retrieve attacker's test result message
        // Organize attacker/defender data
        let attacker = {
          speaker: actor.data.flags.oppose.speaker,
          testResult: attackMessage.data.flags.data.postData,
          img: WFRP_Utility.getSpeaker(actor.data.flags.oppose.speaker).data.img
        }
        let defender = {
          speaker: message.data.speaker,
          testResult: testResult,
          img: actor.data.msg
        } // evaluateOpposedTest is usually for manual opposed tests, it requires extra options for targeted opposed test
        await OpposedWFRP.evaluateOpposedTest(attacker, defender,
        {
          target: true,
          startMessageId: actor.data.flags.oppose.startMessageId
        })
        await actor.update(
        {
          "-=flags.oppose": null
        }) // After opposing, remove oppose

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
        game.user.targets.forEach(async target =>
        {
          let content =
            `<div class ="opposed-message">
            <b>${attacker.name}</b> ${game.i18n.localize("ROLL.Targeting")} <b>${target.data.name}</b>
          </div>
          <div class = "opposed-tokens">
          <div class = "attacker"><img src="${attacker.img}" width="50" height="50"/></div>
          <div class = "defender"><img src="${target.data.img}" width="50" height="50"/></div>
          </div>
          <div class="unopposed-button" data-target="true" title="${game.i18n.localize("Unopposed")}"><a><i class="fas fa-arrow-down"></i></a></div>`

          // Create the Opposed starting message
          let startMessage = await ChatMessage.create(
          {
            user: game.user._id,
            content: content,
            speaker: message.data.speaker,
            ["flags.unopposeData"]: // Optional data to resolve unopposed tests - used for damage values
            {
              attackMessageId: message.data._id,
              targetSpeaker:
              {
                scene: target.scene.data._id,
                token: target.data._id,
                scene: target.actor.data._id,
                alias: target.data.name
              }
            }
          })
          // Add oppose data flag to the target
          target.actor.update(
          {
            "flags.oppose":
            {
              speaker: message.data.speaker,
              messageId: message.data._id,
              startMessageId: startMessage.data._id
            }
          })
          // Remove current targets
          target.setTarget(false);
        })
      }
    }
    catch
    {
      await actor.update({"-=flags.oppose": null}) // If something went wrong, remove incoming opposed tests
    }
  }

  /**
   * Unopposed test resolution is an option after starting a targeted opposed test. Unopposed data is
   * stored in the the opposed start message. We can compare this with dummy values of 0 for the defender
   * to simulate an unopposed test. This allows us to calculate damage values for ranged weapons and the like.
   * 
   * @param {String} startMessageId Id of opposed start message
   */
  static async resolveUnopposed(startMessageId)
  {

    let startMessage = game.messages.get(startMessageId)
    let unopposeData = startMessage.data.flags.unopposeData;

    let attackMessage = game.messages.get(unopposeData.attackMessageId) // Retrieve attacker's test result message
    // Organize attacker data
    let attacker = {
      speaker: attackMessage.data.speaker,
      testResult: attackMessage.data.flags.data.postData,
    }
    // Organize dummy values for defender
    let target = canvas.tokens.get(unopposeData.targetSpeaker.token)
    let defender = {
      speaker: unopposeData.targetSpeaker,
      testResult:
      {
        SL: 0,
        size: target.actor.data.data.details.size.value,
        target: 0,
        roll: 0
      }
    }
    // Remove opposed flag
    await target.actor.update({"-=flags.oppose": null})
    // Evaluate
    this.evaluateOpposedTest(attacker, defender,
    {
      target: true,
      startMessageId: startMessageId
    })
  }

}