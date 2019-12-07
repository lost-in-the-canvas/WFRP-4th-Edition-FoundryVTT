Hooks.on("getChatLogEntryContext", (html, options) => {
  let canApply = li => li.find(".opposed-card").length;
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
      callback: li => console.log(li)
    },
    {
      name: "Apply Damage (Ignore TB)",
      icon: '<i class="fas fa-fist-raised"></i>',
      condition: canApply,   
      callback: li => console.log(li)
    },
    {
      name: "Apply Damage (Ignore TB and AP)",
      icon: '<i class="fas fa-skull-crossbones"></i>',
      condition: canApply,   
      callback: li => console.log(li)
    })
  })