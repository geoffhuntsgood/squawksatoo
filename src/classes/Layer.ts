import type { Category } from "../enums/Category";
import type { LayerName } from "../enums/LayerName";
import type { Banana } from "./Banana";

export class Layer {
  constructor(
    public readonly name: LayerName,
    public readonly categories: Category[],
    public readonly postgameCategories: Category[],
    public readonly bananas: Banana[],
    public readonly postgameBananas: Banana[]
  ) {}
}
