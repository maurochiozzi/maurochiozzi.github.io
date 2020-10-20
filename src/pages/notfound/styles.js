import styled from "styled-components";

export const Content = styled.div`
  .main-content {
    position: relative;

    background-color: #14274e;
    color: white;

    margin-top: 30%;
    margin-left: 10%;
    margin-right: 10%;

    max-width: 600px;

    padding: 15px;

    border-radius: 2px;
  }

  a {
    padding: 0 10px;
    text-decoration: none;

    color: inherit;
  }
`;

export const Background = styled.img`
  padding-bottom: 50px;
  position: fixed;
  bottom: 0;
  left: ${(props) => props.x_offset}px;
`;
