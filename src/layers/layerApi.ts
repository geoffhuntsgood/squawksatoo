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

export const getLayerBananas = (
  layerName: LayerName,
  includePostgame: boolean,
  iHateMyself: boolean
): DKBBanana[] => {
  let bananas: DKBBanana[];
  if (layerName === LayerName.All) {
    bananas = allLayers.flatMap((layer: DKBLayer) => layer.bananas);
  } else {
    bananas = allLayers.filter((layer: DKBLayer) => layer.name === layerName)[0]
      .bananas;
  }

  if (!iHateMyself) {
    bananas = bananas.filter((banana: DKBBanana) => !banana.iHateMyself);
  }

  return includePostgame
    ? bananas
    : bananas.filter((banana: DKBBanana) => !banana.isPostgame);
};

export const getAllForCategories = (
  layerName: LayerName,
  categories: DKBCategory[],
  includePostgame: boolean,
  iHateMyself: boolean
) => {
  const layerBananas: DKBBanana[] = getLayerBananas(
    layerName,
    includePostgame,
    iHateMyself
  );

  if (categories.length === 0) return layerBananas;

  return layerBananas.filter((banana: DKBBanana) => {
    if (banana.category) {
      return banana.category2
        ? categories.includes(banana.category) ||
            categories.includes(banana.category2)
        : categories.includes(banana.category);
    }
    return false;
  });
};
