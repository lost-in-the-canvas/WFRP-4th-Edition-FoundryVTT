

class WFRP_Utility
{
  static _prepareSpellOrPrayer(actorData, item) {
    item['target'] = this._calculateSpellRangeOrDuration(actorData, item.data.target.value, item.data.target.aoe);
    item['duration'] = this._calculateSpellRangeOrDuration(actorData, item.data.duration.value);
    if (item.data.duration.extendable)
    {
      item.duration += "+";
    }
    item['range'] = this._calculateSpellRangeOrDuration(actorData, item.data.range.value);
    if (item.type == "spell")
      item['damage'] = this._calculateSpellDamage(actorData, item.data.damage.value, item.data.magicMissile.value);
    else
      item['damage'] = this._calculateSpellDamage(actorData, item.data.damage.value, false);

    if (item.type == "spell")
    {
      item.data.description.value = this._spellDescription(item);
      if (!item.data.memorized.value )
        item.data.cn.value *= 2;
    }

    return item;
  }

  static _spellDescription (spell) {
    let description = spell.data.description.value;
    if (description && description.includes ("Lore:"))
      return description
    if (spell.data.lore.effect)
      description += "\n\n <b>Lore:</b> " + spell.data.lore.effect;
    else if (CONFIG.loreEffect[spell.data.lore.value])
      description += "\n\n <b>Lore:</b> " + CONFIG.loreEffect[spell.data.lore.value];
    return description;
  }

  /* -------------------------------------------- */

  static _prepareSkill(actorData, basicSkills, advOrGrpSkills, skill) {

    skill.data.characteristic.num = actorData.data.characteristics[skill.data.characteristic.value].value;
    skill.data.total.value = actorData.data.characteristics[skill.data.characteristic.value].value + skill.data.advances.value;
    skill.data.characteristic.abrev = CONFIG.characteristicsAbbrev[skill.data.characteristic.value];

    if (skill.data.grouped.value == "isSpec" || skill.data.advanced.value == "adv")
      advOrGrpSkills.push(skill)
    else
      basicSkills.push(skill);
   }

  /* -------------------------------------------- */

   static  _prepareTalent(actorData, talent, talentList) {
    let existingTalent = talentList.find(t => t.name == talent.name)
    if (existingTalent){
      if (!existingTalent.numMax){
        talent["numMax"]= actorData.data.characteristics[talent.data.max.value].bonus;
      }
        existingTalent.data.advances.value++;
    }
    else{
      switch(talent.data.max.value){
        case '1':
        talent["numMax"] = 1;
        break;

        case '2':
        talent["numMax"] = 2;
        break;

        case 'none':
        talent["numMax"] = "-";
        break;

        default:
        talent["numMax"]= actorData.data.characteristics[talent.data.max.value].bonus;
      }
      talentList.push(talent);
    }
   }

  /* -------------------------------------------- */

  // Prepare a weapon to be displayed in the combat tab (assign ammo, calculate range, organize qualities/flaws)
  static _prepareWeaponCombat(actorData, weapon){
    weapon["properties"] = this._prepareQualitiesFlaws(weapon);
    weapon.data.reach.value = CONFIG.weaponReaches[weapon.data.reach.value];
    weapon.data.weaponGroup.value = CONFIG.weaponGroups[weapon.data.weaponGroup.value];

    weapon.data.range.value = this._calculateRangeOrDamage(actorData, weapon.data.range.value);
    if (weapon.data.damage.meleeValue)
      weapon.data.damage.meleeValue = this._calculateRangeOrDamage(actorData, weapon.data.damage.meleeValue) + (actorData.flags.meleeDamageIncrease || 0);
    if (weapon.data.damage.rangedValue)
      weapon.data.damage.rangedValue = this._calculateRangeOrDamage(actorData, weapon.data.damage.rangedValue) + (actorData.flags.rangedDamageIncrease || 0);

    if (Number(weapon.data.range.value) > 0)
        weapon["rangedWeaponType"] = true;
    if (weapon.data.reach.value)
      weapon["meleeWeaponType"] = true;

    // assign available ammo (TODO: Improve by keeping a constant list of ammo so a loop each time is necessary)
    if (weapon.data.ammunitionGroup.value != "none") {
      weapon["ammo"] = [];
      for ( let a of actorData.items ) {
        if (a.type == "ammunition" && a.data.ammunitionType.value == weapon.data.ammunitionGroup.value) // If is ammo and the correct type of ammo
            weapon.ammo.push(a);
      }
      this._prepareWeaponWithAmmo(actorData, weapon);
    }
    else if (weapon.data.weaponGroup.value == "Throwing" || weapon.data.weaponGroup.value == "Explosives")
    {
      weapon["ammo"] = [weapon];
      weapon.data.ammunitionGroup.value = "";
    }
    weapon.properties = WFRP_Utility._separateQualitiesFlaws(weapon.properties);
    if (weapon.properties.special)
      weapon.properties.special = weapon.data.special.value;
    return weapon;
  }

