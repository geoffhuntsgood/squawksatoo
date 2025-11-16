import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const junction: Layer = {
  name: LayerName.Junction,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky
  ],
  postgameCategories: [Category.ShiftySmash],
  bananas: [
    {
      num: 1,
      name: "Freezer Path's Special Scoop"
    },
    {
      num: 2,
      name: "Cooled Off Inflammonite!",
      category: Category.Quintuple
    },
    {
      num: 3,
      name: "Freezer Path's Hidden Snack"
    },
    {
      num: 5,
      name: "Forest Path's Birdbrain"
    },
    {
      num: 6,
      name: "Uprooted Abracajabya!",
      category: Category.Quintuple
    },
    {
      num: 7,
      name: "Forest Path's Hidden Snack"
    },
    {
      num: 9,
      name: "Cleared the Way to Clash Point!"
    },
    {
      num: 10,
      name: "Clash Point's Hidden Snack"
    },
    {
      num: 11,
      name: "Battle: A Fiery Fracas",
      category: Category.Battle
    },
    {
      num: 12,
      name: "Target on the Run",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Out-of-Range Perch",
      category: Category.Challenge
    },
    {
      num: 14,
      name: "Target Escaped",
      category: Category.Challenge
    },
    {
      num: 15,
      name: "Cranky's Junction Rant",
      category: Category.Cranky
    }
  ],
  postgameBananas: [
    {
      num: 4,
      name: "Shifty Smash: Freezer Path",
      category: Category.ShiftySmash
    },
    {
      num: 8,
      name: "Shifty Smash: Forest Path",
      category: Category.ShiftySmash
    }
  ]
};
