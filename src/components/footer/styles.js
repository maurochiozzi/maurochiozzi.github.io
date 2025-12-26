import styled from "styled-components";

export const Footer = styled.div`
  height: 32px;

  position: fixed;
  z-index: 1100;

  /* Mobile: Full width, attached to bottom */
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  padding: 0 16px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.palette.primary.main}4D;
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color: ${(props) => props.theme.palette.primary.contrastText};
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;

  margin: 0px;
  transition: all 0.3s ease-in-out;

  a {
    padding: 0 10px;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }

  /* Desktop: Floating, rounded, centered */
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 40px;
    bottom: 16px;
    width: 95%;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 16px;
    padding: 0 32px;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;
