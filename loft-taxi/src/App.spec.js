import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Login.jsx", () => ({ LoginWithAuth: () => <div>Login content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login content");
  });

});