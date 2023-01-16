import AdditionalRowInformationModal from 'components/AdditionalRowInformationModal';
import { ProductRowElement, ProductTdField } from 'components/ProductRow/style';
import useModal from 'hooks/useModal';
import { ProductModel } from 'models/ProductModel';
import { TableConfigModel } from 'models/TableConfigModel';

interface Props {
  tableConfig: TableConfigModel;
  product: ProductModel;
}

const ProductRow = ({ product, tableConfig }: Props) => {
  const { color } = product;
  const { columns } = tableConfig;
  const { isOpen, toggle } = useModal();
  return (
    <>
      <ProductRowElement onClick={toggle} background={color}>
        {columns.map(column => {
          return (
            <ProductTdField key={`${column.columnName}-td`}>
              {product[column.columnName as keyof ProductModel]}
            </ProductTdField>
          );
        })}
      </ProductRowElement>
      <AdditionalRowInformationModal
        product={product}
        handleOpenModal={isOpen}
        handleCloseModal={toggle}
      />
    </>
  );
};

export default ProductRow;
