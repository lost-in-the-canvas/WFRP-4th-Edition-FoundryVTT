CONFIG.initiative = {
  decimals: 2
}

// Species
CONFIG.species = {
  "human": "Human",
  "dwarf": "Dwarf",
  "halfling": "Halfling",
  "helf": "High Elf",
  "welf": "Wood Elf",
  "gnome": "Gnome"
};

//status tiers
CONFIG.statusTiers = {
  "g" : "Gold",
  "s" : "Silver",
  "b" : "Brass"
};


// Weapon Types
CONFIG.weaponTypes = {
  "melee" : "Melee Weapon",
  "ranged" : "Ranged Weapon",
  "both" : "Both"
};

// Weapon Groups
CONFIG.weaponGroups = {
  "basic": "Basic",
  "cavalry": "Cavalry",
  "fencing": "Fencing",
  "brawling": "Brawling",
  "flail": "Flail",
  "parry": "Parry",
  "polearm": "Polearm",
  "twohanded": "Two-Handed",
  "blackpowder": "Blackpowder",
  "bow": "Bow",
  "crossbow": "Crossbow",
  "entangling": "Entangling",
  "engineering": "Engineering",
  "explosives": "Explosives",
  "sling": "Sling",
  "throwing": "Throwing",
};

// Given a group, what's the primary type, melee or ranged
CONFIG.groupToType = {
  "basic": "Melee",
  "cavalry": "Melee",
  "fencing": "Melee",
  "brawling": "Melee",
  "flail": "Melee",
  "parry": "Melee",
  "polearm": "Melee",
  "twohanded": "Melee",
  "blackpowder": "Ranged",
  "bow": "Ranged",
  "crossbow": "Ranged",
  "entangling": "Ranged",
  "engineering": "Ranged",
  "explosives": "Ranged",
  "sling": "Ranged",
  "throwing": "Ranged",
};

// Weapon Groups
CONFIG.weaponGroupDescriptions = {
  "basic": "Basic",
  "cavalry": "Cavalry weapons are assumed to be used when mounted. When not used from horse-back, all two-handed weapons in the Cavalry Weapon Group also count as Two-Handed weapons. Single-handed Cavalry weapons are not normally used when unmounted.",
  "fencing": "Fencing",
  "brawling": "Brawling",
  "flail": "Unskilled characters add the Dangerous Weapon Flaw to their Flails, and the other listed Weapon Qualities are not used.",
  "parry": "Any one-handed weapon with the Defensive Quality can be used with Melee (Parry). When using Melee (Parry), a weapon can be used to Oppose an incoming attack without the normal –20 oﬀhand penalty.",
  "polearm": "Polearm",
  "twohanded": "Two-Handed",
  "blackpowder": "Those with Ranged (Engineering) can use Blackpowder weapons without penalty.",
  "bow": "Bow",
  "crossbow": "Crossbows weapons are relatively simple to use. You can attempt a Ranged (Crossbow) Test using your Ballistic Skill, but the weapon loses all Qualities whilst retaining its Flaws.",
  "entangling": "Entangling",
  "engineering": "All Engineering weapons can be used by characters with Ranged (Blackpowder), but the weapons lose all Weapon Qualities whilst retaining their ﬂaws.",
  "explosives": "Those with Ranged (Engineering) can use Explosive weapons without penalty.",
  "sling": "Sling",
  "throwing": "Thrown weapons are relatively simple to use. You can attempt a Ranged (Throwing) Test using your Ballistic Skill, but the weapon loses all Qualities whilst retaining its Flaws.",
};

// Ammo Groups
CONFIG.ammunitionGroups = {
  "BPandEng": "Blackpowder and Engineering",
  "bow": "Bow",
  "crossbow": "Crossbow",
  "sling": "Sling",
};

// Item Qualities
CONFIG.itemQualities ={
  "durable": "Durable",
  "fine": "Fine",
  "lightweight": "Lightweight",
  "practical": "Practical",
};

// Item Flaws
CONFIG.itemFlaws = {
  "ugly": "Ugly",
  "shoddy": "Shoddy",
  "unreliable": "Unreliable",
  "bulky": "Bulky",
}


// Weapon Qualities
CONFIG.weaponQualities = {
  "accurate": "Accurate",
  "blackpowder": "Blackpowder",
  "blast": "Blast",
  "damaging": "Damaging",
  "defensive": "Defensive",
  "entangle": "Entangle",
  "fast": "Fast",
  "hack": "Hack",
  "impact": "Impact",
  "impale": "Impale",
  "penetrating": "Penetrating",
  "pistol": "Pistol",
  "precise": "Precise",
  "pummel": "Pummel",
  "repeater": "Repeater",
  "shield": "Shield",
  "trapblade": "Trap Blade",
  "unbreakable": "Unbreakable",
  "wrap": "Wrap"
};

// Weapon Flaws
CONFIG.weaponFlaws = {
  "dangerous": "Dangerous",
  "imprecise": "Imprecise",
  "reload": "Reload",
  "slow": "Slow",
  "tiring": "Tiring",
  "undamaging": "Undamaging"
};


// Weapon Qualities
CONFIG.qualityDescriptions = {
  "accurate": "The weapon is accurate and easy to hit with. Gain a bonus of +10 to any Test when firing this weapon",
  "blackpowder": "The crack of gunfire followed by gouts of smoke and confusioncan be terrifying. If you are targeted by a Blackpowder weapon,you must pass an Average (+20) Cool Test or take a BrokenCondition, even if the shot misses.",
  "blast": "All Characters within (Rating) yards of the struck target pointtake SL+Weapon Damage, and suffer any Conditions theweapon inflicts.",
  "damaging": "A Damaging weapon can use the higher score from either the units die or the SL to determine the Damage caused from a successful hit. For example, if you roll 34 in your attack Test and the target number was 52 you can choose to use the SL, which in this case is 2, or the units die result, which is 4. An Undamaging weapon can never also be Damaging (Undamaging takes precedent).",
  "defensive": "Defensive weapons are designed to parry incoming attacks. If you are wielding such a weapon, gain a bonus of +1 SL to any Melee Test when you oppose an incoming attack.",
  "distract": "Distracting weapons can be used to drive an opponent back due to their dangerous or whip-like natures. Instead of causing Damage, a successful attack with a Distracting weapon can force an opponent back 1 yard per SL by which you win the Opposed Test.",
  "entangle": "Your weapon wraps around your opponents, entangling them. Any opponent successfully hit by your weapon gains the Entangled Condition with a Strength value equal to your Strength Characteristic. When Entangling an opponent, you cannot otherwise use the weapon to hit. You can end the Entangling whenever you wish.",
  "fast": "Fast weapons are designed to strike out with such speed that parrying is not an option, leaving an opponent skewered before they can react. A wielder of a Fast weapon can choose to attack with the Fast weapon outside of the normal Initiative sequence, either striking first, last, or somewhere in between as desired. Further, all Melee Tests to defend against Fast weapons suffer a penalty of –10 if your opponent is using a weapon without the Fast Quality; other Skills defend as normal. Two opponents with Fast weapons fight in Initiative order (relative to each other) as normal. A Fast weapon may never also be Slow (Slow takes precedent).",
  "hack": "Hacking weapons have heavy blades that can hack through armor with horrific ease. If you hit an opponent, you Damage a struck piece of armor or shield by 1 point as well as wounding the target.",
  "impact": "Some weapons are just huge or cause terrible damage due to their weight or design. On a successful hit, add the result of the units die of the attack roll to any Damage caused by an Impact weapon. An Undamaging weapon can never also have Impact (Undamaging takes precedent).",
  "impale": "Impale weapons can kill with a single clean blow. Impale weapons cause a Critical Hit on any number divisible by 10 (i.e.: 10, 20, 30, etc.) as well as on doubles (i.e.: 11, 22, 33) rolled equal or under an appropriate Test in combat. If the impale comes from a ranged weapon, the ammunition used has firmly lodged itself in the target’s body. Arrows and bolts require a successful Challenging (+0) Heal Test to remove — bullets require a surgeon (see the Surgery Talent in Chapter 4: Skills and Talents). You cannot heal 1 of your Wounds for each unremoved arrow or bullet.",
  "penetrating": "The weapon is highly effective at penetrating armour. Non-metal APs are ignored, and the first point of all other armour is ignored.",
  "pistol": "You can use this weapon to attack in Close Combat.",
  "precise": "The weapon is easy to get on target. Gain a bonus of +1 SL to any successful Test when attacking with this weapon.",
  "pummel": "Pummel weapons are especially good at battering foes into submission. If you score a Head hit with a Pummel weapon, attempt an Opposed Strength/ Endurance test against the struck opponent. If you win the test, your opponent gains a Stunned Condition.",
  "repeater": "Your weapon holds (Rating) shots, automatically reloading after each time you fire. When you use all your shots, you must fully reload the weapon using the normal rules.",
  "shield": "If you use this weapon to oppose an incoming attack, you count as having (Rating) Armour Points on all locations of your body. If your weapon has a Shield Rating of 2 or higher (so: Shield 2 or Shield 3), you may also Oppose incoming missile shots in your Line of Sight.",
  "trapblade": "Some weapons are designed to trap other weapons, and sometimes even break them. If you score a Critical when defending against an attack from a bladed weapon you can choose to trap it instead of causing a Critical Hit. If you choose to do this, enact an Opposed Strength Test, adding your SL from the previous Melee Test. If you succeed, your opponent drops the blade as it is yanked free. If you score an Astounding Success, you not only disarm your opponent, but the force of your maneuver breaks their blade unless it has the Unbreakable quality. If you fail the Test, your opponent frees the blade and may fight on as normal.",
  "unbreakable": "The weapon is exquisitely well-made or constructed from an especially strong material. Under almost all circumstances, this weapon will not break, corrode, or lose its edge.",
  "wrap": "Wrap weapons typically have long chains with weights at the end, making it very difficult to parry them effectively. Melee Tests opposing an attack from a Wrap weapon suffer a penalty of –1 SL, as parried strikes wrap over the top of shields, or around blades."
};

// Weapon Flaws
CONFIG.flawDescriptions = {
  "dangerous": "Some weapons are almost as likely to hurt you as your opponent. Any failed test including an 9 on either 10s or units die results in a Fumble (see Chapter 5: Rules for more on Fumbles).",
  "imprecise": "Imprecise weapons are difficult to bring to bear as they are unwieldy or hard to aim. Suffer a penalty of –1 SL when using the weapon to attack. An Imprecise Weapon can never be Precise (Imprecise takes precedent).",
  "reload": "The weapon is slow to reload. An unloaded weapon with this flaw requires an Extended Ranged Test for the appropriate Weapon Group scoring (Rating) SL to reload. If you are interrupted while reloading, you must start again from scratch.",
  "slow": "Slow weapons are unwieldy and heavy, making them difficult to use properly. Characters using Slow weapons always strike last in a Round, regardless of Initiative order. Further, opponents gain a bonus of +1 SL to any Test to defend against your attack",
  "tiring": "The weapon is fatiguing to use or difficult to bring to bear. You only gain the benefit of the Impact and Damaging Weapon Traits on a Turn you Charge.",
  "undamaging": "Some weapons are not very good at penetrating armour. All APs are doubled against Undamaging weapons. Further, you do not automatically inflict a minimum of 1 Wound on a successful hit in combat."
};

// Armor Qualities
CONFIG.armorQualities = {
  "flexible": "Flexible",
  "Impenetrable": "Impenetrable",
};

// Armor Flaws
CONFIG.armorFlaws = {
  "partial": "Partial",
  "weakpoints": "Weakpoints",
};

// Equipment Types
CONFIG.armorTypes = {
  "softLeather": "Soft Leather",
  "boiledLeather": "Boiled Leather",
  "mail": "Mail",
  "plate": "Plate",
};

// Consumable Types
CONFIG.consumableTypes = {
  "potion": "Potion",
  "poison": "Poison",
  "scroll": "Scroll",
  "wand": "Wand",
  "rod": "Rod",
  "trinket": "Trinket"
};

CONFIG.weaponReaches={
 "personal":"Personal",
 "vshort":"Very Short",
 "short":"Short",
 "average": "Average",
 "long":"Long",
 "vLong":"Very Long",
 "massive":"Massive",
}



CONFIG.rangeModifiers={
  "Point Blank" : "Easy (+40)",
  "Short Range":"Average (+20)",
  "Normal" : "Challenging (+0)",
  "Long Range": "Difficult (-10)",
  "Extreme": "Very Hard (-30)",
 }

CONFIG.difficultyModifiers = {
 "veasy" : 60,
 "easy" : 40 , 
 "average":20, 
 "challenging":0,
 "difficult": -10,
 "hard" : -20,
 "vhard": -30
}
CONFIG.difficultyLabels = {

 "veasy" :"Very Easy (+60)",
 "easy" :"Easy (+40)",
 "average":"Average (+20)",
 "challenging":"Challenging (+0)",
 "difficult":"Difficult (-10)",
 "hard" :"Hard (-20)",
 "vhard":"Very Hard (-30)"
}
 
CONFIG.reachDescription={
  "personal":"Your legs and fists, perhaps your head, and anything attached to those.",
  "vshort":"Less than a foot in length.",
  "short":"Up to 2 feet in length.",
  "average": "Up to 3 feet long.",
  "long":"Up to 6 feet long.",
  "vLong":"Up to 10 feet in length; can Engage enemies up to 4 yards away, rather than just 2.",
  "massive":"Anything over 10 feet long; can Engage enemies up to 6 yards away, rather than just 2",
 }
 
 CONFIG.availability = {
   "common": "Common",
   "scarce": "Scarce",
   "rare": "Rare",
   "exotic": "Exotic",
 }

 
// Consumable Types
CONFIG.trappingTypes = {
  "weapon" : "Weapons",
  "armour" : "Armour",
  "money" : "Money",
  "ammunition" : "Ammunition",
  "container" : "Container",
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
};

