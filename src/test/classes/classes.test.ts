import { describe, expect, test } from "vitest";
import { Banana } from "../../classes/Banana";
import { Layer } from "../../classes/Layer";
import { LayerName } from "../../enums";

describe("Class instantiation sanity checks", () => {
  test("Banana", () => {
    expect(new Banana(1, "")).toBeInstanceOf(Banana);
  });

  test("Layer", () => {
    expect(new Layer(LayerName.Lagoon, [], [], [], [])).toBeInstanceOf(Layer);
  });
});
