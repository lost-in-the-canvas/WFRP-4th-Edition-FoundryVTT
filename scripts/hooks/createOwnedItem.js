Hooks.on("createOwnedItem", (item) => {

  try {
    if (item.type == "critical")
    {
      let newWounds;
      if (item.data.data.wounds.value.toLowerCase() == "death")
        newWounds = 0;
      newWounds = item.actor.data.data.status.wounds.value - Number(item.data.data.wounds.value)
      if (newWounds < 0) newWounds = 0; 

      item.actor.update({"data.status.wounds.value" : newWounds});
    }
  }
  catch (error)
  {
    console.error("Error applying wounds value: " + error) //continue as normal if exception
  }


    if (item.actor.data.type != "character")
    {
      if (item.type == "armour")
        item.update({"data.worn.value" : true});
      else if (item.type == "weapon")
        item.update({"data.equipped" : true});
      else if (item.data.type == "trapping" && item.data.data.trappingType.value == "clothingAccessories")
        item.update({"data.worn" : true});
    }

    if (item.data.type == "talent")
    {
      let charToIncrease = WFRP4E.talentBonuses[item.data.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
      if (charToIncrease)
      {
        let newValue = item.actor.data.data.characteristics[charToIncrease].initial + 5;
        item.actor.update({[`data.characteristics.${charToIncrease}.initial`] : newValue})
      }
    }  
    if (item.data.type == "trait")
    {
      if (item.actor.data.data.excludedTraits.length && item.actor.data.data.excludedTraits.includes(item.id))
        return
      let bonuses = WFRP4E.traitBonuses[item.data.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
      let data = duplicate(item.actor.data.data)
      for (let char in bonuses)
      {
        data.characteristics[char].initial += bonuses[char]
      }
      item.actor.update({data : data})
    }  
})

Hooks.on("deleteOwnedItem", (item) => {
  if (item.data.type == "talent")
  {
    let charToDecrease = WFRP4E.talentBonuses[item.data.name.toLowerCase().trim()] // TODO: investigate why trim is needed here

    if (charToDecrease)
    {
      let newValue = item.actor.data.data.characteristics[charToDecrease].initial - 5;
      item.actor.update({[`data.characteristics.${charToDecrease}.initial`] : newValue})
    }
  }
  if (item.data.type == "trait")
  {
    if (item.actor.data.data.excludedTraits.length && item.actor.data.data.excludedTraits.includes(item.id))
      return
    
    let bonuses = WFRP4E.traitBonuses[item.data.name.toLowerCase().trim()] // TODO: investigate why trim is needed here
    let data = duplicate(item.actor.data.data)
    for (let char in bonuses)
    {
      data.characteristics[char].initial -= bonuses[char]
    }
    item.actor.update({data : data})
  }  
})
