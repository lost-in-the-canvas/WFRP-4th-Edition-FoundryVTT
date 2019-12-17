

class ActorSheetWfrp4eCharacter extends ActorSheetWfrp4e {
    static get defaultOptions() {
      const options = super.defaultOptions;
      mergeObject(options, {
        classes: options.classes.concat(["wfrp4e", "actor", "character-sheet"]),
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
      return "systems/wfrp4e/templates/actors/actor-sheet.html";
    }
  
    /**
     * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
     */
    getData() {
      const sheetData = super.getData();
      let tb = sheetData.actor.data.characteristics.t.bonus;
      let wpb =sheetData.actor.data.characteristics.wp.bonus;
      if (sheetData.actor.flags.autoCalcCorruption)
      {
        sheetData.actor.data.status.corruption.max = tb + wpb;
        let pureSoulTalent = sheetData.actor.talents.find(x => x.name.toLowerCase() == "pure soul")
        if (pureSoulTalent)
          sheetData.actor.data.status.corruption.max += pureSoulTalent.data.advances.value;
      }
  
  
      return sheetData;
    }
  
    activateListeners(html) {
      super.activateListeners(html);
  
      html.find('.career-toggle').click(async ev => {
        let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
        let type = $(ev.currentTarget).attr("toggle-type")
        let item = this.actor.getOwnedItem(itemId).data;
        item.data[type].value = !item.data[type].value;
  
  
         if (type == "current")
         {
           let availableCharacteristics = item.data.characteristics
           let characteristics = this.actor.data.data.characteristics;
           if (item.data.current.value)
           {
             for (let char in characteristics)
             {
               characteristics[char].career = false;
               if (availableCharacteristics.includes(char))
                 characteristics[char].career = true;
             }
           }
           else
           {
             for (let char in characteristics)
             {
               characteristics[char].career = false;
             }
           }
        this.actor.update({"data.characteristics" : characteristics})
        }
  
        // Only one career can be current - make all other careers not current
        if (type == "current" && item.data.current.value == true)
        {
          let updateCareers = duplicate(this.actor.data.items.filter(c => c.type == "career" && c.id != item.id))
          console.log(updateCareers);
          updateCareers.map(x => x.data.current.value = false)
          await this.actor.updateManyOwnedItem(updateCareers)
          console.log(this.actor.data.items.filter(c => c.type == "career"))
        }
        this.actor.updateOwnedItem(item);
      });
  
      html.find(".untrained-skill").mousedown(async ev => {
  
        let skill = await WFRP_Utility.findSkill(event.target.text);
  
        if (ev.button == 2)
        {
          skill.sheet.render(true);
        }
        else
        {
          try
          {
            new Dialog({
              title: "Add Career Skill",
              content: '<p>Do you want to add this skill?</p>',
              buttons: {
                yes: {
                  label: "Yes",
                  callback: dlg => {
                    this.actor.createOwnedItem(skill.data);
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
          catch
          {
            console.error(error)
            ui.notifications.error(error)
          }
        }
      })
  
      html.find(".untrained-talent").mousedown(async ev => {
  
        let talent = await WFRP_Utility.findTalent(event.target.text);
  
        if (ev.button == 2)
        {
          talent.sheet.render(true);
        }
  
        else
        {
          try
          {
            new Dialog({
              title: "Add Career Talent",
              content: '<p>Do you want to add this Talent? (Costs 100 Exp)</p>',
              buttons: {
                yes: {
                  label: "Yes",
                  callback: dlg => {
                    this.actor.createOwnedItem(talent.data);
                    this.actor.update({"data.details.experience.spent" : this.actor.data.data.details.experience.spent + 100})
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
          catch
          {
            console.error(error)
            ui.notifications(error)
          }
      }
  
      })
  
      html.find('.advancement-indicator').mousedown(async ev =>  {
       let data = duplicate(this.actor.data.data);
  
        let type = $(ev.target).attr("data-target");
  
        if (type == "skill")
        {
          let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
          let item = this.actor.getOwnedItem(itemId);
  
          if (ev.button == 0)
          {
            let cost = WFRP_Utility._calculateAdvCost(item.data.data.advances.value, type)
            data.details.experience.spent = Number(data.details.experience.spent) + cost;
            item.data.data.advances.value++;
            this.actor.updateOwnedItem({id : itemId, "data.advances.value": item.data.data.advances.value});
            this.actor.update({"data.details.experience.spent" : data.details.experience.spent});
          }
          else if (ev.button = 2)
          {
            if (item.data.data.advances.value == 0)
              return;
            item.data.data.advances.value--;
            let cost = WFRP_Utility._calculateAdvCost(item.data.data.advances.value, type)
            data.details.experience.spent = Number(data.details.experience.spent) - cost;
            this.actor.updateOwnedItem({id : itemId, "data.advances.value": item.data.data.advances.value});
            this.actor.update({"data.details.experience.spent" : data.details.experience.spent});
          }
        }
        else if (type == "talent")
        {
          if (ev.button == 0)
          {
          let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
          let item = this.actor.getOwnedItem(itemId);
          let preparedTalent = this.actor.data.flags.careerTalents.find(t => t.name == item.data.name)
          let spent = 0;
          if (preparedTalent.data.advances.value < preparedTalent.numMax)
          {
            spent = this.actor.data.data.details.experience.spent + (preparedTalent.data.advances.value + 1) * 100
          }
          else 
            return
          this.actor.createOwnedItem(item.data)
          this.actor.update({"data.details.experience.spent" : spent})
        }
        else if (ev.button == 2)
        {
          let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
          let item = this.actor.getOwnedItem(itemId);
          let preparedTalent = this.actor.data.flags.careerTalents.find(t => t.name == item.data.name)
          let spent = 0;
          spent = this.actor.data.data.details.experience.spent - (preparedTalent.data.advances.value) * 100
          this.actor.deleteOwnedItem(itemId)
          this.actor.update({"data.details.experience.spent" : spent})
        }

        }
        else
        {
          let characteristic = type;
          let currentChar = this.actor.data.data.characteristics[characteristic];
  
          if (ev.button == 0)
          {
            let cost = WFRP_Utility._calculateAdvCost(currentChar.advances, "characteristic");
  
            data.characteristics[characteristic].advances++;
            data.details.experience.spent = Number(data.details.experience.spent) + cost;
            await this.actor.update({"data.characteristics" : data.characteristics,
                                    "data.details.experience" : data.details.experience});
          }
          else if (ev.button == 2)
          {
            if (currentChar.advances == 0)
              return
            let cost = WFRP_Utility._calculateAdvCost(currentChar.advances - 1, "characteristic");
  
            data.characteristics[characteristic].advances--;
            data.details.experience.spent = Number(data.details.experience.spent) - cost;
            await this.actor.update({"data.characteristics" : data.characteristics,
                                    "data.details.experience" : data.details.experience});
          }
        }
    });
    }
  }
  
  // Register Character Sheet
  Actors.registerSheet("wfrp4e", ActorSheetWfrp4eCharacter, {
    types: ["character"],
    makeDefault: true
  });