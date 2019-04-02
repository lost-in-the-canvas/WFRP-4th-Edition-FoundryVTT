/**
 * Extend the basic ActorSheet class to do all the D&D5e things!
 */
class Actor5eSheet extends ActorSheet {

  /**
   * Extend and override the default options used by the 5e Actor Sheet
   */
	static get defaultOptions() {
	  const options = super.defaultOptions;
	  options.classes = options.classes.concat(["dnd5e", "actor-sheet"]);
    options.width = 670;
    options.height = 740;
	  return options;
  }

	/* -------------------------------------------- */

  /**
   * The actor sheet template comes packaged with the system
   */
  get template() {
    const path = "public/systems/dnd5e/templates/actors/";
    if ( this.actor.data.type === "character" ) return path + "actor-sheet.html";
    else if ( this.actor.data.type === "npc" ) return path + "npc-sheet.html";
    else throw "Unrecognized Actor type " + this.actor.data.type;
  }

	/* -------------------------------------------- */

	get actorType() {
	  return this.actor.data.type;
  }

  /* -------------------------------------------- */

  /**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const sheetData = super.getData();

    // Prepare owned items
    if ( this.actorType === "character" ) this._prepareCharacterItems(sheetData.actor);
    else if ( this.actorType === "npc" ) this._prepareNPCItems(sheetData.actor);

    // Return data to the sheet
    return sheetData;
  }

  /* -------------------------------------------- */

  /**
   * Organize and classify Items for Character sheets
   * @private
   */
  _prepareCharacterItems(actorData) {

    // Inventory
  /*  const inventory = {
      weapon: { label: "Weapons", items: [] },
      equipment: { label: "Equipment", items: [] },
      consumable: { label: "Consumables", items: [] },
      tool: { label: "Tools", items: [] },
      backpack: { label: "Backpack", items: [] },
    };

    // Spellbook
    const spellbook = {};

    // Feats
    const feats = [];

    // Classes
    const classes = [];

    // Iterate through items, allocating to containers
    let totalWeight = 0;
    for ( let i of actorData.items ) {
      i.img = i.img || DEFAULT_TOKEN;

      // Inventory
      if ( Object.keys(inventory).includes(i.type) ) {
        i.data.quantity.value = i.data.quantity.value || 1;
        i.data.weight.value = i.data.weight.value || 0;
        i.totalWeight = Math.round(i.data.quantity.value * i.data.weight.value * 10) / 10;
        i.hasCharges = (i.type === "consumable") && i.data.charges.max > 0;
        inventory[i.type].items.push(i);
        totalWeight += i.totalWeight;
      }

      // Spells
      else if ( i.type === "spell" ) {
        let lvl = i.data.level.value || 0;
        spellbook[lvl] = spellbook[lvl] || {
          isCantrip: lvl === 0,
          label: CONFIG.spellLevels[lvl],
          spells: [],
          uses: actorData.data.spells["spell"+lvl].value || 0,
          slots: actorData.data.spells["spell"+lvl].max || 0
        };
        i.data.school.str = CONFIG.spellSchools[i.data.school.value];
        spellbook[lvl].spells.push(i);
      }

      // Classes
      else if ( i.type === "class" ) {
        classes.push(i);
        classes.sort((a, b) => b.levels > a.levels);
      }

      // Feats
      else if ( i.type === "feat" ) feats.push(i);
    }

    // Assign and return
    actorData.inventory = inventory;
    actorData.spellbook = spellbook;
    actorData.feats = feats;
    actorData.classes = classes;

    // Inventory encumbrance
    let enc = {
      max: actorData.data.abilities.str.value * 15,
      value: Math.round(totalWeight * 10) / 10,
    };
    enc.pct = Math.min(enc.value * 100 / enc.max, 99);
    actorData.data.attributes.encumbrance = enc;*/
  }

  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
   */
	activateListeners(html) {
    super.activateListeners(html);

    // Pad field width
    html.find('[data-wpad]').each((i, e) => {
      let text = e.tagName === "INPUT" ? e.value : e.innerText,
        w = text.length * parseInt(e.getAttribute("data-wpad")) / 2;
      e.setAttribute("style", "flex: 0 0 " + w + "px");
    });

    // Activate tabs
    html.find('.tabs').each((_, el) => {
      let tabs = $(el),
        group = el.getAttribute("data-group"),
        initial = this.actor.data.flags[`_sheetTab-${group}`];
      new Tabs(tabs, {
        initial: initial,
        callback: clicked => this.actor.data.flags[`_sheetTab-${group}`] = clicked.attr("data-tab")
      });
    });

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    /* -------------------------------------------- */
    /*  Abilities and Skills
     /* -------------------------------------------- */

    // Ability Checks
    html.find('.ability-name').click(ev => {
      let abl = ev.currentTarget.parentElement.getAttribute("data-ability");
      this.actor.rollAbility(abl);
    });

    // Roll Skill Checks
    html.find('.skill-name').click(ev => {
      let skl = ev.currentTarget.parentElement.getAttribute("data-skill");
      this.actor.rollSkill(ev, skl);
    });

    /* -------------------------------------------- */
    /*  Rollable Items                              */
    /* -------------------------------------------- */

    html.find('.item .rollable').click(event => this._onRollItemCard(event));

    /* -------------------------------------------- */
    /*  Inventory
    /* -------------------------------------------- */

    // Create New Item
    html.find('.item-create').click(ev => {
      let type = ev.currentTarget.getAttribute("data-item-type");
      this.actor.createOwnedItem({name: "New " + type.capitalize(), type: type}, true, {renderSheet: true});
    });

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      let itemId = Number($(ev.currentTarget).parents(".item").attr("data-item-id"));
      let Item = CONFIG.Item.entityClass;
      const item = new Item(this.actor.items.find(i => i.id === itemId), this.actor);
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      let li = $(ev.currentTarget).parents(".item"),
        itemId = Number(li.attr("data-item-id"));
      this.actor.deleteOwnedItem(itemId, true);
      li.slideUp(200, () => this.render(false));
    });

    /* -------------------------------------------- */
    /*  Miscellaneous
    /* -------------------------------------------- */

    /* Item Dragging */
    let handler = ev => this._onDragItemStart(ev);
    html.find('.item').each((i, li) => {
      li.setAttribute("draggable", true);
      li.addEventListener("dragstart", handler, false);
    });
  }

  /* -------------------------------------------- */
  /*  Saving and Submission                       */
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

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers                */
  /* -------------------------------------------- */

  _onDragItemStart(event) {
    let itemId = Number(event.currentTarget.getAttribute("data-item-id"));
	  event.dataTransfer.setData("text/plain", JSON.stringify({
      type: "Item",
      actorId: this.actor._id,
      id: itemId
    }));
  }

  /* -------------------------------------------- */

  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  _onRollItemCard(event) {
    event.preventDefault();
    let itemId = Number($(event.currentTarget).parents(".item").attr("data-item-id")),
        Item = CONFIG.Item.entityClass,
        item = new Item(this.actor.items.find(i => i.id === itemId), this.actor);
    item.roll();
  }
}


CONFIG.Actor.sheetClass = Actor5eSheet;


/* -------------------------------------------- */
