import React from "react";

import { Link } from "react-router-dom";

import { Nav } from "./styles";

export default function Bar() {
  return (
    <Nav>
      <Link to="/me/">mChiozzi</Link>
      <Link to="/me/about">About</Link>
      <Link to="/me/projects">Awesome Projects</Link>
    </Nav>
  );
}
