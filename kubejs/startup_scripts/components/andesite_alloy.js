GTCEuStartupEvents.registry('gtceu:material', event => {
    
    GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_PLATE);
    GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_ROD);
    GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_SPRING);
    GTMaterials.get('andesite_alloy').addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL);
  });