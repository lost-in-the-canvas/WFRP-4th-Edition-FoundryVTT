Hooks.on("createChatMessage", (html, content, msg) => {

  if ($(content.content).find(".opposed-card").length && (game.user.isGM))
  {
    let winner = content.flags.opposeData.winner;
    let startMessage = game.messages.get(content.flags.startMessageId)
    let loser = winner == "attacker" ? "defender" : "attacker"
    // forgive me but i'm too tired to deal with jquery

    newContent = startMessage.data.content.replace(winner, `${winner} winner`)
    newContent = newContent.replace(loser, `${loser} loser`)

    let cardData = {
      user : game.user._id,
      content: newContent
    }
    startMessage.update(cardData).then(resultCard => {
      ui.chat.updateMessage(resultCard)
    })
  }
  });