/**
 * Activate certain behaviors on FVTT ready hook
 */
Hooks.once("init", () => {
  // fetch ("fgdb.json").then (r => r.json()).then(async records => {
  //   var fgtable = records["tables"]["category"]["id-00001"];
  //   var newtable = {
  //     name : "General Critical Hits",
  //     die : "1d100",
  //     rows : ["-"]
  //   }

  //   for (var fgrow in fgtable["tablerows"])
  //   {
  //     fgrow = fgtable["tablerows"][fgrow];
  //     var from = fgrow.fromrange;
  //     var to = fgrow.torange;
  //     for (var i = from; i <= to; i++)
  //     {
  //       var rowObj = {
  //         wounds : fgrow.results["id-00002"].result,
  //         name : fgrow.results["id-00001"].result,
  //         description : fgrow.results["id-00003"].result,
  //       }
  //       newtable.rows.push(rowObj);
  //     }
  //   }
  //   console.log(JSON.stringify(newtable));
  // })

  // fetch("doomings.txt").then(r => r.text()).then(t => {
  //   let array = t.split("\n").map(function(item) {
  //     return item.substring(3);
  //   });
  //   let table = {rows: [undefined]};
  //   for (let i = 0; i < array.length; i++)
  //   {
  //     table.rows.push({description : array[i]})
  //   }
  //   console.log(JSON.stringify(table));
  // })
  game.socket.emit("getFiles", "systems/wfrp4e/tables", {}, resp => {
    try 
    {
    if (resp.error)
      throw ""
    for (var file of resp.files)
    {
      try {
        if (!file.includes(".json"))
          throw "Not JSON file"
        let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));
        fetch(file).then(r=>r.json()).then(async records => {
          WFRP_Tables[filename] = records;
        })
      }
      catch(error) {
       console.error("Error reading " + file + ": " + error)
      }
    }
  }
  catch
  {
    // Do nothing
  }
  })

  WFRP_Tables.scatter = {
    die : "1d10",
    name : "Scatter",
    rows : [
      undefined,
      {
        name : "Top Left"
      },
      {
        name : "Top Middle"
      },
      {
        name : "Top Right"
      },
      {
        name : "Center Left"
      },
      {
        name : "Center Right"
      },
      {
        name : "Bottom Left"
      },
      {
        name : "Bottom Middle"
      },
      {
        name : "Bottom Right"
      },
      {
        name : "At your feet"
      },
      {
        name : "At the target's feet"
      },
    ]
  }

  WFRP_Tables.winds = {
    die : "1d10",
    name : "The Swirling Winds",
    rows : [
      undefined,
      {
        modifier : "-30"
      },
      {
        modifier : "-10"
      },
      {
        modifier : "-10"
      },
      {
        modifier : "0"
      },
      {
        modifier : "0"
      },
      {
        modifier : "0"
      },
      {
        modifier : "0"
      },
      {
        modifier : "+10"
      },
      {
        modifier : "+10"
      },
      {
        modifier : "+30"
      }
    ]
  }

  // IMPORT CODE FOR CAREERS
