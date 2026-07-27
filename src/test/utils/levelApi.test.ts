import { describe, expect, test } from "vitest";
import { DK64CBSanity } from "../../classes";
import { DK64Category, LevelName } from "../../enums";
import {
  getCategoriesForLevel,
  getItemsForCategories,
  getItemsForLevel
} from "../../utils/levelApi";

describe("levelApi tests", () => {
  const getCBSanity = (
    balloons = false,
    bunches = false,
    singles = false
  ): DK64CBSanity => {
    return {
      balloons,
      bunches,
      singles
    };
  };

  describe("getItemsForLevel tests", () => {
    test("All", () => {
      expect(getItemsForLevel(LevelName.All, getCBSanity())).toHaveLength(296);
    });

    test("Isles", () => {
      expect(getItemsForLevel(LevelName.Isles, getCBSanity())).toHaveLength(40);
    });

    test("Japes", () => {
      expect(getItemsForLevel(LevelName.Japes, getCBSanity())).toHaveLength(35);
    });

    test("Aztec", () => {
      expect(getItemsForLevel(LevelName.Aztec, getCBSanity())).toHaveLength(36);
    });

    test("Factory", () => {
      expect(getItemsForLevel(LevelName.Factory, getCBSanity())).toHaveLength(
        36
      );
    });

    test("Galleon", () => {
      expect(getItemsForLevel(LevelName.Galleon, getCBSanity())).toHaveLength(
        35
      );
    });

    test("Forest", () => {
      expect(getItemsForLevel(LevelName.Forest, getCBSanity())).toHaveLength(
        36
      );
    });

    test("Caves", () => {
      expect(getItemsForLevel(LevelName.Caves, getCBSanity())).toHaveLength(35);
    });

    test("Castle", () => {
      expect(getItemsForLevel(LevelName.Castle, getCBSanity())).toHaveLength(
        35
      );
    });

    test("Helm", () => {
      expect(getItemsForLevel(LevelName.Helm, getCBSanity())).toHaveLength(8);
    });

    describe("CBSanity checks", () => {
      test("Balloons", () => {
        const japes = getItemsForLevel(LevelName.Japes, getCBSanity(true));
        expect(japes).toHaveLength(43);
        expect(
          japes.filter((item) => item.category === DK64Category.Balloon)
        ).toHaveLength(13);
        expect(
          japes.filter((item) => item.category === DK64Category.Medal)
        ).toHaveLength(0);
      });

      test("Bunches", () => {
        const japes = getItemsForLevel(
          LevelName.Japes,
          getCBSanity(false, true)
        );
        expect(japes).toHaveLength(63);
        expect(
          japes.filter((item) => item.category === DK64Category.Bunch)
        ).toHaveLength(33);
        expect(
          japes.filter((item) => item.category === DK64Category.Medal)
        ).toHaveLength(0);
      });

      test("Singles", () => {
        const japes = getItemsForLevel(
          LevelName.Japes,
          getCBSanity(false, false, true)
        );
        expect(japes).toHaveLength(47);
        expect(
          japes.filter((item) => item.category === DK64Category.Single)
        ).toHaveLength(17);
        expect(
          japes.filter((item) => item.category === DK64Category.Medal)
        ).toHaveLength(0);
      });

      test("Medals not removed when CBSanity does not apply", () => {
        const helm = getItemsForLevel(
          LevelName.Helm,
          getCBSanity(true, true, true)
        );
        expect(helm).toHaveLength(8);
        expect(
          helm.filter((item) => item.category === DK64Category.HelmMedal)
        ).toHaveLength(5);
      });
    });
  });

  describe("getCategoriesForLevel tests", () => {
    test("All", () => {
      expect(getCategoriesForLevel(LevelName.All, getCBSanity())).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.CompanyCoin,
        DK64Category.RainbowCoin,
        DK64Category.Medal,
        DK64Category.Key,
        DK64Category.HelmMedal
      ]);
    });

    test("Isles", () => {
      expect(getCategoriesForLevel(LevelName.Isles, getCBSanity())).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.CompanyCoin,
        DK64Category.RainbowCoin
      ]);
    });

    test("Japes", () => {
      expect(getCategoriesForLevel(LevelName.Japes, getCBSanity())).toEqual([
        DK64Category.GB,
        DK64Category.Medal,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin
      ]);
    });

    test("Aztec", () => {
      expect(getCategoriesForLevel(LevelName.Aztec, getCBSanity())).toEqual([
        DK64Category.GB,
        DK64Category.Medal,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin
      ]);
    });

    test("Factory", () => {
      expect(getCategoriesForLevel(LevelName.Factory, getCBSanity())).toEqual([
        DK64Category.GB,
        DK64Category.Medal,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.CompanyCoin,
        DK64Category.RainbowCoin
      ]);
    });

    test("Galleon (with balloons)", () => {
      expect(
        getCategoriesForLevel(LevelName.Galleon, getCBSanity(true))
      ).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin,
        DK64Category.Balloon
      ]);
    });

    test("Forest (with bunches)", () => {
      expect(
        getCategoriesForLevel(LevelName.Forest, getCBSanity(false, true))
      ).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin,
        DK64Category.Bunch
      ]);
    });

    test("Caves (with singles)", () => {
      expect(
        getCategoriesForLevel(LevelName.Caves, getCBSanity(false, false, true))
      ).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin,
        DK64Category.Single
      ]);
    });

    test("Castle (with all CBSanity)", () => {
      expect(
        getCategoriesForLevel(LevelName.Castle, getCBSanity(true, true, true))
      ).toEqual([
        DK64Category.GB,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key,
        DK64Category.RainbowCoin,
        DK64Category.Balloon,
        DK64Category.Bunch,
        DK64Category.Single
      ]);
    });

    test("Helm", () => {
      expect(
        getCategoriesForLevel(LevelName.Helm, getCBSanity(true, true, true))
      ).toEqual([
        DK64Category.HelmMedal,
        DK64Category.Crown,
        DK64Category.Fairy,
        DK64Category.Key
      ]);
    });
  });

  describe("getItemsForCategories tests", () => {
    test("No categories, no hell mode", () => {
      expect(
        getItemsForCategories(LevelName.Factory, [], false, getCBSanity())
      ).toHaveLength(34);
    });

    test("No categories, hell mode", () => {
      expect(
        getItemsForCategories(LevelName.Factory, [], true, getCBSanity())
      ).toHaveLength(36);
    });

    test("One category, no hell mode", () => {
      expect(
        getItemsForCategories(
          LevelName.Factory,
          [DK64Category.GB],
          false,
          getCBSanity()
        )
      ).toHaveLength(24);
    });

    test("Multiple categories, no hell mode", () => {
      expect(
        getItemsForCategories(
          LevelName.Factory,
          [DK64Category.Fairy, DK64Category.Crown],
          false,
          getCBSanity()
        )
      ).toHaveLength(3);
    });
  });
});
