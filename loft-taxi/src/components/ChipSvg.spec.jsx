import React from "react";
import { ChipSvg } from "./ChipSvg";
import { render } from "@testing-library/react";

describe("ChipSvg", () => {
  
    it("renders correctly", () => {
        const { getByTestId } = render(<ChipSvg />);
        const chip = getByTestId("chip");
        expect(chip)
    });

})