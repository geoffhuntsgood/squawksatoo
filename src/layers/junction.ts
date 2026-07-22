import type { DKBLayer } from "../classes/DKBLayer";
import { DKBCategory } from "../enums/DKBCategory";
import { LayerName } from "../enums/LayerName";

export const junction: DKBLayer = {
  name: LayerName.Junction,
  bananas: [
    {
      num: 1,
      name: "Freezer Path's Special Scoop"
    },
    {
      num: 2,
      name: "Cooled Off Inflammonite!",
      category: DKBCategory.Quintuple
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
      category: DKBCategory.Quintuple
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
      category: DKBCategory.Battle
    },
    {
      num: 12,
      name: "Target on the Run",
      category: DKBCategory.Challenge
    },
    {
      num: 13,
      name: "Out-of-Range Perch",
      category: DKBCategory.Challenge
    },
    {
      num: 14,
      name: "Target Escaped",
      category: DKBCategory.Challenge
    },
    {
      num: 15,
      name: "Cranky's Junction Rant",
      category: DKBCategory.Cranky
    },
    {
      num: 4,
      name: "Shifty Smash: Freezer Path",
      isPostgame: true,
      category: DKBCategory.ShiftySmash
    },
    {
      num: 8,
      name: "Shifty Smash: Forest Path",
      isPostgame: true,
      category: DKBCategory.ShiftySmash
    }
  ]
};
