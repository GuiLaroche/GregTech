ServerEvents.tags("block", (event) => {
  event.add("forge:mineable/wrench", "travelanchors:travel_anchor");
  event.add("bakery:allows_cooking", "farmersdelight:stove");
  event.add("bakery:allows_cooking", "nethersdelight:blackstone_stove");
  event.add("herbalbrews:allows_cooking", "nethersdelight:blackstone_stove");
});
