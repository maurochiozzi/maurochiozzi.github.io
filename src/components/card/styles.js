import styled from "styled-components";

export const Content = styled.div`
  .card-box {
    margin: 10px;

    width: 300px;
    min-width: 300px;
    height: 400px;

    text-align: left;

    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #f08a5d;

    box-shadow: 1px 1px grey;
  }

  .card-details {
  }

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
    background-color: #6a2c70;
    color: #eeecda;

    cursor: pointer;
  }
`;
