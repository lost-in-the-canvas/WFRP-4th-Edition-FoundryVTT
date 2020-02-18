/**
 * This hook is only used to color code the winner/loser of an opposed test
 * When the result card shows up, take the start message and apply classes to it
 */
Hooks.on("createChatMessage", (html, content, msg) => {

  // If message has the opposed class signifying an opposed result
  if ($(content.content).find(".opposed-card").length && (game.user.isGM))
  {
    // Look in the flags for the winner and startMessage
    let winner = content.flags.opposeData.winner;
    let startMessage = game.messages.get(content.flags.startMessageId)
    // The loser is "attacker" or "defender"
    let loser = winner == "attacker" ? "defender" : "attacker"
    // forgive me but i'm too tired to deal with jquery

    // Replace "attacker" with "attacker winner" or "defender" with "defender winner" to apply the color coded borders
    newContent = startMessage.data.content.replace(winner, `${winner} winner`)
    newContent = newContent.replace(loser, `${loser} loser`)

    // Update card with new content
    let cardData = {
      user : game.user._id,
      content: newContent
    }
    startMessage.update(cardData).then(resultCard => {
      ui.chat.updateMessage(resultCard)
    })
  }
});