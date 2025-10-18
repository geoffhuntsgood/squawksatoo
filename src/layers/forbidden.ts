import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const forbidden: Layer = {
  name: LayerName.Forbidden,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.Chiptone,
    Category.Smashintone
  ],
  postgameCategories: [],
  bananas: [
    {
      num: 1,
      name: "Scrubbed Muckety-Muck!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "Secret in the Shaft"
    },
    {
      num: 3,
      name: "Soggy First Steps",
      category: Category.Challenge
    },
    {
      num: 4,
      name: "Swift Sideways Shuffle",
      category: Category.Challenge
    },
    {
      num: 5,
      name: "No Swimming, No Slipping",
      category: Category.Challenge
    },
    {
      num: 6,
      name: "Battle: Nighty Night, Nemesis",
      category: Category.Battle
    },
    {
      num: 7,
      name: "Pitching for Passage"
    },
    {
      num: 8,
      name: "Past the Shuffling Ceiling"
    },
    {
      num: 9,
      name: "Under, Up, and Inside"
    },
    {
      num: 10,
      name: "Battle: Forged Path Upward",
      category: Category.Battle
    },
    {
      num: 11,
      name: "Passage to the Lonely Island"
    },
    {
      num: 12,
      name: "Perilous Passage"
    },
    {
      num: 13,
      name: "Cranky's Forbidden Rant",
      category: Category.Cranky
    },
    {
      num: 14,
      name: "Halfway Shuffled",
      category: Category.Challenge
    },
    {
      num: 15,
      name: "Balloons in the Shuffle",
      category: Category.Challenge
    },
    {
      num: 16,
      name: "Survived the Shuffle",
      category: Category.Challenge
    },
    {
      num: 17,
      name: "Unwelcome at Go-No-Further Gate!"
    },
    {
      num: 18,
      name: "Battle: Shuffling Walls",
      category: Category.Battle
    },
    {
      num: 19,
      name: "Forbidden Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 20,
      name: "Passage through Lava"
    },
    {
      num: 21,
      name: "Shuffling Ascent",
      category: Category.Challenge
    },
    {
      num: 22,
      name: "Behind the Shuffle",
      category: Category.Challenge
    },
    {
      num: 23,
      name: "Atop the Shuffle",
      category: Category.Challenge
    },
    {
      num: 25,
      name: "Forbidden Chip Exchange",
      category: Category.Chiptone
    }
  ],
  postgameBananas: [
    {
      num: 24,
      name: "A Gift from Grumpy"
    }
  ]
};
