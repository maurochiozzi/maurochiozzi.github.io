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
  padding: 24px;
  .modal-image-container {
    width: 100%;
    height: 300px;
    margin-bottom: 24px;
    position: relative;
    ${({ theme }) => theme.breakpoints.up("md")} {
      height: 450px;
    }
    background: #000;
    border-radius: 24px;
    overflow: hidden;

    /* Fallback image */
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }

    /* Carousel Styles */
    .carousel-root {
      height: 100%;
    }
    .carousel {
      height: 100%;
      .slider-wrapper {
        height: 100%;
        ul.slider {
          height: 100%;
        }
      }
    }
    .carousel .slide {
      background: transparent;
      height: 100%;

      & > div {
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
        vertical-align: top;
      }

      .legend {
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        border-radius: 12px;
        bottom: 20px;
        font-size: 14px;
        opacity: 1;
      }
    }
  }

  /* Additional styles for modal text content are handled via MUI Box sx props for simplicity */
`;
