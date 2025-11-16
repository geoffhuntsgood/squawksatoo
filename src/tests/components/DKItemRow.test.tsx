import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DKItemRow } from "../../components/DKItemRow";

describe("DKItemRow tests", () => {
  const fail = vi.fn();
  const succeed = vi.fn();

  const getRender = (name: string, disabled: boolean) => {
    return render(
      <DKItemRow
        name={name}
        onSuccess={succeed}
        onFailure={fail}
        disabled={disabled}
      />
    );
  };

  test("Default render", () => {
    const { getByText } = getRender("test item row 1", false);
    expect(getByText("test item row 1")).toBeInTheDocument();
  });

  test("Displays strikethrough when disabled", () => {
    const { getByText } = getRender("test item row 2", true);
    expect(getByText("test item row 2")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  test("Handle Success click", () => {
    const { getAllByRole } = getRender("test item row 3", false);
    const successButton = getAllByRole("button")[0];
    if (successButton) {
      fireEvent.click(successButton);
      expect(succeed).toHaveBeenCalledOnce();
    } else {
      throw new Error("Can't find success button in DKItemRow.");
    }
  });

  test("Handle Failure click", () => {
    const { getAllByRole } = getRender("test item row 4", false);
    const failureButton = getAllByRole("button")[1];
    if (failureButton) {
      fireEvent.click(failureButton);
      expect(fail).toHaveBeenCalledOnce();
    } else {
      throw new Error("Can't find failure button in DKItemRow.");
    }
  });
});
