CONFIG.statusEffects = 
["systems/wfrp4e/icons/conditions/bleed1.png",
"systems/wfrp4e/icons/conditions/bleed2.png",
"systems/wfrp4e/icons/conditions/bleed3.png",
"systems/wfrp4e/icons/conditions/bleed4.png",
//"systems/wfrp4e/icons/conditions/bleed5.png",
"systems/wfrp4e/icons/conditions/poison1.png",
"systems/wfrp4e/icons/conditions/poison2.png",
"systems/wfrp4e/icons/conditions/poison3.png",
"systems/wfrp4e/icons/conditions/poison4.png",
//"systems/wfrp4e/icons/conditions/poison5.png",
"systems/wfrp4e/icons/conditions/ablaze1.png",
"systems/wfrp4e/icons/conditions/ablaze2.png",
"systems/wfrp4e/icons/conditions/ablaze3.png",
"systems/wfrp4e/icons/conditions/ablaze4.png",
//"systems/wfrp4e/icons/conditions/ablaze5.png",
"systems/wfrp4e/icons/conditions/deafened1.png",
"systems/wfrp4e/icons/conditions/deafened2.png",
"systems/wfrp4e/icons/conditions/deafened3.png",
"systems/wfrp4e/icons/conditions/deafened4.png",
//"systems/wfrp4e/icons/conditions/deafened5.png",
"systems/wfrp4e/icons/conditions/stunned1.png",
"systems/wfrp4e/icons/conditions/stunned2.png",
"systems/wfrp4e/icons/conditions/stunned3.png",
"systems/wfrp4e/icons/conditions/stunned4.png",
//"systems/wfrp4e/icons/conditions/stunned5.png",
"systems/wfrp4e/icons/conditions/entangled1.png",
"systems/wfrp4e/icons/conditions/entangled2.png",
"systems/wfrp4e/icons/conditions/entangled3.png",
"systems/wfrp4e/icons/conditions/entangled4.png",
//"systems/wfrp4e/icons/conditions/entangled5.png",
"systems/wfrp4e/icons/conditions/fatigued1.png",
"systems/wfrp4e/icons/conditions/fatigued2.png",
"systems/wfrp4e/icons/conditions/fatigued3.png",
"systems/wfrp4e/icons/conditions/fatigued4.png",
//"systems/wfrp4e/icons/conditions/fatigued5.png",
"systems/wfrp4e/icons/conditions/blinded1.png",
"systems/wfrp4e/icons/conditions/blinded2.png",
"systems/wfrp4e/icons/conditions/blinded3.png",
"systems/wfrp4e/icons/conditions/blinded4.png",
//"systems/wfrp4e/icons/conditions/blinded5.png"
"systems/wfrp4e/icons/conditions/broken1.png",
"systems/wfrp4e/icons/conditions/broken2.png",
"systems/wfrp4e/icons/conditions/broken3.png",
"systems/wfrp4e/icons/conditions/broken4.png",
//"systems/wfrp4e/icons/conditions/broken5.png"
"systems/wfrp4e/icons/conditions/grappling.png",
"systems/wfrp4e/icons/conditions/prone.png",
"systems/wfrp4e/icons/conditions/fear.png",
"systems/wfrp4e/icons/conditions/surprised.png",
]

