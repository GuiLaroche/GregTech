import crafttweaker.api.recipe.FurnaceRecipeManager;
import crafttweaker.api.recipe.SmokerRecipeManager;

furnace.remove(<item:gtceu:bronze_ingot>);
furnace.remove(<tag:items:forge:ingots/brass>);
furnace.remove(<item:laendli_transport:vehicle_part_rubber>);
smoker.remove(<item:laendli_transport:vehicle_part_rubber>);
furnace.remove(<item:gtceu:gunmetal_ingot>);
furnace.remove(<item:gtceu:gunmetal_ingot>);
furnace.remove(<item:vintagedelight:salt_bucket>);
furnace.remove(<item:minecraft:bread>);
smoker.remove(<item:minecraft:bread>);
campfire.remove(<item:minecraft:bread>);
furnace.addRecipe("dough_to_bread", <item:minecraft:bread>, <tag:items:forge:dough>, 0.35, 200);
smoker.addRecipe("s_dough_to_bread", <item:minecraft:bread>, <tag:items:forge:dough>, 0.35, 100);
campfire.addRecipe("c_dough_to_bread", <item:minecraft:bread>, <tag:items:forge:dough>, 0.35, 200);
campfire.addRecipe("furnace_clay_to_brick_clay", <item:kubejs:furnace_brick>, <item:kubejs:furnace_clay>, 0.35, 200);
furnace.addRecipe("fur_furnace_clay_to_brick_clay", <item:kubejs:furnace_brick>, <item:kubejs:furnace_clay>, 0.35, 200);

