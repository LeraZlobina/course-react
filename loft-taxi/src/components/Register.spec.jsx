import React from "react";
import { Register } from "./Register";
import { render } from "@testing-library/react";

jest.mock("./Input", () => ({ Input: () => <div>Input content</div> }));


describe("Register", () => {
  it("renders correctly", () => {
    const { container } = render(<Register />);
    expect(container.innerHTML).toMatch("Input content");
  })
})