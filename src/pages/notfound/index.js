import React, { useState, useEffect } from "react";
import { Content, Background } from "./styles";

import { Link } from "react-router-dom";

import notfound from "../../assets/images/notfound.jpg";

export default function NotFound() {
  const [offset, setOffset] = useState(0);

  const normalized_width = (3840 * window.innerHeight) / 1080;

  useEffect(() => {
    const interval = setInterval(() => {
      if (offset > window.innerWidth - normalized_width) {
        setOffset((offset) => offset - 1);
      }
    }, 5);
    return () => clearInterval(interval);
  }, [offset]);

  useEffect(() => {
    process.env.NODE_ENV !== "development" &&
      window.gtag("config", "G-9RF05WQMZY", {
        page_title: "404-error",
        page_path: "/404-error",
      });
  }, []);

  return (
    <Content>
      <Background x_offset={offset} src={notfound} alt="Mario World" />
      <div className="main-content">
        <h1>Ooops! Page not found, Error 404 </h1>
        <p>
          Well... Looks like you tried to search for the wrong Mauro. No
          worries, maybe the content you were looking for was misspelled, or it
          just unavailable, or maybe moved away.
        </p>
        <p>Perhaps you should contact me to report this issue.</p>
        <Link to="/">Go back to safety</Link>
      </div>
    </Content>
  );
}
