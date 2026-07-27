import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DKBConfig } from "../../components";

// TODO: Add tests
describe("DKBConfig tests", () => {
  const setOptionsMock = vi.fn();
  const setGoLabelMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <DKBConfig setOptions={setOptionsMock} setGoLabel={setGoLabelMock} />
    );
  };

  test("Check initial render", async () => {
    expect((await getScreen()).getByText("Layer").last()).toBeVisible();
  });
});