  /* -------------------------------------------- */

  // Prepare a weapon to be displayed in the combat tab (calculate APs, organize qualities/flaws)
  static _prepareArmorCombat(actorData, armor, AP){ // -1 means currentAP is maxAP
    for (let ap in armor.data.currentAP)
    {
      if (armor.data.currentAP[ap] == -1)
      {
        armor.data.currentAP[ap] = armor.data.maxAP[ap];
      }
    }

    if (armor.data.maxAP.head > 0)
    {
      armor["protectsHead"] = true;
      AP.head += armor.data.currentAP.head;
    }
    if (armor.data.maxAP.body > 0)
    {
      armor["protectsBody"] = true;
      AP.body += armor.data.currentAP.body;
    }
    if (armor.data.maxAP.lArm > 0)
    {
      armor["protectslArm"] = true;
      AP.lArm += armor.data.currentAP.lArm;
    }
    if (armor.data.maxAP.rArm > 0)
    {
      armor["protectsrArm"] = true;
      AP.rArm += armor.data.currentAP.rArm;
    }
    if (armor.data.maxAP.lLeg > 0)
    {
      armor["protectslLeg"] = true;
      AP.lLeg += armor.data.currentAP.lLeg;
    }
    if (armor.data.maxAP.rLeg > 0)
    {
      armor["protectsrLeg"] = true
      AP.rLeg += armor.data.currentAP.rLeg;
    }
    armor.properties = this._separateQualitiesFlaws(this._prepareQualitiesFlaws(armor));
    return armor;
  }

  /* -------------------------------------------- */

