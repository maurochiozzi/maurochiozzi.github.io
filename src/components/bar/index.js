import React from "react";

import { Link } from "react-router-dom";

import { Nav } from "./styles";

export default function Bar() {
  return (
    <Nav>
      <Link to="/">mChiozzi</Link>
      <Link to="about">About</Link>
      <Link>Projects</Link>
    </Nav>
  );
}
