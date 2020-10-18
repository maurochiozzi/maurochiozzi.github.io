import React from "react";

import { Link } from "react-router-dom";

import { Nav, Hr } from "./styles";

export default function Bar() {
  return (
    <React.Fragment>
      <Nav>
        <Link to="/">mChiozzi</Link>
        <Link>About</Link>
        <Link>Projects</Link>
      </Nav>
      <Hr />
    </React.Fragment>
  );
}
