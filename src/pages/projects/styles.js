import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  .title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 16px;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .caption {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 48px;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.text.secondary};
    line-height: 1.6;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
`;

export const ModalContent = styled.div`
  .modal-image-container {
    width: 100%;
    height: 300px;
    position: relative;
    background: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }
  }

  /* Additional styles for modal text content are handled via MUI Box sx props for simplicity */
`;