CONFIG.JournalEntry.noteIcons = {
  Capital : "systems/wfrp4e/icons/buildings/empire_city_altdorf5.png",
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

// Status Tiers
CONFIG.statusTiers = {
  "g" : "Gold",
  "s" : "Silver",
  "b" : "Brass"
};

// Characteristic Names
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

// Characteristic Abbreviations
CONFIG.characteristicsAbbrev = {
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

// Weapon Group Descriptions
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

// Weapon Reach
CONFIG.weaponReaches={
  "personal":"Personal",
  "vshort":"Very Short",
  "short":"Short",
  "average": "Average",
  "long":"Long",
  "vLong":"Very Long",
  "massive":"Massive",
 }

 // Weapon reach descriptions
 CONFIG.reachDescription={
  "personal":"Your legs and fists, perhaps your head, and anything attached to those.",
  "vshort":"Less than a foot in length.",
  "short":"Up to 2 feet in length.",
  "average": "Up to 3 feet long.",
  "long":"Up to 6 feet long.",
  "vLong":"Up to 10 feet in length; can Engage enemies up to 4 yards away, rather than just 2.",
  "massive":"Anything over 10 feet long; can Engage enemies up to 6 yards away, rather than just 2",
 }

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


// Weapon Quality Descriptions (Used in dropdown info)
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
  "wrap": "Wrap weapons typically have long chains with weights at the end, making it very difficult to parry them effectively. Melee Tests opposing an attack from a Wrap weapon suffer a penalty of –1 SL, as parried strikes wrap over the top of shields, or around blades.",
  "flexible": "Flexible",
  "impenetrable": "Impenetrable",
  "durable": "Durable",
  "fine": "Fine",
  "lightweight": "Lightweight",
  "practical": "Practical",
};

// Weapon Flaw Descriptions (used in dropdown info)
CONFIG.flawDescriptions = {
  "dangerous": "Some weapons are almost as likely to hurt you as your opponent. Any failed test including an 9 on either 10s or units die results in a Fumble (see Chapter 5: Rules for more on Fumbles).",
  "imprecise": "Imprecise weapons are difficult to bring to bear as they are unwieldy or hard to aim. Suffer a penalty of –1 SL when using the weapon to attack. An Imprecise Weapon can never be Precise (Imprecise takes precedent).",
  "reload": "The weapon is slow to reload. An unloaded weapon with this flaw requires an Extended Ranged Test for the appropriate Weapon Group scoring (Rating) SL to reload. If you are interrupted while reloading, you must start again from scratch.",
  "slow": "Slow weapons are unwieldy and heavy, making them difficult to use properly. Characters using Slow weapons always strike last in a Round, regardless of Initiative order. Further, opponents gain a bonus of +1 SL to any Test to defend against your attack",
  "tiring": "The weapon is fatiguing to use or difficult to bring to bear. You only gain the benefit of the Impact and Damaging Weapon Traits on a Turn you Charge.",
  "undamaging": "Some weapons are not very good at penetrating armour. All APs are doubled against Undamaging weapons. Further, you do not automatically inflict a minimum of 1 Wound on a successful hit in combat.",
  "partial": "Partial",
  "weakpoints": "Weakpoints",
  "ugly": "Ugly",
  "shoddy": "Shoddy",
  "unreliable": "Unreliable",
  "bulky": "Bulky"
};

// Armor Qualities
CONFIG.armorQualities = {
  "flexible": "Flexible",
  "impenetrable": "Impenetrable",
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
  "other": "Other"
};

// Range Test Modifiers
CONFIG.rangeModifiers={
  "Point Blank" : "Easy (+40)",
  "Short Range":"Average (+20)",
  "Normal" : "Challenging (+0)",
  "Long Range": "Difficult (-10)",
  "Extreme": "Very Hard (-30)",
 }

// Difficulty Modifiers
CONFIG.difficultyModifiers = {
 "veasy" : 60,
 "easy" : 40 , 
 "average":20, 
 "challenging":0,
 "difficult": -10,
 "hard" : -20,
 "vhard": -30
}

// Difficulty Labels
CONFIG.difficultyLabels = {

 "veasy" :"Very Easy (+60)",
 "easy" :"Easy (+40)",
 "average":"Average (+20)",
 "challenging":"Challenging (+0)",
 "difficult":"Difficult (-10)",
 "hard" :"Hard (-20)",
 "vhard":"Very Hard (-30)"
}
 
CONFIG.locations = {
 "head": "Head",
 "body": "Body",
 "rArm": "Right Arm",
 "lArm": "Left Arm",
 "rLeg": "Right Leg",
 "lLeg": "Left Leg",
}



// Trapping Availability
 CONFIG.availability = {
   "None": "-",
   "common": "Common",
   "scarce": "Scarce",
   "rare": "Rare",
   "exotic": "Exotic",
 }

 
// Trapping Types
CONFIG.trappingTypes = {
  "clothingAccessories":"Clothing and Accessories",
  "foodAndDrink":"Food and Drink",
  "toolsAndKits":"Tools and Kits",
  "booksAndDocuments":"Books and Documents",
  "tradeTools":"Trade Tools and Workshops", //unused, makes more sense to use Tools and Kits
  "drugsPoisonsHerbsDraughts":"Drugs, Poisons, Herbs, and Draughts",
  "ingredient":"Ingredient",
  "misc":"Miscellaneous"
};

// These categories are used to label items in containers (Trapping tab)
CONFIG.trappingCategories = {
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

// Given a Lore, what is the Wind
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

// Types of prayers
CONFIG.prayerTypes = {
  "blessing" : "Blessing",
  "miracle" : "Miracle"
}

CONFIG.mutationTypes = {
  "physical" : "Physical",
  "mental" : "Mental"
}

CONFIG.encumbrancePenalties = {
"encumbered" : "–1 Movement (min: 3), –10 Agility, +1 Travel Fatigue",
"veryEncumbered" : "–2 Movement (min: 2), –20 Agility (min: 10), +2 Travel Fatigue",
"maxEncumbered" : "You're not moving.",
}

class DiceWFRP {
  /**
   * A standardized helper function for managing preparing, rolling, and displaying WFRP tests"
   *
   *
   * @param {Object} dialogOptions      Dialog template, buttons, everything associated with the dialog      
   * @param {Object} testData           Test info: target number, SL bonus, success bonus, etc
   * @param {Object} cardOptions        Chat card template and info
   */
  static prepareTest({dialogOptions, testData, cardOptions, onClose}) {
    let rollMode = game.settings.get("core", "rollMode");

    // Merge input with generic properties constant between all tests
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
    // If dialogOptions has a rollOverride, use it (spells, weapons, prayers)
    if (dialogOptions.rollOverride)
      roll = dialogOptions.rollOverride;
    else // Otherwise use a generic test
      roll = () =>{
      let roll = DiceWFRP.rollTest(testData);
      if (testData.hitLocation)
        console.log(WFRP_Tables.hitloc)
      if (testData.extra)
        mergeObject(roll, testData.extra);
      DiceWFRP.renderRollCard(cardOptions, roll);
    }

    dialogOptions.data.rollMode = rollMode;
    dialogOptions.data.rollModes = CONFIG.rollModes;
    
    // Render Test Dialog
    renderTemplate(dialogOptions.template, dialogOptions.data).then(dlg => {
      new Dialog({
          title: dialogOptions.title,
          content: dlg,
          buttons: dialogOptions.buttons,
          close: html => dialogOptions.callback(html, roll)
        }).render(true);
    });
  }


  // Roll a standard Test and determine success
  static rollTest(testData){
    let roll = new Roll("1d100").roll();
    testData.includeCriticalsFumbles = true;
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
    else // SL == 0
    { 
      if (targetNum > roll.total)
      {
        description = "Success"
        SL = SL + successBonus;
        SL = "+" + SL.toString()
      }
      else
      {
        description = "Failure"
        SL = "-" + SL.toString() // Should result in -0
      }
    }


    // Find description according to outcome table
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

    let rollResults={
      target: targetNum,
      roll: roll.total,
      SL: SL,
      description: description,
      extra : {}
    }

    if (testData.hitLocation)
      rollResults.hitloc = WFRP_Tables.rollTable("hitloc");
    

      if (testData.includeCriticalsFumbles)
      {
        if (roll.total > targetNum && roll.total % 11 == 0 || roll.total == 100)
          rollResults.extra.fumble = "Fumble";
        else if (roll.total <= targetNum && roll.total % 11 == 0)
          rollResults.extra.critical = "Critical";
      }
  

    return rollResults;
   } 

   // Extend rollTest to account for weapon specifics (criticals, fumbles, etc)
   static rollWeaponTest(testData){
    let weapon = testData.extra.weapon;
     
     let testResults = this.rollTest(testData);

     if (testResults.roll > testResults.target)
     {
       if (testResults.roll % 11 == 0 || (weapon.properties.flaws.includes("Dangerous") && testResults.roll.toString().includes("9")))
       {
         testResults.extra.fumble = "Fumble"      
         if ((weapon.data.weaponGroup.value == "Blackpowder" ||
             weapon.data.weaponGroup.value== "Engineering" ||
             weapon.data.weaponGroup.value== "Explosives") &&
             testResults.roll % 2 == 0)
         testResults.extra.misfire = "Misfire"
       }

     }
     else
     {
       if (testResults.roll % 11 == 0)
         testResults.extra.critical = "Critical"
       
       if (weapon.properties.qualities.includes("Impale") && testResults.roll % 10 == 0)
         testResults.extra.critical = "Critical"
         
     }

     return testResults;
  } 

  // Extend rollTest for casting specifics (miscasts, CN, etc)
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

      // TODO: If no ID
      if (testResults.roll % 11 == 0)
      {
        testResults.description = "Casting Succeeded"
        testResults.extra.critical = "Critical Cast"
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

    switch (miscastCounter)
    {
      case 1: 
        if (testData.extra.ingredient)
          testResults.extra.nullminormis = "<s>Minor Miscast</s>"
        else 
          testResults.extra.minormis = "<s>Minor Miscast</s>"
      break;
      case 2:
          if (testData.extra.ingredient)
          {
            testResults.extra.nullmajormis = "<s>Major Miscast</s>"
            testResults.extra.minormis = "Minor Miscast"
          }
         else 
           testResults.extra.majormis = "<s>Major Miscast</s>"
           break;
      case 3: 
      testResults.extra.majormis = "<s>Major Miscast</s>"
      break;
    }

    if (testData.extra.ingredient)
      miscastCounter--;
    if (miscastCounter < 0)
      miscastCounter = 0;
    if (miscastCounter > 2)
      miscastCounter = 2

    return testResults;
  } 

  // Extend rollTest for channelling specifics (miscasts, CN, etc)
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
         testResults.extra.criticalchannell = "Critical Channell"

       }
     }

     // Add SL to CN and update actor
     spell.data.cn.SL += Number(SL);
     if (spell.data.cn.SL > spell.data.cn.value)
      spell.data.cn.SL = spell.data.cn.value;
    else if (spell.data.cn.SL < 0)
     spell.data.cn.SL = 0;
     actor.updateOwnedItem({id: spell.id , 'data.cn.SL' : spell.data.cn.SL});

     switch (miscastCounter)
     {
       case 1: 
         if (testData.extra.ingredient)
           testResults.extra.nullminormis = "<s>Minor Miscast</s>"
         else 
           testResults.extra.minormis = "<s>Minor Miscast</s>"
       break;
       case 2:
           if (testData.extra.ingredient)
           {
             testResults.extra.nullmajormis = "<s>Major Miscast</s>"
             testResults.extra.minormis = "Minor Miscast"
           }
          else 
            testResults.extra.majormis = "<s>Major Miscast</s>"
            break;
       case 3: 
       testResults.extra.majormis = "<s>Major Miscast</s>"
       break;
     }
 
     if (testData.extra.ingredient)
       miscastCounter--;
     if (miscastCounter < 0)
       miscastCounter = 0;
     if (miscastCounter > 2)
       miscastCounter = 2
     return testResults;
 } 

  // Extend rollTest for pray specifics (sin, wrath of the gods, etc)
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
         testResults.extra.wrath = "Wrath of the Gods"
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
       testResults.extra.wrath = "Wrath of the Gods"       
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

