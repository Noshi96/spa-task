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

test('renders single row of table', () => {
  render(
    <ProductRow product={mockProductData} tableConfig={mockTableConfig} />,
  );
  expect(screen.getByText(/sand dollar/i)).toBeInTheDocument();
  expect(screen.getByRole('tr')).toBeInTheDocument();
  expect(screen.getAllByRole('td')[0]).toBe(7);
  expect(screen.getAllByRole('td')[1]).toBe('sand dollar');
  expect(screen.getAllByRole('td')[2]).toBe(2006);
});
