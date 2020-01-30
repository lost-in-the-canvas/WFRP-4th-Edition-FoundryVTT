/**
 * Override and extend the basic :class:`ItemSheet` implementation
 */
class ItemSheetWfrp4e extends ItemSheet {
    constructor(item, options) {
      super(item, options);
      this.mce = null;
    }
  
  
      _getHeaderButtons() {
      let buttons = super._getHeaderButtons();
      if ( game.user.isGM && this.options.editable ) {
        buttons.push(
          {
            // label: "Close",
            class: "post",
            icon: "fas fa-comment",
            onclick: ev => this.item.postItem()
          })
    }
    return buttons
  }
  
  async _render(force = false, options = {})
  {
    await super._render(force, options);
    $(this._element).find(".close").attr("title", "Close");
    $(this._element).find(".configure-sheet").attr("title", "Configure Sheet");
    $(this._element).find(".post").attr("title", "Post to chat");
    $(this._element).find(".import").attr("title", "Import");
  
  }
  
  
    /**
     * Use a type-specific template for each different item type
     */
    get template() {
      let type = this.item.type;
      return `systems/wfrp4e/templates/items/item-${type}-sheet.html`;
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
        data['characteristics'] = WFRP4E.characteristics;
        data['skillGroup'] = WFRP4E.skillGroup;
        data['skillTypes'] = WFRP4E.skillTypes;
      }
      else if (this.item.type === "talent")
      {
        data['talentMaxs'] = WFRP4E.talentMax;
      }
      else if (this.item.type == "weapon")
      {
        data['weaponGroups'] = WFRP4E.weaponGroups;
        data['availability'] = WFRP4E.availability;
        data['weaponReaches'] = WFRP4E.weaponReaches
        data['ammunitionGroups'] = WFRP4E.ammunitionGroups;
      }
      else if (this.item.type == "ammunition")
      {
        data['availability'] = WFRP4E.availability;
        data['ammunitionGroups'] = WFRP4E.ammunitionGroups;
      }
      else if (this.item.type == "armour")
      {
        data['armorTypes'] = WFRP4E.armorTypes;
        data['availability'] = WFRP4E.availability;
      }
      else if (this.item.type == "spell")
      {
        if (WFRP4E.magicLores[this.item.data.data.lore.value])
        {
          data["loreValue"] = WFRP4E.magicLores[this.item.data.data.lore.value]
        }
        else
        {
          data["loreValue"] = this.item.data.data.lore.value;
        }
        data["descriptionAndLore"] = WFRP_Utility._spellDescription(this.item.data)
  
      }
      else if (this.item.type == "prayer")
      {
        data['prayerTypes'] = WFRP4E.prayerTypes;
      }
  
  
      else if (this.item.type == "career")
      {
        data['statusTiers'] = WFRP4E.statusTiers;
        data['skills'] = data.data.skills.toString();
        data['earningSkills'] = data.data.incomeSkill.map(function(item) {
          return data.data.skills[item];
        });
        data['talents'] = data.data.talents.toString();
        data['trappings'] = data.data.trappings.toString();
        let characteristicList = duplicate(WFRP4E.characteristicsAbbrev);
        for (let char in characteristicList)
        {
          if(data.data.characteristics.includes(char))
            characteristicList[char] = {abrev : WFRP4E.characteristicsAbbrev[char], checked : true};
         else
          characteristicList[char] = {abrev : WFRP4E.characteristicsAbbrev[char], checked : false};
        }
        data['characteristicList'] = characteristicList;
  
      }
  
      else if (this.item.type == "trapping")
      {
        data['trappingTypes'] = WFRP4E.trappingTypes;
        data['availability'] = WFRP4E.availability;
      }
  
      else if (this.item.type == "trait")
      {
        data['characteristics'] = WFRP4E.characteristics;
      }
  
      else if (this.item.type == "container")
      {
        data['availability'] = WFRP4E.availability;
      }
  
      else if (this.item.type == "mutation")
      {
        data['mutationTypes'] = WFRP4E.mutationTypes;
      }
  
      data.isGM = game.user.isGM;
      return data;
    }
  
    /* -------------------------------------------- */
  
    /**
     * Activate listeners for interactive item sheet events
     */
    activateListeners(html) {
      super.activateListeners(html);
  
  
        // Activate tabs
      new Tabs(html.find(".tabs"), {
        initial: this.item.data.flags["_sheetTab"],
        callback: clicked => this.item.data.flags["_sheetTab"] = clicked.attr("data-tab")
      });
  
      // Checkbox changes
      html.find('input[type="checkbox"]').change(event => this._onSubmit(event));
  
      html.find('.lore-input').change(async event => {
        let inputLore = event.target.value;
        for (let lore in WFRP4E.magicLores)
        {
          if (inputLore == WFRP4E.magicLores[lore])
          {
            let folder = game.folders.entities.find(f => f.name == "Lore of " + WFRP4E.magicLores[lore])
  
            await this.item.update({'data.lore.value' : lore});
           // await this.item.update({'img' : `systems/wfrp4e/icons/spells/${lore}.png`})
           // await this.item.update({"name" : this.item.data.data.name + " ("+WFRP4E.magicLores[lore]+")"});
           // if (folder)
           //   await this.item.update({"folder" : folder.id})
            return;
          }
        }
        await this.item.update({'data.lore.value' : inputLore}); // If lore not recognized, save input as lore directly (custom lore)
  
      }),
  
  
      html.find('.char-checkbox').click(async event => {
        this._onSubmit(event);
        let charChanged = $(event.currentTarget).attr("name")
  
        let characteristicList = duplicate(this.item.data.data.characteristics);
  
        if (characteristicList.includes(charChanged))
          characteristicList.splice(characteristicList.findIndex(c => c == charChanged));
        else
          characteristicList.push(charChanged);
  
        await this.item.update({'data.characteristics' : characteristicList})
  
      }),
  
      html.find(".item-checkbox").click(async event => {
        this._onSubmit(event);
        let target = $(event.currentTarget).attr("data-target");
        let path = target.split(".");
        this.item.update({[`data.${target}`] : !this.item.data.data[path[0]][path[1]]})
      }),
  
      // This listener converts comma separated lists in the career section to arrays,
      // placing them in the correct location using update
      html.find('.csv-input').change(async event => {
          this._onSubmit(event);
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
              let skillIndex = this.item.data.skills.indexOf(list[Number(sk)])
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

      html.on("click", ".chat-roll", ev => {
        WFRP_Utility.handleRollClick(ev)
      })

      html.on("click", ".symptom-tag", ev => {
        WFRP_Utility.handleSymptomClick(ev)
      })

      html.on("click", ".condition-chat", ev => {
        WFRP_Utility.handleConditionClick(ev)
      })
      
      html.on('mousedown', '.table-click', ev => {
        WFRP_Utility.handleTableClick(ev)
      })

    }
  }

// Override CONFIG

try 
{
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("wfrp4e", ItemSheetWfrp4e, {makeDefault: true});
}
catch // 0.3.4 and earlier compatibility
{
  WFRP4E.Item.sheetClass = ItemSheetWfrp4e;
}