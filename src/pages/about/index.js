import React from "react";

import { Link } from "react-router-dom";

import { Content } from "./styles";

import Profile from "../../components/profile";
import Resume from "../../assets/files/mChiozzi.pdf";

export default function About() {
  return (
    <Content>
      <Profile />
      <div className="picture"></div>
      <div className="title">
        <p>Hello, there! I'm Mauro Chiozzi!</p>
      </div>
      <div className="main-content">
        <p>
          I'm Mechanical <span className="highlight">[Engineer]</span> and
          passionate for overall engineering, and I might say it's because all
          my creative developed as a child during my joyful days playing with{" "}
          <span className="highlight">[Lego]</span>.
        </p>
        <p>
          To keep on filling my creativity, I enrolled on{" "}
          <a
            href="https://www.ufrn.br/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="highlight">[UFRN]</span>
          </a>{" "}
          where I first graduate as Bachelor in Science & Technology. The first
          year I had my first programming class: it was love on the first sight.
          The following year I started lessoning programming and nowadays I
          still developing my <span className="highlight">[coding skills]</span>
          .
        </p>
        <p>
          Later on, after finishing the Bachelor course, I enrolled on the
          Mechanical Engineering course, where I could develop more skills in
          the area that I'm passionate about. Also,{" "}
          <span className="highlight">[team-development]</span> was possible as
          well as a development in{" "}
          <span className="highlight">[problem-solving]</span> with the
          <span className="highlight">[hard work]</span> time active with the{" "}
          <span className="highlight">[Car-Kará]</span> Baja SAE and AeroDesign
          SAE <span className="highlight">[Teams]</span>.
        </p>
        <p>
          In general, I'm highly motived by the daily challenges and the
          knowledge awarded aside with the{" "}
          <span className="highlight">[goals achieved]</span>. My mission is,
          besides the self-development, is to{" "}
          <span className="highlight">[help people]</span> achieve their goals
          by sharing knowledge between both parts and by managing to lead then
          (or us) to <span className="highlight">[key results]</span>.
        </p>
        <p>
          A lot of things happened during those academic years, and some of then
          you can find out by downloading my{" "}
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <span className="highlight">[resume here]</span>
          </a>
          ; visiting the{" "}
          <Link to="/projects">
            <span className="highlight">[projects portfolio]</span>
          </Link>
          ; exploring a little more on my{" "}
          <span className="highlight">[social networks]</span>; or feel free to
          send an <span className="highlight">[e-mail]</span> (see bottom-left
          footer).
        </p>
      </div>
    </Content>
  );
}
