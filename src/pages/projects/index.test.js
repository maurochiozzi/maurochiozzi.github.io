import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "./index";

// Mock ga-gtag to prevent errors during testing
jest.mock("ga-gtag", () => ({
  gtag: jest.fn(),
}));

describe("Projects Page", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Projects />
      </MemoryRouter>
    );
    // TODO: Add specific assertion based on your Projects page content
    // expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
  });
});