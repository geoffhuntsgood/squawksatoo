import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const core: Layer = {
  name: LayerName.Core,
  categories: [
    Category.Quintuple,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Chiptone,
    Category.Quiztone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Triple],
  bananas: [
    {
      num: 1,
      name: "Victory over Void Kong!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "A View of the King"
    },
    {
      num: 3,
      name: "In the Belly of K. Rool"
    },
    {
      num: 4,
      name: "Floating over Fractone Fort"
    },
    {
      num: 5,
      name: "Shifty Smash: Inhale and Destroy",
      category: Category.ShiftySmash
    },
    {
      num: 6,
      name: "Planet Core Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 7,
      name: "Planet Core Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 8,
      name: "Survived the Gravel Gauntlet"
    },
    {
      num: 9,
      name: "Klaptrapped behind the Goo"
    },
    {
      num: 10,
      name: "The Switcheroo Chase"
    },
    {
      num: 11,
      name: "Korner of the Krevasse"
    },
    {
      num: 12,
      name: "Cracking Open the Way"
    },
    {
      num: 14,
      name: "Stomped Stompenclomper! Again!"
    },
    {
      num: 15,
      name: "Planet Core Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 16,
      name: "Shifty Smash: Skyward Smashing",
      category: Category.ShiftySmash
    },
    {
      num: 17,
      name: "Fractone Cradle Climb"
    },
    {
      num: 18,
      name: "Turf Surf Pit Stop"
    },
    {
      num: 19,
      name: "Turf Surf Finish Line"
    },
    {
      num: 20,
      name: "Cranky's Planet Core Rant",
      category: Category.Cranky
    },
    {
      num: 21,
      name: "Rocked King K. Rool!",
      category: Category.Quintuple
    }
  ],
  postgameBananas: [
    {
      num: 13,
      name: "The Kremling Krew's Last Stand"
    },
    {
      num: 22,
      name: "Halfway through the Harmoneel",
      category: Category.Triple
    },
    {
      num: 23,
      name: "End of Harmoneel",
      category: Category.Quintuple
    }
  ]
};
