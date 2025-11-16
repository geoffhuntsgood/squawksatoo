import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DKMultiSelect } from "../../components/DKMultiSelect";
import { Category } from "../../enums/Category";

describe("DKMultiSelect tests", () => {
  const handle = vi.fn();
  const defaultValues = Object.values(Category);

  const getRender = (label: string, values: string[]) => {
    return render(
      <DKMultiSelect
        label={label}
        values={values}
        handleChange={handle}
        selectItems={Object.keys(Category)}
      />
    );
  };

  test("Default render", () => {
    const { getByText, getByRole } = getRender("test multi 1", defaultValues);
    expect(getByText("test multi 1")).toBeInTheDocument();
    expect(getByRole("combobox")).toHaveTextContent(defaultValues.join(", "));
  });

  test("Handle selection", () => {
    const { getByRole } = getRender("test multi 2", defaultValues);
    fireEvent.click(getByRole("combobox"));
    //fireEvent.select(getByRole("combobox"), { target: { value: ["Cranky"] } });
    screen.debug();
   // expect(handle).toHaveBeenCalledOnce();
  });
});
