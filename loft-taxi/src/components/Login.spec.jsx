import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock("./Input", () => ({ Input: () => <div>Input content</div> }));


describe("Login", () => {
  it("renders correctly", () => {
    const history = createMemoryHistory()

    const { container } = render(
      <Router history={history}>
        <Login />
      </Router>  
    );
    expect(container.innerHTML).toMatch("Input content");
  })
})