class BrowserWfrp4e extends Application
{

  constructor(app)  
  {
    super(app);
        
    // load settings
    Hooks.on('ready', e => {

      game.packs[5].getContent().then(items => {
        this.items = items;
      });
    
    });
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

    data.itemTypes = game.system.template.Item.types;

    data.items = this.items;

    return data;
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