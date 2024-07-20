ServerEvents.recipes((event) => {
    event.remove({ id: `gtceu:shaped/treated_wood_planks` });
    event.remove({ id: `gtceu:smelting/dust_bronze__demagnetize_from_dust` });
    event.remove({ id: `gtceu:smelting/dust_brass__demagnetize_from_dust` });
    event.remove({ id: `gtceu:smelting/dust_invar__demagnetize_from_dust` });


    event.shaped(`thermal:sawdust`, ["SSS", "SmS", "SSS"], {
      S: '#forge:bolts/wood',
      m: '#forge:tools/mortars',
    });

    event.remove({ id: `gtceu:shaped/mortar_flint` });
    event.shaped(`gtceu:flint_mortar`, ["AFA", "SFS", "SSS"], {
      S: '#forge:cobblestone/normal',
      A: 'minecraft:air',
      F: '#forge:gems/flint',
    });

    event.shaped(`gtceu:wood_bolt`, ["aAA", "ASA"], {
      S: 'minecraft:stick',
      A: 'minecraft:air',
      a: 'gtceu:flint_axe',
    });
  });