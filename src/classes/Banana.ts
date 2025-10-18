import type { Category } from "../enums";

export class Banana {
  constructor(
    public readonly num: number,
    public readonly name: string,
    public readonly category?: Category,
    public readonly category2?: Category
  ) {}
}
