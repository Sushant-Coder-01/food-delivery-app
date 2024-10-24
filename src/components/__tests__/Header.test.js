import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../redux/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should render the cart button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cart = screen.getByRole("img", {name: /Cart Logo/});
  
    expect(cart).toBeInTheDocument();
  });
  

it("should render the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", {name: "login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name: "logout"});

  expect(logoutButton).toBeInTheDocument();
});
