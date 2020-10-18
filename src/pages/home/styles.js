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
    display: table-row;
  }

  .main-content {
    width: 70%;
    padding: 20px;
    vertical-align: middle;
    display: table-cell;
  }

  .picture-content {
    width: 30%;
    padding: 20px;
    vertical-align: middle;
    display: table-cell;
  }
`;
