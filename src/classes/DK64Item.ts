import type { DK64Category } from "../enums/DK64Category";

export class DK64Item {
  constructor(
    public readonly name: string,
    public readonly category: DK64Category,
    public readonly iHateMyself?: boolean
  ) {}
}
