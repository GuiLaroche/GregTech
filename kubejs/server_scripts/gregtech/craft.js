ServerEvents.recipes((event) => {
    event.remove({ id: `gtceu:shaped/treated_wood_planks` });
    event.remove({ id: `gtceu:smelting/dust_bronze__demagnetize_from_dust` });
    event.remove({ id: `gtceu:smelting/dust_brass__demagnetize_from_dust` });
    event.remove({ id: `gtceu:smelting/dust_invar__demagnetize_from_dust` });
  });