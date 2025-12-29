import styled from "styled-components";

export const SwitchContainer = styled.button`
  position: relative;
  width: 68px;
  height: 38px;
  border-radius: 20px;
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.05)"};
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.15)"
        : "rgba(0, 0, 0, 0.08)"};
  }
`;

export const ToggleThumb = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: ${({ theme }) =>
    theme.palette.mode === "dark" ? "translateX(32px)" : "translateX(0)"};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;

  svg {
    width: 18px;
    height: 18px;
    stroke-width: 2px;
  }
`;

export const IconTrack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  pointer-events: none;

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.palette.text.secondary};
    opacity: 0.5;
  }
`;
