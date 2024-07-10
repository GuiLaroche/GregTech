ServerEvents.recipes((event) => {

    event.remove({ id: `create:hand_crank` });
    event.shaped('create:hand_crank', ["LLL", "AsS"], {
        L: '#minecraft:logs',
        A: "minecraft:air",
        s: '#forge:tools/saws',
        S: 'create:shaft'
      });

      event.remove({ id: 'create:water_wheel' });
      event.shaped('create:water_wheel', ["ALA", "LSL", "LWL"], {
          L: '#minecraft:logs',
          A: '#forge:ingots/andesite_alloy',
          S: 'create:shaft',
        });

      event.remove({ id: 'create:andesite_alloy' });
      event.shaped('create:andesite_alloy', ["AW", "WA"], {
          W: '#forge:nuggets/wrought_iron',
          A: 'minecraft:andesite',
        });
  });