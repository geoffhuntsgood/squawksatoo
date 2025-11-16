import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const freezer: Layer = {
  name: LayerName.Freezer,
  categories: [
    Category.Triple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Chiptone,
    Category.Fragmentone,
    Category.Growtone,
    Category.Seekertone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Rehearsal],
  bananas: [
    {
      num: 1,
      name: "Chillin' in the Freezer Layer!",
      category: Category.Triple
    },
    {
      num: 2,
      name: "A View of Crumbly Bridge"
    },
    {
      num: 3,
      name: "A Snowy-Cliffside Secret"
    },
    {
      num: 4,
      name: "Turned Up under Turnips"
    },
    {
      num: 5,
      name: "Slumbering in the Snow"
    },
    {
      num: 6,
      name: "Under the Cliff-Edge Scoop Hut"
    },
    {
      num: 7,
      name: "Enshrined atop the Pillar"
    },
    {
      num: 8,
      name: "Battle: Snowball Rollin'",
      category: Category.Battle
    },
    {
      num: 9,
      name: "Over the Freezing River"
    },
    {
      num: 10,
      name: "Hidden behind the Waterfall"
    },
    {
      num: 11,
      name: "Across Crumbly Bridge"
    },
    {
      num: 12,
      name: "Clearing a Red-Hot Path",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Behind the Red-Hot Paths",
      category: Category.Challenge
    },
    {
      num: 14,
      name: "Climbing a Red-Hot Path",
      category: Category.Challenge
    },
    {
      num: 15,
      name: "Battle: Quick Quake Quarrel",
      category: Category.Battle
    },
    {
      num: 16,
      name: "Un-Voiding the Scoop Hut"
    },
    {
      num: 17,
      name: "The Freezer Growtone",
      category: Category.Growtone
    },
    {
      num: 18,
      name: "The Hungry Freezer Growtone",
      category: Category.Growtone
    },
    {
      num: 19,
      name: "The Sated Freezer Growtone",
      category: Category.Growtone
    },
    {
      num: 20,
      name: "Freezer Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 21,
      name: "Heavily Protected Produce"
    },
    {
      num: 22,
      name: "Scoop Hut in the Sky"
    },
    {
      num: 23,
      name: "Cracking Open Coolstripe Cavern"
    },
    {
      num: 24,
      name: "Edge of a Cool Pool"
    },
    {
      num: 25,
      name: "Beware Falling Icicles"
    },
    {
      num: 26,
      name: "Battle: Barely Skating By",
      category: Category.Battle
    },
    {
      num: 27,
      name: "Deep in the Cavern"
    },
    {
      num: 28,
      name: "Sitting on the Snow"
    },
    {
      num: 29,
      name: "Gazing at the Cooling Tower"
    },
    {
      num: 30,
      name: "Kept in a Coolstripe Cubby"
    },
    {
      num: 31,
      name: "Shifty Smash: Above the Caverns",
      category: Category.ShiftySmash
    },
    {
      num: 32,
      name: "Coolstripe Cavern's Lost Treasure"
    },
    {
      num: 33,
      name: "Shifty Smash: Ice-Cold Lakeside",
      category: Category.ShiftySmash
    },
    {
      num: 34,
      name: "U-Turn on a Crumbly Road",
      category: Category.Challenge
    },
    {
      num: 35,
      name: "Crumbly-Road Run",
      category: Category.Challenge
    },
    {
      num: 36,
      name: "A Crusty Trust Fall",
      category: Category.Challenge
    },
    {
      num: 37,
      name: "Behind the Cooling Tower's Eyes"
    },
    {
      num: 38,
      name: "Cranky's Freezer Rant",
      category: Category.Cranky
    },
    {
      num: 39,
      name: "Freezer Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 40,
      name: "Through Coolstripe Cavern",
      category: Category.Triple
    },
    {
      num: 41,
      name: "Molten-Hot Choco Banana"
    },
    {
      num: 42,
      name: "Battle: Broiling Bowling Brawl",
      category: Category.Battle
    },
    {
      num: 43,
      name: "Coolin' Down in Canter Creamery!"
    },
    {
      num: 44,
      name: "Battle: Magma Mayhem",
      category: Category.Battle
    },
    {
      num: 45,
      name: "Traversing the Massive Iceberg",
      category: Category.Challenge
    },
    {
      num: 46,
      name: "Edge of the Massive Iceberg",
      category: Category.Challenge
    },
    {
      num: 47,
      name: "Mastering the Massive Iceberg",
      category: Category.Challenge
    },
    {
      num: 48,
      name: "Smothered in Chocolava"
    },
    {
      num: 49,
      name: "Shifty Smash: Over Ice and Lava",
      category: Category.ShiftySmash
    },
    {
      num: 50,
      name: "Freezer Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 51,
      name: "Found above the Fan"
    },
    {
      num: 52,
      name: "Kept Warm in the Field"
    },
    {
      num: 53,
      name: "Trembling Steps through Powder",
      category: Category.Challenge
    },
    {
      num: 54,
      name: "Treacherous Steps through Powder",
      category: Category.Challenge
    },
    {
      num: 55,
      name: "Extra Steps through Powder",
      category: Category.Challenge
    },
    {
      num: 56,
      name: "Through a Too-Hot Tunnel"
    },
    {
      num: 57,
      name: "A View of Canter Creamery"
    },
    {
      num: 58,
      name: "Beneath the Zig-Zag Bridges"
    },
    {
      num: 59,
      name: "Stake-Hidden Snack"
    },
    {
      num: 60,
      name: "Buried in the Cooling Tower"
    },
    {
      num: 61,
      name: "Behind the Cooling Tower"
    },
    {
      num: 76,
      name: "Hoofin' it to Hot-Hoof Heater!",
      category: Category.Triple
    },
    {
      num: 77,
      name: "Hidden in Chocolava Cave"
    },
    {
      num: 78,
      name: "Battle: Fighting on the Run",
      category: Category.Battle
    },
    {
      num: 79,
      name: "Scraping the Slope",
      category: Category.Challenge
    },
    {
      num: 80,
      name: "A Sneaky Second Serving",
      category: Category.Challenge
    },
    {
      num: 81,
      name: "Over the Slope",
      category: Category.Challenge
    },
    {
      num: 82,
      name: "Treat on a Tiny Island"
    },
    {
      num: 83,
      name: "Freezer Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 84,
      name: "Freezer Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 85,
      name: "Tricky Trot to the Ice Maker"
    },
    {
      num: 86,
      name: "Looking over Chocolava"
    }
  ],
  postgameBananas: [
    {
      num: 62,
      name: "Amuse-Boost Finish Line",
      category: Category.Rehearsal
    },
    {
      num: 63,
      name: "Amuse-Boost Fast Finish",
      category: Category.Rehearsal
    },
    {
      num: 64,
      name: "Shifty Smash: Trot up the Tower",
      category: Category.Rehearsal,
      category2: Category.ShiftySmash
    },
    {
      num: 65,
      name: "Hurl d'Oeuvres Finish Line",
      category: Category.Rehearsal
    },
    {
      num: 66,
      name: "Hurl d'Oeuvres Fast Finish",
      category: Category.Rehearsal
    },
    {
      num: 67,
      name: "Shifty Smash: Damp Dodge 'n' Dash",
      category: Category.Rehearsal,
      category2: Category.ShiftySmash
    },
    {
      num: 68,
      name: "Shocking Cioppino Finish Line",
      category: Category.Rehearsal
    },
    {
      num: 69,
      name: "Shocking Cioppino Fast Finish",
      category: Category.Rehearsal
    },
    {
      num: 70,
      name: "Shifty Smash: Splashy Ascent",
      category: Category.Rehearsal,
      category2: Category.ShiftySmash
    },
    {
      num: 71,
      name: "Switcheroo Entrée Finish Line",
      category: Category.Rehearsal
    },
    {
      num: 72,
      name: "Switcheroo Entrée Fast Finish",
      category: Category.Rehearsal
    },
    {
      num: 73,
      name: "Shifty Smash: Swift Switcheroo",
      category: Category.Rehearsal,
      category2: Category.ShiftySmash
    },
    {
      num: 74,
      name: "Dangerous Dessert Finish Line",
      category: Category.Rehearsal
    },
    {
      num: 75,
      name: "Dangerous Dessert Fast Finish",
      category: Category.Rehearsal
    },
    {
      num: 87,
      name: "Stuck among the Pipes"
    }
  ]
};
