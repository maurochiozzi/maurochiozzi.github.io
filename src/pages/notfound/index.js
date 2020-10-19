import React from "react";

import { Content } from "./styles";

import { Link } from "react-router-dom";

import notfound from "../../assets/images/notfound.jpg";

export default function NotFound() {
  return (
    <Content>
      <img className="background" src={notfound} alt="Mario World" />
      <div className="main-content">
        <h1>Ooops! Page not found, Error 404 </h1>
        <p>
          Well... Looks like you tried to search for the wrong Mauro. No
          worries, maybe the content you were looking for was misspelt or it
          just unavailable, or may be moved away.
        </p>
        <Link to="/" type="button">
          Go back to safety
        </Link>
      </div>
    </Content>
  );
}
