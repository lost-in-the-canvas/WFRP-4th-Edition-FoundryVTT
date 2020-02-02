
class WFRP_Tables {


    static convert()
    {
      let newTable  = {}
      for (let table in WFRP_Tables)
      {
        if (table == "scatter" || table == "winds")
          continue;
        newTable.name = WFRP_Tables[table].name
        newTable.die = WFRP_Tables[table].die
        newTable.rows = [];
    
        let startIndex= 1
        let end;
        for (let index = 2; index < WFRP_Tables[table].rows.length; index++)
        {
          if (WFRP_Tables[table].rows[index].description != WFRP_Tables[table].rows[startIndex].description)
          {
            end = index-1
            
            WFRP_Tables[table].rows[startIndex].range = [startIndex, end]
            newTable.rows.push(WFRP_Tables[table].rows[startIndex])
            startIndex = index;
          }
        }

        end = WFRP_Tables[table].rows.length-1
            
        WFRP_Tables[table].rows[startIndex].range = [startIndex, end]
        newTable.rows.push(WFRP_Tables[table].rows[startIndex])

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ " + table + " @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(JSON.stringify(newTable))
      }
    }


    static rollTable(table, options = {}, column = null)
    {

      let modifier = options.modifier || 0;
      let minOne = options.minOne || false;
      let maxSize = options.maxSize || false;
  
      table = table.toLowerCase();
      if (this[table])
      {
        // cap at 100
        let die = this[table].die;
        let tableSize;
        if (!this[table].columns)
          tableSize = this[table].rows[this[table].rows.length - 1].range[1];
        else
        {
          tableSize = this[table].rows[this[table].rows.length - 1].range[this[table].columns[0]][1]; // This isn't confusing at all
        }
        if (!die)
          die = `1d${tableSize}`;
        let roll = new Roll(`${die} + @modifier`, {modifier}).roll();
        let rollValue = options.lookup || roll.total; // options.lookup will ignore the rolled value for the input value
        let displayTotal = options.lookup || roll.result;
        if (modifier == 0)
          displayTotal = eval(displayTotal)
        if (rollValue <= 0 && minOne)
          rollValue = 1;
  
        else if (rollValue <= 0)
          return {roll : rollValue};
  
        if (rollValue > tableSize)
          rollValue = tableSize;
  
        if (table == "scatter")
        {
          if (roll.total <= 8)
          {
            let distRoll = new Roll('2d10').roll().total;
            return {roll : roll.total, dist : distRoll}
          }
          else
            return {roll : roll.total}
        }
        return mergeObject(this._lookup(table, rollValue, column), ({roll : displayTotal}));
      }
      else
      {
      }
    }

    static _lookup(table, value, column = null)
    {
      if (!column)
        for (let row of this[table].rows)
        {
          if (value >= row.range[0] && value <= row.range[1])
            return row
        }
      else 
      {
        for (let row of this[table].rows)
        {
          if (value >= row.range[column][0] && value <= row.range[column][1])
            return row
        }
      }
    }


    /* -------------------------------------------- */
  
    static generalizeTable (table)
    {
      table = table.toLowerCase();
      table = table.replace("lleg", "leg");
      table = table.replace("rleg", "leg");
      table = table.replace("rarm", "arm");
      table = table.replace("larm", "arm");
      return table;
    }
  
    /* -------------------------------------------- */
  
