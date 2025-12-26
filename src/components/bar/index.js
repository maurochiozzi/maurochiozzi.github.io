import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import { Nav } from "./styles";

export default function Bar() {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Nav>
      <Link to="/">mChiozzi</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Awesome Projects!</Link>
      <IconButton onClick={toggleTheme} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Nav>
  );
}
