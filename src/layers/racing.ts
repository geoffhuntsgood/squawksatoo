import type { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";

export const racing: Layer = {
  name: LayerName.Racing,
  categories: [
    Category.Quintuple,
    Category.Battle,
    Category.Challenge,
    Category.Cranky,
    Category.Quiztone
  ],
  postgameCategories: [],
  bananas: [
    {
      num: 1,
      name: "Bruised Peekabruiser! Again!",
      category: Category.Quintuple
    },
    {
      num: 2,
      name: "Battle: Jumping Jukes",
      category: Category.Battle
    },
    {
      num: 3,
      name: "Battle: Turf Surf Trampling",
      category: Category.Battle
    },
    {
      num: 5,
      name: "Racing Quiz Master",
      category: Category.Quiztone
    },
    {
      num: 6,
      name: "Cranky's Racing Rant",
      category: Category.Cranky
    },
    {
      num: 7,
      name: "Liftoff-Lope Finish Line",
      category: Category.Challenge
    },
    {
      num: 8,
      name: "Liftoff-Lope Buzzer Beater",
      category: Category.Challenge
    },
    {
      num: 9,
      name: "Tower at the Finish Line",
      category: Category.Challenge
    },
    {
      num: 10,
      name: "Viewing the Track from the Back"
    }
  ],
  postgameBananas: [
    {
      num: 4,
      name: "Rumbling with Rambi"
    }
  ]
};
