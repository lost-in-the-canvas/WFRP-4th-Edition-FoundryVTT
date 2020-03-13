Hooks.on("canvasReady", (canvas) => {

  morrsliebActive = canvas.scene.getFlag("wfrp4e", "morrslieb")
  if (morrsliebActive)
  {
    canvas.background.filters.push(CONFIG.Morrslieb)
    canvas.tiles.filters.push(CONFIG.Morrslieb)
    canvas.tokens.filters.push(CONFIG.Morrslieb)
  }
})