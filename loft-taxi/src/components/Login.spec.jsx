import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";

jest.mock("./Input", () => ({ Input: () => <div>Input content</div> }));


describe("Login", () => {
  it("renders correctly", () => {
    const { container } = render(<Login />);
    expect(container.innerHTML).toMatch("Input content");
  })
})