
/**
 * Provides the data and general interaction with Actor Sheets - Abstract class.
 *
 * ActorSheetWfrp4e provides the general interaction and data organization shared among all 
 * actor sheets, as this is an abstract class, inherited by either Character, NPC, or Creature
 * specific actor sheet classes. When rendering an actor sheet, getData() is called, which is
 * a large and key function that prepares the actor data for display, processing the raw data
 * and items and compiling them into data to display on the sheet. Additionally, this class
 * contains all the main events that respond to sheet interaction in activateListeners().
 *
 * @see   ActorWfrp4e - Data and main computation model (this.actor)
 * @see   ActorSheetWfrp4eCharacter - Character sheet class
 * @see   ActorSheetWfrp4eNPC - NPC sheet class
 * @see   ActorSheetWfrp4eCreature - Creature sheet class
 */
class ActorSheetWfrp4e extends ActorSheet {


  /**
   * Return the type of the current Actor.
   * @return {String} Actor type - character, npc, or creature 
   */
  get actorType() {
    return this.actor.data.type;
  }

  /**
   * Overrides the default ActorSheet.render to add functionality.
   * 
   * This function adds scroll position saving support, as well as tooltips for the
   * custom buttons.
   * 
   * @param {bool} force      used upstream.
   * @param {Object} options  used upstream.
   */
  async _render(force = false, options = {}) {
    this._saveScrollPos(); // Save scroll positions
    await super._render(force, options);
    this._setScrollPos();  // Set scroll positions

    // Add Tooltips
    $(this._element).find(".close").attr("title", "Close");
    $(this._element).find(".configure-sheet").attr("title", "Configure Sheet");
    $(this._element).find(".configure-token").attr("title", "Configure Token");
    $(this._element).find(".import").attr("title", "Import");
  }

    /**
     * Saves all the scroll positions in the sheet for setScrollPos() to use
     * 
     * All elements in the sheet that use ".save-scroll" class has their position saved to
     * this.scrollPos array, which is used when rendering (rendering a sheet resets all 
     * scroll positions by default).
     */
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

    /**
     * Sets all scroll positions to what was saved by saveScrollPos()
     * 
     * All elements in the sheet that use ".save-scroll" class has their position set to what was
     * saved by saveScrollPos before rendering. 
     */
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
   * Provides the data to the template when rendering the actor sheet
   * 
   * This function is called when rendering the sheet, where it calls the base actor class
   * to organize, process, and prepare all actor data for display. See ActorWfrp4e.prepare()
   * 
   * @returns {Object} sheetData    Data given to the template when rendering
   */
  getData() {
    const sheetData = super.getData();
    mergeObject(sheetData.actor, this.actor.prepare())
    sheetData.isGM = game.user.isGM;
    return sheetData;
  }


  /**
   * Takes the user-entered hp value and interprets it as relative or absolute
   * and modifies the hp accordingly. 
   * 
   * Takes an either relative (+12 or -5) or an absolute value (12 or 5), interprets
   * it, and processes it with the actor's hp value.
   * 
   * @param {String} value   user entered value 
   */
  _modifyWounds(value)
  {
    let sign = value.split('')[0] // Sign is the first character entered
    let wounds;
    if (sign == "+" || sign == "-") // Relative
      wounds = eval(this.actor.data.data.status.wounds.value + parseInt(inputValue))
    else                            // Absolute
      wounds = parseInt(inputValue);
    
    this.actor.update({"data.status.wounds.value" : wounds});
  }

