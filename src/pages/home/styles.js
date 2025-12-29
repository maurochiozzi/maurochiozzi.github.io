import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 40px;
  text-align: center;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-out forwards;

  .main-content {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: auto;
    flex: 1;
    justify-content: center;
  }

  .footer-content {
    margin-top: 40px;
    padding: 20px;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 0.9rem;

    .social-links {
      margin-bottom: 12px;

      a {
        color: ${({ theme }) => theme.palette.text.primary};
        text-decoration: none;
        font-weight: 600;
        margin: 0 6px;
        transition: color 0.2s;

        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }

    small {
      display: block;
      font-size: 0.85rem;
      opacity: 0.7;

      i {
        font-style: normal;
      }
    }
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    margin: 0 0 16px 0;
    color: ${({ theme }) => theme.palette.text.primary};
    line-height: 1.1;
    letter-spacing: -0.02em;

    .highlight {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0 0 24px 0;
    line-height: 1.3;
  }

  .description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin: 0 auto 48px auto;
    max-width: 600px;
    opacity: 0.9;

    b {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 600;
    }
  }

  .cta-group {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    box-shadow: 0 8px 20px -4px ${({ theme }) => theme.palette.primary.main}80;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 24px -4px
        ${({ theme }) => theme.palette.primary.main}aa;
      filter: brightness(1.1);
    }
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 36px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    border: 2px solid
      ${({ theme }) =>
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.1)"};

    &:hover {
      border-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.main};
      transform: translateY(-3px);
      background: ${({ theme }) => theme.palette.primary.main}10;
    }
  }

  .biography {
    margin-top: 60px;
    max-width: 680px;
    text-align: left;
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.palette.text.secondary};
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 0.3s;
    opacity: 0;

    p {
      margin-bottom: 24px;
    }

    a {
      color: ${({ theme }) => theme.palette.text.primary};
      text-decoration: none;
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main}80;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 4px;

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
        border-bottom-color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    .highlight {
      color: ${({ theme }) => theme.palette.text.primary};
      font-weight: 600;
    }
  }
`;
