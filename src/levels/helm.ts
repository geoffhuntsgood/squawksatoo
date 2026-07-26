import type { DK64Level } from "../classes/DK64Level";
import { DK64Category, LevelName } from "../enums";

export const helm: DK64Level = {
  name: LevelName.Helm,
  items: [
    {
      name: "Donkey Helm Medal",
      category: DK64Category.HelmMedal
    },
    {
      name: "Chunky Helm Medal",
      category: DK64Category.HelmMedal
    },
    {
      name: "Tiny Helm Medal",
      category: DK64Category.HelmMedal
    },
    {
      name: "Lanky Helm Medal",
      category: DK64Category.HelmMedal
    },
    {
      name: "Diddy Helm Medal",
      category: DK64Category.HelmMedal
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
