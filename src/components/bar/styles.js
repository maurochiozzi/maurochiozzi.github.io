import styled from "styled-components";

export const Nav = styled.div`
  height: 50px;

  position: fixed;
  top: 0;
  width: 100%;

  background-color: grey;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: bold;

  a {
    padding: 0 5%;
    text-decoration: none;
    color: inherit;
  }

  z-index: 9999;
`;
