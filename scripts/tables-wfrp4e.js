
class WFRP_Tables {

    static rollTable(table, options = {})
    {
      let modifier = options.modifier || 0;
      let minOne = options.minOne || false;
      let maxSize = options.maxSize || false;
  
      table = table.toLowerCase();
      if (this[table])
      {
        // cap at 100
        let die = this[table].die;
        let tableSize = this[table].rows.length - 1;
        if (!die)
          die = `1d${tableSize}`;
        let roll = new Roll(`${die} + @modifier`, {modifier}).roll();
        let rollValue = roll.total;
        let displayTotal = roll.result;
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
        return mergeObject(this[table].rows[rollValue], ({roll : displayTotal}));
      }
      else
      {
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
    static formatChatRoll (table, options = {})
    {
      table = this.generalizeTable(table);
      let result = this.rollTable(table, options);
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
          return `<b>${this[table].name}</b><br><b>${result.name}</b><br><b>Wounds:</b> ${result.wounds}<br><b>Description: </b>${result.description} (${result.roll})`
  
        case "minormis":
        case "majormis":
        case "event":
        case "wrath":
        case "travel":
        case "mutatephys":
        case "mutatemental":
          return `<b>${this[table].name}</b><br><b>${result.name}</b><br>${result.description} (${result.roll})`;
  
        case "doom":
          return `<b>The Prophet Speaketh</b><br>${result.description} (${result.roll})`;
  
        case "oops":
           return `<b>Oops!</b><br>${result.description} (${result.roll})`;
  
        case "winds":
            return `<b>The Swirling Winds</b><br> <b>Roll:</b> ${eval(result.roll)} <br> <b>Modifier: </b> ${result.modifier}`;
  
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
  
        default:
          try {
            if (result)
            {
              let html = "";
              for (let part in result)
              {
                if (part == "name")
                  html += `<b>${result[part]}</b><br>`
                else if (part == "roll")
                  html += "<b>Roll</b>: "+ eval(result[part])
                else
                  html += result[part] + "<br>"
              }
              return html;
  
            }
            else
              throw ""
          }
          catch
          {
            return "<b><code>/table</code> Commands</b><br>"+
            "<a data-table='hitloc' class='table-click'><code>hitloc</code> - Hit Location<br></a>"+
            "<a data-table='crithead' class='table-click'><code>crithead</code> - Head Critical Hits<br></a>"+
            "<a data-table='critbody' class='table-click'><code>critbody</code> - Body Critical Hits<br></a>"+
            "<a data-table='critarm' class='table-click'><code>critarm</code> - Arm Critical Hits<br></a>"+
            "<a data-table='critleg' class='table-click'><code>critleg</code> - Leg Critical Hits<br></a>"+
            "<a data-table='oops' class='table-click'><code>oops</code> - Oops!<br></a>"+
            "<a data-table='minormis' class='table-click'><code>minormis</code> - Minor Miscast<br></a>"+
            "<a data-table='majormis' class='table-click'><code>majormis</code> - Major Miscast<br></a>"+
            "<a data-table='wrath' class='table-click'><code>wrath</code> - Wrath of the Gods<br></a>"+
            "<a data-table='mutatephys' class='table-click'><code>mutatephys</code> - Physical Mutation<br></a>"+
            "<a data-table='mutatemental' class='table-click'><code>mutatemental</code> - Mental Mutation<br></a>"+
            "<a data-table='event' class='table-click'><code>event</code> - Downtime Event<br></a>"+
            "<a data-table='travel' class='table-click'><code>travel</code> - Downtime Event<br></a>"+
            "<a data-table='scatter' class='table-click'><code>scatter</code> - Scatter Direction<br></a>"+
            "<a data-table='doom' class='table-click'><code>doom</code> - Dooming<br></a>"+
            "<a data-table='winds' class='table-click'><code>winds</code> - The Swirling Winds<br></a>"
          }
      }
    }
  
    static criticalCastMenu(crittable)
    {
      return "Choose from:<ul>" +            
              `<li><b>Critical Cast</b>: If the spell causes damage, it inflicts a <a class=table-click data-table=${crittable}><b>Critical Wound</b></a></li>`+
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
  
  }
  