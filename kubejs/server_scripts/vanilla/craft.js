ServerEvents.recipes((event) => {
            const color_list = ["white", "light_gray", "gray", "black", "red", "brown", "orange", "yellow", "lime", "green", "cyan", "light_blue", "blue", "purple", "magenta", "pink"]
            color_list.forEach((color) => {
              event.remove({ id: `upgrade_aquatic:${color}_bedroll` });
              event.remove({ id: `minecraft:${color}_bed` });
              event.remove({ id: `gtceu:shaped/${color}_bed` });

              event.shaped(`minecraft:${color}_bed`, ["sSs", "WBA", "FDF"], {
                s: "#forge:screws/iron",
                S: "#forge:tools/screwdrivers",
                W: "#minecraft:wool",
                B: `upgrade_aquatic:${color}_bedroll`,
                A: "#forge:tools/saws",
                F: "#forge:fences",
                D: "#minecraft:wooden_slabs",
              })
          })
            
            event.shaped(`3x kubejs:furnace_clay`, ["CCC", "GMG", "GGG"], {
                C: "minecraft:clay_ball",
                G: "minecraft:gravel",
                M: "gtceu:brick_wooden_form",
              });
              event.remove({ id: `gtceu:shaped/anvil` });
              event.shaped(`minecraft:anvil`, ["BBB", "HDF", "DRD"], {
                B: "#forge:storage_blocks/wrought_iron",
                H: "#forge:tools/hammers",
                D: "#forge:double_plates/wrought_iron",
                F: "#forge:tools/files",
                R: "#forge:rods/long/wrought_iron"
              });

              event.shaped(`gtceu:empty_wooden_form`, ["AWA", "SAA", "AAA"], {
                A: "minecraft:air",
                W: "#minecraft:planks",
                S: "gtceu:flint_axe",
              });

              event.remove({ id: `minecraft:bow` });
              event.shaped(`minecraft:bow`, ["ASR", "SsR", "ASR"], {
                A: "minecraft:air",
                S: "#forge:rods/wood",
                R: "#forge:ropes",
                s: "#forge:tools/saws"
              });

              event.remove({ id: `minecraft:crossbow` });
              event.shaped(`minecraft:crossbow`, ["SRS", "sBf", "APA"], {
                A: "minecraft:air",
                S: "#forge:rods/wood",
                R: "#forge:rings/wrought_iron",
                s: "#forge:tools/saws",
                B: "minecraft:bow",
                f: "#forge:tools/files",
                P: "#forge:springs/iron"
              });
              

              event.remove({ id: `alexsmobs:squid_grapple` });
              event.shaped(`alexsmobs:squid_grapple`, ["TTT", "PCP", "wSf"], {
                T: "alexsmobs:lost_tentacle",
                P: "#forge:plates/annealed_copper",
                C: "minecraft:crossbow",
                w: "#forge:tools/wrenches",
                S: "#forge:silk",
                f: "#forge:tools/files"
              });

              event.remove({ id: `minecraft:shears` });
              event.shaped(`minecraft:shears`, ["LSP", "IsA", "LSP"], {
                L: "#forge:leather",
                S: "#forge:screws/iron",
                P: "#forge:plates/iron",
                I: "minecraft:iron_ingot",
                s: "#forge:tools/screwdrivers",
                A: "minecraft:air"
              });

              event.shaped(`kubejs:fire_starter`, ["S", "D", "S"], {
                S: "minecraft:stick",
                D: '#forge:dusts/wood'
              });

              event.shaped(`minecraft:campfire`, ["ASA", "SFS", "WWW"], {
                A: "minecraft:air",
                S: 'minecraft:stick',
                F: 'kubejs:fire_starter',
                W: '#minecraft:logs'
              });
      });