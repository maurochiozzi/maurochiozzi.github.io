import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Nav } from "./styles";

export default function Bar() {
  const location = useLocation();

  return (
    <Nav>
      <Link to="/" className="brand">
        Mauro Chiozzi
      </Link>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/projects"
          className={location.pathname.startsWith("/projects") ? "active" : ""}
        >
          Projects
        </Link>
      </div>
    </Nav>
  );
}
