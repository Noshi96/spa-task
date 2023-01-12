import { ProductDataModel } from 'models/ProductDataModel';
import { ProductRowElement, ProductTdField } from 'components/ProductRow/style';

const ProductRow = ({ product }: ProductDataModel) => {
  const { id, name, year, color } = product;
  return (
    <ProductRowElement background={color}>
      <ProductTdField>{id}</ProductTdField>
      <ProductTdField>{name}</ProductTdField>
      <ProductTdField>{year}</ProductTdField>
    </ProductRowElement>
  );
};

export default ProductRow;
