import type { DK64Level } from "../classes/DK64Level";
import { DK64Category } from "../enums/DK64Category";
import { LevelName } from "../enums/LevelName";

export const helm: DK64Level = {
  name: LevelName.Helm,
  collectables: [
    {
      name: "Donkey Helm Medal",
      category: DK64Category.Medal
    },
    {
      name: "Chunky Helm Medal",
      category: DK64Category.Medal
    },
    {
      name: "Tiny Helm Medal",
      category: DK64Category.Medal
    },
    {
      name: "Lanky Helm Medal",
      category: DK64Category.Medal
    },
    {
      name: "Diddy Helm Medal",
      category: DK64Category.Medal
    },
    {
      name: "Helm Battle Crown",
      category: DK64Category.Crown
    },
    {
      name: "Helm Key 8 Fairies",
      category: DK64Category.Fairy
    },
    {
      name: "Key 8",
      category: DK64Category.Key
    }
  ]
};
