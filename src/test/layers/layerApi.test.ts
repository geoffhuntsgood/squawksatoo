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
    test("Ingot", () => {
      const ingot = getLayerBananas(LayerName.Ingot);
      expect(ingot.length).toBe(3);
      const ingotPostgame = getLayerBananas(LayerName.Ingot, true);
      expect(ingotPostgame.length).toBe(36);
    });

    test("Lagoon", () => {
      const lagoon = getLayerBananas(LayerName.Lagoon);
      expect(lagoon.length).toBe(43);
      const lagoonPostgame = getLayerBananas(LayerName.Lagoon, true);
      expect(lagoonPostgame.length).toBe(56);
    });

    test("Hilltop", () => {
      const hilltop = getLayerBananas(LayerName.Hilltop);
      expect(hilltop.length).toBe(35);
      const hilltopPostgame = getLayerBananas(LayerName.Hilltop, true);
      expect(hilltopPostgame.length).toBe(38);
    });

    test("Canyon", () => {
      const canyon = getLayerBananas(LayerName.Canyon);
      expect(canyon.length).toBe(79);
      const canyonPostgame = getLayerBananas(LayerName.Canyon, true);
      expect(canyonPostgame.length).toBe(80);
    });

    test("Divide", () => {
      const divide = getLayerBananas(LayerName.Divide);
      expect(divide.length).toBe(9);
      const dividePostgame = getLayerBananas(LayerName.Divide, true);
      expect(dividePostgame.length).toBe(10);
    });

    test("Freezer", () => {
      const freezer = getLayerBananas(LayerName.Freezer);
      expect(freezer.length).toBe(72);
      const freezerPostgame = getLayerBananas(LayerName.Freezer, true);
      expect(freezerPostgame.length).toBe(87);
    });

    test("Forest", () => {
      const forest = getLayerBananas(LayerName.Forest);
      expect(forest.length).toBe(74);
      const forestPostgame = getLayerBananas(LayerName.Forest, true);
      expect(forestPostgame.length).toBe(83);
    });

    test("Junction", () => {
      const junction = getLayerBananas(LayerName.Junction);
      expect(junction.length).toBe(13);
      const junctionPostgame = getLayerBananas(LayerName.Junction, true);
      expect(junctionPostgame.length).toBe(15);
    });

    test("Resort", () => {
      const resort = getLayerBananas(LayerName.Resort);
      expect(resort.length).toBe(41);
      const resortPostgame = getLayerBananas(LayerName.Resort, true);
      expect(resortPostgame.length).toBe(42);
    });

    test("Tempest", () => {
      const tempest = getLayerBananas(LayerName.Tempest);
      expect(tempest.length).toBe(62);
      const tempestPostgame = getLayerBananas(LayerName.Tempest, true);
      expect(tempestPostgame.length).toBe(70);
    });

    test("Landfill", () => {
      const landfill = getLayerBananas(LayerName.Landfill);
      expect(landfill.length).toBe(26);
      const landfillPostgame = getLayerBananas(LayerName.Landfill, true);
      expect(landfillPostgame.length).toBe(27);
    });

    test("Racing", () => {
      const racing = getLayerBananas(LayerName.Racing);
      expect(racing.length).toBe(9);
      const racingPostgame = getLayerBananas(LayerName.Racing, true);
      expect(racingPostgame.length).toBe(10);
    });

    test("Radiance", () => {
      const radiance = getLayerBananas(LayerName.Radiance);
      expect(radiance.length).toBe(67);
      const radiancePostgame = getLayerBananas(LayerName.Radiance, true);
      expect(radiancePostgame.length).toBe(76);
    });

    test("Groove", () => {
      const groove = getLayerBananas(LayerName.Groove);
      expect(groove.length).toBe(26);
      const groovePostgame = getLayerBananas(LayerName.Groove, true);
      expect(groovePostgame.length).toBe(30);
    });

    test("Feast", () => {
      const feast = getLayerBananas(LayerName.Feast);
      expect(feast.length).toBe(67);
      const feastPostgame = getLayerBananas(LayerName.Feast, true);
      expect(feastPostgame.length).toBe(69);
    });

    test("Forbidden", () => {
      const forbidden = getLayerBananas(LayerName.Forbidden);
      expect(forbidden.length).toBe(24);
      const forbiddenPostgame = getLayerBananas(LayerName.Forbidden, true);
      expect(forbiddenPostgame.length).toBe(25);
    });

    test("Core", () => {
      const core = getLayerBananas(LayerName.Core);
      expect(core.length).toBe(20);
      const corePostgame = getLayerBananas(LayerName.Core, true);
      expect(corePostgame.length).toBe(23);
    });
  });

  describe("getAllBananasForCategories tests", () => {
    test("No categories, no postgame", () => {
      const feast = getAllBananasForCategories(LayerName.Feast, []);
      expect(feast.length).toBe(67);
    });

    test("One category, no postgame", () => {
      const canyon = getAllBananasForCategories(LayerName.Canyon, [
        DKBCategory.Fragmentone
      ]);
      expect(canyon.length).toBe(2);
    });

    test("Multiple categories with postgame", () => {
      const radiance = getAllBananasForCategories(
        LayerName.Radiance,
        [DKBCategory.Battle, DKBCategory.Rehearsal],
        true
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
