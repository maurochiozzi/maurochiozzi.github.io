import React from "react";

import { Footer } from "./styles";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

import Resume from "../../assets/files/mChiozzi.pdf";

export default function Bar() {
  return (
    <Footer>
      <a href={"https://github.com/maurochiozzi"} target="_blank">
        <FaGithub />
      </a>
      <a href={"https://www.linkedin.com/in/maurochiozzi/"} target="_blank">
        <FaLinkedin />
      </a>
      <a href={"mailto: mchiozzi95@gmail.com"} target="_blank">
        <FaEnvelope />
      </a>
      <a href={Resume} target="_blank">
        <FaFileDownload />
      </a>
    </Footer>
  );
}
