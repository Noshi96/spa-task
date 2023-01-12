import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { ErrorFetchStatusModel } from 'models/ErrorFetchStatusModel';

const useHandleFetchErrors = (
  error: FetchBaseQueryError,
): ErrorFetchStatusModel => {
  if (!error) {
    return { message: '', statusCode: '' };
  }

  if ('originalStatus' in error) {
    const errorMessage =
      'error' in error ? error.error : JSON.stringify(error['data']);
    return {
      message: errorMessage,
      statusCode: error?.originalStatus,
    } as ErrorFetchStatusModel;
  }

  if (!('status' in error)) {
    return { message: '', statusCode: '' };
  }

  if (error.status === 404) {
    const errorMessage = 'Data is not available';
    return {
      message: errorMessage,
      statusCode: error?.status,
    } as ErrorFetchStatusModel;
  }

  if (error.status === 500) {
    const errorMessage = 'Internal server error';
    return {
      message: errorMessage,
      statusCode: error?.status,
    } as ErrorFetchStatusModel;
  }

  const errorMessage =
    'error' in error ? error.error : JSON.stringify(error.data);
  return {
    message: errorMessage,
    statusCode: error?.status,
  } as ErrorFetchStatusModel;
};

export default useHandleFetchErrors;
