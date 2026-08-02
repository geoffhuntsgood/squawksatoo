import type { DK64Item } from "./DK64Item";

export class DK64Options {
  constructor(
    public readonly count: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly useKongColors: boolean,
    public readonly items: DK64Item[]
  ) {}
}
