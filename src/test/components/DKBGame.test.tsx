import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import type { DKBBanana } from "../../classes";
import { DKBGame } from "../../components";
import { freezer } from "../../layers/freezer";

// TODO: Add tests
describe("DKBGame tests", () => {
  const setOptionsMock = vi.fn();
  const setStartMock = vi.fn();

  const getScreen = async (
    count: string,
    timer: boolean,
    autoRefresh: boolean,
    recycle: boolean,
    bananas: DKBBanana[]
  ) => {
    return await render(
      <DKBGame
        options={{
          count,
          timer,
          autoRefresh,
          recycle,
          bananas
        }}
        setOptions={setOptionsMock}
        setStart={setStartMock}
      />
    );
  };

  test("Check initial render", async () => {
    expect(
      (await getScreen("1", true, false, true, freezer.bananas)).getByText(
        "Go get 'em!"
      )
    ).toBeVisible();
  });
});
