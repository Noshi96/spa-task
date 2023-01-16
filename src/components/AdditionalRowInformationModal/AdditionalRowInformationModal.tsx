import { ProductModel } from 'models/ProductModel';
import {
  CloseButtonContainer,
  ModalContainer,
  ProductParagraph,
} from 'components/AdditionalRowInformationModal/style';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { createPortal } from 'react-dom';

interface Props {
  product: ProductModel;
  handleOpenModal: boolean;
  handleCloseModal: () => void;
}
const AdditionalRowInformationModal = ({
  product,
  handleOpenModal,
  handleCloseModal,
}: Props) => {
  console.log(product);
  const { color } = product;
  return handleOpenModal
    ? createPortal(
        <ModalContainer background={color}>
          <CloseButtonContainer>
            <IconButton
              size='large'
              aria-label='close row modal'
              onClick={handleCloseModal}
            >
              <CloseIcon sx={{ fontSize: '40px', color: '#000000' }} />
            </IconButton>
          </CloseButtonContainer>
          {Object.entries(product).map(([key, value]) => {
            return (
              <ProductParagraph>{`${key.replace(
                '_',
                ' ',
              )}: ${value}`}</ProductParagraph>
            );
          })}
        </ModalContainer>,
        document.body,
      )
    : null;
};

export default AdditionalRowInformationModal;
