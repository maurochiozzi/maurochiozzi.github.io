import React from "react";

import { Link } from "react-router-dom";

import { Content } from "./styles";

import Resume from "../../assets/files/mChiozzi.pdf";

export default function About() {
  return (
    <Content>
      <div className="title">
        <p>Hello, there! I'm Mauro Chiozzi!</p>
      </div>
      <div className="main-content">
        <p>
          I'm Mechanical <span className="highlight">[Engineer]</span> and
          passionate for overall engineering. For a while, I've been developing
          solutions in many applications fields. Like developing mechanical
          solutions, I enjoy a lot of coding using many different paradigms, and
          by that, I started teaching programming logic on my nineteens.
        </p>
        <p>
          As the time past by, I started to expand my knowledge and also going
          deeper. Nowadays, I develop solutions more focused on embedded
          systems, going through hardware development to software (embedded or
          not).
        </p>
        <p>
          My mission is to help people achieve their goals by sharing knowledge
          between both parts and by managing to lead then to key results.
        </p>
        <hr />
        <p>
          I've Bachelor degree in Science and Technology with emphasis on
          Mechanic Technologist, and also Mechanical Engineering Graduation,
          both by{" "}
          <a href="https://www.ufrn.br/en">
            Federal University of Rio Grande do Norte
          </a>
          .
        </p>
        <p>
          If you want, you can download my{" "}
          <a href={Resume} target="_blank">
            <span className="highlight">[resume here]</span>
          </a>
          , or find it in the bottom-left among the{" "}
          <span className="highlight">[social networks]</span> links and{" "}
          <span className="highlight">[e-mail]</span> for contact. For some
          projects developed by myself, checkout the{" "}
          <Link to="/projects">
            <span className="highlight">[Projects Portfolio]</span>
          </Link>{" "}
          page.
        </p>
      </div>
    </Content>
  );
}
