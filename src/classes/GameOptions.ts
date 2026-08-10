import type { DK64Item } from "./DK64Item";
import type { DKBBanana } from "./DKBBanana";

export class GameOptions {
  constructor(
    public readonly count: string,
    public readonly seed: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly recycle: boolean,
    public readonly useKongColors: boolean,
    public readonly bananas: DKBBanana[],
    public readonly items: DK64Item[]
  ) {}
}
