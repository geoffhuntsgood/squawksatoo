import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DKBGame } from "../../components";
import { freezer } from "../../layers/freezer";

// TODO: Add tests
describe("DKBGame tests", () => {
  const setOptionsMock = vi.fn();
  const setStartMock = vi.fn();

  test("Check initial render", async () => {
    const screen = await render(
      <DKBGame
        options={{
          count: "5",
          seed: "Seed",
          timer: true,
          autoRefresh: false,
          recycle: false,
          useKongColors: true,
          bananas: freezer.bananas,
          items: []
        }}
        setOptions={setOptionsMock}
        setStart={setStartMock}
      />
    );

    expect(screen.getByText("Go get 'em!")).toBeVisible();
  });
});
