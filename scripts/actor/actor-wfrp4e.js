/**
 * Extend the base Actor class to implement additional logic specialized for D&D5e.
 */
class ActorWfrp4e extends Actor {

  // Give new actor all Basic skills
  static async create(data, options) {
    if (data.items) // If the created actor has items (only applicable to duplicated actors) bypass the new actor creation logic
    {
      super.create(data, options);
      return
    }

    if (data.type == "character")
    {
      let id = 1;
      const pack = game.packs.find(p => p.collection == "wfrp4e.skills")
      let skills = [];
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

      const trappings = game.packs.find(p => p.collection == "wfrp4e.trappings")
      let trappingsIndex = [];
      await trappings.getIndex().then(index => trappingsIndex = index);

      let money = trappingsIndex.filter (t => t.name.toLowerCase() == "gold crown" || t.name.toLowerCase() == "silver shilling" || t.name.toLowerCase() == "brass penny")

      for (let m of money)
      {
        let moneyItem = await trappings.getEntity(m.id);
        moneyItem.data.id = id;
        id++;
        moneyItem.data.data.quantity.value = 0;
        data.items.push(moneyItem.data);
      }
      super.create(data, options);

    }

    else if (data.type == "npc" || data.type == "creature")
    {
      new Dialog({
        title: "Add Basic Skills",
        content: '<p>Add Basic Skills?</p>',
        buttons: {
          yes: {
            label: "Yes",
            callback: async dlg => {
              let id = 1;
              const pack = game.packs.find(p => p.collection == "wfrp4e.skills")
              let skills = [];
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
                autoCalcCorruption :  true,
                autoCalcEnc :  true
              }
              const trappings = game.packs.find(p => p.collection == "wfrp4e.trappings")
              let trappingsIndex = [];
              await trappings.getIndex().then(index => trappingsIndex = index);

              let money = trappingsIndex.filter (t => t.name.toLowerCase() == "gold crown" || t.name.toLowerCase() == "silver shilling" || t.name.toLowerCase() == "brass penny")

              for (let m of money)
              {
                let moneyItem = await trappings.getEntity(m.id);
                moneyItem.data.id = id;
                id++;
                moneyItem.data.data.quantity.value = 0;
                data.items.push(moneyItem.data);
              }
              super.create(data, options);
            }
          },
          no: {
            label: "No",
            callback: async dlg => {
              data.flags =
              {
                autoCalcRun :  true,
                autoCalcWalk :  true,
                autoCalcWounds :  true,
                autoCalcCritW :  true,
                autoCalcCorruption :  true,
                autoCalcEnc :  true
              }
              super.create(data, options);
            }
          },
        },
        default: 'yes'
      }).render(true);
    }
    else
    {
      data.flags =
      {
        autoCalcRun :  true,
        autoCalcWalk :  true,
        autoCalcWounds :  true,
        autoCalcCritW :  true,
        autoCalcCorruption :  true,
        autoCalcEnc :  true
      }
      super.create(data, options);
    }
  }
  // Calculate dynamic data like Characteristic totals and movemen values
  prepareData(actorData) {
    try {
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
    {
     actorData.data.status.encumbrance.max = data.characteristics.t.bonus + data.characteristics.s.bonus;
    }

    if (game.settings.get("wfrp4e", "capAdvantageIB"))
      actorData.data.status.advantage.max = data.characteristics.i.bonus
    else
      actorData.data.status.advantage.max = 10;


    return actorData;
    }
    catch(error)
    {
      console.error("Something went wrong with preparing actor data: " + error)
      ui.notifications.error("Something went wrong with preparing actor data: " + error)
      if (error.includes("max"))
        this.actor.update({"data.encumbrance" : {max: 0, current: 0, type: "Number", label : "Encumbrance"}}) // Adds compatibility with alpha - TODO: Remove

    }

  }


  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(data) {

    data.details.experience.current = data.details.experience.total - data.details.experience.spent;

  }


  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData(data) {

  }

  /* --------------------------------------------------------------------------------------------------------- */
  /* Rolls
  /*
  /* All "setup______" functions gather the data needed to roll a certain test. These are in 3 main objects.
  /* These 3 objects are then given to DiceWFRP.prepareTest(), see that function for its usage.
  /*
  /* The 3 Main objects:
  /* testData - Data associated with modifications to rolling the test itself, or results of the test.
  /*            Examples of this are whether hit locations are found, Weapon qualities that may cause
                criticals/fumbles more often or ingredients for spells that cancel miscasts.
     dialogOptions - Data for rendering the dialog that's important for a specific test type.
                     Example: when casting or channelling, there should be an option for Malignant
                     Influences, but only for those tests.
     cardOptions - Which card to use, the title of the card, the name of the actor, etc.
  /* --------------------------------------------------------------------------------------------------------- */


  /**
   * Setup a characteristic test.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String} characteristicId     The characteristic id (e.g. "ws")
   */
  setupCharacteristic(characteristicId) {
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
      // class: "red",
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        advantage : this.data.data.status.advantage.value || 0
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
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions
    });
  }

  /* -------------------------------------------- */

  /* Setup a Skill Test
  * @param skill {object}  The Skill Object owned by a character
  */
 setupSkill(skill, income = false) {
   let char = this.data.data.characteristics[skill.data.characteristic.value];
   let title = skill.name + " Test";
   let testData = {
     target : char.value + skill.data.advances.value,
     hitLocation : false,
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
       characteristicToUse : skill.data.characteristic.value,
       advantage : this.data.data.status.advantage.value || 0,
       testDifficulty : income ? "average" : "challenging" // Default to average if using income 
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
       roll(income);
       }
   };

   if (income)
   {
     dialogOptions.rollOverride = (income) => {
       let roll = DiceWFRP.rollTest(testData);

       let dieAmount = CONFIG.earningValues[income.tier][0]
       dieAmount = Number(dieAmount) * income.standing;
       let moneyEarned;
       if (income.tier != "g")
       {
         dieAmount = dieAmount + "d10";
         moneyEarned = new Roll(dieAmount).roll().total;
       }
       else
         moneyEarned = dieAmount;


       if (roll.description.includes("Success"))
       {
         roll.incomeResult = "You earn " + moneyEarned;
         switch (income.tier)
         {
           case "b":
             roll.incomeResult += " brass pennies."
             break;
           case "s":
             roll.incomeResult += " silver shillings."
             break;
           case "g":
               if (moneyEarned > 1)
                 roll.incomeResult += " gold crowns."
               else
                 roll.incomeResult += " gold crown"
               break;
         }
       }
       else if (Number(roll.SL) > -6)
       {
         roll.incomeResult =  "You earn " + moneyEarned/2;
         switch (income.tier)
         {
           case "b":
             roll.incomeResult += " brass pennies."
             break;
           case "s":
             roll.incomeResult += " silver shillings."
             break;
           case "g":
               if (moneyEarned/2 > 1)
                 roll.incomeResult += " gold crowns."
               else
                 roll.incomeResult += " gold crown"
               break;
         }
       }
       else
       {
         roll.incomeResult =  "You have a very bad week, and earn nothing (or have your money stolen, or some similar mishap)."
       }
      
       DiceWFRP.renderRollCard(cardOptions, roll);
       
     }
   }

   let cardOptions = {
     speaker: {
       alias: this.data.name,
       actor : this.data._id,
     },
     title: title,
     template : "public/systems/wfrp4e/templates/chat/skill-card.html"
   }

   if (this.token)
     cardOptions.speaker.alias = this.token.data.name;
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
  setupWeapon(weapon, event) {
    let skillCharList = [];
    let ammo;
    let slBonus = 0 // Used when wielding defensive weapons
    let modifier = 0;
    let successBonus = 0;
    let title = "Weapon Test - " + weapon.name;
    let wep = WFRP_Utility._prepareWeaponCombat(this.data, duplicate(weapon));
    
    if (event.attackType == "melee")
    {
      // If Melee, default to Weapon Skill, but check to see if the actor has the specific skill for the weapon
      skillCharList.push("Weapon Skill")
      for (let meleeSkill of this.data.flags.combatSkills)
        if (meleeSkill.name.toLowerCase().includes("melee"))
          skillCharList.push(meleeSkill.name);
    }


    else if (event.attackType == "ranged")
    {
      // If Ranged, default to Ballistic Skill, but check to see if the actor has the specific skill for the weapon
      skillCharList.push("Ballistic Skill")
      if (weapon.data.weaponGroup.value != "throwing" && weapon.data.weaponGroup.value != "explosives" && weapon.data.weaponGroup.value != "entangling")
      {
        // Check to see if they have ammo
        ammo = this.getOwnedItem(weapon.data.currentAmmo.value);
        if (ammo)
          ammo = ammo.data
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
    }

    if (wep.skillToUse)
      skillCharList.push(wep.skillToUse)
    let testData = {
      target : 0,
      hitLocation : true,
      extra : {
        weapon : weapon,
        ammo : ammo,
        attackType : event.attackType
      }
    };

    if (game.settings.get("wfrp4e", "testAutoFill") && (game.combat && game.combat.data.round != 0 && game.combat.turns))
    {
      try 
      {
        let currentTurn = game.combat.turns.find(t => t.active)
        if (this.data.token.actorLink)
        {
          if (currentTurn && this.data.token != currentTurn.actor.data.token)
            slBonus = this.data.flags.defensive;
          else
          {
            if (wep.properties.qualities.includes("Accurate"))
              modifier += 10;
            if (wep.properties.qualities.includes("Precise"))
              successBonus += 1;
            if (wep.properties.flaws.includes("Imprecise"))
              slBonus -= 1;
          }
        }
        else
        {
          if (currentTurn && currentTurn.tokenId != this.token.id)
            slBonus = this.data.flags.defensive;
          else
          {
            if (wep.properties.qualities.includes("Accurate"))
              modifier += 10;
            if (wep.properties.qualities.includes("Precise"))
              successBonus += 1;
            if (wep.properties.flaws.includes("Imprecise"))
              slBonus -= 1;
          }
        }
      }
      catch
      {
        slBonus = 0;
        successBonus = 0;
        modifier = 0;
      }
    }

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
        slBonus : slBonus || 0,
        successBonus : successBonus || 0,
        modifier : modifier || 0,
        defaultSelection :  wep.skillToUse,
        advantage : this.data.data.status.advantage.value || 0
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
          if (skillSelected == "Weapon Skill")
            testData.target = this.data.data.characteristics.ws.value
          else if (skillSelected == "Ballistic Skill")
            testData.target = this.data.data.characteristics.bs.value

          testData.target += testData.testModifier + testData.testDifficulty;
        }
        else
        {
          // If using the appropriate skill, set the target number to characteristic value + advances + modifiers
          let skillUsed = testData.weapon.skillToUse;

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
        if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup.value != "Entangling")
        {
          ammo.data.quantity.value--;
          this.updateOwnedItem({id: ammo.id, "data.quantity.value" : ammo.data.quantity.value });
        }
      },
      // Override the default test evaluation to use weaponTest specific function
      rollOverride : () => {
        let roll = DiceWFRP.rollWeaponTest(testData);
        DiceWFRP.renderRollCard(cardOptions, roll);
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
        actor : this.data._id
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/weapon-card.html",
    }
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  // Roll spell Dialog - choose between Casting or Channelling
  spellDialog(spell, options) {

    if (spell.data.lore.value == "petty")
      this.setupCast(spell, options)
    else
    {
      renderTemplate("public/systems/wfrp4e/templates/chat/cast-channel-dialog.html").then(dlg => {
        new Dialog({
          title: "Cast or Channell",
          content: dlg,
          buttons: {
            cast: {
              label: "Cast",
              callback: btn => {
                this.setupCast(spell, options);
              }
            },
            channell: {
              label: "Channell",
              callback: btn => {
                this.setupChannell(spell, options);
              }
            },
          },
          default: 'cast'
        }).render(true);
      })
    }
  }

  /**
   * Setup a Cast Test
   * @param spell {Object}   Spell being cast
   */
  setupCast(spell) {
    let title = "Casting Test - " + spell.name;
    let castSkills = [{key : "int", name : "Intelligence"}]
    castSkills = castSkills.concat(this.items.filter(i => i.name.toLowerCase() == "language (magick)" && i.type == "skill"))
    let defaultSelection = castSkills.findIndex(i => i.name.toLowerCase() == "language (magick)")

    let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.data, spell);
    let testData = {
      target : 0,
      extra : {
        spell : preparedSpell,
        malignantInfluence : false,
        ingredient : false,
      }
    };

    if (preparedSpell.damage)
      testData.hitLocation = true;

    let dialogOptions = {
      title: title,
      template : "/public/systems/wfrp4e/templates/chat/spell-dialog.html",
      buttons : {
        rollButton : {
          label: "Roll"
        },
      },
      data : {
        hitLocation : testData.hitLocation,
        malignantInfluence : testData.malignantInfluence,
        talents : this.data.flags.talentTests,
        advantage : this.data.data.status.advantage.value || 0,
        defaultSelection : defaultSelection,
        castSkills : castSkills
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());

        let skillSelected = castSkills[Number(html.find('[name="skillSelected"]').val())];

        if (skillSelected.key != "int")
        {
          testData.target = this.data.data.characteristics[skillSelected.data.characteristic.value].value
          + skillSelected.data.advances.value
          + testData.testDifficulty
          + testData.testModifier;
        }
        else
        {
          testData.target = this.data.data.characteristics.int.value
          + testData.testDifficulty
          + testData.testModifier;
        }

        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        testData.extra.malignantInfluence = html.find('[name="malignantInfluence"]').is(':checked');
        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)



        // Find ingredient being used, if any
        let ing = this.getOwnedItem(testData.extra.spell.data.currentIng.value)
        if (ing)
        {
          // Decrease ingredient quantity
          ing = ing.data;
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateOwnedItem(ing);
        }
        else if (!ing || ing.data.data.quantity.value <= 0)
          testData.extra.ingredient = false;

        roll();
        },
        // Override generic roll with cast specific roll
        rollOverride : () =>
        {
          let roll = DiceWFRP.rollCastTest(testData);        

          this.updateOwnedItem({id: spell.id, 'data.cn.SL' : 0});
          // Update spell to reflect SL from channelling resetting to 0

          DiceWFRP.renderRollCard(cardOptions, roll);

        }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
        actor : this.data._id
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/spell-card.html"
    }
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

 /**
   * Setup a Channelling Test
   * @param spell {Object}   Spell being channelled
   */
  setupChannell(spell) {
    let title = "Channelling Test - " + spell.name;
    let channellSkills = [{key : "wp", name : "Willpower"}]
    channellSkills = channellSkills.concat(this.items.filter(i => i.name.toLowerCase().includes("channel") && i.type == "skill"))
    let spellLore = spell.data.lore.value;
    let defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes(CONFIG.magicWind[spellLore])));
    if (spellLore == "witchcraft")
    {
      defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes("Channelling")))
    }

    let testData = {
      target : 0,
      extra : {
        spell : WFRP_Utility._prepareSpellOrPrayer(this.data, spell),
        malignantInfluence : false,
        ingredient : false,
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
        advantage : this.data.data.status.advantage.value || 0,
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

        if (skillSelected.key != "wp")
        {
        testData.target = testData.testModifier + testData.testDifficulty
                              + this.data.data.characteristics[skillSelected.data.characteristic.value].value
                              + skillSelected.data.advances.value
        }
        else
          testData.target = testData.testModifier + testData.testDifficulty + this.data.data.characteristics.wp.value

        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)


        // Find ingredient being used, if any
        let ing = this.getOwnedItem(testData.extra.spell.data.currentIng.value)
        if (ing)
        {
          // Decrease ingredient quantity
          ing = ing.data;
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateOwnedItem(ing);
        }
        else if (!ing || ing.data.data.quantity.value <= 0)
          testData.extra.ingredient = false;


        roll(this);
        },
        // Override generic roll with channell specific function
      rollOverride : (actor) => {
        let roll = DiceWFRP.rollChannellTest(testData, actor);
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
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

   /**
   * Setup a Prayer Test
   * @param prayer {Object}   prayer being invoked
   */
  setupPrayer(prayer, options) {
    let title = "Prayer Test - " + prayer.name;
    let praySkills = [{key : "fel", name : "Fellowship"}]
    praySkills = praySkills.concat(this.items.filter(i => i.name.toLowerCase() == "pray" && i.type == "skill"));
    let defaultSelection = praySkills.findIndex(i => i.name.toLowerCase() == "pray")
    
    let preparedPrayer = WFRP_Utility._prepareSpellOrPrayer(this.data, prayer);
    let testData = {
      target : 0,
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
        advantage : this.data.data.status.advantage.value || 0,
        praySkills : praySkills,
        defaultSelection : defaultSelection
      },
      callback : (html, roll) => {
        cardOptions.rollMode = html.find('[name="rollMode"]').val();
        testData.testModifier = Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = CONFIG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus = Number(html.find('[name="successBonus"]').val());
        testData.slBonus = Number(html.find('[name="slBonus"]').val());
        let skillSelected = praySkills[Number(html.find('[name="skillSelected"]').val())];

        if (skillSelected.key != "fel")
        {
          testData.target = this.data.data.characteristics[skillSelected.data.characteristic.value].value
          + skillSelected.data.advances.value
          + testData.testDifficulty
          + testData.testModifier;
        }
        else
        {
          testData.target = this.data.data.characteristics.fel.value
          + testData.testDifficulty
          + testData.testModifier;
        }

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

        DiceWFRP.renderRollCard(cardOptions, roll);
      }
    };
    let cardOptions = {
      actor : this.data.id,
      speaker: {
        alias: this.data.name,
        actor : this.data._id,
      },
      title: title,
      template : "public/systems/wfrp4e/templates/chat/prayer-card.html"
    }
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /**
   * Roll a test associated with a trait
   * @param prayer {Object}   Trait being tested
   */
  setupTrait(trait) {
    if (!trait.data.rollable.value)
      return;
    let char = this.data.data.characteristics[trait.data.rollable.rollCharacteristic];
    let title =   CONFIG.characteristics[trait.data.rollable.rollCharacteristic] + " Test - " + trait.name;
    let testData = {
      target : char.value,
      hitLocation : false,
      extra : 
      { trait : trait }
    };

    if (trait.data.rollable.rollCharacteristic == "ws" || trait.data.rollable.rollCharacteristic == "bs" )
      testData.hitLocation = true;

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
        characteristicToUse : trait.data.rollable.rollCharacteristic,
        advantage : this.data.data.status.advantage.value || 0
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
        },
        rollOverride : () => {
          let roll = DiceWFRP.rollTest(testData);
          try 
          {
          if (testData.extra.trait.data.rollable.bonusCharacteristic)
            testData.extra.damage = Number(roll.SL) + 
                                    Number(testData.extra.trait.data.specification.value) + 
                                    Number(this.data.data.characteristics[testData.extra.trait.data.rollable.bonusCharacteristic].bonus);
          }
          catch (error)
          {
            ui.notifications.error("Error calculating damage: " + error)
          } // If something went wrong calculating damage, do nothing and still render the card
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
      template : "public/systems/wfrp4e/templates/chat/skill-card.html" // Reuse skill card
    }
    if (this.token)
      cardOptions.speaker.alias = this.token.data.name;
    // Call the roll helper utility
    DiceWFRP.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  static getBonus(value) {
    return Math.floor(value / 10)
  }

  // Readds all Basic and ungrouped skills that aren't already owned
  async addBasicSkills() {
    let ownedBasicSkills = this.data.items.filter(i => i.type == "skill" && i.data.advanced.value == "bsc");
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
        }

        if (!ownedBasicSkills.find(s => skillItem.data.name.includes(s.name)))
        {
          await this.createOwnedItem(skillItem.data);
          ownedBasicSkills.push(skillItem.data);
        }
      }
    }
  }

}

// Assign the actor class to the CONFIG
CONFIG.Actor.entityClass = ActorWfrp4e;
