import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Content = styled.div`
  animation: ${fadeIn} 0.8s ease-out;

  .main-content {
    background-color: #14274e;
    color: white;

    margin-top: calc(50px + 10%);
    margin-left: 10%;
    margin-right: 10%;

    max-width: 600px;

    padding: 15px;

    border-radius: 2px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  a {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background-color: white;
    color: #14274e;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    transition: transform 0.2s ease, background-color 0.2s ease;
    &:hover {
      background-color: #f0f0f0;
      transform: translateY(-2px);
    }
  }
`;

export const Background = styled.img`
  padding-bottom: 50px;
  position: fixed;
  bottom: 0;
  left: ${(props) => props.x_offset}px;

  height: 100%;

  z-index: -1;
`;
