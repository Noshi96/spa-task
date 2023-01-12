import useHandleFetchErrors from 'hooks/useHandleFetchErrors';
import { useGetProductsQuery } from 'services/products-api';
import CircularProgress from '@mui/material/CircularProgress';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';

const ProductsPageView = () => {
  const { data, error, isLoading, isError } = useGetProductsQuery('');
  const { message, statusCode } = useHandleFetchErrors(
    error as FetchBaseQueryError,
  );

  if (isLoading) {
    return <CircularProgress aria-describedby='Load data' aria-busy={true} />;
  }

  if (isError) {
    console.log(error);
    return <ErrorFetchStatusToast message={message} statusCode={statusCode} />;
  }

  const products = data?.data;

  return (
    <div>
      {products?.length !== 0
        ? products?.map(product => {
            return <p>{product.name}</p>;
          })
        : null}
    </div>
  );
};

export default ProductsPageView;
