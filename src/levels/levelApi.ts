import type { CBSanitySettings, DK64Item, DK64Level } from "../classes";
import { CBCategory, DK64Category, LevelName } from "../enums";
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

const getCBSanityForLevel = (
  level: DK64Level,
  cbSanitySettings: CBSanitySettings
): DK64Item[] => {
  let allItems = level.items;
  if (level.cbSanity) {
    if (cbSanitySettings.balloons) {
      allItems = allItems.concat(level.cbSanity.balloons);
    }
    if (cbSanitySettings.bunches) {
      allItems = allItems.concat(level.cbSanity.bunches);
    }
    if (cbSanitySettings.singles) {
      allItems = allItems.concat(level.cbSanity.singles);
    }
  }
  return allItems;
};

export const getLevelItems = (
  levelName: LevelName,
  iHateMyself: boolean,
  cbSanitySettings: CBSanitySettings
): DK64Item[] => {
  let items: DK64Item[];

  if (levelName === LevelName.All) {
    items = allLevels.flatMap((level: DK64Level) => {
      return getCBSanityForLevel(level, cbSanitySettings);
    });
  } else {
    items = getCBSanityForLevel(
      allLevels.filter((level: DK64Level) => level.name === levelName)[0],
      cbSanitySettings
    );
  }

  if (!iHateMyself) {
    items = items.filter((item: DK64Item) => !item.iHateMyself);
  }

  return items;
};

export const getAllForCategories = (
  categories: DK64Category[],
  levelName: LevelName,
  iHateMyself: boolean,
  cbSanity: CBSanitySettings
): DK64Item[] => {
  const itemList = getLevelItems(levelName, iHateMyself, cbSanity);
  let cats: (DK64Category | CBCategory)[] = categories;
  if (cats.length === 0) return itemList;

  if (cbSanity.balloons || cbSanity.bunches || cbSanity.singles) {
    cats = cats.filter(
      (cat: DK64Category | CBCategory) => cat !== DK64Category.Medal
    );
    if (cats.length > 0) {
      if (cbSanity.balloons) cats.push(CBCategory.Balloon);
      if (cbSanity.bunches) cats.push(CBCategory.Bunch);
      if (cbSanity.singles) cats.push(CBCategory.Single);
    } else {
      return itemList.filter(
        (item: DK64Item) => item.category !== DK64Category.Medal
      );
    }
  }

  return itemList.filter((item: DK64Item) => cats.includes(item.category));
};
