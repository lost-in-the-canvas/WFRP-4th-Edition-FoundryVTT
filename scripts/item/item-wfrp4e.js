/**
 * Override and extend the basic :class:`Item` implementation
 */
class ItemWfrp4e extends Item {


  static async create(data, options) {

    if (!data.img)
      data.img = "systems/wfrp4e/icons/blank.png";
    super.create(data, options);
  }
  // Expand data is used in most dropdown infos

  /*******ITEM EXPAND DATA ***********/

  getExpandData(htmlOptions) {
    const data = this[`_${this.data.type}ExpandData`]();
    data.description.value = data.description.value || "";
    data.description.value = enrichHTML(data.description.value, htmlOptions);
    return data;
  }

  _trappingExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
    return data;
  }

  _moneyExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [`Value (in d): ${data.coinValue.value}`];
    return data;
  }

  _psychologyExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
    return data;
  }

  _mutationExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
    data.properties.push(CONFIG.mutationTypes[this.data.data.mutationType.value]);
    if (this.data.data.modifier.value)
      data.properties.push(this.data.data.modifier.value)
    return data;
  }

  _diseaseExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
    data.properties.push("<b>Contraction:</b> " + data.contraction.value);
    data.properties.push("<b>Incubation:</b> " + data.incubation.value);
    data.properties.push("<b>Duration:</b> " + data.duration.value);
    data.properties = data.properties.concat(data.symptoms.value.split(",").map(i => i = "<a class ='symptom-tag'>"+i.trim()+"</a>") );
    if (data.permanent.value)
      data.properties.push("<b>Permanent:</b> " + data.permanent.value);
    return data;
  }

  _talentExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _traitExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _careerExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    data.properties.push("<b>Class</b>: " + this.data.data.class.value);
    data.properties.push("<b>Group</b>: " + this.data.data.careergroup.value);
    data.properties.push(CONFIG.statusTiers[this.data.data.status.tier] + " " + this.data.data.status.standing);
    data.properties.push("<b>Characteristics</b>: " + this.data.data.characteristics.map(i => i = " " + CONFIG.characteristicsAbbrev[i]));
    data.properties.push("<b>Skills</b>: " + this.data.data.skills.map(i => i = " " + i));
    data.properties.push("<b>Talents</b>: " + this.data.data.talents.map (i => i = " " + i));
    data.properties.push("<b>Trappings</b>: " + this.data.data.trappings.map (i => i = " " + i));
    data.properties.push("<b>Income</b>: " + this.data.data.incomeSkill.map(i => ` <a class = 'career-income' data-career-id=${this.data.id}> ${this.data.data.skills[i]} <i class="fas fa-coins"></i></a>`));
    return data;
  }

  _injuryExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _criticalExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    data.properties.push(`<b>Wounds</b>: ${this.data.data.wounds.value}`)
    if (data.modifier.value)
      data.properties.push(`<b>Modifier</b>: ${this.data.data.modifier.value}`)
    return data;
  }

  _spellExpandData() {
    const data = duplicate(this.data.data);
    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.actor.data, duplicate(this.data));
    data.description = preparedSpell.data.description
    data.properties = [];
    data.properties.push("Range: " + preparedSpell.range + "</a>");
    data.properties.push("Target: " + preparedSpell.target + "</a>");
    data.properties.push("Duration: " + preparedSpell.duration + "</a>");
    if (data.magicMissile.value)
      data.properties.push("Magic Missile: +" + preparedSpell.damage);
    else if (preparedSpell.data.damage.value)
      data.properties.push("Damage: +" + preparedSpell.damage);

    return data;
  }

   _prayerExpandData() {
    const data = duplicate(this.data.data);
    let preparedPrayer = WFRP_Utility._prepareSpellOrPrayer(this.actor.data, this.data);
    data.properties = [];
    data.properties.push("Range: " + preparedPrayer.range);
    data.properties.push("Target: " + preparedPrayer.target);
    data.properties.push("Duration: " + preparedPrayer.duration);
    if (preparedPrayer.data.damage.value)
      data.properties.push("Damage: " + preparedPrayer.data.damage.value);
    return data;
  }

  _containerChatData() {
    const data = duplicate(this.data.data);
    let properties = 
    [
      `<b>Price</b>: ${data.price.gc} GC, ${data.price.ss} SS, ${data.price.bp} BP`,
      `<b>Encumbrance</b>: ${data.encumbrance.value}`,
      `<b>Availability</b>: ${CONFIG.availability[data.availability.value]}`
    ]

    properties.push("<b>Wearable</b>: " + (data.wearable.value ? "Yes" : "No"));
    properties.push("<b>Count toward owner's encumbrance?</b>: " +  (data.countEnc.value ? "Yes" : "No"));
    return properties;
  }

  /* -------------------------------------------- */

  _weaponExpandData() {
   const data = duplicate(this.data.data);
    let properties = [];

    if (data.weaponGroup.value)
      properties.push(CONFIG.weaponGroups[data.weaponGroup.value]);
    if (data.range.value)
      properties.push("Range: " + data.range.value);
    if (data.damage.meleeValue)
      properties.push("Melee Damage: " + data.damage.meleeValue);
    if (data.damage.rangedValue)
      properties.push("Ranged Damage: " + data.damage.rangedValue);
    if (data.weaponDamage)
      properties.push("<b>Weapon is damaged by " + data.weaponDamage + " points</b>")
    for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data).map(i => i = "<a class ='item-property'>"+i+"</a>"))
      properties.push(prop);
    if (data.twohanded.value)
      properties.push("Two Handed");
    if (data.reach.value)
      properties.push ("Reach: " + CONFIG.weaponReaches[data.reach.value] + " - " + CONFIG.reachDescription[data.reach.value]);

    properties = properties.filter(p => p != "Special");
    if (data.special.value)
      properties.push ("Special: " + data.special.value);

    data.properties = properties.filter(p => !!p);
    return data;
  }

  _armourExpandData() {
    const data = duplicate(this.data.data);
     const properties = [];
     properties.push(CONFIG.armorTypes[data.armorType.value]);
     for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data).map(i => i = "<a class ='item-property'>"+i+"</a>"))
       properties.push(prop);
     properties.push(data.penalty.value);

     data.properties = properties.filter(p => !!p);
     return data;
   }

   _ammunitionExpandData() {
    const data = duplicate(this.data.data);
     let properties = [];
     properties.push (CONFIG.ammunitionGroups[data.ammunitionType.value])

     if (data.range.value)
      properties.push("Range: " + data.range.value);

     if (data.damage.value)
      properties.push("Damage: " + data.damage.value);

     for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data).map(i => i = "<a class ='item-property'>"+i+"</a>"))
       properties.push(prop);
     properties = properties.filter(p => p != "Special");
     if (data.special.value)
       properties.push ("Special: " + data.special.value);

     data.properties = properties.filter(p => !!p);
     return data;
   }

   /****** ITEM CHAT OUTPUT **********/

  postItem() {
    let chatOptions = {user : game.user._id, rollMode : game.settings.get("core", "rollMode")};
    if ( ["gmroll", "blindroll"].includes(chatOptions.rollMode) ) chatOptions["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( chatOptions.rollMode === "blindroll" ) chatOptions["blind"] = true;

    const properties = this[`_${this.data.type}ChatData`]();
    let chatData = duplicate(this.data);
    chatData["properties"] = properties

    if (chatData.img.includes("/blank.png"))
      chatData.img = null;

      chatData.transfer = JSON.stringify(
        {
          data : this.data,
          postedItem : true
        }
      );

      renderTemplate('public/systems/wfrp4e/templates/chat/post-item.html', chatData).then(html => {

      chatOptions["content"] = html;
      ChatMessage.create(chatOptions)
    });
  }

  _trappingChatData() {
    const data = duplicate(this.data.data);
    let properties = 
    [
      `<b>Trapping Type</b>: ${CONFIG.trappingCategories[data.trappingType.value]}`,
      `<b>Price</b>: ${data.price.gc} GC, ${data.price.ss} SS, ${data.price.bp} BP`,
      `<b>Encumbrance</b>: ${data.encumbrance.value}`,
      `<b>Availability</b>: ${CONFIG.availability[data.availability.value]}`
    ]
    return properties;
  }

  _skillChatData() {
    const data = duplicate(this.data.data);
    let properties = []
    properties.push( data.advanced == "adv" ? "<b>Advanced</b>" : "<b>Basic</b>")
    return properties;
  }

  _moneyChatData() {
    const data = duplicate(this.data.data);
    let properties = 
    [
      `<b>Value (in pennies)</b>: ${data.coinValue.value}`,
      `<b>Encumbrance</b>: ${data.encumbrance.value}`,
    ]
    return properties;
  }

  _psychologyChatData() {
    return [];
  }

  _mutationChatData() {
    let properties = [
      `<b>Mutation Type</b>: ${CONFIG.mutationTypes[this.data.data.mutationType.value]}`,
    ];
    if (this.data.data.modifier.value)
      properties.push(`<b>Modifier</b>: ${this.data.data.modifier.value}`)
    return properties;
  }

  _diseaseChatData() {
    const data = duplicate(this.data.data);
    let properties = [];
    properties.push("<b>Contraction:</b> " + data.contraction.value);
    properties.push("<b>Incubation:</b> " + `<a class = 'chat-roll'>${data.incubation.value}</a>`);
    properties.push("<b>Duration:</b> " + `<a class = 'chat-roll'>${data.duration.value}</a>`);
    properties.push("<b>Symptoms:</b> " + (data.symptoms.value.split(",").map(i => i = "<a class ='symptom-tag'>"+i.trim()+"</a>")).join(", "));
    if (data.permanent.value)
      properties.push("<b>Permanent:</b> " + data.permanent.value);
    return properties;
  }

  _talentChatData() {
    const data = duplicate(this.data.data);
    let properties = []; 
    properties.push("<b>Max: </b> " + CONFIG.talentMax[data.max.value]);
    if (data.tests.value)
      properties.push("<b>Tests: </b> " + data.tests.value);
    return properties;
  }

  _traitChatData() {
    const data = duplicate(this.data.data);
    let properties = []; 
    if (data.specification.value)
      properties.push("<b>Specification: </b> " + data.specification.value);
    return properties;
  }

  _careerChatData() {
    let properties=[];
    properties.push("<b>Class</b>: " + this.data.data.class.value);
    properties.push("<b>Group</b>: " + this.data.data.careergroup.value);
    properties.push("<b>Status</b>: " + CONFIG.statusTiers[this.data.data.status.tier] + " " + this.data.data.status.standing);
    properties.push("<b>Characteristics</b>: " + this.data.data.characteristics.map(i => i = " " + CONFIG.characteristicsAbbrev[i]));
    properties.push("<b>Skills</b>: " + this.data.data.skills.map(i => i = " " + "<a class = 'skill-lookup'>"+i+"</a>"));
    properties.push("<b>Talents</b>: " + this.data.data.talents.map (i => i = " " + "<a class = 'talent-lookup'>"+i+"</a>"));
    properties.push("<b>Trappings</b>: " + this.data.data.trappings.map (i => i = " " + i));
    properties.push("<b>Income</b>: " + this.data.data.incomeSkill.map(i => " " + this.data.data.skills[i]));
    return properties;
  }

  _injuryChatData() {
    const data = duplicate(this.data.data);
    let properties=[];
    properties.push(`<b>Location</b>: ${data.location.value}`);
    properties.push(`<b>Penalty</b>: ${data.penalty.value}`);
    if (data.penalty.value) 
    properties.push(`<b>Penalty</b>: ${data.penalty.value}`);
    return properties;
  }

_criticalChatData() {
  const data = duplicate(this.data.data);
  let properties=[];
  properties.push(`<b>Wounds</b>: ${data.wounds.value}`);
  properties.push(`<b>Location</b>: ${data.location.value}`);
  if (data.modifier.value)
    properties.push(`<b>Modifier</b>: ${data.modifier.value}`);
    return properties;
  }

  _spellChatData() {
    const data = duplicate(this.data.data);
    let properties = [];
    if(CONFIG.magicLores[data.lore.value])
      properties.push("<b>Lore</b>: " + CONFIG.magicLores[data.lore.value]);
    else
      properties.push("<b>Lore</b>: " + data.lore.value);
    properties.push("<b>CN</b>: " + data.cn.value);
    properties.push("<b>Range</b>: " + data.range.value);
    properties.push("<b>Target</b>: " + data.target.value);
    properties.push("<b>Duration</b>: " + data.duration.value);
    if (data.damage.value)
      properties.push("<b>Damage</b>: " + data.damage.value);

    return properties;
  }

   _prayerChatData() {
    const data = duplicate(this.data.data);
    let properties = [];
    properties.push("<b>Range</b>: " + data.range.value);
    properties.push("<b>Target</b>: " + data.target.value);
    properties.push("<b>Duration</b>: " + data.duration.value);
    if (data.damage.value)
      properties.push("Damage: " + data.damage.value);
    return properties;
  }

  _weaponChatData() {
   const data = duplicate(this.data.data);
  let properties = 
   [
     `<b>Price</b>: ${data.price.gc} GC, ${data.price.ss} SS, ${data.price.bp} BP`,
     `<b>Encumbrance</b>: ${data.encumbrance.value}`,
     `<b>Availability</b>: ${CONFIG.availability[data.availability.value]}`
   ]

    if (data.weaponGroup.value)
      properties.push("<b>Weapon Group</b>: " + CONFIG.weaponGroups[data.weaponGroup.value]);
    if (data.range.value)
      properties.push("<b>Range</b>: " + data.range.value);
    if (data.damage.meleeValue)
      properties.push("<b>Melee Damage</b>: " + data.damage.meleeValue);
    if (data.damage.rangedValue)
      properties.push("<b>Ranged Damage</b>: " + data.damage.rangedValue);
    if (data.twohanded.value)
      properties.push("<b>Two Handed</b>");
    if (data.reach.value) 
      properties.push ("<b>Reach</b>: " + CONFIG.weaponReaches[data.reach.value] + " - " + CONFIG.reachDescription[data.reach.value]);

    let weaponProperties =  WFRP_Utility._separateQualitiesFlaws(WFRP_Utility._prepareQualitiesFlaws(this.data));

    weaponProperties.qualities = weaponProperties.qualities.map(i => i = "<a class ='item-property'>" + i + "</a>");
    weaponProperties.flaws = weaponProperties.flaws.map(i => i = "<a class ='item-property'>" + i + "</a>");

    if (weaponProperties.qualities.length)
      properties.push("<b>Qualities</b>: " + weaponProperties.qualities.join(", "))

      
    if (weaponProperties.flaws.length)
      properties.push("<b>Flaws</b>: " + weaponProperties.flaws.join(", "))
   

    properties = properties.filter(p => p != "Special");
    if (data.special.value)
      properties.push ("<b>Special</b>: " + data.special.value);

    properties = properties.filter(p => !!p);
    return properties;
  }

  _armourChatData() {
    const data = duplicate(this.data.data);
    let properties = 
    [
      `<b>Price</b>: ${data.price.gc} GC, ${data.price.ss} SS, ${data.price.bp} BP`,
      `<b>Encumbrance</b>: ${data.encumbrance.value}`,
      `<b>Availability</b>: ${CONFIG.availability[data.availability.value]}`
    ]
 
     if (data.armorType.value)
       properties.push("<b>Armour Type</b>: " + CONFIG.armorTypes[data.armorType.value]);
     if (data.penalty.value)
       properties.push("<b>Penalty</b>: " + data.penalty.value);

       
     for (let apVal in data.currentAP)
     {
       if (data.currentAP[apVal] == -1)
        data.currentAP[apVal] = data.maxAP[apVal];
     }

    for (let loc in CONFIG.locations)
      if (data.maxAP[loc])
        properties.push(`<b>${CONFIG.locations[loc]} AP</b>: ${data.currentAP[loc]}/${data.maxAP[loc]}`);


      let armourProperties =  WFRP_Utility._separateQualitiesFlaws(WFRP_Utility._prepareQualitiesFlaws(this.data));

       armourProperties.qualities = armourProperties.qualities.map(i => i = "<a class ='item-property'>" + i + "</a>");
       armourProperties.flaws = armourProperties.flaws.map(i => i = "<a class ='item-property'>" + i + "</a>");
   
       if (armourProperties.qualities.length)
         properties.push("<b>Qualities</b>: " + armourProperties.qualities.join(", "))
   
         
       if (armourProperties.flaws.length)
         properties.push("<b>Flaws</b>: " + armourProperties.flaws.join(", "))
      
   
       properties = properties.filter(p => p != "Special");
       if (data.special.value)
         properties.push ("<b>Special</b>: " + data.special.value);

     properties = properties.filter(p => !!p);
     return properties;
   }

   _ammunitionChatData() {
    const data = duplicate(this.data.data);
     let properties = [];
     properties.push ("<b>Ammunition Type:</b> " + CONFIG.ammunitionGroups[data.ammunitionType.value])

     if (data.range.value)
      properties.push("<b>Range</b>: " + data.range.value);

     if (data.damage.value)
      properties.push("<b>Damage</b>: " + data.damage.value);

      let ammoProperties =  WFRP_Utility._separateQualitiesFlaws(WFRP_Utility._prepareQualitiesFlaws(this.data));

       ammoProperties.qualities = ammoProperties.qualities.map(i => i = "<a class ='item-property'>" + i + "</a>");
       ammoProperties.flaws = ammoProperties.flaws.map(i => i = "<a class ='item-property'>" + i + "</a>");
   
       if (ammoProperties.qualities.length)
         properties.push("<b>Qualities</b>: " + ammoProperties.qualities.join(", "))
   
         
       if (ammoProperties.flaws.length)
         properties.push("<b>Flaws</b>: " + ammoProperties.flaws.join(", "))


     properties = properties.filter(p => p != "Special");
     if (data.special.value)
       properties.push ("Special: " + data.special.value);

     properties = properties.filter(p => !!p);
     return properties;
   }
}
// Assign ItemWfrp4e class to CONFIG
CONFIG.Item.entityClass = ItemWfrp4e;
