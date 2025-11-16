import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const ingot: Layer = {
  name: LayerName.Ingot,
  categories: [Category.Tutorial],
  postgameCategories: [
    Category.Triple,
    Category.Battle,
    Category.Chiptone,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Fragmentone,
    Category.Glamtone,
    Category.Growtone,
    Category.Quiztone,
    Category.Seekertone,
    Category.Smashintone
  ],
  bananas: [
    {
      num: 1,
      name: "The First Banandium Gem",
      category: Category.Tutorial
    },
    {
      num: 2,
      name: "Through the Banana-Mining Belt",
      category: Category.Tutorial
    },
    {
      num: 3,
      name: "Digging Up a Snack",
      category: Category.Tutorial
    }
  ],
  postgameBananas: [
    {
      num: 4,
      name: "Secret by the Start"
    },
    {
      num: 5,
      name: "Gold Rush!",
      category: Category.Triple
    },
    {
      num: 6,
      name: "Shifty Smash: Rising Tower",
      category: Category.ShiftySmash
    },
    {
      num: 7,
      name: "Shifty Smash: Break Up the Ring",
      category: Category.ShiftySmash
    },
    {
      num: 8,
      name: "Thwarting the Thorns"
    },
    {
      num: 9,
      name: "Ingot Isle Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 10,
      name: "Ingot Isle Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 11,
      name: "Shifty Smash: Checkerboard Crush",
      category: Category.ShiftySmash
    },
    {
      num: 12,
      name: "The Ingot Isle Growtone",
      category: Category.Growtone
    },
    {
      num: 13,
      name: "The Hungry Ingot Isle Growtone",
      category: Category.Growtone
    },
    {
      num: 14,
      name: "The Sated Ingot Isle Growtone",
      category: Category.Growtone
    },
    {
      num: 15,
      name: "Post-Sprint Treat"
    },
    {
      num: 16,
      name: "Snack in a Sunken Slab"
    },
    {
      num: 17,
      name: "Ingot Isle Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 18,
      name: "Ingot Isle Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 19,
      name: "Ingot Isle Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 20,
      name: "Decked Out in Gold",
      category: Category.Glamtone
    },
    {
      num: 21,
      name: "Cranky's Ingot Isle Rant",
      category: Category.Cranky
    },
    {
      num: 22,
      name: "Finished Four Fights!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 23,
      name: "Beat Eight Bouts!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 24,
      name: "Won Thirteen Throwdowns!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 25,
      name: "Battle Rush Cleared!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 26,
      name: "Kong-quered Inflammonite!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 27,
      name: "Kong-quered Abracajabya!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 28,
      name: "Kong-quered Sinister Blusterwing!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 29,
      name: "Kong-quered Muckety-Muck!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 30,
      name: "Kong-quered Stompenclomper!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 31,
      name: "Kong-quered the Boss Rush!",
      category: Category.Quintuple,
      category2: Category.Battle
    },
    {
      num: 32,
      name: "Snack on the Outskirts of Town"
    },
    {
      num: 33,
      name: "Shifty Smash: Quick & Nimble",
      category: Category.ShiftySmash
    },
    {
      num: 34,
      name: "Claimed on the Crane"
    },
    {
      num: 35,
      name: "The Best of the Bunch"
    },
    {
      num: 36,
      name: "Ingot Isle Chip Exchange",
      category: Category.Chiptone
    }
  ]
};
