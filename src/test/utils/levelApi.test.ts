import { describe, expect, test } from "vitest";
import { DK64CBSanity, DK64Item } from "../../classes";
import { DK64Category, LevelName } from "../../enums";
import {
  getCategoriesForLevel,
  getItemsForCategories,
  getItemsForLevel
} from "../../utils/levelApi";

describe("levelApi tests", () => {
  const cbSanity = (
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
    const expected = {
      [LevelName.All]: 296,
      [LevelName.Isles]: 40,
      [LevelName.Japes]: 35,
      [LevelName.Aztec]: 36,
      [LevelName.Factory]: 36,
      [LevelName.Galleon]: 35,
      [LevelName.Forest]: 36,
      [LevelName.Caves]: 35,
      [LevelName.Castle]: 35,
      [LevelName.Helm]: 8
    };

    Object.values(LevelName).forEach((level: LevelName) => {
      test(`${level}`, () => {
        expect(getItemsForLevel(level, cbSanity())).toHaveLength(
          expected[level]
        );
      });
    });

    describe("CBSanity checks", () => {
      const noMedals = (list: DK64Item[]) => {
        expect(
          list.filter((item) => item.category === DK64Category.Medal)
        ).toHaveLength(0);
      };

      test("Balloons", () => {
        const japes = getItemsForLevel(LevelName.Japes, cbSanity(true));
        expect(
          japes.filter((item) => item.category === DK64Category.Balloon)
        ).toHaveLength(13);
        noMedals(japes);
      });

      test("Bunches", () => {
        const japes = getItemsForLevel(LevelName.Japes, cbSanity(false, true));
        expect(
          japes.filter((item) => item.category === DK64Category.Bunch)
        ).toHaveLength(33);
        noMedals(japes);
      });

      test("Singles", () => {
        const japes = getItemsForLevel(
          LevelName.Japes,
          cbSanity(false, false, true)
        );
        expect(
          japes.filter((item) => item.category === DK64Category.Single)
        ).toHaveLength(17);
        noMedals(japes);
      });

      test("Medals not removed when CBSanity does not apply", () => {
        const helm = getItemsForLevel(
          LevelName.Helm,
          cbSanity(true, true, true)
        );
        expect(
          helm.filter((item) => item.category === DK64Category.HelmMedal)
        ).toHaveLength(5);
      });
    });
  });

  describe("getCategoriesForLevel tests", () => {
    const expected = {
      [LevelName.All]: 8,
      [LevelName.Isles]: 5,
      [LevelName.Japes]: 6,
      [LevelName.Aztec]: 6,
      [LevelName.Factory]: 7,
      [LevelName.Galleon]: 6,
      [LevelName.Forest]: 6,
      [LevelName.Caves]: 6,
      [LevelName.Castle]: 6,
      [LevelName.Helm]: 4
    };

    Object.values(LevelName).forEach((level: LevelName) => {
      test(`${level}`, () => {
        expect(getCategoriesForLevel(level, cbSanity())).toHaveLength(
          expected[level]
        );
      });
    });

    describe("CBSanity checks", () => {
      const noMedals = (list: DK64Category[]) => {
        expect(list.filter((item) => item === DK64Category.Medal)).toHaveLength(
          0
        );
      };

      test("Balloons", () => {
        const galleon = getCategoriesForLevel(
          LevelName.Galleon,
          cbSanity(true)
        );
        expect(galleon).toHaveLength(6);
        noMedals(galleon);
      });

      test("Bunches", () => {
        const galleon = getCategoriesForLevel(
          LevelName.Galleon,
          cbSanity(false, true)
        );
        expect(galleon).toHaveLength(6);
        noMedals(galleon);
      });

      test("Singles", () => {
        const galleon = getCategoriesForLevel(
          LevelName.Galleon,
          cbSanity(false, false, true)
        );
        expect(galleon).toHaveLength(6);
        noMedals(galleon);
      });

      test("All", () => {
        const galleon = getCategoriesForLevel(
          LevelName.Galleon,
          cbSanity(true, true, true)
        );
        expect(galleon).toHaveLength(8);
        noMedals(galleon);
      });
    });
  });

  describe("getItemsForCategories tests", () => {
    test("Categories: 0, Hell Mode: No, CBSanity: None", () => {
      expect(
        getItemsForCategories(LevelName.Factory, [], false, cbSanity())
      ).toHaveLength(34);
    });

    test("Categories: 0, Hell Mode: Yes, CBSanity: Balloons", () => {
      expect(
        getItemsForCategories(LevelName.Factory, [], true, cbSanity(true))
      ).toHaveLength(44);
    });

    test("Categories: 1, Hell Mode: No, CBSanity: Bunches", () => {
      expect(
        getItemsForCategories(
          LevelName.Factory,
          [DK64Category.GB],
          false,
          cbSanity(false, true)
        )
      ).toHaveLength(24);
    });

    test("Categories: 2, Hell Mode: No, CBSanity: All", () => {
      expect(
        getItemsForCategories(
          LevelName.Factory,
          [DK64Category.Fairy, DK64Category.Crown, DK64Category.Single],
          false,
          cbSanity(true, true, true)
        )
      ).toHaveLength(18);
    });
  });
});
