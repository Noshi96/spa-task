import ProductRow from 'components/ProductRow';
import { ProductTableContainer } from 'components/ProductTable/style';
import { ProductModel, TableConfigModel } from 'models';

interface IProductTableProps {
  products: ProductModel[] | undefined;
  tableConfig: TableConfigModel;
}

const ProductTable = ({ products, tableConfig }: IProductTableProps) => {
  const { columns } = tableConfig;
  return (
    <ProductTableContainer>
      <thead>
        <tr>
          {columns.map(column => {
            return <th key={column.columnName}>{column.columnName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {products?.map(product => {
          return (
            <ProductRow
              tableConfig={tableConfig}
              product={product}
              key={product.id}
            />
          );
        })}
      </tbody>
    </ProductTableContainer>
  );
};

export default ProductTable;
