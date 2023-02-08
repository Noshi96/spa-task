import { useMemo, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetProductsQuery } from 'services/products-api';
import { tableConfig } from 'config/table-config';
import { FetchQueryConfigModel, ProductModel } from 'models';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';
import ProductTable from 'components/ProductTable';
import Pagination from 'components/Pagination';
import SearchBar from 'components/SearchBar';
import { useGetSearchParamsForConfig, useGenerateErrorMessage } from 'hooks';
import { PageContainer } from './style';

const ProductsPageView = () => {
  const startQueryConfig = useGetSearchParamsForConfig();

  const [queryConfig, setQueryConfig] =
    useState<FetchQueryConfigModel>(startQueryConfig);

  const { data, error, isLoading, isError } = useGetProductsQuery(queryConfig);

  const products = useMemo(
    () =>
      data?.data.length ? data?.data : [data?.data as unknown as ProductModel],
    [data],
  ) as ProductModel[];

  const { message, statusCode } = useGenerateErrorMessage(
    error as FetchBaseQueryError,
  );

  if (isLoading) {
    return <CircularProgress aria-describedby='Load data' aria-busy={true} />;
  }

  if (isError) {
    return <ErrorFetchStatusToast message={message} statusCode={statusCode} />;
  }

  if (!products[0]?.id) {
    return (
      <ErrorFetchStatusToast message={'No data to display'} statusCode={''} />
    );
  }

  return (
    <PageContainer>
      <SearchBar handleSearchQuery={setQueryConfig} />
      <ProductTable products={products} tableConfig={tableConfig} />
      <Pagination paginationClickHandler={setQueryConfig} />
    </PageContainer>
  );
};

export default ProductsPageView;
