import type { DK64CBSanity, DK64Item, DK64Level } from "../classes";
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

export const getItemsForLevel = (
  levelName: LevelName,
  cbSanity: DK64CBSanity
): DK64Item[] => {
  let levelItems: DK64Item[] =
    levelName === LevelName.All
      ? allLevels.flatMap((level: DK64Level) => level.items)
      : allLevels.filter((level: DK64Level) => level.name === levelName)[0]
          .items;

  if (!cbSanity.balloons)
    levelItems = levelItems.filter(
      (item: DK64Item) => item.category !== DK64Category.Balloon
    );
  if (!cbSanity.bunches)
    levelItems = levelItems.filter(
      (item: DK64Item) => item.category !== DK64Category.Bunch
    );
  if (!cbSanity.singles)
    levelItems = levelItems.filter(
      (item: DK64Item) => item.category !== DK64Category.Single
    );

  if (cbSanity.balloons || cbSanity.bunches || cbSanity.singles) {
    levelItems = levelItems.filter(
      (item: DK64Item) => item.category !== DK64Category.Medal
    );
  }

  return levelItems;
};

export const getCategoriesForLevel = (
  levelName: LevelName,
  cbSanity: DK64CBSanity
): DK64Category[] => {
  const levelItems = getItemsForLevel(levelName, cbSanity);
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
  hellMode: boolean,
  cbSanity: DK64CBSanity
): DK64Item[] => {
  let items = getItemsForLevel(levelName, cbSanity);

  if (!hellMode) {
    items = items.filter((item: DK64Item) => !item.hellMode);
  }

  if (categories.length === 0) {
    return items;
  } else {
    return items.filter((item: DK64Item) => categories.includes(item.category));
  }
};
