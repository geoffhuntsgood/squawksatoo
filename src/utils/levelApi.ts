import type { DK64Item, DK64Level } from "../classes";
import { DK64Category, LevelName } from "../enums";
import { aztec } from "../levels/aztec";
import { castle } from "../levels/castle";
import { caves } from "../levels/caves";
import { factory } from "../levels/factory";
import { forest } from "../levels/forest";
import { galleon } from "../levels/galleon";
import { helm } from "../levels/helm";
import { isles } from "../levels/isles";
import { japes } from "../levels/japes";
import { kongColors } from "./theme";

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

export const getItemsForLevel = (levelName: LevelName): DK64Item[] => {
  return levelName === LevelName.All
    ? allLevels.flatMap((level: DK64Level) => level.items)
    : allLevels.filter((level: DK64Level) => level.name === levelName)[0].items;
};

export const getCategoriesForLevel = (levelName: LevelName): DK64Category[] => {
  const levelItems = getItemsForLevel(levelName);
  const cats: DK64Category[] = [];
  levelItems.forEach((item: DK64Item) => {
    const cat = item.category;
    if (!cats.includes(cat)) cats.push(cat);
  });
  return cats;
};

export const getItemsForCategories = (
  levelName: LevelName,
  categories: DK64Category[],
  hellMode: boolean
): DK64Item[] => {
  let items = getItemsForLevel(levelName);

  if (!hellMode) {
    items = items.filter((item: DK64Item) => !item.hellMode);
  }

  items = items.map((item: DK64Item) => {
    if (item.category === DK64Category.ColoredBanana) {
      return {
        ...item,
        name: item.name.replace(
          "{{X}}",
          Math.ceil(Math.random() * 80 + 20).toString()
        )
      };
    } else {
      return item;
    }
  });

  if (categories.length === 0) {
    return items;
  } else {
    return items.filter((item: DK64Item) => categories.includes(item.category));
  }
};

export const getKongColorInfo = (name: string, useKongColors: boolean) => {
  if (!useKongColors) {
    return {
      label: name,
      color: "black"
    };
  }

  if (
    name.startsWith("Japes Donkey") ||
    name.startsWith("Aztec Donkey") ||
    name.startsWith("Factory Donkey") ||
    name.startsWith("Galleon Donkey") ||
    name.startsWith("Forest Donkey") ||
    name.startsWith("Caves Donkey") ||
    name.startsWith("Castle Donkey") ||
    name.startsWith("Helm Donkey") ||
    name.startsWith("Isles Donkey")
  ) {
    return {
      label: name.replace(" Donkey", ""),
      color: kongColors.Donkey
    };
  } else if (
    name.startsWith("Japes Diddy") ||
    name.startsWith("Aztec Diddy") ||
    name.startsWith("Factory Diddy") ||
    name.startsWith("Galleon Diddy") ||
    name.startsWith("Forest Diddy") ||
    name.startsWith("Caves Diddy") ||
    name.startsWith("Castle Diddy") ||
    name.startsWith("Helm Diddy") ||
    name.startsWith("Isles Diddy")
  ) {
    return {
      label: name.replace(" Diddy", ""),
      color: kongColors.Diddy
    };
  } else if (
    name.startsWith("Japes Lanky") ||
    name.startsWith("Aztec Lanky") ||
    name.startsWith("Factory Lanky") ||
    name.startsWith("Galleon Lanky") ||
    name.startsWith("Forest Lanky") ||
    name.startsWith("Caves Lanky") ||
    name.startsWith("Castle Lanky") ||
    name.startsWith("Helm Lanky") ||
    name.startsWith("Isles Lanky")
  ) {
    return {
      label: name.replace(" Lanky", ""),
      color: kongColors.Lanky
    };
  } else if (
    name.startsWith("Japes Tiny") ||
    name.startsWith("Aztec Tiny") ||
    name.startsWith("Factory Tiny") ||
    name.startsWith("Galleon Tiny") ||
    name.startsWith("Forest Tiny") ||
    name.startsWith("Caves Tiny") ||
    name.startsWith("Castle Tiny") ||
    name.startsWith("Helm Tiny") ||
    name.startsWith("Isles Tiny")
  ) {
    return {
      label: name.replace(" Tiny", ""),
      color: kongColors.Tiny
    };
  } else if (
    name.startsWith("Japes Chunky") ||
    name.startsWith("Aztec Chunky") ||
    name.startsWith("Factory Chunky") ||
    name.startsWith("Galleon Chunky") ||
    name.startsWith("Forest Chunky") ||
    name.startsWith("Caves Chunky") ||
    name.startsWith("Castle Chunky") ||
    name.startsWith("Helm Chunky") ||
    name.startsWith("Isles Chunky")
  ) {
    return {
      label: name.replace(" Chunky", ""),
      color: kongColors.Chunky
    };
  } else {
    return {
      label: name,
      color: "black"
    };
  }
};