// 
CONFIG.characteristics = {
  "ws": "Weapon Skill",
  "bs": "Ballistic Skill",
  "s": "Strength",
  "t": "Toughness",
  "i": "Initiative",
  "ag": "Agility",
  "dex": "Dexterity",
  "int": "Intelligence",
  "wp": "Willpower",
  "fel": "Fellowship"
};

CONFIG.characteristicsAbrev = {
  "ws": "WS",
  "bs": "BS",
  "s": "S",
  "t": "T",
  "i": "I",
  "ag": "Ag",
  "dex": "Dex",
  "int": "Int",
  "wp": "WP",
  "fel": "Fel"
};

CONFIG.skillTypes = {
  "bsc" : "Basic",
  "adv" : "Advanced"
};

CONFIG.skillGroup = {
  "isSpec" : "Is Specialization",
  "noSpec" : "Not Specialization"
};

CONFIG.talentMax = {
  "1":"1",
  "2":"2",
  "none":"None",
  "ws":" Weapon Skill Bonus",
  "bs":"Ballistic Skill Bonus",
  "s": "Strength Bonus",
  "t": "Toughness Bonus",
  "i": "Initiative Bonus",
  "ag": "Agility Bonus",
  "dex": "Dexterity Bonus",
  "int": "Intelligence Bonus",
  "wp": "Willpower Bonus",
  "fel": "Fellowship Bonus"
}


// Creature Sizes
CONFIG.actorSizes = {
  "tiny": "Tiny",
  "ltl": "Little",
  "sml": "Small",
  "avg": "Average",
  "lrg": "Large",
  "enor": "Enormous",
  "mnst": "Monstrous"
};


// Condition Types
CONFIG.magicLores = {
  "petty": "Petty",
  "beasts": "Beasts",
  "death": "Death",
  "fire": "Fire",
  "heavens": "Heavens",
  "metal": "Metal",
  "life": "Life",
  "light": "Light",
  "shadow": "Shadow",
  "hedgecraft": "Hedgecraft",
  "witchcraft": "Witchcraft",
  "daemonology": "Daemonology",
  "necromancy": "Necromancy",
  "nurgle": "Nurgle",
  "slaanesh": "Slaanesh",
  "tzeentch": "Tzeentch",
};


CONFIG.magicWind = {
  "petty": "None",
  "beasts": "Ghur",
  "death": "Shyish",
  "fire": "Aqshy",
  "heavens": "Azyr",
  "metal": "Chamon",
  "life": "Ghyran",
  "light": "Hysh",
  "shadow": "Ulgu",
  "hedgecraft": "None",
  "witchcraft": "None",
  "daemonology": "Dhar",
  "necromancy": "Dhar",
  "nurgle": "Dhar",
  "slaanesh": "Dhar",
  "tzeentch": "Dhar",
};



CONFIG.prayerTypes = {
  "blessing" : "Blessing",
  "miracle" : "Miracle"
}



// Condition Types
CONFIG.conditionTypes = {
  "blinded": "Blinded",
  "charmed": "Charmed",
  "deafened": "Deafened",
  "fatigued": "Fatigued",
  "frightened": "Frightened",
  "grappled": "Grappled",
  "incapacitated": "Inacapacitated",
  "invisible": "Invisible",
  "paralyzed": "Paralyzed",
  "petrified": "Petrified",
  "poisoned": "Poisoned",
  "prone": "Prone",
  "restrained": "Restrained",
  "stunned": "Stunned",
  "unconscious": "Unconscious",
  "exhaustion": "Exhaustion",
  "diseased": "Diseased"
};

// Languages
CONFIG.languages = {
  "common": "Common",
  "aarakocra": "Aarakocra",
  "abyssal": "Abyssal",
  "aquan": "Aquan",
  "auran": "Auran",
  "celestial": "Celestial",
  "deep": "Deep Speech",
  "draconic": "Draconic",
  "druidic": "Druidic",
  "dwarvish": "Dwarvish",
  "elvish": "Elvish",
  "giant": "Giant",
  "gith": "Gith",
  "gnomish": "Gnomish",
  "goblin": "Goblin",
  "gnoll": "Gnoll",
  "halfling": "Halfling",
  "ignan": "Ignan",
  "infernal": "Infernal",
  "orc": "Orc",
  "primordial": "Primordial",
  "sylvan": "Sylvan",
  "terran": "Terran",
  "cant": "Thieves' Cant",
  "undercommon": "Undercommon"
};
class DiceWFRP {
  /**
   * A standardized helper function for managing core 5e "d20 rolls"
   *
   * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
   * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
   *
   * @param {Event} event           The triggering event which initiated the roll
   * @param {Array} parts           The dice roll component parts, excluding the initial d20
   * @param {Object} data           Actor or item data against which to parse the roll
   * @param {String} template       The HTML template used to render the roll dialog
   * @param {String} title          The dice roll UI window title
   * @param {String} alias          The alias with which to post to chat
   * @param {Function} flavor       A callable function for determining the chat message flavor given parts and data
   * @param {Function} onClose      Callback for actions to take when the dialog form is closed
   * @param {Object} dialogOptions  Modal dialog options
   */
  static prepareTest({dialogOptions, testData, cardOptions, onClose}) {
    // Inner roll function
    let rollMode = game.settings.get("core", "rollMode");

    // Merge input with generic properties consistent between all tests
    mergeObject(testData, 
    {
      testDifficulty : "challenging",
      testModifier : 0,
      slBonus : 0,
      successBonus : 0,
    });
      
    mergeObject(dialogOptions.data, 
      {
        testDifficulty : "challenging",
        difficultyLabels : CONFIG.difficultyLabels,
        testModifier : 0,
        slBonus : 0,
        successBonus : 0,
      });

    mergeObject(cardOptions, 
      {
        user : game.user._id,
        rollMode : undefined,
      })
    
    var roll;
    if (dialogOptions.rollOveride)
      roll = dialogOptions.rollOveride;
    else
      roll = () =>{
      let roll = DiceWFRP.rollTest(testData);
      if (testData.extra)
        mergeObject(roll, testData.extra);
      DiceWFRP.renderRollCard(cardOptions, roll);
    }

    dialogOptions.data.rollMode = rollMode;
    dialogOptions.data.rollModes = CONFIG.rollModes;
    
    renderTemplate(dialogOptions.template, dialogOptions.data).then(dlg => {
      new Dialog({
          title: dialogOptions.title,
          content: dlg,
          buttons: dialogOptions.buttons,
          close: html => dialogOptions.callback(html, roll)
        }).render(true);
    });
  }


  static rollTest(testData){
    let roll = new Roll("1d100").roll();
    let successBonus = testData.successBonus;
    let slBonus = testData.slBonus;
    let targetNum = testData.target;
    let SL = (Math.floor(targetNum/10) - Math.floor(roll.total/10)) + slBonus;

    if (roll.total >= 96)
    {
      if (SL > -1)
        SL = -1;
    }
    else if (roll.total <= 5)
    {
      if (SL < 1)
        SL = 1; 
    }

    let description;

    if (SL > 0){
      description = "Success"
      SL = SL + successBonus;
      SL = "+" + SL.toString()

    }
    else if(SL < 0){
      description = "Failure"
      SL = SL.toString()
    }
    else { // SL == 0,
      if (targetNum > roll.total){
        description = "Success"
        SL = SL + successBonus;
        SL = "+" + SL.toString()
      }
      else {
        description = "Failure"
        SL = "-" + SL.toString() // Should result in -0
      }
    }

    switch(Math.abs(Number(SL)))
    {
      case 6:
        description = "Astounding " + description;
        break;
      
      case 5:
      case 4:
        description = "Impressive " + description;
        break;

      case 3:
      case 2:
        break;

      case 1:
      case 0:
        description = "Marginal " + description;
        break;

      default: 
        if (Math.abs(Number(SL)) > 6)
          description = "Astounding " + description;

    }

    if (testData.includeCriticalsFumbles)
    {
      if (roll.total > targetNum && roll.total % 11 == 0)
        description = description + " - Fumble!";
      else if (roll.total <= targetNum && roll.total % 11 == 0)
        description = desrciption + " - Critical!";
        
    }

    let rollResults={
      target: targetNum,
      roll: roll.total,
      SL: SL,
      description: description
    }
    
    return rollResults;
   } 

   static rollCastTest(testData){
     let spell = testData.extra.spell;
     let miscastCounter = 0;
      let testResults = this.rollTest(testData);
      if (spell.data.cn.SL >= spell.data.cn.value)
        spell.data.cn.value = 0;

      if (testData.extra.malignantInfluence)
        if (Number(testResults.roll.toString().split('').pop()) == 8)
          miscastCounter++;
      let slOver = (Number(testResults.SL) - spell.data.cn.value)
      if (testResults.roll > testResults.target)
      {
        testResults.description = "Casting Failed"
        if (testResults.roll % 11 == 0)
          miscastCounter++;
      }
      else if (slOver < 0)
      {
        testResults.description = "Casting Failed"

        // If no ID
        if (testResults.roll % 11 == 0)
        {
          testResults.description = "Casting Succeeded - Critical Cast"
          miscastCounter++;
        }
      }
      else
      {
        testResults.description = "Casting Succeeded"
        let overcasts = Math.floor(slOver / 2);
        testResults.overcasts = overcasts;

        // If no ID
        if (testResults.roll % 11 == 0)
          miscastCounter++;
      }

      if (testData.extra.ingredient)
        miscastCounter--;
      if (miscastCounter < 0)
        miscastCounter = 0;
      if (miscastCounter > 2)
        miscastCounter = 2

      switch (miscastCounter)
      {
        case 1: testResults.description = testResults.description + " - Minor Miscast"
        break;
        case 2: testResults.description = testResults.description + " - Major Miscast"
        break;
      }

      return testResults;
   } 

   static rollChannellTest(testData, actor){
    let spell = testData.extra.spell;
    let miscastCounter = 0;
     let testResults = this.rollTest(testData);
     let SL = testResults.SL;

     if (testData.extra.malignantInfluence)
       if (Number(testResults.roll.toString().split('').pop()) == 8)
         miscastCounter++;
       
      
     if (testResults.roll > testResults.target)
     {
        // Optional Rule: If SL in extended test is -/+0, counts as -/+1
        if (Number(SL) == 0) 
          SL = -1;

       testResults.description = "Channell Failed"
       if (testResults.roll % 11 == 0 || testResults.total % 10 == 0)
         miscastCounter += 2;
     }
     else
     {
       testResults.description = "Channell Succeeded"

        // Optional Rule: If SL in extended test is -/+0, counts as -/+1
       if (Number(SL) == 0)
        SL = 1;
       // If no ID
       if (testResults.roll % 11 == 0)
       {
         miscastCounter++;
         spell.data.cn.SL = spell.data.cn.value;
         testResults.description = testResults.description + " - Critical Channell"

       }
     }

     spell.data.cn.SL += Number(SL);
     if (spell.data.cn.SL > spell.data.cn.value)
      spell.data.cn.SL = spell.data.cn.value;
    else if (spell.data.cn.SL < 0)
     spell.data.cn.SL = 0;
     actor.updateOwnedItem({id: spell.id , 'data.cn.SL' : spell.data.cn.SL});

     if (testData.extra.ingredient)
       miscastCounter--;
     if (miscastCounter < 0)
       miscastCounter = 0;
     if (miscastCounter > 2)
       miscastCounter = 2

     switch (miscastCounter)
     {
       case 1: testResults.description = testResults.description + " - Minor Miscast"
       case 2: testResults.description = testResults.description + " - Major Miscast"
     }
     return testResults;
 } 


 static rollPrayTest(testData, actor){
  let prayer = testData.extra.prayer;
   let testResults = this.rollTest(testData);
   let SL = testResults.SL;
  let extensions = 0;
  let currentSin = actor.data.data.status.sin.value;


   if (testResults.roll > testResults.target)
   {
     testResults.description = "Prayer Refused"
     if (testResults.roll % 11 == 0 || Number(testResults.roll.toString().split('').pop()) <= currentSin)
       {
         testResults.description += " - Wrath of the Gods"
         currentSin--;
         if (currentSin < 0)
         currentSin = 0;
        actor.update({"data.status.sin.value" : currentSin});
        }

   }
   else
   {
     testResults.description = "Prayer Granted"

     if (Number(testResults.roll.toString().split('').pop()) <= currentSin)
     {
       testResults.description += " - Wrath of the Gods"
       currentSin--;
       if (currentSin < 0)
       currentSin = 0;
      actor.update({"data.status.sin.value" : currentSin});
     }
    extensions = Math.floor(SL/2);

   }



   testResults.extensions = extensions;
   return testResults;
} 


 static renderRollCard(chatOptions, testData) {
   let chatData = {
     title : chatOptions.title,
     testData : testData
   }
  // Generate HTML from the requested chat template
  return renderTemplate(chatOptions.template, chatData).then(html => {

    // Emit the HTML as a chat message
    chatOptions["content"] = html;
    ChatMessage.create(chatOptions, false);
    return html;
  });
}


  
  
