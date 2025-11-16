import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DKButton } from "../../components/DKButton";

describe("DKButton tests", () => {
  const handle = vi.fn();

  const getRender = (label: string) => {
    return render(<DKButton label={label} handleClick={handle} />);
  };

  test("Default render", () => {
    const { getByText } = getRender("test button 1");
    expect(getByText("test button 1")).toBeInTheDocument();
  });

  test("Handle click", () => {
    const { getByText } = getRender("test button 2");
    fireEvent.click(getByText("test button 2"));
    expect(handle).toHaveBeenCalledOnce();
  });
});
