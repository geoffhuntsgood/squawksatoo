import type { DK64Item } from "../classes/DK64Item";
import type { DK64Level } from "../classes/DK64Level";
import type { DK64Category } from "../enums/DK64Category";
import { LevelName } from "../enums/LevelName";
import { aztec } from "./aztec";
import { castle } from "./castle";
import { caves } from "./caves";
import { factory } from "./factory";
import { forest } from "./forest";
import { galleon } from "./galleon";
import { helm } from "./helm";
import { isles } from "./isles";
import { japes } from "./japes";

const allLevels: DK64Level[] = [
  isles,
  japes,
  aztec,
  factory,
  galleon,
  forest,
  caves,
  castle,
  helm
];

export const getAllCollectablesForCategories = (
  categories: DK64Category[],
  levelName: LevelName
): DK64Item[] => {
  const collectables: DK64Item[] =
    levelName !== LevelName.All
      ? allLevels.filter((level: DK64Level) => level.name === levelName)[0]
          .collectables
      : allLevels.flatMap((level: DK64Level) => level.collectables);

  if (categories.length === 0) return collectables;

  return collectables.filter((collectable: DK64Item) =>
    categories.includes(collectable.category)
  );
};
