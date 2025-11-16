import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const radiance: Layer = {
  name: LayerName.Radiance,
  categories: [
    Category.Triple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
    Category.Bloomintone,
    Category.Chiptone,
    Category.Fragmentone,
    Category.Growtone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Rehearsal],
  bananas: [
    {
      num: 1,
      name: "Beneath the White-Sand Landing"
    },
    {
      num: 2,
      name: "Alighted in the Radiance Layer!",
      category: Category.Triple
    },
    {
      num: 3,
      name: "Deep Down in Shedlight Cave"
    },
    {
      num: 4,
      name: "Ssslithered Past Shedlight Cave!",
      category: Category.Triple
    },
    {
      num: 5,
      name: "Shifty Smash: A Thorny Situation",
      category: Category.ShiftySmash
    },
    {
      num: 6,
      name: "A Light Snack"
    },
    {
      num: 7,
      name: "Revealed by the Light"
    },
    {
      num: 8,
      name: "Glowing Fruit in the Darkness",
      category: Category.Challenge
    },
    {
      num: 9,
      name: "Sharp Eye for a Banana",
      category: Category.Challenge
    },
    {
      num: 10,
      name: "Guided by Glowing Fruit",
      category: Category.Challenge
    },
    {
      num: 11,
      name: "Adrift in Glowboa Grotto"
    },
    {
      num: 12,
      name: "Battle: Some Light Smashing",
      category: Category.Battle
    },
    {
      num: 13,
      name: "Sitting on a Snake's Head"
    },
    {
      num: 14,
      name: "Over the Elder's Head"
    },
    {
      num: 15,
      name: "Bathing in the Essence of the Sun"
    },
    {
      num: 16,
      name: "Atop an Unlit Landing"
    },
    {
      num: 17,
      name: "Sneaky Room Under Sand",
      category: Category.Challenge
    },
    {
      num: 18,
      name: "Springing off Sandy Steps",
      category: Category.Challenge
    },
    {
      num: 19,
      name: "Swift and Shocking Ascent",
      category: Category.Challenge
    },
    {
      num: 20,
      name: "The View Beyond Glowboa Grotto"
    },
    {
      num: 30,
      name: "Radiance Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 31,
      name: "Unveiled in the Sculptors' Studio!",
      category: Category.Triple
    },
    {
      num: 32,
      name: "Battle: Shining Through",
      category: Category.Battle
    },
    {
      num: 33,
      name: "Ceiling Swingin' Snack"
    },
    {
      num: 34,
      name: "Staying Fresh in the Storeroom"
    },
    {
      num: 35,
      name: "Battle: Dive-Bombing Run",
      category: Category.Battle
    },
    {
      num: 36,
      name: "Perfectly Preserved in Crystal"
    },
    {
      num: 37,
      name: "Shifty Smash: A Dark Climb",
      category: Category.ShiftySmash
    },
    {
      num: 38,
      name: "Soaking in the Essence of the Sun"
    },
    {
      num: 39,
      name: "Warmed by Flaming Barrels"
    },
    {
      num: 40,
      name: "Safe in the Barrel-Free Zone"
    },
    {
      num: 41,
      name: "Summitted the Solar Control Tower!"
    },
    {
      num: 42,
      name: "Hidden in the Girders",
      category: Category.Challenge
    },
    {
      num: 43,
      name: "Jumpin' like Jumpman",
      category: Category.Challenge
    },
    {
      num: 44,
      name: "Climbing to a High Score",
      category: Category.Challenge
    },
    {
      num: 45,
      name: "Wishing on a Synthetic Sun"
    },
    {
      num: 46,
      name: "Settled Upon Serpent Sands!",
      category: Category.Triple
    },
    {
      num: 47,
      name: "Balloons under the Dunes"
    },
    {
      num: 48,
      name: "Obssscured in a Dune Cave Nook"
    },
    {
      num: 49,
      name: "Deep in a Dune Cave Hallway"
    },
    {
      num: 50,
      name: "Bloomed in the Radiance Layer",
      category: Category.Bloomintone
    },
    {
      num: 51,
      name: "Battle: Shadows and Sunlight",
      category: Category.Battle
    },
    {
      num: 52,
      name: "Shifty Smash: Timing is Everything",
      category: Category.ShiftySmash
    },
    {
      num: 53,
      name: "Radiance Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 54,
      name: "Radiance Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 55,
      name: "Battle: Vaulting Virtuoso",
      category: Category.Battle
    },
    {
      num: 56,
      name: "Radiance Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 57,
      name: "Lit-Path Switchback",
      category: Category.Challenge
    },
    {
      num: 58,
      name: "Shadow-Path Rest Stop",
      category: Category.Challenge
    },
    {
      num: 59,
      name: "Shadow-Path Finish Line",
      category: Category.Challenge
    },
    {
      num: 60,
      name: "Tip o' the Stone Snake's Tongue"
    },
    {
      num: 61,
      name: "Hanging Out beneath the Oasis"
    },
    {
      num: 62,
      name: "The Radiance Growtone",
      category: Category.Growtone
    },
    {
      num: 63,
      name: "The Hungry Radiance Growtone",
      category: Category.Growtone
    },
    {
      num: 64,
      name: "The Sated Radiance Growtone",
      category: Category.Growtone
    },
    {
      num: 65,
      name: "Grown beneath the Growtone"
    },
    {
      num: 66,
      name: "Cranky's Radiance Rant",
      category: Category.Cranky
    },
    {
      num: 67,
      name: "Under the Viper's Chinny-Chin-Chin"
    },
    {
      num: 68,
      name: "Battle: Open the Window",
      category: Category.Battle
    },
    {
      num: 69,
      name: "Head in the Shade Clouds"
    },
    {
      num: 70,
      name: "Pillaged from a Shade-Cloud Pillar"
    },
    {
      num: 71,
      name: "Walkin' on Shade Clouds"
    },
    {
      num: 72,
      name: "Crashed the Crystal-Cobra Den!",
      category: Category.Triple
    },
    {
      num: 73,
      name: "Hidden in the Moving Wall",
      category: Category.Challenge
    },
    {
      num: 74,
      name: "Sticking to the Shadows",
      category: Category.Challenge
    },
    {
      num: 75,
      name: "Through Shadows and Thorns",
      category: Category.Challenge
    },
    {
      num: 76,
      name: "Swallowed by the Snake"
    }
  ],
  postgameBananas: [
    {
      num: 21,
      name: "Ran the First Scale!",
      category: Category.Rehearsal
    },
    {
      num: 22,
      name: "Summited the Snaking Path",
      category: Category.Rehearsal
    },
    {
      num: 23,
      name: "Ran the Second Scale!",
      category: Category.Rehearsal
    },
    {
      num: 24,
      name: "Floated Aloft with Laser Precision",
      category: Category.Rehearsal
    },
    {
      num: 25,
      name: "Ran the Third Scale!",
      category: Category.Rehearsal
    },
    {
      num: 26,
      name: "Snaked by without Going Boom",
      category: Category.Rehearsal
    },
    {
      num: 27,
      name: "Ran the Fourth Scale!",
      category: Category.Rehearsal
    },
    {
      num: 28,
      name: "Sink like a Crock",
      category: Category.Rehearsal
    },
    {
      num: 29,
      name: "Ran the Final Scale!",
      category: Category.Triple, 
      category2: Category.Rehearsal
    }
  ]
};
