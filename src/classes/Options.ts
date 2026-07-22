import type { DK64Item } from "./DK64Item";
import type { DKBBanana } from "./DKBBanana";

export class Options {
  constructor(
    // Both
    public readonly count: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly initialItems: DKBBanana[] | DK64Item[],
    public readonly iHateMyself: boolean,

    // DKB-specific
    public readonly includePostgame?: boolean,
    public readonly recycleWrong?: boolean
  ) {}
}
