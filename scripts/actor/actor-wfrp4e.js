

/**
 * Provides the main Actor data computation and organization.
 *
 * ActorWfrp4e contains all the preparation data and methods used for preparing an actor:
 * going through each Owned Item, preparing them for display based on characteristics.
 * Additionally, it handles all the different types of roll requests, setting up the
 * test dialog, how each test is displayed, etc.
 *
 *
 * @see   ActorSheetWfrp4e - Base sheet class
 * @see   ActorSheetWfrp4eCharacter - Character sheet class
 * @see   ActorSheetWfrp4eNPC - NPC sheet class
 * @see   ActorSheetWfrp4eCreature - Creature sheet class
 * @see   DiceWFRP4e - Sends test data to roll tests.
 */
class ActorWfrp4e extends Actor {

   /**
     * Override the create() function to provide additional WFRP4e functionality.
     *
     * This overrided create() function adds initial items and flags to an actor
     * upon creation. Namely: Basic skills, the 3 default coin values (brass
     * pennies, silver shillings, gold crowns) at a quantity of 0, and setting
     * up the default Automatic Calculation flags to be true. We still want to
     * use the upstream create method, so super.create() is called at the end
     *
     * @param {Object} data        Barebones actor data which this function adds onto.
     * @param {Object} options     (Unused) Additional options which customize the creation workflow.
     *
     */
    static async create(data, options) {
      // If the created actor has items (only applicable to duplicated actors) bypass the new actor creation logic
      if (data.items)
      {
        super.create(data, options);
        return
      }

      // Initialize empty items
      data.items = [];

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
      let basicSkills = await WFRP_Utility.allBasicSkills();
      let moneyItems = await WFRP_Utility.allMoneyItems();

      // If character, automatically add basic skills and money items
      if (data.type == "character")
      {
        let id = 1;
        for (let sk of basicSkills) // Add basic skills
        {
          sk.id = id;
          id++;
          data.items.push(sk);
        }
        for (let m of moneyItems)   // Add money items, with a quantity of 0
        {
          m.id = id;
          id++;
          m.data.quantity.value = 0;
          data.items.push(m);
        }
        super.create(data, options); // Follow through the the rest of the Actor creation process upstream
      }
      // If not a character, ask the user whether they want to add basic skills / money
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
                for (let sk of basicSkills) // Add basic skills
                {
                  sk.id = id;
                  id++;
                  data.items.push(sk);
                }
                for (let m of moneyItems)   // Add the money items, with a quantity of 0
                {
                  m.id = id;
                  id++;
                  m.data.quantity.value = 0;
                  data.items.push(m);
                }
                super.create(data, options); // Follow through the the rest of the Actor creation process upstream
              }
            },
            no: {
              label: "No",
              callback: async dlg => {
                super.create(data, options); // Do not add new items, continue with the rest of the Actor creation process upstream
              }
            },
          },
          default: 'yes'
        }).render(true);
      }
    }


    /**
     * Calculates simple dynamic data when actor is updated.
     *
     * prepareData() is called when actor data is updated to recalculate values such as Characteristic totals, bonus (e.g.
     * this is how Strength total and Strength Bonus gets updated whenever the user changes the Strength characteristic),
     * movement values, and encumbrance. Some of these may or may not actually be calculated, depending on the user choosing
     * not to have them autocalculated. These values are relatively simple, more complicated calculations that require items
     * can be found in the sheet's getData() function.
     * 
     * @see ActorSheetWfrp4e.getData()
     */
    prepareData() 
    {
      try 
      {
        super.prepareData();
        const data = this.data;

        // For each characteristic, calculate the total and bonus value
        for (let ch of Object.values(data.data.characteristics))
        {
          ch.value = ch.initial + ch.advances;
          ch.bonus = Math.floor(ch.value / 10)
        }

        // Only characters have experience 
        if ( data.type === "character" ) 
          data.data.details.experience.current = data.data.details.experience.total - data.data.details.experience.spent;

        if (data.flags.autoCalcWalk)
          data.data.details.move.walk = parseInt(data.data.details.move.value)* 2;

        if (data.flags.autoCalcRun)
          data.data.details.move.run = parseInt(data.data.details.move.value) * 4;

        if (data.flags.autoCalcEnc)
          data.data.status.encumbrance.max = data.data.characteristics.t.bonus + data.data.characteristics.s.bonus;

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

    /* --------------------------------------------------------------------------------------------------------- */
    /* Setting up Rolls
    /*
    /* All "setup______" functions gather the data needed to roll a certain test. These are in 3 main objects.
    /* These 3 objects are then given to DiceWFRP.prepareTest() to show the dialog, see that function for its usage.
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
     * Setup a Characteristic Test.
     * 
     * Characteristics tests are the simplest test, all that needs considering is the target number of the
     * characteristic being tested, and any modifiers the user enters.
     * 
     * @param {String} characteristicId     The characteristic id (e.g. "ws") - id's can be found in config.js
     * 
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

      // Default a WS or BS test to have hit location checked
      if (characteristicId == "ws" || characteristicId == "bs")
        testData.hitLocation = true;

      // Setup dialog data: title, template, buttons, prefilled data
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/characteristic-dialog.html",
        buttons : {
          rollButton : {
            label: "Roll"
          }
        },
        // Prefilled dialog data
        data : { 
          hitLocation : testData.hitLocation,
          talents : this.data.flags.talentTests,
          advantage : this.data.data.status.advantage.value || 0
        },
        callback : (html, roll) => { 
          // When dialog confirmed, fill testData dialog information
          // Note that this does not execute until DiceWFRP.prepareTest() has finished and the user confirms the dialog
          cardOptions.rollMode =    html.find('[name="rollMode"]').val();
          testData.testModifier =   Number(html.find('[name="testModifier"]').val());
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
          testData.successBonus =   Number(html.find('[name="successBonus"]').val());
          testData.slBonus =        Number(html.find('[name="slBonus"]').val());
          // Target value is the final value being tested against, after all modifiers and bonuses are added
          testData.target =         testData.target + testData.testModifier + testData.testDifficulty;
          testData.hitLocation =    html.find('[name="hitLocation"]').is(':checked');
          let talentBonuses =       html.find('[name = "talentBonuses"]').val();

           // Combine all Talent Bonus values (their times taken) into one sum
          testData.successBonus +=  talentBonuses.reduce(function (prev, cur){
            return prev + Number(cur)
          }, 0)

          // Use the assigned roll function (see DiceWFRP.prepareTest() to see how this roll function is assigned)
          roll(testData, cardOptions);
        }
      };

      // Call the universal cardOptions helper
      let cardOptions = this._setupCardOptions("systems/wfrp4e/templates/chat/characteristic-card.html", title)

      // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
      DiceWFRP.prepareTest({
        dialogOptions : dialogOptions,
        testData : testData,
        cardOptions : cardOptions
      });
      this.setupSkil
    }

    /**
     * Setup a Skill Test.
     * 
     * Skill tests are much like Characteristic Tests in their simplicity, just with another layer of modifiers (skill advances).
     * However, there is more complication if the skill is instead for an Income test, which adds computation after the roll is 
     * completed. 
     * 
     * @param {Object} skill    The skill item being tested. Skill items contain the advancements and the base characteristic, see template.json for more information.
     * @param {bool}   income   Whether or not the skill is being tested to determine Income.
     */
    setupSkill(skill, income = false) {
      let title = skill.name + " Test";
      let testData = {
        hitLocation : false,
        income : income,
        extra : {
          size : this.data.data.details.size.value
        }
      };

      // Default a WS, BS, Melee, or Ranged to have hit location checked
      if (skill.data.characteristic.value == "ws" ||
          skill.data.characteristic.value == "bs" ||
          skill.name.includes("Melee") ||
          skill.name.includes("Ranged"))
      {
        testData.hitLocation = true;
      }

      // Setup dialog data: title, template, buttons, prefilled data
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/skill-dialog.html",
        buttons : {
          rollButton : {
            label: "Roll"
          }
        },
        // Prefilled dialog data
        data : {
          hitLocation : testData.hitLocation,
          talents : this.data.flags.talentTests,
          characteristicList : WFRP4E.characteristics,
          characteristicToUse : skill.data.characteristic.value,
          advantage : this.data.data.status.advantage.value || 0,
          testDifficulty : income ? "average" : "challenging" // Default to average if using income
        },
        callback : (html, roll) => {
          // When dialog confirmed, fill testData dialog information
          // Note that this does not execute until DiceWFRP.prepareTest() has finished and the user confirms the dialog
          cardOptions.rollMode =    html.find('[name="rollMode"]').val();
          testData.testModifier =   Number(html.find('[name="testModifier"]').val());
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
          testData.successBonus =   Number(html.find('[name="successBonus"]').val());
          testData.slBonus =        Number(html.find('[name="slBonus"]').val());
          let characteristicToUse = html.find('[name="characteristicToUse"]').val();
          // Target value is the final value being tested against, after all modifiers and bonuses are added
          testData.target =         this.data.data.characteristics[characteristicToUse].value
                                    + testData.testModifier
                                    + testData.testDifficulty
                                    + skill.data.advances.value;
          testData.hitLocation =    html.find('[name="hitLocation"]').is(':checked');
          let talentBonuses =       html.find('[name = "talentBonuses"]').val();

           // Combine all Talent Bonus values (their times taken) into one sum
          testData.successBonus +=  talentBonuses.reduce(function (prev, cur) { 
            return prev + Number(cur)
          }, 0)

          // Use the assigned roll function (see below for how rollOverride is assigned, and then
          // DiceWFRP.prepareTest() for more info on how the override is used, if any)
          roll(testData, cardOptions)
        }
      };

      // If Income, use the specialized income roll handler
      if (testData.income)
        dialogOptions.rollOverride = this.constructor.incomeOverride;

      // Call the universal cardOptions helper
      let cardOptions = this._setupCardOptions("systems/wfrp4e/templates/chat/skill-card.html", title)

      // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
      DiceWFRP.prepareTest({
        dialogOptions : dialogOptions,
        testData : testData,
        cardOptions : cardOptions});
    }

    /**
     * Setup a Weapon Test.
     *
     * Probably the most complicated type of Test, weapon tests' complexity comes from all the different
     * factors and variables of the different weapons available and how they might affect test results,
     * as well as ammo usage, the effects of using different skills etc.
     * 
     * @param {Object} weapon   The weapon Item being used.
     * @param {bool}   event    The event that called this Test, used to determine if attack is melee or ranged.
     */
    setupWeapon(weapon, event) {
      let skillCharList = []; // This array is for the different options available to roll the test (Skills and characteristics)
      let slBonus = 0   // Used when wielding Defensive weapons
      let modifier = 0; // Used when atatcking with Accurate weapons
      let successBonus = 0;
      let title = "Weapon Test - " + weapon.name;

      // Prepare the weapon to have the complete data object, including qualities/flaws, damage value, etc.
      let wep = WFRP_Utility._prepareWeaponCombat(this.data, duplicate(weapon));
      let ammo; // Ammo object, if needed

      let testData = {
        target : 0,
        hitLocation : true,
        extra : { // Store this extra weapon/ammo data for later use
          weapon : wep,
          ammo : ammo,
          attackType : event.attackType,
          size : this.data.data.details.size.value
        }
      };

      if (event.attackType == "melee")
        skillCharList.push("Weapon Skill")

      else if (event.attackType == "ranged")
      {
        // If Ranged, default to Ballistic Skill, but check to see if the actor has the specific skill for the weapon
        skillCharList.push("Ballistic Skill")
        if (weapon.data.weaponGroup.value != "throwing" && weapon.data.weaponGroup.value != "explosives" && weapon.data.weaponGroup.value != "entangling")
        {
          // Check to see if they have ammo if appropriate
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
          // If this executes, it means it uses its own quantity for ammo (e.g. throwing), which it has none of
          ui.notifications.error("No Ammo!")
          return;
        }
        else
        {
          // If this executes, it means it uses its own quantity for ammo (e.g. throwing)
          ammo = weapon;
        }
      }

      let defaultSelection // The default skill/characteristic being used 
      if (wep.skillToUse)
      {
          // If the actor has the appropriate skill, default to that.
          skillCharList.push(wep.skillToUse.name)
          defaultSelection = skillCharList.indexOf(wep.skillToUse.name)
      }

      // ***** Automatic Test Data Fill Options ******

      // Try to automatically fill the dialog with values based on context
      // If the auto-fill setting is true, and there is combat....
      if (game.settings.get("wfrp4e", "testAutoFill") && (game.combat && game.combat.data.round != 0 && game.combat.turns))
      {
        try
        {
          let currentTurn = game.combat.turns.find(t => t.active)

          // If actor is a token
          if (this.data.token.actorLink)
          {
            // If it is NOT the actor's turn
            if (currentTurn && this.data.token != currentTurn.actor.data.token)
              slBonus = this.data.flags.defensive; // Prefill Defensive values (see prepareItems() for how defensive flags are assigned)

            else // If it is the actor's turn
            {
              // Prefill dialog according to qualities/flaws
              if (wep.properties.qualities.includes("Accurate"))
                modifier += 10;
              if (wep.properties.qualities.includes("Precise"))
                successBonus += 1;
              if (wep.properties.flaws.includes("Imprecise"))
                slBonus -= 1;
            }
          }
          else // If the actor is not a token
          {
            // If it is NOT the actor's turn
            if (currentTurn && currentTurn.tokenId != this.token.id)
              slBonus = this.data.flags.defensive;

            else // If it is the actor's turn
            {
              // Prefill dialog according to qualities/flaws
              if (wep.properties.qualities.includes("Accurate"))
                modifier += 10;
              if (wep.properties.qualities.includes("Precise"))
                successBonus += 1;
              if (wep.properties.flaws.includes("Imprecise"))
                slBonus -= 1;
            }
          }
        }
        catch // If something went wrong, default to 0 for all prefilled data
        {
          slBonus = 0;
          successBonus = 0;
          modifier = 0;
        }
      }

      // Setup dialog data: title, template, buttons, prefilled data
      let dialogOptions = {
        title: title,
        template : "/systems/wfrp4e/templates/chat/weapon-dialog.html",
        buttons : {
          rollButton : {
            label: "Roll"
          }
        },
        // Prefilled dialog data
        data : {
          hitLocation : testData.hitLocation,
          talents : this.data.flags.talentTests,
          skillCharList : skillCharList,
          slBonus : slBonus || 0,
          successBonus : successBonus || 0,
          modifier : modifier || 0,
          defaultSelection : defaultSelection,
          testDifficulty : event.difficulty,
          advantage : this.data.data.status.advantage.value || 0
        },
        callback : (html, roll) => {
          // When dialog confirmed, fill testData dialog information
          // Note that this does not execute until DiceWFRP.prepareTest() has finished and the user confirms the dialog
          cardOptions.rollMode = html.find('[name="rollMode"]').val();
          testData.testModifier = Number(html.find('[name="testModifier"]').val());
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
          testData.successBonus = Number(html.find('[name="successBonus"]').val());
          testData.slBonus = Number(html.find('[name="slBonus"]').val());
          let skillSelected = skillCharList[Number(html.find('[name="skillSelected"]').val())];

          // Determine final target if a characteristic was selected
          if (skillSelected == "Weapon Skill" || skillSelected == "Ballistic Skill")
          {
            if (skillSelected == "Weapon Skill")
              testData.target = this.data.data.characteristics.ws.value
            else if (skillSelected == "Ballistic Skill")
              testData.target = this.data.data.characteristics.bs.value

            testData.target += testData.testModifier + testData.testDifficulty;
          }
          else // If a skill was selected
          {
            // If using the appropriate skill, set the target number to characteristic value + advances + modifiers
            // Target value is the final value being tested against, after all modifiers and bonuses are added
            let skillUsed = testData.extra.weapon.skillToUse;

            testData.target = this.data.data.characteristics[skillUsed.data.characteristic.value].value
                                                                                + testData.testModifier
                                                                                + testData.testDifficulty
                                                                                + skillUsed.data.advances.value;
          }

          testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');

          let talentBonuses = html.find('[name = "talentBonuses"]').val();

          // Combine all Talent Bonus values (their times taken) into one sum          
          testData.successBonus += talentBonuses.reduce(function (prev, cur){
            return prev + Number(cur)
          }, 0)
          
          // Use the assigned roll function (see below for how rollOverride is assigned, and then
          // DiceWFRP.prepareTest() for more info on how the override is used, if any)
          roll(testData, cardOptions);

          // Reduce ammo if necessary
          if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup.value != "Entangling")
          {
            ammo.data.quantity.value--;
            this.updateOwnedItem({id: ammo.id, "data.quantity.value" : ammo.data.quantity.value });
          }
        },

        // Override the default test evaluation to use specialized weaponTest function
        rollOverride : this.constructor.weaponOverride
      };

      // Call the universal cardOptions helper
      let cardOptions = this._setupCardOptions("systems/wfrp4e/templates/chat/skill-card.html", title)

      // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function     
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
            testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
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
        template : "systems/wfrp4e/templates/chat/spell-card.html",
        flags : {img: this.data.img}
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id,
        cardOptions.flags.img = this.token.data.img

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
      let defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes(WFRP4E.magicWind[spellLore])));
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
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
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
        template : "systems/wfrp4e/templates/chat/channell-card.html",
        flags : {img: this.data.img}

      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id,
        cardOptions.flags.img = this.token.data.img
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
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
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
        template : "systems/wfrp4e/templates/chat/prayer-card.html",
        flags : {img: this.data.img}
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id,
        cardOptions.flags.img = this.token.data.img
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
      let title =   WFRP4E.characteristics[trait.data.rollable.rollCharacteristic] + " Test - " + trait.name;
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
          characteristicList : WFRP4E.characteristics,
          characteristicToUse : trait.data.rollable.rollCharacteristic,
          advantage : this.data.data.status.advantage.value || 0
        },
        callback : (html, roll) => {
          cardOptions.rollMode = html.find('[name="rollMode"]').val();
          testData.testModifier = Number(html.find('[name="testModifier"]').val());
          testData.testDifficulty = WFRP4E.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
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
        template : "systems/wfrp4e/templates/chat/skill-card.html", // Reuse skill card
        flags : {img: this.data.img}
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id,
        cardOptions.flags.img = this.token.data.img
      }
      // Call the roll helper utility
      DiceWFRP.prepareTest({
        dialogOptions : dialogOptions,
        testData : testData,
        cardOptions : cardOptions});
    }

    

    _setupCardOptions(template, title)
    {
      let cardOptions = {
        speaker: {
          alias: this.data.name,
          actor : this.data._id,
        },
        title: title,
        template : template,
        flags : {img: this.data.img}
      }
      if (this.token)
      {
        cardOptions.speaker.alias = this.token.data.name;
        cardOptions.speaker.token = this.token.data.id;
        cardOptions.speaker.scene = canvas.scene.id
        cardOptions.flags.img = this.token.data.img;
      }
      return cardOptions
    }

    // Readds all Basic and ungrouped skills that aren't already owned
    async addBasicSkills() {
      let allItems = duplicate(this.data.items)
      let ownedBasicSkills = allItems.filter(i => i.type == "skill" && i.data.advanced.value == "bsc");
      let allBasicSkills = await WFRP_Utility.allBasicSkills()
      let skillsToAdd = allBasicSkills.filter(s => !ownedBasicSkills.find(ownedSkill => ownedSkill.name == s.name))

      for(let skill of skillsToAdd)
      {
        await this.createOwnedItem(skill)
      }
    }

    static applyDamage(victim, opposeData, damageType = DAMAGE_TYPE.NORMAL)
    {
      // If no damage value, don't attempt anything
      if (!opposeData.damage.value)
        return "Cannot automate damage (likely due to Tiring)"

      let actor = WFRP_Utility.getSpeaker(victim);
      let attacker = WFRP_Utility.getSpeaker(opposeData.speakerAttack)

      let totalWoundLoss = opposeData.damage.value
      let newWounds = actor.data.data.status.wounds.value;
      let applyAP = (damageType == DAMAGE_TYPE.IGNORE_TB || damageType == DAMAGE_TYPE.NORMAL)
      let applyTB = (damageType == DAMAGE_TYPE.IGNORE_AP || damageType == DAMAGE_TYPE.NORMAL)

      let updateMsg = "Damage Applied to <b>"+ actor.data.name + "</b><span class = 'hide-option'>: @TOTAL";
      if (damageType != DAMAGE_TYPE.IGNORE_ALL)
        updateMsg += " ("

      let impenetrable = false;

      if (applyAP)
      {
        let AP = actor.sheet.getData().actor.AP[opposeData.hitloc.value]
        AP.ignored = 0;
        let undamaging = false;
        if (opposeData.attackerTestResult.weapon)
        {
          let weaponProperties = opposeData.attackerTestResult.weapon.properties;
          let penetrating = weaponProperties.qualities.includes("Penetrating")
          undamaging = weaponProperties.flaws.includes("Undamaging")
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
        }

        for (let layer of AP.layers)
        {
          if (opposeData.attackerTestResult.roll % 2 != 0 && layer.impenetrable)
          {
            impenetrable = true;
            break;
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

      if (newWounds <= 0 && !impenetrable)
        updateMsg += `<br><a class ="table-click critical-roll" data-table = "crit${opposeData.hitloc.value}" >Critical</a>`

      else if (impenetrable)
        updateMsg += `<br>Impenetrable - Criticals Nullified`

      if (newWounds <= 0)
        newWounds = 0;


      updateMsg +="</span>"
      updateMsg = updateMsg.replace("@TOTAL", totalWoundLoss)

      actor.update({"data.status.wounds.value" : newWounds})
      return updateMsg;
    }


    /* ------------------------- Roll Overides --------------------------- */


    static async  defaultRoll(testData, cardOptions, rerenderMessage = null) {
      let result = DiceWFRP.rollTest(testData);
      result.postFunction = "defaultRoll";
      if (testData.extra)
        mergeObject(result, testData.extra);


      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async incomeOverride(testData, cardOptions, rerenderMessage = null)
    {
      let result = DiceWFRP.rollTest(testData);
      result.postFunction = "incomeOverride"

      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let dieAmount = WFRP4E.earningValues[testData.income.tier][0]
      dieAmount = Number(dieAmount) * testData.income.standing;
      let moneyEarned;
      if (testData.income.tier != "g")
      {
        dieAmount = dieAmount + "d10";
        moneyEarned = new Roll(dieAmount).roll().total;
      }
      else
        moneyEarned = dieAmount;


      if (result.description.includes("Success"))
      {
        result.incomeResult = "You earn " + moneyEarned;
        switch (testData.income.tier)
        {
          case "b":
            result.incomeResult += " brass pennies."
            break;
          case "s":
            result.incomeResult += " silver shillings."
            break;
          case "g":
              if (moneyEarned > 1)
              result.incomeResult += " gold crowns."
              else
              result.incomeResult += " gold crown"
              break;
        }
      }
      else if (Number(result.SL) > -6)
      {
        result.incomeResult =  "You earn " + moneyEarned/2;
        switch (testData.income.tier)
        {
          case "b":
            result.incomeResult += " brass pennies."
            break;
          case "s":
            result.incomeResult += " silver shillings."
            break;
          case "g":
              if (moneyEarned/2 > 1)
                result.incomeResult += " gold crowns."
              else
                result.incomeResult += " gold crown"
              break;
        }
      }
      else
      {
        result.incomeResult =  "You have a very bad week, and earn nothing (or have your money stolen, or some similar mishap)."
      }
      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async weaponOverride(testData, cardOptions, rerenderMessage = null)
    {
      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let result = DiceWFRP.rollWeaponTest(testData);
      result.postFunction = "weaponOverride";

      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async castOverride(testData, cardOptions, rerenderMessage = null)
    {
      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let result = DiceWFRP.rollCastTest(testData);
      result.postFunction = "castOverride";

      // Update spell to reflect SL from channelling resetting to 0
      WFRP_Utility.getSpeaker(cardOptions.speaker).updateOwnedItem({id: testData.extra.spell.id, 'data.cn.SL' : 0});

      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async channellOverride(testData, cardOptions, rerenderMessage = null)
    {
      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let result = DiceWFRP.rollChannellTest(testData, WFRP_Utility.getSpeaker(cardOptions.speaker));
      result.postFunction = "channellOverride";


      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async prayerOverride(testData, cardOptions, rerenderMessage = null)
    {
      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let result = DiceWFRP.rollPrayTest(testData, WFRP_Utility.getSpeaker(cardOptions.speaker));
      result.postFunction = "prayerOverride";

      await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        ActorWfrp4e.handleOpposed(msg)
      })
    }

    static async traitOverride(testData, cardOptions, rerenderMessage = null)
    {
      if (game.user.targets.size)
         cardOptions.title += " - Opposed"

      let result = DiceWFRP.rollTest(testData);
      result.postFunction = "traitOverride";
      try
      {
        if (!isNaN(testData.extra.trait.data.specification.value))
        {
          testData.extra.damage = Number(result.SL)
        if (Number(testData.extra.trait.data.specification.value))
          testData.extra.damage +=  Number(testData.extra.trait.data.specification.value)
        if (testData.extra.trait.data.rollable.bonusCharacteristic)
          testData.extra.damage += Number(WFRP_Utility.getSpeaker(cardOptions.speaker).data.data.characteristics[testData.extra.trait.data.rollable.bonusCharacteristic].bonus) || 0;
        }
      }
      catch (error)
      {
        ui.notifications.error("Error calculating damage: " + error)
      } // If something went wrong calculating damage, do nothing and still render the card
      if (testData.extra)
        mergeObject(result, testData.extra);

        await DiceWFRP.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
          ActorWfrp4e.handleOpposed(msg)
        })
    }


    static async handleOpposed(message)
    {
      let actor = WFRP_Utility.getSpeaker(message.data.speaker)
      let testResult = message.data.flags.data.postData
      if (actor.data.flags.oppose)
      {
        let attackMessage = game.messages.get(actor.data.flags.oppose.messageId)
        let attacker = {
          speaker : actor.data.flags.oppose.speaker,
          testResult : attackMessage.data.flags.data.postData,
          img : WFRP_Utility.getSpeaker(actor.data.flags.oppose.speaker).data.img
        }
        let defender = {
          speaker : message.data.speaker,
          testResult : testResult,
          img : actor.data.msg
        }
        await OpposedWFRP.evaluateOpposedTest(attacker, defender, {target : true, startMessageId : actor.data.flags.oppose.startMessageId})
        await actor.update({"-=flags.oppose" : null})

      }
      else if (game.user.targets.size)
      {
        game.user.targets.forEach(async target => {
          let content =
          `<div class ="opposed-message"><b>${actor.token.data.name}</b> is targeting <b>${target.actor.token.data.name}</b></div>
          <div class = "opposed-tokens">
          <div class = "attacker"><img src="${actor.token.data.img}" width="50" height="50"/></div>
          <div class = "defender"><img src="${target.actor.token.data.img}" width="50" height="50"/></div>
          </div>`

          let startMessage = await ChatMessage.create({user : game.user._id, content : content, speaker : message.data.speaker})
          target.actor.update({"flags.oppose" : {speaker : message.data.speaker, messageId : message.data._id, startMessageId : startMessage.data._id}})
        })
        canvas.tokens.get(message.data.speaker.token).setTarget(false);
      }
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
      "token.disposition" : CONST.TOKEN_DISPOSITIONS.NEUTRAL,
      "token.name" : actor.name
    })
    if (!actor.img)
      actor.img = "systems/wfrp4e/tokens/unknown.png"
  })

  Hooks.on("preUpdateActor", (data, updatedData) =>{
    if (data.data.token.img == "systems/wfrp4e/tokens/unknown.png" && updatedData.img)
    {
      updatedData["token.img"] = updatedData.img;
    }
  })