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
  "repeater": "Repater",
  "shield": "Shield",
  "trapblade": "Trap Blade",
  "unbreakable": "Unbreakable",
  "wrap": "Wrap"
};

// Weapon Flaws
CONFIG.weaponFlaws = {
  "dangerous": "Dangerous",
  "imprecise": "Imprecise",
  "reload": "reload",
  "slow": "Slow",
  "tiring": "Tiring",
  "undamaging": "Undamaging"
};


// Weapon Qualities
CONFIG.qualityDescriptions = {
  "accurate": "Accurate",
  "blackpowder": "Blackpowder",
  "blast": "Blast",
  "damaging": "A Damaging weapon can use the higher score from either the units die or the SL to determine the Damage caused from a successful hit. For example, if you roll 34 in your attack Test and the target number was 52 you can choose to use the SL, which in this case is 2, or the units die result, which is 4. An Undamaging weapon can never also be Damaging (Undamaging takes precedent).",
  "defensive": "Defensive",
  "entangle": "Entangle",
  "fast": "Fast",
  "hack": "Hacking weapons have heavy blades that can hack through armor with horrific ease. If you hit an opponent, you Damage a struck piece of armor or shield by 1 point as well as wounding the target.",
  "impact": "Impact",
  "impale": "Impale",
  "penetrating": "Penetrating",
  "pistol": "Pistol",
  "precise": "Precise",
  "pummel": "Pummel",
  "repeater": "Repater",
  "shield": "Shield",
  "trapblade": "Trap Blade",
  "unbreakable": "Unbreakable",
  "wrap": "Wrap"
};

// Weapon Flaws
CONFIG.flawDescriptions = {
  "dangerous": "Dangerous",
  "imprecise": "Imprecise",
  "reload": "reload",
  "slow": "Slow",
  "tiring": "Tiring",
  "undamaging": "Undamaging"
};

// Armor Qualities
CONFIG.armorQualities = {
  "flexible": "Flexible",
  "Impenetrable": "impenetrable",
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
    var roll = () => {
      let roll = DiceWFRP.rollTest(testData);
      DiceWFRP.renderRollCard(cardOptions, roll);
    }
    // Render modal dialog

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

    let rollResults={
      target: targetNum,
      roll: roll.total,
      SL: SL,
      description: description
    }
    if (testData.opposed)
      rollResults.opposed = true;
    
    return rollResults;
   } 

   static renderRollCard(chatOptions, chatData) {
    // Generate HTML from the requested chat template
    return renderTemplate(chatOptions.template, chatData).then(html => {
      
      // Emit the HTML as a chat message
      chatOptions["content"] = html;
      ChatMessage.create(chatOptions, false);
      return html;
    });
  }
  /* -------------------------------------------- */

  /**
   * A standardized helper function for managing core 5e "d20 rolls"
   *
   * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
   * This chooses the default options of a normal attack with no bonus, Critical, or no bonus respectively
   *
   * @param {Event} event           The triggering event which initiated the roll
   * @param {Array} parts           The dice roll component parts, excluding the initial d20
   * @param {Object} data           Actor or item data against which to parse the roll
   * @param {String} template       The HTML template used to render the roll dialog
   * @param {String} title          The dice roll UI window title
   * @param {String} alias          The alias with which to post to chat
   * @param {Function} flavor       A callable function for determining the chat message flavor given parts and data
   * @param {Boolean} critical      Allow critical hits to be chosen
   * @param {Function} onClose      Callback for actions to take when the dialog form is closed
   * @param {Object} dialogOptions  Modal dialog options
   */
  static damageRoll({event={}, parts, data, template, title, alias, flavor, critical=true, onClose, dialogOptions}) {

    // Inner roll function
    let rollMode = game.settings.get("core", "rollMode");

    // Modify the roll and handle fast-forwarding
    let crit = 0;
    if ( event.shiftKey || event.ctrlKey || event.metaKey )  return roll();
    else if ( event.altKey ) {
      crit = 1;
      return roll();
    }
    else parts = parts.concat(["@bonus"]);

    // Construct dialog data
    template = template || "public/systems/wfrp4e/templates/chat/roll-dialog.html";
    let dialogData = {
      formula: parts.join(" + "),
      data: data,
      rollMode: rollMode,
      rollModes: CONFIG.rollModes
    };

    // Render modal dialog
    return new Promise(resolve => {
      renderTemplate(template, dialogData).then(dlg => {
        new Dialog({
          title: title,
          content: dlg,
          buttons: {
            critical: {
              condition: critical,
              label: "Critical Hit",
              callback: () => crit = 1
            },
            normal: {
              label: critical ? "Normal" : "Roll",
            },
          },
          default: "normal",
          close: html => {
            rollMode = html.find('[name="rollMode"]').val();
            data['bonus'] = html.find('[name="bonus"]').val();
            resolve(roll());
          }
        }, dialogOptions).render(true);
      });
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

  /**
   * Register diagonal movement rule setting
   */
  game.settings.register("wfrp4e", "diagonalMovement", {
    name: "Diagonal Movement Rule",
    hint: "Configure which diagonal movement rule should be used for games within this system.",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      "555": "Player's Handbook (5/5/5)",
      "5105": "Dungeon Master's Guide (5/10/5)"
    },
    onChange: rule => canvas.grid.diagonalRule = rule
  });

  /**
   * Register Initiative formula setting
   */
  function _set5eInitiative(tiebreaker) {
    const base = "1d100"

      CONFIG.initiative = {
        formula: base,
        decimals: 0
    }
  }
  game.settings.register("wfrp4e", "initiativeDexTiebreaker", {
    name: "Initiative Dexterity Tiebreaker",
    hint: "Append the raw Dexterity ability score to break ties in Initiative.",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: enable => _set5eInitiative(enable)
  });
  _set5eInitiative(game.settings.get("wfrp4e", "initiativeDexTiebreaker"));

  /**
   * Require Currency Carrying Weight
   */
  game.settings.register("wfrp4e", "currencyWeight", {
    name: "Apply Currency Weight",
    hint: "Carried currency affects character encumbrance following the rules on PHB pg. 143.",
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
    "public/systems/wfrp4e/templates/items/item-header.html",
    "public/systems/wfrp4e/templates/items/item-description.html",
  ]);
});




