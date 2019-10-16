Hooks.on("renderJournalSheet", (obj, html, data) => {
  $(html).find(".close").attr("title", "Close");
  $(html).find(".entry-image").attr("title", "Image");
  $(html).find(".entry-text").attr("title", "Text");
  $(html).find(".share-image").attr("title", "Show Image");
})
