import { ProductRowElement, ProductTdField } from 'components/ProductRow/style';
import { ProductModel } from 'models/ProductModel';
import { TableConfigModel } from 'models/TableConfigModel';

interface Props {
  tableConfig: TableConfigModel;
  product: ProductModel;
}

const ProductRow = ({ product, tableConfig }: Props) => {
  const { color } = product;
  const { columns } = tableConfig;
  return (
    <ProductRowElement background={color}>
      {columns.map(column => {
        return (
          <ProductTdField key={`${column.columnName}-td`}>
            {product[column.columnName as keyof ProductModel]}
          </ProductTdField>
        );
      })}
    </ProductRowElement>
  );
};

export default ProductRow;
