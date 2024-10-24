import { render, screen } from "@testing-library/react";
import Contacts from "../Contacts";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {

  it("should Contact Page renders correctly", () => {
    render(<Contacts />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should Contact Page renders correctly", () => {
    render(<Contacts />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should Render input on Contact Page correctly", () => {
    // render
    render(<Contacts />);

    // querying
    const input = screen.getAllByRole("textbox");

    // assert
    expect(input.length).toBe(2);
  });
});
