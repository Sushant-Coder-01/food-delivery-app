import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MockData from "../mocks/resDetailMock.js";
import act from "react-dom/test-utils";

it("Should check search functionality for pizza input", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const resturants = screen.getAllByTestId("resCard");

  expect(resturants.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const seachBox = screen.getByTestId("seachBox");

  fireEvent.change(seachBox, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const updatedResturants = screen.getAllByTestId("resCard");

  expect(updatedResturants.length).toBe(4);
  
});

it("Should check top rated resturant button", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const resturants = screen.getAllByTestId("resCard");

  expect(resturants.length).toBe(20);

  const topRatedRes = screen.getByRole("button", { name: "Top Rated Restaurants" });

  fireEvent.click(topRatedRes);

  const updatedResturants = screen.getAllByTestId("resCard");

  expect(updatedResturants.length).toBe(16);
  
});