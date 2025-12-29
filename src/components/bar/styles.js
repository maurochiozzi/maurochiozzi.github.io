import styled from "styled-components";

export const Nav = styled.nav`
  height: 32px;

  position: fixed;
  z-index: 1100;

  /* Mobile: Full width, attached to top */
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  padding: 0 16px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.palette.primary.main}4D;
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: ${(props) => props.theme.palette.primary.contrastText};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  font-weight: bold;
  transition: all 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  .brand {
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    padding: 0 8px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;

    a {
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      opacity: 0.7;

      &:hover,
      &.active {
        opacity: 1;
        color: ${({ theme }) => theme.palette.primary.main};
        background: ${({ theme }) => theme.palette.primary.main}15;
      }
    }
  }

  /* Desktop: Floating, rounded, centered */
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: 40px;
    top: 16px;
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
