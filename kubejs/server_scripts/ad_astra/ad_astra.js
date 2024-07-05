ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_nasa_workbench')
        .itemInputs(
            '4x gtceu:hv_robot_arm',
            '4x gtnn:heavy_plate_t1',
            'gtceu:hv_machine_casing'
        )
        .itemOutputs(
            'ad_astra:nasa_workbench'
        )
        .duration(1000)
        .EUt(100)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_launch_pad')
        .itemInputs(
            '9x gtnn:heavy_plate_t1',
            'gtceu:hv_machine_casing'
        )
        .itemOutputs(
            'ad_astra:launch_pad'
        )
        .duration(400)
        .EUt(120)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_zip_gun')
        .itemInputs(
            'ad_astra:large_gas_tank',
            '2x gtceu:stainless_steel_plate',
            'gtceu:stainless_steel_rod'
        )
        .itemOutputs(
            'ad_astra:zip_gun'
        )
        .duration(200)
        .EUt(120)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_solarpanel')
        .itemInputs(
            '3x gtceu:solar_panel',
            'ad_astra:desh_factory_block',
            '#gtceu:circuits/mv'
        )
        .itemOutputs(
            'ad_astra:solar_panel'
        )
        .duration(200)
        .EUt(150)
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_gravity_controller')
        .itemInputs(
            'gtceu:gravitation_engine_unit',
            '2x gtceu:luv_machine_casing',
            '#gtceu:circuits/luv'
        )
        .itemOutputs(
            'ad_astra:gravity_normalizer'
        )
        .duration(400)
        .EUt(8000)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ad_astra_energyzier')
        .itemInputs(
            'gtnn:quark_core',
            '2x gtceu:luv_machine_casing',
            '#gtceu:circuits/luv'
        )
        .itemOutputs(
            'ad_astra:energizer'
        )
        .duration(400)
        .EUt(8000)
})
