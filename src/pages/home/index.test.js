import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../themes";
import Home from "./index";

jest.mock("ga-gtag", () => ({
  gtag: jest.fn(),
}));

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <MemoryRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <Home />
        </MemoryRouter>
      </ThemeProvider>,
    );
  });
});
