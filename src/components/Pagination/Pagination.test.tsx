import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './Pagination';

describe('Pagination component', () => {
  const mockPaginationClickHandler = jest.fn();

  it('should have a "previous page" button', () => {
    render(
      <BrowserRouter>
        <Pagination paginationClickHandler={mockPaginationClickHandler} />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText('previous page')).toBeInTheDocument();
  });

  it('should have a "next page" button', () => {
    render(
      <BrowserRouter>
        <Pagination paginationClickHandler={mockPaginationClickHandler} />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText('next page')).toBeInTheDocument();
  });
});
