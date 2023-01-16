import { renderHook } from '@testing-library/react';
import useHandleFetchErrors from 'hooks/useHandleFetchErrors';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

const mockData404: FetchBaseQueryError = {
  data: {},
  status: 404,
};

const mockData500: FetchBaseQueryError = {
  data: '500 Internal Server Error',
  error:
    'SyntaxError: Unexpected non-whitespace character after JSON at position 4',
  originalStatus: 500,
  status: 'PARSING_ERROR',
};

describe('useHandleFetchErrors', () => {
  it('returns object with message and status code 404', () => {
    const { result } = renderHook(() => useHandleFetchErrors(mockData404));
    expect(result.current.statusCode).toBe(404);
    expect(result.current.message).toBe('Data is not available');
  });

  it('returns object with message and status code 500', () => {
    const { result } = renderHook(() => useHandleFetchErrors(mockData500));
    expect(result.current.statusCode).toBe(500);
    expect(result.current.message).toBe(
      'SyntaxError: Unexpected non-whitespace character after JSON at position 4',
    );
  });
});
