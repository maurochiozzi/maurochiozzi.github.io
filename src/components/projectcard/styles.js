import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(30, 41, 59, 0.6)"
      : "rgba(255, 255, 255, 0.6)"};
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    -10px -10px 30px 0 rgba(0, 0, 0, 0.1),
    10px 10px 30px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
      0 20px 40px -10px rgba(0, 0, 0, 0.15),
      12px 12px 30px 5px ${({ theme }) => theme.palette.primary.main}80;

    .card-image img {
      transform: scale(1.05);
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

  h3 {
    margin: 0 0 12px;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  p {
    margin: 0 0 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tags {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
