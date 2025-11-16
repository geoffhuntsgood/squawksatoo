import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const landfill: Layer = {
  name: LayerName.Landfill,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Chiptone,
    Category.Fragmentone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Bloomintone],
  bananas: [
    {
      num: 1,
      name: "Top of the Heap"
    },
    {
      num: 2,
      name: "Freed the Blusterwing!",
      category: Category.Quintuple
    },
    {
      num: 4,
      name: "Mazy-Cave Balloons",
      category: Category.Challenge
    },
    {
      num: 5,
      name: "Mazy-Cave Hidden Room",
      category: Category.Challenge
    },
    {
      num: 6,
      name: "Mazy-Cave Buried Banana",
      category: Category.Challenge
    },
    {
      num: 7,
      name: "Buried in Rubble"
    },
    {
      num: 8,
      name: "Up and Down, Underground"
    },
    {
      num: 9,
      name: "Shifty Smash: Dig Deep",
      category: Category.ShiftySmash
    },
    {
      num: 10,
      name: "Sniffing out a Secret",
      category: Category.Challenge
    },
    {
      num: 11,
      name: "Wrecked by Elephant Bananza",
      category: Category.Challenge
    },
    {
      num: 12,
      name: "Quickly with Elephant Bananza",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Battle: Search and Destroy",
      category: Category.Battle
    },
    {
      num: 14,
      name: "Caged by a Hungry Guard"
    },
    {
      num: 15,
      name: "Landfill Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 16,
      name: "Landfill Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 17,
      name: "Nestled within the Debris"
    },
    {
      num: 18,
      name: "Cranky's Landfill Rant",
      category: Category.Cranky
    },
    {
      num: 19,
      name: "Landfill Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 20,
      name: "A Rare Treasure"
    },
    {
      num: 21,
      name: "Battle: Hundred-Harasser Horde",
      category: Category.Battle
    },
    {
      num: 22,
      name: "Delivery Complete",
      category: Category.Challenge
    },
    {
      num: 23,
      name: "Speedy Delivery",
      category: Category.Challenge
    },
    {
      num: 24,
      name: "Beneath the Bowl",
      category: Category.Challenge
    },
    {
      num: 25,
      name: "Battle: Explosive Excavation",
      category: Category.Battle
    },
    {
      num: 26,
      name: "Follow the Crystal Vein"
    },
    {
      num: 27,
      name: "Landfill Chip Exchange",
      category: Category.Chiptone
    }
  ],
  postgameBananas: [
    {
      num: 3,
      name: "Bloomed in the Landfill Layer",
      category: Category.Bloomintone
    }
  ]
};
