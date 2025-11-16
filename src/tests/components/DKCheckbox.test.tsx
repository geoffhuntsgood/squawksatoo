import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DKCheckbox } from "../../components/DKCheckbox";

describe("DKCheckbox tests", () => {
  const handle = vi.fn();

  const getRender = (label: string) => {
    return render(
      <DKCheckbox label={label} checked={false} handleChange={handle} />
    );
  };

  test("Default render", () => {
    const { getByText } = getRender("test checkbox 1");
    expect(getByText("test checkbox 1")).toBeInTheDocument();
  });

  test("Handle click", () => {
    const { getByText } = getRender("test checkbox 2");
    fireEvent.click(getByText("test checkbox 2"));
    expect(handle).toHaveBeenCalledOnce();
  });
});
