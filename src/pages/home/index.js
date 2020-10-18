import React from "react";

import Window from "../../assets/images/window.jpg";

import { Content } from "./styles";

export default function Home() {
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
      <div className="content-row">
        <div>
          <p>
            Want to know more about this person? Navigate thru options in nav
            bar and find more about Mauro!
          </p>
          <i>Be patient! Stills under construction!</i>
        </div>
      </div>
    </Content>
  );
}