  static _prepareQualitiesFlaws(item){
    let qualities = item.data.qualities.value.split(",").map(function(item) {
      if (item)
      {
        item = item.trim();
        if (!(Object.values(WFRP_Utility.qualityList()).includes(item) || (Object.values(WFRP_Utility.flawList()).includes(item)))) //if the quality does not show up in either quality or flaw list, add it
          CONFIG.itemQualities[item.toLowerCase().trim()] = item;
        return item
      }
    });
    let flaws = item.data.flaws.value.split(",").map(function(item) {
      if (item)
      {
        item = item.trim();
        if (!(Object.values(WFRP_Utility.flawList()).includes(item) || (Object.values(WFRP_Utility.qualityList()).includes(item)))) //if the quality does not show up in either quality or flaw list, add it
          CONFIG.itemFlaws[item.toLowerCase().trim()] = item;
        return item;
      }
    });


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

  /* -------------------------------------------- */

  static _calculateArmorPenalties(actorData, armorList){
    // Parsing armor penalties for the combat tab
    let armorPenaltiesString = "";
    let wearingMail = false;
    let wearingPlate = false;
    for (let a of armorList)
    {
      armorPenaltiesString += a.data.penalty.value + " ";
      if (a.data.armorType.value == "mail")
        wearingMail = true;
      if (a.data.armorType.value == "plate")
        wearingPlate = true;
    }

    if (wearingMail || wearingPlate)
    {
      let stealthPenaltyValue = 0;
      if (wearingMail)
        stealthPenaltyValue += -10;
      if (wearingPlate)
        stealthPenaltyValue += -10;

      armorPenaltiesString += (stealthPenaltyValue + " Stealth");
    }
    return armorPenaltiesString;
  }

  /* -------------------------------------------- */

  static _calculateRangeOrDamage(actorData, formula){
    try {formula = formula.toLowerCase();}
    catch {return formula}

    for(let ch in actorData.data.characteristics)
    {
      if (formula.includes(ch.concat('b')))
      {
        formula = formula.replace(ch.concat('b'), actorData.data.characteristics[ch].bonus.toString());
      }
    }
    formula = formula.replace('x', '*');

    return eval(formula);
  }

  /* -------------------------------------------- */

  static _prepareWeaponWithAmmo(actorData, weapon){
    let ammo = weapon.ammo.find(a => a.id == weapon.data.currentAmmo.value);
    if (!ammo)
      return;

    let ammoProperties = this._prepareQualitiesFlaws(ammo);           // Skip undefined
    let specialPropInd =  ammoProperties.indexOf(ammoProperties.find(p => p && p.toLowerCase() == "special"));
    if (specialPropInd != -1)
      ammoProperties[specialPropInd] = ammoProperties[specialPropInd] + " Ammo"

    let ammoRange = ammo.data.range.value || "0";
    let ammoDamage = ammo.data.damage.value || "0";

    if (ammoRange.toLowerCase() == "as weapon")
    {
      // Do nothing to weapon's range
    }
    else if (ammoRange.toLowerCase() == "half weapon")
    {
      weapon.data.range.value /= 2;
    }
    else if (ammoRange.toLowerCase() == "third weapon")
    {
      weapon.data.range.value /= 3;
    }
    else if (ammoRange.toLowerCase() == "quarter weapon")
    {
      weapon.data.range.value /= 4;
    }
    else if (ammoRange.toLowerCase() == "twice weapon")
    {
      weapon.data.range.value *= 2;
    }
    else
    {
      try {
        ammoRange = eval(ammoRange);
        weapon.data.range.value = Math.floor(eval(weapon.data.range.value + ammoRange));
      }
      catch 
      {
        weapon.data.range.value = Math.floor(eval(weapon.data.range.value + ammoRange)); // Eval throws exception for "/2" for example. 
      }
    }
    
    try {
      ammoDamage = eval(ammoDamage);
      weapon.data.damage.rangedValue = Math.floor(eval(weapon.data.damage.rangedValue + ammoDamage));
    }
    catch { 
      weapon.data.damage.rangedValue = Math.floor(eval(weapon.data.damage.rangedValue + ammoDamage)); // Eval throws exception for "/2" for example. 
    }
    
    // The following code finds qualities or flaws of the ammo that add to the weapon's qualities
    // Example: Blast +1 should turn a weapon's Blast 4 into Blast 5
    ammoProperties = ammoProperties.filter(p => p != undefined);
    let propertyChange = ammoProperties.filter(p => p.includes("+") || p.includes("-")); // Properties that increase or decrease another (Blast +1, Blast -1)

    // Normal properties (Impale, Penetrating)
    let propertiesToAdd = ammoProperties.filter(p => !(p.includes("+") || p.includes("-")));

    for (let inc of propertyChange)
    {
      let index = inc.indexOf(" ");
      let property = inc.substring(0, index).trim();
      let value = inc.substring(index, inc.length);

      if (weapon.properties.find(p => p.includes(property)))
      {
        let basePropertyIndex = weapon.properties.findIndex(p => p.includes(property))
        let baseValue = weapon.properties[basePropertyIndex].split(" ")[1];
        let newValue = eval(baseValue + value)

        weapon.properties[basePropertyIndex] = `${property} ${newValue}`;
      }
      else
      {
        propertiesToAdd.push(property + " " + Number(value));
      }
    }

    weapon.properties = weapon.properties.concat(propertiesToAdd);
  }

  /* -------------------------------------------- */

  static _calculateSpellRangeOrDuration(actorData, formula, aoe=false){
    formula = formula.toLowerCase();

    if (formula != "you" && formula != "special" && formula != "instant")
    {
      for(let ch in actorData.data.characteristics)
      {

        if (formula.includes(CONFIG.characteristics[ch].toLowerCase()))
        {
          if (formula.includes('bonus'))
          {
            formula = formula.replace(CONFIG.characteristics[ch].toLowerCase().concat(" bonus"),  actorData.data.characteristics[ch].bonus);
          }
          else
          {
            formula = formula.replace(CONFIG.characteristics[ch].toLowerCase(),  actorData.data.characteristics[ch].value);
          }
        }
      }
    }

    if (aoe)
      formula = "AoE (" + formula.capitalize() + ")";
    return formula.capitalize();
  }

  static _calculateSpellDamage(actorData, formula, isMagicMissile){
    formula = formula.toLowerCase();

    if (isMagicMissile)
    {
      formula += "+ willpower bonus"
    }

    for(let ch in actorData.data.characteristics)
    {

      while (formula.includes(actorData.data.characteristics[ch].label.toLowerCase()))
      {
        if (formula.includes('bonus'))
        {
          formula = formula.replace(CONFIG.characteristics[ch].toLowerCase().concat(" bonus"),  actorData.data.characteristics[ch].bonus);
        }
        else
        {
          formula = formula.replace(CONFIG.characteristics[ch].toLowerCase(),  actorData.data.characteristics[ch].value);
        }
      }
    }

    return eval(formula);
  }

  /* -------------------------------------------- */

  /**
   * Roll characteristics given a species
   * @param {string} species      Key or value for species in CONFIG
   * @param {bool} average           Take average or not
   */
  static speciesCharacteristics(species, average)
  {
    let characteristics = {};
    let characteristicFormulae = CONFIG.speciesCharacteristics[species];
    try
    {
      if(!characteristicFormulae) // If input species was not a valid key, try finding it as a value
        characteristicFormulae = CONFIG.speciesCharacteristics[this.findKey(species, CONFIG.species)]
    }
    catch (error)
    {
      ui.notifications.info("Could not find species " + species)
      console.log("Could not find species " + species + ": " + error);
      throw error
    }

    for (let char in CONFIG.characteristics)
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
    let move = CONFIG.speciesMovement[species];
    if(!move) // If input species was not a valid key, try finding it as a value
     move = CONFIG.speciesMovement[this.findKey(species, CONFIG.species)]
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
    let pack = game.packs.find(p => p.collection == "wfrp4e.skills")
    await pack.getIndex().then(index => skillList = index);
    // Search for specific skill (won't find unlisted specializations)
    let searchResult = skillList.find(s => s.name == skillName)
    if (!searchResult)
      searchResult = skillList.find(s => s.name.split("(")[0].trim() == skillName.split("(")[0].trim())

    if (!searchResult)
      throw "Could not find skill (or specialization of) " + skillName + " in compendum"

    let dbSkill;
    await pack.getEntity(searchResult.id).then(packSkill => dbSkill = packSkill);
    dbSkill.data.name = skillName; // This is important if a specialized skill wasn't found. Without it, <Skill ()> would be added intsead of <Skill (Specialization)>
    return dbSkill;

  }

  /* -------------------------------------------- */

  static async findTalent(talentName)
  {
    let talentList = [];
    let pack = game.packs.find(p => p.collection == "wfrp4e.talents")
    await pack.getIndex().then(index => talentList = index);
    // Search for specific skill (won't find unlisted specializations)
    let searchResult = talentList.find(t => t.name == talentName)
    if (!searchResult)
      searchResult = talentList.find(t => t.name.split("(")[0].trim() == talentName.split("(")[0].trim())

    if (!searchResult)
      throw "Could not find skill (or specialization of) " + talentName + " in compendum"

    let dbTalent;
    await pack.getEntity(searchResult.id).then(packTalent  => dbTalent = packTalent);
    dbTalent.data.name = talentName; // This is important if a specialized skill wasn't found. Without it, <Skill ()> would be added intsead of <Skill (Specialization)>
    return dbTalent;

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
    let weapon = duplicate(CONFIG.weaponQualities);
    let armor = duplicate(CONFIG.armorQualities);
    let item = duplicate(CONFIG.itemQualities);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }

  /* -------------------------------------------- */

  static flawList()
  {
    let weapon = duplicate(CONFIG.weaponFlaws);
    let armor = duplicate(CONFIG.armorFlaws);
    let item = duplicate(CONFIG.itemFlaws);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }

  /* -------------------------------------------- */

  static _calculateAdvCost(currentAdvances, type)
  {
    let index = Math.ceil((currentAdvances / 5) - 1);
    index = index < 0 ? 0 : index; // min 0

    if (index >= CONFIG.xpCost[type].length)
      return CONFIG.xpCost[CONFIG.xpCost.length-1];
    return CONFIG.xpCost[type][index];
  }

  
  static displayStatus(tokenId)
  {
    let token = canvas.tokens.get(tokenId);
    let effects = token.data.effects;
    let conditions = {}
    effects = effects.map(function(effect) {
      
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
  
   let displayConditions = [];
   for (let c in conditions)
   {
     let displayValue = (CONFIG.conditions[c])
     if (typeof conditions[c] !== "boolean")
      displayValue += " " + conditions[c]
    displayConditions.push(displayValue); 
   }
  
  
    let chatOptions = {rollMode :  game.settings.get("core", "rollMode")};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    chatOptions["template"] = "public/systems/wfrp4e/templates/chat/combat-status.html"
  
  
    let chatData = {
      name : token.name,
      conditions : displayConditions,
      modifiers : token.actor.data.flags.modifier
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

  static postSymptom(symptom)
  {
    let symkey = WFRP_Utility.findKey(symptom.split("(")[0].trim(), CONFIG.symptoms)
    let content = `<b>${symptom}</b>: ${CONFIG.symptomDescriptions[symkey]}`;
    let chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode"), content : content};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;
    ChatMessage.create(chatOptions);

    if (game.user.isGM)
    {
      content = `<b>${symptom} Treatment</b>: ${CONFIG.symptomTreatment[symkey]}`;
      chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode"), content : content};
      chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
      ChatMessage.create(chatOptions);
    }
  }

  static postProperty(property)
  {
    let properties = mergeObject(WFRP_Utility.qualityList(), WFRP_Utility.flawList()), 
    propertyDescr = Object.assign(duplicate(CONFIG.qualityDescriptions), CONFIG.flawDescriptions),
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

}