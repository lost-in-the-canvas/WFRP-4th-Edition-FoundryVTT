class WFRP_Audio 
{
    static PlayContextAudio(context)
    {
        this.MatchContextAudio(context).then(sound => {
            console.log(`wfrp4e | Playing Sound: ${sound.file}`)
            AudioHelper.play({src : sound.file}, sound.global)
        })
    }   

    static FindContext(testResult)
    {
        let context = undefined
        
        if (testResult.skill)
        {
          if (testResult.skill.name == game.i18n.localize("NAME.ConsumeAlcohol"))
          {
             context = {item : testResult.skill, action : "consumeAlcohol"}
             context.outcome = (testResult.roll.total <= 5 || testResult.roll.total <= targetNum) ? "success" : "fail"
          }
          else if (testResult.skill.name == game.i18n.localize("NAME.Stealth"))
          {
            context = {item : testResult.skill, action : "stealth"}
            context.outcome = (testResult.roll.total <= 5 || testResult.roll.total <= targetNum) ? "success" : "fail"
          }
        }
        if (testResult.weapon)
        {
          context = {item : testResult.weapon, action: "fire"}
          if (testResult.misfire)
            context.action = "misfire"
        }
        if (testResult.critical && (testResult.weapon || testResult.trait))
        {
          // context.item would already be set to weapon if a weapon was used, otherwise, use trait
          context = {item : context.item || testResult.trait, action : "hit", outcome : "crit"}
        }
        if (testResult.spell)
        {
            if (testResult.description == game.i18n.localize("ROLL.CastingSuccess"))
              context = {item : testResult.spell, action : "cast"}
            
            if (testResult.extra.minormis || testResult.extra.majormis)
            context = {item : testResult.spell, action : "miscast"}
        }
        if (testResult.prayer)
        {
            if (testResult.description == game.i18n.localize("ROLL.PrayGranted"))
              context = {item : testResult.prayer, action : "cast"}
            
            if (testResult.extra.wrath)
            context = {item : testResult.prayer, action : "miscast"}
        }

        return context
    }


    
    /** CONTEXTUAL MODEL
     *  context = {
     *      action : equip, cast, lose, gain, etc.
     *      item : item associated with the action
     *      outcome : typcially success or failure, or other specifier, sometimes unused
     *  }
     */

    static async MatchContextAudio(context)
    {
      if (!game.settings.get("wfrp4e", "soundEffects") || !context)
        return {}
        
      let files = ""
      let file, group;
      await FilePicker.browse("user", `systems/wfrp4e/sounds`).then(resp => {
        files = resp.files
      })
  
      let globalSound = false;
      {
        switch(context.item.type)
        {
        case "weapon":
          group = context.item.data.weaponGroup.value.toLowerCase()
          if(group == game.i18n.localize("SPEC.Crossbow").toLowerCase())
            file = context.action == "equip" ? "weapon_bow" : "weapon_xbow"
            
          else if(group == game.i18n.localize("SPEC.Bow").toLowerCase())
            file = "weapon_bow"
          else if(group == game.i18n.localize("SPEC.Fencing").toLowerCase() || group == game.i18n.localize("SPEC.Parry").toLowerCase() || group == game.i18n.localize("SPEC.TwoHanded").toLowerCase())
            file = context.action == "fire" ? "weapon-" : "weapon_sword" 
          else if(group == game.i18n.localize("SPEC.Flail").toLowerCase() && context.action == "fire")
            file = "weapon_flail"
          else if((group == game.i18n.localize("SPEC.Blackpowder").toLowerCase() || group == game.i18n.localize("SPEC.Engineering").toLowerCase()))
            file = "weapon_gun"
          else if((group == game.i18n.localize("SPEC.Explosives").toLowerCase()))
            file = "weapon_bomb"
          else
            file = "weapon-"
          break;
        case "armour":
          group = item.data.armorType.value;
          file = group.includes("Leather") ? "leather" : group;
          break;
        case "trapping":
          file = item.data.trappingType.value.includes("clothing") ? "cloth" : "item";
          break;
        case "spell":
          file = "spell";
          break;
        case "prayer":
          file = "prayer";
          break;
        case "round":
          file = "round";
          globalSound = true;
          break;
        case "skill":
          file = "skill";
          break;
        case "money":
          file = "money";
          break;
        }
      }
      files = files.filter(f => f.includes(file))
  
      if(context.item.type == "weapon")
      {
        globalSound = true;
        if(context.action == "miss")
          files = files.filter(f => f.includes("-miss"))
        else if(context.action == "misfire")
          files = files.filter(f => f.includes("-misfire"))
        else if(context.action == "fire")
        {
          if(file == "weapon_xbow" || file == "weapon_bow" || file == "weapon_gun")
            files = files.filter(f => f.includes("-fire"))
          else if(file != "weapon_bomb")
            files = files.filter(f => f.includes("-swing"))
        }
      }
      if(context.item.type == "ammo")
      {
        files = files.filter(f => f.includes("-load"))
      }
      if(context.action == "equip")
      {
        if (context.outcome)
        {
          files = files.filter(f => f.includes("-equip"))
        }
        else
        {
          files = files.filter(f => f.includes("deequip"))
        }
      }
  
      if(context.item.type == "spell")
      {
        if(context.action == "memorize")
          files = files.filter(f => f.includes("-memorize"))
        else if(context.action == "unmemorize")
          files = files.filter(f => f.includes("unmemorize"))
        else if(context.action == "cast")
        {
          files = files.filter(f => f.includes("-cast"))
          globalSound = true;
        }
        else
        {
          files = files.filter(f => f.includes("miscast"))
          globalSound = true;
        }
      }
  
      if(context.item.type == "prayer")
      {
        globalSound = true;
        if(context.action == "cast")
          files = files.filter(f => f.includes("-cast"))
        else
          files = files.filter(f => f.includes("miscast"))
      }
  
      if(context.action == "hit")
      {
        globalSound = true;
        if(context.outcome == "crit")
          files = files.filter(f => f.includes("crit"))
        else
          files = files.filter(f => f.includes("normal"))
      }
  
      if(context.item.type == "skill")
      {
        if(context.action == "consumeAlcohol")
          files = files.filter(f => f.includes(`consumeAlcohol-${context.outcome == "fail" ? 'fail' : 'success'}`))
        if(context.action == "stealth")    
          files = files.filter(f => f.includes(`stealth-${context.outcome == "fail" ? 'fail' : 'success'}`))
      }
  
      return {file : files[new Roll(`1d${files.length}-1`).roll().total], global : globalSound}
    }
}