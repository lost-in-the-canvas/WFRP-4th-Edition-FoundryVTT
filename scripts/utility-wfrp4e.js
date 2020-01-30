

class WFRP_Utility
{


  static _spellDescription (spell) {
    let description = spell.data.description.value;
    if (description && description.includes ("<b>Lore:</b>"))
      return description
    if (spell.data.lore.effect)
      description += "\n\n <b>Lore:</b> " + spell.data.lore.effect;
    else if (WFRP4E.loreEffect[spell.data.lore.value])
      description += "\n\n <b>Lore:</b> " + WFRP4E.loreEffect[spell.data.lore.value];
    return description;
  }


  /* -------------------------------------------- */
  static addLayer(AP, armor, loc)
  {
    let layer = {
      value : armor.data.currentAP[loc]
    }
    if (armor.properties.qualities.includes("Impenetrable"))
      layer.impenetrable = true;
    if (armor.properties.flaws.includes("Partial"))
      layer.partial = true;
    if (armor.properties.flaws.includes("Weakpoints"))
      layer.weakpoints = true;
    if (armor.data.armorType.value == "plate" || armor.data.armorType.value == "mail")
      layer.metal = true;
    
    AP[loc].layers.push(layer);
  }
  /* -------------------------------------------- */

  static _prepareQualitiesFlaws(item, includeQualities = true){
    let qualities = item.data.qualities.value.split(",").map(function(item) {
      if (item)
      {
        item = item.trim();
        if (!(Object.values(WFRP_Utility.qualityList()).includes(item) || (Object.values(WFRP_Utility.flawList()).includes(item)))) //if the quality does not show up in either quality or flaw list, add it
          WFRP4E.itemQualities[item.toLowerCase().trim()] = item;
        return item
      }
    });
    let flaws = item.data.flaws.value.split(",").map(function(item) {
      if (item)
      {
        item = item.trim();
        if (!(Object.values(WFRP_Utility.flawList()).includes(item) || (Object.values(WFRP_Utility.qualityList()).includes(item)))) //if the quality does not show up in either quality or flaw list, add it
          WFRP4E.itemFlaws[item.toLowerCase().trim()] = item;
        return item;
      }
    });

    if (!includeQualities)
      qualities = [];


    if (!item.data.special.value)
      return qualities.concat(flaws).sort().filter(p => !!p);
    else
      return qualities.concat(flaws).sort().concat("Special").filter(p => !!p);

  }

  /* -------------------------------------------- */


  static _separateQualitiesFlaws(properties){
    let qualities = [],
        flaws = [],
        special = [];
    let allQualities = Object.values(this.qualityList());
    let allFlaws = Object.values(this.flawList());
    for (let prop of properties)
    {
      if (allQualities.includes(prop.split(" ")[0]))
        qualities.push(prop);
      else if (allFlaws.includes(prop.split(" ")[0]))
        flaws.push(prop);
      else
        special.push(prop);
    }
    return {qualities : qualities,flaws : flaws, special : special}
  }

  /**
   * Roll characteristics given a species
   * @param {string} species      Key or value for species in CONFIG
   * @param {bool} average           Take average or not
   */
  static speciesCharacteristics(species, average)
  {
    let characteristics = {};
    let characteristicFormulae = WFRP4E.speciesCharacteristics[species];
    try
    {
      if(!characteristicFormulae) // If input species was not a valid key, try finding it as a value
        characteristicFormulae = WFRP4E.speciesCharacteristics[this.findKey(species, WFRP4E.species)]
    }
    catch (error)
    {
      ui.notifications.info("Could not find species " + species)
      console.log("Could not find species " + species + ": " + error);
      throw error
    }

    for (let char in WFRP4E.characteristics)
    {
      if (average)
      {
        characteristics[char] = parseInt(characteristicFormulae[char].split("+")[1]) + 10
      }
      else
      {
        characteristics[char] = new Roll(characteristicFormulae[char]).roll().total;
      }
    }
    return characteristics
  }

  /* -------------------------------------------- */

  static speciesMovement(species)
  {
    let move = WFRP4E.speciesMovement[species];
    if(!move) // If input species was not a valid key, try finding it as a value
     move = WFRP4E.speciesMovement[this.findKey(species, WFRP4E.species)]
    return move;
  }

  /* -------------------------------------------- */

  static findKey(value, obj)
  {
    for (let key in obj)
    {
      if (obj[key] == value)
        return key;
    }
    throw "Could not find key corresponding to " + value
  }

  /* -------------------------------------------- */

