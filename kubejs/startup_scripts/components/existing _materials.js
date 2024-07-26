GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

    //Ingots
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('andesite_alloy'), 
            () => Item.getItem('create:andesite_alloy'))
        
    })