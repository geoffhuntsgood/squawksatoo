import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const lagoon: Layer = {
  name: LayerName.Lagoon,
  categories: [
    Category.Triple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash
  ],
  postgameCategories: [
    Category.Rehearsal,
    Category.Chiptone,
    Category.Seekertone,
    Category.Smashintone
  ],
  bananas: [
    {
      num: 1,
      name: "First Crockoid Cracked!",
      category: Category.Triple
    },
    {
      num: 2,
      name: "Cave by the Cape"
    },
    {
      num: 4,
      name: "Bathing Banana"
    },
    {
      num: 5,
      name: "Shifty Smash: Beyond the Wall",
      category: Category.ShiftySmash
    },
    {
      num: 6,
      name: "Battle: Stoney, Grassy Goons",
      category: Category.Battle
    },
    {
      num: 7,
      name: "A Nook behind Concrete"
    },
    {
      num: 8,
      name: "Battle: Both Sides of the Bridge",
      category: Category.Battle
    },
    {
      num: 9,
      name: "Smash through the Floor"
    },
    {
      num: 10,
      name: "Cranky's Lagoon Rant",
      category: Category.Cranky
    },
    {
      num: 11,
      name: "A Real Mouthful"
    },
    {
      num: 12,
      name: "Rest Stop on Roof Road",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Hidden on Roof Road",
      category: Category.Challenge
    },
    {
      num: 14,
      name: "At the End of Roof Road",
      category: Category.Challenge
    },
    {
      num: 15,
      name: "Lakeside Low Road"
    },
    {
      num: 16,
      name: "Battle: Swarms among the Pillars",
      category: Category.Battle
    },
    {
      num: 17,
      name: "Follow the Voided Terrain"
    },
    {
      num: 18,
      name: "Fishin' for Bananas"
    },
    {
      num: 19,
      name: "Rise and Rinse"
    },
    {
      num: 20,
      name: "Placed in a Pipe"
    },
    {
      num: 21,
      name: "Shifty Smash: Atop the Pipes",
      category: Category.Battle
    },
    {
      num: 22,
      name: "Battle: Wings and the Wobbly Disc",
      category: Category.Battle
    },
    {
      num: 23,
      name: "Beyond the Cloudy Platforms"
    },
    {
      num: 24,
      name: "Blasting for the Banana"
    },
    {
      num: 26,
      name: "Landed in Salvager's Landing!",
      category: Category.Triple
    },
    {
      num: 27,
      name: "Shifty Smash: A Wall Hanging in Air",
      category: Category.ShiftySmash
    },
    {
      num: 28,
      name: "On the Ceiling of the Floor"
    },
    {
      num: 29,
      name: "Over the Thorny Path",
      category: Category.Challenge
    },
    {
      num: 30,
      name: "Into the Thorny Nook",
      category: Category.Challenge
    },
    {
      num: 31,
      name: "Through the Thorny Walls",
      category: Category.Challenge
    },
    {
      num: 32,
      name: "The Salvager's Stash"
    },
    {
      num: 33,
      name: "Battle: Concrete-Wall Clash",
      category: Category.Battle
    },
    {
      num: 34,
      name: "Up, Over and Across"
    },
    {
      num: 35,
      name: "Within the Fast-Growing Grass"
    },
    {
      num: 36,
      name: "Hangin' on Orangu-Hang Highway!",
      category: Category.Triple
    },
    {
      num: 37,
      name: "Concrete Wall on the Moving Floor"
    },
    {
      num: 38,
      name: "Outskirts of the Fishing Village"
    },
    {
      num: 39,
      name: "Crossed to the Kong Elder's Court!"
    },
    {
      num: 40,
      name: "The Ship Stern's Snack"
    },
    {
      num: 51,
      name: "Dipped into Chimpy Channel!",
      category: Category.Triple
    },
    {
      num: 52,
      name: "Pop and Destroy",
      category: Category.Challenge
    },
    {
      num: 53,
      name: "Atop the Concrete Roof",
      category: Category.Challenge
    },
    {
      num: 54,
      name: "Hung from the Ceiling",
      category: Category.Challenge
    },
    {
      num: 55,
      name: "Shipwrecked Treasure"
    }
  ],
  postgameBananas: [
    {
      num: 3,
      name: "Lagoon Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 25,
      name: "Lagoon Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 41,
      name: "Past the First Scrappin' Ground",
      category: Category.Rehearsal
    },
    {
      num: 42,
      name: "Lure and Destroy!",
      category: Category.Rehearsal
    },
    {
      num: 43,
      name: "Past the Second Scrappin' Ground",
      category: Category.Rehearsal
    },
    {
      num: 44,
      name: "Lift and Destroy!",
      category: Category.Rehearsal
    },
    {
      num: 45,
      name: "Past the Third Scrappin' Ground",
      category: Category.Rehearsal
    },
    {
      num: 46,
      name: "Wallop and Destroy!",
      category: Category.Rehearsal
    },
    {
      num: 47,
      name: "Past the Fourth Scrappin' Ground",
      category: Category.Rehearsal
    },
    {
      num: 48,
      name: "Launch and Destroy!",
      category: Category.Rehearsal
    },
    {
      num: 49,
      name: "Bounce and Destroy!",
      category: Category.Rehearsal
    },
    {
      num: 50,
      name: "Past the Fifth Scrappin' Ground",
      category: Category.Triple, 
      category2: Category.Rehearsal
    },
    {
      num: 56,
      name: "Lagoon Hide-and-Seek",
      category: Category.Seekertone
    }
  ]
};
