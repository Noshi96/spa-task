import { RowColorModel } from 'models/RowColorModel';
import styled from 'styled-components';

export const ProductRowElement = styled.tr<RowColorModel>`
  background: ${({ background }) => background};
  color: #ffffff;
  cursor: pointer;
`;
export const ProductTdField = styled.td``;
