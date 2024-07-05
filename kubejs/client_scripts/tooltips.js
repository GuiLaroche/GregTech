ItemEvents.tooltip((event) => {
  // Disabled Items
  const toolmetalList = ["wooden", "stone", "iron", "golden", "diamond", "netherite"];
  
  // List of disabled items with their specific IDs
  const disabledItems = [
    "sophisticatedbackpacks:inception_upgrade",
    "sophisticatedbackpacks:battery_upgrade",
    "storagedrawers:redstone_upgrade",
    "storagedrawers:min_redstone_upgrade",
    "storagedrawers:max_redstone_upgrade",
    "storagedrawers:compacting_drawers_3",
    "storagedrawers:fill_level_upgrade",
    "storagedrawers:illumination_upgrade",
  ];

  // Add tool items to the disabledItems list
  toolmetalList.forEach((material) => {
    disabledItems.push(`minecraft:${material}_shovel`);
    disabledItems.push(`minecraft:${material}_pickaxe`);
    disabledItems.push(`minecraft:${material}_axe`);
    disabledItems.push(`minecraft:${material}_hoe`);
    disabledItems.push(`minecraft:${material}_sword`);
    disabledItems.push(`farmersdelight:${material}_knife`);
  });

  // Add tooltip for disabled items
  event.add(disabledItems, Text.red("Disabled in this modpack!").bold(true));

  // Other tooltips
  event.add("gtceu:greenhouse", Text.gray("Two green thumbs up!"));
  event.add("gtceu:construction_core", Text.gray("Offers cheaper recipes for building blocks!"));
  event.add("gtceu:construction_core", Text.darkGray("Requires Construction Foam to operate."));
  event.add("ae2:controller", Text.gray("Channels are §cdisabled§7."));
});