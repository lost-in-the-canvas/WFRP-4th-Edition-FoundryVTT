Hooks.on("renderChatMessage", async (app, html, msg) => {
  
  if (game.settings.get("wfrp4e", "hideTestData") && !game.user.isGM && html.find(".chat-card").attr("data-hide") == "true")
  {
    html.find(".hide-option").remove();
  }

  if (!game.user.isGM)
  {
    html.find(".chat-buttons").remove();
  }

  let postedItem = html.find(".post-item")[0]
  if (postedItem)
  {
    postedItem.setAttribute("draggable", true);

    postedItem.addEventListener('dragstart', ev => {
      ev.dataTransfer.setData("text/plain", $(ev.currentTarget).attr("data-transfer"));
    })
  }
});
