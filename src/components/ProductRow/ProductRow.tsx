import AdditionalRowInformationModal from 'components/AdditionalRowInformationModal';
import { ProductRowElement } from 'components/ProductRow/style';
import { useModal } from 'hooks';
import { ProductModel, TableConfigModel } from 'models';

interface IProductRowProps {
  tableConfig: TableConfigModel;
  product: ProductModel;
}

const ProductRow = ({ product, tableConfig }: IProductRowProps) => {
  const { color } = product;
  const { columns } = tableConfig;
  const { isOpen, toggle } = useModal();
  return (
    <>
      <ProductRowElement onClick={toggle} background={color}>
        {columns.map(column => {
          return (
            <td key={`${column.columnName}-td`}>
              {product[column.columnName as keyof ProductModel]}
            </td>
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
