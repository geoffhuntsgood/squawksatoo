import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { DKHeader } from "../../components/DKHeader";

describe("DKHeader tests", () => {
  test("Default render", () => {
    const { getByText } = render(<DKHeader />);
    expect(getByText("Squawksatoo")).toBeInTheDocument();
  });
});
