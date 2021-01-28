import styled from "styled-components";

export const CardBox = styled.div`
  margin: 10px;

  width: 300px;
  min-width: 300px;
  height: 400px;

  text-align: left;

  border-radius: 2px;
  border-style: solid;
  border-color: #b3b3b3b3;
  border-width: thin;

  box-shadow: 1px 1px 1px 1px #b3b3b3;

  .title {
    height: 40px;
    padding: 5px;
    margin: 0px;
  }

  .picture {
    height: 200px;

    img {
      width: 100%;
    }
  }

  .caption {
    height: 100px;
    padding: 5px;
    text-align: left;
    font-size: 16px;

    margin-bottom: 0px;
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
  max-width: 800px;

  max-height: 80%;

  overflow: auto;

  background-color: #ffffff;
  border-radius: 2;

  border-style: solid;
  border-color: #b3b3b3b3;
  border-width: thin;

  box-shadow: 1px 1px 1px 1px #b3b3b3;

  .close-button {
    float: right;
    padding: 17px 10px 0 0;
  }

  .title {
    height: 40px;
    padding: 5px;
    text-align: left;
  }

  .text-body {
    text-align: justify;
    margin: 10px;
  }

  .carousel {
    .slide {
      img {
        height: 500px;
        min-width: 300px;
        width: auto;
      }
      background-color: white;
    }

    .legend {
      background-color: #14274e;
      font: inherit;
    }

    .control-prev::before {
      border-right: 8px solid #14274e;
    }

    .control-next::before {
      border-left: 8px solid #14274e;
    }

    .dot {
      background: #14274e;
    }
  }

  .button {
    height: 23px;
    float: right;

    margin-right: 15px;
    margin-bottom: 20px;

    border-radius: 4px;

    padding: 1px 5px 2px 5px;
    background-color: #14274e;
    color: #ffffff;

    cursor: pointer;
  }

  a {
    height: 23px;

    text-decoration: none;
    color: inherit;

    border-radius: 4px;

    padding: 1px 5px 2px 5px;
    background-color: #14274e;
    color: #ffffff;
  }
`;