/* let counter = 0;
  fetch ("careers.json").then(r => r.json()).then(async records => {
    let careerData = {
      data : {}
    };

    for (let careerClass of records) {
      for (let careerGroup of careerClass.CareerPaths) {
        for (let careerTier of careerGroup.Tiers) {
          careerData.name = careerTier.Name;
          careerData.type = "career"
          careerData.data["class.value"] = careerClass.ClassName;
          careerData.data["careergroup.value"] = careerGroup.PathName;
          careerData.data["level.value"] = careerTier.Tier;

          try {
          careerData.data["status.tier"] = careerTier.StatusTier[0].toLowerCase();
          careerData.data["status.standing"] = careerTier.StatusStanding;
          }
          catch{
            careerData.data["status.tier"] = "";
            careerData.data["status.standing"] = 0;
          }
          careerData.data["characteristics"] = [];
          careerData.data["skills"] = [];
          careerData.data["talents"] = [];
          careerData.data["trappings"] = [];
          for (let careerChar of careerTier.CareerCharacteristics){
            let chCounter = 0;
            for (let ch in CONFIG.characteristics){
              if (chCounter == careerChar){
                careerData.data.characteristics.push(ch);
                break;
              }
              chCounter++;
            }
          }
          for (let skill of careerTier.CareerSkills)
            careerData.data.skills.push(skill);
          for (let talent of careerTier.CareerTalents)
            careerData.data.talents.push(talent);
          for (let trappings of careerTier.CareerTrappings)
            careerData.data.trappings.push(trappings);

          let folder = game.folders.entities.find(f => f.name == careerGroup.PathName)
          try {
          careerData.folder = folder.data._id;
          }
          catch{
            careerData.folder = undefined;
          }
          await Item.create(careerData, {displaySheet : false});
        }
    }
  }
  })*/

    // IMPORT CODE FOR TALENTS
 /* fetch ("talents.json").then(r => r.json()).then(async records => {
    let talentData = {
      data : {},
    };
    for (data of records)
{
      talentData.name = data.Name;
      talentData.type = "talent"
      for (let talentMax in CONFIG.talentMax)
        if (CONFIG.talentMax[talentMax] == data.Max)
          talentData.data['max.value'] = talentMax;
      talentData.data["tests.value"] = data.Tests;
      talentData.data["description.value"] = data.Description;
      let folder = game.data.folders.find(f => f.name == "Talents");
      talentData.folder = folder._id;
      await Item.create(talentData, {displaySheet : false});
    }
  })*/

      // IMPORT CODE FOR TRAITS
 /*fetch ("traits.json").then(r => r.json()).then(async records => {
    let traitData = {
      data : {},
    };
    for (data of records)
{
      traitData.name = data.Name;
      traitData.type = "trait"
      traitData.data["description.value"] = data.Description;
      let folder = game.data.folders.find(f => f.name == "Traits");
      traitData.folder = folder._id;
      await Item.create(traitData, {displaySheet : false});
    }
  })*/

  // Register initiative rule
  game.settings.register("wfrp4e", "initiativeRule", {
    name: "Initiative Rules",
    hint: "Configure which method is used to determine who acts first in combat.",
    scope: "world",
    config: true,
    default: "default",
    type: String,
    choices: {
      "default": "Default (Highest to Lowest Initative, Agility Tiebreaks)",
      "sl": "Roll an Initiative test, higher SL goes first",
      "d10Init": "Roll a d10 and add Initiative, higher goes first",
      "d10InitAgi": "Roll a d10, add Initiative Bonus and Agility Bonus, higher goes first"
    },
    onChange: rule => _setWfrp4eInitiative(rule)
  });
  _setWfrp4eInitiative(game.settings.get("wfrp4e", "initiativeRule"));


  function _setWfrp4eInitiative(initMethod)
  {
    let formula;
    switch (initMethod)
    {
      case "default":
      formula = "@characteristics.i.value + @characteristics.ag.value/100";
      break;

      case "sl":
      formula = "(floor(@characteristics.i.value / 10) - floor(1d100/10))"
      break;

      case "d10Init":
      formula = "1d10 + @characteristics.i.value"
      break;

      case "d10InitAgi":
      formula = "1d10 + @characteristics.i.bonus + @characteristics.ag.bonus"
      break;
    }

    let decimals = (initMethod == "default") ? 2 : 0;
    CONFIG.initiative = {
      formula: formula,
      decimals: decimals
    }
  }


   // Register Advantage cap
   game.settings.register("wfrp4e", "capAdvantageIB", {
     name: "Cap Advantage at IB",
     hint: "Sets the max value of Advantage as the character's Initiative Bonus",
     scope: "world",
     config: true,
     default: false,
     type: Boolean
   });

  // Register Fast SL rule
  game.settings.register("wfrp4e", "fastSL", {
    name: "Fast SL",
    hint: "Determine SL with the Fast SL optional rule as described on page 152",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Register Tests above 100% Rule
  game.settings.register("wfrp4e", "testAbove100", {
    name: "Tests Above 100%",
    hint: "Use optional rule Tests Above 100% as described on p 151. A successful Test gains +1 SL for each full 10% a tested Characteristic or Skill exceeds 100%",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register("wfrp4e", "criticalsFumblesOnAllTests", {
    name: "Criticals and Fumbles on all Tests",
    hint: "Rolling a double on any test results in an Astounding Success/Failure.",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
    // Register Extended Tests
    game.settings.register("wfrp4e", "extendedTests", {
      name: "Extended Tests and 0 SL",
      hint: "Rolling a +/- 0 on Extended Tests (currently only Channelling) results in a +1/-1 respectively (p155).",
      scope: "world",
      config: true,
      default: false,
      type: Boolean
    });

    // Register Test auto-fill
    game.settings.register("wfrp4e", "testAutoFill", {
      name: "Test Dialog Auto Populate",
      hint: "This setting automatically fills out information in the dialog for Tests. Some examples include: Wielding Defensive weapons automatically fills 'SL Bonus' in roll dialogs for melee weapons. This only occurs if it is not the actor's turn. Also when wieldirg an Accurate or (Im)precise Weapon (on the actor's turn).",      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });

    // Register NPC Species Randomization
    game.settings.register("wfrp4e", "npcSpeciesCharacteristics", {
      name: "Set Average NPC Characteristics",
      hint: "Entering a recognized species value for an NPC automatically sets their characteristics to the average value for the species",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });

    // Register Partial Channelling
    game.settings.register("wfrp4e", "partialChannelling", {
      name: "Partial Channelling",
      hint: "A common house rule that improves the flexibility of Channelling. Instead of requiring the SL to reach the spell's CN, you can instead cast at anytime with the CN reduced by the SL gained so far.",
      scope: "world",
      config: true,
      default: false,
      type: Boolean
    });

      // Register Status on Turn Start
      game.settings.register("wfrp4e", "displayRoundSummary", {
      name: "Display Round Summary",
      hint: "When a round ends, display all combatants with conditions.",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });

    // Register Defensive auto-fill
    game.settings.register("wfrp4e", "statusOnTurnStart", {
      name: "Show Combatant Status on Turn Start",
      hint: "When a Combatant starts their turn, their status is shown (Conditions and Modifiers). This status message is identical to the one shown from right clicking the combatant.",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });


    // Register focus on turn start
    game.settings.register("wfrp4e", "focusOnTurnStart", {
      name: "Focus on Turn Start",
      hint: "When advancing the combat tracker, focus on the token that's going next.",
      scope: "world",
      config: true,
      default: true,
      type: Boolean
    });

      // Register Hiding Test Data
      game.settings.register("wfrp4e", "hideTestData", {
        name: "Hide Test Data",
        hint: "GM test chat cards don't show sensitive NPC data to players.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
      });
    

  // Pre-load templates
  loadTemplates([
    "public/systems/wfrp4e/templates/actors/actor-attributes.html",
    "public/systems/wfrp4e/templates/actors/actor-abilities.html",
    "public/systems/wfrp4e/templates/actors/actor-main.html",
    "public/systems/wfrp4e/templates/actors/actor-combat.html",
    "public/systems/wfrp4e/templates/actors/actor-biography.html",
    "public/systems/wfrp4e/templates/actors/actor-inventory.html",
    "public/systems/wfrp4e/templates/actors/actor-skills.html",
    "public/systems/wfrp4e/templates/actors/actor-magic.html",
    "public/systems/wfrp4e/templates/actors/actor-religion.html",
    "public/systems/wfrp4e/templates/actors/actor-talents.html",
    "public/systems/wfrp4e/templates/actors/actor-classes.html",
    "public/systems/wfrp4e/templates/actors/actor-notes.html",
    "public/systems/wfrp4e/templates/actors/npc-main.html",
    "public/systems/wfrp4e/templates/actors/npc-notes.html",
    "public/systems/wfrp4e/templates/actors/creature-main.html",
    "public/systems/wfrp4e/templates/actors/creature-notes.html",
    "public/systems/wfrp4e/templates/actors/creature-main.html",
    "public/systems/wfrp4e/templates/chat/dialog-constant.html",
    "public/systems/wfrp4e/templates/chat/test-card.html",
    "public/systems/wfrp4e/templates/items/item-header.html",
    "public/systems/wfrp4e/templates/items/item-description.html",
  ]);
});
