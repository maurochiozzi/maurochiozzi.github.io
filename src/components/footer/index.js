import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Footer as FooterContainer } from "./styles";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import ThemeSwitch from "../ThemeSwitch";

const LightTooltip = withStyles(() => ({
  tooltip: {
    fontSize: 13,
  },
}))(Tooltip);

export default function Footer() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <FooterContainer>
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
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileDownload />
        </a>
      </LightTooltip>
      <div style={{ marginLeft: "auto", marginRight: "16px" }}>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </div>
    </FooterContainer>
  );
}
