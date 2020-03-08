/**
 * Add Status right click option for combat tracker combatants
 */
Hooks.on("getSceneControlButtons", (buttons) => {
    let group = buttons.find(b => b.name == "lighting")
    group.tools.push({
      button: true,
      icon : "fas fa-circle",
      name: "morrslieb",
      title: canvas.scene.data.flags.core.darknessColor != CONFIG.Canvas.darknessColor? "Morrslieb Darkness Color - Currently On" : "Morrslieb Darkness Color - Currently Off",
      onClick : async () => {
        if (canvas.scene.getFlag("core", "darknessColor") == CONFIG.Canvas.darknessColor)
          await canvas.scene.setFlag("core", "darknessColor", colorStringToHex("#006633"))
        else
          await canvas.scene.setFlag("core", "darknessColor", CONFIG.Canvas.darknessColor)        
      }
    })
  })