  static opposeData  = {
    opposeStarted : false,
    actor : undefined,
    rollData : undefined
  }
  static chatListeners(html) {

    // Chat card actions
    html.on('click', '.card-buttons button', ev => {
      ev.preventDefault();

      // Extract card data
      let button = $(ev.currentTarget),
          messageId = button.parents('.message').attr("data-message-id"),
          senderId = game.messages.get(messageId).user._id;

      // Confirm roll permission
      if ( !game.user.isGM && ( game.user._id !== senderId )) return;

      // Extract action data
      let action = button.attr("data-action"),
          card = button.parents('.chat-card'),
          actor = game.actors.get(card.attr('data-actor-id'));
      let rollData = { target : Number(card.attr('roll-target')),
           SL : card.attr('roll-SL'),
          result : Number(card.attr('roll-result'))
      };

      if (!this.opposeData.opposeStarted)
      {
        this.opposeData.opposeStarted = true;
        this.opposeData.actor = actor;
        this.opposeData.rollData = rollData;
        let chatOptions = {
          user: senderId,
          speaker: {
            alias: actor.name
          },
          template: "public/systems/wfrp4e/templates/chat/characteristic-roll.html",
        };

        return renderTemplate(chatOptions.template, rollData).then(html =>{

        let index = game.messages.entities.findIndex(e => e.data._id === messageId);
        let m = game.messages.entities[index];
        m.update({content: html}, true).then(message => {
          ui.chat.updateMessage(message);});
        });
    }
    else
    {
      this.opposeData.opposeStarted = false;
      let result = {result:  DiceWFRP.evaluateOpposedTest(actor, rollData)};
      let chatOptions = {
        user: game.user._id,
        template: "public/systems/wfrp4e/templates/chat/opposed-result.html"
      }
      return renderTemplate(chatOptions.template, result).then(html => {
           // Emit the HTML as a chat message
           chatOptions["content"] = html;
           ChatMessage.create(chatOptions, false);
           return html;
      });
    }
    });
  }

  static evaluateOpposedTest(defender, defenderRollData)
  {
    let opposeResult = {};
    let attackerSL = parseInt(this.opposeData.rollData.SL);
    let defenderSL = parseInt(defenderRollData.SL);
    let differenceSL = 0;
    if (attackerSL >= defenderSL)
      {
        differenceSL = attackerSL - defenderSL;
        opposeResult.result = this.opposeData.actor.name + " won by " + differenceSL + " SL";
      }
      else
      {
        differenceSL = defenderSL - attackerSL;
        opposeResult.result = defender.name + " won by " + differenceSL + " SL";
      }
      return opposeResult;
  }
}

/**
 * Highlight critical success or failure on d20 rolls
 */
Hooks.on("renderChatMessage", (message, data, html) => {
  if ( !message.isRoll || message.roll.parts[0].faces !== 20 ) return;
  let d20 = message.roll.parts[0].total;
  if ( d20 === 20 ) html.find(".dice-total").addClass("success");
  else if ( d20 === 1 ) html.find(".dice-total").addClass("failure");
});


/**
 * Activate certain behaviors on FVTT ready hook
 */