// Take roll data and display it in a chat card template
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


  
  // To be used in the future for opposed tests
  // static opposeData  = {
  //   opposeStarted : false,
  //   actor : undefined,
  //   rollData : undefined
  // }
  static chatListeners(html) {

    html.on('mousedown', '.table-click', ev => {
      ev.preventDefault();
      if (ev.button == 0)
      {
        let sin = Number($(ev.currentTarget).attr("data-sin"));
        let modifier = sin * 10 || 0;
        let html;
        if (sin)
          html = WFRP_Tables.formatChatRoll($(ev.currentTarget).attr("data-table"), {modifier: modifier, maxSize: false});      
        else
          html = WFRP_Tables.formatChatRoll($(ev.currentTarget).attr("data-table"), {modifier: modifier});
        let messageId = $(ev.currentTarget).parents('.message').attr("data-message-id");
        let senderId = game.messages.get(messageId).user._id;
        ChatMessage.create({content : html, user : senderId})
      }
      else if (ev.button == 2)
      {
        new Dialog({
          title: "Table Modifier",
          content: '',
          buttons: {
            roll: {
              label: "Roll",
              callback: (html) => {
                let tableModifier = html.find('[name="tableModifier"]').val();
                let minOne = html.find('[name="minOne"]').is(':checked');
                console.log(minOne);
              }
            },
          },
          default: 'roll'
        }).render(true);
      }


    })
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
 * Activate certain behaviors on FVTT ready hook
 */
Hooks.once("init", () => {

  fetch ("fgdb.json").then (r => r.json()).then(async records => {
    var fgtable = records["tables"]["id-00001"];
    var newtable = {
      name : fgtable.name,
      rows : ["-"]
    }

    for (var fgrow in fgtable["tablerows"])
    {
      fgrow = fgtable["tablerows"][fgrow];
      var from = fgrow.fromrange;
      var to = fgrow.torange;
      for (var i = from; i <= to; i++)
      {
        var rowObj = {
          description : fgrow.results["id-00001"].result,
        }
        newtable.rows.push(rowObj);
      }
    }
    console.log(JSON.stringify(newtable));
  })

  // fetch("doomings.txt").then(r => r.text()).then(t => {
  //   let array = t.split("\n").map(function(item) {
  //     return item.substring(3);
  //   });
  //   let table = {rows: [undefined]};
  //   for (let i = 0; i < array.length; i++)
  //   {
  //     table.rows.push({description : array[i]})
  //   }
  //   console.log(JSON.stringify(table));
  // })

  game.socket.emit("getFiles", "systems/wfrp4e/tables", {}, resp => {
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
       console.log("Error reading " + file + ": " + error) 
      }
    }
  })

  WFRP_Tables.scatter = {
    rows : [
      undefined, 
      {
        name : "Top Left"
      },
      {
        name : "Top Middle"
      },
      {
        name : "Top Right"
      },
      {
        name : "Center Left"
      },
      {
        name : "Center Right"
      },
      {
        name : "Bottom Left"
      },
      {
        name : "Bottom Middle"
      },
      {
        name : "Bottom Right"
      },
      {
        name : "At your feet"
      },
      {
        name : "At the target's feet"
      },
    ]
  }

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

  // Register initiative rule
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

  // Register Fast SL rule
  game.settings.register("wfrp4e", "fastSL", {
    name: "Fast SL",
    hint: "(NOT IMPLEMENTED) Determine SL with Fast SL as described on page 152",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Register Tests above 100% Rule
  game.settings.register("wfrp4e", "testAbove100", {
    name: "Tests Above 100%",
    hint: "(NOT IMPLEMENTED) Use optional rule Tests Above 100% as described on p 151. A successful Test gains +1 SL for each full 10% a tested Characteristic or Skill exceeds 100%",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

    // Register Fate/Fortune Cap
    game.settings.register("wfrp4e", "fortuneCap", {
      name: "Cap Fortune to Fate",
      hint: "Fortune can never be higher than Fate",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });

    // Register Resolve/Resilience Cap
    game.settings.register("wfrp4e", "resolveCap", {
      name: "Cap Resolve to Resilience",
      hint: "Resolve can never be higher than Resilience",
      scope: "world",
      config: true,
      default: true,
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

  /**
   * Double every other diagonal movement
   */
  SquareGrid.prototype.measureDistance = function(p0, p1) {
    let gs = canvas.dimensions.size,
        ray = new Ray(p0, p1),
        nx = Math.abs(Math.ceil(ray.dx / gs)),
        ny = Math.abs(Math.ceil(ray.dy / gs));

    // Get the number of straight and diagonal moves
    let nDiagonal = Math.min(nx, ny),
        nStraight = Math.abs(ny - nx);

    let nd10 = Math.floor(nDiagonal / 2);
    let spaces = (nd10 * 2) + (nDiagonal - nd10) + nStraight;
    return spaces * canvas.dimensions.distance;
  

  }
});

Hooks.on("chatMessage", async (html, content, msg) => {
  content = content.toLowerCase();
  console.log(content.substring(0,6));
  let command = content.split(" ").map(function(item) {
    return item.trim();
  })
  if (command[0] == "/table")
  {
    modifier = parseInt(command[2]);
    msg.content = WFRP_Tables.formatChatRoll(command[1], {modifier : modifier})
  }
});

/**
 * Extend the base Actor class to implement additional logic specialized for D&D5e.
 */
class ActorWfrp4e extends Actor {

  // Give new actor all Basic skills
  static async create(data, options) {
    if (data.type == "character")
    {
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
    }
    // Default auto calculation to true
    data.flags = 
    {
      autoCalcRun :  true,
      autoCalcWalk :  true,
      autoCalcWounds :  true,
      autoCalcCritW :  true,
      autoCalcCorruption :  true,
      autoCalcEnc :  true
    }

    /*for (let item of Item.collection.entities)
    {
      if (item.img.includes ("blank"))
      {
        console.log("Test")
        item.update({"img" : "systems/wfrp4e/icons/blank.png"});
      }
    }*/
    super.create(data, options);
    
  }

  // Calculate dynamic data like Characteristic totals and movemen values
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

      
    if (actorData.flags.autoCalcEnc)
      actorData.data.status.encumbrance.max = data.characteristics.t.bonus + data.characteristics.s.bonus;
    
    return actorData;

  }

  /* -------------------------------------------- */

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(data) {


    // Cap fortune to fate
    if (game.settings.get("wfrp4e", "fortuneCap") && data.status.fate.value < data.status.fortune.value)
    {
      data.status.fortune.value = data.status.fate.value;
    }

    // Cap resolve to resilience
    if (game.settings.get("wfrp4e", "resolveCap") &&data.status.resilience.value < data.status.resolve.value)
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
   * Roll a characteristic test.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String} characteristicId     The characteristic id (e.g. "ws")
   */
  rollCharacteristic(characteristicId) {
    let char = this.data.data.characteristics[characteristicId];
    let title = char.label + " Test";
    let testData = {
      target : char.value,
      hitLocation : false
    };

    // Default a WS or BS test to use hit locations
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
   * Roll a Skill Test
   * @param skill {object}  The Skill Object owned by a character
   */
  rollSkill(skill) {
    let char = this.data.data.characteristics[skill.data.characteristic.value];
    let title = skill.name + " Test";
    let testData = {
      target : char.value + skill.data.advances.value,
      hitLocation : false
    };

    // Default hit location to true if WS, BS, Melee, or Ranged is tested
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
   * Roll a Weapon Test
   * @param weapon {Object}   Weapon being used
   * @param event {Object}    Event fired to initiate the roll
   */
  rollWeapon(weapon, event) {
    let skillCharList = [];
    let ammo;
    let title = "Weapon Test - " + weapon.name;
    if (event.attackType == "melee")
    {
      // If Melee, default to Weapon Skill, but check to see if the actor has the specific skill for the weapon
      skillCharList.push("Weapon Skill")
      let skill = "Melee (" + CONFIG.weaponGroups[weapon.data.weaponGroup.value] + ")";
      if (this.data.flags.combatSkills.find(x=> x.name.toLowerCase() == skill.toLowerCase()))
        skillCharList.push(skill);
    }


    if (event.attackType == "ranged")
    {
      // If Ranged, default to Ballistic Skill, but check to see if the actor has the specific skill for the weapon
      skillCharList.push("Ballistic Skill")
      if (weapon.data.weaponGroup.value != "throwing" && weapon.data.weaponGroup.value != "explosives" && weapon.data.weaponGroup.value != "entangling")
      { 
        // Check to see if they have ammo
        ammo = this.items.find(i => i.id == weapon.data.currentAmmo.value);
        if (!ammo || weapon.data.currentAmmo.value == 0 || ammo.data.quantity.value == 0)
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
        ammo : ammo,
        attackType : event.attackType
      }
    };

    // Default the selection to the specific skill (so user doesn't have to change it to the better option every time)
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
          // If using only a characteristic, delete all qualities, set target number to characteristic value + modifiers
          testData.extra.weapon = WFRP_Utility._prepareWeaponCombat(this.data, weapon)
          testData.extra.weapon.properties.flaws = testData.extra.weapon.properties.flaws.join(", ")
          testData.extra.weapon.properties.qualities = [];
          if (skillSelected == "Weapon Skill")
            testData.target = this.data.data.characteristics.ws.value
          else if (skillSelected == "Ballistic Skill")
            testData.target = this.data.data.characteristics.bs.value

          testData.target += testData.testModifier + testData.testDifficulty;
        }
        else
        {
          // If using the appropriate skill, set the target number to characteristic value + advances + modifiers
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

        // Aggregate all talent bonuses selected and add that to successBonus
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        // Perform the d100 roll
        roll();

        // Reduce ammo if necessary
        if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup != "entangling")
        {
          ammo.data.quantity.value--;
          this.updateOwnedItem({id: ammo.id, "data.quantity.value" : ammo.data.quantity.value });
        }
      },
      // Override the default test evaluation to use weaponTest specific function
      rollOverride : () => {
        let roll = DiceWFRP.rollWeaponTest(testData);
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
      template : "public/systems/wfrp4e/templates/chat/weapon-card.html",
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  // Roll spell Dialog - choose between Casting or Channelling
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

  /**
   * Roll a Cast Test
   * @param spell {Object}   Spell being cast
   */
  rollCast(spell) {
    let title = "Casting Test";
    let castSkill = this.items.find(i => i.name.toLowerCase() == "language (magick)" && i.type == "skill")
    // Prevent casting if they do not have Language (Magick)
    if (!castSkill)
    {
      ui.notifications.error("You need Language (Magick) to cast a spell")
      return; 
    }
    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.data, spell);
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

        // Find ingredient being used, if any
        let ing = this.items.find(i => i.id == testData.extra.spell.data.currentIng.value)

        if (!ing || ing.data.quantity.value <= 0)
          testData.extra.ingredient = false;
        else 
        {
          // Decrease ingredient quantity
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateOwnedItem(ing);
        }
        roll();
        },
        // Override generic roll with cast specific roll
        rollOverride : () => 
        {
          let roll = DiceWFRP.rollCastTest(testData);
          if (testData.extra)
            mergeObject(roll, testData.extra);
          DiceWFRP.renderRollCard(cardOptions, roll);
          this.updateOwnedItem({id: spell.id, 'data.cn.SL' : 0});
          // Update spell to reflect SL from channelling resetting to 0
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

 /**
   * Roll a Channelling Test
   * @param spell {Object}   Spell being channelled
   */
  rollChannell(spell) {
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


        // Find ingredient being used, if any
        let ing = this.items.find(i => i.id == testData.extra.spell.data.currentIng.value)

        if (!ing || ing.data.quantity.value <= 0)
          testData.extra.ingredient = false;
        else 
        {
          // Decrease ingredient quantity
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateOwnedItem(ing);
        }

        roll();
        },
        // Override generic roll with channell specific function
      rollOverride : (actor) => {
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

   /**
   * Roll a Prayer Test
   * @param prayer {Object}   prayer being invoked
   */
  rollPrayer(prayer, options) {
    let title = "Prayer Test";
    let praySkill = this.items.find(i => i.name.toLowerCase() == "pray" && i.type == "skill")
    // Prevent test if character does not have pray
    if (!praySkill)
    {
      ui.notifications.error("You need Pray to invoke the Gods")
      return; 
    }
    let preparedPrayer = WFRP_Utility._prepareSpellOrPrayer(this.data, prayer);
    let testData = {
      target : praySkill.data.advances.value + this.data.data.characteristics[praySkill.data.characteristic.value].value,
      hitLocation : true,
      extra : {
        prayer : preparedPrayer,
        sin : this.data.data.status.sin.value
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
        // Override generic test function with prayer specific function
      rollOverride : () => {
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

  /**
   * Roll a Prayer Test
   * @param prayer {Object}   prayer being invoked
   */
  rollTrait(trait) {
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
 * Override and extend the basic :class:`Item` implementation
 */
class ItemWfrp4e extends Item {


  static async create(data, options) {

    data.img = "systems/wfrp4e/icons/blank.png";
    super.create(data, options);
  }
  // Expand data is used in most dropdown infos
  getExpandData(htmlOptions) {
    const data = this[`_${this.data.type}ExpandData`]();
    data.description.value = data.description.value || "";
    data.description.value = enrichHTML(data.description.value, htmlOptions);
    return data;
  }

  /* -------------------------------------------- */

  _trappingExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
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
    return data;
  }

  _diseaseExpandData() {
    const data = duplicate(this.data.data);
    data.properties = [];
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
    data.properties.push("Class: " + this.data.data.class.value);
    data.properties.push("Group: " + this.data.data.careergroup.value);
    data.properties.push(CONFIG.statusTiers[this.data.data.status.tier] + " " + this.data.data.status.standing);
    data.properties.push("Characteristics: " + this.data.data.characteristics.map(i => i = " " + CONFIG.characteristicsAbbrev[i]));
    data.properties.push("Skills: " + this.data.data.skills.map(i => i = " " + i));
    data.properties.push("Talents: " + this.data.data.talents.map (i => i = " " + i));
    data.properties.push("Income: " + this.data.data.incomeSkill.map(i => " " + this.data.data.skills[i]));
    return data;
  }

  _injuryExpandData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    return data;
  }

  _spellExpandData() {
    const data = duplicate(this.data.data);
    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.actor.data, this.data);
    data.properties = [];
    data.properties.push("Range: " + preparedSpell.range);
    data.properties.push("Target: " + preparedSpell.target);
    data.properties.push("Duration: " + preparedSpell.duration);
    if (preparedSpell.data.damage.value)
      data.properties.push("Damage: " + preparedSpell.data.damage.value);
    if (data.magicMissile.value)
      data.properties.push("Magic Missile: +" + eval( this.actor.data.data.characteristics.wp.bonus + preparedSpell.data.damage.value));
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

  /* -------------------------------------------- */

  _weaponExpandData() {
   const data = duplicate(this.data.data);
    let properties = [];

    if (data.weaponGroup.value)
      properties.push(CONFIG.weaponGroups[data.weaponGroup.value]);

    if (data.reach.value)
      properties.push ("Reach: " + CONFIG.weaponReaches[data.reach.value] + " - " + CONFIG.reachDescription[data.reach.value]);
    if (data.range.value)
      properties.push("Range: " + data.range.value);
    if (data.damage.meleeValue)
      properties.push("Melee Damage: " + data.damage.meleeValue);
    if (data.damage.rangedValue)
      properties.push("Ranged Damage: " + data.damage.rangedValue);
    for (let prop of WFRP_Utility._prepareQualitiesFlaws(this.data))
      properties.push(prop);
    properties = properties.filter(p => p != "Special");
    if (data.special.value)
      properties.push ("Special: " + data.special.value);

    data.properties = properties.filter(p => !!p);
    return data;
  }

  _armourExpandData() {
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

   _ammunitionExpandData() {
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

}
// Assign ItemWfrp4e class to CONFIG
CONFIG.Item.entityClass = ItemWfrp4e;


/**
 * Hook into chat log context menu
 */
Hooks.on("getChatLogEntryContext", (html, options) => {
});

/**
 * Override and extend the basic :class:`ItemSheet` implementation
 */
class ItemSheetWfrp4e extends ItemSheet {
  constructor(item, options) {
    super(item, options);
    this.mce = null;
  }

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
      let characteristicList = duplicate(CONFIG.characteristicsAbbrev);
      for (let char in characteristicList)
      {
        if(data.data.characteristics.includes(char))
          characteristicList[char] = {abrev : CONFIG.characteristicsAbbrev[char], checked : true};
       else
        characteristicList[char] = {abrev : CONFIG.characteristicsAbbrev[char], checked : false};
      }
      data['characteristicList'] = characteristicList;
      
    }

    else if (this.item.type == "trapping")
    {
      data['trappingTypes'] = CONFIG.trappingTypes;
      data['availability'] = CONFIG.availability;
    }

    else if (this.item.type == "trait")
    {
      data['characteristics'] = CONFIG.characteristics;
    }

    else if (this.item.type == "container")
    {
      data['availability'] = CONFIG.availability;
    }

    else if (this.item.type == "mutation")
    {
      data['mutationTypes'] = CONFIG.mutationTypes;
    }


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
      
      if (this.item.actor)
        this.item.actor.updateOwnedItem({id: this.item.data.id, 'data.characteristics' : characteristicList})
      else
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

  async _render(force = false, options = {}) {
    this._saveScrollPos();
    await super._render(force, options);
    this._setScrollPos();
  }
  /* -------------------------------------------- */

  // TODO: Add .savescroll class to all classes that need their position saved
  // Currently, many that are saved don't need to be.
  _saveScrollPos()
  {
    if (this.form === null)
      return;

    const html = $(this.form).parent();
    let lists = $(html.find(".inventory-list"));
    lists.push(html.find(".combat-section"));
    lists.push(html.find(".inventory")[1]);
    lists.push(html.find(".magic-section"));
    lists.push(html.find(".religion-section"));
    lists.push(html.find(".notes-section"));
    this.scrollPos = [];
    for (let list of lists)
    {
      this.scrollPos.push($(list).scrollTop());
    }
  }

  _setScrollPos()
  {
    const html = $(this.form).parent();
    let lists = $(html.find(".inventory-list"));
    lists.push(html.find(".combat-section"));
    lists.push(html.find(".inventory"));
    lists.push(html.find(".magic-section"));
    lists.push(html.find(".religion-section"));
    lists.push(html.find(".notes-section"));
    for (let listIndex in lists)
    {
      ($(lists[listIndex]).scrollTop(this.scrollPos[listIndex]));
    }
  }

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
    
    let hardyTrait = sheetData.actor.traits.find(t => t.name.toLowerCase().includes("hardy"))
    let hardyTalent = sheetData.actor.talents.find(t => t.name.toLowerCase().includes("hardy"))


    let tbMultiplier = (hardyTrait || 0)
    if (hardyTalent)
      tbMultiplier += hardyTalent.data.advances.value || 0

    let sb = sheetData.actor.data.characteristics.s.bonus;
    let tb = sheetData.actor.data.characteristics.t.bonus;
    let wpb =sheetData.actor.data.characteristics.wp.bonus;

    if (sheetData.actor.flags.autoCalcCritW)
      sheetData.actor.data.status.criticalWounds.max = tb;


   if (sheetData.actor.flags.autoCalcWounds)
    switch (sheetData.actor.data.details.size.value){
    
      case "tiny":
      sheetData.actor.data.status.wounds.max = 1 + tb * tbMultiplier;
      break;

      case "ltl":
      sheetData.actor.data.status.wounds.max = tb + tb * tbMultiplier;
      break;
    
      case "sml":
      sheetData.actor.data.status.wounds.max = 2 * tb + wpb + tb * tbMultiplier;
      break;

      case "avg":
      sheetData.actor.data.status.wounds.max = sb + 2 * tb + wpb + tb * tbMultiplier;
      break;

      case "lrg":
      sheetData.actor.data.status.wounds.max = 2 * (sb + 2 * tb + wpb + tb * tbMultiplier);
      break;

      case "enor":
      sheetData.actor.data.status.wounds.max = 4 * (sb + 2 * tb + wpb + tb * tbMultiplier);
      break;
      
      case "mnst":
      sheetData.actor.data.status.wounds.max = 8 * (sb + 2 * tb + wpb + tb * tbMultiplier);
      break;

    }


    if (sheetData.actor.flags.autoCalcRun)
    {
      if(sheetData.actor.traits.find(t => t.name.toLowerCase() == "stride"))
        sheetData.actor.data.details.move.run += sheetData.actor.data.details.move.walk;
    } 
    
    // Return data to the sheet
    return sheetData;
  }

  _prepareItems(actorData)
  {
      // These conta-* / rs are for the various different tabs
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
      const mutations = [];
      const diseases = [];
      let allPenalties = "";
  
      // Inventory object is for the inventory tab
      const inventory = {
        weapons: { label: "Weapons", items: [], toggle: true, toggleName: "Equipped", show : false, dataType : "weapon" },
        armor: { label: "Armour", items: [], toggle: true, toggleName: "Worn", show : false, dataType : "armour"},
        ammunition: { label: "Ammunition", items: [], quantified: true, show : false, dataType : "ammunition"},
        clothingAccessories: { label: "Clothing and Accessories", items: [], toggle: true, toggleName: "Worn", show : false, dataType : "trapping" },
        booksAndDocuments: {label: "Books and Documents", items: [], show : false, dataType : "trapping"},
        toolsAndKits: {label: "Tools and Kits", items: [], show : false, dataType : "trapping"},
        foodAndDrink: {label: "Food and Drink", items: [], show : false, dataType : "trapping"},
        drugsPoisonsHerbsDraughts: {label: "Drugs, Herbs, Poisons, Draughts", items: [], quantified: true, show : false, dataType : "trapping"},
        misc: {label: "Miscellaneous", items: [], show : false, dataType : "trapping"}
      };
      const ingredients =  {label: "Ingredients", items: [], quantified: true, show: false, dataType : "trapping"};
      const money = {coins: [], total: 0, show : true};
      const containers = {items: [], show : false};
      const inContainers = [];
  
      // Money and ingredients are not in inventory objecet because they need more customization
  
      // Iterate through items, allocating to containers
      let totalEnc = 0;
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
            if (i.data.worn.value)
            {
              i.encumbrance = i.encumbrance - 1;
              i.encumbrance = i.encumbrance < 0 ? 0 : i.encumbrance;
            }
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
          if (i.data.worn.value)
          {
            i.encumbrance = i.encumbrance - 1;
            i.encumbrance = i.encumbrance < 0 ? 0 : i.encumbrance;
          }
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
              if (i.data.worn)
              {
                i.encumbrance = i.encumbrance - 1;
                i.encumbrance = i.encumbrance < 0 ? 0 : i.encumbrance;
              }
            }
            else if (i.data.trappingType.value)
            {
              inventory[i.data.trappingType.value].items.push(i);
              inventory[i.data.trappingType.value].show = true;
            }
            else
            {
              inventory.misc.items.push(i);
              inventory.misc.show = true;
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

        else if (i.type === "disease")
        {
          i.data.incubation.roll = i.data.incubation.roll || i.data.incubation.value;
          i.data.duration.roll = i.data.duration.roll || i.data.duration.value;
          diseases.push(i);
        }

        else if (i.type === "mutation")
        {
          mutations.push(i);
          if (i.data.modifiesSkills.value)
            allPenalties += i.data.modifier.value;
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
            item.type = CONFIG.trappingCategories[item.data.trappingType.value];
          else
            item.type = CONFIG.trappingCategories[item.type];
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
          return prev += cur.data.penalty.value + " "
        }, "");
        let mutationPenalties = mutations.reduce(function (prev, cur) {
          if (cur.data.modifiesSkills.value)
            return prev += cur.data.modifier.value + " "
          else
            return prev;
        }, "");
        let otherPenalties = this.actor.data.data.status.penalties.value; 
        let allPenaltiesOverflow = {};
        if (armourPenalties)
          allPenaltiesOverflow["Armour"] = armourPenalties;

        if (injuryPenalties)
          allPenaltiesOverflow["Injury"] = injuryPenalties;

        if (mutationPenalties)
          allPenaltiesOverflow["Mutation"] = mutationPenalties;

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
      actorData.diseases = diseases;
      actorData.mutations = mutations;
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
        max: actorData.data.status.encumbrance.max,
        value: Math.round(totalEnc * 10) / 10,
      };
      enc.pct = Math.min(enc.value * 100 / enc.max, 100);
      enc.state = enc.value / enc.max;
      if (enc.state > 3)
      {
        enc["maxEncumbered"] = true
        enc.penalty = CONFIG.encumbrancePenalties["maxEncumbered"];
      }
      else if (enc.state > 2)
        {
          enc["veryEncumbered"] = true
          enc.penalty = CONFIG.encumbrancePenalties["veryEncumbered"];
        }
      else if (enc.state > 1)
      {
        enc["encumbered"] = true
        enc.penalty = CONFIG.encumbrancePenalties["encumbered"];
      }
      else
        enc["notEncumbered"] = true;
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

    html.find('.ap-value').mousedown(ev => {
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

    html.find('.sl-counter').mousedown(async ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      const spell = this.actor.items.find(i => i.id === itemId);
      switch (event.button)
      {
        case 0: 
        spell.data.cn.SL++;
        if (spell.data.cn.SL > spell.data.cn.value)
          spell.data.cn.SL = spell.data.cn.valeu;
          break;
        case 2:
        spell.data.cn.SL = 0;
        break;
      }
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

        else if (toggle == "wounds")
          newFlags.autoCalcWounds = !newFlags.autoCalcWounds;

        else if (toggle == "critW")
          newFlags.autoCalcCritW = !newFlags.autoCalcCritW;

        else if (toggle == "corruption")
          newFlags.autoCalcCorruption = !newFlags.autoCalcCorruption;

        else if (toggle == "encumbrance")
          newFlags.autoCalcEnc = !newFlags.autoCalcEnc;


        this.actor.update({'flags' : newFlags})

      }

    });

    html.find('.disease-roll').click(async ev =>  {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      const disease = this.actor.items.find(i => i.id === itemId);
      let type = ev.target.attributes.class.value.split(" ")[0].trim(); // Incubation or duration

      //let text = ev.target.text.split(' ').join('')
      try 
      {
        let rollValue = new Roll(disease.data[type].value.split(" ")[0]).roll().total    
        let timeUnit = disease.data[type].value.split(" ")[1];
        disease.data[type].roll = rollValue.toString() + " " + timeUnit;
      }
      catch
      {
        disease.data[type].roll = disease.data[type].value;
      }
    
      await this.actor.updateOwnedItem(disease);
    })


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
      id: itemId,
      root: Number(event.currentTarget.getAttribute("root"))
    }));
  }

  
  async _onDrop(event) {
      var dragData = event.dataTransfer.getData("text/plain");
      var dropID = Number($(event.target).parents(".item").attr("data-item-id"));
      if ($(event.target).parents(".item").attr("inventory-type") == "container"){
        var dragItem = this.actor.getOwnedItem(JSON.parse(dragData).id);
        if (dragItem.data.id == dropID)
          throw "";
        else if (dragItem.data.type == "container" && $(event.target).parents(".item").attr("last-container"))
           throw "Cannot add container past the 4th nested container"

        else if (dragItem.data.type == "container")
        {
          if (JSON.parse(dragData).root == $(event.target).parents(".item").attr("root"))
          {
            ui.notifications.error("Remove the container before changing its location");
            throw "Remove the container before changing its location";
          }
            
          
        }
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
        expandData = item.getExpandData({secrets: this.actor.owner});

    // Toggle summary


    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = "";
      div = $(`<div class="item-summary">${expandData.description.value}</div>`);

      let props = $(`<div class="item-properties"></div>`);
      expandData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
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
        property = property.replace(/,/g, '').trim();
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

    // Conditional for creating Trappings from the Trapping tab - sets to the correct trapping type
    if (event.currentTarget.attributes["data-type"].value == "trapping")
      data = mergeObject(data, {"data.trappingType.value" : event.currentTarget.attributes["item-section"].value})

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


    /**
   * Advance NPC based on given career
   * @private
   */
  async _advanceNPC(careerData) {
    let updateObj = {};
    let skillList = [];
    let advancesNeeded = careerData.level.value * 5;
    let pack = game.packs.find(p => p.collection == "wfrp4e.skills")
    await pack.getIndex().then(index => skillList = index);
    
    for (let advChar of careerData.characteristics)
    {
      if (this.actor.data.data.characteristics[advChar].advances < 5 * careerData.level.value)
        updateObj[`data.characteristics.${advChar}.advances`] = 5 * careerData.level.value;
    }
    for (let skill of careerData.skills)
    {
      let searchResult;
      // Search for specific skill (won't find unlisted specializations)
      searchResult = skillList.find(s => s.name == skill)

      try 
      {
        if (!searchResult)
          searchResult = skillList.find(s => s.name.split("(")[0].trim() == skill.split("(")[0].trim())

        let existingSkill = this.actor.data.items.find(i => i.name.trim() == skill && i.type == "skill")
        if (existingSkill)
        {
          existingSkill.data.advances.value = (existingSkill.data.advances.value < advancesNeeded) ? advancesNeeded : existingSkill.data.advances.value; 
          this.actor.updateOwnedItem(existingSkill);
        }
      
        else
        {
          let skillToAdd;             
          await pack.getEntity(searchResult.id).then(packSkill => skillToAdd = packSkill);
          skillToAdd.data.name = skill; // This is important if a specialized skill wasn't found. Without it, <Skill ()> would be added intsead of <Skill (Specialization)>
          skillToAdd.data.data.advances.value = advancesNeeded;
          this.actor.createOwnedItem(skillToAdd.data);
          console.log(skillToAdd);
        }
      }
      catch {
        console.log("Something went wrong when adding skill " + skill);
      }

    }

    /*for (let talent of careerData.talents)
    {
      // TODO Redo for talent compendium
      let talentList = game.items.entities.filter(i => i.type == "talent");
      let searchResult = talentList.find(t => t.name == talent);

        if (!searchResult)
          searchResult = talentList.find(t => t.name.split("(")[0].trim() == talent.split("(")[0].trim())          
        
        if (searchResult)
        {
          let talentToAdd = duplicate(searchResult);
          talentToAdd.data.name = talent;
          this.actor.createOwnedItem(talentToAdd.data);
        }


    }*/
    this.actor.update(updateObj);
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
        if (careerItem.data.data.complete.value)
          this._advanceNPC(careerItem.data.data)

        this.actor.updateOwnedItem({id : id, 'data' : careerItem.data.data});
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
    skill.data.characteristic.abrev = CONFIG.characteristicsAbbrev[skill.data.characteristic.value];

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
    weapon.data.damage.meleeValue = this._calculateRangeOrDamage(actorData, weapon.data.damage.meleeValue);
    weapon.data.damage.rangedValue = this._calculateRangeOrDamage(actorData, weapon.data.damage.rangedValue);

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

    weapon.data.damage.rangedValue += eval(ammoDamage);
    
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
        propertiesToAdd.push(property + " " + value);
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
      let die = `1d${(this[table].rows.length > 100 ? 100 : this[table].rows.length - 1)}`
      let roll = new Roll(`${die} + @modifier`, {modifier}).roll();
      let displayTotal = roll.total;
      if (roll.total <= 0 && minOne)
        roll.parts[0].rolls[0].roll = (-1) * modifier + 1
      else if (roll.total <= 0)
        return {roll : roll.total};
      if (roll.total > 100 && maxSize)
        roll.parts[0].rolls[0].roll = die - modifier;

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
      return mergeObject(this[table].rows[roll.total], ({roll : displayTotal}));
    }
    else
    {
      
    }
  }

  static generalizeTable (table)
  {
    table = table.toLowerCase();
    table = table.replace("lleg", "leg");
    table = table.replace("rleg", "leg");
    table = table.replace("rarm", "arm");
    table = table.replace("larm", "arm");
    return table;
  }
  
  // Wrapper for rollTable to format rolls from chat commands nicely
  static formatChatRoll (table, options = {})
  {
    table = this.generalizeTable(table);
    let result = this.rollTable(table, options);
    if (result.roll <= 0 && !options.minOne)
      return `Roll: ${result.roll} - canceled`
    switch (table)
    {  
      case "hitloc":
        return `<b>${this[table].name}</b><br>` + result.description;
      case "crithead":
      case "critbody":
      case "critarm":
      case "critleg":
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

      case "doom":
         return `<b>Oops!</b><br>${result.description} (${result.roll})`;

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
              html += result[part] + "<br>"
            return html +  ` (${result.roll})`;
          }
          else 
            throw ""
        }
        catch
        {
          return "<b><code>/table</code> Commands</b><br>"+
          "<code>hitloc</code> - Hit Location<br>"+
          "<code>crithead</code> - Head Critical Hits<br>"+
          "<code>critbody</code> - Body Critical Hits<br>"+
          "<code>critarm</code> - Arm Critical Hits<br>"+
          "<code>critleg</code> - Leg Critical Hits<br>"+
          "<code>oops</code> - Oops!<br>"+
          "<code>minormis</code> - Minor Miscast<br>"+
          "<code>majormis</code> - Major Miscast<br>"+
          "<code>wrath</code> - Wrath of the Gods<br>"+
          "<code>mutatephys</code> - Physical Mutation<br>"+
          "<code>mutatemental</code> - Mental Mutation<br>"+
          "<code>event</code> - Downtime Event<br>"+
          "<code>travel</code> - Downtime Event<br>"+
          "<code>scatter</code> - Scatter Direction<br>"+
          "<code>doom</code> - Dooming<br>"
        }
    }
  }
}


/* -------------------------------------------- */

