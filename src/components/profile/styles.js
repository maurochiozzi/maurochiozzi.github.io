import styled from "styled-components";

const PictureFrame = styled.img`
  width: 200px;

  border-radius: 50%;
  background: white;

  display: block;

  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export default PictureFrame;