Hooks.once("init", () => {

  // IMPORT CODE FOR CAREERS
/* let counter = 0;
  fetch ("careers.json").then(r => r.json()).then(async records => {
    let careerData = {
      data : {}
    };
    
    for (let careerClass of records) {
      for (let careerGroup of careerClass.CareerPaths) {
        for (let careerTier of careerGroup.Tiers) {
          careerData.name = careerTier.Name;
          careerData.type = "career"
          careerData.data["class.value"] = careerClass.ClassName;
          careerData.data["careergroup.value"] = careerGroup.PathName;
          careerData.data["level.value"] = careerTier.Tier;

          try {
          careerData.data["status.tier"] = careerTier.StatusTier[0].toLowerCase();
          careerData.data["status.standing"] = careerTier.StatusStanding;
          }
          catch{
            careerData.data["status.tier"] = "";
            careerData.data["status.standing"] = 0;
          }
          careerData.data["characteristics"] = [];
          careerData.data["skills"] = [];
          careerData.data["talents"] = [];
          careerData.data["trappings"] = [];
          for (let careerChar of careerTier.CareerCharacteristics){
            let chCounter = 0;
            for (let ch in CONFIG.characteristics){
              if (chCounter == careerChar){
                careerData.data.characteristics.push(ch);
                break;
              }
              chCounter++;
            }
          }
          for (let skill of careerTier.CareerSkills)
            careerData.data.skills.push(skill);
          for (let talent of careerTier.CareerTalents)
            careerData.data.talents.push(talent);
          for (let trappings of careerTier.CareerTrappings)
            careerData.data.trappings.push(trappings);
          
          let folder = game.folders.entities.find(f => f.name == careerGroup.PathName)
          try {
          careerData.folder = folder.data._id;
          }
          catch{
            careerData.folder = undefined;
          }
          await Item.create(careerData, {displaySheet : false});
        }
    }
  }
  })*/

    // IMPORT CODE FOR TALENTS
 /* fetch ("talents.json").then(r => r.json()).then(async records => {
    let talentData = {
      data : {},
    }; 
    for (data of records)
{
      talentData.name = data.Name;
      talentData.type = "talent"
      for (let talentMax in CONFIG.talentMax)
        if (CONFIG.talentMax[talentMax] == data.Max)
          talentData.data['max.value'] = talentMax;
      talentData.data["tests.value"] = data.Tests;
      talentData.data["description.value"] = data.Description;
      let folder = game.data.folders.find(f => f.name == "Talents");
      talentData.folder = folder._id;
      await Item.create(talentData, {displaySheet : false});     
    }
  })*/

      // IMPORT CODE FOR TRAITS
 /*fetch ("traits.json").then(r => r.json()).then(async records => {
    let traitData = {
      data : {},
    }; 
    for (data of records)
{
      traitData.name = data.Name;
      traitData.type = "trait"
      traitData.data["description.value"] = data.Description;
      let folder = game.data.folders.find(f => f.name == "Traits");
      traitData.folder = folder._id;
      await Item.create(traitData, {displaySheet : false});     
    }
  })*/


  

  /**
   * Register diagonal movement rule setting
   */

  game.settings.register("wfrp4e", "initiativeRule", {
    name: "Initiative Rules",
    hint: "Configure which method is used to determine who acts first in combat.",
    scope: "world",
    config: true,
    default: "default",
    type: String,
    choices: {
      "default": "Default (Highest to Lowest Initative, Agility Tiebreaks)",
      "sl": "Roll an Initiative test, higher SL goes first",
      "d10Init": "Roll a d10 and add Initiative, higher goes first",
      "d10InitAgi": "Roll a d10, add Initiative Bonus and Agility Bonus, higher goes first"
    },
    onChange: rule => _setWfrp4eInitiative(rule)
  });
  _setWfrp4eInitiative(game.settings.get("wfrp4e", "initiativeRule"));


  function _setWfrp4eInitiative(initMethod)
  {
    let formula;
    switch (initMethod)
    {
      case "default":  
      formula = "@characteristics.i.value + @characteristics.ag.value/100";
      break;

      case "sl": 
      formula = "(Math.floor(@characteristics.i.value / 10) - Math.floor(1d100/10))"
      break;

      case "d10Init": 
      formula = "1d10 + @characteristics.i.value"
      break;

      case "d10InitAgi": 
      formula = "1d10 + @characteristics.i.bonus + @characteristics.ag.bonus"
      break;
    }

    let decimals = (initMethod == "default") ? 2 : 0; 
    CONFIG.initiative = {
      formula: formula,
      decimals: decimals
    }
  }

  game.settings.register("wfrp4e", "fastSL", {
    name: "Fast SL",
    hint: "(NOT IMPLEMENTED) Determine SL with Fast SL as described on page 152",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("wfrp4e", "testAbove100", {
    name: "Tests Above 100%",
    hint: "(NOT IMPLEMNTED) Use optional rule Tests Above 100% as described on p 151. A successful Test gains +1 SL for each full 10% a tested Characteristic or Skill exceeds 100%",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Pre-load templates
  loadTemplates([
    "public/systems/wfrp4e/templates/actors/actor-attributes.html",
    "public/systems/wfrp4e/templates/actors/actor-abilities.html",
    "public/systems/wfrp4e/templates/actors/actor-main.html",
    "public/systems/wfrp4e/templates/actors/actor-combat.html",
    "public/systems/wfrp4e/templates/actors/actor-biography.html",
    "public/systems/wfrp4e/templates/actors/actor-inventory.html",
    "public/systems/wfrp4e/templates/actors/actor-skills.html",
    "public/systems/wfrp4e/templates/actors/actor-magic.html",
    "public/systems/wfrp4e/templates/actors/actor-religion.html",
    "public/systems/wfrp4e/templates/actors/actor-talents.html",
    "public/systems/wfrp4e/templates/actors/actor-classes.html",
    "public/systems/wfrp4e/templates/actors/actor-notes.html",
    "public/systems/wfrp4e/templates/actors/npc-main.html",
    "public/systems/wfrp4e/templates/chat/dialog-constant.html",
    "public/systems/wfrp4e/templates/chat/test-card.html",
    "public/systems/wfrp4e/templates/items/item-header.html",
    "public/systems/wfrp4e/templates/items/item-description.html",
  ]);
});




/**
 * Activate certain behaviors on Canvas Initialization hook
 */
Hooks.on("canvasInit", () => {

  // Apply the current setting
  /* -------------------------------------------- */

  /**
   * Override default Grid measurement
   */
  SquareGrid.prototype.measureDistance = function(p0, p1) {
    let gs = canvas.dimensions.size,
        ray = new Ray(p0, p1),
        nx = Math.abs(Math.ceil(ray.dx / gs)),
        ny = Math.abs(Math.ceil(ray.dy / gs));

    // Get the number of straight and diagonal moves
    let nDiagonal = Math.min(nx, ny),
        nStraight = Math.abs(ny - nx);

    // Alternative DMG Movement
    if ( this.parent.diagonalRule === "5105" ) {
      let nd10 = Math.floor(nDiagonal / 2);
      let spaces = (nd10 * 2) + (nDiagonal - nd10) + nStraight;
      return spaces * canvas.dimensions.distance;
    }

    // Standard PHB Movement
    else return (nStraight + nDiagonal) * canvas.scene.data.gridDistance;
  }
});

/**
 * Extend the base Actor class to implement additional logic specialized for D&D5e.
 */
class ActorWfrp4e extends Actor {

  static async create(data, options) {
    let id = 1;
    const pack = game.packs.find(p => p.collection == "wfrp4e.skills")
    let skills = [];
    console.log(pack);
    await pack.getIndex().then(index => skills = index);
    data.items = [];
    for (let sk of skills)
    {
      let skillItem = undefined;
      await pack.getEntity(sk.id).then(skill => skillItem = skill);
      skillItem.data.id = id;
      id++;
      if (skillItem.data.data.advanced.value == "bsc" && skillItem.data.data.grouped.value == "noSpec")
        data.items.push(skillItem.data);
      else if (skillItem.data.data.advanced.value == "bsc")
      {
        let startParen = skillItem.data.name.indexOf("(")
        skillItem.data.name = skillItem.data.name.substring(0, startParen).trim();
        if (data.items.filter(x => x.name.includes(skillItem.data.name)).length <= 0)
          data.items.push(skillItem.data);

      }
    }
    data.flags = 
    {
      autoCalcRun :  true,
      autoCalcWalk :  true,
      autoCalcWounds :  true,
      autoCalcCritW :  true,
      autoCalcCorruption :  true
    }
    super.create(data, options);
    
  }
  /**
   * Augment the basFic actor data with additional dynamic data.
   */
  prepareData(actorData) {
    actorData = super.prepareData(actorData);
    const data = actorData.data;

    for (let ch of Object.values(data.characteristics))
    {
      ch.value = ch.initial + ch.advances;
      ch.bonus = Math.floor(ch.value / 10)
    }

    // Prepare Character data
    if ( actorData.type === "character" ) this._prepareCharacterData(data);
    else if ( actorData.type === "npc" ) this._prepareNPCData(data);

    if (actorData.flags.autoCalcWalk)
      data.details.move.walk = parseInt(data.details.move.value)* 2;
    if (actorData.flags.autoCalcRun)
      data.details.move.run = parseInt(data.details.move.value) * 4;



    // If user enters a species that does not exist, remove it.
    // let speciesExist = false;
    // for (let s of Object.values(CONFIG.species))
    // {
    //   if (data.details.species.value == s)
    //   {
    //     speciesExist = true;
    //     break;
    //   }
    // }
    // if (!speciesExist)
    //   data.details.species.value = "";
    
    return actorData;

  }

  /* -------------------------------------------- */

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(data) {


    if (data.status.fate.value < data.status.fortune.value)
    {
      data.status.fortune.value = data.status.fate.value;
    }
    if (data.status.resilience.value < data.status.resolve.value)
    {
      data.status.resolve.value = data.status.resilience.value;
    }

    data.details.experience.current = data.details.experience.total - data.details.experience.spent;

  }

  /* -------------------------------------------- */

  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData(data) {

  }

  /* -------------------------------------------- */
  /*  Rolls                                       */
  /* -------------------------------------------- */


  /**
   * Roll a generic ability test or saving throw.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String}abilityId     The ability id (e.g. "str")
   * @param {Object} options      Options which configure how ability tests or saving throws are rolled
   */
  rollCharacteristic(characteristicId, options) {
    let char = this.data.data.characteristics[characteristicId];
    let title = char.label + " Test";
    let testData = {
      target : char.value,
      hitLocation : false
    };

    if (characteristicId == "ws" || characteristicId == "bs")
    {
      testData.hitLocation = true;
    }

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/characteristic-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.target = testData.target + testData.testModifier + testData.testDifficulty; 
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/characteristic-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions
    });
  }

  /* -------------------------------------------- */

  /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param skill {String}    The skill id
   */
  rollSkill(skill, event) {
    let char = this.data.data.characteristics[skill.data.characteristic.value];
    let title = skill.name + " Test";
    let testData = {
      target : char.value + skill.data.advances.value,
      hitLocation : false
    };

    if (skill.data.characteristic.value == "ws" ||
        skill.data.characteristic.value == "bs" ||
        skill.name.includes("Melee") ||
        skill.name.includes("Ranged"))
    {
      testData.hitLocation = true;
    }

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/skill-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        characteristicList : CONFIG.characteristics,
        characteristicToUse : skill.data.characteristic.value  
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        let characteristicToUse = html.find('[name="characteristicToUse"]').val();
        testData.target = this.data.data.characteristics[characteristicToUse].value
                             + testData.testModifier 
                             + testData.testDifficulty
                             + skill.data.advances.value;
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/skill-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

    /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param skill {String}    The skill id
   */
  rollWeapon(weapon, event) {
    let skillCharList = [];
    let ammo;
    let title = "Weapon Test - " + weapon.name;
    if (event.attackType == "melee")
    {
      skillCharList.push("Weapon Skill")
      let skill = "Melee (" + CONFIG.weaponGroups[weapon.data.weaponGroup.value] + ")";
      if (this.data.flags.combatSkills.find(x=> x.name.toLowerCase() == skill.toLowerCase()))
        skillCharList.push(skill);
    }
    if (event.attackType == "ranged")
    {
      skillCharList.push("Ballistic Skill")
      if (weapon.data.weaponGroup.value != "throwing" && weapon.data.weaponGroup.value != "explosives" && weapon.data.weaponGroup.value != "entangling")
      { 
        ammo = this.items.find(i => i.id == weapon.data.currentAmmo.value);
        if (weapon.data.currentAmmo.value == 0 || ammo.data.quantity.value == 0)
        {
          ui.notifications.error("No Ammo!")
          return
        }
      }
      else if (weapon.data.quantity.value == 0)
      {
        ui.notifications.error("No Ammo!") 
        return;
      }
      else
      {
        ammo = weapon;
      }
      let skill = "Ranged (" + CONFIG.weaponGroups[weapon.data.weaponGroup.value] + ")";
      if (this.data.flags.combatSkills.find(x=> x.name.toLowerCase() == skill.toLowerCase()))
        skillCharList.push(skill);
    }
    let testData = {
      target : 0,
      hitLocation : true,
      extra : {
        weapon : weapon,
        ammo : ammo
      }
    };
    let defaultSelection = CONFIG.groupToType[weapon.data.weaponGroup.value] + " (" + CONFIG.weaponGroups[weapon.data.weaponGroup.value] + ")";

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/weapon-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        skillCharList : skillCharList,
        defaultSelection : skillCharList.indexOf(defaultSelection)
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        let skillSelected = skillCharList[Number(html.find('[name="skillSelected"]').val())];
        if (skillSelected == "Weapon Skill" || skillSelected == "Ballistic Skill")
        {
          testData.extra.weapon = WFRP_Utility._prepareWeaponCombat(this.data, weapon)
          testData.extra.weapon.properties.flaws = testData.extra.weapon.properties.flaws.join(", ")
          testData.extra.weapon.properties.qualities = [];
          if (skillSelected == "Weapon Skill")
            testData.target = this.data.data.characteristics.ws.value
          else if (skillSelected == "Ballistic Skill")
            testData.target = this.data.data.characteristics.bs.value

          testData.target += testData.testModifier + testData.testDifficulty;
        }
        else{
          let skillUsed = this.data.flags.combatSkills.find(x=> x.name.toLowerCase() == skillSelected.toLowerCase())
          testData.extra.weapon = WFRP_Utility._prepareWeaponCombat(this.data, weapon)
          testData.extra.weapon.properties.flaws = testData.extra.weapon.properties.flaws.join (", ")
          testData.extra.weapon.properties.qualities = testData.extra.weapon.properties.qualities.join (", ")

          testData.target = this.data.data.characteristics[skillUsed.data.characteristic.value].value
          + testData.testModifier 
          + testData.testDifficulty
          + skillUsed.data.advances.value;
        }

        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup != "entangling")
        {
          ammo.data.quantity.value--;
          this.updateOwnedItem(ammo);
        }
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/weapon-card.html",
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }


  rollSpell(spell, options) {
    new Dialog({
      title: "Cast or Channell",
      content: '<p>Cast or Channell this spell?</p>',
      buttons: {
        cast: {
          label: "Cast",
          callback: dlg => {
            this.rollCast(spell, options);
          }
        },
        channell: {
          label: "Channell",
          callback: dlg => {
            this.rollChannell(spell, options);

          }
        },
      },
      default: 'cast'
    }).render(true);
  }

  rollCast(spell, options) {
    let title = "Casting Test";
    let castSkill = this.items.find(i => i.name.toLowerCase() == "language (magick)" && i.type == "skill")
    if (!castSkill)
    {
      ui.notifications.error("You need Language (Magick) to cast a spell")
      return; 
    }
    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.data, spell);
    //this.updateOwnedItem(spell)
    let testData = {
      target : castSkill.data.advances.value + this.data.data.characteristics[castSkill.data.characteristic.value],
      hitLocation : true,
      extra : {
        spell : preparedSpell,
        malignantInfluence : false,
        ingredient : false
      }
    };

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/spell-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        malignantInfluence : testData.malignantInfluence,
        talents : this.data.flags.talentTests,
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.target = this.data.data.characteristics[castSkill.data.characteristic.value].value
                          + castSkill.data.advances.value 
                          + testData.testDifficulty 
                          + testData.testModifier;
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        testData.extra.malignantInfluence = html.find('[name="malignantInfluence"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        let ing = this.items.find(i => i.id == testData.extra.spell.data.currentIng.value)

        if (!ing || ing.data.quantity.value <= 0)
          testData.extra.ingredient = false;
        else 
        {
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateOwnedItem(ing);
        }
        roll();
        },
      rollOveride : () => {
        let roll = DiceWFRP.rollCastTest(testData);
        if (testData.extra)
          mergeObject(roll, testData.extra);
        DiceWFRP.renderRollCard(cardOptions, roll);
        this.updateOwnedItem({id: spell.id, 'data.cn.SL' : 0});
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/spell-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }


  rollChannell(spell, options) {
    let title = "Channelling Test";
    let channellSkills = this.items.filter(i => i.name.toLowerCase().includes("channel") && i.type == "skill")
    let spellLore = spell.data.lore.value;
    let defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes(CONFIG.magicWind[spellLore])));

    if (channellSkills.length == 0)
    {
      ui.notifications.error("You need a Channelling skill.")
      return; 
    }
    let testData = {
      target : 0,
      extra : {
        spell : spell,
        malignantInfluence : false,
        ingredient : false
      }
    };

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/channell-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        malignantInfluence : testData.malignantInfluence,
        channellSkills : channellSkills,
        defaultSelection: defaultSelection,
        talents : this.data.flags.talentTests,
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.extra.malignantInfluence = html.find('[name="malignantInfluence"]').is(':checked');
        let skillSelected = channellSkills[Number(html.find('[name="skillSelected"]').val())];
        testData.target = testData.testModifier + testData.testDifficulty
                         + this.data.data.characteristics[skillSelected.data.characteristic.value].value
                         + skillSelected.data.advances.value
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        let ing = this.items.find(i => i.id == testData.extra.spell.data.currentIng.value)

        if (!ing || ing.data.quantity.value <= 0)
          testData.extra.ingredient = false;
        else 
          testData.extra.ingredient = true;
        roll(this);
        },
      rollOveride : (actor) => {
        let roll = DiceWFRP.rollChannellTest(testData, actor);
        if (testData.extra)
          mergeObject(roll, testData.extra);
        DiceWFRP.renderRollCard(cardOptions, roll);
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/channell-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  rollPrayer(prayer, options) {
    let title = "Prayer Test";
    let praySkill = this.items.find(i => i.name.toLowerCase() == "pray" && i.type == "skill")
    if (!praySkill)
    {
      ui.notifications.error("You need Pray to invoke the Gods")
      return; 
    }
    let preparedPrayer = WFRP_Utility._prepareSpellOrPrayer(this.data, prayer);
   // this.updateOwnedItem(spell)
    let testData = {
      target : praySkill.data.advances.value + this.data.data.characteristics[praySkill.data.characteristic.value],
      hitLocation : true,
      extra : {
        prayer : preparedPrayer,
      }
    };

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/prayer-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.target = this.data.data.characteristics[praySkill.data.characteristic.value].value
                          + praySkill.data.advances.value 
                          + testData.testDifficulty 
                          + testData.testModifier;
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        roll();
        },
      rollOveride : () => {
        let roll = DiceWFRP.rollPrayTest(testData, this);
        if (testData.extra)
          mergeObject(roll, testData.extra);
        DiceWFRP.renderRollCard(cardOptions, roll);
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/prayer-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  rollTrait(trait, event) {
    if (!trait.data.rollable.value)
      return;
    let char = this.data.data.characteristics[trait.data.rollable.rollCharacteristic];
    let title =  trait.name + " Test";
    let testData = {
      target : char.value,
      hitLocation : true
    };

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/skill-dialog.html", // Reuse skill dialog
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        characteristicList : CONFIG.characteristics,
        characteristicToUse : trait.data.rollable.rollCharacteristic 
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        let characteristicToUse = html.find('[name="characteristicToUse"]').val();
        testData.target = this.data.data.characteristics[characteristicToUse].value
                             + testData.testModifier 
                             + testData.testDifficulty
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/skill-card.html" // Reuse skill card
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  static getBonus(value) {
    return Math.floor(value / 10)
  }



}

// Assign the actor class to the CONFIG
CONFIG.Actor.entityClass = ActorWfrp4e;


/**
 * Hijack Token health bar rendering to include temporary and temp-max health in the bar display
 * TODO: This should probably be replaced with a formal Token class extension
 * @private
 */
/*
const _drawBar = Token.prototype._drawBar;
Token.prototype._drawBar = function(number, bar, data) {
  if ( data.attribute === "attributes.hp" ) {
    data = duplicate(data);
    data.value += parseInt(data['temp'] || 0);
    data.max += parseInt(data['tempmax'] || 0);
  }
  _drawBar.bind(this)(number, bar, data);
};*/




/**
 * Override and extend the basic :class:`Item` implementation
 */
class ItemWfrp4e extends Item {

  /**
   * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
   * @return {Promise}
   */
  async roll() {
/*
    // Basic template rendering data
    const template = `public/systems/wfrp4e/templates/chat/${this.data.type}-card.html`;
    const templateData = {
      actor: this.actor,
      item: this.data,
      data: this.getChatData()
    };

    // Basic chat message data
    const chatData = {
      user: game.user._id,
      alias: this.actor.name,
    };

    // Toggle default roll mode
    let rollMode = game.settings.get("core", "rollMode");
    if ( ["gmroll", "blindroll"].includes(rollMode) ) chatData["whisper"] = ChatMessage.getWhisperIDs("GM");
    if ( rollMode === "blindroll" ) chatData["blind"] = true;

    // Render the template
    chatData["content"] = await renderTemplate(template, templateData);

    // Create the chat message
    return ChatMessage.create(chatData, {displaySheet: false});*/
  }

  /* -------------------------------------------- */
  /*  Chat Card Data
  /* -------------------------------------------- */

  getChatData(htmlOptions) {
    const data = this[`_${this.data.type}ChatData`]();
    data.description.value = data.description.value || "";
    data.description.value = enrichHTML(data.description.value, htmlOptions);
    return data;
  }

  /* -------------------------------------------- */

  _equipmentChatData() {
    /*const data = duplicate(this.data.data);
    const properties = [
      CONFIG.armorTypes[data.armorType.value],
      data.armor.value + " AC",
      data.equipped.value ? "Equipped" : null,
      data.stealth.value ? "Stealth Disadv." : null,
    ];
    data.properties = properties.filter(p => p !== null);
    return data;*/
  }



  _talentChatData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _traitChatData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _careerChatData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    data.properties.push("Class: " + this.data.data.class.value);
    data.properties.push("Group: " + this.data.data.careergroup.value);
    data.properties.push(CONFIG.statusTiers[this.data.data.status.tier] + " " + this.data.data.status.standing);
    data.properties.push("Skills: " + this.data.data.skills.map(i => i = " " + i));
    data.properties.push("Talents: " + this.data.data.talents.map (i => i = " " + i));
    data.properties.push("Income: " + this.data.data.incomeSkill.map(i => " " + this.data.data.skills[i]));
    return data;
  }

  _injuryChatData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _spellChatData() {
    const data = duplicate(this.data.data);
    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.actor.data, this.data);
    data.properties = [];
    data.properties.push("Range: " + preparedSpell.range);
    data.properties.push("Target: " + preparedSpell.target);
    data.properties.push("Duration: " + preparedSpell.duration);
    data.properties.push("Damage: " + preparedSpell.data.damage.value);
    if (data.magicMissile.value)
      data.properties.push("Magic Missile");
    return data;
  }

   _prayerChatData() {
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

  /* -------------------------------------------- */

  _weaponChatData() {
   const data = duplicate(this.data.data);
    let properties = [];
    if (data.reach.value)
      properties.push ("Reach: " + CONFIG.weaponReaches[data.reach.value] + " - " + CONFIG.reachDescription[data.reach.value]);
    if (data.range.value)
      properties.push("Range: " + data.range.value);
    if (data.damage.value)
      properties.push("Damage: " + data.damage.value);
    for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data))
      properties.push(prop);
    properties = properties.filter(p => p != "Special");
    if (data.special.value)
      properties.push ("Special: " + data.special.value);

    data.properties = properties.filter(p => !!p);
    return data;
  }

  _armourChatData() {
    const data = duplicate(this.data.data);
     const properties = [];
     //if (data.currentAP.value == -1 || data.currentAP.value == data.maxAP.value)
     // properties.push("AP: " data.maxAP.value)
     properties.push(CONFIG.armorTypes[data.armorType.value]);
     for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data))
       properties.push(prop);
     properties.push(data.penalty.value);
 
     data.properties = properties.filter(p => !!p);
     return data;
   }

   _ammunitionChatData() {
    const data = duplicate(this.data.data);
     let properties = [];
     properties.push (CONFIG.ammunitionGroups[data.ammunitionType.value])

     if (data.range.value)
      properties.push("Range: " + data.range.value);

     if (data.damage.value)
      properties.push("Damage: " + data.damage.value);

     for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data))
       properties.push(prop);
     properties = properties.filter(p => p != "Special");
     if (data.special.value)
       properties.push ("Special: " + data.special.value);
 
     data.properties = properties.filter(p => !!p);
     return data;
   }

  /* -------------------------------------------- */


  _consumableChatData() {
   /* const data = duplicate(this.data.data);
    data.consumableType.str = CONFIG.consumableTypes[data.consumableType.value];
    data.properties = [data.consumableType.str, data.charges.value + "/" + data.charges.max + " Charges"];
    data.hasCharges = data.charges.value >= 0;
    return data;*/
  }

  /* -------------------------------------------- */

  _toolChatData() {
   /* const data = duplicate(this.data.data);
    let abl = this.actor.data.data.abilities[data.ability.value].label,
        prof = data.proficient.value || 0;
    const properties = [abl, CONFIG.proficiencyLevels[prof]];
    data.properties = properties.filter(p => p !== null);
    return data;*/
  }

  /* -------------------------------------------- */

  _backpackChatData() {
    const data = duplicate(this.data.data);
    data.properties = [];
    return data;
  }



}
// Assign Item5e class to CONFIG
CONFIG.Item.entityClass = ItemWfrp4e;


