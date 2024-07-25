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

      });