  /* --------------------------------------------------------------------------------------------------------- */
  /* ------------------------------------ Event Listeners and Handlers --------------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /**
   * This gargatuan list is all the interactions shared between all types of sheets. Every button click and text
   * fields that require special interaction are handled here. See each event handler for more details. 
   *
  /* --------------------------------------------------------------------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html)
  {
    super.activateListeners(html);

    // Activate tabs
    new Tabs(html.find(".tabs"), {
      initial: this.actor.data.flags["_sheetTab"],
      callback: clicked => this.actor.data.flags["_sheetTab"] = clicked.attr("data-tab")
    });

    // Item summaries - displays a customized dropdown description
    html.find('.item-dropdown').click(event => this._onItemSummary(event));

    // Item Properties - depending on the item property selected, display a dropdown definition, this can probably be consolidated...TODO
    html.find('.melee-property-quality, .melee-property-flaw, .ranged-property-quality, .ranged-property-flaw, .armour-quality, .armour-flaw').click(event => this._expandProperty(event));

    // Other dropdowns - for other clickables (range, weapon group, reach) - display dropdown helpers
    html.find('.weapon-range, .weapon-group, .weapon-reach').click(event => this._expandInfo(event));

    // Autoselect entire text 
    $("input[type=text]").click(function() {
      $(this).select();
    });

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

  
    // Use customized input interpreter when manually changing wounds 
    html.find(".wounds-value").change(event => {
        this._modifyWounds(event.target.text)
      })

    // This disgusting mess allows characteristics to be tabbed through. (Used only by Creature and NPC sheets, placed here to maintain DRY code)
    // This specific function is for keydown, specifically looking for tabs (which shouldn't update immediately or else it disrupts the user), see the listener below for more behavior
    html.find(".ch-edit").keydown(event => {
    if (event.keyCode == 9) // If Tabbing out of a characteristic input, save the new value (and future values) in updateObj
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

  // 
  html.find('.ch-edit').focusout(async event => {
    event.preventDefault();
    // Do not proceed with an update until the listener aboves sets this flag to true or the last characteristic was tabbed
    if (!this.charUpdateFlag && event.currentTarget.attributes["data-char"].value != "fel") 
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


  // Similar to the handlers above, but for skills (and all actor types) 
  html.find('.skill-advances').keydown(async event => {
    // Wait to update if user tabbed to another skill
    if (event.keyCode == 9)
    {
      this.skillUpdateFlag = false;
    }
    else
    {
      this.skillUpdateFlag = true;
    }
  });


  // Records skill advance edits and updates the actor if the listener above sets the flag to true
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
  // I don't remember why this was added ¯\_(ツ)_/¯ TODO: evaluate
  html.find('.skill-advances').focusin(async event => {
    event.target.focus();
  });

  // Ammo selector in the combat tab - change the currentAmmo value of the item to the selected value
  html.find('.ammo-selector').change(async event => {
    let itemId = Number(event.target.attributes["data-item-id"].value);
    const itemToEdit = this.actor.getOwnedItem(itemId).data;
    itemToEdit.data.currentAmmo.value = Number(event.target.value);
    await this.actor.updateOwnedItem(itemToEdit, true);
  });


  // Spells & Ingredients - ingredients can map to one spell, so any spell may have 0 to N available ingredients, but ingredients can only have 0 to 1 spell
  // ingredient.spellIngredient - what spell this ingredient maps to
  // spell.currentIng - what ingredient a spell is using currently (selected)

  // Spell selector for ingredients - change the spellIngredient value of the item to the selected spell
  html.find('.spell-selector').change(async event => {
    let itemId = Number(event.target.attributes["data-item-id"].value);
    const ing = this.actor.getOwnedItem(itemId).data;
    ing.data.spellIngredient.value = Number(event.target.value);
    await this.actor.updateOwnedItem(ing, true);
  });

  // Ingredient Selector for spells - change the currently used ingredient to the selected value
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

  // Skill Tests (right click to open skill sheet)
  html.find('.skill-total, .skill-select').mousedown(ev => {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    let skill = this.actor.getOwnedItem(itemId)

    if (ev.button == 0)
      this.actor.setupSkill(skill.data);

    else if (ev.button == 2)
      skill.sheet.render(true);
  })

  // Weapon tests (combat tab)
  html.find('.weapon-item-name').click(event => {
    event.preventDefault();
    let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
    let attackType = $(event.currentTarget).parents(".inventory-list").attr("data-weapon-type");
    let weapon = this.actor.getOwnedItem(itemId);
    if (weapon)
      this.actor.setupWeapon(duplicate(weapon.data), {attackType : attackType});
  })

  // Unarmed attack button (fist in the combat tab)
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

  // Roll a trait (right click to show dropdown description)
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

  // Roll a spell (right click to show dropdown description)
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

  // Roll a prayer (right click to show dropdown description)
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

  // Change the AP Damaged value in the combat tab based no left click or right click
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

  // Change the Weapon Damage value in the combat tab based on left click or right click (damage TO weapon)
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

  // Toggle whether a spell is memorized
  html.find('.memorized-toggle').click(async ev => {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    const spell = this.actor.getOwnedItem(itemId).data
    spell.data.memorized.value = !spell.data.memorized.value;
    await this.actor.updateOwnedItem(spell, true);
  });

  // Manually increment/decrement spell SL for channelling 
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

  // Change auto calculation flags on right click
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

  // Roll a disease and then right click decrement once rolled
  html.find('.disease-roll').mousedown(async ev =>  {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    const disease = this.actor.getOwnedItem(itemId).data;
    let type = ev.target.attributes.class.value.split(" ")[0].trim(); // Incubation or duration

    // If left click - TODO: Enum
    if (ev.button == 0)
    { // Parse disease length and roll it
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
    // If right click
    else if (ev.button == 2)
    {
      if(disease.data[type].roll) // If the disease has been rolled - decrement the value
      {
        let number = Number(disease.data[type].roll.split(" ")[0]) - 1;
        let timeUnit = disease.data[type].roll.split(" ")[1];
        disease.data[type].roll = `${number} ${timeUnit}`;
      }
      this.actor.updateOwnedItem(disease);
    }
  });

  // Increment/Decrement Fate/Fortune/Resilience/Resolve
  html.find('.metacurrency-value').mousedown(async ev =>  {
    let type = $(ev.currentTarget).attr("data-point-type");
    let newValue = ev.button == 0 ? this.actor.data.data.status[type].value + 1 : this.actor.data.data.status[type].value - 1 
    this.actor.update({[`data.status.${type}.value`] : newValue})
  });


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

  // Remove Inventory Item from Container - change location value to 0
  html.find('.item-remove').click(ev => {
    let li = $(ev.currentTarget).parents(".item"),
      itemId = Number(li.attr("data-item-id"));
    const item = this.actor.getOwnedItem(itemId).data
    item.data.location.value = 0;
    this.actor.updateOwnedItem(item, true);
  });

  // Toggle Count Enc for containers 
  html.find('.toggle-enc').click(ev => {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    let item = this.actor.getOwnedItem(itemId).data
    item.data.countEnc.value = !item.data.countEnc.value;
    this.actor.updateOwnedItem(item, true);
  });

  // Switch an item's toggle, such as wearing armor, clothing, or equipping weapons
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

  // Toggle whether a container is worn
  html.find('.worn-container').click(ev => {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    let item = this.actor.getOwnedItem(itemId).data
    item.data.worn.value = !item.data.worn.value;
    this.actor.updateOwnedItem(item, true);
  });

  // Increment or decrement an items quantity by 1 or 10 (if holding crtl)
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

  // Clicking the 'Qty.' label in an inventory section - aggregates all items with the same name
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

  
  // Right click - duplicate option for trappings
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
        // Characteristic button
        case "C":
          // TODO: this could do with a refactor
          // Characteristics is a bit confusing due to 

          // creatureMethod means -10 + 2d10 
          let creatureMethod = false;
          let characteristics = duplicate (this.actor.data.data.characteristics);

          if (this.actor.data.type == "creature" || !species)
            creatureMethod = true;

          // This if will do another test to see if creatureMethod should be used - If the user has modified the initial values, use creatureMethod
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

          // Get species characteristics
          if (!creatureMethod)
          {
            let rolledCharacteristics = WFRP_Utility.speciesCharacteristics(species, false);
            for (let char in rolledCharacteristics)
            {
              characteristics[char].initial = rolledCharacteristics[char];
            }
            await this.actor.update({"data.characteristics" : characteristics})
          }

          // creatureMethod: -10 + 2d10 for each characteristic
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

        // Skills button
        case "S":
          this.actor._advanceSpeciesSkills()
          return

        // Talents button
        case "T":
          this.actor._advanceSpeciesTalents()
          return
      }
    }
    catch (error)
    {
      console.log("Could not randomize: " + error)
    }

  });


  // Post Item to chat
  html.find(".item-post").click(ev => {
    let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
    const item = this.actor.getOwnedItem(itemId);
    item.postItem();
  })

  // Creature and NPC sheets - click on the 'name' label to generate a name
  html.find(".name-gen").click(ev => {
    let name = NameGenWfrp.generateName({species : this.actor.data.data.details.species.value, gender : this.actor.data.data.details.gender.value})
    this.actor.update({"name" : name});
  })

  // Item Dragging
  let handler = ev => this._onDragItemStart(ev);
  html.find('.item').each((i, li) => {
    li.setAttribute("draggable", true);
    li.addEventListener("dragstart", handler, false);
  });
  }

  /* --------------------------------------------------------------------------------------------------------- */
  /* -------------------------------------------- Private Functions ------------------------------------------ */
  /* --------------------------------------------------------------------------------------------------------- */
  /**
   * These functions are helpers for sheet html interaction or functionality. Mostly handling drag/drop and 
   * dropdown events.
   *
  /* --------------------------------------------------------------------------------------------------------- */



