import { describe, expect, test } from "vitest";
import type { DKBBanana } from "../../classes";
import { DKBCategory, LayerName } from "../../enums";
import {
  getBananasForCategories,
  getBananasForLayer
} from "../../layers/layerApi";

describe("layerApi tests", () => {
  describe("getBananasForLayer tests", () => {
    test("All", () => {
      const all = getBananasForLayer(LayerName.All);
      expect(all.length).toBe(777);
    });

    test("Ingot", () => {
      const ingot = getBananasForLayer(LayerName.Ingot);
      expect(ingot.length).toBe(36);
    });

    test("Lagoon", () => {
      const lagoon = getBananasForLayer(LayerName.Lagoon);
      expect(lagoon.length).toBe(56);
    });

    test("Hilltop", () => {
      const hilltop = getBananasForLayer(LayerName.Hilltop);
      expect(hilltop.length).toBe(38);
    });

    test("Canyon", () => {
      const canyon = getBananasForLayer(LayerName.Canyon);
      expect(canyon.length).toBe(80);
    });

    test("Divide", () => {
      const divide = getBananasForLayer(LayerName.Divide);
      expect(divide.length).toBe(10);
    });

    test("Freezer", () => {
      const freezer = getBananasForLayer(LayerName.Freezer);
      expect(freezer.length).toBe(87);
    });

    test("Forest", () => {
      const forest = getBananasForLayer(LayerName.Forest);
      expect(forest.length).toBe(83);
    });

    test("Junction", () => {
      const junction = getBananasForLayer(LayerName.Junction);
      expect(junction.length).toBe(15);
    });

    test("Resort", () => {
      const resort = getBananasForLayer(LayerName.Resort);
      expect(resort.length).toBe(42);
    });

    test("Tempest", () => {
      const tempest = getBananasForLayer(LayerName.Tempest);
      expect(tempest.length).toBe(70);
    });

    test("Landfill", () => {
      const landfill = getBananasForLayer(LayerName.Landfill);
      expect(landfill.length).toBe(27);
    });

    test("Racing", () => {
      const racing = getBananasForLayer(LayerName.Racing);
      expect(racing.length).toBe(10);
    });

    test("Radiance", () => {
      const radiance = getBananasForLayer(LayerName.Radiance);
      expect(radiance.length).toBe(76);
    });

    test("Groove", () => {
      const groove = getBananasForLayer(LayerName.Groove);
      expect(groove.length).toBe(30);
    });

    test("Feast", () => {
      const feast = getBananasForLayer(LayerName.Feast);
      expect(feast.length).toBe(69);
    });

    test("Forbidden", () => {
      const forbidden = getBananasForLayer(LayerName.Forbidden);
      expect(forbidden.length).toBe(25);
    });

    test("Core", () => {
      const core = getBananasForLayer(LayerName.Core);
      expect(core.length).toBe(23);
    });
  });

  describe("getAllBananasForCategories tests", () => {
    test("No categories, no postgame", () => {
      const feast = getBananasForCategories(
        LayerName.Feast,
        [],
        false,
        false
      );
      expect(feast.length).toBe(67);
    });

    test("One category, no postgame", () => {
      const canyon = getBananasForCategories(
        LayerName.Canyon,
        [DKBCategory.Fragmentone],
        false,
        false
      );
      expect(canyon.length).toBe(2);
    });

    test("Multiple categories with postgame", () => {
      const radiance = getBananasForCategories(
        LayerName.Radiance,
        [DKBCategory.Battle, DKBCategory.Rehearsal],
        true,
        false
      );
      expect(radiance.length).toBe(15);
      expect(
        radiance.filter(
          (banana: DKBBanana) =>
            banana.category === DKBCategory.Battle ||
            banana.category2 === DKBCategory.Battle
        ).length
      ).toBe(6);
      expect(
        radiance.filter(
          (banana: DKBBanana) =>
            banana.category === DKBCategory.Rehearsal ||
            banana.category2 === DKBCategory.Rehearsal
        ).length
      ).toBe(9);
    });
  });
});
