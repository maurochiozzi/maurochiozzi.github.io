import styled from "styled-components";

export const Content = styled.div`
  margin: auto;
  padding: 10px;
  max-width: 600px;

  font-size: 18px;

  .highlight {
    font-weight: bold;
    color: #ffffff;
    background: #394867;
    padding: 0px 1px 2px 1px;
  }

  .main-content {
    text-align: justify;
    margin-left: auto;
    margin-right: auto;
  }

  .title {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .under {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
