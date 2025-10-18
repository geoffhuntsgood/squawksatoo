import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const feast: Layer = {
  name: LayerName.Feast,
  categories: [
    Category.Triple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.ShiftySmash,
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
      num: 2,
      name: "A Slime-Slathered Treat"
    },
    {
      num: 3,
      name: "Wrecked by Freestyle Bananzas",
      category: Category.Challenge
    },
    {
      num: 4,
      name: "Fast-Paced Freestyle Bananzas",
      category: Category.Challenge
    },
    {
      num: 5,
      name: "Lost and Found under the Building",
      category: Category.Challenge
    },
    {
      num: 6,
      name: "Battle: Bouncy Beatings",
      category: Category.Battle
    },
    {
      num: 7,
      name: "Snacking from the Storeroom"
    },
    {
      num: 8,
      name: "A Banana among Friends"
    },
    {
      num: 9,
      name: "Battle: Wallopoid Warfare",
      category: Category.Battle
    },
    {
      num: 10,
      name: "A Soda-Infused Banana"
    },
    {
      num: 11,
      name: "The Feast Growtone",
      category: Category.Growtone
    },
    {
      num: 12,
      name: "The Hungry Feast Growtone",
      category: Category.Growtone
    },
    {
      num: 13,
      name: "The Sated Feast Growtone",
      category: Category.Growtone
    },
    {
      num: 14,
      name: "A Secret Salty Snack",
      category: Category.Challenge
    },
    {
      num: 15,
      name: "Slinging the Salt",
      category: Category.Challenge
    },
    {
      num: 16,
      name: "Melting the Muck",
      category: Category.Challenge
    },
    {
      num: 17,
      name: "Steamed-and-Salted Banana"
    },
    {
      num: 18,
      name: "At a Grate Height"
    },
    {
      num: 19,
      name: "Round the Grater-Go-Round!",
      category: Category.Triple
    },
    {
      num: 20,
      name: "Through the Mauling Walls",
      category: Category.Challenge
    },
    {
      num: 21,
      name: "A Wall All Alone",
      category: Category.Challenge
    },
    {
      num: 22,
      name: "Falling Mauling Walls",
      category: Category.Challenge
    },
    {
      num: 23,
      name: "Up High in a Sky Container"
    },
    {
      num: 24,
      name: "Swingin' through Kingly Swings!",
      category: Category.Triple
    },
    {
      num: 25,
      name: "Soda-Spout Clean Out"
    },
    {
      num: 26,
      name: "Battle: Muck on Parade",
      category: Category.Battle
    },
    {
      num: 27,
      name: "Shifty Smash: Over the Oil Lake",
      category: Category.ShiftySmash
    },
    {
      num: 28,
      name: "Feast Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 29,
      name: "Feast Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 30,
      name: "Feast Fragmentone Recovery",
      category: Category.Fragmentone
    },
    {
      num: 31,
      name: "Feast Fragmentone Restoration",
      category: Category.Fragmentone
    },
    {
      num: 32,
      name: "Banana by a Greasy River"
    },
    {
      num: 33,
      name: "Center of the Oil Stream"
    },
    {
      num: 34,
      name: "Battle: Mine-Cart Muck",
      category: Category.Battle
    },
    {
      num: 35,
      name: "Fryin' at Ferocious Fryhouse!",
      category: Category.Triple
    },
    {
      num: 36,
      name: "Feast Hide-and-Seek",
      category: Category.Seekertone
    },
    {
      num: 37,
      name: "Roarcoaster Rest Stop",
      category: Category.Challenge
    },
    {
      num: 38,
      name: "Behind a Roaring Waterfall",
      category: Category.Challenge
    },
    {
      num: 39,
      name: "A Roaring Finish",
      category: Category.Challenge
    },
    {
      num: 40,
      name: "Unmucking the Works"
    },
    {
      num: 41,
      name: "Fries on the Side"
    },
    {
      num: 42,
      name: "The Duct Inspector's Reward"
    },
    {
      num: 43,
      name: "Floating on the Royal Oil Cruise!",
      category: Category.Triple
    },
    {
      num: 44,
      name: "The Salt's Last Stop"
    },
    {
      num: 45,
      name: "Eating the Lion's Share"
    },
    {
      num: 46,
      name: "Shifty Smash: Huge Monument",
      category: Category.ShiftySmash
    },
    {
      num: 47,
      name: "Danger Doubling Back"
    },
    {
      num: 48,
      name: "Battle: Labyrinth Lurkers",
      category: Category.Battle
    },
    {
      num: 49,
      name: "Triple-Gated Banana"
    },
    {
      num: 50,
      name: "Shifty Smash: Out of the Box",
      category: Category.ShiftySmash
    },
    {
      num: 51,
      name: "Up through the Layer of Muck"
    },
    {
      num: 52,
      name: "Folded into the Patty"
    },
    {
      num: 53,
      name: "Order Up at the Banana Burger!"
    },
    {
      num: 54,
      name: "Under the Lion's Mane"
    },
    {
      num: 55,
      name: "Snack with a View"
    },
    {
      num: 56,
      name: "Crowning the Monarch"
    },
    {
      num: 57,
      name: "Feast Chip Exchange",
      category: Category.Chiptone
    },
    {
      num: 58,
      name: "Muckin' Up Cat-Scratch Kitchen"
    },
    {
      num: 59,
      name: "Battle: Ducking the Muck Wall",
      category: Category.Battle
    },
    {
      num: 60,
      name: "Stuck in the Gutter"
    },
    {
      num: 61,
      name: "Cranky's Feast Rant",
      category: Category.Cranky
    },
    {
      num: 62,
      name: "As Seen through the Grate"
    },
    {
      num: 63,
      name: "The Muck's Private Stash"
    },
    {
      num: 64,
      name: "Resist the Tide of Walls",
      category: Category.Challenge
    },
    {
      num: 65,
      name: "Bouncing Tall off a Wall",
      category: Category.Challenge
    },
    {
      num: 66,
      name: "Strike Back against the Walls",
      category: Category.Challenge
    },
    {
      num: 67,
      name: "Melt through the Metal Bridge"
    },
    {
      num: 68,
      name: "Stuck in the Muck"
    }
  ],
  postgameBananas: [
    {
      num: 1,
      name: "Free Fallin' to the Feast Layer!",
      category: Category.Triple
    },
    {
      num: 69,
      name: "Decked Out in Matching Clothes",
      category: Category.Glamtone
    }
  ]
};
