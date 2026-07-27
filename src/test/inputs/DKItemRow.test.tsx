import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DKItemRow } from "../../inputs";

describe("DKItemRow tests", () => {
  const successMock = vi.fn();
  const failureMock = vi.fn();

  const getScreen = async (disabled: boolean, failure: boolean = false) => {
    return await render(
      <DKItemRow
        name="Test Row"
        disabled={disabled}
        onSuccess={successMock}
        onFailure={failure ? failureMock : undefined}
      />
    );
  };

  test("Check initial render", async () => {
    const row = (await getScreen(false)).getByText("Test Row");
    expect(row).toBeVisible();
    expect(row).toHaveStyle({ textDecoration: "none" });
  });

  test("Check disabled style", async () => {
    const row = (await getScreen(true)).getByText("Test Row");
    expect(row).toHaveStyle({ textDecoration: "line-through" });
  });

  test("Check success action", async () => {
    const screen = await getScreen(false);
    await screen.getByRole("button").click();
    expect(successMock).toHaveBeenCalledOnce();
  });

  test("Check failure action", async () => {
    const screen = await getScreen(false, true);
    await screen.getByRole("button").last().click();
    expect(failureMock).toHaveBeenCalledOnce();
  });
});
