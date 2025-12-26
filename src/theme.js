import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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

export default theme;
