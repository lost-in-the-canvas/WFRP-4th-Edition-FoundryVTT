/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */
Hooks.on("ready", async () => {

    // Localize strings in the WFRP4E object
    for (let obj in WFRP4E)
    {
      for (let el in WFRP4E[obj])
      {
        if (typeof WFRP4E[obj][el] === "string")
        {
          WFRP4E[obj][el] = game.i18n.localize(WFRP4E[obj][el])
        }
      }
    }
  
    let activeModules = game.settings.get("core", "moduleConfiguration");
   
    // Load module tables if the module is active and if the module has tables
     for (let m in activeModules)
     {
       let module;
       if (activeModules[m])
       {
        
          try{
          await FilePicker.browse("user", `modules/${m}/tables`).then(resp => {

           if (resp.error || !resp.target.includes("tables"))
             throw ""
           for (var file of resp.files)
           {
             try {
               if (!file.includes(".json"))
                 continue
               let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));
   
               fetch(file).then(r=>r.json()).then(async records => {
                // If extension of a table, add it to the columns
                if(records.extend && WFRP_Tables[filename])
                {
                  WFRP_Tables[filename].columns = WFRP_Tables[filename].columns.concat(records.columns)
                   WFRP_Tables[filename].rows.forEach((obj, row) => {
                    for (let c of records.columns)
                      WFRP_Tables[filename].rows[row].range[c] = records.rows[row].range[c]
                   })
                }
                else // If not extension, load table as its filename
                  WFRP_Tables[filename] = records;
               })
             }
             catch(error) {
              console.error("Error reading " + file + ": " + error)
             }
           }
         })
          }
         catch {
         }
       }
     }

     // Load tables from world if it has a tables folder
     await FilePicker.browse("user", `worlds/${game.world.name}/tables`).then(resp => {
      try 
      {
      if (resp.error || !resp.target.includes("tables"))
        throw ""
      for (var file of resp.files)
      {
        try {
          if (!file.includes(".json"))
            continue
          let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));

          fetch(file).then(r=>r.json()).then(async records => {
            // If extension of a table, add it to the columns
            if(records.extend && WFRP_Tables[filename])
            {
              WFRP_Tables[filename].columns = WFRP_Tables[filename].columns.concat(records.columns)
              WFRP_Tables[filename].rows.forEach((obj, row) => {
                for (let c of records.columns)
                  WFRP_Tables[filename].rows[row].range[c] = records.rows[row].range[c]
              })
            }
            else // If not extension, load table as its filename
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

  // ***** FVTT functions with slight modification to include pseudo entities *****

  TextEditor._replaceContentLinks = (match, entityType, id, name) => {

    // Match Compendium content
    if ( entityType === "Compendium" ) {
      return TextEditor._replaceCompendiumLink(match, id, name);
    }

    else if (PSEUDO_ENTITIES.includes(entityType))
    {
      return WFRP_Utility._replaceCustomLink(match, entityType, id, name)
    }

    // Match World content
    else {
      return TextEditor._replaceEntityLink(match, entityType, id, name);
    }
  }

 TextEditor.enrichHTML = (content, {secrets=false, entities=true, links=true}={}) => {
   let html = document.createElement("div");
   html.innerHTML = content;

   // Strip secrets
   if ( !secrets ) {
     let elements = html.querySelectorAll("section.secret");
     elements.forEach(e => e.parentNode.removeChild(e));
   }

   // Match content links
   if ( entities ) {
     const entityTypes = CONST.ENTITY_LINK_TYPES.concat("Compendium").concat(PSEUDO_ENTITIES);
     const entityMatchRgx = `@(${entityTypes.join("|")})\\[([^\\]]+)\\](?:{([^}]+)})?`;
     const rgx = new RegExp(entityMatchRgx, 'g');

     // Find and preload compendium indices
     const matches = Array.from(html.innerHTML.matchAll(rgx));
     if ( matches.length ) TextEditor._preloadCompendiumIndices(matches);

     // Replace content links
     html.innerHTML = html.innerHTML.replace(rgx, TextEditor._replaceContentLinks.bind(TextEditor));
   }

   // Replace hyperlinks
   if ( links ) {
     let rgx = /(?:[^\S]|^)((?:(?:https?:\/\/)|(?:www\.))(?:\S+))/gi;
     html.innerHTML = html.innerHTML.replace(rgx, TextEditor._replaceHyperlinks);
   }

   return html.innerHTML;
 };



 game.socket.on("system.wfrp4e", clicked => {
   canvas.draw();
 })


 const NEEDS_MIGRATION_VERSION = 1.0;
 let needMigration
 try 
 {
  needMigration = game.settings.get("wfrp4e", "systemMigrationVersion") < NEEDS_MIGRATION_VERSION;
 }
 catch 
 {
  needMigration = true;
 }
 if (needMigration && game.user.isGM ) 
 {
  new Dialog({
    title: "Migration",
    content: `<p style="color:#CCC;">A migration process is recommended for version ${game.system.data.version}. Before you do so, <b>please backup your world folder</b>. You will be reprompted for migration upon reload.<br><br>
    Migration Details:<br>
    - Changes Weapon data structure. Weapon damage will have to be reentered if migration is skipped.<br>
    - Upon migration, check to verify if any existing unlinked tokens in scenes have their appropriate weapon damage values<br><br><br></p>`,
    buttons: {
      migrate: {
        label : "Begin Migration",
        callback : html => Migration.migrateWorld()
      },
      skip : {
        label : "Skip Migration",
        callback: html => {}
      }
    }
  }).render(true)
 }
})


   