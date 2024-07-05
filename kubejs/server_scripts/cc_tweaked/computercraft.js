ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('basic_monitor')
        .itemInputs(
            'minecraft:glass_pane',
            '2x gtceu:black_steel_plate',
            'gtceu:mv_voltage_coil',
            '2x gtceu:mv_machine_casing',
            '5x gtceu:phosphorus_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:monitor_normal'
        )
        .duration(200)
        .EUt(100)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cc_speaker')
        .itemInputs(
            'minecraft:paper',
            'gtceu:magnetic_steel_plate',
            'gtceu:mv_voltage_coil',
            '2x gtceu:mv_machine_casing',
            '2x gtceu:fine_copper_wire',
            'gtceu:rubber_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:speaker'
        )
        .duration(200)
        .EUt(100)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('basic_turtle')
        .itemInputs(
            'computercraft:computer_normal',
            'gtceu:hv_sodium_battery',
            '4x gtceu:hv_robot_arm',
            'gtceu:hv_sensor',
            'gtceu:hv_electric_motor'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144)
        )
        .itemOutputs(
            'computercraft:turtle_normal'
        )
        .duration(500)
        .EUt(200)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('advanced_turtle')
        .itemInputs(
            'computercraft:computer_advanced',
            '3x gtceu:ev_vanadium_battery',
            '4x gtceu:hv_robot_arm',
            'gtceu:ev_sensor',
            'gtceu:ev_electric_motor'
        )
        .inputFluids(
            Fluid.of('gtceu:epoxy', 144)
        )
        .itemOutputs(
            'computercraft:turtle_advanced'
        )
        .duration(1000)
        .EUt(800)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cc_network_cable')
        .itemInputs(
            'gtceu:fine_red_alloy_wire',
            '2x gtceu:rubber_foil'
        )
        .itemOutputs(
            'computercraft:cable'
        )
        .duration(100)
        .EUt(30)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cc_wiered_moderm')
        .itemInputs(
            'gtceu:aluminium_plate',
            '2x gtceu:rubber_foil',
            'gtceu:nickel_plate'
        )
        .itemOutputs(
            'computercraft:wired_modem'
        )
        .duration(100)
        .EUt(40)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cc_printer')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            'gtceu:mv_sensor',
            'gtceu:mv_electric_motor',
            '2x gtceu:mv_machine_casing'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:printer'
        )
        .duration(200)
        .EUt(100)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cc_driver')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            'gtceu:mv_robot_arm',
            'gtceu:mv_voltage_coil',
            '3x gtceu:mv_machine_casing'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:disk_drive'
        )
        .duration(200)
        .EUt(100)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('advanced_monitor')
        .itemInputs(
            'minecraft:glass_pane',
            'gtceu:hv_voltage_coil',
            'gtceu:green_glass_lens',
            'gtceu:red_glass_lens',
            'gtceu:blue_glass_lens',
            'gtceu:iv_machine_casing'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 144)
        )
        .itemOutputs(
            'computercraft:monitor_advanced'
        )
        .duration(500)
        .EUt(300)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('basic_smartphone')
        .itemInputs(
            'minecraft:glass_pane',
            'gtceu:data_orb',
            'gtceu:plastic_printed_circuit_board',
            'gtceu:hv_sodium_battery',
            '2x gtceu:titanium_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:pocket_computer_normal'
        )
        .duration(300)
        .EUt(200)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('advanced_smartphone')
        .itemInputs(
            'minecraft:glass_pane',
            'gtceu:data_orb',
            'gtceu:epoxy_printed_circuit_board',
            '3x gtceu:ev_vanadium_battery',
            '2x gtceu:tungsten_steel_plate'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 72)
        )
        .itemOutputs(
            'computercraft:pocket_computer_advanced'
        )
        .duration(300)
        .EUt(200)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('wireless_moderm')
        .itemInputs(
            'minecraft:ender_eye',
            '4x gtceu:double_titanium_plate',
            'gtceu:plastic_printed_circuit_board'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 100)
        )
        .itemOutputs(
            'computercraft:wireless_modem_normal'
        )
        .duration(200)
        .EUt(200)
})
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ender_moderm')
        .itemInputs(
            'minecraft:ender_eye',
            '4x gtceu:double_tungsten_steel_plate',
            'gtceu:epoxy_printed_circuit_board'
        )
        .inputFluids(
            Fluid.of('gtceu:polyethylene', 120)
        )
        .itemOutputs(
            'computercraft:wireless_modem_advanced'
        )
        .duration(400)
        .EUt(600)
})