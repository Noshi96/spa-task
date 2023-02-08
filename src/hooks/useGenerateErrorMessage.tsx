import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { ErrorMessageModel } from 'models';

const useGenerateErrorMessage = (
  error: FetchBaseQueryError,
): ErrorMessageModel => {
  if (!error) {
    return { message: '', statusCode: '' };
  }

  if ('originalStatus' in error) {
    const errorMessage =
      'error' in error ? error.error : JSON.stringify(error['data']);
    return {
      message: errorMessage,
      statusCode: error?.originalStatus,
    } as ErrorMessageModel;
  }

  if (!('status' in error)) {
    return { message: '', statusCode: '' };
  }

  if (error.status === 404) {
    const errorMessage = 'Data is not available';
    return {
      message: errorMessage,
      statusCode: error?.status,
    } as ErrorMessageModel;
  }

  if (error.status === 500) {
    const errorMessage = 'Internal server error';
    return {
      message: errorMessage,
      statusCode: error?.status,
    } as ErrorMessageModel;
  }

  const errorMessage =
    'error' in error ? error.error : JSON.stringify(error.data);
  return {
    message: errorMessage,
    statusCode: error?.status,
  } as ErrorMessageModel;
};

export default useGenerateErrorMessage;
