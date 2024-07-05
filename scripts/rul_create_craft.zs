import mods.create.MixingManager;
import mods.create.PressingManager;
import mods.create.CuttingManager;

<recipetype:create:mixing>.remove(<tag:items:forge:ingots/brass>);
<recipetype:create:mixing>.addRecipe("mixed_bronze", <constant:create:heat_condition:heated>, [<item:gtceu:bronze_ingot>], [<item:gtceu:bronze_dust>], [], 400);
<recipetype:create:mixing>.addRecipe("mixed_brass", <constant:create:heat_condition:heated>, [<item:gtceu:brass_ingot>], [<item:gtceu:brass_dust>], [], 400);

<recipetype:create:mixing>.addRecipe("mixed_rose_salt", <constant:create:heat_condition:none>, [<item:gtceu:rose_salt_gem>], [<item:gtceu:rock_salt_gem>, <item:minecraft:redstone>], [], 400);

<recipetype:create:sandpaper_polishing>.addRecipe("gt_rose_quartz_polished", <item:create:polished_rose_quartz>, <item:gtceu:rose_quartz_gem>, 200);

<recipetype:create:pressing>.remove(<item:minecraft:paper>);
<recipetype:create:mixing>.addRecipe("mixed_bark", <constant:create:heat_condition:none>, [<item:gtceu:paper_dust>], [<item:farmersdelight:tree_bark> * 3], [], 400);



#. Reworked Mecanical press
#.=====
#. Remove Recipe
<recipetype:create:pressing>.remove(<item:create:copper_sheet>);
<recipetype:create:pressing>.remove(<item:create:brass_sheet>);
<recipetype:create:pressing>.remove(<item:create:iron_sheet>);
<recipetype:create:pressing>.remove(<item:create:golden_sheet>);
<recipetype:create:pressing>.remove(<item:ad_astra:desh_plate>);
<recipetype:create:pressing>.remove(<item:ad_astra:ostrum_plate>);
<recipetype:create:pressing>.remove(<item:ad_astra:steel_plate>);
<recipetype:create:pressing>.remove(<item:ad_astra:calorite_plate>);

#. Add Recipe
<recipetype:create:pressing>.addRecipe("n_iron_press", [<item:gtceu:iron_plate>], <tag:items:forge:ingots/iron>, 200);
<recipetype:create:pressing>.addRecipe("n_copper_press", [<item:gtceu:copper_plate>], <tag:items:forge:ingots/copper>, 200);
<recipetype:create:pressing>.addRecipe("n_brass_press", [<item:gtceu:brass_plate>], <tag:items:forge:ingots/brass>, 200);
<recipetype:create:pressing>.addRecipe("n_tin_press", [<item:gtceu:tin_plate>], <tag:items:forge:ingots/tin>, 200);
<recipetype:create:pressing>.addRecipe("n_nickel_press", [<item:gtceu:nickel_plate>], <tag:items:forge:ingots/nickel>, 200);
<recipetype:create:pressing>.addRecipe("n_lead_press", [<item:gtceu:lead_plate>], <tag:items:forge:ingots/lead>, 200);
<recipetype:create:pressing>.addRecipe("n_silver_press", [<item:gtceu:silver_plate>], <tag:items:forge:ingots/silver>, 200);
<recipetype:create:pressing>.addRecipe("n_gold_press", [<item:gtceu:gold_plate>], <tag:items:forge:ingots/gold>, 200);
<recipetype:create:pressing>.addRecipe("n_wrought_iron_press", [<item:gtceu:wrought_iron_plate>], <tag:items:forge:ingots/wrought_iron>, 200);
<recipetype:create:pressing>.addRecipe("n_bronze_press", [<item:gtceu:bronze_plate>], <tag:items:forge:ingots/bronze>, 200);

