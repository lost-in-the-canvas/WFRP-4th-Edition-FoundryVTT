/**
 * Primary use of this hook is to intercept chat commands.
 * /char  - Begin character generation
 * /table - Roll on a table
 * /cond  - Lookup a condition
 * /name  - Generate a name
 * /avail - Start an item availability test
 */
Hooks.on("chatMessage", (html, content, msg) => {
    // Setup new message's visibility
    let rollMode = game.settings.get("core", "rollMode");
    if ( ["gmroll", "blindroll"].includes(rollMode) ) msg["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( rollMode === "blindroll" ) msg["blind"] = true;
    msg["type"] = 0;

    // Split input into arguments
    let command = content.split(" ").map(function(item) {
      return item.trim();
    })
    // Roll on a table
    if (command[0] == "/table")
    {
      // If no argument, display help menu
      if (command.length == 1)
        msg.content = WFRP_Tables.formatChatRoll("menu")
      else
      {
        // [0]: /table [1]: <table-name> [2]: argument1 [3]: argument2
        let modifier, column // Possible arguments
        // If argument 1 is a number use it as the modifier
        if (!isNaN(command[2]))  
        {
          modifier = parseInt(command[2]);
          column = command[3]
        }
        else // if argument 1 is not a number, use it as column
        {
          modifier = parseInt(command[3]),
          column = command[2]
        }
        // Call tables class to roll and return html
        msg.content = WFRP_Tables.formatChatRoll(command[1], {modifier : modifier}, column)
      }
      // Create message and return false to not display user input of `/table`
      if (msg)
        ChatMessage.create(msg);
      return false;
    }
    
    // Lookup a condition
    else if (command[0] == "/cond")
    {
      // Only one argument possible [1]: condition to lookup
      let conditionInput = command[1].toLowerCase();
      // Don't require spelling, match the closest condition to the input
      let closest = WFRP_Utility.matchClosest(WFRP4E.conditions, conditionInput)
      let description = WFRP4E.conditionDescriptions[closest];
      let name = WFRP4E.conditions[closest];
  
      // Create message and return false to not display user input of `/cond`
      msg.content = `<b>${name}</b><br>${description}`
      ChatMessage.create(msg);
      return false;
    }
    // Character generation
    else if (command[0] == "/char")
    {
      // Begin character generation, return false to not display user input of `/char`
      GeneratorWfrp4e.speciesStage()
      return false;
    }
    // Name generation
    else if (command[0] == "/name")
    {
      // Possible arguments - [2]: gender, [1]: species
      let gender = (command[2] || "").toLowerCase()
      let species = (command[1] || "").toLowerCase();
      // Call generator class to create name, create message, return false to not display user input of `/name`
      let name = NameGenWfrp.generateName({species, gender})
      ChatMessage.create(WFRP_Utility.chatDataSetup(name))
      return false;
    }
    // Availability test
    else if (command[0] == "/avail")
    {
      let modifier = 0;
      // Possible arguments - [1]: settlement size, [2]: item rarity [3*]: modifier 
      //If first arg is a number, we use it as modifier

      let settlement = (command[1] || "").toLowerCase();
      let rarity = (command[2] || "").toLowerCase();
      if(!isNaN(command[3]))
      {
        modifier = command[3];
      }
      
      // Call generator class to start the test, create message, return false to not display user input of `/avail`
      msg.content = MarketWfrp4e.testForAvailability({settlement, rarity, modifier});

      ChatMessage.create(msg);
      return false;
    }
  });