  static async findSkill(skillName)
  {
    let skillList = [];
    let packs = game.packs.filter(p => p.metadata.tag == "skill")
    for (let pack of packs)
    {
      await pack.getIndex().then(index => skillList = index);
      // Search for specific skill (won't find unlisted specializations)
      let searchResult = skillList.find(s => s.name == skillName)
      if (!searchResult)
        searchResult = skillList.find(s => s.name.split("(")[0].trim() == skillName.split("(")[0].trim())

      if (searchResult)
      {
        let dbSkill;
        await pack.getEntity(searchResult.id).then(packSkill => dbSkill = packSkill);
        dbSkill.data.name = skillName; // This is important if a specialized skill wasn't found. Without it, <Skill ()> would be added intsead of <Skill (Specialization)>
        return dbSkill;
      }
    }
    throw "Could not find skill (or specialization of) " + skillName + " in compendum"

  }

  /* -------------------------------------------- */

  static async findTalent(talentName)
  {
    let talentList = [];
    let packs = game.packs.filter(p => p.metadata.tag == "talent")
    for (let pack of packs)
    {
      await pack.getIndex().then(index => talentList = index);
      // Search for specific skill (won't find unlisted specializations)
      let searchResult = talentList.find(t => t.name == talentName)
      if (!searchResult)
        searchResult = talentList.find(t => t.name.split("(")[0].trim() == talentName.split("(")[0].trim())

      if (searchResult)
      {
        let dbTalent;
        await pack.getEntity(searchResult.id).then(packTalent  => dbTalent = packTalent);
        dbTalent.data.name = talentName; // This is important if a specialized skill wasn't found. Without it, <Skill ()> would be added intsead of <Skill (Specialization)>
        return dbTalent;
      }
    }
    throw "Could not find skill (or specialization of) " + talentName + " in compendium"
  }

  /* -------------------------------------------- */

  static async findItem(itemName, itemType, location = null)
  {
    let items = game.items.entities.filter(i => i.type == itemType)

    for (let i of items)
    {
      if (i.name == itemName)
        return i;
    }    
    let itemList

    if (location)
    {
      let pack = game.packs.find(p => {
        location.split(".")[0] == p.metadata.package &&
        location.split(".")[1] == p.metadata.name
      })
      if (pack)
      {
        await pack.getIndex().then(index => itemList = index);
        let searchResult = itemList.find(t => t.name == itemName)
        if (searchResult)
          return await pack.getEntity(searchResult.id)
      }
    }


    for (let p of game.packs)
    {
      await p.getIndex().then(index => itemList = index);
      let searchResult = itemList.find(t => t.name == itemName)
      if (searchResult)
        return await p.getEntity(searchResult.id)
    }
  }

  /* -------------------------------------------- */


  static nameSorter(a, b){
    if (a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase())
      return 1;
    return 0;
  }

  /* -------------------------------------------- */

  static qualityList()
  {
    let weapon = duplicate(WFRP4E.weaponQualities);
    let armor = duplicate(WFRP4E.armorQualities);
    let item = duplicate(WFRP4E.itemQualities);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }

  /* -------------------------------------------- */

  static flawList()
  {
    let weapon = duplicate(WFRP4E.weaponFlaws);
    let armor = duplicate(WFRP4E.armorFlaws);
    let item = duplicate(WFRP4E.itemFlaws);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }

  /* -------------------------------------------- */

  static _calculateAdvCost(currentAdvances, type)
  {
    let index = Math.ceil((currentAdvances / 5) - 1);
    index = index < 0 ? 0 : index; // min 0

    if (index >= WFRP4E.xpCost[type].length)
      return WFRP4E.xpCost[WFRP4E.xpCost.length-1];
    return WFRP4E.xpCost[type][index];
  }

  
  static displayStatus(tokenId, round = undefined)
  {
    let token = canvas.tokens.get(tokenId);
    let effects = token.data.effects;
    if (round)
      round = "- Round " + round;
  
    let displayConditions = this.parseConditions(effects);
    
    let chatOptions = {rollMode :  game.settings.get("core", "rollMode")};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    chatOptions["template"] = "systems/wfrp4e/templates/chat/combat-status.html"
  
  
    let chatData = {
      name : token.name,
      conditions : displayConditions,
      modifiers : token.actor.data.flags.modifier,
      round : round
    }
  
  
   return renderTemplate(chatOptions.template, chatData).then(html => {
      chatOptions["user"] = game.user._id
  
      // Emit the HTML as a chat message
      chatOptions["content"] = html;
	  chatOptions["type"] = 0;
      ChatMessage.create(chatOptions, false);
      return html;
    });
  }

    
  static displayRoundSummary(combat)
  {
    let combatantArray = [];

    for (let turn of combat.turns)
    {
      let token = canvas.tokens.get(turn.tokenId);
      let effects = token.data.effects;
      combatantArray.push({name : token.name, conditions : this.parseConditions(effects)})
    }
    
    let chatOptions = {rollMode :  game.settings.get("core", "rollMode")};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    chatOptions["template"] = "systems/wfrp4e/templates/chat/round-summary.html"
  
  
    let chatData = {
      title : "Round " + combat.current.round + " Summary",
      combatants : combatantArray
    }
  
  
   return renderTemplate(chatOptions.template, chatData).then(html => {
      chatOptions["user"] = game.user._id
  
      // Emit the HTML as a chat message
      chatOptions["content"] = html;
	  chatOptions["type"] = 0;
      ChatMessage.create(chatOptions, false);
      return html;
    });
  }