/**
 * Activate certain behaviors on Canvas Initialization hook
 */
Hooks.on("canvasInit", () => {

  // Apply the current setting
  canvas.grid.diagonalRule = game.settings.get("wfrp4e", "diagonalMovement");

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
    }

    super.create(data, options);
    
  }
  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData(actorData) {
    actorData = super.prepareData(actorData);
    const data = actorData.data;

    // Prepare Character data
    if ( actorData.type === "character" ) this._prepareCharacterData(data);
    else if ( actorData.type === "npc" ) this._prepareNPCData(data);

    data.details.move.walk = parseInt(data.details.move.value)* 2;
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
    for (let ch of Object.values(data.characteristics))
    {
      ch.value = ch.initial + ch.advances;
      ch.bonus = Math.floor(ch.value / 10)
    }

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
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param skill {String}    The skill id
   */
  rollSkill(skill, event) {
    let char = this.data.data.characteristics[skill.data.characteristic.value];
    let title = skill.name + " Test";
    let testData = {
      target : char.value + skill.data.advances.value,
      testDifficulty : "challenging",
      testModifier : 0,
      slBonus : 0,
      successBonus : 0,
      hitLocation : true
    };
    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/skill-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        testDifficulty : "challenging",
        difficultyLabels : CONFIG.difficultyLabels,
        testModifier : 0,
        slBonus : 0,
        successBonus : 0,
        hitLocation : true,
        opposed : true,
        talents : this.data.talentTests,
        characteristicList : CONFIG.characteristics,
        characteristicToUse : skill.data.characteristic.value 
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.characteristicToUse = html.find('[name="characteristicToUse"]').val();
        testData.target = this.data.data.characteristics[testData.characteristicToUse].value
                             + testData.testModifier 
                             + testData.testDifficulty
                             + skill.data.advances.value;
        testData.hitLocation = html.find('[name="hitLocation"]').val() === "true";
        testData.opposed = html.find('[name="opposed"]').val() === "true";
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        }
    };
    let cardOptions = {
      user : game.user._id,
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      rollMode : undefined,
      title: title,
      template : "public/systems/wfrp4e/templates/chat/skill-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

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
      testDifficulty : "challenging",
      testModifier : 0,
      slBonus : 0,
      successBonus : 0,
      hitLocation : true
    };
    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/characteristic-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        }
      },
      data : {
        testDifficulty : "challenging",
        difficultyLabels : CONFIG.difficultyLabels,
        testModifier : 0,
        slBonus : 0,
        successBonus : 0,
        hitLocation : true,
        opposed : true,
        talents : this.data.talentTests,
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        testData.target = testData.target + testData.testModifier + testData.testDifficulty; 
        testData.hitLocation = html.find('[name="hitLocation"]').val() === "true";
        testData.opposed = html.find('[name="opposed"]').val() === "true";
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)
        roll();
        }
    };
    let cardOptions = {
      user : game.user._id,
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
      },
      rollMode : undefined,
      title: title,
      template : "public/systems/wfrp4e/templates/chat/characteristic-card.html"
    }
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /* -------------------------------------------- */

  /**
   * Roll an Ability Test
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   */
  rollAbilityTest(abilityId, options={}) {
    let abl = this.data.data.characteristics[abilityId],
        parts = ["@mod"],
        flavor = `${abl.label} Ability Test`;

    // Call the roll helper utility
    DiceWFRP.d20Roll({
      event: options.event,
      parts: parts,
      data: {mod: abl.mod},
      title: flavor,
      alias: this.name
    });
  }

  /* -------------------------------------------- */

  /**
   * Roll an Ability Saving Throw
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   */
  rollAbilitySave(abilityId, options={}) {
  /*  let abl = this.data.data.abilities[abilityId],
        parts = ["@mod"],
        flavor = `${abl.label} Saving Throw`;

    // Call the roll helper utility
    DiceWFRP.d20Roll({
      event: options.event,
      parts: parts,
      data: {mod: abl.save},
      title: flavor,
      alias: this.name
    });*/
  }

  /* -------------------------------------------- */

  /**
   * Apply rolled dice damage to the token or tokens which are currently controlled.
   * This allows for damage to be scaled by a multiplier to account for healing, critical hits, or resistance
   *
   * @param {HTMLElement} roll    The chat entry which contains the roll data
   * @param {Number} multiplier   A damage multiplier to apply to the rolled damage.
   */
  static applyDamage(roll, multiplier) {
    /*let value = Math.floor(parseFloat(roll.find('.dice-total').text()) * multiplier);

    // Filter tokens to which damage can be applied
    canvas.tokens.controlledTokens.filter(t => {
      if ( t.actor && t.data.actorLink ) return true;
      else if ( t.data.bar1.attribute === "attributes.hp" || t.data.bar2.attribute === "attributes.hp" ) return true;
      return false;
    }).forEach(t => {

      // For linked Tokens, update the Actor first deducting from the temporary hit point pool
      if ( t.actor && t.data.actorLink ) {
        let hp = t.actor.data.data.attributes.hp,
            tmp = parseInt(hp["temp"]),
            dt = value > 0 ? Math.min(tmp, value) : 0;
        t.actor.update({
          "data.attributes.hp.temp": tmp - dt,
          "data.attributes.hp.value": Math.clamped(hp.value - (value - dt), 0, hp.max)
        });
      }

      // For unlinked Tokens, just update the resource bar directly
      else {
        let bar = (t.data.bar1.attribute === "attributes.hp") ? "bar1" : "bar2";
        t.update(canvas.id, {[`${bar}.value`]: Math.clamped(t.data[bar].value - value, 0, t.data[bar].max)});
      }
    });*/
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

  _careerChatData() {
    const data = duplicate(this.data.data);
    data.properties=[];
    data.properties.push(this.data.data.class.value);
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
    let preparedSpell = this.actor.apps[0]._prepareSpellOrPrayer(this.actor.data, this.data);
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
    let preparedPrayer = this.actor.apps[0]._prepareSpellOrPrayer(this.actor.data, this.data);
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
    for (let prop of this.actor.apps[0]._prepareQualitiesFlaws(this.data))
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
     for (let prop of this.actor.apps[0]._prepareQualitiesFlaws(this.data))
       properties.push(prop);
     properties.push(data.penalty.value);
 
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



  /* -------------------------------------------- */
  /*  Roll Attacks
  /* -------------------------------------------- */

  /**
   * Roll a Weapon Attack
   * Rely upon the DiceWFRP.d20Roll logic for the core implementation
   */
  rollWeaponAttack(event) {
   /* if ( this.type !== "weapon" ) throw "Wrong item type!";

    // Prepare roll data
    let itemData = this.data.data,
        rollData = duplicate(this.actor.data.data),
        abl = itemData.ability.value || "str",
        parts = ["@item.bonus.value", `@abilities.${abl}.mod`, "@attributes.prof.value"],
        title = `${this.name} - Attack Roll`;
    rollData.item = itemData;
    if ( !itemData.proficient.value ) parts.pop();

    // Call the roll helper utility
    DiceWFRP.d20Roll({
      event: event,
      parts: parts,
      data: rollData,
      title: title,
      alias: this.actor.name,
      dialogOptions: {
        width: 400,
        top: event.clientY - 80,
        left: window.innerWidth - 710
      }
    });*/
  }

  /* -------------------------------------------- */

  /**
   * Roll Weapon Damage
   * Rely upon the DiceWFRP.damageRoll logic for the core implementation
   */
  rollWeaponDamage(event, alternate=false) {
   /* if ( this.type !== "weapon" ) throw "Wrong item type!";

    // Get data
    let itemData = this.data.data,
        rollData = duplicate(this.actor.data.data),
        abl = itemData.ability.value || "str",
        parts = [alternate ? itemData.damage2.value : itemData.damage.value, `@abilities.${abl}.mod`],
        dtype = CONFIG.damageTypes[alternate ? itemData.damage2Type.value : itemData.damageType.value];

    // Append damage type to title
    let title = `${this.name} - Damage`;
    if ( dtype ) title += ` (${dtype})`;

    // Call the roll helper utility
    rollData.item = itemData;
    DiceWFRP.damageRoll({
      event: event,
      parts: parts,
      data: rollData,
      title: title,
      alias: this.actor.name,
      dialogOptions: {
        width: 400,
        top: event.clientY - 80,
        left: window.innerWidth - 710
      }
    });*/
  }

  /* -------------------------------------------- */

  /**
   * Roll Spell Damage
   * Rely upon the DiceWFRP.d20Roll logic for the core implementation
   */
  rollSpellAttack(event) {
/*    if ( this.type !== "spell" ) throw "Wrong item type!";

    // Prepare roll data
    let itemData = this.data.data,
        rollData = duplicate(this.actor.data.data),
        abl = itemData.ability.value || rollData.attributes.spellcasting.value || "int",
        parts = [`@abilities.${abl}.mod`, "@attributes.prof.value"],
        title = `${this.name} - Spell Attack Roll`;

    // Call the roll helper utility
    DiceWFRP.d20Roll({
      event: event,
      parts: parts,
      data: rollData,
      title: title,
      alias: this.actor.name,
      dialogOptions: {
        width: 400,
        top: event.clientY - 80,
        left: window.innerWidth - 710
      }
    });*/
  }

  /* -------------------------------------------- */

  /**
   * Roll Spell Damage
   * Rely upon the DiceWFRP.damageRoll logic for the core implementation
   */
  rollSpellDamage(event) {
/*    if ( this.type !== "spell" ) throw "Wrong item type!";

    // Get data
    let itemData = this.data.data,
        rollData = duplicate(this.actor.data.data),
        abl = itemData.ability.value || rollData.attributes.spellcasting.value || "int",
        parts = [itemData.damage.value],
        isHeal = itemData.spellType.value === "heal",
        dtype = CONFIG.damageTypes[itemData.damageType.value];

    // Append damage type to title
    let title = this.name + (isHeal ? " - Healing" : " - Damage");
    if ( dtype && !isHeal ) title += ` (${dtype})`;

    // Add item to roll data
    rollData["mod"] = rollData.abilities[abl].mod;
    rollData.item = itemData;

    // Call the roll helper utility
    DiceWFRP.damageRoll({
      event: event,
      parts: parts,
      data: rollData,
      title: title,
      alias: this.actor.name,
      dialogOptions: {
        width: 400,
        top: event.clientY - 80,
        left: window.innerWidth - 710
      }
    });*/
  }

  /* -------------------------------------------- */

  /**
   * Use a consumable item
   */
  rollConsumable(ev) {
  /*  let itemData = this.data.data;

    // Submit the roll to chat
    let cv = itemData['consume'].value,
        content = `Uses ${this.name}`;
    if ( cv ) {
      new Roll(cv).toMessage({
        alias: this.actor.name,
        flavor: content
      });
    } else {
      ChatMessage.create({user: game.user._id, alias: this.actor.name, content: content})
    }

    // Deduct consumed charges from the item
    if ( itemData['autoUse'].value ) {
      let qty = itemData['quantity'],
          chg = itemData['charges'];

      // Deduct an item quantity
      if ( chg.value <= 1 && qty.value > 1 ) {
        this.actor.updateOwnedItem({
          id: this.data.id,
          'data.quantity.value': Math.max(qty.value - 1, 0),
          'data.charges.value': chg.max
        }, true);
      }

      // Optionally destroy the item
      else if ( chg.value <= 1 && qty.value <= 1 && itemData['autoDestroy'].value ) {
        this.actor.deleteOwnedItem(this.data.id);
      }

      // Deduct the remaining charges
      else {
        this.actor.updateOwnedItem({id: this.data.id, 'data.charges.value': Math.max(chg.value - 1, 0)}, true);
      }
    }*/
  }

  /* -------------------------------------------- */

  /**
   * Roll a Tool Check
   * Rely upon the DiceWFRP.d20Roll logic for the core implementation
   */
  rollToolCheck(event) {
    /*if ( this.type !== "tool" ) throw "Wrong item type!";

    // Prepare roll data
    let rollData = duplicate(this.actor.data.data),
      abl = this.data.data.ability.value || "int",
      ability = rollData.abilities[abl],
      parts = [`@abilities.${abl}.mod`, "@proficiency"],
      title = `${this.name} - Tool Check`;
    rollData["ability"] = abl;
    rollData["proficiency"] = (this.data.data.proficient.value || 0) * rollData.attributes.prof.value;

    // Call the roll helper utility
    DiceWFRP.d20Roll({
      event: event,
      parts: parts,
      data: rollData,
      template: "public/systems/wfrp4e/templates/chat/tool-roll-dialog.html",
      title: title,
      alias: this.actor.name
      flavor: (parts, data) => `${this.name} - ${data.abilities[data.ability].label} Check`,
      dialogOptions: {
        width: 400,
        top: event.clientY - 80,
        left: window.innerWidth - 710,
      },
      onClose: (html, parts, data) => {
        abl = html.find('[name="ability"]').val();
        data.ability = abl;
        parts[1] = `@abilities.${abl}.mod`;
      }
    }).then(roll => {
      roll.toMessage({
        alias: alias,
        flavor: flavor,
        highlightSuccess: roll.parts[0].total === 20,
        highlightFailure: roll.parts[0].total === 1
      });
    });*/
  }

  /* -------------------------------------------- */

  /*static chatListeners(html) {

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
          actor = game.actors.get(card.attr('data-actor-id')),
          itemId = Number(card.attr("data-item-id"));

      // Get the item
      if ( !actor ) return;
      let itemData = actor.items.find(i => i.id === itemId);
      if ( !itemData ) return;
      let item = new Item5e(itemData, actor);

      // Weapon attack
      if ( action === "weaponAttack" ) item.rollWeaponAttack(ev);
      else if ( action === "weaponDamage" ) item.rollWeaponDamage(ev);
      else if ( action === "weaponDamage2" ) item.rollWeaponDamage(ev, true);

      // Spell actions
      else if ( action === "spellAttack" ) item.rollSpellAttack(ev);
      else if ( action === "spellDamage" ) item.rollSpellDamage(ev);

      // Feat actions
      else if ( action === "featAttack" ) item.rollFeatAttack(ev);
      else if ( action === "featDamage" ) item.rollFeatDamage(ev);

      // Consumable usage
      else if ( action === "consume" ) item.rollConsumable(ev);

      // Tool usage
      else if ( action === "toolCheck" ) item.rollToolCheck(ev);
    });
  }*/
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
      data['magicLores'] = CONFIG.magicLores;
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
    }

    else if (this.item.type == "trapping")
    {
      data['trappingTypes'] = CONFIG.trappingTypes;
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


    let isSmall = sheetData.actor.talents.find(x=>x.name == "Small");
    if (isSmall)
      sheetData.actor.data.details.size.value="sml";


    let sb = sheetData.actor.data.characteristics.s.bonus;
    let tb = sheetData.actor.data.characteristics.t.bonus;
    let wpb =sheetData.actor.data.characteristics.wp.bonus;

    sheetData.actor.data.status.criticalWounds.max = tb;


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

  /* -------------------------------------------- */

  _prepareTraits(traits) {
  }

  _prepareSpellOrPrayer(actorData, item) {
    
    item['target'] = this._calculateSpellRangeOrDuration(actorData, item.data.target.value, item.data.target.aoe);
    item['duration'] = this._calculateSpellRangeOrDuration(actorData, item.data.duration.value);
    item['range'] = this._calculateSpellRangeOrDuration(actorData, item.data.range.value);
    
    if (item.type == "spell" && !item.data.memorized.value )
    item.data.cn.value *= 2;
    
    return item;
  }

  _prepareSkill(actorData, basicSkills, advOrGrpSkills, skill) {

    skill.data.characteristic.num = actorData.data.characteristics[skill.data.characteristic.value].value;
    skill.data.total.value = actorData.data.characteristics[skill.data.characteristic.value].value + skill.data.advances.value;
    skill.data.characteristic.value = CONFIG.characteristicsAbrev[skill.data.characteristic.value];

    if (skill.data.grouped.value == "isSpec" || skill.data.advanced.value == "adv")
      advOrGrpSkills.push(skill)
    else
      basicSkills.push(skill);
   }

  _prepareTalent(actorData, talentList, talent) {
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
    html.find('.item-name').click(event => this._onItemSummary(event));
    
    html.find('.item-property').click(event => this._expandProperty(event));

    html.find('.weapon-range').click(event => this._expandInfo(event, 'weapon-range'));

    html.find('.weapon-group').click(event => this._expandInfo(event, 'weapon-group'));


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
      ing.data.spellIngredient.value = event.target.value;
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

    /* -------------------------------------------- */
    /*  Inventory
    /* -------------------------------------------- */

    // Create New Item
    html.find('.item-create').click(ev => this._onItemCreate(ev));

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let Item = CONFIG.Item.entityClass;
      const item = new Item(this.actor.items.find(i => i.id === itemId), this.actor);
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      let li = $(ev.currentTarget).parents(".item"),
        itemId = Number(li.attr("data-item-id"));
      this.actor.deleteOwnedItem(itemId, true);
      li.slideUp(200, () => this.render(false));
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


    // Toggle Spell prepared value
    html.find('.item-prepare').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id")),
          item = this.actor.items.find(i => { return i.id === itemId });
      item.data['prepared'].value = !item.data['prepared'].value;
      this.actor.updateOwnedItem(item, true);
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
    try{
      var dragData = event.dataTransfer.getData("text/plain");
      var dropID = Number(event.target.attributes["data-item-id"].value);
      if (event.target.attributes["inventory-type"].value == "container"){
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
    }
    catch{
      super._onDrop(event)
    }
  }
  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onItemRoll(event) {/*
    event.preventDefault();
    let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id")),
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

    let combatSummary = $(event.currentTarget).parents(".combat-section").length > 0;

    if ( li.hasClass("expanded") ) {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    } else {
      let div = "";
      if (!combatSummary) // If in combat tab, don't show item description
        div = $(`<div class="item-summary">${chatData.description.value}</div>`);
      else
        div = $(`<div class="item-summary"></div>`);

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
        properties = Object.assign(CONFIG.weaponQualities, CONFIG.weaponFlaws),
        propertyDescr = Object.assign(CONFIG.qualityDescriptions, CONFIG.flawDescriptions);

        let propertyKey = "";
        if (property != "Special")
        {
          for (let prop in properties)
          {
            if (properties[prop] == property)
              propertyKey = prop;
          }
        }
        else{
          let item = this.actor.getOwnedItem(Number(li.attr("data-item-id")));
          propertyDescr = Object.assign(propertyDescr, {"Special" : item.data.data.special.value});
          propertyKey = "Special";
        }

        let propertyDescription = "<b>" + property + "</b>" + ": " + propertyDescr[propertyKey];
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

  _expandInfo(event, expandInfo) {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item");
    let  expansionText = "";
      if (expandInfo == "weapon-range")
      {
        range = parseInt(event.target.text);
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

    /*// Temporary HP
    let hp = sheetData.data.attributes.hp;
    if (hp.temp === 0) delete hp.temp;
    if (hp.tempmax === 0) delete hp.tempmax;

    // Resources
    let res = sheetData.data.resources;
    if (res.primary && res.primary.value === 0) delete res.primary.value;
    if (res.primary && res.primary.max === 0) delete res.primary.max;
    if (res.secondary && res.secondary.value === 0) delete res.secondary.value;
    if (res.secondary && res.secondary.max === 0) delete res.secondary.max;

    // Return data for rendering*/
    return sheetData;
  }

  /* -------------------------------------------- */

  /**
   * Organize and classify Items for Character sheets
   * @private
   */
  _prepareItems(actorData) {
  
    // These containers are for the various different tabs
    const careers = [];
    const basicSkills = [];
    const advancedOrGroupedSkills = [];
    const talents = [];
    const traits = {list : [], hasTraits : false};
    const weapons = [];
    const armour = [];
    const AP = {
      head: 0,
      body: 0,
      rArm: 0,
      lArm: 0,
      rLeg: 0,
      lLeg: 0
    };
    const injuries = [];
    const grimoire = [];
    const petty = [];
    const blessings = [];
    const miracles = [];
    const psychology = [];

    // Inventory object is for the inventory tab
    const inventory = {
      weapons: { label: "Weapons", items: [], toggle: true, toggleName: "Equipped", show : false },
      armor: { label: "Armour", items: [], toggle: true, toggleName: "Worn", show : false},
      ammunition: { label: "Ammunition", items: [], quantified: true, show : false},
      clothingAccessories: { label: "Clothing/Accessories", items: [], toggle: true, toggleName: "Worn", show : false },
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
    for ( let i of actorData.items ) {
      i.img = i.img || DEFAULT_TOKEN;
      if (i.type === "talent")
      {
        this._prepareTalent(actorData, talents, i);
      }

      else if ( i.type === "skill" )
      {
        this._prepareSkill(actorData, basicSkills, advancedOrGroupedSkills, i);
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
          this._prepareWeaponCombat(actorData, i, weapons);
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
          this._prepareArmorCombat(actorData, i, armour, AP)
      }

      else if (i.type == "injury")
      {
        injuries.push(i);
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
        if (i.data.lore.value == "petty")
          petty.push(this._prepareSpellOrPrayer(actorData, i));
        else
          grimoire.push(this._prepareSpellOrPrayer(actorData, i));
      }

      else if (i.type === "prayer")
      {
        if (i.data.type.value == "blessing")
          blessings.push(this._prepareSpellOrPrayer(actorData, i));
        else
          miracles.push(this._prepareSpellOrPrayer(actorData, i));
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
        traits.list.push(i);
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
         s.data.ingredients = ingredients.items.filter(i => i.data.spellIngredient.value == s.id)
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
    
    if (traits.list.length > 0)
      traits.hasTraits = true;

    // talentTests is used to easily reference talent bonuses (e.g. in prepareTest function)
    // instead of iterating through every item again to find talents when rolling
    this.actor.talentTests = [];
    for (let talent of talents)
      if (talent.data.tests.value)
        this.actor.talentTests.push({test : talent.data.tests.value, SL : talent.data.advances.value});

    actorData.inventory = inventory;
    actorData.containers = containers;
    actorData.basicSkills = basicSkills;
    actorData.advancedOrGroupedSkills = advancedOrGroupedSkills;
    actorData.talents = talents;
    actorData.traits = traits;
    actorData.weapons = weapons;
    actorData.armour = armour;
    actorData.armorPenalties = this._calculateArmorPenalties(actorData, armour);
    actorData.AP = AP;
    actorData.injuries = injuries;
    actorData.grimoire = grimoire;
    actorData.petty = petty;
    actorData.careers = careers;
    actorData.blessings = blessings;
    actorData.miracles = miracles;
    actorData.money = money;
    actorData.psychology = psychology;



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


  // Prepare a weapon to be displayed in the combat tab (assign ammo, calculate range, organize qualities/flaws)
  _prepareWeaponCombat(actorData, weapon, weaponList){
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
    weapon.properties = weapon.properties.filter(function(item) {return item != ""});
    weaponList.push(weapon);
  }

  // Prepare a weapon to be displayed in the combat tab (calculate APs, organize qualities/flaws)
  _prepareArmorCombat(actorData, armor, armorList, AP){ // -1 means currentAP is maxAP
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
    // armor.properties = armor.properties.filter(function(item) {return item != ""});  
    armorList.push(armor);
  }

  _prepareQualitiesFlaws(item){
    let qualities = item.data.qualities.value.split(",").map(function(item) {
      return item.trim();
    });
    let flaws = item.data.flaws.value.split(",").map(function(item) {
      return item.trim();
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
      return qualities.concat(flaws).sort();
    else
      return qualities.concat(flaws).sort().concat("Special");
    

  }

  _calculateArmorPenalties(actorData, armorList){
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



  
  _calculateRangeOrDamage(actorData, formula){    
    formula = formula.toLowerCase();

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

  _prepareWeaponWithAmmo(actorData, weapon){    
    let ammo = weapon.ammo.find(a => a.id == weapon.data.currentAmmo.value);
    if (!ammo)
      return;

    let ammoProperties = this._prepareQualitiesFlaws(ammo);
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
    
    let propertyIncrease = ammoProperties.filter(p => p.includes("+"));
    let propertyDecrease = ammoProperties.filter(p => p.includes("-"));

    let propertiesToAdd = ammoProperties.filter(p => !(p.includes("+") || p.includes("-")));

    for (let inc in propertyIncrease)
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
    for (let inc in propertyDecrease)
    {
      let index = inc.indexOf("-");
      let property = inc.substring(0, index).trim();
      let value = inc.substring(index, property.length);
      if (weapon.properties.includes(property))
      {
        //TODO
        // This section is for ammo that decreases a quality
        // e.g. Blast +1 Turns a weapon with Blast 4 into Blast 3
      }
      else
      {
        weapon.properties.push(property + " " + value);
      }
    }

    weapon.properties = weapon.properties.concat(propertiesToAdd);
  }

    
  _calculateSpellRangeOrDuration(actorData, formula, aoe=false){    
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


  _getHeaderButtons() {
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
  }


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
    if ( this.actor.limited ) return path + "limited-sheet.html";
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
    // Actions
   // const features = {
      //weapons: {label: "Weapons", items: [], type: "weapon" },
     // actions: { label: "Actions", items: [], type: "feat" },
     // passive: { label: "Features", items: [], type: "feat" },
   //   equipment: { label: "Equipment", items: [], type: "equipment" }
   //};
/*
    // Spellbook
    const spellbook = {};

    // Iterate through items, allocating to containers
    for ( let i of actorData.items ) {
      i.img = i.img || DEFAULT_TOKEN;

      // Spells
      if ( i.type === "spell" ) this._prepareSpell(actorData, spellbook, i);

      // Features
      else if ( i.type === "weapon" ) features.weapons.items.push(i);
      else if ( i.type === "feat" ) {
        if ( i.data.featType.value === "passive" ) features.passive.items.push(i);
        else features.actions.items.push(i);
      }
      else if (["equipment", "consumable", "tool", "backpack"].includes(i.type)) features.equipment.items.push(i);
    }

    // Assign and return
    actorData.features = features;
    actorData.spellbook = spellbook;*/
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
Actors.registerSheet("wfrp4e", ActorSheetWfrp4eNPC, {
  types: ["npc"],
  makeDefault: true
});





/* -------------------------------------------- */

