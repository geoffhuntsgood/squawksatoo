import type { LayerName } from "../enums/LayerName";
import type { DKBBanana } from "./DKBBanana";

export class DKBLayer {
  constructor(
    public readonly name: LayerName,
    public readonly bananas: DKBBanana[]
  ) {}
}
