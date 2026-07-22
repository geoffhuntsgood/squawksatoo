import { describe, expect, test } from "vitest";
import type { DK64Item } from "../../classes/DK64Item";
import { DK64Category } from "../../enums/DK64Category";
import { LevelName } from "../../enums/LevelName";
import { getAllCollectablesForCategories } from "../../levels/levelApi";

describe("levelApi tests", () => {
  describe("getAllCollectablesForCategories tests", () => {
    test("No category, all levels, I don't hate myself", () => {
      const allCollectables = getAllCollectablesForCategories(
        [],
        LevelName.All,
        false
      );
      expect(allCollectables.length).toBe(410);
    });

    test("One category, all levels, I do hate myself", () => {
      const allGBs = getAllCollectablesForCategories(
        [DK64Category.GB],
        LevelName.All,
        true
      );
      expect(allGBs.length).toBe(201);
    });

    test("Multiple categories with level", () => {
      const factory = getAllCollectablesForCategories(
        [DK64Category.GB, DK64Category.Medal],
        LevelName.Factory,
        false
      );
      expect(factory.length).toBe(30);
      expect(
        factory.filter(
          (collectable: DK64Item) => collectable.category === DK64Category.GB
        ).length
      ).toBe(25);
      expect(
        factory.filter(
          (collectable: DK64Item) => collectable.category === DK64Category.Medal
        ).length
      ).toBe(5);
    });
  });
});
