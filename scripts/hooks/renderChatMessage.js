Hooks.on("renderChatMessage", async (html, content, msg) => {
  
    if (game.settings.get("wfrp4e", "hideTestData") && !game.user.isGM && msg.find(".chat-card").attr("data-hide") == "true")
    {
      msg.find(".hide-option").remove();
    }
  });

  Hooks.on("renderRollTableConfig", async (obj, html, data) => {
    html[0].style.width = "725px"
  });