/**
 * Hook into chat log context menu to add damage application options
 */
Hooks.on("getChatLogEntryContext", (html, options) => {

  // Condition
 /* let canApply = li => canvas.tokens.controlledTokens.length && li.find(".dice-roll").length;

  // Apply Damage to Token
  options["Apply Damage"] = {
    icon: '<i class="fas fa-user-minus"></i>',
    condition: canApply,
    callback: li => Actor5e.applyDamage(li, 1)
  };

  // Apply Healing to Token
  options["Apply Healing"] = {
    icon: '<i class="fas fa-user-plus"></i>',
    condition: canApply,
    callback: li => Actor5e.applyDamage(li, -1)
  };

  // Apply Double-Damage
  options["Double Damage"] = {
    icon: '<i class="fas fa-user-injured"></i>',
    condition: canApply,
    callback: li => Actor5e.applyDamage(li, 2)
  };

  // Apply Half-Damage
  options["Half Damage"] = {
    icon: '<i class="fas fa-user-shield"></i>',
    condition: canApply,
    callback: li => Actor5e.applyDamage(li, 0.5)
  }*/
});

/**
 * Override and extend the basic :class:`ItemSheet` implementation
 */
class ItemSheetWfrp4e extends ItemSheet {
  constructor(item, options) {
    super(item, options);
    this.mce = null;
  }

  /* -------------------------------------------- */

  /**
   * Use a type-specific template for each different item type
   */
  get template() {
    let type = this.item.type;
    return `public/systems/wfrp4e/templates/items/item-${type}-sheet.html`;
  }

  /* -------------------------------------------- */

  /**
   * Prepare item sheet data
   * Start with the base item data and extending with additional properties for rendering.
   */
  getData() {
    const data = super.getData();

    if (this.item.type === "skill")
    {
      data['characteristics'] = CONFIG.characteristics;
      data['skillGroup'] = CONFIG.skillGroup;
      data['skillTypes'] = CONFIG.skillTypes;
    } 
    else if (this.item.type === "talent")
    {
      data['talentMaxs'] = CONFIG.talentMax;
    }
    else if (this.item.type == "weapon")
    {
      data['weaponGroups'] = CONFIG.weaponGroups;
      data['availability'] = CONFIG.availability;
      data['weaponReaches'] = CONFIG.weaponReaches
      data['ammunitionGroups'] = CONFIG.ammunitionGroups;
    }
    else if (this.item.type == "ammunition")
    {
      data['availability'] = CONFIG.availability;
      data['ammunitionGroups'] = CONFIG.ammunitionGroups;
    }
    else if (this.item.type == "armour")
    {
      data['armorTypes'] = CONFIG.armorTypes;
      data['availability'] = CONFIG.availability;
    }
    else if (this.item.type == "spell")
    {
      if (CONFIG.magicLores[this.item.data.data.lore.value])
      {
        data["loreValue"] = CONFIG.magicLores[this.item.data.data.lore.value]
      }
      else
      {
        data["loreValue"] = this.item.data.data.lore.value;
      }
    }
    else if (this.item.type == "prayer")
    {
      data['prayerTypes'] = CONFIG.prayerTypes;
    }


    else if (this.item.type == "career")
    {
      data['statusTiers'] = CONFIG.statusTiers;
      data['skills'] = data.data.skills.toString();
      data['earningSkills'] = data.data.incomeSkill.map(function(item) {
        return data.data.skills[item];
      });
      data['talents'] = data.data.talents.toString();
      data['trappings'] = data.data.trappings.toString();
      let characteristicList = duplicate(CONFIG.characteristicsAbrev);
      for (let char in characteristicList)
      {
        if(data.data.characteristics.includes(char))
          characteristicList[char] = {abrev : CONFIG.characteristicsAbrev[char], checked : true};
       else
        characteristicList[char] = {abrev : CONFIG.characteristicsAbrev[char], checked : false};
      }
      data['characteristicList'] = characteristicList;
      
    }

    else if (this.item.type == "trapping")
    {
      data['trappingTypes'] = CONFIG.trappingTypes;
    }

    else if (this.item.type == "trait")
    {
      data['characteristics'] = CONFIG.characteristics;
    }

    /*data['abilities'] = game.system.template.actor.data.abilities;

    // Damage types
    let dt = duplicate(CONFIG.damageTypes);
    if ( ["spell", "feat"].includes(this.item.type) ) mergeObject(dt, CONFIG.healingTypes);
    data['damageTypes'] = dt;

    // Item types
    let types = (this.item.type === "equipment") ? "armorTypes" : this.item.type + "Types";
    data[types] = CONFIG[types];

    // Spell-specific data
    if ( this.item.type === "spell" ) {
      data["spellSchools"] = CONFIG.spellSchools;
      data["spellLevels"] = CONFIG.spellLevels;
    }

    // Tool-specific data
    else if ( this.item.type === "tool" ) {
      data["proficiencies"] = CONFIG.proficiencyLevels;
    }*/
    return data;
  }

  /* -------------------------------------------- */

  /**
   * Activate listeners for interactive item sheet events
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Activate tabs
    new Tabs(html.find(".tabs"));

        // Activate tabs
      new Tabs(html.find(".tabs"), {
        initial: this.item.data.flags["_sheetTab"],
        callback: clicked => this.item.data.flags["_sheetTab"] = clicked.attr("data-tab")
      });

    // Checkbox changes
    html.find('input[type="checkbox"]').change(event => this._onSubmit(event));


    html.find('.weapon-type').change(event => {console.log(event)});

    html.find('.lore-input').change(async event => {
      let inputLore = event.target.value;
      for (let lore in CONFIG.magicLores)
      {
        if (inputLore == CONFIG.magicLores[lore])
        {
          await this.item.update({'data.lore.value' : lore}); 
          return;
        }
      }
      await this.item.update({'data.lore.value' : inputLore}); // If lore not recognized, save input as lore directly (custom lore) 

    }),

    
    html.find('.char-checkbox').change(async event => {
      let charChanged = event.target.attributes.name.value;
      let newValue = event.target.checked;

      let characteristicList = duplicate(this.item.data.data.characteristics);
      
      if (newValue)
      {
        if (!characteristicList.includes(charChanged))
          characteristicList.push(charChanged);
      }
      else
        characteristicList = characteristicList.filter(c => c != charChanged);
      
      await this.item.update({'data.characteristics' : characteristicList})

    }),

    // This listener converts comma separated lists in the career section to arrays,
    // placing them in the correct location using update
    html.find('.csv-input').change(async event => {
        let list = event.target.value.split(",").map(function(item) {
        return item.trim();
      });       
      
      switch(event.target.attributes["data-dest"].value)
      {
        case 'skills':
        {
          await this.item.update({'data.skills': list});
        }
        break;

        // find the indices of the skills that match the earning skill input, send those
        // values to data.incomeSkill
        case 'earning':
        {
          this.item.update({'data.incomeSkill': []});
          let earningSkills = [];
          for (let sk in list){
            let skillIndex = this.item.data.data.skills.indexOf(list[Number(sk)])
            if (skillIndex == -1)
              continue;
      
            else
            {
              earningSkills.push(skillIndex);
            }
      
          }
          await this.item.update({'data.incomeSkill': earningSkills});

          
        }
        break;
        case 'talents':
        {
          await this.item.update({'data.talents': list});
        }
        break;

        case 'trappings':
        {
          await this.item.update({'data.trappings': list});         
        }
        break;

      }
    });
  }
}

// Activate global listeners
Hooks.on('renderChatLog', (log, html, data) => DiceWFRP.chatListeners(html));

// Override CONFIG
CONFIG.Item.sheetClass = ItemSheetWfrp4e;

/**
 * Extend the basic ActorSheet class to do all the D&D5e things!
 * This sheet is an Abstract layer which is not used.
 */
class ActorSheetWfrp4e extends ActorSheet {

  
  /**
   * Return the type of the current Actor
   * @type {String}
   */
  get actorType() {
    return this.actor.data.type;
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const sheetData = super.getData();
    this._prepareItems(sheetData.actor);

    let size;
    let trait = sheetData.actor.traits.find(t => t.name.toLowerCase().includes("size"));
    if (trait)
    {
      trait = this.actor.getOwnedItem(trait.id);
      size = trait.data.data.specification.value;
    }
    else 
    {
      size = sheetData.actor.talents.find(x=>x.name.toLowerCase() == "small");
      if (size)
        size = size.name;
    }

    if (size)
    {
      for (let s in CONFIG.actorSizes)
      {
        if (CONFIG.actorSizes[s] == size)
          sheetData.actor.data.details.size.value = s;
      }
    }
    


    let sb = sheetData.actor.data.characteristics.s.bonus;
    let tb = sheetData.actor.data.characteristics.t.bonus;
    let wpb =sheetData.actor.data.characteristics.wp.bonus;

    if (sheetData.actor.flags.autoCalcCritW)
      sheetData.actor.data.status.criticalWounds.max = tb;

   if (sheetData.actor.flags.autoCalcWounds)
    switch (sheetData.actor.data.details.size.value){
    
      case "tiny":
      sheetData.actor.data.status.wounds.max = 1;
      break;

      case "ltl":
      sheetData.actor.data.status.wounds.max = tb;
      break;
    
      case "sml":
      sheetData.actor.data.status.wounds.max = 2 * tb + wpb;
      break;

      case "avg":
      sheetData.actor.data.status.wounds.max = sb + 2 * tb + wpb;
      break;

      case "lrg":
      sheetData.actor.data.status.wounds.max = 2 * (sb + 2 * tb + wpb);
      break;

      case "enor":
      sheetData.actor.data.status.wounds.max = 4 * (sb + 2 * tb + wpb);
      break;
      
      case "mnst":
      sheetData.actor.data.status.wounds.max = 8 * (sb + 2 * tb + wpb);
      break;

    }
          
    
    // Return data to the sheet
    return sheetData;
  }

