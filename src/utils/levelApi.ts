import random from "random";
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
        name: item.name.replace("{{X}}", String(random.int(20, 100)))
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
  let label = name;
  let color = "black";

  if (!useKongColors) {
    return {
      label,
      color
    };
  }

  const levels = [
    "Japes",
    "Aztec",
    "Factory",
    "Galleon",
    "Forest",
    "Caves",
    "Castle",
    "Helm",
    "Isles"
  ];
  const kongs = ["Donkey", "Diddy", "Lanky", "Tiny", "Chunky"];

  levels.some((level: string) => {
    kongs.some((kong: string) => {
      if (name.startsWith(`${level} ${kong}`)) {
        label = name.replace(` ${kong}`, "");
        color = kongColors[kong as keyof typeof kongColors];
      }
    });
  });

  return {
    label,
    color
  };
};
