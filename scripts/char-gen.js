class GeneratorWfrp4e 
{
  static speciesStage()
  {
    let chatData = {
      user : game.user._id,
    }

    renderTemplate("systems/wfrp4e/templates/chat/chargen/species-select.html", {species : CONFIG.species}).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  } 

  static rollSpecies(messageId, chosenSpecies = null)
  {
    let roll, exp;
    if (chosenSpecies)
    {
      exp = 0;
      roll = {roll: "Choose", value : chosenSpecies, name : CONFIG.species[chosenSpecies], exp : 0}
    }
    else
    {
      exp = 20;
      roll = WFRP_Tables.rollTable("species");
    }

    let speciesMessage = game.messages.get(messageId)
    let updateCardData = {roll : roll, species : CONFIG.species}

    renderTemplate("systems/wfrp4e/templates/chat/chargen/species-select.html", updateCardData).then(html =>{
      speciesMessage.update({content: html})
    })
    this.speciesSkillsTalents(roll.value, exp)
   // this.speciesAttributes(roll.value, CONFIG.randomExp.speciesRand)
  }

  static speciesSkillsTalents(species, exp)
  {
    let chatData = {
      user : game.user._id
    }

    let cardData = {
      speciesKey : species,
      species : CONFIG.species[species],
      speciesSkills : CONFIG.speciesSkills[species],
      exp : exp
    }

    let talents = []
    let choiceTalents = []

    CONFIG.speciesTalents[species].forEach(talent => {
        if (isNaN(talent))
        {
          let talentList = talent.split(", ")
          if (talentList.length == 1)
            talents.push(talentList[0])
          else
            choiceTalents.push(talentList)
        }
    })
    cardData.randomTalents = CONFIG.speciesTalents[species][CONFIG.speciesTalents[species].length-1]
    cardData.speciesTalents = talents;
    cardData.choiceTalents = choiceTalents;
    renderTemplate("systems/wfrp4e/templates/chat/chargen/species-skills-talents.html", cardData).then(html =>{
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }


  static rollAttributes(species, exp = 0)
  {
    let characteristics = WFRP_Utility.speciesCharacteristics(species, false)
    let dataTransfer = {
      generation : true,
      type : "characteristics",
      payload : {
        species: CONFIG.species[species],
        characteristics : characteristics,
        movement : CONFIG.speciesMovement[species],
        fate : CONFIG.speciesFate[species],
        resilience : CONFIG.speciesRes[species],
        exp : exp
      }
    }

    let cardData = duplicate(dataTransfer.payload)

    // Turn keys into abbrevitaions (ws -> WS) for more appealing look
    cardData.characteristics = {}
    for (let abrev in CONFIG.characteristicsAbbrev)
    {
      cardData.characteristics[CONFIG.characteristicsAbbrev[abrev]] = dataTransfer.payload.characteristics[abrev]
    }

    cardData.extra = CONFIG.speciesExtra[species]
    cardData.dataTransfer = JSON.stringify(dataTransfer)

    let chatData = {
      user : game.user._id,
    }

    renderTemplate("systems/wfrp4e/templates/chat/chargen/attributes.html", cardData).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }

  static async rollCareer(species)
  {
    let roll = WFRP_Tables.rollTable("career", {}, species)
    let pack = game.packs.find(p => p.collection == "wfrp4e.careers")
    let careers =  await pack.getContent();
    for (let c of careers)
    {
      if (c.data.data.careergroup.value == roll.name && c.data.data.level.value == 1)
        c.postItem()
    }

    let chatData = {
      user : game.user._id,
    }

    renderTemplate("systems/wfrp4e/templates/chat/chargen/career-select.html", {exp : CONFIG.randomExp.careerRand}).then(html => {
      chatData.content = html;
      ChatMessage.create(chatData);
    })
  }
}