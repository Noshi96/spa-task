import { RowColorModel } from 'models/RowColorModel'
import styled from 'styled-components'

export const ProductRowElement = styled.tr<RowColorModel>`
  background: ${({ color }) => color};
`
export const ProductTdField = styled.td``
