import type { CBSanitySettings } from "./CBSanitySettings";
import type { DK64Item } from "./DK64Item";

export class DK64Options {
  constructor(
    public readonly count: string,
    public readonly timer: boolean,
    public readonly autoRefresh: boolean,
    public readonly iHateMyself: boolean,
    public readonly enableCBSanity: boolean,
    public readonly cbSanitySettings: CBSanitySettings,
    public readonly initialItems: DK64Item[]
  ) {}
}
