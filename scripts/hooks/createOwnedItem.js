Hooks.on("createOwnedItem", (item) => {

  if (item.actor.data.type == "character")
    return;
  if (item.type == "armour")
    item.update({"data.worn.value" : true});
  else if (item.type == "weapon")
    item.update({"data.equipped" : true});
  else if (item.data.type == "trapping" && item.data.data.trappingType.value == "clothingAccessories")
    item.update({"data.worn" : true});

  else if (item.data.type == "talent")
  {
    let charToIncrease;
    switch (item.data.name.toLowerCase())
    {
      case "savvy":
        charToIncrease = "int";
        break;
      case "suave":
          charToIncrease = "fel";
        break;
      case "marksman":
          charToIncrease = "bs";
        break;
      case "very strong":
          charToIncrease = "s";
        break;
      case "sharp":
          charToIncrease = "i";
        break;
      case "lightning reflexes":
          charToIncrease = "ag";
        break;
      case "coolheaded":
          charToIncrease = "wp";
        break;
      case "very resilient":
          charToIncrease = "t";
        break;
      case "nimble fingered":
          charToIncrease = "dex";
        break;
      case "warrior born":
          charToIncrease = "ws";
        break;
      default:
        return;
    }
    if (charToIncrease)
    {
      let newValue = item.actor.data.data.characteristics[charToIncrease].initial + 5;
      item.actor.update({[`data.characteristics.${charToIncrease}.initial`] : newValue})
    }
  }
   
})