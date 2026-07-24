import type { DKBBanana } from "./DKBBanana";

export class DKBOptions {
  constructor(
    public readonly count: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly iHateMyself: boolean,
    public readonly includePostgame: boolean,
    public readonly recycleWrong: boolean,
    public readonly initialBananas: DKBBanana[]
  ) {}
}
