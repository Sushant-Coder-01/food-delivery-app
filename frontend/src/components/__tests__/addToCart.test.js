import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MockData from "../mocks/resIdMockData.json";
import { act } from "@testing-library/react";
import RestaurantMenuCategory from "../RestaurantMenuCategory";
import category from "../mocks/categoriesMock.json";
import ItemList from "../ItermList";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../redux/appStore"

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MockData) })
);

it("should display shimmer initially, then load data after API call", async () => {
  await act(async () => {
    render(
    <BrowserRouter >
    <Provider store={appStore}>
      <RestaurantMenu />,
      <RestaurantMenuCategory data={category?.card?.card} />,
      <ItemList itemCards={category?.card?.card?.itemCards} />
    </Provider>
    </BrowserRouter>
    );
  });

//   screen.debug()

  
});
