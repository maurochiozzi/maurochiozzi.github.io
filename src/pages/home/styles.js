import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0;

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
    display: table-row;
  }

  .main-content {
    font-size: calc(10px + 5vmin);
    width: 60%;
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
    width: 40%;
    padding-right: 30px;

    display: table-cell;

    img {
      max-width: 500px;
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
