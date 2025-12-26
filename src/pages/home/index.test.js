import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./index";

// Mock ga-gtag to prevent errors during testing
jest.mock("ga-gtag", () => ({
  gtag: jest.fn(),
}));

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Home />
      </MemoryRouter>
    );
    // TODO: Add specific assertion based on your Home page content
    // expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
});