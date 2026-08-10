import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DK64Game } from "../../components";
import { japes } from "../../levels/japes";

// TODO: Add tests
describe("DK64Game tests", () => {
  const setOptionsMock = vi.fn();
  const setStartMock = vi.fn();

  test("Check initial render", async () => {
    const screen = await render(
      <DK64Game
        options={{
          count: "5",
          seed: "Seed",
          timer: true,
          autoRefresh: false,
          recycle: false,
          useKongColors: true,
          bananas: [],
          items: japes.items
        }}
        setOptions={setOptionsMock}
        setStart={setStartMock}
      />
    );

    expect(screen.getByText("Go get 'em!")).toBeVisible();
  });
});
