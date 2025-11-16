import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const tempest: Layer = {
  name: LayerName.Tempest,
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
      name: "Stormed into the Tempest!",
      category: Category.Triple
    },
    {
      num: 2,
      name: "Lifted to the Skies"
    },
    {
      num: 3,
      name: "Tucked by the Tornado"
    },
    {
      num: 4,
      name: "Hiding Up High"
    },
    {
      num: 5,
      name: "Rocketing over Lava",
      category: Category.Challenge
    },
    {
      num: 6,
      name: "Lurking beyond Lava",
      category: Category.Challenge
    },
    {
      num: 7,
      name: "Rocketing through Lava",
      category: Category.Challenge
    },
    {
      num: 8,
      name: "Elephant Elder's Secret Snack"
    },
    {
      num: 9,
      name: "The Tempest Growtone",
      category: Category.Growtone
    },
    {
      num: 10,
      name: "The Hungry Tempest Growtone",
      category: Category.Growtone
    },
    {
      num: 11,
      name: "The Sated Tempest Growtone",
      category: Category.Growtone
    },
    {
      num: 12,
      name: "Rain-Soaked Roughhousing"
    },
    {
      num: 13,
      name: "Cavernous Corridors"
    },
    {
      num: 14,
      name: "Tour through the Tunnels"
    },
    {
      num: 15,
      name: "The Secret Lava Pocket"
    },
    {
      num: 24,
      name: "Tempest Chip Exchange"
    },
    {
      num: 25,
      name: "Beat Sinister Blusterwing!",
      category: Category.Triple
    },
    {
      num: 26,
      name: "Battle: Revolving-Ring Rumble",
      category: Category.Battle
    },
    {
      num: 27,
      name: "Unbothered by Burrowers"
    },
    {
      num: 28,
      name: "Battle: Iron-Inferno Imbroglio"
    },
    {
      num: 29,
      name: "Safe from Scalding Showers"
    },
    {
      num: 30,
      name: "Lava Bath in the Hot Shower"
    },
    {
      num: 31,
      name: "Piping-Hot Platforms",
      category: Category.Challenge
    },
    {
      num: 32,
      name: "A Scalding Secret",
      category: Category.Challenge
    },
    {
      num: 33,
      name: "Roasting while Rotating",
      category: Category.Challenge
    },
    {
      num: 34,
      name: "Beat Sinister Blusterwing! Again!",
      category: Category.Triple
    },
    {
      num: 35,
      name: "Taunting behind the Tap"
    },
    {
      num: 36,
      name: "A View of Zip-Line Valley",
      category: Category.Challenge
    },
    {
      num: 37,
      name: "Zipping through the Valley",
      category: Category.Challenge
    },
    {
      num: 38,
      name: "Zips, Hops, and Swaps",
      category: Category.Challenge
    },
    {
      num: 39,
      name: "Tempest Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 40,
      name: "Sitting above the Sauna"
    },
    {
      num: 41,
      name: "Tempest Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 42,
      name: "Cranky's Tempest Rant",
      category: Category.Cranky
    },
    {
      num: 43,
      name: "Shifty Smash: Scorching Sauna",
      category: Category.ShiftySmash
    },
    {
      num: 44,
      name: "Taking in the Stormy Scenery"
    },
    {
      num: 45,
      name: "Battle: Elevator Encounter",
      category: Category.Battle
    },
    {
      num: 46,
      name: "Stuck in the Elephant Snout"
    },
    {
      num: 47,
      name: "Inhaling Hot Lava"
    },
    {
      num: 48,
      name: "Shifty Smash: Stairs in the Storm",
      category: Category.ShiftySmash
    },
    {
      num: 49,
      name: "Crossing the Lava Road",
      category: Category.Challenge
    },
    {
      num: 50,
      name: "Atop the Lava Road",
      category: Category.Challenge
    },
    {
      num: 51,
      name: "End of the Lava Road",
      category: Category.Challenge
    },
    {
      num: 52,
      name: "Scorching, Shocking Scaffolds"
    },
    {
      num: 53,
      name: "Safe under Shelter"
    },
    {
      num: 54,
      name: "Banana in the Mud Bath"
    },
    {
      num: 55,
      name: "Among the Rocky Elephants"
    },
    {
      num: 56,
      name: "Battle: Ground-Gulping Glory",
      category: Category.Battle
    },
    {
      num: 57,
      name: "Tempest Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 58,
      name: "Tempest Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 59,
      name: "Secret by the Shelter"
    },
    {
      num: 60,
      name: "Battle: Strike like Lightning",
      category: Category.Battle
    },
    {
      num: 61,
      name: "Halfway to the Station"
    },
    {
      num: 62,
      name: "Battle: Zip-Line Zones",
      category: Category.Battle
    },
    {
      num: 63,
      name: "Concealed in the Sky"
    },
    {
      num: 64,
      name: "Slip by the Snipers",
      category: Category.Challenge
    },
    {
      num: 65,
      name: "Sniper-Free Safe Spot",
      category: Category.Challenge
    },
    {
      num: 66,
      name: "Scramble through the Snipers",
      category: Category.Challenge
    },
    {
      num: 67,
      name: "Sunk in the Pool"
    },
    {
      num: 68,
      name: "Shifty Smash: Stormy Skies",
      category: Category.ShiftySmash
    },
    {
      num: 69,
      name: "In a Floating Puddle"
    },
    {
      num: 70,
      name: "Atop Stormy Station"
    }
  ],
  postgameBananas: [
    {
      num: 16,
      name: "Salty Forecast Cleared",
      category: Category.Rehearsal
    },
    {
      num: 17,
      name: "Smart Suction to Skip the Slip",
      category: Category.Rehearsal
    },
    {
      num: 18,
      name: "Glowing Forecast Cleared",
      category: Category.Rehearsal
    },
    {
      num: 19,
      name: "Smart Suction to Light the Way",
      category: Category.Rehearsal
    },
    {
      num: 20,
      name: "Golden Forecast Cleared",
      category: Category.Rehearsal
    },
    {
      num: 21,
      name: "Smart Suction to Build a Bridge",
      category: Category.Rehearsal
    },
    {
      num: 22,
      name: "Smart Suction to Guide the Ice",
      category: Category.Rehearsal
    },
    {
      num: 23,
      name: "Elephant Elder's Forecast Cleared",
      category: Category.Triple,
      category2: Category.Rehearsal
    }
  ]
};
