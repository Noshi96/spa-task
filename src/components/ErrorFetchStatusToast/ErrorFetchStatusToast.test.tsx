import { render, screen } from '@testing-library/react';
import { ErrorFetchStatusModel } from 'models/ErrorFetchStatusModel';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';
import { BrowserRouter } from 'react-router-dom';

const mockData: ErrorFetchStatusModel = {
  statusCode: 404,
  message: 'Data is not available',
};

describe('ErrorFetchStatusToast component', () => {
  it('renders error message toast with status code and message', () => {
    render(
      <BrowserRouter>
        <ErrorFetchStatusToast
          statusCode={mockData.statusCode}
          message={mockData.message}
        />
        ,
      </BrowserRouter>,
    );
    const paragraphElement = screen.getByText(
      /Status code: 404 - Data is not available/i,
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});
