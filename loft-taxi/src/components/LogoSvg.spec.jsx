import React from "react";
import { LogoSvg } from "./LogoSvg";
import { render } from "@testing-library/react";

describe("LogoSvg", () => {
  
    it("renders correctly", () => {
        const { getByTestId } = render(<LogoSvg />);
        const logo = getByTestId("logo");
        expect(logo)
    });

})