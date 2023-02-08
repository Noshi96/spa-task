import { RowColorModel } from 'models';
import styled from 'styled-components';

export const ModalContainer = styled.div<RowColorModel>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  z-index: 1;
`;

export const ProductParagraph = styled.p`
  text-transform: capitalize;
  color: #000000;
  font-size: 1.5rem;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`;
