ServerEvents.recipes(event => {
        const material_list = ["iron", "copper", "zinc", "lead", "aluminium", "gold", "silver", "tin", "brass", "bronze", "electrum", "invar",
                            "steel", "wrought_iron"]
                            
        //low heated mixing                    
        event.recipes.createMixing('gtceu:andesite_alloy_ingot', [
            'minecraft:andesite',
            '#forge:nuggets/iron',
            ]).lowheated()
        
        function wrought_iron(input, tempitem, output){
            event.recipes.create.sequenced_assembly([
                Item.of(output).withChance(85.0),
            ], input, [
            event.recipes.createFilling(tempitem, [tempitem, Fluid.of('minecraft:lava', 250)]),
            event.recipes.createPressing(tempitem, [tempitem]),
            event.recipes.createPressing(tempitem, [tempitem]),
            event.recipes.createPressing(tempitem, [tempitem])
        ]).transitionalItem(tempitem).loops(1)
    }
        function milling(output, input){
            event.recipes.create.milling(output, input)
        }

        function filling(output, input){
            event.recipes.create.filling(output, input)
        }

        function cutting(output, input){
            event.recipes.create.cutting(output, input)
        }

        function polishing(output, input){
            event.recipes.create.sandpaper_polishing(output, input)
        }
        
        //rod cutting       
        material_list.forEach((material) => {
        cutting(`2x gtceu:${material}_rod`,`gtceu:long_${material}_rod`)
        cutting(`2x gtceu:${material}_bolt`,`gtceu:${material}_rod`)
        })
        milling('gtceu:clay_dust', 'minecraft:clay_ball')
        milling('4x gtceu:coal_dust', 'gtceu:exquisite_coal_gem')
        milling('gtceu:flint_dust', 'minecraft:flint')
        milling('gtceu:wrought_iron_dust', 'gtceu:wrought_iron_ingot')
        milling('gtceu:lead_dust', 'gtceu:lead_ingot')
        milling('4x gtceu:brick_dust', 'minecraft:bricks')
        milling('gtceu:rose_quartz_dust', '#forge:gems/rose_quartz')
        milling('gtceu:quartz_sand_dust', '#minecraft:sand')
        milling('gtceu:charcoal_dust', 'minecraft:charcoal')
        milling('gtceu:andesite_dust', '#create:stone_types/andesite')
        milling('gtceu:andesite_dust', '#chipped:andesite')
        milling('gtceu:copper_dust', 'minecraft:copper_ingot')
        milling('gtceu:nickel_dust', 'gtceu:nickel_ingot')
        milling('gtceu:bronze_dust', 'gtceu:bronze_ingot')
        milling('4x gtceu:coke_dust', 'gtceu:exquisite_coke_gem')
        milling('gtceu:silver_dust', 'gtceu:silver_ingot')
        milling('2x gtceu:coke_dust', 'gtceu:flawless_coke_gem')
        milling('2x gtceu:coal_dust', 'gtceu:flawless_coal_gem')
        milling('gtceu:brass_dust', 'gtceu:brass_ingot')
        milling('4x gtceu:clay_dust', 'minecraft:clay')
        milling('gtceu:steel_dust', 'gtceu:steel_ingot')
        milling('gtceu:antimony_dust', 'gtceu:antimony_ingot')
        milling('gtceu:brick_dust', 'minecraft:brick')
        milling('gtceu:iron_dust', 'minecraft:iron_ingot')
        milling('gtceu:coal_dust', 'minecraft:coal')
        milling('4x gtceu:rose_quartz_dust', 'gtceu:exquisite_rose_quartz_gem')
        milling('gtceu:invar_dust', 'gtceu:invar_ingot')
        milling('gtceu:coke_dust', 'gtceu:coke_gem')
        milling('gtceu:gold_dust', 'gtceu:gold_ingot')
        milling('gtceu:tin_dust', 'gtceu:tin_ingot')
        milling('gtceu:zinc_dust', 'gtceu:zinc_ingot')
        milling('2x gtceu:rose_quartz_dust', 'gtceu:flawless_rose_quartz_gem')
        milling('gtceu:annealed_copper_dust', 'gtceu:annealed_copper_ingot')
        milling('gtceu:electrum_dust', 'gtceu:electrum_ingot')
        filling('gtceu:treated_wood_planks', [Fluid.of(('gtceu:creosote'), 100), '#minecraft:planks'])
        polishing('kubejs:polished_ember_crystal', 'embers:ember_crystal');
        polishing('vintageimprovements:spring_coiling_machine_wheel', 'kubejs:rough_spring_coiling_machine_wheel');
        wrought_iron('minecraft:iron_ingot', 'minecraft:iron_ingot', 'gtceu:wrought_iron_ingot');
        wrought_iron('gtceu:double_iron_plate', 'gtceu:double_iron_plate', 'gtceu:double_wrought_iron_plate');
        wrought_iron('gtceu:iron_plate', 'gtceu:iron_plate', 'gtceu:wrought_iron_plate');
        wrought_iron('gtceu:iron_rod', 'gtceu:iron_rod', 'gtceu:wrought_iron_rod');
        wrought_iron('gtceu:long_iron_rod', 'gtceu:long_iron_rod', 'gtceu:long_wrought_iron_rod');
        wrought_iron('gtceu:iron_screw', 'gtceu:iron_screw', 'gtceu:wrought_iron_screw');
        wrought_iron('gtceu:iron_bolt', 'gtceu:iron_bolt', 'gtceu:wrought_iron_bolt');

        // removal
        event.remove({ id: `create:mixing/brass_ingot` });
        event.remove({ id: `create:mixing/andesite_alloy_from_zinc` });
        event.remove({ id: `create:mixing/andesite_alloy` });
    })