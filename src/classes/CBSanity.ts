import type { DK64Item } from "./DK64Item";

export class CBSanity {
  constructor(
    public readonly balloons: DK64Item[],
    public readonly bunches: DK64Item[],
    public readonly singles: DK64Item[]
  ) {}
}