  static parseConditions(effectList)
  {
      let conditions = {}
      effectList = effectList.map(function(effect) {
      let isNumeric = !isNaN(effect[effect.indexOf(".") - 1])
      if (isNumeric)
      {
        effect = effect.substring(effect.lastIndexOf("/")+1)
        let effectNum = effect.substring(effect.length-5, effect.length-4)
        effect = effect.substring(0, effect.length-5);
        if (conditions[effect.toString()])
          conditions[effect.toString()] += parseInt(effectNum);
        else
          conditions[effect.toString()] = parseInt(effectNum);
      }
  
      else 
      {
        effect = effect.substring(effect.lastIndexOf("/")+1).substring(0, effect.length-4);
        effect = effect.substring(0, effect.length-4);
        conditions[effect] = true;
      }
   })
  
   let returnConditions = [];
   for (let c in conditions)
   {
     let displayValue = (WFRP4E.conditions[c])
     if (typeof conditions[c] !== "boolean")
      displayValue += " " + conditions[c]
      returnConditions.push(displayValue); 
   }

   return returnConditions;
  }

  static postSymptom(symptom)
  {
    let symkey = WFRP_Utility.findKey(symptom.split("(")[0].trim(), WFRP4E.symptoms)
    let content = `<b>${symptom}</b>: ${WFRP4E.symptomDescriptions[symkey]}`;
    let chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode"), content : content};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    ChatMessage.create(chatOptions);

    if (game.user.isGM)
    {
      content = `<b>${symptom} Treatment</b>: ${WFRP4E.symptomTreatment[symkey]}`;
      chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode"), content : content};
      chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
      ChatMessage.create(chatOptions);
    }
  }

  static postProperty(property)
  {
    let properties = mergeObject(WFRP_Utility.qualityList(), WFRP_Utility.flawList()), 
    propertyDescr = Object.assign(duplicate(WFRP4E.qualityDescriptions), WFRP4E.flawDescriptions),
    propertyKey;

    property = property.replace(/,/g, '').trim();

    propertyKey = WFRP_Utility.findKey(property.split(" ")[0], properties)

    let propertyDescription = `<b>${property}:</b><br>${propertyDescr[propertyKey]}`;
    propertyDescription = propertyDescription.replace("(Rating)", property.split(" ")[1])


    let chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode"), content : propertyDescription};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    ChatMessage.create(chatOptions);
  }

