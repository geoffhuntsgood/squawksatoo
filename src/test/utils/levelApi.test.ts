import { describe, expect, test } from "vitest";
import { DK64Category, LevelName } from "../../enums";
import {
  getCategoriesForLevel,
  getItemsForCategories,
  getItemsForLevel,
  getKongColorInfo
} from "../../utils/levelApi";
import { kongColors } from "../../utils/theme";

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

  describe("getKongColorInfo tests", () => {
    test("useKongColors: No", () => {
      const info = getKongColorInfo("Helm Donkey Medal", false);
      expect(info.label).toBe("Helm Donkey Medal");
      expect(info.color).toBe("black");
    });

    test("Japes Donkey", () => {
      const info = getKongColorInfo("Japes Donkey GB", true);
      expect(info.label).toBe("Japes GB");
      expect(info.color).toBe(kongColors.Donkey);
    });

    test("Aztec Diddy", () => {
      const info = getKongColorInfo("Aztec Diddy Doin' Stuff", true);
      expect(info.label).toBe("Aztec Doin' Stuff");
      expect(info.color).toBe(kongColors.Diddy);
    });

    test("Factory Lanky", () => {
      const info = getKongColorInfo("Factory Lanky Collectable of Doom", true);
      expect(info.label).toBe("Factory Collectable of Doom");
      expect(info.color).toBe(kongColors.Lanky);
    });

    test("Galleon Tiny", () => {
      const info = getKongColorInfo("Galleon Tiny Crown...?", true);
      expect(info.label).toBe("Galleon Crown...?");
      expect(info.color).toBe(kongColors.Tiny);
    });

    test("Forest Chunky", () => {
      const info = getKongColorInfo("Forest Chunky uhhh", true);
      expect(info.label).toBe("Forest uhhh");
      expect(info.color).toBe(kongColors.Chunky);
    });
  });
});
