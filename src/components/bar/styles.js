import styled from "styled-components";

export const Nav = styled.div`
  height: 50px;

  position: fixed;
  top: 0;
  width: 100%;

  background-color: #14274e;
  color: #ffffff;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  font-weight: bold;

  a {
    padding: 0 5%;
    text-decoration: none;
    color: inherit;
  }

  z-index: 1;
`;
