

/**
 * Extend the base Actor class to implement additional logic specialized for WFRP4e.
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
    // Calculate dynamic data like Characteristic totals and movement values
    prepareData(actorData) {
      try {
      super.prepareData(actorData);
      const data = this.data;
  
      for (let ch of Object.values(data.data.characteristics))
      {
        ch.value = ch.initial + ch.advances;
        ch.bonus = Math.floor(ch.value / 10)
      }
  
      // Prepare Character data
      if ( data.type === "character" ) this._prepareCharacterData(data);
      else if ( data.type === "npc" ) this._prepareNPCData(data);
  
      if (data.flags.autoCalcWalk)
        data.data.details.move.walk = parseInt(data.data.details.move.value)* 2;
      if (data.flags.autoCalcRun)
        data.data.details.move.run = parseInt(data.data.details.move.value) * 4;
  
      if (data.flags.autoCalcEnc)
      {
       data.data.status.encumbrance.max = data.data.characteristics.t.bonus + data.data.characteristics.s.bonus;
      }
  
      if (game.settings.get("wfrp4e", "capAdvantageIB"))
        data.data.status.advantage.max = data.data.characteristics.i.bonus
      else
        data.data.status.advantage.max = 10;
  
      }
      catch(error)
      {
        console.error("Something went wrong with preparing actor data: " + error)
        ui.notifications.error("Something went wrong with preparing actor data: " + error)
      }
  
    }
  
  
    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(data) {
  
      data.data.details.experience.current = data.data.details.experience.total - data.data.details.experience.spent;
  
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
        hitLocation : false,
        extra : {
          size : this.data.data.details.size.value
        }
      };
  
      // Default a WS or BS test to use hit locations
      if (characteristicId == "ws" || characteristicId == "bs")
      {
        testData.hitLocation = true;
      }
  
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/characteristic-dialog.html",
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
          roll(testData, cardOptions);
          }
      };
  
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/characteristic-card.html"
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
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
     * Setup a Skill Test
     * @param skill {object}  The Skill Object owned by a character
     */
    setupSkill(skill, income = false) {
      let char = this.data.data.characteristics[skill.data.characteristic.value];
      let title = skill.name + " Test";
      let testData = {
        target : char.value + skill.data.advances.value,
        hitLocation : false,
        income : income,
        extra : {
          size : this.data.data.details.size.value
        }
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
        template : "/systems/wfrp4e/templates/chat/skill-dialog.html",
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

          roll(testData, cardOptions)
          }
      };

      if (testData.income)
        dialogOptions.rollOverride = this.constructor.incomeOverride;

      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/skill-card.html"
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
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
    setupWeapon(weapon, event) {
      let skillCharList = [];
      let ammo;
      let slBonus = 0 // Used when wielding defensive weapons
      let modifier = 0;
      let successBonus = 0;
      let title = "Weapon Test - " + weapon.name;
      let wep = WFRP_Utility._prepareWeaponCombat(this.data, duplicate(weapon));
      
      if (event.attackType == "melee")
        skillCharList.push("Weapon Skill")
  
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
      let defaultSelection
      if (wep.skillToUse)
      { 
          skillCharList.push(wep.skillToUse.name)
          defaultSelection = skillCharList.indexOf(wep.skillToUse.name)
      }

      let testData = {
        target : 0,
        hitLocation : true,
        extra : {
          weapon : wep,
          ammo : ammo,
          attackType : event.attackType,
          size : this.data.data.details.size.value
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
        template : "/systems/wfrp4e/templates/chat/weapon-dialog.html",
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
          defaultSelection : defaultSelection,
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
            let skillUsed = testData.extra.weapon.skillToUse;
  
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
          roll(testData, cardOptions);
  
          // Reduce ammo if necessary
          if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup.value != "Entangling")
          {
            ammo.data.quantity.value--;
            this.updateOwnedItem({id: ammo.id, "data.quantity.value" : ammo.data.quantity.value });
          }
        },
        // Override the default test evaluation to use weaponTest specific function
        rollOverride : this.constructor.weaponOverride
      };
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/weapon-card.html",
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
      }
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
        renderTemplate("systems/wfrp4e/templates/chat/cast-channel-dialog.html").then(dlg => {
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
      let instinctiveDiction = (this.data.flags.talentTests.findIndex(x=>x.talentName.toLowerCase() == "instinctive diction") > -1) // instinctive diction boolean
  
      let preparedSpell = WFRP_Utility._prepareSpellOrPrayer(this.data, spell);
      let testData = {
        target : 0,
        extra : {
          spell : preparedSpell,
          malignantInfluence : false,
          ingredient : false,
          ID : instinctiveDiction,
          size : this.data.data.details.size.value
        }
      };
  
      if (preparedSpell.damage)
        testData.hitLocation = true;
  
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/spell-dialog.html",
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
              testData.target = this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
              + skillSelected.data.data.advances.value
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

            roll(testData, cardOptions);
          },
          // Override generic roll with cast specific roll
          rollOverride : this.constructor.castOverride
      };
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/spell-card.html"
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
      }
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
      let aethyricAttunement = (this.data.flags.talentTests.findIndex(x=>x.talentName.toLowerCase() == "aethyric attunement") > -1) // aethyric attunement boolean
  
      let testData = {
        target : 0,
        extra : {
          spell : WFRP_Utility._prepareSpellOrPrayer(this.data, spell),
          malignantInfluence : false,
          ingredient : false,
          AA : aethyricAttunement,
          size : this.data.data.details.size.value
        }
      };
  
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/channell-dialog.html",
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
          advantage : "N/A"
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
                           + this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
                           + skillSelected.data.data.advances.value
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
          else if(!ing || ing.data.data.quantity.value <= 0)
            testData.extra.ingredient = false;
  
          roll(testData, cardOptions);
          },
          // Override generic roll with channell specific function
        rollOverride : this.constructor.channellOverride
      };
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/channell-card.html"
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
      }
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
    setupPrayer(prayer) {
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
          size : this.data.data.details.size.value

        }
      };
  
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/prayer-dialog.html",
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
            testData.target = this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
            + skillSelected.data.data.advances.value
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
  
          roll(testData, cardOptions);
          },
          // Override generic test function with prayer specific function
        rollOverride : this.constructor.prayerOverride
      };
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/prayer-card.html"
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
      }
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
        { 
          trait : trait,
          size : this.data.data.details.size.value
        }
      };
  
      if (trait.data.rollable.rollCharacteristic == "ws" || trait.data.rollable.rollCharacteristic == "bs" )
        testData.hitLocation = true;
  
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/skill-dialog.html", // Reuse skill dialog
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
          roll(testData, cardOptions);
          },
          rollOverride : this.constructor.traitOverride
      };
  
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : "systems/wfrp4e/templates/chat/skill-card.html" // Reuse skill card
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
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

    static applyDamage(victim, opposeData, damageType = DAMAGE_TYPE.NORMAL)
    {
      // If no damage value, don't attempt anything
      if (!opposeData.damage.value)
        return "Cannot automate damage (likely due to Tiring)"
      // TODO: Shield
      let actor = game.actors.get(victim.actor);
      if (victim.token)
        actor = canvas.tokens.get(victim.token).actor

      let attacker = game.actors.get(opposeData.speakerAttack.actor);
      if (opposeData.speakerAttack.token)
        attacker = canvas.tokens.get(opposeData.speakerAttack.token).actor
    
      let totalWoundLoss = opposeData.damage.value
      let newWounds = actor.data.data.status.wounds.value;
      let applyAP = (damageType == DAMAGE_TYPE.IGNORE_TB || damageType == DAMAGE_TYPE.NORMAL)
      let applyTB = (damageType == DAMAGE_TYPE.IGNORE_AP || damageType == DAMAGE_TYPE.NORMAL)

      let updateMsg = "Damage Applied to <b>"+ actor.data.name + "</b><span class = 'hide-option'>: @TOTAL";
      if (damageType != DAMAGE_TYPE.IGNORE_ALL)
        updateMsg += " ("

      if (applyAP)
      {
        let AP = actor.sheet.getData().actor.AP[opposeData.hitloc.value]
        AP.ignored = 0;
        let weaponProperties = opposeData.attackerTestResult.weapon.properties;
        let penetrating = weaponProperties.qualities.includes("Penetrating")
        let undamaging = weaponProperties.flaws.includes("Undamaging")
        let ignorePartial = opposeData.attackerTestResult.roll % 2 == 0 || opposeData.attackerTestResult.extra.critical
        let ignoreWeakpoints = (opposeData.attackerTestResult.roll % 2 == 0 || opposeData.attackerTestResult.extra.critical) 
                                && weaponProperties.qualities.includes("Impale")

        for (let layer of AP.layers)
        {
          if (ignoreWeakpoints && layer.weakpoints)
          {
            AP.ignored += layer.value
          }
          else if (ignorePartial && layer.partial)
          {
            AP.ignored += layer.value;
          }
          else if (penetrating)
          {
            AP.ignored += layer.metal ? 1 : layer.value
          }
        }

        AP.used = AP.value - AP.ignored
        AP.used = AP.used < 0 ? 0 : AP.used;           // AP minimum 0
        AP.used = undamaging ? AP.used * 2 : AP.used;  // Double AP if undamaging


        if (AP.ignored)
          updateMsg += `${AP.used}/${AP.value} AP`
        else
          updateMsg += AP.used + " AP"

        let shieldAP = 0;
        if (opposeData.defenderTestResult.weapon)
        {
          if (opposeData.defenderTestResult.weapon.properties.qualities.find(q => q.includes("Shield")))
            shieldAP = Number(opposeData.defenderTestResult.weapon.properties.qualities.find(q => q.includes("Shield")).split(" ")[1])
        }

        if (shieldAP)
          updateMsg += ` + ${shieldAP} Shield`

        if (applyTB)
          updateMsg += " + "
        else 
          updateMsg += ")"

        totalWoundLoss -= (AP.used + shieldAP)
      }

      if (applyTB)
      {
        totalWoundLoss -= actor.data.data.characteristics.t.bonus
        updateMsg += actor.data.data.characteristics.t.bonus + " TB"
      }

      totalWoundLoss -= actor.data.flags.robust || 0;

      if (actor.data.flags.robust)
        updateMsg += ` + ${actor.data.flags.robust} Robust)`
      else
        updateMsg += ")"

      totalWoundLoss = totalWoundLoss <= 0 ? 1 : totalWoundLoss 

      newWounds -= totalWoundLoss

      if (newWounds <= 0)
      {
        newWounds = 0;
        updateMsg += `<br><a class ="table-click critical-roll" data-table = "crit${opposeData.hitloc.value}" >Critical</a>`
      } 

      updateMsg +="</span>"
      updateMsg = updateMsg.replace("@TOTAL", totalWoundLoss)

      actor.update({"data.status.wounds.value" : newWounds})
      return updateMsg;
    }


    /* ------------------------- Roll Overides --------------------------- */

   
    static defaultRoll(testData, cardOptions, rerenderMessage = null) {
      let roll = DiceWFRP.rollTest(testData);
      roll.postFunction = "defaultRoll";
      if (testData.extra)
        mergeObject(roll, testData.extra);
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }

    static incomeOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollTest(testData);
      roll.postFunction = "incomeOverride"
      let dieAmount = CONFIG.earningValues[testData.income.tier][0]
      dieAmount = Number(dieAmount) * testData.income.standing;
      let moneyEarned;
      if (testData.income.tier != "g")
      {
        dieAmount = dieAmount + "d10";
        moneyEarned = new Roll(dieAmount).roll().total;
      }
      else
        moneyEarned = dieAmount;


      if (roll.description.includes("Success"))
      {
        roll.incomeResult = "You earn " + moneyEarned;
        switch (testData.income.tier)
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
        switch (testData.income.tier)
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
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage); 
    }

    static weaponOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollWeaponTest(testData);
      roll.postFunction = "weaponOverride";
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }

    static castOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollCastTest(testData);
      roll.postFunction = "castOverride";

      // Update spell to reflect SL from channelling resetting to 0
      game.actors.get(cardOptions.speaker.actor).updateOwnedItem({id: testData.extra.spell.id, 'data.cn.SL' : 0});
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }

    static channellOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollChannellTest(testData, game.actors.get(cardOptions.speaker.actor));
      roll.postFunction = "channellOverride";

      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }

    static prayerOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollPrayTest(testData, game.actors.get(cardOptions.speaker.actor));
      roll.postFunction = "prayerOverride";
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }
  
    static traitOverride(testData, cardOptions, rerenderMessage = null)
    {
      let roll = DiceWFRP.rollTest(testData);
      roll.postFunction = "traitOverride";
      try 
      {
        if (!isNaN(testData.extra.trait.data.specification.value))
        {
          testData.extra.damage = Number(roll.SL)
        if (Number(testData.extra.trait.data.specification.value))
          testData.extra.damage +=  Number(testData.extra.trait.data.specification.value)
        if (testData.extra.trait.data.rollable.bonusCharacteristic)
          testData.extra.damage += Number(game.actors.get(cardOptions.speaker.actor).data.data.characteristics[testData.extra.trait.data.rollable.bonusCharacteristic].bonus) || 0;
        }
      }
      catch (error)
      {
        ui.notifications.error("Error calculating damage: " + error)
      } // If something went wrong calculating damage, do nothing and still render the card
      if (testData.extra)
        mergeObject(roll, testData.extra);
      DiceWFRP.renderRollCard(cardOptions, roll, rerenderMessage);
    }
  }
  
  // Assign the actor class to the CONFIG
  CONFIG.Actor.entityClass = ActorWfrp4e;


  Hooks.on("preCreateActor", (dir, actor) =>{
    mergeObject(actor,
      {"token.bar1" :{"attribute" : "status.wounds"},
      "token.bar2" :{"attribute" : "status.advantage"},
      "token.displayName" : CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      "token.displayBars" : CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
      "token.name" : actor.data.name
    })
  })