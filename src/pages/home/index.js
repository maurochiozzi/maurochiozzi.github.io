import React, { useEffect } from "react";

import Window from "../../assets/images/window.JPG";

import { Content } from "./styles";

import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.pageview("/home");
  }, []);

  return (
    <Content>
      <div className="content-row">
        <div className="main-content">
          <p className="left">
            - <i>Hey!</i> It's me, <b>Mauro!</b>
          </p>
          <i className="right">Mauro </i>
          <i className="right under">who?</i> -
          <p className="left">
            - Mauro <b>Chiozzi!</b>
          </p>
        </div>
        <div className="picture-content">
          <img src={Window} alt="Under Construction" width="100%" />
        </div>
      </div>
    </Content>
  );
}
