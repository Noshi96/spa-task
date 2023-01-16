import { render, fireEvent, screen } from '@testing-library/react';
import { ProductModel } from 'models/ProductModel';
import AdditionalRowInformationModal from './AdditionalRowInformationModal';

describe('AdditionalRowInformationModal', () => {
  const mockProductData: ProductModel = {
    id: 7,
    name: 'sand dollar',
    year: 2006,
    color: '#DECDBE',
    pantone_value: '13-1106',
  };
  const handleOpenModal = true;
  const handleCloseModal = jest.fn();

  it('should call handleCloseModal when CloseIcon is clicked', () => {
    render(
      <AdditionalRowInformationModal
        product={mockProductData}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />,
    );
    const closeButton = screen.getByLabelText('close row modal');
    fireEvent.click(closeButton);
    expect(handleCloseModal).toHaveBeenCalled();
  });

  it('should render the product details correctly', () => {
    render(
      <AdditionalRowInformationModal
        product={mockProductData}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />,
    );
    expect(
      screen.getByText(
        `${Object.keys(mockProductData)[0].replace('_', ' ')}: ${
          mockProductData.id
        }`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${Object.keys(mockProductData)[1].replace('_', ' ')}: ${
          mockProductData.name
        }`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${Object.keys(mockProductData)[2].replace('_', ' ')}: ${
          mockProductData.year
        }`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${Object.keys(mockProductData)[3].replace('_', ' ')}: ${
          mockProductData.color
        }`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${Object.keys(mockProductData)[4].replace('_', ' ')}: ${
          mockProductData.pantone_value
        }`,
      ),
    ).toBeInTheDocument();
  });
});
