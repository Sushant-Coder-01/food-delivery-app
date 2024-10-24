import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MockData from "../mocks/resIdMockData.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux/appStore";
import Hearder from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MockData) })
);

it("should display shimmer initially, then load data after API call", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Hearder />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Garlic Bread (6)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("itemCard").length).toBe(6);

  expect(screen.getByText("(0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("itemCard").length).toBe(8);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(
    screen.getByText("Cart is Empty! Please Add Items...!")
  ).toBeInTheDocument();

  expect(screen.getAllByTestId("itemCard").length).toBe(6);
});
