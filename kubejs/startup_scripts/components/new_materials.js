GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('gunmetal')
        .ingot()
        .components('7x copper', '1x tin', '1x zinc')
        .color(0xff8533).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .dust()
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('gunnite')
        .ingot()
        .components('7x copper', '1x tin', '1x zinc', '4x aluminium')
        .color(0x7733ff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('rose_quartz')
        .gem()
        .components('1x nether_quartz', '8x redstone')
        .color(0xff6666).iconSet(GTMaterialIconSet.QUARTZ)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('rose_salt')
        .gem()
        .components('9x rock_salt', '3x redstone')
        .color(0xffb3b3).iconSet(GTMaterialIconSet.CERTUS)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('seabrass')
        .ingot()
        .components('1x brass', '1x gold')
        .color(0xb38600).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .dust()
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('deepbronze')
        .ingot()
        .components('1x seabrass', '1x bronze')
        .color(0x804000).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .dust()
})