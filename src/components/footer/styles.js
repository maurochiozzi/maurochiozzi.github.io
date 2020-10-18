import styled from "styled-components";

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: grey;
  color: white;

  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding: 0 5%;
    text-decoration: none;
    color: inherit;
  }
`;
