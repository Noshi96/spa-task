import { RowColorModel } from 'models/RowColorModel';
import styled from 'styled-components';

export const ProductRowElement = styled.tr<RowColorModel>`
  background: ${({ background }) => background};
  color: #ffffff;
  font-weight: 700;
  text-shadow: 0px 1px #000000;
  cursor: pointer;
`;
export const ProductTdField = styled.td``;
