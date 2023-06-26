import React from "react";

import Window from "../../assets/images/window.jpg";

import { Content } from "./styles";

export default function Home() {
  return (
    <Content>
      <div className="content-table">
        <div className="content-row">
          <div className="picture-content">
            <img src={Window} alt="Under Construction" width="100%" />
          </div>
          <div className="main-content">
            <p className="left">
              - <i>Hey!</i> It's me, <b>Mauro!</b>
            </p>
            <p className="right">
              <i>
                Mauro <span className="under">who?</span>
              </i>{" "}
              -
            </p>
            <p className="left">
              - Mauro <b>Chiozzi!</b>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <p>Grab your tools and start exploring!</p>
        <p>
          You may use the upper bar for About and also to discover some Awesome
          Projects. <br />
          Don't forget to follow me on{" "}
          <a
            href={"https://github.com/maurochiozzi"}
            target="_blank"
            rel="noopener noreferrer"
          >
            [GitHub]
          </a>{" "}
          and{" "}
          <a
            href={"https://www.linkedin.com/in/maurochiozzi/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            [LinkedIn]
          </a>{" "}
          :D
        </p>
        <small>
          <i>
            Compliments, suggestions, or coffee: see footer for e-mail contact.
          </i>
        </small>
      </div>
    </Content>
  );
}
