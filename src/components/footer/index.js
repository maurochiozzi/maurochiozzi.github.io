import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Footer as FooterContainer } from "./styles";
import { Tooltip, Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import ThemeSwitch from "../ThemeSwitch";
import Resume from "../../assets/files/mChiozzi.pdf";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[4],
    fontSize: 12,
    fontWeight: 600,
  },
  "& .MuiTooltip-arrow": {
    color: theme.palette.background.paper,
  },
}));

export default function Footer() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <FooterContainer>
      <StyledTooltip title="GitHub" arrow TransitionComponent={Zoom}>
        <a
          href="https://github.com/maurochiozzi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
      </StyledTooltip>
      <StyledTooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
        <a
          href="https://www.linkedin.com/in/maurochiozzi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </StyledTooltip>
      <StyledTooltip title="Send Email" arrow TransitionComponent={Zoom}>
        <a
          href="mailto:hire.chiozzi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <FaEnvelope />
        </a>
      </StyledTooltip>
      <StyledTooltip title="Download Resume" arrow TransitionComponent={Zoom}>
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Resume"
        >
          <FaFileDownload />
        </a>
      </StyledTooltip>
      <div style={{ marginLeft: "auto", marginRight: "16px" }}>
        <ThemeSwitch toggleTheme={toggleTheme} />
      </div>
    </FooterContainer>
  );
}
