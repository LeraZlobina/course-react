import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

jest.mock("./components/Login.jsx", () => ({ LoginWithAuth: () => <div>Login content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true}}),
      subscribe: () => {},
      dispatch: () => {},
    }

    const history = createMemoryHistory()

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>  
    );
    expect(container.innerHTML).toMatch("Login content");
  });

});