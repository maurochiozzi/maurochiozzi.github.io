import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#14274e",
      light: "#1f3c75",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f0f0f0",
    },
    background: {
      default: "#f1f6f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#394867",
      secondary: "#9ba4b4",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
    ].join(","),
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9ba4b4",
      light: "#f1f6f9",
      contrastText: "#000000",
    },
    secondary: {
      main: "#394867",
    },
    background: {
      default: "#14274e",
      paper: "#1f3c75",
    },
    text: {
      primary: "#f1f6f9",
      secondary: "#9ba4b4",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
    ].join(","),
  },
});
