import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DK64Config } from "../../components";

// TODO: Add tests
describe("DK64Config tests", () => {
  const setOptionsMock = vi.fn();
  const setGoLabelMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <DK64Config setOptions={setOptionsMock} setGoLabel={setGoLabelMock} />
    );
  };

  test("Check initial render", async () => {
    expect((await getScreen()).getByText("Level").last()).toBeVisible();
  });
});
