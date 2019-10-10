
Hooks.on("chatMessage", (html, content, msg) => {
  content = content.toLowerCase();

  let rollMode = game.settings.get("core", "rollMode");
  if ( ["gmroll", "blindroll"].includes(rollMode) ) msg["whisper"] = ChatMessage.getWhisperIDs("GM");
  if ( rollMode === "blindroll" ) msg["blind"] = true;
  msg["type"] = 0;

  let command = content.split(" ").map(function(item) {
    return item.trim();
  })
  if (command[0] == "/table")
  {
    if (command.length == 1)
      msg.content = WFRP_Tables.formatChatRoll("menu")
    else
    {
      modifier = parseInt(command[2]);
      msg.content = WFRP_Tables.formatChatRoll(command[1], {modifier : modifier})
    }
	ChatMessage.create(msg);
	return false;
  }

  else if (command[0] == "/cond")
  {
    let conditionInput = command[1].toLowerCase();
    let condList = Object.keys(CONFIG.conditions);
    let match = [];
    for (let cond of condList)
    {
      let percentage = 0;
      let matchCounter = 0;
      for (let i = 0; i < cond.length; i++)
      {
        if (cond[i] == conditionInput[i])
        {
          matchCounter++;
        }
      }
      percentage = matchCounter / cond.length;
      match.push(percentage);
    }
    let maxIndex = match.indexOf(Math.max.apply(Math, match));
    let description = CONFIG.conditionDescriptions[condList[maxIndex]];
    let name = CONFIG.conditions[condList[maxIndex]];

    msg.content = `<b>${name}</b><br>${description}`
	ChatMessage.create(msg);
	return false;
  }

});