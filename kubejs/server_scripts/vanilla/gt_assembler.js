ServerEvents.recipes(event => {

    event.remove({ type: 'gtceu:assembler', input: 'minecraft:crafting_table' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:chest' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:furnace' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:compass' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:clock' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:dispenser' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:observer' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:dropper' })
    event.remove({ type: 'gtceu:assembler', input: 'minecraft:note_block' })
    event.remove({ type: 'gtceu:assembler', input: 'supplementaries:altimeter' })
    event.remove({ type: 'gtceu:alloy_smelter', input: 'minecraft:anvil' })
    event.remove({ type: 'gtceu:fluid_solidifier', input: 'minecraft:anvil' })

    event.recipes.gtceu.assembler('crafting_table')
        .itemInputs(
            '2x #minecraft:logs',
            '2x minecraft:flint'
        )
        .itemOutputs(
            'minecraft:crafting_table'
        )
        .duration(100)
        .EUt(6)


    event.recipes.gtceu.assembler('chest')
        .itemInputs(
            '4x #minecraft:logs',
            '4x #forge:rods/wood',
            '#minecraft:stone_buttons'
        )
        .itemOutputs(
            'minecraft:chest'
        )
        .duration(100)
        .EUt(6)


    event.recipes.gtceu.assembler('furnace')
        .itemInputs(
            '3x #forge:cobblestone',
            '5x kubejs:furnace_brick'
        )
        .itemOutputs(
            'minecraft:furnace'
        )
        .duration(100)
        .EUt(6)


    event.recipes.gtceu.assembler('smithing_table')
        .itemInputs(
            '2x #forge:ingots/wrought_iron',
            '4x #minecraft:logs'
        )
        .itemOutputs(
            'minecraft:smithing_table'
        )
        .duration(130)
        .EUt(6)


    event.recipes.gtceu.assembler('smoker')
        .itemInputs(
            '4x gtceu:treated_wood_rod',
            'minecraft:smooth_stone',
            'minecraft:furnace',
            '2x #forge:plates/steel',
            'gtceu:treated_wood_trapdoor'
        )
        .itemOutputs(
            'minecraft:smoker'
        )
        .duration(150)
        .EUt(6)

    event.recipes.gtceu.assembler('blast_furnace')
        .itemInputs(
            '2x #forge:rods/wrought_iron',
            '3x minecraft:smooth_stone',
            'minecraft:furnace',
            '#forge:plates/wrought_iron',
            '2x #forge:ingots/steel'
        )
        .itemOutputs(
            'minecraft:blast_furnace'
        )
        .duration(150)
        .EUt(6)


    event.recipes.gtceu.alloy_smelter('anvil')
        .itemInputs(
            '36x #forge:ingots/wrought_iron',
        )
        .notConsumable(
            'gtceu:anvil_casting_mold'
        )
        .itemOutputs(
            'minecraft:anvil'
        )
        .duration(1680)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('anvil')
        .inputFluids(
            Fluid.of('gtceu:wrought_iron', 5184)
        )
        .notConsumable(
            'gtceu:anvil_casting_mold'
        )
        .itemOutputs(
            'minecraft:anvil'
        )
        .duration(1680)
        .EUt(16)

        event.recipes.gtceu.assembler('precision_mechanism')
        .itemInputs(
            'create:cogwheel',
            'create:large_cogwheel',
            '#forge:nuggets/iron'
        )
        .itemOutputs(
            'create:precision_mechanism'
        )
        .duration(200)
        .EUt(6)

        event.recipes.gtceu.assembler('compass')
        .itemInputs(
            '4x #forge:plates/iron',
            '#forge:bolts/red_alloy'
        )
        .itemOutputs(
            'minecraft:compass'
        )
        .duration(100)
        .EUt(4)

        event.recipes.gtceu.assembler('clock')
        .itemInputs(
            '4x #forge:plates/gold',
            'create:precision_mechanism'
        )
        .itemOutputs(
            'minecraft:clock'
        )
        .duration(100)
        .EUt(4)

        event.recipes.gtceu.assembler('dispenser')
        .itemInputs(
            '4x #forge:stone',
            'create:precision_mechanism',
            'minecraft:bow',
            '2x #forge:gears'
        )
        .itemOutputs(
            'minecraft:dispenser'
        )
        .duration(100)
        .EUt(30)

        event.recipes.gtceu.assembler('observer')
        .itemInputs(
            '4x #forge:stone',
            '#forge:gems/certus_quartz',
            '2x #forge:ingots/red_alloy',
            '2x #forge:gears'
        )
        .itemOutputs(
            'minecraft:observer'
        )
        .duration(100)
        .EUt(30)

        event.recipes.gtceu.assembler('dropper')
        .itemInputs(
            '3x #forge:stone',
            'thermal:rf_coil',
            '#forge:ingots/red_alloy',
            '2x #forge:gears',
            '2x #forge:small_gears'
        )
        .itemOutputs(
            'minecraft:dropper'
        )
        .duration(100)
        .EUt(30)

        event.recipes.gtceu.assembler('note_block')
        .itemInputs(
            '8x #minecraft:planks',
            '#forge:ingots/red_alloy'  
        )
        .itemOutputs(
            'minecraft:note_block'
        )
        .duration(100)
        .EUt(16)

        event.recipes.gtceu.assembler('altimeter')
        .itemInputs(
            '4x #forge:plates/copper',
            '#forge:bolts/red_alloy'  
        )
        .itemOutputs(
            'supplementaries:altimeter'
        )
        .duration(100)
        .EUt(4)
})