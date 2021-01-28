import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

import { Footer } from "./styles";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

import Resume from "../../assets/files/mChiozzi.pdf";

const LightTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 13,
  },
}))(Tooltip);

export default function Bar() {
  return (
    <Footer>
      <LightTooltip title="GitHub" arrow>
        <a
          href={"https://github.com/maurochiozzi"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </LightTooltip>
      <LightTooltip title="LinkedIn" arrow>
        <a
          href={"https://www.linkedin.com/in/maurochiozzi/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </LightTooltip>
      <LightTooltip title="e-mail" arrow>
        <a
          href={"mailto: mchiozzi95@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </LightTooltip>
      <LightTooltip title="Download Resume" arrow>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <FaFileDownload /> Resume
        </a>
      </LightTooltip>
    </Footer>
  );
}