  /**
   * Sets up the data transfer within a drag and drop event. This function is triggered
   * when the user starts dragging an inventory item, and dataTransfer is set to the 
   * relevant data needed by the _onDrop function. See that for how drop events
   * are handled.
   * 
   * @private
   * 
   * @param {Object} event    event triggered by item dragging
   */
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

  /**
   * Handles all different types of drop events and processes the transfer data
   * for each type.
   * 
   * Current types: 
   * Inventory tab - placing trappings in containers
   * Posted Items - Dragging an item posted from chat onto the character sheet
   * Generation - Dragging any character generation result onto the character sheet (which has its own subtypesS)
   * 
   * If you want to see how these (except inventory tab) drag events are generated, see the renderChatMessage hook
   * 
   * @private 
   * @param {Object} event     event triggered by item dropping
   */
  async _onDrop(event) // TODO: This function needs a heavy refactor because it's quite gross
  { 
    var dragData = event.dataTransfer.getData("text/plain");
    var dropID = Number($(event.target).parents(".item").attr("data-item-id")); // Only relevant if container drop

    // Inventory Tab - Containers
    if ($(event.target).parents(".item").attr("inventory-type") == "container")
    {
      var dragItem = this.actor.getOwnedItem(JSON.parse(dragData).data.id);
      if (dragItem.data.id == dropID) // Prevent placing a container within itself (we all know the cataclysmic effects that can cause)
        throw "";
      else if (dragItem.data.type == "container" && $(event.target).parents(".item").attr("last-container")) 
          throw "Cannot add container past the 4th nested container"

      else if (dragItem.data.type == "container") 
      {
        // If container A has both container B and container C, prevent placing container B into container C without first removing B from A
        // This resolves a lot of headaches around container loops and issues of that natures
        if (JSON.parse(dragData).root == $(event.target).parents(".item").attr("root")) 
        {
          ui.notifications.error("Remove the container before changing its location");
          throw "Remove the container before changing its location";
        }
      }
      dragItem.data.data.location.value = dropID; // Change location value of item to the id of the container it is in

      //  this will unequip/remove items like armor and weapons when moved into a container
      if (dragItem.data.type == "armour")
        dragItem.data.data.worn.value = false;
      if (dragItem.data.type == "weapon")
        dragItem.data.data.equipped = false;
      if (dragItem.data.type == "trapping" && dragItem.data.data.trappingType.value == "clothingAccessories")
        dragItem.data.data.worn = false;


      await this.actor.updateOwnedItem(dragItem.data, true);
    }
    // Dropping an item from chat
    else if (JSON.parse(dragData).postedItem)
    {
      this.actor.createOwnedItem(JSON.parse(dragData).data);
    }
    // Dropping a character creation result
    else if (JSON.parse(dragData).generation)
    {
      let transfer = JSON.parse(dragData)

      let data = duplicate(this.actor.data.data);
      if (transfer.type == "attributes") // Characteristsics, movement, metacurrency, etc.
      {
        data.details.species.value = transfer.payload.species;
        data.details.move.value = transfer.payload.movement;

        if (this.actor.data.type == "character") // Other actors don't care about these values
        {
          data.status.fate.value = transfer.payload.fate;
          data.status.fortune.value = transfer.payload.fate;
          data.status.resilience.value = transfer.payload.resilience;
          data.status.resolve.value = transfer.payload.resilience;
          data.details.experience.total += transfer.payload.exp;
        }
        for (let c in WFRP4E.characteristics)
        {
          data.characteristics[c].initial = transfer.payload.characteristics[c]
        }
        await this.actor.update({"data" : data})
      }
      else if (transfer.type == "details") // hair, name, eyes
      {
        data.details.eyecolour.value = transfer.payload.eyes
        data.details.haircolour.value = transfer.payload.hair
        let name = transfer.payload.name
        await this.actor.update({"name" : name, "data" : data})
      }


    }
    // This is included in character creation, but not limited to.
    // lookupType is either skill or talent. Instead of looking up the
    // data on the drag event (could cause a delay), look it up on drop
    else if (JSON.parse(dragData).lookupType)
    {
      let transfer = JSON.parse(dragData)
      let item;
      if (transfer.lookupType == "skill")
      {
        // Advanced find function, returns the skill the user expects it to return, even with skills not included in the compendium (Lore (whatever))
        item = await WFRP_Utility.findSkill(transfer.name)
      }
      else if (transfer.lookupType == "talent")
      {
        // Advanced find function, returns the talent the user expects it to return, even with talents not included in the compendium (Etiquette (whatever))
        item = await WFRP_Utility.findTalent(transfer.name)
      }
      else 
      {
        return
      }
      if (item)
        this.actor.createOwnedItem(item.data);
    }
    // From character creation - exp drag values
    else if (JSON.parse(dragData).exp)
    {
      let data = duplicate(this.actor.data.data);
      data.details.experience.total += JSON.parse(dragData).exp;
      await this.actor.update({"data" : data})
    }
    else // If none of the above, just process whatever was dropped upstream
    {
      super._onDrop(event)
    }
  }


