/**
 * Set default values for new actors' tokens
 */
Hooks.on("preCreateActor", (dir, actor) =>{

  // Set wounds, advantage, and display name visibility
  mergeObject(actor,
    {"token.bar1" :{"attribute" : "status.wounds"},                 // Default Bar 1 to Wounds
    "token.bar2" :{"attribute" : "status.advantage"},               // Default Bar 2 to Advantage
    "token.displayName" : CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,    // Default display name to be on owner hover
    "token.displayBars" : CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,    // Default display bars to be on owner hover
    "token.disposition" : CONST.TOKEN_DISPOSITIONS.NEUTRAL,         // Default disposition to neutral
    "token.name" : actor.name                                       // Set token name to actor name
  })

  // Set custom default token
  if (!actor.img)
    actor.img = "systems/wfrp4e/tokens/unknown.png"

  // Default characters to HasVision = true and Link Data = true
  if (actor.type == "character")
  {
    actor.token.vision = true;
    actor.token.actorLink = true;
  }
})