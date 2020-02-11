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
        name : ""
      }
    }
    
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


  getData() {
    let data = super.getData();

    data.filters = this.filters;

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
            console.log("NAME FILTER")
            noItemFilter = false;

        }
      }
    }
    
    return filteredItems.sort((a, b) => (a.data.name > b.data.name) ? 1 : -1);
  }


  activateListeners(html)
  {
    html.on("click", ".filter", ev => {
      this.filters.type[$(ev.currentTarget).attr("data-filter")] = $(ev.currentTarget).is(":checked");
      this.render(true);
    })

    html.on("keyup", ".name-filter", ev => {
      this.filters.attribute.name = $(ev.currentTarget).val();
      this.render(true);
    })
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