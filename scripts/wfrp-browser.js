class BrowserWfrp4e extends Application
{
  constructor(app)
  {
    super(app)

    this.filters = {
      type : {
        "ammunition" : false,
        "armour" : false,
        "career" : false,
        "container" : false,
        "critical" : false,
        "disease" : false,
        "injury" : false,
        "money" : false,
        "mutation" : false,
        "prayer" : false,
        "psychology" : false,
        "talent" : false,
        "trapping" : false,
        "skill" : false,
        "spell" : false,
        "trait" : false,
        "weapon" : false
      },
      attribute : {
        name : "",
        description: "",
      },
      dynamic : {
        careergroup : {value : "", type : ["career"], show : false},
        class : {value : "", type : ["career"], show : false},
        level : {value : "", type : ["career"], show : false},
        statusTier : {value : "", type : ["career"], show : false},
        statusStanding : {value : "", relation : "", type : ["career"], show : false},
        characteristics : {value : [], type : ["career"], show : false},
        ammunitionType : {value : "", exactMatch : true, type : ["ammunition"], show : false},
        skills : {value : [], type : ["career"], show : false},
        talents : {value : [], type : ["career"], show : false},
        encumbrance : {value : "", relation : "", type : ["ammunition", "armour", "weapon", "container", "trapping"], show : false},
        availability : {value : "", type : ["ammunition", "armour", "weapon", "container", "trapping"], show : false},
        modifiesDamage : {value : false, type : ["ammunition"], show : false},
        modifiesRange : {value : false, type : ["ammunition"], show : false},
        qualitiesFlaws : {value : [], type : ["ammunition", "armour", "weapon"], show : false},
        armorType : {value : "", type : ["armour"], show : false},
        protects : {value : {head : true, body: true, arms : true, legs : true}, type : ["armour"], show : false},
        carries : {value : "", relation : "", type : ["container"], show : false},
        location : {value : "", type : ["critical", "injury"], show : false},
        wounds : {value : "", relation : "", type : ["critical"], show : false},
        symptoms : {value : [],  type : ["disease"], show : false},
        mutationType : {value : "",  type : ["mutation"], show : false},
        god : {value : "",  type : ["prayer"], show : false},
        prayerType : {value : "",  type : ["prayer"], show : false},
        range : {value : "",  type : ["prayer", "spell"], show : false},
        duration : {value : "", type : ["prayer", "spell"], show : false},
        target : {value : "",  type : ["prayer", "spell"], show : false},
        cn : {value : "", relation : "",  type : ["spell"], show : false},
        magicMissile : {value : false,  type : ["spell"], show : false},
        aoe : {value : false,  type : ["spell"], show : false},
        lore : {value : "", type : ["spell"], show : false},
        extendable : {value : "", type : ["spell"], show : false},
        max : {value : "", type : ["talent"], show : false},
        tests : {value : "", type : ["talent"], show : false},
        trappingType : {value : "", type : ["trapping"], show : false},
        characteristic : {value : "", type : ["skill"], show : false},
        grouped : {value : "", type : ["skill"], show : false},
        advanced : {value : "", type : ["skill"], show : false},
        rollable : {value : false,  type : ["trait"], show : false},
        weaponGroup : {value : "",  type : ["weapon"], show : false},
        reach : {value : "", type : ["weapon"], show : false},
        weaponRange : {value : "", relation : "", type : ["weapon"], show : false},
        melee : {value : false,  type : ["weapon"], show : false},
        ranged : {value : false,  type : ["weapon"], show : false},
        twohanded : {value : false,  type : ["weapon"], show : false},
        ammunitionGroup : {value : "",  type : ["weapon"], show : false},
      }
    }

    this.careerGroups = [];
    this.careerClasses = [];
    this.gods = [];
    this.careerTiers = [1,2,3,4]
    this.statusTiers = ["Gold", "Silver", "Brass"]
    this.lores = [];

  }

  static get defaultOptions()
  {
    const options = super.defaultOptions;
    options.id = "wfrp4e-browser";
    options.template = "systems/wfrp4e/templates/browser/browser.html"
    options.resizable = true;
    options.height = 900;
    options.width = 600;
    options.minimizable = true;
    options.title = "WFRP Browser"
    return options;
  }

  async _render(force = false, options = {}) {
    this._saveScrollPos(); // Save scroll positions
    await super._render(force, options);
    this._setScrollPos(); // Save scroll positions

    if (options.textInputFocused)
    {
      $(this._element).find(options.textInputFocused).focus();
      $(this._element).find(options.textInputFocused)[0].selectionStart = $(this._element).find(options.textInputFocused)[0].value.length
    }
  }


  getData() {
    let data = super.getData();
    data.filters = this.filters;
    data.relations = ["<", "<=", "==", ">=", ">"]
    data.availability = WFRP4E.availability;
    data.ammunitionGroups = WFRP4E.ammunitionGroups;
    data.locations = ["Head", "Body", "Arm", "Leg"];
    data.mutationTypes = WFRP4E.mutationTypes;
    data.armorTypes = WFRP4E.armorTypes;
    data.gods = this.gods;
    data.weaponGroups = WFRP4E.weaponGroups
    data.weaponReaches = WFRP4E.weaponReaches;
    data.talentMax = WFRP4E.talentMax;
    data.trappingTypes = WFRP4E.trappingTypes;
    data.lores = this.lores;
    data.characteristics = WFRP4E.characteristicsAbbrev;
    data.skillTypes = WFRP4E.skillTypes
    data.skillGroup = WFRP4E.skillGroup
    data.prayerTypes = WFRP4E.prayerTypes;
    data.careerGroups = this.careerGroups;
    data.careerClasses = this.careerClasses
    data.careerTiers = this.careerTiers;
    data.statusTiers = this.statusTiers;
    data.items = this.items;

    return data;
  }

  async loadItems()
  {
    this.items = [];
    let filterId = 0;

    for (let p of game.packs)
    {
      if (p.metadata.entity == "Item")
      {
        await p.getContent().then(content => {
          for (let item of content)
          {
            if (item.type == "career")
            {
              if (!this.careerGroups.includes(item.data.data.careergroup.value))
                this.careerGroups.push(item.data.data.careergroup.value);
              if (!this.careerClasses.includes(item.data.data.class.value))
                this.careerClasses.push(item.data.data.class.value);
            }
            if (item.type == "prayer")
            {
              let godList = item.data.data.god.value.split(", ").map(i => {
                return i.trim();
              })
              godList.forEach(god => {
                if (!this.gods.includes(god))
                  this.gods.push(god);
              })
            }
            if (item.type == "spell")
            {
              if (!this.lores.includes(item.data.data.lore.value))
                this.lores.push(item.data.data.lore.value);
            }
            item.filterId = filterId;
            filterId++;
          }
          this.lores = this.lores.filter(l => l).sort((a, b) => (a > b) ? 1 : -1);
          this.lores = this.lores.map (p => {
            if (WFRP4E.magicLores[p])
              return WFRP4E.magicLores[p];
            else
              return p;
          })
          this.items = this.items.concat(content)
        })
      }
    }
    this.items = this.items.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.lores.push("None");
    this.careerGroups.sort((a, b) => (a > b) ? 1 : -1);
    this.careerClasses.sort((a, b) => (a > b) ? 1 : -1);
  }


  applyFilter(html)
  {
    let items = this.items
    let noItemFilter = true;
    let filteredItems = [];
    for (let filter in this.filters.type)
    {
      if (this.filters.type[filter])
      {
        filteredItems = filteredItems.concat(items.filter(i => i.data.type == filter))
        noItemFilter = false;
      }
    }


    if (noItemFilter)
      filteredItems = items;

    for (let filter in this.filters.attribute)
    {
      if (this.filters.attribute[filter])
      {
        switch(filter)
        {
          case "name" :
            filteredItems = filteredItems.filter(i => i.data.name.toLowerCase().includes(this.filters.attribute.name.toLowerCase()))
            break;
          case "description" :
            filteredItems = filteredItems.filter(i => i.data.data.description.value && i.data.data.description.value.toLowerCase().includes(this.filters.attribute.description.toLowerCase()))
            break;
        }
      }
    }

    this.checkDynamicFilters(html);

    for (let filter in this.filters.dynamic)
    {
      if (this.filters.dynamic[filter].show && this.filters.dynamic[filter].value)
      {
        switch(filter)
        {
          case "statusTier":
            filteredItems = filteredItems.filter(i => !i.data.data.status || (i.data.data.status && i.data.data.status.tier.toLowerCase() == this.filters.dynamic[filter].value[0].toLowerCase()))
            break;
          case "statusStanding":
            filteredItems = filteredItems.filter(i => !i.data.data.status || (i.data.data.status && this.filters.dynamic[filter].relation && eval(`${i.data.data.status.standing}${this.filters.dynamic[filter].relation}${this.filters.dynamic[filter].value}`)))
            break;
          case "qualitiesFlaws":
            if (this.filters.dynamic[filter].value.length && this.filters.dynamic[filter].value.some(x => x))
            filteredItems = filteredItems.filter(i =>
              {
                if (!i.data.data.qualities && !i.data.data.flaws)
                  return true;
                let properties = WFRP_Utility._prepareQualitiesFlaws(i.data, true)
                if (!properties.length || (properties.length == 1 && properties[0] == "Special"))
                  return;

                return this.filters.dynamic[filter].value.every(value =>
                  { return properties.find(v => v.toLowerCase().includes(value.toLowerCase())) })

              })
              break;
          case "symptoms" : {
            if (this.filters.dynamic[filter].value.length && this.filters.dynamic[filter].value.some(x => x))
            filteredItems = filteredItems.filter(i =>
              {
                if (!i.data.data.symptoms)
                  return true;
                let s = i.data.data[filter].value.split(",").map(i => {
                  return i.trim().toLowerCase();
                })
                return this.filters.dynamic[filter].value.every(f => s.find(symptom => symptom.includes(f.toLowerCase())))
              })
          }
          break;

          case "characteristics":
          case "skills":
          case "talents":
              if (this.filters.dynamic[filter].value.length && this.filters.dynamic[filter].value.some(x => x))
                filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && this.filters.dynamic[filter].value.every(value =>
                  { return i.data.data[filter].find(v => v.toLowerCase().includes(value.toLowerCase()))})))
              break;

          case "twohanded":
          case "rollable":
          case "magicMissile":
          case "wearable" :
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && this.filters.dynamic[filter].value == (!!i.data.data[filter].value)))
            break;
          case "aoe" :
              filteredItems = filteredItems.filter(i => !i.type == "spell" || (i.data.data.target && this.filters.dynamic[filter].value == i.data.data.target.aoe))
            break;
          case "extendable" :
              filteredItems = filteredItems.filter(i => !i.type == "spell" || (i.data.data.duration && this.filters.dynamic[filter].value == i.data.data.duration.extendable))
            break;

          case "melee":
            filteredItems = filteredItems.filter(i => !i.type == "weapon" || this.filters.dynamic[filter].value == !!(i.data.data.damage.meleeValue))
            break;
          case "ranged":
            filteredItems = filteredItems.filter(i => !i.type == "weapon" || this.filters.dynamic[filter].value == !!(i.data.data.damage.rangedValue))
            break;
          case "weaponRange":
            filteredItems = filteredItems.filter(i => !i.data.data.range || (i.data.data.range.value && !isNaN(i.data.data.range.value) && this.filters.dynamic[filter].relation && eval(`${i.data.data.range.value}${this.filters.dynamic[filter].relation}${this.filters.dynamic[filter].value}`)))
            break;
          case "cn" :
          case "carries" :
          case "encumbrance":
            filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && this.filters.dynamic[filter].relation && eval(`${i.data.data[filter].value}${this.filters.dynamic[filter].relation}${this.filters.dynamic[filter].value}`)))
            break;
          case "modifiesDamage":
            filteredItems = filteredItems.filter(i => !i.data.data.damage || (i.data.data.damage && this.filters.dynamic[filter].value == (!!i.data.data.damage.value)))
            break;
          case "modifiesRange":
            filteredItems = filteredItems.filter(i => !i.data.data.range || (i.data.data.range && this.filters.dynamic[filter].value == (!!i.data.data.range.value)) && i.data.data.range.value.toLowerCase() != "as weapon") // kinda gross but whatev
            break;
          case "protects":
            filteredItems = filteredItems.filter(i => {
              if (!i.data.data.maxAP)
                return true;
              let show
              if (this.filters.dynamic.protects.value.head && i.data.data.maxAP.head)
                show = true;
              if (this.filters.dynamic.protects.value.body && i.data.data.maxAP.body)
                show = true;
              if (this.filters.dynamic.protects.value.arms && (i.data.data.maxAP.lArm || i.data.data.maxAP.rArm))
                show = true;
              if (this.filters.dynamic.protects.value.legs && (i.data.data.maxAP.lLeg || i.data.data.maxAP.rLeg))
                show = true;
              return show;
            })
            break;
          case "prayerType" :
            filteredItems = filteredItems.filter(i => !i.data.data.type || (i.data.data.type && i.data.data.type.value == this.filters.dynamic.prayerType.value))
            break;
          default:
            if (this.filters.dynamic[filter].exactMatch)
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && i.data.data[filter].value.toString().toLowerCase() == this.filters.dynamic[filter].value.toLowerCase()))
            else
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && i.data.data[filter].value.toString().toLowerCase().includes(this.filters.dynamic[filter].value.toLowerCase())))
            break;
        }
      }
    }

    this.filterIds = filteredItems.map(i => i.filterId);
    let list = html.find(".browser-item")
    for (let element of list) 
    {
      if (this.filterIds.includes(Number(element.getAttribute('data-filter-id'))))
        $(element).show();
      else
        $(element).hide();
    }
  }

  checkDynamicFilters(html)
  {
    for (let dynamicFilter in this.filters.dynamic)
    {
      this.filters.dynamic[dynamicFilter].show = false;
      for (let typeFilter of this.filters.dynamic[dynamicFilter].type)
      {
        if (this.filters.type[typeFilter])
          this.filters.dynamic[dynamicFilter].show = true;
      }

      let filter = html.find(`.${dynamicFilter}`)
      if (this.filters.dynamic[dynamicFilter].show)
      {
        $(filter).show();
      }
      else
      {
        $(filter).hide();
      }
    }
  }


  activateListeners(html)
  {

    html.find(".browser-item").each((i, li) => {
      let item = this.items.find(i => i._id == $(li).attr("data-item-id"))

      li.setAttribute("draggable", true);
      li.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", JSON.stringify({
          type: item.compendium.metadata.entity,
          pack : `${item.compendium.metadata.package}.${item.compendium.metadata.name}`,
          id : item._id

        }))

      })
    })

    html.on("click", ".item-name", ev => {
      let itemId = $(ev.currentTarget).parents(".browser-item").attr("data-item-id")
      this.items.find(i => i._id == itemId).sheet.render(true);

    })

    html.on("click", ".filter", ev => {
      this.filters.type[$(ev.currentTarget).attr("data-filter")] = $(ev.currentTarget).is(":checked");
      this.applyFilter(html);
    })

    html.on("keyup", ".name-filter", ev => {
      this.filters.attribute.name = $(ev.currentTarget).val();
      this.applyFilter(html);

    })
    html.on("keyup", ".description-filter", ev => {
      this.filters.attribute.description = $(ev.currentTarget).val();
      this.applyFilter(html);
    })
    html.on("keyup change", ".dynamic-filter", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).val();
      this.applyFilter(html);
    })
    html.on("change", ".dynamic-filter-comparator", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].relation = $(ev.currentTarget).val();
      this.applyFilter(html);
    })
    html.on("change", ".csv-filter", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).val().split(",").map(i => {
        return i.trim();
      })
      this.applyFilter(html);
    })
    html.on("change", ".boolean-filter", ev => {
      if ($(ev.currentTarget).hasClass("exactMatch"))
        this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].exactMatch = $(ev.currentTarget).is(":checked");

      else if ($(ev.currentTarget).attr("data-filter"))
        this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).is(":checked");

      this.applyFilter(html);
    })
    html.on("click", ".protects-filter", ev => {
      this.filters.dynamic.protects.value[$(ev.currentTarget).attr("data-filter")] = $(ev.currentTarget).is(":checked");
      this.applyFilter(html);
    })
  }


  _saveScrollPos()
  {
    if (this.form === null)
      return;

    const html = this._element;
    if (!html) return
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
      const html = this._element;
      let lists = $(html.find(".save-scroll"));
      for (let i = 0; i < lists.length; i++)
      {
        $(lists[i]).scrollTop(this.scrollPos[i]);
      }
    }
  }

}

Hooks.on("renderCompendiumDirectory", (app, html, data) => {
  if (game.user.isGM)
  {
    const button = $(`<button class="browser-btn">Browser</button>`);
    html.find(".directory-footer").append(button);

    button.click(ev => {
      game.wfrpbrowser.render(true)
    })
  }
})

Hooks.on('init', () => {
  if (!game.wfrpbrowser)
    game.wfrpbrowser = new BrowserWfrp4e();
})

Hooks.on('ready', () => {
  if (game.user.isGM)
    game.wfrpbrowser.loadItems();
})