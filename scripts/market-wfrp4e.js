/**
 * WIP
 * This class contains functions and helpers related to the market and Pay system
 */
class MarketWfrp4e 
{
    /**
     * Roll a test for the availability and the stock quantity of an item based on the rulebook
     * @param {Object} options 
     */
    static testForAvailability(options)
    {
        let validSettlements = [
          game.i18n.localize("MARKET.Village").toLowerCase(),
          game.i18n.localize("MARKET.Town").toLowerCase(),
          game.i18n.localize("MARKET.City").toLowerCase()
        ];
        let validRarity = [
          game.i18n.localize("WFRP4E.Availability.Common").toLowerCase(),
          game.i18n.localize("WFRP4E.Availability.Scarce").toLowerCase(),
          game.i18n.localize("WFRP4E.Availability.Rare").toLowerCase(),
          game.i18n.localize("WFRP4E.Availability.Exotic").toLowerCase()
        ];

        let msg = `<h3><b>${game.i18n.localize("MARKET.AvailabilityTest")}</b></h3>`;

        //If at least one of the args isnt specified or if the specified options are not valid, we give informations on the correct syntax
        if(!options.settlement || !options.rarity || !validSettlements.includes(options.settlement) || !validRarity.includes(options.rarity))
        {
          msg += `<p>${game.i18n.localize("MARKET.AvailWrongCommand")}</p><p><i>${game.i18n.localize("MARKET.AvailCommandExample")}</i></p>`;
        }
        //Everything is ok, lets roll for availability
        else
        {
          let roll = new Roll("1d100 - @modifier",{modifier:options.modifier}).roll();
          //We define a two-dimensional map with the availability and stock table from the rulebook (p290)
          let availabilityTable = new Map([
            [validSettlements[0], new Map([
              [validRarity[0], {test:100, stock:'2'}],
              [validRarity[1], {test:30, stock:'1'}],
              [validRarity[2], {test:15, stock:'1'}],
              [validRarity[3], {test:0, stock:'0'}]
            ])],
            [validSettlements[1], new Map([
              [validRarity[0], {test:100, stock:'2d10'}],
              [validRarity[1], {test:60, stock:'1d10'}],
              [validRarity[2], {test:30, stock:'1d5'}],
              [validRarity[3], {test:0, stock:'0'}]
            ])],
            [validSettlements[2], new Map([
              [validRarity[0], {test:100, stock:'∞'}],
              [validRarity[1], {test:90, stock:'∞'}],
              [validRarity[2], {test:45, stock:'∞'}],
              [validRarity[3], {test:0, stock:'0'}]
            ])]
          ]);

          //And we retrieve the correct line
          let availabilityLookup = availabilityTable.get(options.settlement).get(options.rarity);
          let isAvailable = options.rarity != validRarity[3] && roll.total <= availabilityLookup.test;

          let finalResult = {
            settlement:options.settlement.charAt(0).toUpperCase() + options.settlement.slice(1),
            rarity:options.rarity.charAt(0).toUpperCase() + options.rarity.slice(1),
            instock: isAvailable ? game.i18n.localize("Yes"):game.i18n.localize("No"),
            quantity: isAvailable ? availabilityLookup.stock:0
          };

          //We roll the stock for towns
          if(options.settlement == validSettlements[1] && options.rarity != validRarity[3])
          {
            let stockRoll = new Roll(availabilityLookup.stock).roll();
            finalResult.quantity = stockRoll.total;
          }

          //Format the message before sending it back to chat
          msg += this.formatTestForChat(finalResult);
        }
        ChatMessage.create(WFRP_Utility.chatDataSetup(msg,"roll",true));
    }

    /**
     * Format an availability test before sending it to chat
     * @param {Object} result 
     */
    static formatTestForChat(result)
    {
      return `
        <b>${game.i18n.localize("MARKET.SettlementSize")}</b> ${result.settlement}<br>
        <b>${game.i18n.localize("MARKET.Rarity")}</b> ${result.rarity}<br><br>
        <b>${game.i18n.localize("MARKET.InStock")}</b> ${result.instock}<br>
        <b>${game.i18n.localize("MARKET.QuantityAvailable")}</b> ${result.quantity}
      `;
    }

