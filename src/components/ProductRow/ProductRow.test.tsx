import { render, screen } from '@testing-library/react';
import ProductRow from 'components/ProductRow';
import { ProductModel } from 'models/ProductModel';
import { TableConfigModel } from 'models/TableConfigModel';

const mockProductData: ProductModel = {
  id: 7,
  name: 'sand dollar',
  year: 2006,
  color: '#DECDBE',
  pantone_value: '13-1106',
};

const mockTableConfig: TableConfigModel = {
  columns: [
    {
      columnName: 'id',
    },
    {
      columnName: 'name',
    },
    {
      columnName: 'year',
    },
  ],
  itemsPerPage: 5,
};

describe('ProductRow component', () => {
  it('renders the correct data for each column', () => {
    render(
      <table>
        <tbody>
          <ProductRow product={mockProductData} tableConfig={mockTableConfig} />
        </tbody>
      </table>,
    );

    const cells = screen.getAllByRole('cell');
    expect(cells[0]).toHaveTextContent(mockProductData.id.toString());
    expect(cells[1]).toHaveTextContent(mockProductData.name);
    expect(cells[2]).toHaveTextContent(mockProductData.year.toString());

    expect(screen.getByText(mockProductData.name)).toBeInTheDocument();
  });
});
