Hooks.on("canvasInit", async () => {

    // let pack = game.packs.find(p => p.collection == "wfrp4e.trappings")
    // let list = await pack.getIndex();
    // let pathList = [];
    // await game.socket.emit("getFiles", "systems/wfrp4e/icons/equipment", {}, async resp => {
    //   for (var folder of resp.dirs)
    //   {
    //     await game.socket.emit("getFiles", folder, {}, async respItems => {
    //       for (let file of respItems.files)
    //         pathList.push(file);
    //     })
    //   }
    // })  
    // for (let item of list)
    // {
    //   let name = item.name.toLowerCase().trim().replace(/,/g, '').replace(/ /g, '-').replace("/", '-')
  
    //   let img = pathList.find(p =>p.includes(name));
    //   if (!img)
    //     console.log(name);
    //   await pack.updateEntity({"_id": item.id, "img" : img});
    // }
    // for (let item of list)
    // {
    //   let name = item.name.toLowerCase().trim().replace(/,/g, '').replace(/ /g, '-').replace(/ /g, '-')
  
  
  
    //   let img = pathList.find(p =>p.includes(name));
    //   if (!img)
    //     console.log(name);
    //   await pack.updateEntity({"_id": item.id, "img" : img});
    // }
  
    // for (let item of list)
    // {
    //   let name = item.name.toLowerCase().trim().replace(/,/g, '').replace(/ /g, '-').replace(/ /g, '-')
  
  
    //   let img = pathList.find(p =>p.includes(name));
    //   if (!img)
    //     console.log(name);
    //   await pack.updateEntity({"_id": item.id, "img" : img});
    // }
      
    //  let pack = game.packs.find(p => p.collection == "world.arcanecareers")
    //  let list = await pack.getIndex();
    //  for (let skill of list)
    //  {
    //   let item = await pack.getEntity(skill.id);
    //   item.data.data.skills[0] = item.data.data.skills[0].replace("Channeling", "Channelling");
    //   console.log(item);
    //   await pack.updateEntity(item.data);
    //  }
  
    // pack = game.packs.find(p => p.collection == "world.spells")
    // let list = await pack.getIndex();
    // let weapons = game.items.entities.filter(x => x.type == "spell");
    // for (let wep of weapons)
    // {
    //   await pack.createEntity(wep.data);
    // }
  
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
  