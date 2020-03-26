Hooks.on("canvasInit", (canvas) => {
  
    if (!(game.modules.get("fxmaster") && game.modules.get("fxmaster").active))
    {
      canvas.background.filters = [];
      canvas.tiles.filters = [];
      canvas.tokens.filters = [];
    }
    /**
     * Double every other diagonal movement
     */
    SquareGrid.prototype.measureDistance = function(p0, p1) {
      let gs = canvas.dimensions.size,
          ray = new Ray(p0, p1),
          nx = Math.abs(Math.ceil(ray.dx / gs)),
          ny = Math.abs(Math.ceil(ray.dy / gs));
  
      // Get the number of straight and diagonal moves
      let nDiagonal = Math.min(nx, ny),
          nStraight = Math.abs(ny - nx);
  
      let nd10 = Math.floor(nDiagonal / 2);
      let spaces = (nd10 * 2) + (nDiagonal - nd10) + nStraight;
      return spaces * canvas.dimensions.distance;
    
    }
  });
  