    /**
     * Send a whispered card menu to the player to start an availability test
     * The card let him choose a settlement size
     * @param {String} rarity 
     */
    static displaySettlementChoice(rarity)
    {
      let cardData = {rarity:WFRP4E.availability[rarity]};
      renderTemplate("systems/wfrp4e/templates/chat/market-settlement.html", cardData).then(html => {
        let chatData = WFRP_Utility.chatDataSetup(html,"selfroll");
        ChatMessage.create(chatData);
      });
    }

    /**
     * Consolidate every money the player has in order to give him the fewer coins possible
     * @param {ActorWfrp4e} actor 
     */
    static consolidateMoney(actor)
    {
      let money = duplicate(actor.data.items.filter(i => i.type == "money"));
      //We sort the money from the highest BP value to the lowest (so gc => ss => bp)
      //This allow us to deal with custom money too and to not be dependent on the money name (translation errors could break the code otherwise)
      money.sort((a,b)=>b.data.coinValue.value - a.data.coinValue.value);
  
      let brass = 0;
      //First we calculate the BP value
      for (let m of money)
        brass += m.data.quantity.value * m.data.coinValue.value;
      
      //Then we consolidate the coins
      for (let m of money)
      {
        //We don't know what players could create as a custom money and we dont want to divide by zero, ever. It would kill a kitten somewhere, probably.
        if(m.data.coinValue.value <= 0)
          break;
        m.data.quantity.value = Math.trunc(brass / m.data.coinValue.value);
        brass = brass % m.data.coinValue.value;
      }
  
      return actor.updateEmbeddedEntity("OwnedItem", money);
    }
    /**
     * Execute a /pay command and remove the money from the player inventory 
     * @param {String} command 
     * @param {ActorWfrp4e} actor
     */
    static payCommand(command)
    {
      //First we parse the command
      let money = this.parsePayString(command);
      let msg = `<h3><b>${game.i18n.localize("MARKET.PayCommand")}</b></h3>`;
      //Wrong command
      if(!money)
      {
        msg += `<p>${game.i18n.localize("MARKET.PayWrongCommand")}</p><p><i>${game.i18n.localize("MARKET.PayCommandExample")}</i></p>`;
      }
      //Command is ok, let's try to pay
      else
      {
        //We need to get the character items for gc, ss and bp. This is a "best effort" lookup method. If it fails, we stop the command to prevent any data loss.
        let money = duplicate(actor.data.items.filter(i => i.type == "money"));
        
      }
    }

    /**
     * Parse a price string
     * Like "8gc6bp" or "74ss 12gc", etc
     * This method use localized abbreviations
     * return an object with the moneys and quantity
     * @param {String} string 
     * @returns {Object}
     */
    static parsePayString(string)
    {
      //Regular expression to match any number followed by any abbreviation. Ignore whitespaces
      const expression = /((\d+)\s?([a-zA-Z]+))/g;
      let matches = [...string.matchAll(expression)];

      let payRecap = {
        gc: 0,
        ss: 0,
        bp: 0
      };
      let isValid = matches.length;
      for(let match of matches)
      {
        //Check if we have a valid command. We should have 4 groups per match
        if(match.length != 4)
        {
          isValid = false;
          break;
        }
        //Should contains the abbreviated money (like "gc")
        switch(match[3])
        {
          case game.i18n.localize("MARKET.Abbrev.GC"):
            payRecap.gc += parseInt(match[2],10);
            break;
          case game.i18n.localize("MARKET.Abbrev.SS"):
            payRecap.ss += parseInt(match[2],10);
            break;
          case game.i18n.localize("MARKET.Abbrev.BP"):
            payRecap.bp += parseInt(match[2],10);
            break;
        }
      }
        return isValid ? payRecap:false;
    }
}