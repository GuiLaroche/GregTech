ServerEvents.recipes(event => {

event.custom({
    type: "create:item_application",
  ingredients: [
    { tag: "forge:stripped_logs" },
    { item: 'gtceu:andesite_alloy_ingot' }
    ],
  results: [{ item: "create:andesite_casing" }]
});

event.custom({
    type: "create:item_application",
  ingredients: [
    { tag: "forge:stripped_wood" },
    { item: 'gtceu:andesite_alloy_ingot' }
    ],
  results: [{ item: "create:andesite_casing" }]
});

});