  _prepareItems(actorData)
  {
      // These containers are for the various different tabs
      const careers = [];
      const basicSkills = [];
      const advancedOrGroupedSkills = [];
      const talents = [];
      const traits = [];
      const weapons = [];
      const armour = [];
      const AP = {
        head: 0,
        body: 0,
        rArm: 0,
        lArm: 0,
        rLeg: 0,
        lLeg: 0,
        shield: 0
      };
      const injuries = [];
      const grimoire = [];
      const petty = [];
      const blessings = [];
      const miracles = [];
      const psychology = [];
      let allPenalties = "";
  
      // Inventory object is for the inventory tab
      const inventory = {
        weapons: { label: "Weapons", items: [], toggle: true, toggleName: "Equipped", show : false },
        armor: { label: "Armour", items: [], toggle: true, toggleName: "Worn", show : false},
        ammunition: { label: "Ammunition", items: [], quantified: true, show : false},
        clothingAccessories: { label: "Clothing and Accessories", items: [], toggle: true, toggleName: "Worn", show : false },
        booksAndDocuments: {label: "Food and Drink", items: [], show : false},
        toolsAndKits: {label: "Tools and Kits", items: [], show : false},
        books: {label: "Books and Documents", items: [], show : false},
        drugsPoisonsHerbsDraughts: {label: "Drugs, Herbs, Poisons, Draughts", items: [], quantified: true, show : false},
        misc: {label: "Miscellaneous", items: [], show : false}
      };
      const ingredients =  {label: "Ingredients", items: [], quantified: true, show: false};
      const money = {coins: [], total: 0, show : true};
      const containers = {items: [], show : false};
      const inContainers = [];
  
      // Money and ingredients are not in inventory objecet because they need more customization
  
      // Iterate through items, allocating to containers
      let totalEnc = 0;
      let itemsToRemove = []; // remove items with quantity of 0
      let hasSpells = false;
      let hasPrayers = false;
  
      for ( let i of actorData.items ) {
        i.img = i.img || DEFAULT_TOKEN;
        if (i.type === "talent")
        {
          WFRP_Utility._prepareTalent(actorData, i, talents);
        }
  
        else if ( i.type === "skill" )
        {
          WFRP_Utility._prepareSkill(actorData, basicSkills, advancedOrGroupedSkills, i);
        }
  
  
        else if (i.type === "ammunition")
        {
          // Aggregate ammo option
     /*     let existingAmmo = inventory.ammunition.items.find(a => a.name == i.name);
          if (existingAmmo) {
            existingAmmo.data.quantity.value += i.data.quantity.value;
            existingAmmo.data.encumbrance.value = Math.ceil(existingAmmo.data.quantity.value / existingAmmo.data.quantityPerEnc.value);
  
          }
          else{*/
            i.encumbrance = Math.floor(i.data.encumbrance.value * i.data.quantity.value);
            if (i.data.location.value == 0){
              inventory.ammunition.items.push(i);
              inventory.ammunition.show = true
              totalEnc += i.encumbrance;
            }
            else{
              inContainers.push(i);
            }
        //}
        }
  
        else if (i.type === "weapon")
        {
          i.encumbrance = Math.floor(i.data.encumbrance.value * i.data.quantity.value);
          if (i.data.location.value == 0){
            i.toggleValue = i.data.equipped || false;
            inventory.weapons.items.push(i);
            inventory.weapons.show = true;
            totalEnc += i.encumbrance;
          }
          else {
            inContainers.push(i);
          }
          if (i.data.equipped)
          {
            weapons.push(WFRP_Utility._prepareWeaponCombat(actorData, i));
            let shieldProperty = i.properties.qualities.find(q => q.toLowerCase().includes("shield"))
            if (shieldProperty)
            {
               AP.shield += parseInt(shieldProperty.split(" ")[1]);
            }
          }

        
        }
  
        else if (i.type === "armour")
        {

          i.encumbrance = Math.floor(i.data.encumbrance.value * i.data.quantity.value);
          if (i.data.location.value == 0){
            i.toggleValue = i.data.worn.value || false;
            inventory.armor.items.push(i);
            inventory.armor.show = true;
            totalEnc += i.encumbrance;
          }
          else {
            inContainers.push(i);
          }
  
          if (i.data.worn.value)
            armour.push(WFRP_Utility._prepareArmorCombat(actorData, i, AP));
        }
  
        else if (i.type == "injury")
        {
          injuries.push(i);
          allPenalties += i.data.penalty.value;
        }
  
        else if (i.type === "container")
        {
          i.encumbrance = i.data.encumbrance.value;
  
          if (i.data.location.value == 0){
          totalEnc += i.data.encumbrance.value;
          }
          else{
            inContainers.push(i);
          }
          containers.items.push(i);
          containers.show = true;
        }
  
        else if (i.type === "trapping")
        {
          i.encumbrance = i.data.encumbrance.value * i.data.quantity.value;
          if (i.data.location.value == 0)
          {
            if (i.data.trappingType.value == "ingredient"){
              ingredients.items.push(i)
            }
            else if (i.data.trappingType.value == "clothingAccessories")
            {
              i.toggleValue = i.data.worn || false;
              inventory[i.data.trappingType.value].items.push(i);
              inventory[i.data.trappingType.value].show = true;
            }
            else
            {
              inventory[i.data.trappingType.value].items.push(i);
              inventory[i.data.trappingType.value].show = true;
            }
            totalEnc += i.encumbrance;
          }
          else{
            inContainers.push(i);
          }
  
        }
  
        
        else if (i.type === "spell")
        {
          hasSpells = true;
          if (i.data.lore.value == "petty")
            petty.push(WFRP_Utility._prepareSpellOrPrayer(actorData, i));
          else
            grimoire.push(WFRP_Utility._prepareSpellOrPrayer(actorData, i));
        }
  
        else if (i.type === "prayer")
        {
          hasPrayers = true;
          if (i.data.type.value == "blessing")
            blessings.push(WFRP_Utility._prepareSpellOrPrayer(actorData, i));
          else
            miracles.push(WFRP_Utility._prepareSpellOrPrayer(actorData, i));
        }
  
        else if (i.type === "career")
        {
          if (i.data.current.value)
          {
            actorData.currentClass = i.data.class.value;
            actorData.currentCareer = i.name;
            actorData.currentCareerGroup = i.data.careergroup.value;
            actorData.status = CONFIG.statusTiers[i.data.status.tier] + " " + i.data.status.standing;
          }
          careers.push(i);
        }
  
        
        else if (i.type === "trait")
        {
          if (i.data.specification.value)
          {
            if (i.data.rollable.bonusCharacteristic)
            {
              i.data.specification.value = parseInt(i.data.specification.value) || 0
              i.data.specification.value += actorData.data.characteristics[i.data.rollable.bonusCharacteristic].bonus;
            }
            i.name = i.name + " (" + i.data.specification.value + ")";

          }
          traits.push(i);
        }
  
        
        else if (i.type === "psychology")
        {
          psychology.push(i);
        }
  
        else if (i.type === "money")
        {
          i.encumbrance = Math.floor(i.data.encumbrance.value * i.data.quantity.value);
          if (i.data.location.value == 0){
            money.coins.push(i);
            totalEnc += i.encumbrance;
          }
          else{
            inContainers.push(i);
          }
          money.total += i.data.quantity.value * i.data.coinValue.value;
  
        }
      }
  
      // If you have no spells, just put all ingredients in the miscellaneous section
      if (grimoire.length > 0 && ingredients.items.length > 0)
      {
        ingredients.show = true;
        actorData.ingredients = ingredients;
        for (let s of grimoire)
           s.data.ingredients = ingredients.items.filter(i => i.data.spellIngredient.value == s.id && i.data.quantity.value > 0)
      }
      else
        inventory.misc.items = inventory.misc.items.concat(ingredients.items);
      
      
      var containerMissing = inContainers.filter(i => containers.items.find(c => c.id == i.data.location.value) == undefined);
      for (var itemNoContainer of containerMissing)
      {
        itemNoContainer.data.location.value = 0;
        this.actor.updateOwnedItem(itemNoContainer, true);;
      }
      for (var cont of containers.items)
      {
        var itemsInside = inContainers.filter(i => i.data.location.value == cont.id);
        itemsInside.map(function(item){
          if (item.type == "trapping")
            item.type = CONFIG.trappingTypes[item.data.trappingType.value];
          else
            item.type = CONFIG.trappingTypes[item.type];
        } )
        cont["carrying"] = itemsInside.filter(i => i.type != "Container");
        cont["packsInside"] = itemsInside.filter(i => i.type == "Container");
        cont["holding"] = itemsInside.reduce(function (prev, cur){
          return prev + cur.encumbrance;
        }, 0);
        cont.holding = Math.floor(cont.holding)
      }
  
      containers.items = containers.items.filter(c => c.data.location.value == 0);
  
      // talentTests is used to easily reference talent bonuses (e.g. in prepareTest function)
      // instead of iterating through every item again to find talents when rolling
      this.actor.data.flags.talentTests = [];
      for (let talent of talents)
        if (talent.data.tests.value)
          this.actor.data.flags.talentTests.push({talentName: talent.name, test : talent.data.tests.value, SL : talent.data.advances.value});
      this.actor.data.flags.combatSkills = [];
      for (let skill of basicSkills.concat(advancedOrGroupedSkills))
        if (skill.name.includes ("Melee") || skill.name.includes("Ranged"))
          this.actor.data.flags.combatSkills.push(skill);
  
      if (this.actor.data.data.status.penalties.value)
        allPenalties += " " + this.actor.data.data.status.penalties.value
      
      allPenalties += " " +  WFRP_Utility._calculateArmorPenalties(actorData, armour);
      if (allPenalties.length > 78)
      {
        actorData.penaltyOverflow = true;
        let armourPenalties = WFRP_Utility._calculateArmorPenalties(actorData,armour);
        let injuryPenalties = injuries.reduce(function (prev, cur) {
          return prev += cur.data.penalty.value
        }, "");
        let otherPenalties = this.actor.data.data.status.penalties.value; 
        let allPenaltiesOverflow = {};
        if (armourPenalties)
          allPenaltiesOverflow["Armour"] = armourPenalties;

        if (injuryPenalties)
          allPenaltiesOverflow["Injury"] = injuryPenalties;

        if (otherPenalties)
          allPenaltiesOverflow["Other"] = otherPenalties;

        allPenalties = allPenaltiesOverflow;

      }

      actorData.inventory = inventory;
      actorData.containers = containers;
      actorData.basicSkills = basicSkills.sort(WFRP_Utility.nameSorter);
      actorData.advancedOrGroupedSkills = advancedOrGroupedSkills;
      actorData.talents = talents;
      actorData.traits = traits;
      actorData.weapons = weapons;
      actorData.armour = armour;
      actorData.allPenalties = allPenalties;
      actorData.AP = AP;
      actorData.injuries = injuries;
      actorData.grimoire = grimoire;
      actorData.petty = petty;
      actorData.careers = careers.reverse();
      actorData.blessings = blessings;
      actorData.miracles = miracles;
      actorData.money = money;
      actorData.psychology = psychology;
      actorData.flags.hasSpells = hasSpells;
      actorData.flags.hasPrayers = hasPrayers;
  
  
  
      // Calculate ammo encumbrance after the loop (since it gets aggregated) (TODO: Redo since aggregation was scrapped )
     /* for (let amIndex = 0; amIndex<inventory.ammunition.items.length; amIndex++)
      {
        totalEnc += Math.ceil(inventory.ammunition.items[amIndex].data.quantity.value / inventory.ammunition.items[amIndex].data.quantityPerEnc.value);
      }*/
      let enc = {
        max: actorData.data.characteristics.s.bonus + actorData.data.characteristics.t.bonus,
        value: Math.round(totalEnc * 10) / 10,
      };
      enc.pct = Math.min(enc.value * 100 / enc.max, 99);
      enc.state = Math.floor(enc.value / enc.max);
      actorData.encumbrance = enc;
  }
 
  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {
    super.activateListeners(html);
    
    // Activate tabs
    html.find('.tabs').each((_, el) => {
      let tabs = $(el),
        group = el.getAttribute("data-group"),
        initial = this.actor.data.flags[`_sheetTab-${group}`];
      new Tabs(tabs, {
        initial: initial,
        callback: clicked => this.actor.data.flags[`_sheetTab-${group}`] = clicked.attr("data-tab")
      });
    });

    // Item summaries
    html.find('.item-dropdown').click(event => this._onItemSummary(event));
    
    html.find('.melee-property-quality, .melee-property-flaw, .ranged-property-quality, .ranged-property-flaw, .armor-quality, .armor-flaw').click(event => this._expandProperty(event));

    html.find('.weapon-range, .weapon-group, .weapon-reach').click(event => this._expandInfo(event));

    


    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    html.find('.skill-advances').focusout(async event => {
      let itemId = Number(event.target.attributes["data-item-id"].value);
      const itemToEdit = this.actor.items.find(i => i.id === itemId);
      console.log(itemToEdit);
      itemToEdit.data.advances.value = Number(event.target.value);
      await this.actor.updateOwnedItem(itemToEdit, true);      
    });

    html.find('.ammo-selector').change(async event => {
      let itemId = Number(event.target.attributes["data-item-id"].value);
      const itemToEdit = this.actor.items.find(i => i.id === itemId);
      itemToEdit.data.currentAmmo.value = Number(event.target.value);
      await this.actor.updateOwnedItem(itemToEdit, true);      
    });

    
    html.find('.spell-selector').change(async event => {
      let itemId = Number(event.target.attributes["data-item-id"].value);
      const ing = this.actor.items.find(i => i.id === itemId);
      ing.data.spellIngredient.value = Number(event.target.value);
      await this.actor.updateOwnedItem(ing, true);      
    });

    html.find('.ingredient-selector').change(async event => {
      let itemId = Number(event.target.attributes["data-item-id"].value);
      const spell = this.actor.items.find(i => i.id === itemId);
      spell.data.currentIng.value = Number(event.target.value);
      await this.actor.updateOwnedItem(spell, true);      
    });

    /* -------------------------------------------- */
    /*  Abilities, Skills, and Traits
     /* -------------------------------------------- */

    // Ability Proficiency
    html.find('.ability-proficiency').click(ev => {
      let field = $(ev.currentTarget).siblings('input[type="hidden"]');
      this.actor.update({[field[0].name]: 1 - parseInt(field[0].value)});
    });

    // Characteristic Tests
    html.find('.ch-value').click(event => {
      event.preventDefault();
      let characteristic = event.currentTarget.attributes["data-char"].value;
      this.actor.rollCharacteristic(characteristic, event);
    });

    html.find('.skill-total').click(event => {
      event.preventDefault();
      let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
      let skill = this.actor.items.find(i => i.id === itemId);
      this.actor.rollSkill(skill, event);
    })    

    html.find('.weapon-item-name').click(event => {
      event.preventDefault();
      let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
      let attackType = $(event.currentTarget).parents(".weapon-list").attr("weapon-type");
      let weapon = this.actor.items.find(i => i.id === itemId);
      this.actor.rollWeapon(duplicate(weapon), {attackType : attackType});
    })  

    html.find('.fist-icon').click(async event => {
      event.preventDefault();
      let pack = game.packs.find(p => p.collection == "world.weapons");
      let weapons;
      await pack.getIndex().then(index => weapons = index);
      let unarmedId = weapons.find(w => w.name.toLowerCase() == "unarmed"); 
      let unarmed = await pack.getEntity(unarmedId.id);
      this.actor.rollWeapon(duplicate(unarmed.data), {attackType : "melee"})
      // Roll Fist Attack
    })  

    html.find('.trait-roll').click(event => {
      event.preventDefault();
      let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
      let trait = this.actor.items.find(i => i.id === itemId);
      this.actor.rollTrait((duplicate(trait)));
    })  

    html.find('.spell-roll').click(event => {
      event.preventDefault();
      let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
      let spell = this.actor.items.find(i => i.id === itemId);
      this.actor.rollSpell(duplicate(spell));
    })  

    html.find('.prayer-roll').click(event => {
      event.preventDefault();
      let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
      let prayer = this.actor.items.find(i => i.id === itemId);
      this.actor.rollPrayer(duplicate(prayer));
    })  

    /* -------------------------------------------- */
    /*  Inventory
    /* -------------------------------------------- */

    // Create New Item
    html.find('.item-create').click(ev => this._onItemCreate(ev));


    // Update Inventory Item
    html.find('.item-edit, .item-name-edit').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let Item = CONFIG.Item.entityClass;
      const item = new Item(this.actor.items.find(i => i.id === itemId), this.actor);
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      let li = $(ev.currentTarget).parents(".item"),
        itemId = Number(li.attr("data-item-id"));
        new Dialog({
          title: "Delete Confirmation",
          content: '<p>Are you sure you want to delete this item?</p>',
          buttons: {
            Yes: {
              icon: '<i class="fa fa-check"></i>',
              label: "Yes",
              callback: dlg => {
                this.actor.deleteOwnedItem(itemId, true);
                li.slideUp(200, () => this.render(false));
              }
            },
            cancel: {
              icon: '<i class="fas fa-times"></i>',
              label: "Cancel"
            },
          },
          default: 'Yes'
        }).render(true);

    });

    
    // Remove Inventory Item from Container
    html.find('.item-remove').click(ev => {
      let li = $(ev.currentTarget).parents(".item"),
        itemId = Number(li.attr("data-item-id"));
      const item = this.actor.items.find(i => i.id == itemId);
      item.data.location.value = 0;
      this.actor.updateOwnedItem(item, true);
    });

