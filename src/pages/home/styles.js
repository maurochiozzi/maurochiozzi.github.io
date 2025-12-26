import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;

  font-size: 18px;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .content-table {
    width: 100%;
    display: table;
    text-align: center;
  }

  .content-row {
    display: table-row;
  }

  .main-content {
    font-size: calc(10px + 5vmin);

    width: 70%;
    padding-left: 4%;
    padding-right: 4%;

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
    width: 30%;
    padding: 5px;

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

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    background: ${({ theme }) => theme.palette.primary.main};
    padding: 0px 1px 2px 1px;

    text-decoration: none;
  }
`;
