import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(30, 41, 59, 0.7)"
      : "rgba(255, 255, 255, 0.7)"};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 10px 30px -10px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: 1px solid
    ${({ theme }) =>
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.4)"};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 20px 40px -10px rgba(0, 0, 0, 0.2),
      0 0 20px 0 ${({ theme }) => theme.palette.primary.main}40;
    border-color: ${({ theme }) => theme.palette.primary.main}80;

    .card-image img {
      transform: scale(1.1);
    }
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

export const CardContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .tags {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
