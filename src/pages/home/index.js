import React from "react";

import Window from "../../assets/images/window.jpg";

import { Content } from "./styles";

export default function Home() {
  return (
    <Content>
      <div className="content-table">
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
      </div>
      <div className="footer-content">
        <p>Grab your tools and start exploring!</p>
        <p>
          You may use upper bar for About and also to discover some Awesome
          Projects. <br />
          Don't forget to follow me on my{" "}
          <span className="highlight">GitHub</span> and{" "}
          <span className="highlight">LinkedIn</span> :D
        </p>
        <small>See footer bar for Social Networks</small>
      </div>
    </Content>
  );
}
