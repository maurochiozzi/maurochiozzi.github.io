import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./index";

// Mock ga-gtag to prevent errors during testing
jest.mock("ga-gtag", () => ({
  gtag: jest.fn(),
}));

describe("About Page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <About />
      </MemoryRouter>
    );
    // TODO: Add specific assertion based on your About page content
    // expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});