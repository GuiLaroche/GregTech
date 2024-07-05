ServerEvents.recipes((event) => {
    const wood = ["oak", "spruce", "birch", "jungle", "acacia", "cherry", "dark_oak", "mangrove", "bamboo"];

    for(let i = 0; i < wood.length; i++) {
        let modid = "smallships:" + wood[i] + "_drakkar";
        event.remove({id : modid});
        let boatid = "";

        if (wood[i] == "bamboo") {boatid = "_raft";}
        else {boatid = "_boat";}
        
        let boat_type = "minecraft:" + wood[i] + boatid;
        event.shaped(modid, ["RSR", "CLC", "BBB"], {
            R: "#forge:ropes",
            S: "smallships:sail",
            C: "minecraft:chest",
            L: "minecraft:lead",
            B: boat_type,
          });
    }
  });

