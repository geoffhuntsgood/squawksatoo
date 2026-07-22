import type { DKBCategory } from "../enums/DKBCategory";

export class DKBBanana {
  constructor(
    public readonly num: number,
    public readonly name: string,
    public readonly isPostgame?: boolean,
    public readonly category?: DKBCategory,
    public readonly category2?: DKBCategory,
    public readonly iHateMyself?: boolean
  ) {}
}
