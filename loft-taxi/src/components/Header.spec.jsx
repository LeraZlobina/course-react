import React from "react";
import { Header } from "./Header";
import { render, fireEvent } from "@testing-library/react";

jest.mock("./Login.jsx", () => ({ LoginWithAuth: () => <div>Login content</div> }));
jest.mock("./Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile", () => ({ Profile: () => <div>Profile content</div> }));


describe("Header", () => {
  
  it("opens the corresponding page", () => {
      const { getByText, container } = render(<Header />);
      fireEvent.click(getByText("Карта"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Профиль"));
      expect(container.innerHTML).toMatch("Profile content");
      fireEvent.click(getByText("Выйти"));
      expect(container.innerHTML).toMatch("Login content");
    });

})