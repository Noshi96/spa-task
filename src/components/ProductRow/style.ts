import { RowColorModel } from 'models/RowColorModel';
import styled from 'styled-components';

export const ProductRowElement = styled.tr<RowColorModel>`
  background: ${({ background }) => background};
  color: #ffffff;
`;
export const ProductTdField = styled.td``;
