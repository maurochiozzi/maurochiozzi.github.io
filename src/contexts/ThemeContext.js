import React, { createContext, useState, useMemo } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Tailwind-like color palette source
const colors = {
  orange: {
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  white: "#ffffff",
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.orange[700],
      contrastText: colors.white,
    },
    background: {
      default: colors.slate[100],
      paper: colors.white,
    },
    text: {
      primary: colors.slate[900],
      secondary: colors.slate[800],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.orange[700],
      contrastText: colors.white,
    },
    background: {
      default: colors.slate[950],
      paper: colors.slate[900],
    },
    text: {
      primary: colors.slate[50],
      secondary: colors.slate[200],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: colors.orange[700],
        },
      },
    },
  },
});

export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const theme = useMemo(
    () => (themeMode === "light" ? lightTheme : darkTheme),
    [themeMode],
  );

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
