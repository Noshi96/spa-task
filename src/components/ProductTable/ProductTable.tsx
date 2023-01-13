import ProductRow from 'components/ProductRow';
import { ProductTableContainer } from 'components/ProductTable/style';
import { ProductModel } from 'models/ProductModel';
import { TableConfigModel } from 'models/TableConfigModel';

interface Props {
  products: ProductModel[] | undefined;
  tableConfig: TableConfigModel;
}

const ProductTable = ({ products, tableConfig }: Props) => {
  const { columns } = tableConfig;
  return (
    <ProductTableContainer>
      <thead>
        {columns.map(column => {
          return <th>{column.columnName}</th>;
        })}
      </thead>
      <tbody>
        {products?.map(product => {
          return <ProductRow tableConfig={tableConfig} product={product} />;
        })}
      </tbody>
    </ProductTableContainer>
  );
};

export default ProductTable;
