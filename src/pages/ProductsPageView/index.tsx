import useHandleFetchErrors from 'hooks/useHandleFetchErrors';
import { useGetProductsQuery } from 'services/products-api';
import CircularProgress from '@mui/material/CircularProgress';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';
import ProductTable from 'components/ProductTable';
import { tableConfig } from 'config/table-config';
import { PageContainer } from 'pages/ProductsPageView/style';

const ProductsPageView = () => {
  const { data, error, isLoading, isError } = useGetProductsQuery('');
  const { message, statusCode } = useHandleFetchErrors(
    error as FetchBaseQueryError,
  );

  if (isLoading) {
    return <CircularProgress aria-describedby='Load data' aria-busy={true} />;
  }

  if (isError) {
    return <ErrorFetchStatusToast message={message} statusCode={statusCode} />;
  }

  const products = data?.data;

  return (
    <PageContainer>
      <ProductTable products={products} tableConfig={tableConfig} />
    </PageContainer>
  );
};

export default ProductsPageView;
