import useHandleFetchErrors from 'hooks/useHandleFetchErrors';
import { useGetProductsQuery } from 'services/products-api';
import CircularProgress from '@mui/material/CircularProgress';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';
import ProductTable from 'components/ProductTable';
import { tableConfig } from 'config/table-config';
import { PageContainer } from 'pages/ProductsPageView/style';
import { ProductModel } from 'models/ProductModel';
import { useState } from 'react';
import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';
import Pagination from 'components/Pagination';
import useGetSearchParamsForConfig from 'hooks/useGetSearchParamsForConfig';
import SearchBar from 'components/SearchBar';

const ProductsPageView = () => {
  const queryConfig = useGetSearchParamsForConfig();

  const [startQueryConfig, setStartQueryConfig] =
    useState<FetchQueryConfigModel>(queryConfig);

  const { data, error, isLoading, isError } =
    useGetProductsQuery(startQueryConfig);

  const { message, statusCode } = useHandleFetchErrors(
    error as FetchBaseQueryError,
  );

  if (isLoading) {
    return <CircularProgress aria-describedby='Load data' aria-busy={true} />;
  }

  if (isError) {
    return <ErrorFetchStatusToast message={message} statusCode={statusCode} />;
  }

  const products = data?.data.length
    ? data?.data
    : [data?.data as unknown as ProductModel];

  if (!products[0]?.id) {
    return (
      <ErrorFetchStatusToast message={'No data to display'} statusCode={''} />
    );
  }

  return (
    <PageContainer>
      <SearchBar handleSearchQuery={setStartQueryConfig} />
      <ProductTable products={products} tableConfig={tableConfig} />
      <Pagination paginationClickHandler={setStartQueryConfig}></Pagination>
    </PageContainer>
  );
};

export default ProductsPageView;
