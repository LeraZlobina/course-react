import React from "react";
import { Input } from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  
    it("renders correctly", () => {
        const { getByTestId } = render(<Input />);
        const input = getByTestId("input");
        expect(input)
    });

})