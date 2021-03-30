import React from "react";
import { InputForProfile } from "./InputForProfile";
import { render } from "@testing-library/react";

describe("InputForProfile", () => {
  
    it("renders correctly", () => {
        const { getByTestId } = render(<InputForProfile />);
        const input = getByTestId("inputForProfile");
        expect(input)
    });

})