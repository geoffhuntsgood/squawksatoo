import type { DKBBanana, DKBLayer } from "../classes";
import { DKBCategory, LayerName } from "../enums";
import { canyon } from "./canyon";
import { core } from "./core";
import { divide } from "./divide";
import { feast } from "./feast";
import { forbidden } from "./forbidden";
import { forest } from "./forest";
import { freezer } from "./freezer";
import { groove } from "./groove";
import { hilltop } from "./hilltop";
import { ingot } from "./ingot";
import { junction } from "./junction";
import { lagoon } from "./lagoon";
import { landfill } from "./landfill";
import { racing } from "./racing";
import { radiance } from "./radiance";
import { resort } from "./resort";
import { tempest } from "./tempest";

const allLayers: DKBLayer[] = [
  ingot,
  lagoon,
  hilltop,
  canyon,
  divide,
  freezer,
  forest,
  junction,
  resort,
  tempest,
  landfill,
  racing,
  radiance,
  groove,
  feast,
  forbidden,
  core
];

export const getBananasForLayer = (layerName: LayerName): DKBBanana[] => {
  return layerName === LayerName.All
    ? allLayers.flatMap((layer: DKBLayer) => layer.bananas)
    : allLayers.filter((layer: DKBLayer) => layer.name === layerName)[0]
        .bananas;
};

export const getCategoriesForLayer = (layerName: LayerName): DKBCategory[] => {
  const layerBananas = getBananasForLayer(layerName);
  const cats: DKBCategory[] = [];
  layerBananas.forEach((banana: DKBBanana) => {
    if (!cats.includes(banana.category)) {
      cats.push(banana.category);
    }
    if (banana.category2 && !cats.includes(banana.category2)) {
      cats.push(banana.category2);
    }
  });
  return cats;
};

export const getBananasForCategories = (
  layerName: LayerName,
  categories: DKBCategory[],
  includePostgame: boolean,
  hellMode: boolean
): DKBBanana[] => {
  let bananas = getBananasForLayer(layerName);

  if (!hellMode) {
    bananas = bananas.filter((banana: DKBBanana) => !banana.hellMode);
  }

  if (!includePostgame) {
    bananas = bananas.filter((banana: DKBBanana) => !banana.isPostgame);
  }

  if (categories.length === 0) {
    return bananas;
  } else {
    return bananas.filter((banana: DKBBanana) => {
      return banana.category2
        ? categories.includes(banana.category) ||
            categories.includes(banana.category2)
        : categories.includes(banana.category);
    });
  }
};
