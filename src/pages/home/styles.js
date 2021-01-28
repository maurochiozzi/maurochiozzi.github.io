import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;

  font-size: 18px;
  text-align: center;

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  .content-table {
    display: table;
    text-align: center;
  }

  .content-row {
    width: 100%;

    display: table-row;
  }

  .main-content {
    font-size: calc(10px + 5vmin);

    width: 70%;
    padding-left: 10%;

    vertical-align: middle;

    .left {
      text-align: left;
    }

    .right {
      text-align: right;
    }

    .under {
      text-decoration: underline;
    }

    display: table-cell;
  }

  .picture-content {
    margin: auto;
    width: 30%;
    padding-left: 30px;

    vertical-align: middle;

    display: table-cell;

    img {
      max-width: 500px;
      border-radius: 25%;
    }
  }

  .footer-content {
    margin: auto;
    padding: 10px;
    max-width: 700px;
  }

  .highlight {
    font-weight: bold;
    color: #ffffff;
    background: #14274e;
    padding: 0px 1px 2px 1px;
  }
`;
