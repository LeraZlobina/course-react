import React from "react";
import { Header } from "./Header";
import { render, fireEvent } from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock("./Login.jsx", () => ({ LoginWithConnect: () => <div>Login content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile", () => ({ ProfileWithConnect: () => <div>Profile content</div> }));


describe("Header", () => {
  
  it("opens the corresponding page", () => {

      const history = createMemoryHistory()
  
      const { container, getByText } = render(
        <Router history={history}>
          <Header />
        </Router>  
      )
      
      fireEvent.click(getByText("Карта"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile content");
      fireEvent.click(getByText("Выйти"));
      expect(container.innerHTML).toMatch("Login content");
    });

})