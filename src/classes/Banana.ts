import type { Category } from "../enums/Category";

export class Banana {
  constructor(
    public readonly num: number,
    public readonly name: string,
    public readonly category?: Category,
    public readonly category2?: Category
  ) {}
}
