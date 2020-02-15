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
        encumbrance : {value : "", relation : "", type : ["ammunition", "armour", "weapons", "container"], show : false},
        availability : {value : "", type : ["ammunition", "armour", "weapons", "container"], show : false},
        modifiesDamage : {value : false, type : ["ammunition"], show : false},
        modifiesRange : {value : false, type : ["ammunition"], show : false},
        qualitiesFlaws : {value : [], type : ["ammunition", "armour", "weapons"], show : false},
        armorType : {value : "", type : ["armour"], show : false},
        protects : {value : {head : true, body: true, arms : true, legs : true}, type : ["armour"], show : false},
        carries : {value : "", relation : "", type : ["container"], show : false},
        wearable : {value : false, relation : "", type : ["container"], show : false},
      }
    }

    this.careerGroups = [];
    this.careerClasses = [];
    this.careerTiers = [1,2,3,4]
    this.statusTiers = ["Gold", "Silver", "Brass"]
    
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
    this.checkDynamicFilters();
    data.filters = this.filters;

    data.relations = ["<", "<=", "==", ">=", ">"]
    data.availability = WFRP4E.availability;
    data.ammunitionGroups = WFRP4E.ammunitionGroups;
    data.locations = WFRP4E.locations;
    data.armorTypes = WFRP4E.armorTypes;
    data.careerGroups = this.careerGroups;
    data.careerClasses = this.careerClasses
    data.careerTiers = this.careerTiers;
    data.statusTiers = this.statusTiers;

    data.items = this.applyFilter(this.items);

    return data;
  }

  async loadItems()
  {
    this.items = [];
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
          }
          this.careerGroups.sort((a, b) => (a > b) ? 1 : -1);
          this.careerClasses.sort((a, b) => (a > b) ? 1 : -1);
          this.items = this.items.concat(content)
        })
      }
    }
  }


  applyFilter(items)
  {
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
                let properties = WFRP_Utility._prepareQualitiesFlaws(i.data, true)
                if (!properties.length || (properties.length == 1 && properties[0] == "Special"))
                  return;

                return this.filters.dynamic[filter].value.every(value => 
                  { return properties.find(v => v.toLowerCase().includes(value.toLowerCase())) })
                
              })
          case "characteristics":
          case "skills":
          case "talents":
              if (this.filters.dynamic[filter].value.length && this.filters.dynamic[filter].value.some(x => x))
                filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && this.filters.dynamic[filter].value.every(value => 
                  { return i.data.data[filter].find(v => v.toLowerCase().includes(value.toLowerCase()))})))
              break;
          
          case "wearable" :
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && this.filters.dynamic[filter].value == (!!i.data.data[filter].value)))
              break;
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
          default:
            if (this.filters.dynamic[filter].exactMatch)
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && i.data.data[filter].value.toString().toLowerCase() == this.filters.dynamic[filter].value.toLowerCase()))
            else
              filteredItems = filteredItems.filter(i => !i.data.data[filter] || (i.data.data[filter] && i.data.data[filter].value.toString().toLowerCase().includes(this.filters.dynamic[filter].value.toLowerCase())))
            break;
        }
      }
    }
    
    return filteredItems.sort((a, b) => (a.data.name > b.data.name) ? 1 : -1);
  }

  checkDynamicFilters()
  {
    for (let dynamicFilter in this.filters.dynamic)
    {
      this.filters.dynamic[dynamicFilter].show = false;
      for (let typeFilter of this.filters.dynamic[dynamicFilter].type)
      {
        if (this.filters.type[typeFilter])
          this.filters.dynamic[dynamicFilter].show = true;
      }
    }
  }


  activateListeners(html)
  {
    html.on("click", ".filter", ev => {
      this.filters.type[$(ev.currentTarget).attr("data-filter")] = $(ev.currentTarget).is(":checked");
      this.render(true);
    })

    html.on("keyup", ".name-filter", ev => {
      this.filters.attribute.name = $(ev.currentTarget).val();
      this.render(true, {textInputFocused : ".name-filter"});
    })
    html.on("keyup", ".description-filter", ev => {
      this.filters.attribute.description = $(ev.currentTarget).val();
      this.render(true, {textInputFocused : ".description-filter"});
    })
    html.on("keyup change", ".dynamic-filter", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).val();
      let options = {}
      if (ev.target.type == "text")
      {
        options["textInputFocused"] = `.${$(ev.currentTarget).attr("data-filter")}`
      }
      this.render(true, options);
    })
    html.on("change", ".dynamic-filter-comparator", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].relation = $(ev.currentTarget).val();
      this.render(true);
    })
    html.on("change", ".csv-filter", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).val().split(",").map(i => {
        return i.trim();
      })
      this.render(true);
    })
    html.on("change", ".boolean-filter", ev => {
      this.filters.dynamic[$(ev.currentTarget).attr("data-filter")].value = $(ev.currentTarget).is(":checked");
      this.render(true);
    })
    html.on("click", ".protects-filter", ev => {
      this.filters.dynamic.protects.value[$(ev.currentTarget).attr("data-filter")] = $(ev.currentTarget).is(":checked");
      this.render(true);
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