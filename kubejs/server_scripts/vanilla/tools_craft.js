ServerEvents.recipes((event) => {
    const toolmetalList = ["wooden", "stone", "iron", "golden", "diamond", "netherite"];
    toolmetalList.forEach((material) => {
        event.remove({ id: `minecraft:${material}_shovel` });
        event.remove({ id: `minecraft:${material}_pickaxe` });
        event.remove({ id: `minecraft:${material}_axe` });
        event.remove({ id: `minecraft:${material}_hoe` });
        event.remove({ id: `minecraft:${material}_sword` });
        event.remove({ id: `farmersdelight:${material}_knife` });
    })

      });