import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const resort: Layer = {
  name: LayerName.Resort,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Bloomintone,
    Category.Chiptone,
    Category.Fragmentone,
    Category.Growtone,
    Category.Quiztone,
    Category.Seekertone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Glamtone],
  bananas: [
    {
      num: 1,
      name: "Drove Off Void Kong!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "Buried in the Beach"
    },
    {
      num: 3,
      name: "Strawberry and Banana"
    },
    {
      num: 4,
      name: "Checking into the Tropical Retreat"
    },
    {
      num: 5,
      name: "Resort Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 6,
      name: "Underground Runaround"
    },
    {
      num: 7,
      name: "Up Means Down"
    },
    {
      num: 8,
      name: "Secret Beachside Grotto"
    },
    {
      num: 9,
      name: "A Daring Drop",
      category: Category.Challenge
    },
    {
      num: 10,
      name: "Rail-Ride Rest Stop"
    },
    {
      num: 11,
      name: "End of the Line"
    },
    {
      num: 12,
      name: "Battle: Pulverizer's Path",
      category: Category.Battle
    },
    {
      num: 13,
      name: "The Resort Growtone",
      category: Category.Growtone
    },
    {
      num: 14,
      name: "The Hungry Resort Growtone",
      category: Category.Growtone
    },
    {
      num: 15,
      name: "The Sated Resort Growtone",
      category: Category.Growtone
    },
    {
      num: 16,
      name: "Resort Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 17,
      name: "Resort Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 18,
      name: "Resort Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 19,
      name: "Shifty Smash: Liftoff to the Sky",
      category: Category.ShiftySmash
    },
    {
      num: 20,
      name: "Cranky's Resort Rant",
      category: Category.Cranky
    },
    {
      num: 21,
      name: "At the Cannon Crossroads"
    },
    {
      num: 22,
      name: "Battle: Baited to a Bruising",
      category: Category.Battle
    },
    {
      num: 23,
      name: "Shifty Smash: Seaside Smashing",
      category: Category.ShiftySmash
    },
    {
      num: 24,
      name: "Bloomed in the Resort Layer",
      category: Category.Bloomintone
    },
    {
      num: 25,
      name: "Resort Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 26,
      name: "Shaved-Ice Trainee",
      category: Category.Challenge
    },
    {
      num: 27,
      name: "Shaved-Ice Artisan",
      category: Category.Challenge
    },
    {
      num: 28,
      name: "Shaved-Ice Master",
      category: Category.Challenge
    },
    {
      num: 29,
      name: "Rising Seafloor Ruins"
    },
    {
      num: 30,
      name: "Changing Lanes",
      category: Category.Challenge
    },
    {
      num: 31,
      name: "Clearing the Lanes",
      category: Category.Challenge
    },
    {
      num: 32,
      name: "Pause for the Underpass",
      category: Category.Challenge
    },
    {
      num: 33,
      name: "Adrift at Sea"
    },
    {
      num: 34,
      name: "Floating Freebie"
    },
    {
      num: 35,
      name: "Quick Snack on Skydive Isle"
    },
    {
      num: 36,
      name: "Skydive Isle's Side Pocket"
    },
    {
      num: 37,
      name: "Shifty Smash: Floating Rotation"
    },
    {
      num: 38,
      name: "Battle: Aerial Aiming",
      category: Category.Battle
    },
    {
      num: 39,
      name: "Down from Skydive Isle"
    },
    {
      num: 40,
      name: "Above the Big Watermelon"
    },
    {
      num: 42,
      name: "Resort Chip Exchange",
      category: Category.Chiptone
    }
  ],
  postgameBananas: [
    {
      num: 41,
      name: "Decked Out in Dampness",
      category: Category.Glamtone
    }
  ]
};
