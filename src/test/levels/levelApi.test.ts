import { describe, expect, test } from "vitest";
import type { DK64Item } from "../../classes/DK64Item";
import { DK64Category } from "../../enums/DK64Category";
import { LevelName } from "../../enums/LevelName";
import { getAllCollectablesForCategories } from "../../levels/levelApi";

describe("levelApi tests", () => {
  describe("getAllCollectablesForCategories tests", () => {
    test("No category, all levels", () => {
      const allCollectables = getAllCollectablesForCategories([], LevelName.All);
      expect(allCollectables.length).toBe(280);
    });

    test("One category, all levels", () => {
      const allFairies = getAllCollectablesForCategories([DK64Category.Fairy], LevelName.All);
      expect(allFairies.length).toBe(19);
    });

    test("Multiple categories with level", () => {
      const factory = getAllCollectablesForCategories(
        [DK64Category.GB, DK64Category.Medal],
        LevelName.Factory
      );
      expect(factory.length).toBe(30);
      expect(
        factory.filter(
          (collectable: DK64Item) =>
            collectable.category === DK64Category.GB
        ).length
      ).toBe(25);
      expect(
        factory.filter(
          (collectable: DK64Item) =>
            collectable.category === DK64Category.Medal
        ).length
      ).toBe(5);
    });
  });
});