  static chatDataSetup(content, modeOverride, isRoll = false)
  {
    let chatData = {
      user : game.user._id, 
      rollMode : modeOverride || game.settings.get("core", "rollMode"),
      content : content 
    };
    if(isRoll)
      chatData.sound = CONFIG.sounds.dice

    if ( ["gmroll", "blindroll"].includes(chatData.rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatData.rollMode === "blindroll" ) chatData["blind"] = true;
    else if ( chatData.rollMode === "selfroll" ) chatData["whisper"] = game.user._id;

    return chatData;
  }

  static matchClosest(object, query)
  {
    let keys = Object.keys(object)
    let match = [];
    for (let key of keys)
    {
      let percentage = 0;
      let matchCounter = 0;
      for (let i = 0; i < key.length; i++)
      {
        if (key[i] == query[i])
        {
          matchCounter++;
        }
      }
      percentage = matchCounter / key.length;
      match.push(percentage);
    }
    let maxIndex = match.indexOf(Math.max.apply(Math, match));
    return keys[maxIndex]
  }

  static getSpeaker(speaker)
  {
    let actor = game.actors.get(speaker.actor);
    if (speaker.token)
      actor = canvas.tokens.get(speaker.token).actor
    return actor
  }

  static async allBasicSkills()
  {
    let returnSkills = [];

    const pack = game.packs.find(p => p.collection == "wfrp4e.skills")
    let skills = [];
    await pack.getIndex().then(index => skills = index);
    for (let sk of skills)
    {
      let skillItem = undefined;
      await pack.getEntity(sk.id).then(skill => skillItem = skill);
      if (skillItem.data.data.advanced.value == "bsc")
      {
        if (skillItem.data.data.grouped.value != "noSpec")
        {
          let startParen = skillItem.data.name.indexOf("(")
          skillItem.data.name = skillItem.data.name.substring(0, startParen).trim();
          if (returnSkills.filter(x => x.name.includes(skillItem.name)).length <= 0)
            returnSkills.push(skillItem.data);
        }
        else
          returnSkills.push(skillItem.data)
      }
    }
    return returnSkills;
  }

  static async allMoneyItems()
  {
    let moneyItems = []
    const trappings = game.packs.find(p => p.collection == "wfrp4e.trappings")
    let trappingsIndex = [];
    await trappings.getIndex().then(index => trappingsIndex = index);

    let money = trappingsIndex.filter (t => t.name.toLowerCase() == "gold crown" || t.name.toLowerCase() == "silver shilling" || t.name.toLowerCase() == "brass penny")

    for (let m of money)
    {
      let moneyItem = await trappings.getEntity(m.id);
      moneyItems.push(moneyItem.data);
    }
    return moneyItems
  }

  static _replaceCustomLink(match, entityType, id, name)
  {
    switch (entityType)
    {
      case "Roll":
        return `<a class="chat-roll" data-roll="${id}"><i class='fas fa-dice'></i> ${name ? name : id}</a>`
      case "Table":
          return `<a class = "table-click" data-table="${id}"><i class="fas fa-list"></i> ${(WFRP_Tables[id] && !name) ? WFRP_Tables[id].name : name}</a>`
      case "Symptom":
          return `<a class = "symptom-tag" data-symptom="${id}"><i class='fas fa-user-injured'></i> ${name ? name : id}</a>`
      case "Condition":
          return `<a class = "condition-chat" data-cond="${id}"><i class='fas fa-user-injured'></i> ${name ? name : id}</a>`
    }
  }

  static handleTableClick(event)
  {
    let sin = Number($(event.currentTarget).attr("data-sin"));
    let modifier = sin * 10 || 0;
    let html;
    let chatOptions = this.chatDataSetup("", game.settings.get("core", "rollMode"))

    if (event.button == 0)
    {
      if (event.target.text == "Critical Cast")
      {
        html = WFRP_Tables.criticalCastMenu($(event.currentTarget).attr("data-table"));
      }

      else if (event.target.text == "Total Power")
        html = WFRP_Tables.restrictedCriticalCastMenu();

      else if ($(event.currentTarget).attr("data-table") == "misfire")
      {
        let damage = $(event.currentTarget).attr("data-damage")
        html = "<b>Misfire</b>: Your weapon explodes! Take " + damage + " damage to your primary arm.";
      }
      else if (sin)
        html = WFRP_Tables.formatChatRoll($(event.currentTarget).attr("data-table"), {modifier: modifier, maxSize: false});
      else
        html = WFRP_Tables.formatChatRoll($(event.currentTarget).attr("data-table"), {modifier: modifier}, $(event.currentTarget).attr("data-column"));

       chatOptions["content"] = html;
      chatOptions["type"] = 0;
      ChatMessage.create(chatOptions);

    }
    else if (event.button == 2)
    {
      renderTemplate('systems/wfrp4e/templates/chat/table-dialog.html').then(html => {
        new Dialog({
          title: "Table Modifier",
          content: html,
          buttons: {
            roll: {
              label: "Roll",
              callback: (html) => {
                let tableModifier = html.find('[name="tableModifier"]').val();
                let minOne = html.find('[name="minOne"]').is(':checked');
                html = WFRP_Tables.formatChatRoll($(event.currentTarget).attr("data-table"), {modifier: tableModifier, minOne : minOne});
                chatOptions["content"] = html;
                chatOptions["type"] = 0;
                ChatMessage.create(chatOptions);
              }
            },
          },
          default: 'roll'
        }).render(true);
      })
    }
  }

  static handleConditionClick(event)
  {
    let cond = $(event.currentTarget).attr("data-cond")
    if (!cond)
      cond = event.target.text.trim();
    cond = cond.split(" ")[0]
    let condkey = WFRP_Utility.findKey(cond, WFRP4E.conditions);
    let condDescr = WFRP4E.conditionDescriptions[condkey];
    let messageContent = `<b>${cond}</b><br>${condDescr}`

    let chatData = WFRP_Utility.chatDataSetup(messageContent)
    ChatMessage.create(chatData);
  }

  static handleSymptomClick(event)
  {
    let symptom = $(event.currentTarget).attr("data-symptom")
    if (!symptom)
      symptom=event.target.text;
    WFRP_Utility.postSymptom(symptom)
  }

  static handleRollClick(event)
  {
    let roll = $(event.currentTarget).attr("data-roll")
    if (!roll)
      roll = event.target.text.trim();
    let rollMode = game.settings.get("core", "rollMode");
    new Roll(roll).roll().toMessage({user : game.user._id, rollMode})
  }

}