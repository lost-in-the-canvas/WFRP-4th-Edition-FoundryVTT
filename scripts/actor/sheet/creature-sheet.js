
/**************  CREATURE SHEET ******************/

class ActorSheetWfrp4eCreature extends ActorSheetWfrp4e {
    static get defaultOptions() {
      const options = super.defaultOptions;
      mergeObject(options, {
        classes: options.classes.concat(["wfrp4e", "actor", "creature-sheet"]),
        width: 610,
        height: 740,
      });
  
  
      return options;
    }
  
    /* -------------------------------------------- */
  
    /**
     * Get the correct HTML template path to use for rendering this particular sheet
     * @type {String}
     */
    get template() {
      if ( !game.user.isGM && this.actor.limited ) return "systems/wfrp4e/templates/actors/actor-limited.html";
      return "systems/wfrp4e/templates/actors/creature-sheet.html";
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
  
     for (let trait of actorData.traits)
     {
       if (actorData.data.excludedTraits.includes(trait.id))
       {
         trait.included = false;
       }
       else
       {
         trait.included = true;
       }
     }
  
     actorData.notesTraits = actorData.traits.sort(WFRP_Utility.nameSorter); // Display all traits in the notes section of a creature
     // Use only included traits for calculation
     actorData.traits = actorData.traits.filter(t => t.included);
  
     actorData.skills = (actorData.basicSkills.concat(actorData.advancedOrGroupedSkills)).sort(WFRP_Utility.nameSorter);
     actorData.trainedSkills = actorData.skills.filter(s => s.data.advances.value > 0) 
  
     for (let weapon of actorData.weapons)
     {
       try {
       if (weapon.data.currentAmmo.value)
        weapon.ammoName = actorData.inventory.ammunition.items.find(a => a.id == weapon.data.currentAmmo.value).name;
       }
       catch
        {weapon.data.currentAmmo.value}
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
  
    _delayedDropdown(event){
      
      if (this.clicks)
      this.clicks++;  //count clicks
    else
      this.clicks = 1;
  
    if(this.clicks === 1) 
    {
  
        this.timer = setTimeout( () => {
  
         this._onCreatureItemSummary(event);
  
          this.clicks = 0;             //after action performed, reset counter
  
        }, 250);
  
    } 
    else
    {
  
        clearTimeout(this.timer);    //prevent single-click action
        let itemId = Number($(event.currentTarget).attr("data-item-id"));
        const item = this.actor.getOwnedItem(itemId);
        item.sheet.render(true);
        this.clicks = 0;             //after action performed, reset counter
    }
  }
  
    // Creature sheet dropdowns need specific implementation to correctly display
    _onCreatureItemSummary(event) {
      event.preventDefault();
      let li = $(event.currentTarget).parent('.list'),
          item = this.actor.getOwnedItem(Number($(event.currentTarget).attr("data-item-id"))),
          expandData = item.getExpandData({secrets: this.actor.owner});
  
  
      if ( li.hasClass("expanded") ) {
        let summary = li.children(".item-summary");
        summary.slideUp(200, () => summary.remove());
      } else {
        let div = "";
        div = $(`<div class="item-summary"><b>${item.data.name}:</b>${expandData.description.value}</div>`);
  
        let props = $(`<div class="item-properties"></div>`);
        expandData.properties.forEach(p => props.append(`<span class="tag">${p}</span>`));
        div.append(props);
        li.append(div.hide());
        div.slideDown(200);
      }
      li.toggleClass("expanded");
    }



    activateListeners(html) {
      super.activateListeners(html);
  
      html.find(".content").hover(event => {
        $(event.currentTarget).focus();
      })
      html.find('.content').keydown(event => {
        if (event.keyCode == 46)
        {
          let itemId = $(event.currentTarget).attr("data-item-id");
          this.actor.deleteOwnedItem(itemId, true);
        }
      });
      html.find(".creature-dropdown").mousedown(event => {
        this._delayedDropdown(event);
    }) 
      .on("dblclick", function(e){
      e.preventDefault();  //cancel system double-click event
    });
  
      if (!this.options.editable) return;
  
      html.find(".skills.name, .skills.total").mousedown(event => {
        let newAdv
        let advAmt;
        let skill = this.actor.getOwnedItem(Number($(event.currentTarget).parents(".content").attr("data-item-id")));
  
        if (event.shiftKey || event.ctrlKey)
        {
          if (event.shiftKey)
            advAmt = 10;
          else if (event.ctrlKey)
            advAmt = 1;
        }
  
        if (event.button == 0)
        {
          if (advAmt)
          {
            newAdv = skill.data.data.advances.value + advAmt;
            this.actor.updateOwnedItem({id: skill.data.id, "data.advances.value" : newAdv})
          }
          else
            this.actor.setupSkill(skill.data);
        }
        else if (event.button == 2)
        {
          if (advAmt)
          {
            newAdv = skill.data.data.advances.value - advAmt;
            if (newAdv < 0)
              newAdv = 0;
            this.actor.updateOwnedItem({id: skill.data.id, "data.advances.value" : newAdv})
          }
          else
          {
            let itemId = Number($(event.currentTarget).parents(".content").attr("data-item-id"));
            const item = this.actor.getOwnedItem(itemId)
            item.sheet.render(true);
          }
        }
      })
  
      html.find(".traits.content").mousedown(event => {
        let trait = this.actor.getOwnedItem(Number($(event.currentTarget).attr("data-item-id")));
  
        if (event.button == 2 || !trait.data.data.rollable.value)
        {
          this._delayedDropdown(event);
          return;
        }
  
        this.actor.setupTrait(trait.data);
  
      })
  
      html.find('.ch-roll').click(event => {
        event.preventDefault();
        let characteristic = $(event.currentTarget).attr("data-char");
        this.actor.setupCharacteristic(characteristic, event);
      });
  
      html.find('.trait-name').mousedown(async event => {
        event.preventDefault();
        let traitId =  Number($(event.currentTarget).parents(".item").attr("data-item-id"));

        if (event.button == 0)
        {
          let newExcludedTraits = duplicate(this.actor.data.data.excludedTraits);
    
          if (this.actor.data.data.excludedTraits.includes(traitId))
            newExcludedTraits = newExcludedTraits.filter(i => i != traitId)
          else
            newExcludedTraits.push(traitId);
    
            await this.actor.update({"data.excludedTraits" : newExcludedTraits});

        }
        else if (event.button == 2)
        {
          this._onItemSummary(event);
        }

    });

    }
  
  }
  
  // Register Creature Sheet
  Actors.registerSheet("wfrp4e", ActorSheetWfrp4eCreature, {
    types: ["creature"],
    makeDefault: true
  });
  