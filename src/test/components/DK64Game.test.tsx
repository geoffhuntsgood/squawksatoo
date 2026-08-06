import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import type { DK64Item } from "../../classes";
import { DK64Game } from "../../components";
import { japes } from "../../levels/japes";

// TODO: Add tests
describe("DK64Game tests", () => {
  const setOptionsMock = vi.fn();
  const setStartMock = vi.fn();

  const getScreen = (
    count: string,
    timer: boolean,
    autoRefresh: boolean,
    useKongColors: boolean,
    seed: string,
    items: DK64Item[]
  ) => {
    return render(
      <DK64Game
        options={{
          count,
          timer,
          autoRefresh,
          useKongColors,
          seed,
          items
        }}
        setOptions={setOptionsMock}
        setStart={setStartMock}
      />
    );
  };

  test("Check initial render", async () => {
    expect(
      (await getScreen("1", true, false, false, "", japes.items)).getByText(
        "Go get 'em!"
      )
    ).toBeVisible();
  });
});
