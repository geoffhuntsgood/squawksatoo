import type { Banana } from "../classes/Banana";
import { Layer } from "../classes/Layer";
import { Category } from "../enums/Category";
import { LayerName } from "../enums/LayerName";
import { allLayers } from "../layers";

export const getNansAndCatsForLayer = (
  layerName: LayerName,
  includePostgame: boolean
): { bananas: Banana[]; categories: Category[] } => {
  const layer = allLayers.filter((l: Layer) => l.name === layerName)[0];

  return {
    bananas: includePostgame
      ? [...layer.bananas, ...layer.postgameBananas]
      : [...layer.bananas],
    categories: includePostgame
      ? [...layer.categories, ...layer.postgameCategories]
      : [...layer.categories]
  };
};

export const getNansByCat = (
  bananas: Banana[],
  categories: Category[]
): Banana[] => {
  return bananas.filter((b: Banana) => {
    if (b.category && b.category2) {
      return (
        categories.includes(b.category) || categories.includes(b.category2)
      );
    }

    if (b.category) {
      return categories.includes(b.category);
    }

    return b;
  });
};
