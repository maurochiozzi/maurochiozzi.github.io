import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0;

  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  display: table;
  text-align: center;

  .content-row {
    text-align: center;

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
    width: 50%;
    padding-right: 30px;

    vertical-align: middle;
    display: table-cell;

    img {
      max-width: 500px;
    }
  }
`;
