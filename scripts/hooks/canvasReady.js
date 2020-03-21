Hooks.on("canvasReady", (canvas) => {

  if (!game.modules.find(m => m.id ==  "fxmaster" && m.active))
  {
    morrsliebActive = canvas.scene.getFlag("wfrp4e", "morrslieb")
    if (morrsliebActive)
    {
      canvas.background.filters.push(CONFIG.Morrslieb)
      canvas.tiles.filters.push(CONFIG.Morrslieb)
      canvas.tokens.filters.push(CONFIG.Morrslieb)
    }
  }
})