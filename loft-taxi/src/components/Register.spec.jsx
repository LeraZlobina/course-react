import React from "react";
import { Register } from "./Register";
import { render } from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock("./Input", () => ({ Input: () => <div>Input content</div> }));


describe("Register", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory()

    const { container } = render(
      <Router history={history}>
        <Register />
      </Router>  
    );
    expect(container.innerHTML).toMatch("Input content");
  })
})