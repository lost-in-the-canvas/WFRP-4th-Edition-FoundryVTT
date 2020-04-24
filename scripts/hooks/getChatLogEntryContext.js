/**
 * Add right click option to damage chat cards to allow application of damage
 * Add right click option to use fortune point on own rolls
 */
Hooks.on("getChatLogEntryContext", (html, options) => {
  let canApply = li => li.find(".opposed-card").length;
  let canApplyFortuneReroll = function(li){
    //Condition to have the fortune contextual options:
    //Have a selected character
    //Have fortune point
    //Own the roll
    //Once per roll (or at least, not on a reroll card)
    //Test must be failed 
    //If opposed, test must be over
    let result = false;
    if(game.user.character && game.user.character.data.data.status.fortune.value > 0)
    {
      let testcard = li.find(".test-data");
      let message = game.messages.get(li.attr("data-message-id"));
      if(testcard.length && message.data.speaker.actor == game.user.character._id && !message.data.flags.data.fortuneUsedReroll)
      {
        //If the test was unopposed and failed
        if(!message.data.flags.data.isOpposedTest && message.data.flags.data.postData.roll > message.data.flags.data.postData.target)
          result = true;
        else if(message.data.flags.data.defenderMessage) //If the player was the attacker
        {
          let defenderMessage = game.messages.get(message.data.flags.data.defenderMessage);
          let attackerSL = Math.trunc(message.data.flags.data.postData.SL);
          let defenderSL = Math.trunc(defenderMessage.data.flags.data.postData.SL);
          //If the attacker lost
          if(attackerSL < defenderSL || (attackerSL == defenderSL && message.data.flags.data.postData.target <= defenderMessage.data.flags.data.postData.target))
            result = true;
        }
        else if(message.data.flags.data.attackerMessage) //If the player was the defender
        {
          let attackerMessage = game.messages.get(message.data.flags.data.attackerMessage);
          let attackerSL = Math.trunc(attackerMessage.data.flags.data.postData.SL);
          let defenderSL = Math.trunc(message.data.flags.data.postData.SL);
          //If the attacker won
          if(attackerSL > defenderSL || (attackerSL == defenderSL && attackerMessage.data.flags.data.postData.target > message.data.flags.data.postData.target))
            result = true;
        }
      }
    }
    return result;
  };
  let canApplyFortuneAddSL = function(li){
    //Condition to have the fortune contextual options:
    //Have a selected character
    //Have fortune point
    //Own the roll
    //Once per roll (or at least, not on a reroll card)
    let result = false;
    if(game.user.character && game.user.character.data.data.status.fortune.value > 0)
    {
      let testcard = li.find(".test-data");
      let message = game.messages.get(li.attr("data-message-id"));
      if(testcard.length && message.data.speaker.actor == game.user.character._id && !message.data.flags.data.fortuneUsedAddSL)
        if(!message.data.flags.data.isOpposedTest || message.data.flags.data.defenderMessage)
          result = true;
    }
     return result;
  };
  let canApplyDarkDeals = function(li){
    //Condition to have the darkdeak contextual options:
    //Have a selected character
    //Own the roll
    let result = false;
    if(game.user.character)
    {
      let testcard = li.find(".test-data");
      let message = game.messages.get(li.attr("data-message-id"));
      if(testcard.length && message.user.data.character == game.user.character._id)
        if(!message.data.flags.data.isOpposedTest || message.data.flags.data.defenderMessage)
          result = true;
    }
     return result;
  };
  options.push(
    {
      name: "Apply Damage",
      icon: '<i class="fas fa-user-minus"></i>',   
      condition: canApply,   
      callback: li => {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWfrp4e.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.NORMAL)
        OpposedWFRP.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore AP)",
      icon: '<i class="fas fa-user-shield"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWfrp4e.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_AP)
        OpposedWFRP.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore TB)",
      icon: '<i class="fas fa-fist-raised"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWfrp4e.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_TB)
        OpposedWFRP.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Apply Damage (Ignore TB and AP)",
      icon: '<i class="fas fa-skull-crossbones"></i>',
      condition: canApply,   
      callback: li =>  {
        let cardData = game.messages.get(li.attr("data-message-id")).data.flags.opposeData
        let defenderSpeaker = game.messages.get(li.attr("data-message-id")).data.flags.opposeData.speakerDefend;
        let updateMsg = ActorWfrp4e.applyDamage(defenderSpeaker, cardData, DAMAGE_TYPE.IGNORE_ALL)
        OpposedWFRP.updateOpposedMessage(updateMsg, li.attr("data-message-id") );
      }
    },
    {
      name: "Use a Fortune point to reroll",
      icon: '<i class="fas fa-dice"></i>',
      condition: canApplyFortuneReroll,   
      callback: li =>  {
        let message = game.messages.get(li.attr("data-message-id"));
        game.user.character.useFortuneOnRoll(message,"reroll");
      }
    },
    {
      name: "Use a Fortune point to add +1 SL",
      icon: '<i class="fas fa-plus-square"></i>',
      condition: canApplyFortuneAddSL,   
      callback: li =>  {
        let message = game.messages.get(li.attr("data-message-id"));
        game.user.character.useFortuneOnRoll(message,"addSL");
      }
    },
    {
      name: "Take a Dark Deal to reroll (+1 Corruption)",
      icon: '<i class="fas fa-pen-nib"></i>',
      condition: canApplyDarkDeals,   
      callback: li =>  {
        let message = game.messages.get(li.attr("data-message-id"));
        game.user.character.useDarkDeal(message);
      }
    })
  })