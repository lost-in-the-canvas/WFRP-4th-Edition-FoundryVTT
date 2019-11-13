Hooks.on("ready", async () => {
  
    let activeModules = game.settings.get("core", "moduleConfiguration");
   
     for (let m in activeModules)
     {
       let module;
       if (activeModules[m])
       {
         game.socket.emit("getFiles", `modules/${m}/tables`, {}, resp => {
           try 
           {
           if (resp.error || !resp.baseDir.includes("tables"))
             throw ""
           for (var file of resp.files)
           {
             try {
               if (!file.includes(".json"))
                 throw "Not JSON file"
               let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));
   
               fetch(file).then(r=>r.json()).then(async records => {
                WFRP_Tables[filename] = records;
               })
             }
             catch(error) {
              console.error("Error reading " + file + ": " + error)
             }
           }
         }
         catch
         {
           // Do nothing
         }
         })
       }
     }

    
    // let table = await RollTable.create({name: WFRP_Tables.wrath.name, formula : WFRP_Tables.wrath.die})
    // let loc = 1
    // while(loc <  WFRP_Tables.wrath.rows.length)
    // {
    //     let row = WFRP_Tables.wrath.rows[loc]
    //     let startRange = loc;
    //     let endRange = -1;
    //     try {
    //     while (WFRP_Tables.wrath.rows[loc+1].description == row.description)
    //     {
    //       loc++;
    //     }
    //     }
    //     catch{}

    //     endRange = loc;
    //     console.log(startRange, endRange)
    //     await table.createTableResult({range : [startRange, endRange], text: `<b>${row.name}</b>: ${row.description}`, type : 0, weight: 1})
    //     loc++
    // }

      /* -------------------------------------------- */    


         
  // RollTables._displayChatResult = function(result, speaker) {

  //   // Basic chat message data
  //   const chatData = {
  //     user: game.user._id,
  //     type: CHAT_MESSAGE_TYPES.OTHER,
  //     speaker: speaker
  //   };

  //   // Toggle default roll mode
  //   let rollMode = game.settings.get("core", "rollMode");
  //   if ( ["gmroll", "blindroll"].includes(rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
  //   if ( rollMode === "blindroll" ) chatData["blind"] = true;

  //   // Toggle the result format
  //   let text = result.text;
  //   if ( result.type === TABLE_RESULT_TYPES.ENTITY ) {
  //     text = `@${result.collection}[${result.text}]`;
  //   }

  //   // Render the template
  //   chatData["content"] = `
  //   <div class="table-result" data-table-id="${this._id}" data-result-id="${result.id}">
  //       <img class="result-image" src="${result.img || CONFIG.RollTable.resultIcon}"/>
  //       <p class="result-text">${text}</p>
  //   </div>`;

  //   // Create the chat message
  //   return ChatMessage.create(chatData);
  // }

})


   