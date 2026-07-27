import { describe, expect, test } from "vitest";
import { DKBCategory, LayerName } from "../../enums";
import {
  getBananasForCategories,
  getBananasForLayer,
  getCategoriesForLayer
} from "../../utils/layerApi";

describe("layerApi tests", () => {
  describe("getBananasForLayer tests", () => {
    test("All", () => {
      expect(getBananasForLayer(LayerName.All)).toHaveLength(777);
    });

    test("Ingot", () => {
      expect(getBananasForLayer(LayerName.Ingot)).toHaveLength(36);
    });

    test("Lagoon", () => {
      expect(getBananasForLayer(LayerName.Lagoon)).toHaveLength(56);
    });

    test("Hilltop", () => {
      expect(getBananasForLayer(LayerName.Hilltop)).toHaveLength(38);
    });

    test("Canyon", () => {
      expect(getBananasForLayer(LayerName.Canyon)).toHaveLength(80);
    });

    test("Divide", () => {
      expect(getBananasForLayer(LayerName.Divide)).toHaveLength(10);
    });

    test("Freezer", () => {
      expect(getBananasForLayer(LayerName.Freezer)).toHaveLength(87);
    });

    test("Forest", () => {
      expect(getBananasForLayer(LayerName.Forest)).toHaveLength(83);
    });

    test("Junction", () => {
      expect(getBananasForLayer(LayerName.Junction)).toHaveLength(15);
    });

    test("Resort", () => {
      expect(getBananasForLayer(LayerName.Resort)).toHaveLength(42);
    });

    test("Tempest", () => {
      expect(getBananasForLayer(LayerName.Tempest)).toHaveLength(70);
    });

    test("Landfill", () => {
      expect(getBananasForLayer(LayerName.Landfill)).toHaveLength(27);
    });

    test("Racing", () => {
      expect(getBananasForLayer(LayerName.Racing)).toHaveLength(10);
    });

    test("Radiance", () => {
      expect(getBananasForLayer(LayerName.Radiance)).toHaveLength(76);
    });

    test("Groove", () => {
      expect(getBananasForLayer(LayerName.Groove)).toHaveLength(30);
    });

    test("Feast", () => {
      expect(getBananasForLayer(LayerName.Feast)).toHaveLength(69);
    });

    test("Forbidden", () => {
      expect(getBananasForLayer(LayerName.Forbidden)).toHaveLength(25);
    });

    test("Core", () => {
      expect(getBananasForLayer(LayerName.Core)).toHaveLength(23);
    });
  });

  describe("getCategoriesForLayer tests", () => {
    test("Ingot", () => {
      expect(getCategoriesForLayer(LayerName.Ingot)).toEqual([
        DKBCategory.Tutorial,
        DKBCategory.Regular,
        DKBCategory.Triple,
        DKBCategory.ShiftySmash,
        DKBCategory.Fragmentone,
        DKBCategory.Growtone,
        DKBCategory.Seekertone,
        DKBCategory.Smashintone,
        DKBCategory.Quiztone,
        DKBCategory.Glamtone,
        DKBCategory.Cranky,
        DKBCategory.Quintuple,
        DKBCategory.Battle,
        DKBCategory.Chiptone
      ]);
    });

    test("Lagoon", () => {
      expect(getCategoriesForLayer(LayerName.Lagoon)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Regular,
        DKBCategory.Smashintone,
        DKBCategory.ShiftySmash,
        DKBCategory.Battle,
        DKBCategory.Cranky,
        DKBCategory.Challenge,
        DKBCategory.Chiptone,
        DKBCategory.Rehearsal,
        DKBCategory.Seekertone
      ]);
    });

    test("Hilltop", () => {
      expect(getCategoriesForLayer(LayerName.Hilltop)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Regular,
        DKBCategory.Battle,
        DKBCategory.Challenge,
        DKBCategory.Fragmentone,
        DKBCategory.Seekertone,
        DKBCategory.Smashintone,
        DKBCategory.Bloomintone,
        DKBCategory.ShiftySmash,
        DKBCategory.Quiztone,
        DKBCategory.Cranky,
        DKBCategory.Chiptone,
        DKBCategory.Growtone
      ]);
    });

    test("Canyon", () => {
      expect(getCategoriesForLayer(LayerName.Canyon)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Regular,
        DKBCategory.ShiftySmash,
        DKBCategory.Battle,
        DKBCategory.Challenge,
        DKBCategory.Fragmentone,
        DKBCategory.Smashintone,
        DKBCategory.Growtone,
        DKBCategory.Cranky,
        DKBCategory.Seekertone,
        DKBCategory.Chiptone,
        DKBCategory.Glamtone
      ]);
    });

    test("Divide", () => {
      expect(getCategoriesForLayer(LayerName.Divide)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Challenge,
        DKBCategory.Quiztone,
        DKBCategory.Regular,
        DKBCategory.Battle,
        DKBCategory.Cranky,
        DKBCategory.Glamtone
      ]);
    });

    test("Freezer", () => {
      expect(getCategoriesForLayer(LayerName.Freezer)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Regular,
        DKBCategory.Battle,
        DKBCategory.Challenge,
        DKBCategory.Growtone,
        DKBCategory.Seekertone,
        DKBCategory.ShiftySmash,
        DKBCategory.Cranky,
        DKBCategory.Chiptone,
        DKBCategory.Smashintone,
        DKBCategory.Fragmentone,
        DKBCategory.Rehearsal
      ]);
    });

    test("Forest", () => {
      expect(getCategoriesForLayer(LayerName.Forest)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Battle,
        DKBCategory.Regular,
        DKBCategory.Challenge,
        DKBCategory.Smashintone,
        DKBCategory.ShiftySmash,
        DKBCategory.Cranky,
        DKBCategory.Chiptone,
        DKBCategory.Seekertone,
        DKBCategory.Fragmentone,
        DKBCategory.Growtone,
        DKBCategory.Rehearsal
      ]);
    });

    test("Junction", () => {
      expect(getCategoriesForLayer(LayerName.Junction)).toEqual([
        DKBCategory.Regular,
        DKBCategory.Quintuple,
        DKBCategory.Battle,
        DKBCategory.Challenge,
        DKBCategory.Cranky,
        DKBCategory.ShiftySmash
      ]);
    });

    test("Resort", () => {
      expect(getCategoriesForLayer(LayerName.Resort)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Regular,
        DKBCategory.Quiztone,
        DKBCategory.Challenge,
        DKBCategory.Battle,
        DKBCategory.Growtone,
        DKBCategory.Fragmentone,
        DKBCategory.Smashintone,
        DKBCategory.ShiftySmash,
        DKBCategory.Cranky,
        DKBCategory.Bloomintone,
        DKBCategory.Seekertone,
        DKBCategory.Glamtone,
        DKBCategory.Chiptone
      ]);
    });

    test("Tempest", () => {
      expect(getCategoriesForLayer(LayerName.Tempest)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Regular,
        DKBCategory.Challenge,
        DKBCategory.Growtone,
        DKBCategory.Rehearsal,
        DKBCategory.Battle,
        DKBCategory.Smashintone,
        DKBCategory.Seekertone,
        DKBCategory.Cranky,
        DKBCategory.ShiftySmash,
        DKBCategory.Fragmentone
      ]);
    });

    test("Landfill", () => {
      expect(getCategoriesForLayer(LayerName.Landfill)).toEqual([
        DKBCategory.Regular,
        DKBCategory.Quintuple,
        DKBCategory.Bloomintone,
        DKBCategory.Challenge,
        DKBCategory.ShiftySmash,
        DKBCategory.Battle,
        DKBCategory.Fragmentone,
        DKBCategory.Cranky,
        DKBCategory.Smashintone,
        DKBCategory.Chiptone
      ]);
    });

    test("Racing", () => {
      expect(getCategoriesForLayer(LayerName.Racing)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Battle,
        DKBCategory.Regular,
        DKBCategory.Quiztone,
        DKBCategory.Cranky,
        DKBCategory.Challenge
      ]);
    });

    test("Radiance", () => {
      expect(getCategoriesForLayer(LayerName.Radiance)).toEqual([
        DKBCategory.Regular,
        DKBCategory.Triple,
        DKBCategory.ShiftySmash,
        DKBCategory.Challenge,
        DKBCategory.Battle,
        DKBCategory.Rehearsal,
        DKBCategory.Chiptone,
        DKBCategory.Bloomintone,
        DKBCategory.Fragmentone,
        DKBCategory.Smashintone,
        DKBCategory.Growtone,
        DKBCategory.Cranky
      ]);
    });

    test("Groove", () => {
      expect(getCategoriesForLayer(LayerName.Groove)).toEqual([
        DKBCategory.Regular,
        DKBCategory.Challenge,
        DKBCategory.Cranky,
        DKBCategory.Smashintone,
        DKBCategory.Battle,
        DKBCategory.Chiptone,
        DKBCategory.Seekertone
      ]);
    });

    test("Feast", () => {
      expect(getCategoriesForLayer(LayerName.Feast)).toEqual([
        DKBCategory.Triple,
        DKBCategory.Regular,
        DKBCategory.Challenge,
        DKBCategory.Battle,
        DKBCategory.Growtone,
        DKBCategory.ShiftySmash,
        DKBCategory.Smashintone,
        DKBCategory.Quiztone,
        DKBCategory.Fragmentone,
        DKBCategory.Seekertone,
        DKBCategory.Chiptone,
        DKBCategory.Cranky,
        DKBCategory.Glamtone
      ]);
    });

    test("Forbidden", () => {
      expect(getCategoriesForLayer(LayerName.Forbidden)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Regular,
        DKBCategory.Challenge,
        DKBCategory.Battle,
        DKBCategory.Cranky,
        DKBCategory.Smashintone,
        DKBCategory.Chiptone
      ]);
    });

    test("Core", () => {
      expect(getCategoriesForLayer(LayerName.Core)).toEqual([
        DKBCategory.Quintuple,
        DKBCategory.Regular,
        DKBCategory.ShiftySmash,
        DKBCategory.Smashintone,
        DKBCategory.Chiptone,
        DKBCategory.Quiztone,
        DKBCategory.Cranky,
        DKBCategory.Triple
      ]);
    });
  });

  describe("getAllBananasForCategories tests", () => {
    test("No categories, no postgame, no hell mode", () => {
      expect(
        getBananasForCategories(LayerName.Groove, [], false, false)
      ).toHaveLength(26);
    });

    test("One category, no postgame, no hell mode", () => {
      expect(
        getBananasForCategories(
          LayerName.Groove,
          [DKBCategory.Regular],
          false,
          false
        )
      ).toHaveLength(18);
    });

    test("One category with postgame, no hell mode", () => {
      expect(
        getBananasForCategories(
          LayerName.Groove,
          [DKBCategory.Regular],
          true,
          false
        )
      ).toHaveLength(20);
    });

    test("One category with postgame and hell mode", () => {
      expect(
        getBananasForCategories(
          LayerName.Groove,
          [DKBCategory.Regular],
          true,
          true
        )
      ).toHaveLength(21);
    });

    test("Multiple categories for layer with at least one category2 banana", () => {
      expect(
        getBananasForCategories(
          LayerName.Freezer,
          [DKBCategory.ShiftySmash, DKBCategory.Challenge],
          true,
          false
        )
      ).toHaveLength(22);
    });
  });
});
