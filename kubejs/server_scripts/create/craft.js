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
      event.shaped('create:mechanical_mixer', ["ACA", "tBs", "SWS"], {
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

      event.remove({ id: `create:crafting/kinetics/cuckoo_clock` });
      event.shaped('create:cuckoo_clock', ["sPt", "VCV", "SHS"], {
                S: '#minecraft:wooden_slabs',
                C: 'create:andesite_casing',
                s: '#forge:tools/saws',
                t: '#forge:tools/screwdrivers',
                P: '#minecraft:planks',
                V: '#forge:screws/wrought_iron',
                H: '#forge:clocks'
              });

      event.remove({ id: `vintageimprovements:craft/belt_grinder` });
      event.shaped('vintageimprovements:belt_grinder', ["ABA", "sSk", "ACA"], {
                A: 'minecraft:air',
                B: 'vintageimprovements:grinder_belt',
                s: '#forge:tools/saws',
                k: '#forge:tools/knives',
                S: 'create:shaft',
                C: 'create:andesite_casing',
              });

      event.shaped('kubejs:rough_spring_coiling_machine_wheel', ["ASA", "SWS", "ASA"], {
                A: 'minecraft:air',
                S: '#forge:plates/andesite_alloy',
                W: '#forge:storage_blocks/wrought_iron',
              });

      event.remove({ id: `vintageimprovements:craft/spring_coiling_machine` });
      event.shaped('vintageimprovements:spring_coiling_machine', ["RVh", "WCS", "RVt"], {
                R: '#forge:rods/steel',
                V: '#forge:screws/wrought_iron',
                h: '#forge:tools/hammers',
                t: '#forge:tools/screwdrivers',
                S: 'create:shaft',
                C: 'create:andesite_casing',
                W: 'vintageimprovements:spring_coiling_machine_wheel',
              });

      event.remove({ id: `create:crafting/kinetics/fluid_valve` });
      event.shaped('create:fluid_valve', ["PFw"], {
                P: '#forge:plates/steel',
                F: 'create:fluid_pipe',
                w: '#forge:tools/wrenches'
              });

      event.remove({ id: `create:crafting/kinetics/fluid_tank` });
      event.shaped('create:fluid_tank', ["PDP", "hBw", "PDP"], {
                P: '#forge:plates/copper',
                B: 'gtceu:wood_drum',
                w: '#forge:tools/wrenches',
                h: '#forge:tools/hammers',
                D:'#forge:double_plates/copper'
              });

      event.remove({ id: `create:crafting/kinetics/hose_pulley` });
      event.shaped('create:hose_pulley', ["wCR", "RRR", "RRP"], {
                P: '#forge:plates/copper',
                C: 'create:copper_casing',
                w: '#forge:tools/wrenches',
                R: '#forge:ropes'
              });

      event.remove({ id: `create:crafting/kinetics/smart_chute` });
      event.shaped('create:smart_chute', ["hPt", "SCS", "AEA"], {
                A: 'minecraft:air',
                h: '#forge:tools/hammers',
                t: '#forge:tools/screwdrivers',
                P: '#forge:plates/brass',
                S: '#forge:screws/steel',
                C: 'create:chute',
                E: 'create:electron_tube',
              });

      event.remove({ id: `create:crafting/kinetics/smart_fluid_pipe` });
      event.shaped('create:smart_fluid_pipe', ["hPt", "SCS", "AEA"], {
                A: 'minecraft:air',
                h: '#forge:tools/hammers',
                t: '#forge:tools/screwdrivers',
                P: '#forge:plates/brass',
                S: '#forge:screws/steel',
                C: 'create:fluid_pipe',
                E: 'create:electron_tube',
              });

      event.remove({ id: `create:crafting/kinetics/fluid_pipe_vertical` });
      event.remove({ id: `create:crafting/kinetics/fluid_pipe` });
      event.shaped('2x create:fluid_pipe', ["APA", "hIw", "APA"], {
                A: 'minecraft:air',
                h: '#forge:tools/hammers',
                w: '#forge:tools/wrenches',
                P: '#forge:plates/copper',
                I: '#forge:ingots/copper',
              });

      event.remove({ id: `create:crafting/kinetics/mechanical_pump` });
      event.shaped('create:mechanical_pump', ["P", "S", "f"], {
                P: 'create:fluid_pipe',
                S: 'minecraft:smooth_stone_slab',
                f: '#forge:tools/files',
              });

      event.remove({ id: `create:crafting/kinetics/belt_connector` });
      event.shaped('create:belt_connector', ["AkA", "KKK", "KKK"], {
                A: 'minecraft:air',
                K: 'minecraft:dried_kelp',
                k: '#forge:tools/knives',
              });

      event.remove({ id: `create:crafting/kinetics/chute` });
      event.shaped('2x create:chute', ["PCP", "AfA"], {
                A: 'minecraft:air',
                P: '#forge:plates/wrought_iron',
                f: '#forge:tools/files',
                C: 'minecraft:cauldron',
              });

      event.remove({ id: `create:crafting/kinetics/speedometer` });
      event.shaped('create:speedometer', ["AGA", "sCw", "ARA"], {
                A: 'minecraft:air',
                G: '#forge:panes/glass',
                s: '#forge:tools/saws',
                C: 'create:andesite_casing',
                w: '#forge:tools/wrenches',
                R: 'vintageimprovements:redstone_module',
              });

      event.remove({ id: `create:crafting/kinetics/stressometer` });
      event.shaped('create:stressometer', ["ARA", "sCw", "AGA"], {
                A: 'minecraft:air',
                G: '#forge:panes/glass',
                s: '#forge:tools/saws',
                C: 'create:andesite_casing',
                w: '#forge:tools/wrenches',
                R: 'vintageimprovements:redstone_module',
              });

      event.remove({ id: `create:crafting/kinetics/propeller` });
      event.shaped('create:propeller', ["SPt", "PRP", "hPS"], {
                S: '#forge:screws/iron',
                P: '#forge:plates/iron',
                R: '#forge:rods/andesite_alloy',
                h: '#forge:tools/hammers',
                t: '#forge:tools/screwdrivers'
              });

      event.remove({ id: `create:crafting/kinetics/encased_fan` });
      event.shaped('create:encased_fan', ["ASA", "hCs", "APA"], {
                A: 'minecraft:air',
                S: 'create:shaft',
                P: 'create:propeller',
                s: '#forge:tools/saws',
                h: '#forge:tools/hammers',
                C: 'create:andesite_casing',
              });

      event.remove({ id: `create:crafting/kinetics/turntable` });
      event.shaped('create:turntable', ["s", "D", "S"], {
                S: 'create:shaft',
                D: '#minecraft:wooden_slabs',
                s: '#forge:tools/saws',
              });

      event.remove({ id: `create:crafting/kinetics/nozzle` });
      event.shaped('create:nozzle', ["fPh", "RSR", "PPP"], {
                S: '#forge:string',
                R: '#forge:rods/andesite_alloy',
                P: '#forge:plates/andesite_alloy',
                h: '#forge:tools/hammers',
                f: '#forge:tools/files',
              });

      event.remove({ id: `create:crafting/kinetics/item_drain` });
      event.shaped('create:item_drain', ["SDS", "wft", "ACA"], {
                S: '#forge:screws/steel',
                D: 'gtceu:item_filter',
                A: 'minecraft:air',
                C: 'create:copper_casing',
                w: '#forge:tools/wrenches',
                f: '#forge:tools/files',
                t: '#forge:tools/screwdrivers'
              });

      event.remove({ id: `create:crafting/kinetics/spout` });
      event.shaped('create:spout', ["AGA", "wCh", "ARA"], {
                G: 'gtceu:glass_tube',
                A: 'minecraft:air',
                C: 'create:copper_casing',
                h: '#forge:tools/hammers',
                w: '#forge:tools/wrenches',
                R: '#forge:plates/rubber',
              });

      event.remove({ id: `create:crafting/kinetics/portable_fluid_interface` });
      event.shaped('create:portable_fluid_interface', ["C", "H", "w"], {
                H: 'create:chute',
                C: 'create:copper_casing',
                w: '#forge:tools/wrenches',
              });

      event.remove({ id: `create:crafting/kinetics/steam_whistle` });
      event.shaped('create:steam_whistle', ["AIA", "wIf", "APA"], {
                A: 'minecraft:air',
                w: '#forge:tools/wrenches',
                I: '#forge:ingots/brass',
                P: '#forge:plates/copper',
                f: '#forge:tools/files'
              });

      event.remove({ id: `create:crafting/kinetics/mechanical_piston` });
      event.shaped('create:mechanical_piston', ["sPt", "VGV", "EEE"], {
                P: '#forge:pistons',
                V: '#forge:screws/wrought_iron',
                G: 'create:gearbox',
                E: 'create:piston_extension_pole',
                s: '#forge:tools/saws',
                t: '#forge:tools/screwdrivers'
              });

      event.remove({ id: `create:crafting/kinetics/piston_extension_pole` });
      event.shaped('3x create:piston_extension_pole', ["PWP", "sRf", "PWP"], {
                P: '#forge:plates/andesite_alloy',
                W: '#minecraft:planks',
                R: '#forge:rods/andesite_alloy',
                s: '#forge:tools/saws',
                f: '#forge:tools/files'
              });

      event.remove({ id: `create:crafting/kinetics/gantry_carriage` });
      event.shaped('create:gantry_carriage', ["PBP", "sGw", "CSC"], {
                P: '#forge:plates/wrought_iron',
                B: '#forge:slimeballs',
                G: 'create:gearbox',
                C: 'create:cogwheel',
                S: 'create:shaft',
                s: '#forge:tools/saws',
                w: '#forge:tools/wrenches'
              });

      event.remove({ id: `create:crafting/kinetics/mechanical_bearing` });
      event.shaped('create:mechanical_bearing', ["PBP", "VCV", "AtA"], {
                P: '#forge:plates/wrought_iron',
                B: '#forge:slimeballs',
                V: '#forge:screws/wrought_iron',
                C: 'create:andesite_casing',
                A: 'minecraft:air',
                t: '#forge:tools/screwdrivers',
              });

      event.remove({ id: `create:crafting/kinetics/windmill_bearing` });
      event.shaped('create:windmill_bearing', ["PBP", "wRs", "ASA"], {
                P: '#forge:plates/wrought_iron',
                B: '#forge:slimeballs',
                R: '#forge:stone',
                S: 'create:shaft',
                A: 'minecraft:air',
                w: '#forge:tools/wrenches',
                s: '#forge:tools/saws',
              });

      event.remove({ id: `create:crafting/kinetics/rope_pulley` });
      event.shaped('create:rope_pulley', ["wCR", "RRR", "RRP"], {
                P: '#forge:plates/wrought_iron',
                R: '#forge:ropes',
                C: 'create:andesite_casing',
                w: '#forge:tools/wrenches',
              });

      event.remove({ id: `create:crafting/kinetics/elevator_pulley` });
      event.shaped('create:elevator_pulley', ["wCR", "RRR", "RRP"], {
                P: '#forge:plates/steel',
                R: '#forge:ropes',
                C: 'create:brass_casing',
                w: '#forge:tools/wrenches',
              });

      event.remove({ id: `create:crafting/kinetics/controller_rail` });
      event.shaped('create:controller_rail', ["RwR", "RSR", "RER"], {
                E: 'create:electron_tube',
                R: '#forge:rods/long/gold',
                S: '#forge:rods/wooden',
                w: '#forge:tools/wrenches',
              });

      event.remove({ id: `create:crafting/kinetics/clockwork_bearing` });
      event.shaped('create:clockwork_bearing', ["PBP", "VCV", "wEt"], {
                P: '#forge:plates/steel',
                B: '#forge:slimeballs',
                V: '#forge:screws/steel',
                C: 'create:brass_casing',
                w: '#forge:tools/wrenches',
                t: '#forge:tools/screwdrivers',
                E: 'create:electron_tube',
              });

      event.remove({ id: `create:crafting/kinetics/cart_assembler` });
      event.shaped('create:cart_assembler', ["ABA", "PPP", "WsW"], {
                P: '#forge:plates/andesite_alloy',
                B: '#forge:slimeballs',
                W: '#minecraft:logs',
                s: '#forge:tools/saws',
                A: 'minecraft:air',
              });

      event.remove({ id: `create:crafting/kinetics/linear_chassis` });
      event.shaped('3x create:linear_chassis', ["PPP", "WWW", "PPP"], {
                P: '#forge:plates/andesite_alloy',
                W: '#forge:stripped_logs',
              });

      event.remove({ id: `create:crafting/kinetics/radial_chassis` });
      event.shaped('3x create:radial_chassis', ["PWP", "PWP", "PWP"], {
                P: '#forge:plates/andesite_alloy',
                W: '#forge:stripped_logs',
              });


      



  });