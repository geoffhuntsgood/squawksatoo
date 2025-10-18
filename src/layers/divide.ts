import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const divide: Layer = {
  name: LayerName.Divide,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.Quiztone
  ],
  postgameCategories: [Category.Glamtone],
  bananas: [
    {
      num: 1,
      name: "Stomped Stompenclomper!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "A Switcheroo Boost",
      category: Category.Challenge
    },
    {
      num: 3,
      name: "A Switcheroo Breakthrough",
      category: Category.Challenge
    },
    {
      num: 4,
      name: "A Masterful Switcheroo Maneuver",
      category: Category.Challenge
    },
    {
      num: 5,
      name: "Divide Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 6,
      name: "Switcheroo through the Wall"
    },
    {
      num: 7,
      name: "Safe-Landing Switcheroo"
    },
    {
      num: 8,
      name: "Battle: Uproot to the Brute",
      category: Category.Battle
    },
    {
      num: 9,
      name: "Cranky's Divide Rant",
      category: Category.Cranky
    }
  ],
  postgameBananas: [
    {
      num: 10,
      name: "Decked Out in Animal Print",
      category: Category.Glamtone
    }
  ]
};
