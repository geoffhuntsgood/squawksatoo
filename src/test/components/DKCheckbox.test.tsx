import { describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { DKCheckbox } from "../../inputs";

describe("DKCheckbox tests", () => {
  const checkMock = vi.fn();

  const getScreen = async () => {
    return await render(
      <DKCheckbox
        label="Test Checkbox"
        checked={true}
        handleChange={checkMock}
      />
    );
  };

  test("Check initial render", async () => {
    const screen = await getScreen();
    expect(screen.getByText("Test Checkbox")).toBeVisible();
  });

  test("Test check action", async () => {
    const screen = await getScreen();
    await screen.getByText("Test Checkbox").click();
    expect(checkMock).toHaveBeenCalledOnce();
  });
});
