import { describe, expect, test } from "vitest";
import { DK64Category, LevelName } from "../../enums";
import {
  getCategoriesForLevel,
  getItemsForCategories,
  getItemsForLevel
} from "../../utils/levelApi";

describe("levelApi tests", () => {
  describe("getItemsForLevel tests", () => {
    const expected = {
      [LevelName.All]: 331,
      [LevelName.Isles]: 40,
      [LevelName.Japes]: 40,
      [LevelName.Aztec]: 41,
      [LevelName.Factory]: 41,
      [LevelName.Galleon]: 40,
      [LevelName.Forest]: 41,
      [LevelName.Caves]: 40,
      [LevelName.Castle]: 40,
      [LevelName.Helm]: 8
    };

    Object.values(LevelName).forEach((level: LevelName) => {
      test(`${level}`, () => {
        expect(getItemsForLevel(level)).toHaveLength(expected[level]);
      });
    });
  });

  describe("getCategoriesForLevel tests", () => {
    const expected = {
      [LevelName.All]: 10,
      [LevelName.Isles]: 6,
      [LevelName.Japes]: 8,
      [LevelName.Aztec]: 8,
      [LevelName.Factory]: 9,
      [LevelName.Galleon]: 8,
      [LevelName.Forest]: 8,
      [LevelName.Caves]: 8,
      [LevelName.Castle]: 8,
      [LevelName.Helm]: 4
    };

    Object.values(LevelName).forEach((level: LevelName) => {
      test(`${level}`, () => {
        expect(getCategoriesForLevel(level)).toHaveLength(expected[level]);
      });
    });
  });

  describe("getItemsForCategories tests", () => {
    test("Categories: 0, Hell Mode: No", () => {
      expect(getItemsForCategories(LevelName.Factory, [], false)).toHaveLength(
        39
      );
    });

    test("Categories: 0, Hell Mode: Yes", () => {
      expect(getItemsForCategories(LevelName.Factory, [], true)).toHaveLength(
        41
      );
    });

    test("Categories: 1, Hell Mode: No", () => {
      expect(
        getItemsForCategories(LevelName.Factory, [DK64Category.GB], false)
      ).toHaveLength(19);
    });

    test("Categories: 2, Hell Mode: No", () => {
      expect(
        getItemsForCategories(
          LevelName.Factory,
          [DK64Category.Fairy, DK64Category.Crown],
          false
        )
      ).toHaveLength(3);
    });
  });
});
