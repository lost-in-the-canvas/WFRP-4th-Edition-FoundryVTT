

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
      if (screen.height < 900)
        ui.notifications.warn("WARNING: Your resolution is too small! Actor sheets will not be displayed correctly until you reach the minimum vertical resolution of 900 px.")
      this._saveScrollPos();
      await super._render(force, options);
      this._setScrollPos();
      $(this._element).find(".close").attr("title", "Close");
      $(this._element).find(".configure-sheet").attr("title", "Configure Sheet");
      $(this._element).find(".configure-token").attr("title", "Configure Token");
      $(this._element).find(".import").attr("title", "Import");
    }
  
      // Add the class "save-scroll" to a div to save it's scroll position
     _saveScrollPos()
     {
        if (this.form === null)
          return;
  
        const html = $(this.form).parent();
        this.scrollPos = [];
       let lists = $(html.find(".save-scroll"));
       for (let list of lists)
       {
         this.scrollPos.push($(list).scrollTop());
       }
     }
  
      _setScrollPos()
      {
        if (this.scrollPos)
        {
          const html = $(this.form).parent();
          let lists = $(html.find(".save-scroll"));
          for (let i = 0; i < lists.length; i++)
          {
            $(lists[i]).scrollTop(this.scrollPos[i]);
          }
        }
      }
  
    /**
     * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
     */
    getData() {
      const sheetData = super.getData();
      this._prepareItems(sheetData.actor);
  
      let size;
      let trait = sheetData.items.find(t => t.name.toLowerCase().includes("size"));
      if (trait)
        size = trait.data.specification.value;
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
  
  
      let tbMultiplier = (hardyTrait ? 1 : 0)
      if (hardyTalent)
        tbMultiplier += hardyTalent.data.advances.value || 0
  
      let sb = sheetData.actor.data.characteristics.s.bonus;
      let tb = sheetData.actor.data.characteristics.t.bonus;
      let wpb =sheetData.actor.data.characteristics.wp.bonus;
  
      if (sheetData.actor.flags.autoCalcCritW)
        sheetData.actor.data.status.criticalWounds.max = tb;
  
      let newWounds;
      let tokenSize;
  
     if (sheetData.actor.flags.autoCalcWounds)
     {
       if (sheetData.actor.traits.find(t => t.name.toLowerCase().includes("construct")))
        wpb = sb;
      switch (sheetData.actor.data.details.size.value)
      {
  
        case "tiny":
        newWounds = 1 + tb * tbMultiplier;
        tokenSize = 0.3;
        break;
  
        case "ltl":
        newWounds = tb + tb * tbMultiplier;
        tokenSize = 0.5;
        break;
  
        case "sml":
        newWounds = 2 * tb + wpb + tb * tbMultiplier;
        tokenSize = 0.8;
        break;
  
        case "avg":
        newWounds = sb + 2 * tb + wpb + tb * tbMultiplier;
        tokenSize = 1;
        break;
  
        case "lrg":
        newWounds = 2 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        tokenSize = 2;
        break;
  
        case "enor":
        newWounds = 4 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        tokenSize = 3;
        break;
  
        case "mnst":
        newWounds = 8 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        tokenSize = 4;
        break;
      }
  
        if (sheetData.actor.data.status.wounds.max != newWounds)
        {
          this.actor.update({
            "data.status.wounds.max" : newWounds,
            "data.status.wounds.value" : Number(newWounds)
          })
        }

        if (this.actor.isToken && this.token.data.height != tokenSize)
        {
          this.token.update(this.token.scene._id, 
            {
            "height" : tokenSize,
            "width" : tokenSize
            })
        }

        else if (sheetData.actor.token.height != tokenSize)
        {
            this.actor.update({
            "token.height" : tokenSize,
            "token.width" : tokenSize
            })
        }
      }
  
      if (sheetData.actor.flags.autoCalcRun)
      {
        if(sheetData.actor.traits.find(t => t.name.toLowerCase() == "stride"))
          sheetData.actor.data.details.move.run += sheetData.actor.data.details.move.walk;
      }
  
      if (sheetData.actor.flags.autoCalcEnc)
      {
        let strongBackTalent = sheetData.actor.talents.find(t => t.name.toLowerCase() == "strong back")
        let sturdyTalent = sheetData.actor.talents.find(t => t.name.toLowerCase() == "sturdy")
  
        if (strongBackTalent)
          sheetData.actor.data.status.encumbrance.max += strongBackTalent.data.advances.value;
        if (sturdyTalent)
          sheetData.actor.data.status.encumbrance.max += sturdyTalent.data.advances.value * 2;
  
      }
  
  
  
      sheetData.isToken = this.actor.token;
      sheetData.isGM = game.user.isGM;
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
        const mutations = [];
        const diseases = [];
        const criticals = [];
        let penalties = {
          "Armour" : {value : ""},
          "Injury" : {value : ""},
          "Mutation" : {value : ""},
          "Criticals" : {value : ""},
        };
  
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
  
        // Money and ingredients are not in inventory object because they need more customization
  
        // Iterate through items, allocating to containers
        let totalEnc = 0;
        let hasSpells = false;
        let hasPrayers = false;
        let defensiveCounter = 0;
  
        for ( let i of actorData.items ) {
          try {
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
            i.encumbrance = (i.data.encumbrance.value * i.data.quantity.value).toFixed(2);
            if (i.data.location.value == 0){
              inventory.ammunition.items.push(i);
              inventory.ammunition.show = true
              totalEnc += Number(i.encumbrance);
            }
            else{
              inContainers.push(i);
            }
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
            penalties["Injury"].value += i.data.penalty.value;
          }

          else if (i.type == "critical")
          {
            criticals.push(i);
            penalties["Criticals"].value += i.data.modifier.value;
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
            totalEnc += i.encumbrance;
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
              else if (i.data.trappingType.value == "tradeTools")
              {
                inventory["toolsAndKits"].items.push(i)
                inventory["toolsAndKits"].show = true;
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
              let availableCharacteristics = i.data.characteristics
              for (let char in actorData.data.characteristics)
              {
                if (availableCharacteristics.includes(char))
                  actorData.data.characteristics[char].career = true;
              }
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
              penalties["Mutation"].value += i.data.modifier.value;
          }
  
          else if (i.type === "money")
          {
            i.encumbrance = (i.data.encumbrance.value * i.data.quantity.value).toFixed(2);
            if (i.data.location.value == 0){
              money.coins.push(i);
              totalEnc += Number(i.encumbrance);
            }
            else{
              inContainers.push(i);
            }
            money.total += i.data.quantity.value * i.data.coinValue.value;
  
          }
        }
        catch (error){
          console.error("Something went wrong with preparing item " + i.name + ": " + error)
          ui.notifications.error("Something went wrong with preparing item "+ i.name + ": " + error)
          ui.notifications.error("Deleting "+ i.name);
          this.actor.deleteOwnedItem(i.id, true);
          }
        }

        // Prepare weapons for combat after items passthrough for efficiency
        for (let wep of inventory.weapons.items)
        {
          if (wep.data.equipped)
          {
            weapons.push(WFRP_Utility._prepareWeaponCombat(actorData, wep, basicSkills.concat(advancedOrGroupedSkills)));
            let shieldProperty = wep.properties.qualities.find(q => q.toLowerCase().includes("shield"))
            if (shieldProperty)
            {
               AP.shield += parseInt(shieldProperty.split(" ")[1]);
            }
            if (wep.properties.qualities.find(q => q.toLowerCase().includes("defensive")))
            {
              defensiveCounter++;
            }
          }
        }

  
        // If you have no spells, just put all ingredients in the miscellaneous section, otherwise, setup the ingredients to be available
        if (grimoire.length > 0 && ingredients.items.length > 0)
        {
          ingredients.show = true;
          actorData.ingredients = ingredients;
          for (let s of grimoire)
             s.data.ingredients = ingredients.items.filter(i => i.data.spellIngredient.value == s.id && i.data.quantity.value > 0)
        }
        else
          inventory.misc.items = inventory.misc.items.concat(ingredients.items);
  
  
        // Container Setup
        var containerMissing = inContainers.filter(i => containers.items.find(c => c.data.id == i.data.location.value));
        for (var itemNoContainer of containerMissing) // Reset all items without container references (items that were removed from a contanier)
        {
          itemNoContainer.data.location.value = 0;
          this.actor.updateOwnedItem(itemNoContainer, true);;
        }
        for (var cont of containers.items) // For each container
        {
          // All items referencing (inside) that container
          var itemsInside = inContainers.filter(i => i.data.location.value == cont.id);
          itemsInside.map(function(item){ // Add category of item to be displayed
          if (item.type == "trapping")
            item.type = CONFIG.trappingCategories[item.data.trappingType.value];
          else
            item.type = CONFIG.trappingCategories[item.type];
        } )
          cont["carrying"] = itemsInside.filter(i => i.type != "Container");    // cont.carrying -> items the container is carrying
          cont["packsInside"] = itemsInside.filter(i => i.type == "Container"); // cont.packsInside -> containers the container is carrying
          cont["holding"] = itemsInside.reduce(function (prev, cur){            // cont.holding -> total encumbrance the container is holding
            return Number(prev) + Number(cur.encumbrance);
          }, 0);
          cont.holding = Math.floor(cont.holding)
        }
  
        containers.items = containers.items.filter(c => c.data.location.value == 0); // Do not show containers inside other containers as top level (a location value of 0 means not inside a container)
  
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
  
        let smb = talents.find(t => t.name.toLowerCase() == "strike mighty blow")
        if (smb && this.actor.data.flags.meleeDamageIncrease != smb.data.advances.value)
          this.actor.update({"flags.meleeDamageIncrease" : smb.data.advances.value});
        else if (!smb && this.actor.data.flags.meleeDamageIncrease)
          this.actor.update({"flags.meleeDamageIncrease" : 0});
  
  
        let accshot = talents.find(t => t.name.toLowerCase() == "accurate shot")
        if (accshot && this.actor.data.flags.rangedDamageIncrease != accshot.data.advances.value)
          this.actor.update({"flags.rangedDamageIncrease" : accshot.data.advances.value});
        else if (!accshot && this.actor.data.flags.rangedDamageIncrease)
          this.actor.update({"flags.rangedDamageIncrease" : 0});
  
  
        // Penalties box setup
        // If too much text, divide the penalties into groups
        let penaltiesOverflow = false;
        penalties["Armour"].value += WFRP_Utility._calculateArmorPenalties(actorData, armour);
        if ((penalties["Armour"].value + penalties["Mutation"].value + penalties["Injury"].value + penalties["Criticals"].value).length > 50)
        {
          penaltiesOverflow = true;
          for (let penaltyType in penalties)
          {
            if (penalties[penaltyType].value)
              penalties[penaltyType].show = true;
            else
              penalties[penaltyType].show = false;
          }
        }
  
        let penaltiesFlag = penalties["Armour"].value + " " + penalties["Mutation"].value + " " + penalties["Injury"].value + " " + penalties["Criticals"].value + " " + this.actor.data.data.status.penalties.value
        penaltiesFlag = penaltiesFlag.trim();
        // This is for the penalty string in flags, for combat turn message
        if (this.actor.data.flags.modifier != penaltiesFlag && this.options.editable)
          this.actor.update({"flags.modifier" : penaltiesFlag})
  
        let armorTrait = traits.find(t => t.name.toLowerCase().includes("armour") || t.name.toLowerCase().includes("armor"))
        if (armorTrait)
        {
          for (let loc in AP)
          {
            try
            {
              if (loc != "shield")
                AP[loc] += parseInt(armorTrait.data.specification.value) || 0;
            }
            catch
            {
              //ignore armor traits with invalid values
            }
          }
        }
  
        this.actor.data.flags.defensive = defensiveCounter;
  
        let untrainedSkills = []
        let untrainedTalents = []
        let hasCurrentCareer = false;
        for (let career of careers)
        {
          if (career.data.current.value)
          {
            hasCurrentCareer = true;
            for (let sk of career.data.skills)
            {
              let trainedSkill = basicSkills.concat(advancedOrGroupedSkills).find(s => s.name.toLowerCase() == sk.toLowerCase())
              if (trainedSkill)
              {
                trainedSkill.career = true;
              }
              else
              {
                untrainedSkills.push(sk);
              }
            }
  
            for (let talent of career.data.talents)
            {
              let trainedTalents = talents.find(t => t.name == talent)
              if (trainedTalents)
              {
                trainedTalents.career = true;
              }
              else
              {
                untrainedTalents.push(talent);
              }
            }
          }
        }
        if (!hasCurrentCareer)
        {
          for (let char in actorData.data.characteristics)
            actorData.data.characteristics[char].career = false;
        }
  
        actorData.inventory = inventory;
        actorData.containers = containers;
        actorData.basicSkills = basicSkills.sort(WFRP_Utility.nameSorter);
        actorData.advancedOrGroupedSkills = advancedOrGroupedSkills.sort(WFRP_Utility.nameSorter);
        actorData.talents = talents;
        actorData.traits = traits;
        actorData.weapons = weapons;
        actorData.diseases = diseases;
        actorData.mutations = mutations;
        actorData.armour = armour;
        actorData.penalties = penalties;
        actorData.penaltyOverflow = penaltiesOverflow;
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
        actorData.untrainedSkills = untrainedSkills;
        actorData.untrainedTalents = untrainedTalents;
        actorData.criticals = criticals;
        actorData.data.status.criticalWounds.value = criticals.length;


        let enc;
        // let moneyEnc = 0;
        // for (let m of money.coins)
        // {
        //   moneyEnc += m.data.encumbrance.value * m.data.quantity.value;
        // }
        // totalEnc += Math.floor(moneyEnc);
        totalEnc = Math.floor(totalEnc);
        try
        {
          enc = {
            max: actorData.data.status.encumbrance.max,
            value: Math.round(totalEnc * 10) / 10,
          };
        }
        catch
        {
          this.actor.data.flags.autoCalcEnc = true;
          this.actor.update({"data.status.encumbrance" : {max: 0, current: 0, type: "Number", label : "Encumbrance"}}) // Compatibility with alpha - TODO: Remove
          return
        }
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
    /*  Auto Advancement Functions
    /* -------------------------------------------- */
    async _advanceSpeciesSkills() {
      let skillList
      try
      {
        skillList = CONFIG.speciesSkills[this.actor.data.data.details.species.value];
        if (!skillList)
        {
          skillList = CONFIG.speciesSkills[WFRP_Utility.findKey(this.actor.data.data.details.species.value, CONFIG.species)]
          if (!skillList)
          {
            throw "Could not add skills for species " + this.actor.data.data.details.species.value;
          }
        }
      }
      catch(error)
      {
          ui.notifications.info("Could not find species " + this.actor.data.data.details.species.value)
          console.log("Could not find species " + this.actor.data.data.details.species.value + ": " + error);
          throw error
      }
      let skillSelector = new Roll(`1d${skillList.length}- 1`);
      skillSelector.roll().total;
  
      let skillsSelected = [];
      while (skillsSelected.length < 6)
      {
        skillSelector = skillSelector.reroll()
        if (!skillsSelected.includes(skillSelector.total))
          skillsSelected.push(skillSelector.total);
      }
  
      for (let skillIndex = 0; skillIndex < skillsSelected.length; skillIndex++)
      {
        if (skillIndex <= 2)
          await this._advanceSkill(skillList[skillsSelected[skillIndex]], 5)
        else
          await this._advanceSkill(skillList[skillsSelected[skillIndex]], 3)
      }
    }
  
  
    async _advanceSpeciesTalents() {
      let talentList
      try
      {
        talentList = CONFIG.speciesTalents[this.actor.data.data.details.species.value];
        if (!talentList)
        {
          talentList = CONFIG.speciesTalents[WFRP_Utility.findKey(this.actor.data.data.details.species.value, CONFIG.species)]
          if (!talentList)
            throw "Could not add talents for species " + this.actor.data.data.details.species.value;
        }
      }
      catch (error)
      {
        ui.notifications.info("Could not find species " + this.actor.data.data.details.species.value)
        console.log("Could not find species " + this.actor.data.data.details.species.value + ": " + error);
        throw error
      }
      let talentSelector;
      for (let talent of talentList)
      {
        if (!isNaN(talent)) // If is a number, roll on random talents
        {
          for (let i = 0; i < talent; i++)
          {
            let result = WFRP_Tables.rollTable("talents")
            await this._advanceTalent(result.name);
          }
          continue
        }
        let talentOptions = talent.split(',').map(function(item) {
          return item.trim();
        });
  
        if (talentOptions.length > 1)
        {
          talentSelector = new Roll(`1d${talentOptions.length} - 1`)
            await this._advanceTalent(talentOptions[talentSelector.roll().total])
        }
        else
        {
          await this._advanceTalent(talent)
        }
      }
  
    }
  
    async _advanceSkill(skillName, advances){
      let existingSkill = this.actor.data.items.find(i => i.name.trim() == skillName && i.type == "skill")
      if (existingSkill)
      {
        existingSkill.data.advances.value = (existingSkill.data.advances.value < advances) ? advances : existingSkill.data.advances.value;
        await this.actor.updateOwnedItem(existingSkill);
        return;
      }
  
      // If does not already own skill, search through compendium
      try
      {
          let skillToAdd = await WFRP_Utility.findSkill(skillName)
          skillToAdd.data.data.advances.value = advances;
          await this.actor.createOwnedItem(skillToAdd.data);
      }
      catch(error) {
        console.error("Something went wrong when adding skill " + skillName +": " + error);
        ui.notifications.error("Something went wrong when adding skill " + skillName +": " + error);
      }
    }
  
    async _advanceTalent(talentName){
  
      try
      {
        let talent = await WFRP_Utility.findTalent(talentName);
        await this.actor.createOwnedItem(talent.data);
      }
      catch(error) {
        console.error("Something went wrong when adding talent " + talentName +": " + error);
        ui.notifications.error("Something went wrong when adding talent " + talentName +": " + error);
      }
    }
  
  
    _modifyWounds(event)
    {
      let inputValue = event.target.value;
      let sign = event.target.value.split('')[0]
      let wounds;
      if (sign == "+" || sign == "-")
        wounds = eval(this.actor.data.data.status.wounds.value + parseInt(inputValue))
      else
        wounds = parseInt(inputValue);
      
      this.actor.update({"data.status.wounds.value" : wounds});
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
      new Tabs(html.find(".tabs"), {
        initial: this.actor.data.flags["_sheetTab"],
        callback: clicked => this.actor.data.flags["_sheetTab"] = clicked.attr("data-tab")
      });
  
      // Item summaries
      html.find('.item-dropdown').click(event => this._onItemSummary(event));
  
      html.find('.melee-property-quality, .melee-property-flaw, .ranged-property-quality, .ranged-property-flaw, .armour-quality, .armour-flaw').click(event => this._expandProperty(event));
  
      html.find('.weapon-range, .weapon-group, .weapon-reach').click(event => this._expandInfo(event));
  
  
      $("input[type=text]").click(function() {
        $(this).select();
     });
  
      // Everything below here is only needed if the sheet is editable
      if (!this.options.editable) return;
  
        html.find(".wounds-value-box").change(event => {
          this._modifyWounds(event)
        })
  
       // This disgusting mess allows characteristics to be tabbed through. (Used only by Creature and NPC sheets, placed here to maintain DRY code)
       html.find(".ch-edit").keydown(event => {
        if (event.keyCode == 9) // If Tabing out of an characteristic input, save the new value (and future values) in updateObj
        {
          let characteristics = this.actor.data.data.characteristics
          let ch = event.currentTarget.attributes["data-char"].value;
          let newValue  = Number(event.target.value);
  
          if (!this.updateObj) // Create a new updateObj (every time updateObj is used for an update, it is deleted, see below)
            this.updateObj = duplicate(this.actor.data.data.characteristics);;
  
  
          if (!(newValue == characteristics[ch].initial + characteristics[ch].advances)) // don't update a characteristic if it wasn't changed
          {
           this.updateObj[ch].initial = newValue;
           this.updateObj[ch].advances = 0;
          }
          this.charUpdateFlag = false;
        }
        else
        {
          this.charUpdateFlag = true; // If the user did not click tab, OK to update
        }
      })
  
      html.find('.ch-edit').focusout(async event => {
        event.preventDefault();
        if (!this.charUpdateFlag && event.currentTarget.attributes["data-char"].value != "fel") // Do not proceed with an update until the listener aboves sets this flag to true or the last characteristic was tabbed
          return                  // When this flag is true, that means the focus out was not from a tab
  
        // This conditional allows for correctly updating only a single characteristic. If the user editted only one characteristic, the above listener wasn't called, meaning no updateObj
        if (!this.updateObj)
          this.updateObj = duplicate(this.actor.data.data.characteristics)
  
        // In order to correctly update the last element, we use the normal procedure (similar to above)
        let characteristics = this.actor.data.data.characteristics
        let ch = event.currentTarget.attributes["data-char"].value;
        let newValue  = Number(event.target.value);
  
        if (!(newValue == characteristics[ch].initial + characteristics[ch].advances))
        {
         this.updateObj[ch].initial = newValue;
         this.updateObj[ch].advances = 0;
        }
  
        // Finally, update and delete the updateObj
        await this.actor.update({"data.characteristics" : this.updateObj})
        this.updateObj = undefined;
  
      });
  
  
  
  
      html.find('.skill-advances').keydown(async event => {
        if (event.keyCode == 9) // Wait to update if user tabbed to another skill
        {
          this.skillUpdateFlag = false;
        }
        else
        {
          this.skillUpdateFlag = true;
        }
      });
  
  
      html.find('.skill-advances').focusout(async event => {
        if (!this.skillsToEdit)
          this.skillsToEdit = []
        let itemId = Number(event.target.attributes["data-item-id"].value);
        let itemToEdit = duplicate(this.actor.getOwnedItem(itemId).data);
        itemToEdit.data.advances.value = Number(event.target.value);
        this.skillsToEdit.push(itemToEdit);
  
        // Wait for the listener above to set this true before updating - allows for tabbing through skills
        if (!this.skillUpdateFlag)
          return;
  
        await this.actor.updateManyOwnedItem(this.skillsToEdit);

        this.skillsToEdit = [];
      });
  
  
      html.find('.skill-advances').focusin(async event => {
        event.target.focus();
      });
  
      html.find('.ammo-selector').change(async event => {
        let itemId = Number(event.target.attributes["data-item-id"].value);
        const itemToEdit = this.actor.getOwnedItem(itemId).data;
        itemToEdit.data.currentAmmo.value = Number(event.target.value);
        await this.actor.updateOwnedItem(itemToEdit, true);
      });
  
  
      html.find('.spell-selector').change(async event => {
        let itemId = Number(event.target.attributes["data-item-id"].value);
        const ing = this.actor.getOwnedItem(itemId).data;
        ing.data.spellIngredient.value = Number(event.target.value);
        await this.actor.updateOwnedItem(ing, true);
      });
  
      html.find('.ingredient-selector').change(async event => {
        let itemId = Number(event.target.attributes["data-item-id"].value);
        const spell = this.actor.getOwnedItem(itemId).data;
        spell.data.currentIng.value = Number(event.target.value);
        await this.actor.updateOwnedItem(spell, true);
      });
  
      // Characteristic Tests
      html.find('.ch-value').click(event => {
        event.preventDefault();
        let characteristic = event.currentTarget.attributes["data-char"].value;
        this.actor.setupCharacteristic(characteristic, event);
      });
  
      html.find('.skill-total, .skill-select').mousedown(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let skill = this.actor.getOwnedItem(itemId)

        if (ev.button == 0)
          this.actor.setupSkill(skill.data);

        else if (ev.button == 2)
          skill.sheet.render(true);
      })
  
      html.find('.weapon-item-name').click(event => {
        event.preventDefault();
        let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let attackType = $(event.currentTarget).parents(".inventory-list").attr("data-weapon-type");
        let weapon = this.actor.getOwnedItem(itemId);
        if (weapon)
          this.actor.setupWeapon(duplicate(weapon.data), {attackType : attackType});
      })
  
      html.find('.fist-icon').click(async event => {
        event.preventDefault();
        let pack = game.packs.find(p => p.collection == "wfrp4e.trappings");
        let weapons;
        await pack.getIndex().then(index => weapons = index);
        let unarmedId = weapons.find(w => w.name.toLowerCase() == "unarmed");
        let unarmed = await pack.getEntity(unarmedId.id);
        this.actor.setupWeapon(duplicate(unarmed.data), {attackType : "melee"})
        // Roll Fist Attack
      })
  
      html.find('.trait-roll').mousedown(event => {
        event.preventDefault();
        if (event.button == 2)
        {
          this._onItemSummary(event);
          return;
        }
        let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let trait = this.actor.getOwnedItem(itemId).data;
        this.actor.setupTrait((duplicate(trait)));
      })
  
      html.find('.spell-roll').mousedown(event => {
        event.preventDefault();
        if (event.button == 2)
        {
          this._onItemSummary(event);
          return;
        }
        let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let spell = this.actor.getOwnedItem(itemId).data;
        this.actor.spellDialog(duplicate(spell));
      })
  
      html.find('.prayer-roll').mousedown(event => {
        event.preventDefault();
        if (event.button == 2)
        {
          this._onItemSummary(event);
          return;
        }
        let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let prayer = this.actor.getOwnedItem(itemId).data;
        this.actor.setupPrayer(duplicate(prayer));
      })
  
      /* -------------------------------------------- */
      /*  Inventory
      /* -------------------------------------------- */
  
      // Create New Item
      html.find('.item-create').click(ev => this._onItemCreate(ev));
  
  
      // Update Inventory Item
      html.find('.item-edit').click(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        const item = this.actor.getOwnedItem(itemId);
        item.sheet.render(true);
      });
  
  
      // Delete Inventory Item
      html.find('.item-delete').click(ev => {
        let li = $(ev.currentTarget).parents(".item"),
          itemId = Number(li.attr("data-item-id"));
          renderTemplate('systems/wfrp4e/templates/chat/delete-item-dialog.html').then(html => {
            new Dialog({
            title: "Delete Confirmation",
            content: html,
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
          }).render(true)
      });
    });
  
      // Remove Inventory Item from Container
      html.find('.item-remove').click(ev => {
        let li = $(ev.currentTarget).parents(".item"),
          itemId = Number(li.attr("data-item-id"));
        const item = this.actor.getOwnedItem(itemId).data
        item.data.location.value = 0;
        this.actor.updateOwnedItem(item, true);
      });
  
      html.find('.toggle-enc').click(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let item = this.actor.getOwnedItem(itemId).data
        item.data.countEnc.value = !item.data.countEnc.value;
        this.actor.updateOwnedItem(item, true);
      });
  
      html.find('.item-toggle').click(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let item = this.actor.getOwnedItem(itemId).data
        if (item.type == "armour")
          item.data.worn.value = !item.data.worn.value;
        else if (item.type == "weapon")
          item.data.equipped = !item.data.equipped;
        else if (item.type == "trapping" && item.data.trappingType.value == "clothingAccessories")
          item.data.worn = !item.data.worn;
        this.actor.updateOwnedItem(item);
      });
  
      html.find('.worn-container').click(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let item = this.actor.getOwnedItem(itemId).data
        item.data.worn.value = !item.data.worn.value;
        this.actor.updateOwnedItem(item, true);
      });
  
  
      html.find('.quantity-click').mousedown(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let item = this.actor.getOwnedItem(itemId).data
        switch (event.button)
        {
          case 0:
            if (event.ctrlKey)
              item.data.quantity.value += 10;
            else
              item.data.quantity.value++;
  
            break;
          case 2:
            if (event.ctrlKey)
              item.data.quantity.value -= 10;
            else
              item.data.quantity.value--;
  
            if (item.data.quantity.value < 0)
              item.data.quantity.value = 0;
            break;
        }
        this.actor.updateOwnedItem(item);
      });

      html.find(".aggregate").click(async ev => {
        let itemType = $(ev.currentTarget).attr("data-type")
        let items = this.actor.data.items.filter(x => x.type == itemType)
        
        for (let i of items)
        {
          let duplicates = items.filter(x => x.name == i.name)
          if (duplicates.length > 1)
          {
            let newQty = duplicates.reduce((prev, current) => prev + current.data.quantity.value, 0)
            i.data.quantity.value = newQty
          }            
        }

        let noDuplicates = []
        for (let i of items)
        {
          if (!noDuplicates.find(x => x.name == i.name))
          {
            noDuplicates.push(i);
            await this.actor.updateOwnedItem({"id" : i.id, "data.quantity.value" : i.data.quantity.value})
          }
          else
            await this.actor.deleteOwnedItem(i.id);
        }

      })
  
      html.find('.ap-value').mousedown(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let APlocation =  $(ev.currentTarget).parents(".item").attr("data-location");
        let item = this.actor.getOwnedItem(itemId).data
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

      html.find('.weapon-damage').mousedown(ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let item = duplicate(this.actor.getOwnedItem(itemId).data);
        if (!item.data.weaponDamage)
          item.data["weaponDamage"] = 0;
  
        if (ev.button == 2)
          item.data.weaponDamage++;
        else if (ev.button == 0)
          item.data.weaponDamage--;
  
        if (item.data.weaponDamage < 0)
          item.data.weaponDamage = 0;
        this.actor.updateOwnedItem(item);
      });
  
      html.find('.memorized-toggle').click(async ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        const spell = this.actor.getOwnedItem(itemId).data
        spell.data.memorized.value = !spell.data.memorized.value;
        await this.actor.updateOwnedItem(spell, true);
      });
  
      html.find('.sl-counter').mousedown(async ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        const spell = this.actor.getOwnedItem(itemId).data
        switch (event.button)
        {
          case 0:
          spell.data.cn.SL++;
          if (spell.data.cn.SL > spell.data.cn.value)
            spell.data.cn.SL = spell.data.cn.valeu;
            break;
          case 2:
          spell.data.cn.SL--;
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
  
      html.find('.disease-roll').mousedown(async ev =>  {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        const disease = this.actor.getOwnedItem(itemId).data;
        let type = ev.target.attributes.class.value.split(" ")[0].trim(); // Incubation or duration
  
        if (ev.button == 0)
        {
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
  
          this.actor.updateOwnedItem(disease);
        }
        else if (ev.button == 2)
        {
          if(disease.data[type].roll)
          {
            let number = Number(disease.data[type].roll.split(" ")[0]) - 1;
            let timeUnit = disease.data[type].roll.split(" ")[1];
            disease.data[type].roll = `${number} ${timeUnit}`;
          }
          this.actor.updateOwnedItem(disease);
        }
      });

      html.find('.metacurrency-value').mousedown(async ev =>  {
        let type = $(ev.currentTarget).attr("data-point-type");
        let newValue = ev.button == 0 ? this.actor.data.data.status[type].value + 1 : this.actor.data.data.status[type].value - 1 
        this.actor.update({[`data.status.${type}.value`] : newValue})
      });
  
      /*****************************************************
      * Randomization options used by NPC and Creature sheets
      ******************************************************/
  
      // Entering a recognized species sets the characteristics to the average values
      html.find('.input.species').focusout(async event => {
        if (this.actor.data.type == "character")
          return
        if (game.settings.get("wfrp4e", "npcSpeciesCharacteristics"))
        {
          let species = event.target.value;
          await this.actor.update({"data.details.species.value" : species});

          try
          {
            let initialValues = WFRP_Utility.speciesCharacteristics(species, true);
            let characteristics = duplicate(this.actor.data.data.characteristics);
  
            for (let c in characteristics)
            {
              characteristics[c].initial = initialValues[c];
            }
            
  
            await this.actor.update({'data.characteristics' : characteristics})
            await this.actor.update({"data.details.move.value" : WFRP_Utility.speciesMovement(species) || 4})

          }
          catch
          {
            // Do nothing if exception trying to find species
          }
        }
      });
  
      // Randomization buttons that randomize characteristics, skills, and talents, of a recognized species
      html.find('.randomize').click(async event => {
        event.preventDefault();
        let species = this.actor.data.data.details.species.value;
  
        try
        {
          switch(event.target.text)
          {
            case "C":
              let creatureMethod = false;
              let characteristics = duplicate (this.actor.data.data.characteristics);
              if (this.actor.data.type == "creature" || !species)
                creatureMethod = true;
  
              if (!creatureMethod)
              {
                let averageCharacteristics = WFRP_Utility.speciesCharacteristics(species, true);
  
                // If this loop results in turning creatureMethod to true, that means an NPCs statistics have been edited manually, use -10 + 2d10 method
                for (let char in characteristics)
                {
                  if (characteristics[char].initial != averageCharacteristics[char])
                    creatureMethod = true;
                }
              }
  
  
              if (!creatureMethod)
              {
                let rolledCharacteristics = WFRP_Utility.speciesCharacteristics(species, false);
                for (let char in rolledCharacteristics)
                {
                  characteristics[char].initial = rolledCharacteristics[char];
                }
                await this.actor.update({"data.characteristics" : characteristics})
              }
  
  
              else if (creatureMethod)
              {
                let roll = new Roll("2d10");
                roll.roll();
                let characteristics = duplicate (this.actor.data.data.characteristics);
                for (let char in characteristics)
                {
                  if (characteristics[char].initial == 0)
                    continue
  
                  characteristics[char].initial -= 10;
                  characteristics[char].initial += roll.reroll().total;
                  if (characteristics[char].initial < 0)
                    characteristics[char].initial = 0
                }
                await this.actor.update({"data.characteristics" : characteristics});
              }
  
              return
  
            case "S":
              this._advanceSpeciesSkills()
              return
  
            case "T":
              this._advanceSpeciesTalents()
              return
          }
        }
        catch (error)
        {
          console.log("Could not randomize: " + error)
        }
  
      });
  
  
    html.find(".item-post").click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      const item = this.actor.getOwnedItem(itemId);
      item.postItem();
    })
  
    html.find(".inventory .item .item-name").mousedown(ev => {
      if (ev.button == 2)
      {
        new Dialog({
          title: "Duplicate Item",
          content: '<p>Do you want to duplicate this item?</p>',
          buttons: {
            yes: {
              label: "Yes",
              callback: (dlg) => {
                this.duplicateItem(Number($(ev.currentTarget).parents(".item").attr("data-item-id")));
              }
            },
            cancel: {
              label: "Cancel",
              callback: dlg => {
                return
              }
            },
          },
          default: 'yes'
        }).render(true);
      }
    })
  
      //Item Dragging
      let handler = ev => this._onDragItemStart(ev);
      html.find('.item').each((i, li) => {
        li.setAttribute("draggable", true);
        li.addEventListener("dragstart", handler, false);
      });
    }
  
    /* -------------------------------------------- */
    /*  Event Listeners and Handlers                */
    /* -------------------------------------------- */
  
    _onDragItemStart(event) {
      let itemId = Number(event.currentTarget.getAttribute("data-item-id"));
      const item = this.actor.getOwnedItem(itemId);
        event.dataTransfer.setData("text/plain", JSON.stringify({
        type: "Item",
        actorId: this.actor.id,
        data: item.data,
        root : Number(event.currentTarget.getAttribute("root"))
      }));
    }
  
    async _onDrop(event) {
        var dragData = event.dataTransfer.getData("text/plain");
        var dropID = Number($(event.target).parents(".item").attr("data-item-id"));
        if ($(event.target).parents(".item").attr("inventory-type") == "container"){
          var dragItem = this.actor.getOwnedItem(JSON.parse(dragData).data.id);
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
      else if (JSON.parse(dragData).postedItem)
      {
        this.actor.createOwnedItem(JSON.parse(dragData).data);
      }
      else
      {
        super._onDrop(event)
      }
    }
  
  
    _onItemSummary(event) {
      event.preventDefault();
      let li = $(event.currentTarget).parents(".item"),
          item = this.actor.getOwnedItem(Number(li.attr("data-item-id"))),
          expandData = item.getExpandData({secrets: this.actor.owner});
  
      // Toggle summary for an item
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
  
        // Clickable tags
        div.on("click", ".item-property", ev => {
          WFRP_Utility.postProperty(ev.target.text)
        })
        div.on("click", ".symptom-tag", ev => {
          WFRP_Utility.postSymptom(ev.target.text)
        })
        
        div.on("click", ".career-income", ev => {
          let skill = this.actor.items.find(i => i.data.name === ev.target.text.trim() && i.data.type == "skill").data;
          let career = this.actor.items.find(i => i.data.id === Number($(ev.target).attr("data-career-id"))).data;
          if (!skill)
          {
            ui.notifications.error("You don't have this skill")
            return;
          }
          this.actor.setupSkill(skill, career.data.status);
        })
      }
      li.toggleClass("expanded");
    }
  
    // Summary for specific property selected - like a Quality description
    _expandProperty(event) {
      event.preventDefault();
  
      let li = $(event.currentTarget).parents(".item"),
          property = event.target.text,
          properties = mergeObject(WFRP_Utility.qualityList(), WFRP_Utility.flawList()),
          propertyDescr = Object.assign(duplicate(CONFIG.qualityDescriptions), CONFIG.flawDescriptions);
  
          property = property.replace(/,/g, '').trim();
  
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
            propertyKey = WFRP_Utility.findKey(property.split(" ")[0], properties)
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
      let classes = $(event.currentTarget);
      let  expansionText = "";
        if (classes.hasClass("weapon-range"))
        {
          let range = parseInt(event.target.text);
          expansionText = "0 yd - " + Math.ceil(range / 10) + " yds: " + CONFIG.rangeModifiers["Point Blank"] + "<br>"+
          (Math.ceil(range / 10) + 1) + " yds - " + Math.ceil(range / 2) + " yds: " + CONFIG.rangeModifiers["Short Range"] + "<br>" +
          (Math.ceil(range / 2) + 1) + " yds - " + range + " yds: " + CONFIG.rangeModifiers["Normal"]  + "<br>"+
          (range + 1) + " yds - " + range * 2 + " yds: " + CONFIG.rangeModifiers["Long Range"] + "<br>"+
          (range * 2 + 1) + " yds - " + range * 3 + " yds: " + CONFIG.rangeModifiers["Extreme"] + "<br>";
        }
        else if (classes.hasClass("weapon-group"))
        {
          let weaponGroup = event.target.text;
          let weaponGroupKey = "";
          weaponGroupKey = WFRP_Utility.findKey(weaponGroup, CONFIG.weaponGroups);
          expansionText = CONFIG.weaponGroupDescriptions[weaponGroupKey];
        }
        else if (classes.hasClass("weapon-reach"))
        {
          let reach = event.target.text;
          let reachKey;
          reachKey = WFRP_Utility.findKey(reach, CONFIG.weaponReaches);
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
  
  
      // Conditional for creating skills from the skills tab - sets to the correct skill type depending on column
      if (event.currentTarget.attributes["data-type"].value == "skill")
      {
        data = mergeObject(data, {"data.advanced.value" : event.currentTarget.attributes["data-skill-type"].value});
      }
  
      // Conditional for creating Trappings from the Trapping tab - sets to the correct trapping type
      if (event.currentTarget.attributes["data-type"].value == "trapping")
        data = mergeObject(data, {"data.trappingType.value" : event.currentTarget.attributes["item-section"].value})
  
      // Conditional for creating spells/prayers from their tabs, create the item with the correct type
      else if (data.type == "spell" || data.type == "prayer")
      {
        let itemSpecification = event.currentTarget.attributes[`data-${data.type}-type`].value;
  
        if (data.type == "spell")
        {
          data = mergeObject(data, {"data.lore.value" : itemSpecification});
        }
        else if (data.type == "prayer")
        {
          data = mergeObject(data, {"data.type.value" : itemSpecification});
        }
      }
      data["img"] = "systems/wfrp4e/icons/blank.png";
      data["name"] = `New ${data.type.capitalize()}`;
      this.actor.createOwnedItem(data, true, {renderSheet: true});
    }
  
    duplicateItem(itemId) 
    {
      let item = this.actor.getOwnedItem(itemId);
      this.actor.createOwnedItem(item.data);
    }
  
    /* -------------------------------------------- */
  }
  
  Actors.unregisterSheet("core", ActorSheet);
