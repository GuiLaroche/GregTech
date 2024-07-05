ClientEvents.highPriorityAssets(event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    rename('laendli_transport:vehicle_part_propeller', 'Vehicule Propeller')
    
})