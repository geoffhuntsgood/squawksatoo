import type { Layer } from "../classes/Layer";
import { Category, LayerName } from "../enums";

export const groove: Layer = {
  name: LayerName.Groove,
  categories: [
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.Chiptone,
    Category.Smashintone
  ],
  postgameCategories: [Category.Seekertone],
  bananas: [
    {
      num: 1,
      name: "The Secret in Solitary"
    },
    {
      num: 2,
      name: "Deep under Detention"
    },
    {
      num: 3,
      name: "Banana behind Bars"
    },
    {
      num: 4,
      name: "A Square-Shaped Secret"
    },
    {
      num: 5,
      name: "Smash and Receive"
    },
    {
      num: 6,
      name: "Gettin' Down in the Groove Layer!"
    },
    {
      num: 7,
      name: "Over the Disco"
    },
    {
      num: 8,
      name: "Bouncy Brainteaser"
    },
    {
      num: 10,
      name: "Destined for the Top",
      category: Category.Challenge
    },
    {
      num: 11,
      name: "Liftoff to the Top",
      category: Category.Challenge
    },
    {
      num: 12,
      name: "A Groovy Disco-very",
      category: Category.Challenge
    },
    {
      num: 13,
      name: "Cranky's Groove Rant",
      category: Category.Cranky
    },
    {
      num: 14,
      name: "Banana Chandelier"
    },
    {
      num: 15,
      name: "Groove Smashin' Stats",
      category: Category.Smashintone
    },
    {
      num: 17,
      name: "Disco-Ball Destruction"
    },
    {
      num: 18,
      name: "Behind the Disco's Wall"
    },
    {
      num: 19,
      name: "The Funky Beat is Back"
    },
    {
      num: 20,
      name: "Rising Bass Line"
    },
    {
      num: 21,
      name: "Beat the Concrete"
    },
    {
      num: 22,
      name: "The Groovy Bass is Back"
    },
    {
      num: 23,
      name: "Lofty Melody"
    },
    {
      num: 24,
      name: "A Gift from a Fan"
    },
    {
      num: 25,
      name: "The Catchy Melody is Back"
    },
    {
      num: 26,
      name: "Battle: Opposite Obliteration",
      category: Category.Battle
    },
    {
      num: 27,
      name: "Battle: Cliff-Wall Ambush",
      category: Category.Battle
    },
    {
      num: 30,
      name: "Groove Chip Exchange",
      category: Category.Chiptone
    }
  ],
  postgameBananas: [
    {
      num: 9,
      name: "A Complete Fossil Collection"
    },
    {
      num: 16,
      name: "Groovin' Once Again"
    },
    {
      num: 28,
      name: "A Gift from Poppy"
    },
    {
      num: 29,
      name: "Dig the Groovy Nightlife",
      category: Category.Seekertone
    }
  ]
};
