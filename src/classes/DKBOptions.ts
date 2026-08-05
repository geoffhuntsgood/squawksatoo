import type { DKBBanana } from "./DKBBanana";

export class DKBOptions {
  constructor(
    public readonly count: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly recycle: boolean,
    public readonly bananas: DKBBanana[],
    public readonly seed: string
  ) {}
}
