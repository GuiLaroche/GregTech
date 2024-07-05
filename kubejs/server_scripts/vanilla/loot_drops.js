LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:blaze")
    .replaceLoot("minecraft:blaze_rod", "gtceu:sulfur_dust", true);
  event
    .addEntityLootModifier("minecraft:enderman")
    .replaceLoot("minecraft:ender_pearl", "gtceu:ender_pearl_dust", true);

  event
    .addEntityLootModifier("minecraft:zombified_piglin")
    .removeLoot("minecraft:gold_nugget");

    
  event
  .addEntityLootModifier("minecraft:iron_golem")
  .removeLoot("minecraft:iron_ingot");


  event
  .addEntityLootModifier("minecraft:spider")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk", true);


  event
  .addEntityLootModifier("minecraft:cave_spider")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk", true);


  event
  .addEntityLootModifier("enemyexpansion:ladybug")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk", true);

  event
  .addEntityLootModifier("enemyexpansion:tarantula")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk", true);

  event
  .addEntityLootModifier("witherstormmod:sickened_spider")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk", true);

  event
  .addBlockLootModifier("minecraft:cobweb")
  .replaceLoot("minecraft:string", "crittersandcompanions:silk");
});
