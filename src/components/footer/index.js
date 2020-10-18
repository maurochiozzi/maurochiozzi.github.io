import React from "react";

import { Footer } from "./styles";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Bar() {
  return (
    <Footer>
      <a href={"https://github.com/maurochiozzi"}>
        <FaGithub />
      </a>
      <a href={"https://www.linkedin.com/in/maurochiozzi/"}>
        <FaLinkedin />
      </a>
      <a href={"mailto: mchiozzi95@gmail.com"}>
        <FaEnvelope />
      </a>
    </Footer>
  );
}
