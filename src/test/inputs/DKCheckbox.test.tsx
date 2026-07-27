import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DKCheckbox } from "../../inputs";

describe("DKCheckbox tests", () => {
  const checkMock = vi.fn();

  const getScreen = async (secondary: boolean) => {
    return await render(
      <DKCheckbox
        label="Test Checkbox"
        checked={true}
        handleChange={checkMock}
        secondary={secondary}
        helpText="Test Tooltip"
      />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen(false);
    expect(screen.getByText("Test Checkbox")).toBeVisible();
  });

  test("Check action trigger", async () => {
    const screen = await getScreen(true);
    await screen.getByText("Test Checkbox").click();
    expect(checkMock).toHaveBeenCalledOnce();
  });
});
