import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Cat-GPT/i)[0];
  expect(linkElement).toBeInTheDocument();
});
