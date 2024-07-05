ServerEvents.tags("item", (event) => {
  event.add("forge:meat", "minecraft:chicken");
  event.add("forge:meat", "minecraft:cooked_chicken");
  event.add("forge:meat", "minecraft:beef");
  event.add("forge:meat", "minecraft:cooked_beef");
  event.add("forge:meat", "minecraft:porkchop");
  event.add("forge:meat", "minecraft:cooked_porkchop");
  event.add("forge:meat", "minecraft:mutton");
  event.add("forge:meat", "minecraft:cooked_mutton");
  event.add("forge:meat", "minecraft:rabbit");
  event.add("forge:meat", "minecraft:cooked_rabbit");

  event.add("forge:ingots/gunmetal", "jeg:gunmetal_ingot");
  event.add("forge:dusts/gunmetal", "jeg:gunmetal_grit");
  event.add("forge:nuggets/gunmetal", "jeg:gunmetal_nugget");
  event.add("forge:ingots/gunnite", "jeg:gunnite_ingot");
  event.add("forge:gems/rose_quartz", "create:rose_quartz");
  event.add("forge:gems/rose_quartz", "create:polished_rose_quartz");
  event.add("forge:ingots/andesite_alloy", "create:andesite_alloy");
  event.add("forge:ingots/deepbronze", "abyssal_decor:deepbronze_ingot");
  event.add("forge:ingots/seabrass", "abyssal_decor:seabrass_ingot");
  
  event.add("vinery:grape", "vinery:savanna_grapes_red");
  event.add("vinery:grape", "vinery:savanna_grapes_white");
  event.add("vinery:grape", "vinery:taiga_grapes_red");
  event.add("vinery:grape", "vinery:taiga_grapes_white");
  event.add("vinery:grape", "vinery:jungle_grapes_red");
  event.add("vinery:grape", "vinery:jungle_grapes_white");
  
  event.add("brewery:wheat", "vintagedelight:oat");
  event.add("vintagedelight:oat", "bakery:oat");
  event.add("forge:berries", "upgrade_aquatic:mulberry");
  event.add("forge:silk", "crittersandcompanions:silk");

  event.add("forge:fur", "cold_sweat:fur");
  event.add("forge:fur", "naturalist:bear_fur");
  event.add("forge:fur", "alexsmobs:bison_fur");
  event.add("forge:fur", "alexsmobs:bear_fur");

  //event.add("bakery:allows_cooking", "farmersdelight:stove");
});
