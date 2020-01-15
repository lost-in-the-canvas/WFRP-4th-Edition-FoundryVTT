Hooks.on("createOwnedItem", (actor, id, item) => {
  try {
    if (item.type == "critical")
    {
      let newWounds;
      if (item.wounds.value.toLowerCase() == "death")
        newWounds = 0;
      newWounds = actor.data.data.status.wounds.value - Number(item.wounds.value)
      if (newWounds < 0) newWounds = 0; 

      actor.update({"data.status.wounds.value" : newWounds});
    }
  }
  catch (error)
  {
    console.error("Error applying wounds value: " + error) //continue as normal if exception
  }


    if (actor.data.type != "character")
    {
      if (item.type == "armour")
        item.worn.value = true;
      else if (item.type == "weapon")
        item.equipped = true;
      else if (item.type == "trapping" && item.trappingType.value == "clothingAccessories")
        item.worn = true;
    }

    if (item.type == "talent")
    {
      let charToIncrease = WFRP4E.talentBonuses[item.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
      if (charToIncrease)
      {
        let newValue = actor.data.data.characteristics[charToIncrease].initial + 5;
        actor.update({[`data.characteristics.${charToIncrease}.initial`] : newValue})
      }
    }  
    if (item.type == "trait")
    {
      if (actor.data.data.excludedTraits.length && actor.data.data.excludedTraits.includes(item._id))
        return
      let bonuses = WFRP4E.traitBonuses[item.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
      let data = duplicate(actor.data.data)
      for (let char in bonuses)
      {
        data.characteristics[char].initial += bonuses[char]
      }
      actor.update({data : data})
    }  
})

Hooks.on("deleteOwnedItem", (actor, id, item) => {
  if (item.type == "talent")
  {
    let charToDecrease = WFRP4E.talentBonuses[item.name.toLowerCase().trim()] // TODO: investigate why trim is needed here

    if (charToDecrease)
    {
      let newValue = actor.data.data.characteristics[charToDecrease].initial - 5;
      actor.update({[`data.characteristics.${charToDecrease}.initial`] : newValue})
    }
  }
  if (item.type == "trait")
  {
    if (actor.data.data.excludedTraits.length && actor.data.data.excludedTraits.includes(item._id))
      return
    
    let bonuses = WFRP4E.traitBonuses[item.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
    let data = duplicate(actor.data.data)
    for (let char in bonuses)
    {
      data.characteristics[char].initial -= bonuses[char]
    }
    actor.update({data : data})
  }  
})
