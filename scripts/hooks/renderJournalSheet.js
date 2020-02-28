/**
 * Adds tooltips to journal sheet buttons and adds listeners for pseudo entities
 */
Hooks.on("renderJournalSheet", (obj, html, data) => {
    $(html).find(".close").attr("title", "Close");
    $(html).find(".entry-image").attr("title", "Image");
    $(html).find(".entry-text").attr("title", "Text");
    $(html).find(".share-image").attr("title", "Show Image");

    // ---- Listen for custom entity links -----
    html.on("click", ".chat-roll", ev => {
      WFRP_Utility.handleRollClick(ev)
    })

    html.on("click", ".symptom-tag", ev => {
      WFRP_Utility.handleSymptomClick(ev)
    })

    html.on("click", ".condition-chat", ev => {
      WFRP_Utility.handleConditionClick(ev)
    })

    html.on('mousedown', '.table-click', ev => {
      WFRP_Utility.handleTableClick(ev)
    })
  })
  