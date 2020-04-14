/**
 * WIP
 * This class contains functions and helpers related to the market and Pay system
 */
class MarketWfrp4e 
{
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
        return msg;
    }

    static formatTestForChat(result)
    {
      return `
        <b>${game.i18n.localize("MARKET.SettlementSize")}</b> ${result.settlement}<br>
        <b>${game.i18n.localize("MARKET.Rarity")}</b> ${result.rarity}<br><br>
        <b>${game.i18n.localize("MARKET.InStock")}</b> ${result.instock}<br>
        <b>${game.i18n.localize("MARKET.QuantityAvailable")}</b> ${result.quantity}
      `;
    }
}