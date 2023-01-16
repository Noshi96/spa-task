import { render, screen } from '@testing-library/react';
import ProductTable from 'components/ProductTable';
import { ProductModel } from 'models/ProductModel';
import { TableConfigModel } from 'models/TableConfigModel';

const mockProductData: ProductModel = {
  id: 7,
  name: 'sand dollar',
  year: 2006,
  color: '#DECDBE',
  pantone_value: '13-1106',
};

const mockProductsData = [mockProductData];
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
};

describe('ProductTable component', () => {
  it('renders the header row correctly', () => {
    render(
      <ProductTable
        products={mockProductsData}
        tableConfig={mockTableConfig}
      />,
    );
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('year')).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    render(
      <ProductTable
        products={mockProductsData}
        tableConfig={mockTableConfig}
      />,
    );
    expect(screen.getAllByRole('row').length).toBe(mockProductsData.length + 1);
  });
});
