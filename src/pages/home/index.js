import React from "react";

import Window from "../../assets/images/window.jpg";

import { Content } from "./styles";

export default function Home() {
  return (
    <Content>
      <div className="content-row">
        <div className="main-content">
          <p>
            - Hey! It's me, <b>Mauro</b>!
          </p>
          <i>Mauro who? - </i>
          <p>
            - Mauro <b>Chiozzi</b>!
          </p>
        </div>
        <div className="picture-content">
          <img src={Window} alt="Under Construction" width="100%" />
        </div>
      </div>
      <div className="content-row">
        <div>
          <i>Be patient! Stills under construction!</i>
          <p>Lorem Ipsum Dolor Sit Ament</p>
        </div>
      </div>
    </Content>
  );
}
