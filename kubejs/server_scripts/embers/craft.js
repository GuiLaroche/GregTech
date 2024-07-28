ServerEvents.recipes((event) => {
    event.remove({ id: `embers:caminite_blend` });
    event.shaped(`3x embers:caminite_blend`, ["CCC", "CSC", "CCC"], {
      S: "#forge:sand",
      C: "minecraft:clay_ball",
    });

    event.remove({ id: `embers:mechanical_core` });
    event.shaped(`embers:mechanical_core`, ["BBB", "WLW", "WhW"], {
      B: 'embers:caminite_bricks',
      W: '#forge:plates/wrought_iron',
      L: '#forge:plates/lead',
      h: '#forge:tools/hammers',
    });

    event.remove({ id: `embers:ember_bore` });
    event.shaped(`embers:ember_bore`, ["BCB", "BMB", "LLL"], {
      B: 'embers:caminite_bricks',
      C: '#forge:double_plates/copper',
      L: '#forge:double_plates/lead',
      M: 'embers:mechanical_core',
    });
    event.remove({ id: `embers:caminite_lever` });
    event.shapeless('embers:caminite_lever', [
        '#forge:rods/wooden',
        'embers:caminite_button',
      ])

    event.remove({ id: `embers:item_pipe` });
    event.shaped(`4x embers:item_pipe`, ["AAA", "PIP", "BwB"], {
      w: '#forge:tools/wrenches',
      B: 'embers:caminite_button',
      I: '#forge:ingots/lead',
      P: '#forge:plates/lead',
      A: 'minecraft:air',
    });

    event.remove({ id: `embers:fluid_pipe` });
    event.shaped(`4x embers:fluid_pipe`, ["AAA", "PIP", "BwB"], {
      w: '#forge:tools/wrenches',
      B: 'embers:caminite_button',
      I: '#forge:ingots/iron',
      P: '#forge:plates/iron',
      A: 'minecraft:air',
    });

    event.remove({ id: `embers:ember_activator` });
    event.shaped(`embers:ember_activator`, ["RRR", "RBR", "PhP"], {
      h: '#forge:tools/hammers',
      B: 'createlowheated:basic_burner',
      R: '#forge:rods/long/copper',
      P: '#forge:plates/lead',
    });

    event.remove({ id: `embers:ember_emitter` });
    event.shaped(`embers:ember_emitter`, ["LhL", "PCP", "LwL"], {
      h: '#forge:tools/hammers',
      w: '#forge:tools/wrenches',
      L: '#forge:plates/lead',
      P: 'embers:caminite_plate',
      C: '#forge:plates/copper',
    });

    event.remove({ id: `embers:ember_receiver` });
    event.shaped(`embers:ember_receiver`, ["LPL", "hCw", "LPL"], {
      h: '#forge:tools/hammers',
      w: '#forge:tools/wrenches',
      L: '#forge:plates/lead',
      P: 'embers:caminite_plate',
      C: '#forge:plates/copper',
    });

    event.remove({ id: `embers:copper_cell` });
    event.shaped(`embers:copper_cell`, ["BLB", "LCL", "BLB"], {
      B: 'embers:caminite_bricks',
      L: '#forge:double_plates/lead',
      C: '#forge:plates/copper',
    });

    event.remove({ id: `embers:melter` });
    event.shaped(`embers:melter`, ["BPB", "AIA", "AFA"], {
      B: 'embers:caminite_bricks',
      P: 'embers:caminite_plate',
      A: '#forge:double_plates/andesite_alloy',
      I: 'create:basin',
      F: 'minecraft:furnace',
    });

    event.remove({ id: `embers:ember_dial` });
    event.shaped(`embers:ember_dial`, ["ACA", "CBC", "ACA"], {
      A: 'minecraft:air',
      C: '#forge:plates/copper',
      B: '#forge:bolts/wrought_iron',
    });


    event.shaped(`3x kubejs:compressed_caminite`, ["CCC", "GMG", "GGG"], {
        C: 'embers:caminite_blend',
        G: 'minecraft:mud',
        M: "gtceu:brick_wooden_form",
      });

      event.remove({ id: `embers:caminite_brick` });
      event.smelting('embers:caminite_brick', 'kubejs:compressed_caminite')
});