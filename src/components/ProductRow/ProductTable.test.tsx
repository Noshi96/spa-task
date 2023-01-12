import { render, screen } from '@testing-library/react'
import ProductRow from 'components/ProductRow'
import { ProductModel } from 'models/ProductModel'

const mockData: ProductModel = {
  id: 7,
  name: 'sand dollar',
  year: 2006,
  color: '#DECDBE',
  pantone_value: '13-1106',
}
test('renders learn react link', () => {
  render(<ProductRow product={mockData}></ProductRow>)
  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
