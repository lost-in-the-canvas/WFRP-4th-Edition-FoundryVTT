Hooks.on("chatMessage", (html, content, msg) => {
  
    let rollMode = game.settings.get("core", "rollMode");
    if ( ["gmroll", "blindroll"].includes(rollMode) ) msg["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( rollMode === "blindroll" ) msg["blind"] = true;
    msg["type"] = 0;

    console.log(html);
  
    let command = content.split(" ").map(function(item) {
      return item.trim();
    })
    if (command[0] == "/table")
    {
      if (command.length == 1)
        msg.content = WFRP_Tables.formatChatRoll("menu")
      else
      {
        let modifier, column
        if (!isNaN(command[2]))
        {
          modifier = parseInt(command[2]);
          column = command[3]
        }
        else 
        {
          modifier = parseInt(command[3]),
          column = command[2]
        }
        msg.content = WFRP_Tables.formatChatRoll(command[1], {modifier : modifier}, column)
      }
      if (msg)
        ChatMessage.create(msg);
      return false;
    }
  
    else if (command[0] == "/cond")
    {
      let conditionInput = command[1].toLowerCase();
      let closest = WFRP_Utility.matchClosest(WFRP4E.conditions, conditionInput)
      let description = WFRP4E.conditionDescriptions[closest];
      let name = WFRP4E.conditions[closest];
  
      msg.content = `<b>${name}</b><br>${description}`
      ChatMessage.create(msg);
      return false;
    }
    else if (command[0] == "/char")
    {
      GeneratorWfrp4e.speciesStage()
      return false
    }
    else if (command[0] == "/name")
    {
      let gender = (command[1] || "").toLowerCase()
      let species = (command[2] || "").toLowerCase();
      let name = NameGenWfrp4e.generateName({species, gender})
      ChatMessage.create(WFRP_Utility.chatDataSetup(name))
      return false
    }
  });