ServerEvents.recipes((event) => {
const metalList = ["iron", "golden", "diamond", "netherite"];
const plateList = ["iron", "gold"];
metalList.forEach((metal) => {
    event.remove({ id: `minecraft:${metal}_helmet` });
    event.remove({ id: `minecraft:${metal}_chestplate` });
    event.remove({ id: `minecraft:${metal}_leggings` });
    event.remove({ id: `minecraft:${metal}_boots` });
})
    for(let i = 0; i < plateList.length; i++) {
        //Helmet
        event.shaped(`minecraft:${metalList[i]}_helmet`, ["PPP", "PAP", "NHN"], {
            P: `#forge:plates/${plateList[i]}`,
            A: "minecraft:chainmail_helmet",
            N: "minecraft:air",
            H: "#forge:tools/hammers",
          });
          //Chestplate
          event.shaped(`minecraft:${metalList[i]}_chestplate`, ["PHP", "PAP", "PPP"], {
            P: `#forge:plates/${plateList[i]}`,
            A: "minecraft:chainmail_chestplate",
            N: "minecraft:air",
            H: "#forge:tools/hammers",
          });
          //Leggings
          event.shaped(`minecraft:${metalList[i]}_leggings`, ["PPP", "PAP", "PHP"], {
            P: `#forge:plates/${plateList[i]}`,
            A: "minecraft:chainmail_leggings",
            N: "minecraft:air",
            H: "#forge:tools/hammers",
          });
          //Boots
          event.shaped(`minecraft:${metalList[i]}_boots`, ["NNN", "PHP", "PAP"], {
            P: `#forge:plates/${plateList[i]}`,
            A: "minecraft:chainmail_boots",
            N: "minecraft:air",
            H: "#forge:tools/hammers",
          });
    }
  });
  