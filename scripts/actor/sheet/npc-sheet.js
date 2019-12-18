


class ActorSheetWfrp4eNPC extends ActorSheetWfrp4e {
    static get defaultOptions() {
      const options = super.defaultOptions;
      mergeObject(options, {
        classes: options.classes.concat(["wfrp4e", "actor", "npc-sheet"]),
        width: 610,
        height: 740,
      });
  
  
      return options;
    }
  
  
    /**
     * Get the correct HTML template path to use for rendering this particular sheet
     * @type {String}
     */
    get template() {
      if ( !game.user.isGM && this.actor.limited ) return "systems/wfrp4e/templates/actors/actor-limited.html";
      return "systems/wfrp4e/templates/actors/npc-sheet.html";
    }
  
  
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
      let advancesNeeded = careerData.level.value * 5;
  
      for (let advChar of careerData.characteristics)
        if (this.actor.data.data.characteristics[advChar].advances < 5 * careerData.level.value)
          updateObj[`data.characteristics.${advChar}.advances`] = 5 * careerData.level.value;
  
      for (let skill of careerData.skills)
        await this._advanceSkill(skill, advancesNeeded);
  
      for (let talent of careerData.talents)
        await this._advanceTalent(talent);
  
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
  
      if (!this.options.editable) return;
  
        html.find('.ch-roll').click(event => {
          event.preventDefault();
          let characteristic = $(event.currentTarget).attr("data-char");
          this.actor.setupCharacteristic(characteristic, event);
        });
  
        
  
        html.find('.npc-career').click(event => {
          event.preventDefault();
          let id = Number($(event.currentTarget).parents(".item").attr("data-item-id"));
          let careerItem = duplicate(this.actor.getOwnedItem(id).data);
          careerItem.data.complete.value = !careerItem.data.complete.value
          if (careerItem.data.complete.value)
            this._advanceNPC(careerItem.data)
  
          this.actor.updateOwnedItem({id : id, 'data' : careerItem.data});
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
  