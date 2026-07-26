import { describe, expect, test } from "vitest";
import { DK64Item } from "../../classes";
import { DK64Category, LevelName } from "../../enums";
import { getItemsForCategories } from "../../levels/levelApi";

describe("levelApi tests", () => {
  const getCBSanity = (sanity: boolean[]) => {
    return {
      balloons: sanity[0],
      bunches: sanity[1],
      singles: sanity[2]
    };
  };

  describe("getAllForCategories tests", () => {
    test("No category, all levels, I don't hate myself, no CBSanity", () => {
      const allItems = getItemsForCategories(
        LevelName.All,
        [],
        false,
        getCBSanity([false, false, false])
      );
      expect(allItems.length).toBe(293);
    });

    test("One category, all levels, I do hate myself, no CBSanity", () => {
      const allGBs = getItemsForCategories(
        LevelName.All,
        [DK64Category.GB],
        true,
        getCBSanity([false, false, false])
      );
      expect(allGBs.length).toBe(201);
    });

    test("Multiple categories with level, no CBSanity", () => {
      const factory = getItemsForCategories(
        LevelName.Factory,
        [DK64Category.GB, DK64Category.Medal],
        false,
        getCBSanity([false, false, false])
      );
      expect(factory.length).toBe(30);
      expect(
        factory.filter((item: DK64Item) => item.category === DK64Category.GB)
          .length
      ).toBe(25);
      expect(
        factory.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(5);
    });

    test("CBSanity: Balloons", () => {
      const japes = getItemsForCategories(
        LevelName.Japes,
        [],
        false,
        getCBSanity([true, false, false])
      );
      expect(japes.length).toBe(43);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Balloon)
          .length
      ).toBe(13);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
    });

    test("CBSanity: Bunches", () => {
      const japes = getItemsForCategories(
        LevelName.Japes,
        [],
        false,
        getCBSanity([false, true, false])
      );
      expect(japes.length).toBe(63);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Bunch)
          .length
      ).toBe(33);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
    });

    test("CBSanity: Singles", () => {
      const japes = getItemsForCategories(
        LevelName.Japes,
        [],
        false,
        getCBSanity([false, false, true])
      );
      expect(japes.length).toBe(47);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Single)
          .length
      ).toBe(17);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
    });

    test("CBSanity: All", () => {
      const japes = getItemsForCategories(
        LevelName.Japes,
        [],
        false,
        getCBSanity([true, true, true])
      );
      expect(japes.length).toBe(93);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Balloon)
          .length
      ).toBe(13);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Bunch)
          .length
      ).toBe(33);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Single)
          .length
      ).toBe(17);
      expect(
        japes.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
    });

    test("Check CBSanity removes Medal category: Balloon", () => {
      const galleon = getItemsForCategories(
        LevelName.Galleon,
        [DK64Category.GB, DK64Category.Medal],
        false,
        getCBSanity([true, false, false])
      );
      expect(galleon.length).toBe(39);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.GB)
          .length
      ).toBe(25);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
      expect(
        galleon.filter(
          (item: DK64Item) => item.category === DK64Category.Balloon
        ).length
      ).toBe(14);
    });

    test("Check CBSanity removes Medal category: Bunch", () => {
      const galleon = getItemsForCategories(
        LevelName.Galleon,
        [DK64Category.GB, DK64Category.Medal],
        false,
        getCBSanity([false, true, false])
      );
      expect(galleon.length).toBe(47);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.GB)
          .length
      ).toBe(25);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Bunch)
          .length
      ).toBe(22);
    });

    test("Check CBSanity removes Medal category: Single", () => {
      const galleon = getItemsForCategories(
        LevelName.Galleon,
        [DK64Category.GB, DK64Category.Medal],
        false,
        getCBSanity([false, false, true])
      );
      expect(galleon.length).toBe(40);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.GB)
          .length
      ).toBe(25);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
      expect(
        galleon.filter(
          (item: DK64Item) => item.category === DK64Category.Single
        ).length
      ).toBe(15);
    });

    test("Check CBSanity returns all when Medal was only category", () => {
      const galleon = getItemsForCategories(
        LevelName.Galleon,
        [DK64Category.Medal],
        false,
        getCBSanity([false, true, false])
      );
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Medal)
          .length
      ).toBe(0);
      expect(
        galleon.filter((item: DK64Item) => item.category === DK64Category.Bunch)
          .length
      ).toBe(22);
    });
  });
});
