import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import React from "react";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});