  /**
   * All item types have a drop down description, this handles what is 
   * displayed for each item type and adds additional functionalities
   * and listeners.
   * 
   * @private
   * 
   * @param {Object} event    event generated by the click 
   */
  _onItemSummary(event)
  {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item"),
      item = this.actor.getOwnedItem(Number(li.attr("data-item-id"))),
      // Call the item's expandData() function which gives us what to display
      expandData = item.getExpandData( 
      {
        secrets: this.actor.owner
      });
  
    // Toggle expansion for an item
    if (li.hasClass("expanded")) // If expansion already shown - remove
    {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    }
    else
    {
      // Add a div with the item summary belowe the item
      let div = "";
      div = $(`<div class="item-summary">${expandData.description.value}</div>`);
  
      let props = $(`<div class="item-properties"></div>`);
      expandData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
      div.append(props);
      li.append(div.hide());
      div.slideDown(200);
  
      // Clickable tags
      // Post an Item Quality/Flaw
      div.on("click", ".item-property", ev =>
      {
        WFRP_Utility.postProperty(ev.target.text) 
      })
      // Post a symptom
      div.on("click", ".symptom-tag", ev =>
      {
        WFRP_Utility.postSymptom(ev.target.text)
      })
  
      // Roll a career income skill
      div.on("click", ".career-income", ev =>
      {
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
  
  /**
   * Summary for specific property selected - like a Quality description in the combat tab.
   * Works also for "Special" and "Special Ammo" properties - user entered values in the item
   * sheets.
   * 
   * 
   * @private
   * @param {Object} event    event triggered by clicking on a wweapon/armor property
   */
  _expandProperty(event)
  {
    event.preventDefault();
  
    let li = $(event.currentTarget).parents(".item"),
      property = event.target.text, // Proprety clicked on
      properties = mergeObject(WFRP_Utility.qualityList(), WFRP_Utility.flawList()), // Property names
      propertyDescr = Object.assign(duplicate(WFRP4E.qualityDescriptions), WFRP4E.flawDescriptions); // Property descriptions
  
    property = property.replace(/,/g, '').trim(); // Remove commas/whitespace
  
    let propertyKey = "";
    if (property == "Special Ammo") // Special Ammo comes from user-entry in an Ammo's Special box
    {
      let item = this.actor.getOwnedItem(Number(li.attr("data-item-id")));
      let ammo = this.actor.getOwnedItem(item.data.data.currentAmmo.value);
      // Add the special value to the object so that it can be looked up
      propertyDescr = Object.assign(propertyDescr,
      {
        "Special Ammo": ammo.data.data.special.value
      });
      propertyKey = "Special Ammo";
    }
    else if (property == "Special") // Special comes from user-entry in a Weapon's Special box
    {
      let item = this.actor.getOwnedItem(Number(li.attr("data-item-id")));
      // Add the special value to the object so that it can be looked up
      propertyDescr = Object.assign(propertyDescr,
      {
        "Special": item.data.data.special.value
      });
      item = this.actor.prepareWeaponCombat(duplicate(item.data));
      propertyKey = "Special";
    }
    else // Otherwise, just lookup the key for the property and use that to lookup the description
    {
      propertyKey = WFRP_Utility.findKey(property.split(" ")[0], properties)
    }
  
    let propertyDescription = "<b>" + property + "</b>" + ": " + propertyDescr[propertyKey];
    if (propertyDescription.includes("(Rating)"))
      propertyDescription = propertyDescription.replace("(Rating)", property.split(" ")[1])
  
    // Toggle expansion 
    if (li.hasClass("expanded"))
    {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    }
    else
    {
      let div = $(`<div class="item-summary">${propertyDescription}</div>`);
      li.append(div.hide());
      div.slideDown(200);
    }
    li.toggleClass("expanded");
  }
  
  /**
   * Summary for specific property selected - like a Quality description in the combat tab.
   * Works also for "Special" and "Special Ammo" properties - user entered values in the item
   * sheets.
   * 
   * 
   * @private
   * @param {Object} event    event triggered by clicking on range, reach, etc.
   */
  _expandInfo(event)
  {
    event.preventDefault();
    let li = $(event.currentTarget).parents(".item");
    let classes = $(event.currentTarget);
    let expansionText = "";

    // Breakdown weapon range bands for easy reference (clickable, see below)
    if (classes.hasClass("weapon-range"))
    {
      let range = parseInt(event.target.text);
      expansionText =
        `<a class="range-click" data-range="easy">0 yd - ${Math.ceil(range / 10)} yds: ${WFRP4E.rangeModifiers["Point Blank"]}</a><br>
          <a class="range-click" data-range="average">${(Math.ceil(range / 10) + 1)} yds - ${Math.ceil(range / 2)} yds: ${WFRP4E.rangeModifiers["Short Range"]}</a><br>
          <a class="range-click" data-range="challenging">${(Math.ceil(range / 2) + 1)} yds - ${range} yds: ${WFRP4E.rangeModifiers["Normal"]}</a><br>
          <a class="range-click" data-range="difficult">${(range + 1)} yds - ${range * 2} yds: ${WFRP4E.rangeModifiers["Long Range"]}</a><br>
          <a class="range-click" data-range="vhard">${(range * 2 + 1)} yds - ${range * 3} yds: ${WFRP4E.rangeModifiers["Extreme"]}</a><br>`;
    }
    // Expand the weapon's group description
    else if (classes.hasClass("weapon-group"))
    {
      let weaponGroup = event.target.text;
      let weaponGroupKey = "";
      weaponGroupKey = WFRP_Utility.findKey(weaponGroup, WFRP4E.weaponGroups);
      expansionText = WFRP4E.weaponGroupDescriptions[weaponGroupKey];
    }
    // Expand the weapon's reach description
    else if (classes.hasClass("weapon-reach"))
    {
      let reach = event.target.text;
      let reachKey;
      reachKey = WFRP_Utility.findKey(reach, WFRP4E.weaponReaches);
      expansionText = WFRP4E.reachDescription[reachKey];
    }
  
    // Toggle expansion 
    if (li.hasClass("expanded"))
    {
      let summary = li.children(".item-summary");
      summary.slideUp(200, () => summary.remove());
    }
    else
    {
      let div = $(`<div class="item-summary">${expansionText}</div>`);
      li.append(div.hide());
      div.slideDown(200);
  
      // When a rangeband is clicked, start a test at that difficulty
      div.on("click", ".range-click", ev =>
      {
        let difficulty = $(ev.currentTarget).attr("data-range")
  
        let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
        let attackType = $(event.currentTarget).parents(".inventory-list").attr("data-weapon-type");
        let weapon = this.actor.getOwnedItem(itemId);
        if (weapon)
          this.actor.setupWeapon(duplicate(weapon.data),
          {
            attackType: attackType,
            difficulty: difficulty
          });
      })
  
    }
    li.toggleClass("expanded");
  
  
  }
  
  
  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @private
   * @param {Object} event    event triggered by clicking on the + button for any item list
   *  
   */
  _onItemCreate(event)
  {
    event.preventDefault();
    let header = event.currentTarget,
      data = duplicate(header.dataset);
  
  
    // Conditional for creating skills from the skills tab - sets to the correct skill type depending on column
    if (event.currentTarget.attributes["data-type"].value == "skill")
    {
      data = mergeObject(data,
      {
        "data.advanced.value": event.currentTarget.attributes["data-skill-type"].value
      });
    }
  
    // Conditional for creating Trappings from the Trapping tab - sets to the correct trapping type
    if (event.currentTarget.attributes["data-type"].value == "trapping")
      data = mergeObject(data,
      {
        "data.trappingType.value": event.currentTarget.attributes["item-section"].value
      })
  
    // Conditional for creating spells/prayers from their tabs, create the item with the correct type
    else if (data.type == "spell" || data.type == "prayer")
    {
      let itemSpecification = event.currentTarget.attributes[`data-${data.type}-type`].value;
  
      if (data.type == "spell")
      {
        data = mergeObject(data,
        {
          "data.lore.value": itemSpecification
        });
      }
      else if (data.type == "prayer")
      {
        data = mergeObject(data,
        {
          "data.type.value": itemSpecification
        });
      }
    }
    data["img"] = "systems/wfrp4e/icons/blank.png";
    data["name"] = `New ${data.type.capitalize()}`;
    this.actor.createOwnedItem(data, true,
    {
      renderSheet: true
    });
  }
  
  /**
   * Duplicates an owned item given its id.
   * 
   * @param {Number} itemId   Item id of the item being duplicated
   */
  duplicateItem(itemId)
  {
    let item = this.actor.getOwnedItem(itemId);
    this.actor.createOwnedItem(item.data);
  }

  /* -------------------------------------------- */
}

Actors.unregisterSheet("core", ActorSheet);
