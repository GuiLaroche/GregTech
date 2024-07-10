ServerEvents.recipes((event) => {

    event.remove({ id: `create:crafting/kinetics/hand_crank` });
    event.shaped('create:hand_crank', ["LLL", "AsS"], {
        L: '#minecraft:logs',
        A: "minecraft:air",
        s: '#forge:tools/saws',
        S: 'create:shaft'
      });

      event.remove({ id: `create:crafting/kinetics/water_wheel` });
      event.shaped('create:water_wheel', ["ALA", "LSL", "ALA"], {
          L: '#minecraft:logs',
          A: '#forge:ingots/andesite_alloy',
          S: 'create:shaft',
        });

      event.remove({ id: `create:crafting/materials/andesite_alloy` });
      event.remove({ id: `create:crafting/materials/andesite_alloy_from_zinc` });
      event.shaped('create:andesite_alloy', ["AW", "WA"], {
          W: '#forge:nuggets/wrought_iron',
          A: 'minecraft:andesite',
        });

      event.remove({ id: `create:crafting/kinetics/mechanical_mixer` });
      event.shaped('create:mechanical_mixer', ["ACA", "tBs", "SWs"], {
            A: 'minecraft:air',
            C: 'create:cogwheel',
            t: '#forge:tools/screwdrivers',
            B: 'create:andesite_casing',
            s: '#forge:tools/saws',
            S: 'gtceu:wrought_iron_screw',
            W: 'create:whisk'
          });

      event.remove({ id: `create:crafting/kinetics/basin` });
      event.shaped('create:basin', ["PhP", "PPP"], {
            P: '#forge:plates/andesite_alloy',
            h: '#forge:tools/hammers',
          });
          
      event.remove({ id: `create:crafting/kinetics/depot` });
      event.shaped('create:depot', ["h", "P", "C"], {
            P: '#forge:plates/andesite_alloy',
            h: '#forge:tools/hammers',
            C: 'create:andesite_casing'
          });

      event.remove({ id: `create:crafting/kinetics/empty_blaze_burner` });
      event.shaped('create:empty_blaze_burner', ["ERE", "RNR", "PhP"], {
                P: '#forge:plates/steel',
                h: '#forge:tools/hammers',
                E: 'kubejs:polished_ember_crystal',
                R: '#forge:rods/long/steel',
                N: 'minecraft:netherrack'
              });
              
      event.remove({ id: `create:crafting/kinetics/steam_engine` });
      event.shaped('create:steam_engine', ["SPS", "wRt", "ECE"], {
                S: '#forge:screws/steel',
                P: '#forge:plates/gold',
                E: 'kubejs:polished_ember_crystal',
                R: '#forge:rods/long/andesite_alloy',
                C: '#forge:storage_blocks/copper',
                w: '#forge:tools/wrench',
                t: '#forge:tools/screwdrivers'
              });

      event.remove({ id: `create:crafting/kinetics/cogwheel` });
      event.shaped('create:cogwheel', ["sSW", "WWW"], {
                s: '#forge:tools/saws',
                S: 'create:shaft',
                W:'#minecraft:planks'
              });

      event.remove({ id: `create:crafting/kinetics/large_cogwheel_from_little` });
      event.remove({ id: `create:crafting/kinetics/large_cogwheel` });
      event.shaped('create:large_cogwheel', ["sSW", "WWW"], {
                s: '#forge:tools/saws',
                S: 'create:cogwheel',
                W:'#minecraft:planks'
              });

      event.remove({ id: `create:crafting/kinetics/mechanical_press` });
      event.shaped('create:mechanical_press', ["ASA", "wCh", "ABA"], {
                A: 'minecraft:air',
                S: 'create:shaft',
                C: 'create:andesite_casing',
                w: '#forge:tools/wrench',
                h: '#forge:tools/hammers',
                B: '#forge:storage_blocks/wrought_iron'
              });

      event.remove({ id: `create:crafting/kinetics/millstone` });
      event.shaped('create:millstone', ["ACA", "sBf", "ASA"], {
                A: 'minecraft:air',
                S: 'minecraft:smooth_stone_slab',
                C: 'create:andesite_casing',
                s: '#forge:tools/saws',
                f: '#forge:tools/files',
                B: 'minecraft:smooth_stone'
              });

      
  });