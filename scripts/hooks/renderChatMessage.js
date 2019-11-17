Hooks.on("renderChatMessage", async (html, content, msg) => {
  
    if (game.settings.get("wfrp4e", "hideTestData") && !game.user.isGM && msg.find(".chat-card").attr("data-hide") == "true")
    {
      msg.find(".hide-option").remove();
    }

    if (!game.user.isGM)
    {
      msg.find(".chat-buttons").remove();
    }

    msg.find(".post-item")[0].setAttribute("draggable", true);

    msg.find(".post-item")[0].addEventListener('dragstart', ev => {
      ev.dataTransfer.setData("text/plain", $(ev.currentTarget).attr("data-transfer"));
    })
  });
