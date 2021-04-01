import React from "react";
import { Profile } from "./Profile";
import { render } from "@testing-library/react";

describe("Profile", () => {
  
    it("renders correctly", () => {
        const { getByTestId } = render(<Profile />);
        const profile = getByTestId("profile");
        expect(profile)
      });

})