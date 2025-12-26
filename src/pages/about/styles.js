import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Content = styled.div`
  margin: auto;
  padding: 10px;
  max-width: 600px;
  animation: ${fadeIn} 0.6s ease-out;

  font-size: 18px;

  .highlight {
    font-weight: bold;
    color: #ffffff;
    background: #14274e;
    padding: 0px 1px 2px 1px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #1f3c75;
    }
  }

  .main-content {
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    text-align: center;
    margin-bottom: 10px;

    h1 {
      font-size: 26px;
      font-weight: bold;
    }
  }

  .under {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;