    // Wrapper for rollTable to format rolls from chat commands nicely
    static formatChatRoll (table, options = {}, column = null)
    {
      table = this.generalizeTable(table);
      if (this[table] && this[table].columns && column == null)
      {
        return this.promptColumn(table, options);      
      }

      let result = this.rollTable(table, options, column);
      if (options.lookup && !game.user.isGM)
        result.roll = "Lookup: " + result.roll;
      try{
      if (result.roll <= 0 && !options.minOne)
        return `Roll: ${result.roll} - canceled`
      }
      catch {}
      switch (table)
      {
        case "hitloc":
          return `<b>${this[table].name}</b><br>` + result.description;
        case "crithead":
        case "critbody":
        case "critarm":
        case "critleg":
        case "crit":
          return `<b>${this[table].name}</b><br><a class = "item-lookup" data-type = "critical"><b>${result.name}</b></a><br>(${result.roll})`
  
        case "minormis":
        case "majormis":
        case "event":
        case "wrath":
        case "travel":
            return `<b>${this[table].name}</b><br><b>${result.name}</b><br>${result.description} (${result.roll})`;
        case "mutatephys":
        case "mutatemental":
          return `<b>${this[table].name}</b><br><a class = "item-lookup" data-type = "critical"><b>${result.name}</b></a><br>(${result.roll})`;
  
        case "doom":
          return `<b>The Prophet Speaketh</b><br>${result.description} (${result.roll})`;
        case "species":
          return `<b>Random Species</b><br>${result.name} (${result.roll})`;
  
        case "oops":
           return `<b>Oops!</b><br>${result.description} (${result.roll})`;
  
        case "winds":
            return `<b>The Swirling Winds</b><br> <b>Roll:</b> ${eval(result.roll)} <br> <b>Modifier: </b> ${result.modifier}`;
        case "career":
           return `<b>Random Career - ${WFRP4E.species[column]}</b><br> <a class = "item-lookup">${result.name}</a> <br> <b>Roll:</b> ${result.roll}`;
        case "eyes":
        case "hair":
          return `<b>${this[table].name} - ${WFRP4E.species[column]}</b><br>${result.name}<br><b>Roll:</b> ${eval(result.roll)}`
        case "scatter":
          let tableHtml = '<table class = "scatter-table">' +
          " <tr>"+
          "<td position='1'> "+
          "</td>"+
          "<td position='2'> "+
          "</td>"+
          "<td position='3'> "+
          "</td>"+
          "</tr>"+
          " <tr>"+
          "<td position='4'> "+
          "</td>"+
          "<td position='10'> T"+
          "</td>"+
          "<td position='5'> "+
          "</td>"+
          "</tr>"+
          " <tr>"+
          "<td position='6'> "+
          "</td>"+
          "<td position='7'> "+
          "</td>"+
          "<td position='8'> "+
          "</td>"+
          "</tr>"+
        "</table>"
        if (result.roll == 9)
         tableHtml += "At your feet";
        else if (result.roll == 10)
          tableHtml += "At their feet";
        else
          tableHtml += "Note: Distance can be no more than half the distance between you and the target"
        tableHtml = tableHtml.replace(`position='${result.roll}'`, "class='selected-position'")
        if (result.dist)
          tableHtml = tableHtml.replace("'selected-position'>", `'selected-position'> ${result.dist} yards`)
  
        return tableHtml;

        case "talents": 
          return `<b>Random Talent</b><br> <a class="talent-drag"><i class="fas fa-suitcase"></i> ${result.name}</a>`

  
        default:
          try {
            if (result)
            {
              let html = `<b>${this[table].name}</b><br>`;
              for (let part in result)
              {
                if (part == "name")
                  html += `<b>${result[part]}</b><br>`
                else if (part == "roll")
                  html += "<b>Roll</b>: "+ eval(result[part])
                else if (part != "range")
                  html += result[part] + "<br>"
              }
              return html;
  
            }
            else
              throw ""
          }
          catch
          {
            return this.tableMenu();
          }
      }
    }

    static tableMenu(showHidden = false)
    {
      let tableMenu =  "<b><code>/table</code> Commands</b><br>"
      let hiddenTableCounter = 0;
      for (let tableKey of Object.keys(this))
      {
        if (!showHidden)
        {
          if (!this[tableKey].hide)  
            tableMenu += `<a data-table='${tableKey}' class='table-click'><i class="fas fa-list"></i> <code>${tableKey}</code></a> - ${this[tableKey].name}<br>`
          else
            hiddenTableCounter++;
        }
        else 
        {
          tableMenu += `<a data-table='${tableKey}' class='table-click'><i class="fas fa-list"></i> <code>${tableKey}</code></a> - ${this[tableKey].name}<br>`
        }
      }
      if (hiddenTableCounter)
      {
        if (!showHidden)
          tableMenu += `<a class = 'hidden-table'>+ ${hiddenTableCounter} Hidden Tables</a>`          
      }
      return tableMenu;
    }
  
    static criticalCastMenu(crittable)
    {
      return "Choose from:<ul>" +            
              `<li><b>Critical Cast</b>: If the spell causes damage, it inflicts a <a class=table-click data-table=${crittable}><b><i class="fas fa-list"></i> Critical Wound</b></a></li>`+
              "<li><b>Total Power</b>: The spell is cast, no matter its CN and your rolled SL, but can be dispelled</li>"+
              "<li><b>Unstoppable Force</b>: If the spell is successfully cast, it cannot be dispelled.</li>"+
              "</ul";
    }
  
    
    static restrictedCriticalCastMenu()
    {
      return "Must Choose:<ul>" +            
              "<li><b>Total Power</b>: The spell is cast, no matter its CN and your rolled SL, but can be dispelled</li>"+
              "</ul";
    }

        
    static promptColumn(table, column)
    {
      let prompt =  `<h3>Select a column to roll on</h3>`

      for (let c of this[table].columns)
        prompt += `<div><a class = "table-click" data-table="${table}" data-column = "${c}"><i class="fas fa-list"></i> ${c}</a></div>`
        
      return prompt;
    }
  
  }
  