    html.find('.toggle-enc').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let item = this.actor.items.find(i => i.id === itemId );
      item.data.countEnc.value = !item.data.countEnc.value;
      this.actor.updateOwnedItem(item, true);
    });

    html.find('.item-toggle').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let item = this.actor.items.find(i => i.id === itemId );
      if (item.type == "armour")
        item.data.worn.value = !item.data.worn.value;
      else if (item.type == "weapon")
        item.data.equipped = !item.data.equipped;
      else if (item.type == "trapping" && item.data.trappingType.value == "clothingAccessories")
        item.data.worn = !item.data.worn;
      this.actor.updateOwnedItem(item);
    });

    html.find('.career-toggle').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let type = $(ev.currentTarget).attr("toggle-type")
      let item = this.actor.items.find(i => i.id === itemId );
      item.data[type].value = !item.data[type].value;

      // Only one career can be current - make all other careers not current 
      // Dislike iterating through every item: TODO - different approach
      if (type == "current" && item.data.current.value == true)
        for (let i of this.actor.items)
          if (i.type == "career" && i != item)
            i.data.current.value = false;

      this.actor.updateOwnedItem(item);
    });

    html.find('.worn-container').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let item = this.actor.items.find(i => i.id === itemId );
      item.data.worn.value = !item.data.worn.value;
      this.actor.updateOwnedItem(item, true);
    });

    
    html.find('.item-quantity').mousedown(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let item = this.actor.items.find(i => i.id === itemId );
      switch (event.button)
      {
        case 0: 
        item.data.quantity.value++;

          break;
        case 2:
        item.data.quantity.value--;
        if (item.data.quantity.value < 0)
          item.data.quantity.value = 0;
          break;
      }
      this.actor.updateOwnedItem(item);
    });

    html.find('.AP-value').mousedown(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let APlocation =  $(ev.currentTarget).parents(".item").attr("data-location");
      let item = this.actor.items.find(i => i.id === itemId );
      if (item.data.currentAP[APlocation] == -1)
        item.data.currentAP[APlocation] = item.data.maxAP[APlocation];
      switch (event.button)
      {
        case 0: 
        item.data.currentAP[APlocation]++;
        if (item.data.currentAP[APlocation] > item.data.maxAP[APlocation])
          item.data.currentAP[APlocation] = item.data.maxAP[APlocation]
          break;
        case 2:
        item.data.currentAP[APlocation]--;
        if (item.data.currentAP[APlocation] < 0)
          item.data.currentAP[APlocation] = 0;
          break;
      }
      this.actor.updateOwnedItem(item);
    });

    html.find('.memorized-toggle').click(async ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      const spell = this.actor.items.find(i => i.id === itemId);
      spell.data.memorized.value = !spell.data.memorized.value;
      await this.actor.updateOwnedItem(spell, true);      
    });

    html.find('.auto-calc-toggle').mousedown(async ev => {
      let toggle = event.target.attributes["toggle-type"].value;

      if (event.button == 2)
      {
        let newFlags = duplicate(this.actor.data.flags);

        if (toggle == "walk")
          newFlags.autoCalcWalk = !newFlags.autoCalcWalk;

        else if (toggle == "run")
          newFlags.autoCalcRun = !newFlags.autoCalcRun;

        if (toggle == "wounds")
          newFlags.autoCalcWounds = !newFlags.autoCalcWounds;

        else if (toggle == "critW")
          newFlags.autoCalcCritW = !newFlags.autoCalcCritW;

          else if (toggle == "corruption")
          newFlags.autoCalcCorruption = !newFlags.autoCalcCorruption;


        this.actor.update({'flags' : newFlags})

      }

    });


    //Item Dragging
    let handler = ev => this._onDragItemStart(ev);
    html.find('.item').each((i, li) => {
      li.setAttribute("draggable", true);
      li.addEventListener("dragstart", handler, false);
    });
    /*
    // Item Rolling
    html.find('.item .item-image').click(event => this._onItemRoll(event));

    // Re-render the sheet when toggling visibility of spells
    html.find('.prepared-toggle').click(ev => {
      this.options.showUnpreparedSpells = !this.options.showUnpreparedSpells;
      this.render()
    });*/
  }

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  /* -------------------------------------------- */

  _onDragItemStart(event) {
    let itemId = Number(event.currentTarget.getAttribute("data-item-id"));
    event.dataTransfer.setData("text/plain", JSON.stringify({
      type: "Item",
      actorId: this.actor._id,
      id: itemId
    }));
  }

  
  async _onDrop(event) {
      var dragData = event.dataTransfer.getData("text/plain");
      var dropID = Number($(event.target).parents(".item").attr("data-item-id"));
      if ($(event.target).parents(".item").attr("inventory-type") == "container"){
        var dragItem = this.actor.getOwnedItem(JSON.parse(dragData).id);
        if (dragItem.data.id == dropID)
          throw "";
        dragItem.data.data.location.value = dropID;

          //  this will unequip/remove items like armor and weapons when moved into a container
          if (dragItem.data.type == "armour")
            dragItem.data.data.worn.value = false;
          if (dragItem.data.type == "weapon")
            dragItem.data.data.equipped = false;
          if (dragItem.data.type == "trapping" && dragItem.data.data.trappingType.value == "clothingAccessories")        
            dragItem.data.data.worn = false;


        await this.actor.updateOwnedItem(dragItem.data, true);  
      } 
    else
      super._onDrop(event)
  }
  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onItemRoll(event) {/*
    event.preventDefault();
    let itemId = ,
        item = this.actor.getOwnedItem(itemId);
    item.roll();*/
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onItemSummary(event) {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item"),
        item = this.actor.getOwnedItem(Number(li.attr("data-item-id"))),
        chatData = item.getChatData({secrets: this.actor.owner});

    // Toggle summary


    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = "";
      div = $(`<div class="item-summary">${chatData.description.value}</div>`);

      let props = $(`<div class="item-properties"></div>`);
      chatData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
      div.append(props);
      li.append(div.hide());
      div.slideDown(200);
    }
    li.toggleClass("expanded");
  }

  _expandProperty(event) {
    event.preventDefault();

    let li = $(event.currentTarget).parents(".item"),
        property = event.target.text,
        properties = mergeObject(WFRP_Utility.qualityList(), WFRP_Utility.flawList()),
        propertyDescr = Object.assign(duplicate(CONFIG.qualityDescriptions), CONFIG.flawDescriptions);

        console.log(property);
        property = property.replace(/,/g, '');
        console.log(property);
        
        let propertyKey = "";
        if (property == "Special Ammo")
        {
          let item = this.actor.getOwnedItem(Number(li.attr("data-item-id")));
          let ammo = this.actor.getOwnedItem(item.data.data.currentAmmo.value);
          propertyDescr = Object.assign(propertyDescr, {"Special Ammo" : ammo.data.data.special.value});
          propertyKey = "Special Ammo";            
        }
        else if (property != "Special")
        {
          for (let prop in properties)
          {
            if (properties[prop] == property.split(" ")[0])
              propertyKey = prop;
          }
        }
        else{
          let item = this.actor.getOwnedItem(Number(li.attr("data-item-id")));
          propertyDescr = Object.assign(propertyDescr, {"Special" : item.data.data.special.value});
          item = WFRP_Utility._prepareWeaponCombat(this.actor.data, duplicate(item.data));
          propertyKey = "Special";
        }

        let propertyDescription = "<b>" + property + "</b>" + ": " + propertyDescr[propertyKey];
        if (propertyDescription.includes("(Rating)"))
          propertyDescription = propertyDescription.replace("(Rating)", property.split(" ")[1])
    // Toggle summary

    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = $(`<div class="item-summary">${propertyDescription}</div>`);
      li.append(div.hide());
      div.slideDown(200);
    }
    li.toggleClass("expanded");
  }

  _expandInfo(event) {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item");
    let expandInfo = event.target.attributes.class.value;
    let  expansionText = "";
      if (expandInfo == "weapon-range")
      {
        let range = parseInt(event.target.text);
        expansionText = "0 yd - " + range / 10 + " yds: " + CONFIG.rangeModifiers["Point Blank"] + "<br>"+
        range / 10 + " yds - " + range / 2 + "yds: " + CONFIG.rangeModifiers["Short Range"] + "<br>" +
        range / 2 + " yds - " + range + " yds: " + CONFIG.rangeModifiers["Normal"]  + "<br>"+
        range + " yds - " + range * 2 + " yds: " + CONFIG.rangeModifiers["Long Range"] + "<br>"+
        range * 2 + " yds - " + range * 3 + " yds: " + CONFIG.rangeModifiers["Extreme"] + "<br>";
      }
      else if (expandInfo == "weapon-group")
      {
        let weaponGroup = event.target.text;
        let weaponGroupKey = "";
        for (let group in CONFIG.weaponGroups)
        {
          if (CONFIG.weaponGroups[group] == weaponGroup)
            {
              weaponGroupKey = group;
              break;
            }            
        }
        expansionText = CONFIG.weaponGroupDescriptions[weaponGroupKey];
      }
      else if (expandInfo == "weapon-reach")
      {
        let reach = event.target.text;
        let reachKey;

        for (let r in CONFIG.weaponReaches)
        {
          if (CONFIG.weaponReaches[r] == reach)
          {
            reachKey = r;
            break;
          }
        }
        expansionText = CONFIG.reachDescription[reachKey];       
      }
      
    // Toggle summary

    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = $(`<div class="item-summary">${expansionText}</div>`);
      li.append(div.hide());
      div.slideDown(200);
    }
    li.toggleClass("expanded");
  }

  /* -------------------------------------------- */

  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @private
   */
  _onItemCreate(event) {
    event.preventDefault();
    let header = event.currentTarget,
        data = duplicate(header.dataset);
    data["name"] = `New ${data.type.capitalize()}`;
    this.actor.createOwnedItem(data, true, {renderSheet: true});
  }

  /* -------------------------------------------- */
}

Actors.unregisterSheet("core", ActorSheet);




class ActorSheetWfrp4eCharacter extends ActorSheetWfrp4e {
  static get defaultOptions() {
    const options = super.defaultOptions;
    mergeObject(options, {
      classes: options.classes.concat(["wfrp4e", "actor", "character-sheet"]),
      width: 610,
      height: 740,
      showUnpreparedSpells: true
    });
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    const path = "public/systems/wfrp4e/templates/actors/";
   // if ( this.actor.limited ) return path + "limited-sheet.html";
    return path + "actor-sheet.html";
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const sheetData = super.getData();
    let tb = sheetData.actor.data.characteristics.t.bonus;
    let wpb =sheetData.actor.data.characteristics.wp.bonus;
    if (sheetData.actor.flags.autoCalcCorruption)
      sheetData.actor.data.status.corruption.max = tb + wpb;

    return sheetData;
  }

  /* -------------------------------------------- */

  /**
   * Organize and classify Items for Character sheets
   * @private
   */
  /*_prepareItems(actorData) {
  
  
  }*/
 /* -------------------------------------------- */

  /**
   * Compute the weight of carried currency across all denominations by applying the standard rule from the
   * PHB pg. 143
   *
   * @param {Object} currency   An object describing the amount of currency carried by denomination
   * @return {Number}           The total weight of carried currency
   * @private
   */
  _computeCurrencyWeight(currency) {
    const numCoins = Object.values(currency).reduce((val, denom) => val += denom.value, 0);
    return numCoins / 50;
  }
  /* -------------------------------------------- */

  // _getHeaderButtons() {
  //   return [
  //     {
  //       label: "dabiggayClose",
  //       class: "close",
  //       icon: "fas fa-times",
  //       onclick: ev => this.close()
  //     }
  //   ];
  // }


  /*_getHeaderButtons() {
    let buttons = super._getHeaderButtons();
    if ( game.user.isGM && this.options.editable ) {
      buttons = [
        {
          // label: "Close",
          class: "close",
          icon: "fas fa-times",
          onclick: ev => this.close()
        },
        {
          // label: "Sheet",
          class: "configure-sheet",
          icon: "fas fa-times",
          onclick: ev => this._onConfigureSheet(ev)
        },
        {
          // label: "Token",
          class: "configure-token",
          icon: "fas fa-times",
          onclick: ev => this._onConfigureToken(ev)
        }
      ];
    }
    return buttons
  }*/


}

// Register Character Sheet
Actors.registerSheet("wfrp4e", ActorSheetWfrp4eCharacter, {
  types: ["character"],
  makeDefault: true
});



class ActorSheetWfrp4eNPC extends ActorSheetWfrp4e {
  static get defaultOptions() {
    const options = super.defaultOptions;
    mergeObject(options, {
      classes: options.classes.concat(["wfrp4e", "actor", "npc-sheet"]),
      width: 610,
      height: 740,
      showUnpreparedSpells: true
    });
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    const path = "public/systems/wfrp4e/templates/actors/";
   // if ( this.actor.limited ) return path + "limited-sheet.html";
    return path + "npc-sheet.html";
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const sheetData = super.getData();

    // Return data for rendering
    return sheetData;
  }

