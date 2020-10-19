import styled from "styled-components";

export const CardBox = styled.div`
  margin: 10px;

  width: 300px;
  min-width: 300px;
  height: 400px;

  text-align: left;

  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #14274e;

  .title {
    height: 40px;
    padding: 5px 0px 5px 15px;
    margin: 0px;
  }

  .picture {
    height: 200px;

    img {
      width: 100%;
    }
  }

  .caption {
    height: 80px;
    padding-left: 15px;

    margin-top: 5px;
    margin-bottom: 5px;
  }

  .button {
    height: 23px;
    float: right;

    margin-right: 15px;
    margin-bottom: 0px;

    border-radius: 4px;

    padding: 1px 5px 2px 5px;
    background-color: #14274e;
    color: #ffffff;

    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1;

  top: 100px;

  width: 80%;
  min-width: 300px;

  height: 80%;

  overflow: auto;

  background-color: #ffffff;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #14274e;

  .close-button {
    float: right;
    padding: 20px;
  }

  .title {
    height: 40px;
    padding: 10px 10px 0px 25px;
    text-align: left;
  }

  .button {
    height: 23px;
    float: right;

    margin-right: 15px;
    margin-bottom: 0px;

    border-radius: 4px;

    padding: 1px 5px 2px 5px;
    background-color: #14274e;
    color: #ffffff;

    cursor: pointer;
  }
`;
