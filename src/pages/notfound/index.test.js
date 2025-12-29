import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./index";

jest.mock("ga-gtag", () => ({
  gtag: jest.fn(),
}));

describe("NotFound Page", () => {
  it("renders the 404 error message", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText(/Ooops! Page not found, Error 404/i)).toBeInTheDocument();
  });

  it("renders a link to go back home", () => {
    render(
      <MemoryRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <NotFound />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Go back to safety/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});