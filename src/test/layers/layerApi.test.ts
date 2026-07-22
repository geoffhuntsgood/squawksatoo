import { describe, expect, test } from "vitest";
import type { DKBBanana } from "../../classes/DKBBanana";
import { DKBCategory } from "../../enums/DKBCategory";
import { LayerName } from "../../enums/LayerName";
import {
  getAllBananasForCategories,
  getLayerBananas
} from "../../layers/layerApi";

describe("layerApi tests", () => {
  describe("getLayerBananas tests", () => {
    test("All", () => {
      const all = getLayerBananas(LayerName.All, true, true);
      expect(all.length).toBe(777);
    });

    test("Ingot", () => {
      const ingot = getLayerBananas(LayerName.Ingot, false, false);
      expect(ingot.length).toBe(3);
      const ingotPostgame = getLayerBananas(LayerName.Ingot, true, false);
      expect(ingotPostgame.length).toBe(36);
    });

    test("Lagoon", () => {
      const lagoon = getLayerBananas(LayerName.Lagoon, false, false);
      expect(lagoon.length).toBe(43);
      const lagoonPostgame = getLayerBananas(LayerName.Lagoon, true, false);
      expect(lagoonPostgame.length).toBe(56);
    });

    test("Hilltop", () => {
      const hilltop = getLayerBananas(LayerName.Hilltop, false, false);
      expect(hilltop.length).toBe(35);
      const hilltopPostgame = getLayerBananas(LayerName.Hilltop, true, false);
      expect(hilltopPostgame.length).toBe(38);
    });

    test("Canyon", () => {
      const canyon = getLayerBananas(LayerName.Canyon, false, false);
      expect(canyon.length).toBe(79);
      const canyonPostgame = getLayerBananas(LayerName.Canyon, true, false);
      expect(canyonPostgame.length).toBe(80);
    });

    test("Divide", () => {
      const divide = getLayerBananas(LayerName.Divide, false, false);
      expect(divide.length).toBe(9);
      const dividePostgame = getLayerBananas(LayerName.Divide, true, false);
      expect(dividePostgame.length).toBe(10);
    });

    test("Freezer", () => {
      const freezer = getLayerBananas(LayerName.Freezer, false, false);
      expect(freezer.length).toBe(72);
      const freezerPostgame = getLayerBananas(LayerName.Freezer, true, false);
      expect(freezerPostgame.length).toBe(87);
    });

    test("Forest", () => {
      const forest = getLayerBananas(LayerName.Forest, false, false);
      expect(forest.length).toBe(74);
      const forestPostgame = getLayerBananas(LayerName.Forest, true, false);
      expect(forestPostgame.length).toBe(83);
    });

    test("Junction", () => {
      const junction = getLayerBananas(LayerName.Junction, false, false);
      expect(junction.length).toBe(13);
      const junctionPostgame = getLayerBananas(LayerName.Junction, true, false);
      expect(junctionPostgame.length).toBe(15);
    });

    test("Resort", () => {
      const resort = getLayerBananas(LayerName.Resort, false, false);
      expect(resort.length).toBe(41);
      const resortPostgame = getLayerBananas(LayerName.Resort, true, false);
      expect(resortPostgame.length).toBe(42);
    });

    test("Tempest", () => {
      const tempest = getLayerBananas(LayerName.Tempest, false, false);
      expect(tempest.length).toBe(62);
      const tempestPostgame = getLayerBananas(LayerName.Tempest, true, false);
      expect(tempestPostgame.length).toBe(70);
    });

    test("Landfill", () => {
      const landfill = getLayerBananas(LayerName.Landfill, false, false);
      expect(landfill.length).toBe(26);
      const landfillPostgame = getLayerBananas(LayerName.Landfill, true, false);
      expect(landfillPostgame.length).toBe(27);
    });

    test("Racing", () => {
      const racing = getLayerBananas(LayerName.Racing, false, false);
      expect(racing.length).toBe(9);
      const racingPostgame = getLayerBananas(LayerName.Racing, true, false);
      expect(racingPostgame.length).toBe(10);
    });

    test("Radiance", () => {
      const radiance = getLayerBananas(LayerName.Radiance, false, false);
      expect(radiance.length).toBe(67);
      const radiancePostgame = getLayerBananas(LayerName.Radiance, true, false);
      expect(radiancePostgame.length).toBe(76);
    });

    test("Groove (with bonus I hate myself)", () => {
      const groove = getLayerBananas(LayerName.Groove, false, false);
      expect(groove.length).toBe(26);
      const groovePostgame = getLayerBananas(LayerName.Groove, true, true);
      expect(groovePostgame.length).toBe(30);
    });

    test("Feast", () => {
      const feast = getLayerBananas(LayerName.Feast, false, false);
      expect(feast.length).toBe(67);
      const feastPostgame = getLayerBananas(LayerName.Feast, true, false);
      expect(feastPostgame.length).toBe(69);
    });

    test("Forbidden", () => {
      const forbidden = getLayerBananas(LayerName.Forbidden, false, false);
      expect(forbidden.length).toBe(24);
      const forbiddenPostgame = getLayerBananas(
        LayerName.Forbidden,
        true,
        false
      );
      expect(forbiddenPostgame.length).toBe(25);
    });

    test("Core", () => {
      const core = getLayerBananas(LayerName.Core, false, false);
      expect(core.length).toBe(20);
      const corePostgame = getLayerBananas(LayerName.Core, true, false);
      expect(corePostgame.length).toBe(23);
    });
  });

  describe("getAllBananasForCategories tests", () => {
    test("No categories, no postgame", () => {
      const feast = getAllBananasForCategories(
        LayerName.Feast,
        [],
        false,
        false
      );
      expect(feast.length).toBe(67);
    });

    test("One category, no postgame", () => {
      const canyon = getAllBananasForCategories(
        LayerName.Canyon,
        [DKBCategory.Fragmentone],
        false,
        false
      );
      expect(canyon.length).toBe(2);
    });

    test("Multiple categories with postgame", () => {
      const radiance = getAllBananasForCategories(
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