  /* -------------------------------------------- */

  /**
   * Organize and classify Items for NPC sheets
   * @private
   */
  _prepareItems(actorData) {
   super._prepareItems(actorData); 
  }


  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {
    super.activateListeners(html);


      html.find('.ch-edit').focusout(async event => {
        event.preventDefault();
        let characteristic = event.currentTarget.attributes["data-char"].value;
        let newValue  = Number(event.target.value);

        await this.actor.update(
          {
            [`data.characteristics.${characteristic}.initial`] : newValue,
            [`data.characteristics.${characteristic}.advances`] : 0
          })
      });

      html.find('.npc-career').click(event => {
        event.preventDefault();
        let id = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let careerItem = this.actor.getOwnedItem(id);
        careerItem.data.data.complete.value = !careerItem.data.data.complete.value
        let updateObj = {};
        if (careerItem.data.data.complete.value)
        {
          for (let advChar of careerItem.data.data.characteristics)
          {
            if (this.actor.data.data.characteristics[advChar].advances < 5 * careerItem.data.data.level.value)
              updateObj[`data.characteristics.${advChar}.advances`] = 5 * careerItem.data.data.level.value;
          }
        }
        this.actor.updateOwnedItem({id : id, 'data' : careerItem.data.data});
        this.actor.update(updateObj);
      });

      html.find('#input-species').focusout(async event => {
        event.preventDefault();
        let species = event.target.value;

        let initialValues = WFRP_Utility.speciesAverage(species);

        // Could not get assigning the whole object to work
        // Error was something about fields not allowing "."
        for (let char in initialValues)
          await this.actor.update({[`data.characteristics.${char}.initial`] : initialValues[char]})
        await this.actor.update({"data.details.species.value" : species});
      });
  }

  /* -------------------------------------------- */

  /**
   * This method is called upon form submission after form data is validated
   * @param event {Event}       The initial triggering submission event
   * @param formData {Object}   The object of validated form data with which to update the object
   * @private
   */
  _updateObject(event, formData) {

    // Parent ActorSheet update steps
    super._updateObject(event, formData);
  }
}

// Register NPC Sheet
Actors.registerSheet("wfrp4e", ActorSheetWfrp4eNPC, {
  types: ["npc"],
  makeDefault: true
});


class ActorSheetWfrp4eCreature extends ActorSheetWfrp4e {
  static get defaultOptions() {
    const options = super.defaultOptions;
    mergeObject(options, {
      classes: options.classes.concat(["wfrp4e", "actor", "creature-sheet"]),
      width: 610,
      height: 740,
      showUnpreparedSpells: true
    });
    return options;
  }

  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    const path = "public/systems/wfrp4e/templates/actors/";
   // if ( this.actor.limited ) return path + "limited-sheet.html";
    return path + "creature-sheet.html";
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const sheetData = super.getData();

    // Return data for rendering
    return sheetData;
  }

  /* -------------------------------------------- */

  /**
   * Organize and classify Items for NPC sheets
   * @private
   */
  _prepareItems(actorData) {
   super._prepareItems(actorData); 
  }


  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html) {
    super.activateListeners(html);


      
  }

  /* -------------------------------------------- */

  /**
   * This method is called upon form submission after form data is validated
   * @param event {Event}       The initial triggering submission event
   * @param formData {Object}   The object of validated form data with which to update the object
   * @private
   */
  _updateObject(event, formData) {

    // Parent ActorSheet update steps
    super._updateObject(event, formData);
  }
}

// Register NPC Sheet
Actors.registerSheet("wfrp4e", ActorSheetWfrp4eCreature, {
  types: ["creature"],
  makeDefault: true
});




class WFRP_Utility
{

  static _prepareSpellOrPrayer(actorData, item) {
    
    item['target'] = this._calculateSpellRangeOrDuration(actorData, item.data.target.value, item.data.target.aoe);
    item['duration'] = this._calculateSpellRangeOrDuration(actorData, item.data.duration.value);
    item['range'] = this._calculateSpellRangeOrDuration(actorData, item.data.range.value);
    
    if (item.type == "spell" && !item.data.memorized.value )
    item.data.cn.value *= 2;
    
    return item;
  }

  static _prepareSkill(actorData, basicSkills, advOrGrpSkills, skill) {

    skill.data.characteristic.num = actorData.data.characteristics[skill.data.characteristic.value].value;
    skill.data.total.value = actorData.data.characteristics[skill.data.characteristic.value].value + skill.data.advances.value;
    skill.data.characteristic.abrev = CONFIG.characteristicsAbrev[skill.data.characteristic.value];

    if (skill.data.grouped.value == "isSpec" || skill.data.advanced.value == "adv")
      advOrGrpSkills.push(skill)
    else
      basicSkills.push(skill);
   }

   static  _prepareTalent(actorData, talent, talentList) {
    let existingTalent = talentList.find(t => t.name == talent.name)
    if (existingTalent){
      if (!existingTalent.numMax){
        talent["numMax"]= actorData.data.characteristics[talent.data.max.value].bonus;
      }
      if (existingTalent.data.advances.value < existingTalent.numMax){
        existingTalent.data.advances.value++;
      }
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
        talent["numMax"] = null;
        break;

        default:
        talent["numMax"]= actorData.data.characteristics[talent.data.max.value].bonus;
      }
      talentList.push(talent);
    }
   }

  // Prepare a weapon to be displayed in the combat tab (assign ammo, calculate range, organize qualities/flaws)
  static _prepareWeaponCombat(actorData, weapon){
    weapon["properties"] = this._prepareQualitiesFlaws(weapon);
    weapon.data.reach.value = CONFIG.weaponReaches[weapon.data.reach.value];
    weapon.data.weaponGroup.value = CONFIG.weaponGroups[weapon.data.weaponGroup.value];

    weapon.data.range.value = this._calculateRangeOrDamage(actorData, weapon.data.range.value);
    weapon.data.damage.value = this._calculateRangeOrDamage(actorData, weapon.data.damage.value);

    if (Number(weapon.data.range.value) > 0)
        weapon["rangedWeaponType"] = true;
    if (weapon.data.reach.value)
      weapon["meleeWeaponType"] = true;

    // assign available ammo (TODO: Improve by keeping a constant list of ammo so a loop each time is necessary)
    if (weapon.data.ammunitionGroup.value != "none") {
      weapon["ammo"] = [];
      for ( let a of actorData.items ) {
        if (a.type == "ammunition" && a.data.ammunitionType.value == weapon.data.ammunitionGroup.value) // If is ammo and the correct type of ammo
       //aggregate ammo option
        /* {
          let existingAmmo = i.ammo.find(x => x.name == a.name);
          if (existingAmmo)
            existingAmmo.data.quantity.value += a.data.quantity.value;
          else
          {*/
            weapon.ammo.push(a);
          //}
       // }
      }
      this._prepareWeaponWithAmmo(actorData, weapon);
    }
    else if (weapon.data.weaponGroup.value == "Throwing" || weapon.data.weaponGroup.value == "Explosives")
    {
      weapon["ammo"] = [weapon];
      weapon.data.ammunitionGroup.value = "";
    }
    weapon.properties = WFRP_Utility._separateQualitiesFlaws(weapon.properties);
    return weapon;
  }

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

    // Commented code is part of process of removing unrecognized qualities/flaws
    // Unsure if this should even be done (it won't allow people to make up their own)
    /*let invalidQualities = [];
    let invalidFlaws = [];
    for (let q in Object.values(qualities))
    {
      if (!Object.values(CONFIG.weaponQualities).includes(q.split(" ")[0])
      || !Object.values(CONFIG.itemQualities).includes(q.split(" ")[0]));
      {
        invalidQualities.push(q)
      }
    }

    for (let f in Object.values(flaws))
    {
      if (!Object.values(CONFIG.weaponflaws).includes(flaws[f].split(" ")[0])
      || !Object.values(CONFIG.itemflaws).includes(flaws[f].split(" ")[0]));
      {
        invalidFlaws.push(f)
      }
    } */

    // Remove Invalid qualities/flaws


    if (!item.data.special.value)
      return qualities.concat(flaws).sort().filter(p => !!p);
    else
      return qualities.concat(flaws).sort().concat("Special").filter(p => !!p);
    

  }

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
    return {qualities : qualities,flaws : flaws,special : special}
  }

  static _calculateArmorPenalties(actorData, armorList){
    // Parsing armor penalties for the combat tab
    let armorPenalties = {skill: [], penalty: []}
    let armorPenaltiesString = "";
    let wearingMail = false;
    let wearingPlate = false;
    for (let a of armorList)
    {
      if (a.data.armorType.value == "mail")
        wearingMail = true;
      else if (a.data.armorType.value == "plate")
        wearingPlate = true;

      if (a.data.penalty.value.trim() == "")
        continue;
      
      let penalties = a.data.penalty.value.split(",").map(function(item) {
        return item.trim();
      });

      for(let p of penalties)
      {
        let penaltyandSkill = p.split(" ").map(function(item) {
          return item.trim();
        });
        penaltyandSkill[0] = parseInt(penaltyandSkill[0])

        let existingPenalty = armorPenalties.skill.indexOf(penaltyandSkill[1]);
        if (existingPenalty == -1)
        {
          armorPenalties.skill.push(penaltyandSkill[1]);
          armorPenalties.penalty.push(penaltyandSkill[0]);
        }
        else
        {
          armorPenalties.penalty[existingPenalty] += penaltyandSkill[0];
        }
      }
    }

    if (wearingMail || wearingPlate)
    {
      let stealthPenalty = armorPenalties.skill.indexOf("Stealth");
      if (stealthPenalty == -1)
      {
        armorPenalties.skill.push("Stealth");
        armorPenalties.penalty.push(0);
        stealthPenalty = armorPenalties.skill.indexOf("Stealth");
      }

      if (wearingMail)
        armorPenalties.penalty[stealthPenalty] += -10;
      if (wearingPlate)
        armorPenalties.penalty[stealthPenalty] += -10;
    }

    for (let i = 0; i < armorPenalties.skill.length; i++)
    {
      armorPenaltiesString = armorPenaltiesString.concat(armorPenalties.penalty[i] + " " + armorPenalties.skill[i]);
      if (i != armorPenalties.skill.length - 1)
        armorPenaltiesString = armorPenaltiesString.concat(", ");

    }
    return armorPenaltiesString;
  }



  
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
    else if (ammoRange.toLowerCase() == "twice weapon") 
    {
      weapon.data.range.value *= 2;
    }
    else
      weapon.data.range.value += eval(ammoRange)

    weapon.data.damage.value += eval(ammoDamage);
    
    ammoProperties = ammoProperties.filter(p => p != undefined);
    let propertyIncrease = ammoProperties.filter(p => p.includes("+"));
    let propertyDecrease = ammoProperties.filter(p => p.includes("-"));

    let propertiesToAdd = ammoProperties.filter(p => !(p.includes("+") || p.includes("-")));

    for (let inc of propertyIncrease)
    {
      let index = inc.indexOf("+");
      let property = inc.substring(0, index).trim();
      let value = inc.substring(index, property.length);
      if (weapon.properties.includes(property))
      {
        //TODO
        // This section is for ammo that increases a quality
        // e.g. Blast +1 Turns a weapon with Blast 4 into Blast 5
      }
      else
      {
        weapon.properties.push(property + " " + value);
      }
    }
    for (let inc of propertyDecrease)
    {
      let index = inc.indexOf("-");
      let property = inc.substring(0, index).trim();
      let value = inc.substring(index, property.length);
      if (weapon.properties.includes(property))
      {
        //TODO
        // This section is for ammo that decreases a quality
        // e.g. Blast -1 Turns a weapon with Blast 4 into Blast 3
      }
      else
      {
        weapon.properties.push(property + " " + value);
      }
    }

    weapon.properties = weapon.properties.concat(propertiesToAdd);
  }

    
  static _calculateSpellRangeOrDuration(actorData, formula, aoe=false){    
    formula = formula.toLowerCase();

    if (formula == "you")
      return "You"

    if (formula == "special")
      return "Special"

      if (formula == "instant")
      return "Instant"

    for(let ch in actorData.data.characteristics)
    {

      if (formula.includes(actorData.data.characteristics[ch].label.toLowerCase()))
      {
        if (formula.includes('bonus'))
        {
          formula = formula.replace(actorData.data.characteristics[ch].label.toLowerCase().concat(" bonus"),  actorData.data.characteristics[ch].bonus);
        }
        else 
        {
          formula = formula.replace(actorData.data.characteristics[ch].label.toLowerCase(),  actorData.data.characteristics[ch].value);
        }
      } 
    }
    
    if (aoe)
      formula = "AoE (" + formula + ")";
    return formula;
  }


  static speciesAverage(species)
  {
    let averageCharacteristics = {};
    for (let char in CONFIG.characteristics)
    {
      averageCharacteristics[char] = 0;
    }
    if (species == "Human")
    {
      for (let char in averageCharacteristics)
      {
        averageCharacteristics[char] = 30;
      }
    }
    return averageCharacteristics;
  }

  static nameSorter(a, b){
    if (a.name.toLowerCase() < b.name.toLowerCase())
      return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase())
      return 1;
    return 0;
  }

  static qualityList()
  {
    let weapon = duplicate(CONFIG.weaponQualities);
    let armor = duplicate(CONFIG.armorQualities);
    let item = duplicate(CONFIG.itemQualities);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }
  static flawList()
  {
    let weapon = duplicate(CONFIG.weaponFlaws);
    let armor = duplicate(CONFIG.armorFlaws);
    let item = duplicate(CONFIG.itemFlaws);
    let list = mergeObject(weapon,mergeObject(item, armor))
    return list;
  }
}


/* -------------------------------------------- */

