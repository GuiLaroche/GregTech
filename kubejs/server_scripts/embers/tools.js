ServerEvents.recipes((event) => {
    const material_list = ["lead", "silver"]
    material_list.forEach((material) => {
      event.remove({ id: `embers:${material}_sword` });
      event.remove({ id: `embers:${material}_axe` });
      event.remove({ id: `embers:${material}_pickaxe` });
      event.remove({ id: `embers:${material}_shovel` });
      event.remove({ id: `embers:${material}_hoe` });
    })
});