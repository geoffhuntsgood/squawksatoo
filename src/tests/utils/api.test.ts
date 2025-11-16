import { describe, expect, test } from "vitest";
import { LayerName } from "../../enums/LayerName";
import { ingot } from "../../layers/ingot";
import { getNansAndCatsForLayer, getNansByCat } from "../../utils/api";

describe("api.ts tests", () => {
  describe("getNansAndCatsForLayer", () => {
    test("Canyon, no postgame", () => {
      const nc = getNansAndCatsForLayer(LayerName.Canyon, false);
      expect(nc.bananas).toHaveLength(79);
      expect(nc.categories).toHaveLength(10);
    });

    test("Canyon with postgame", () => {
      const nc = getNansAndCatsForLayer(LayerName.Canyon, true);
      expect(nc.bananas).toHaveLength(80);
      expect(nc.categories).toHaveLength(11);
    });
  });

  test("getNansByCat", () => {
    const nans = getNansByCat(
      [...ingot.bananas, ...ingot.postgameBananas],
      [...ingot.categories, ...ingot.postgameCategories]
    );
    expect(nans).toHaveLength(36);
  });
});
