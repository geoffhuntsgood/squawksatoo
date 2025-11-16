import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const hilltop: Layer = {
  name: LayerName.Hilltop,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Bloomintone,
    Category.Chiptone,
    Category.Fragmentone,
    Category.Quiztone,
    Category.Seekertone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Growtone],
  bananas: [
    {
      num: 1,
      name: "Bruised Peekabruiser!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "Cave-Dwelling Treasure"
    },
    {
      num: 6,
      name: "Battle: Dig, Dig, Dig on Down",
      category: Category.Battle
    },
    {
      num: 7,
      name: "The Shifty Path under the Village"
    },
    {
      num: 8,
      name: "A Shifty Path Forward",
      category: Category.Challenge
    },
    {
      num: 9,
      name: "An Out-of-the-Way Room",
      category: Category.Challenge
    },
    {
      num: 10,
      name: "Make-Your-Own Platforms",
      category: Category.Challenge
    },
    {
      num: 11,
      name: "Hilltop Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 12,
      name: "Hilltop Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 13,
      name: "Battle: Spike-Spout Scrap",
      category: Category.Battle
    },
    {
      num: 14,
      name: "Hilltop Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 15,
      name: "Hilltop Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 16,
      name: "Bloomed in the Hilltop Layer",
      category: Category.Bloomintone
    },
    {
      num: 17,
      name: "Thorny-Hill Finish Line",
      category: Category.Challenge
    },
    {
      num: 18,
      name: "Thorny-Hill Buzzer Beater",
      category: Category.Challenge
    },
    {
      num: 19,
      name: "Thorny-Hill Hideaway",
      category: Category.Challenge
    },
    {
      num: 20,
      name: "Shifty Smash: Break the Canopy",
      category: Category.ShiftySmash
    },
    {
      num: 21,
      name: "Battle: Three-Tiered Tussle",
      category: Category.Battle
    },
    {
      num: 22,
      name: "Peeled from Peel Peak"
    },
    {
      num: 23,
      name: "The Skies over Peel Peak"
    },
    {
      num: 24,
      name: "Bananas All the Way Down"
    },
    {
      num: 25,
      name: "Shifty Smash: The Rotating Ring",
      category: Category.ShiftySmash
    },
    {
      num: 26,
      name: "Against the Oncoming Tide",
      category: Category.Challenge
    },
    {
      num: 27,
      name: "Against the Winding Tide",
      category: Category.Challenge
    },
    {
      num: 28,
      name: "Amidst the Hidden Tide",
      category: Category.Challenge
    },
    {
      num: 29,
      name: "The Flying Banana"
    },
    {
      num: 30,
      name: "Gold-Dipped Banana"
    },
    {
      num: 31,
      name: "Hilltop Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 32,
      name: "Cranky's Hilltop Rant",
      category: Category.Cranky
    },
    {
      num: 33,
      name: "Shifty Smash: Downhill Run",
      category: Category.ShiftySmash
    },
    {
      num: 34,
      name: "Tunneling through the Pit"
    },
    {
      num: 35,
      name: "Treasured Memories",
      category: Category.Challenge
    },
    {
      num: 36,
      name: "Over the Valley",
      category: Category.Challenge
    },
    {
      num: 37,
      name: "Hijinxs in the Jungle",
      category: Category.Challenge
    },
    {
      num: 38,
      name: "Hilltop Chip Exchange",
      category: Category.Chiptone
    }
  ],
  postgameBananas: [
    {
      num: 3,
      name: "The Hilltop Growtone",
      category: Category.Growtone
    },
    {
      num: 4,
      name: "The Hungry Hilltop Growtone",
      category: Category.Growtone
    },
    {
      num: 5,
      name: "The Sated Hilltop Growtone",
      category: Category.Growtone
    }
  ]
};
