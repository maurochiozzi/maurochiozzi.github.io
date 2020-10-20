import styled from "styled-components";

export const Content = styled.div`
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;

  text-align: center;

  .title {
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .caption {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
