import type { LevelName } from "../enums/LevelName";
import type { DK64Item } from "./DK64Item";

export class DK64Level {
  constructor(
    public readonly name: LevelName,
    public readonly collectables: DK64Item[]
  ) {}
}
