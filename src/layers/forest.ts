import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const forest: Layer = {
  name: LayerName.Forest,
  categories: [
    Category.Triple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Chiptone,
    Category.Growtone,
    Category.Seekertone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Rehearsal],
  bananas: [
    {
      num: 1,
      name: "Branched into the Forest Layer!",
      category: Category.Triple
    },
    {
      num: 2,
      name: "Battle: Thorn-Forest Throwdown",
      category: Category.Battle
    },
    {
      num: 3,
      name: "View from Featherfall Isle"
    },
    {
      num: 4,
      name: "Perched Where Branches Cross"
    },
    {
      num: 5,
      name: "Shifting above the Forest"
    },
    {
      num: 6,
      name: "Under Featherfall Isle"
    },
    {
      num: 7,
      name: "Battle: Seed to Succeed"
    },
    {
      num: 8,
      name: "The Ostrich's Back Snack"
    },
    {
      num: 9,
      name: "Branching over the Plains"
    },
    {
      num: 10,
      name: "Hopped into Bellhop Burb!"
    },
    {
      num: 11,
      name: "Blasting through Brambles",
      category: Category.Challenge
    },
    {
      num: 12,
      name: "Back of the Brambles",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Beat the Brambles",
      category: Category.Challenge
    },
    {
      num: 14,
      name: "Bird's-Eye View on Bellhop Burb"
    },
    {
      num: 15,
      name: "Forest Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 16,
      name: "Found in the Ostrich Flock"
    },
    {
      num: 17,
      name: "Beneath Bellhop Burb"
    },
    {
      num: 18,
      name: "Battle: Yucky Yard",
      category: Category.Battle
    },
    {
      num: 19,
      name: "Mired in Mud"
    },
    {
      num: 20,
      name: "Tiny Isle in the Wetlands"
    },
    {
      num: 21,
      name: "Shifty Smash: Crossing the Branch",
      category: Category.ShiftySmash
    },
    {
      num: 22,
      name: "Cranky's Forest Rant",
      category: Category.Cranky
    },
    {
      num: 23,
      name: "Behind the Big Tree"
    },
    {
      num: 24,
      name: "Sleeping in the Big Tree"
    },
    {
      num: 25,
      name: "Glimmering Overhead"
    },
    {
      num: 26,
      name: "Checked in at the Eggshell Hotel"
    },
    {
      num: 27,
      name: "Atop the Eggshell Hotel"
    },
    {
      num: 28,
      name: "Lounge Loft and Found"
    },
    {
      num: 29,
      name: "Hangin' in the Lounge"
    },
    {
      num: 30,
      name: "Present by the Pool"
    },
    {
      num: 31,
      name: "Secret Room Service",
      category: Category.Challenge
    },
    {
      num: 32,
      name: "Scarfing the Scenery",
      category: Category.Challenge
    },
    {
      num: 33,
      name: "Wall You Can Eat",
      category: Category.Challenge
    },
    {
      num: 34,
      name: "Egg-Bottom Basement"
    },
    {
      num: 35,
      name: "Egg-Bottom Break-in"
    },
    {
      num: 36,
      name: "A Pain in the Neck"
    },
    {
      num: 37,
      name: "Tucked in Thorn Hollow"
    },
    {
      num: 38,
      name: "Sealed in Thorn Hollow"
    },
    {
      num: 48,
      name: "Forest Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 49,
      name: "Stuck in the Stump"
    },
    {
      num: 50,
      name: "Plummeted to Mossplume Marsh!",
      category: Category.Triple
    },
    {
      num: 51,
      name: "Secret in the Marsh"
    },
    {
      num: 52,
      name: "Shifty Smash: Thwart the Thorns",
      category: Category.ShiftySmash
    },
    {
      num: 53,
      name: "Beneath the Moving Platform"
    },
    {
      num: 54,
      name: "Flying through the Sky",
      category: Category.Challenge
    },
    {
      num: 55,
      name: "Soaring through Space",
      category: Category.Challenge
    },
    {
      num: 56,
      name: "Gliding through the Heavens",
      category: Category.Challenge
    },
    {
      num: 57,
      name: "Bounced into Rubbery Roost!"
    },
    {
      num: 58,
      name: "Battle: Bouncing Bites",
      category: Category.Battle
    },
    {
      num: 59,
      name: "Beneath the Bounce"
    },
    {
      num: 60,
      name: "Bouncing to the Top"
    },
    {
      num: 61,
      name: "Forest Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 62,
      name: "Shifty Smash: Rubbery Roost",
      category: Category.ShiftySmash
    },
    {
      num: 63,
      name: "A View of Mossplume Marsh"
    },
    {
      num: 64,
      name: "Hangin' in the Annex"
    },
    {
      num: 65,
      name: "Bouncy Ballet",
      category: Category.Challenge
    },
    {
      num: 66,
      name: "Bouncy Bravado",
      category: Category.Challenge
    },
    {
      num: 67,
      name: "Bouncy Barriers",
      category: Category.Challenge
    },
    {
      num: 68,
      name: "Under the Rubber Pillar"
    },
    {
      num: 69,
      name: "Beyond Rubbery Roost"
    },
    {
      num: 70,
      name: "Battle: Three across the Chasm",
      category: Category.Battle
    },
    {
      num: 71,
      name: "Forest Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 72,
      name: "Forest Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 73,
      name: "Waded into Bramblenest Bog!",
      category: Category.Triple
    },
    {
      num: 74,
      name: "Top-Shelf Treasure",
      category: Category.Challenge
    },
    {
      num: 75,
      name: "Tree-Pit Banana Balloons",
      category: Category.Challenge
    },
    {
      num: 76,
      name: "Tucked behind the Tree",
      category: Category.Challenge
    },
    {
      num: 77,
      name: "The Forest Growtone",
      category: Category.Growtone
    },
    {
      num: 78,
      name: "The Hungry Forest Growtone",
      category: Category.Growtone
    },
    {
      num: 79,
      name: "The Sated Forest Growtone",
      category: Category.Growtone
    },
    {
      num: 80,
      name: "Dazzling Ostrict Headwear"
    },
    {
      num: 81,
      name: "Battle: Updraft Uproar",
      category: Category.Battle
    },
    {
      num: 82,
      name: "Nested inside the Roots"
    },
    {
      num: 83,
      name: "Roosted in a Thorny Nest"
    }
  ],
  postgameBananas: [
    {
      num: 39,
      name: "Off to a Flying Start!",
      category: Category.Rehearsal
    },
    {
      num: 40,
      name: "Pretty Thing Preening in a Birdcage",
      category: Category.Rehearsal
    },
    {
      num: 41,
      name: "Survived Sizzle-Wing Circus!",
      category: Category.Rehearsal
    },
    {
      num: 42,
      name: "Faced the Fire and Lasers",
      category: Category.Rehearsal
    },
    {
      num: 43,
      name: "Taking the Low Road",
      category: Category.Rehearsal
    },
    {
      num: 44,
      name: "Bounded by Bouncy-Bounce Park!",
      category: Category.Rehearsal
    },
    {
      num: 45,
      name: "A Peek at the Peak",
      category: Category.Rehearsal
    },
    {
      num: 46,
      name: "Simmering in the Lava Pond",
      category: Category.Rehearsal
    },
    {
      num: 47,
      name: "Topped the Tower of Turbulence!",
      category: Category.Triple,
      category2: Category.Rehearsal
    }
  ]
};
