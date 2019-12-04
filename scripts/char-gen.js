class GeneratorWfrp4e 
{
  static speciesStage()
  {
    let chatData = {
      user : game.user._id,
      content : `<h2>Species</h2>`
    }

    for (let sp in CONFIG.species)
    {
      chatData.content += `<div><a class = "species-select" data-species="${sp}">${CONFIG.species[sp]}</a></div>`
    }

    chatData.content += "<span><a class = 'chargen-button' data-button = 'rollSpecies' title = '+20 EXP'>Roll</a></span>"

    ChatMessage.create(chatData)
  }

  static rollSpecies()
  {
    let roll = WFRP_Tables.rollTable("species");
    this.speciesAttributes(roll.value, CONFIG.randomExp.speciesRand)
  }

  static chooseSpecies(species)
  {
    this.speciesAttributes(species, 0)
  }

  static speciesAttributes(species, exp = 0)
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
    let chatData = {
      user : game.user._id,
      content : `<div class="characteristics-gen" data-char=${JSON.stringify(dataTransfer)}><h2>Attributes - ${CONFIG.species[species]}</h2>`
    }

    for(let c in CONFIG.characteristicsAbbrev)
    {
      chatData.content += `<div><b>${CONFIG.characteristicsAbbrev[c]}</b>: ${characteristics[c]}</div>`
    }

    chatData.content += `<div><b>Move</b>: ${CONFIG.speciesMovement[species]}</div>`
    chatData.content += `<div><b>Fate</b>: ${CONFIG.speciesFate[species]}</div>`
    chatData.content += `<div><b>Resilience</b>: ${CONFIG.speciesRes[species]}</div>`
    chatData.content += `<div><b>Extra</b>: ${CONFIG.speciesExtra[species]}</div>`
    chatData.content += `<div class = "exp-gen">Exp: ${exp}</div>`

    
    chatData.content += "<span><a class = 'chargen-button' data-button = 'keep' title = '+50 EXP'>Keep</a></span>"
    chatData.content += "</div>"
    ChatMessage.create(chatData)
  }
}