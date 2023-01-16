import useHandleFetchErrors from 'hooks/useHandleFetchErrors';
import { useGetProductsQuery } from 'services/products-api';
import CircularProgress from '@mui/material/CircularProgress';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import ErrorFetchStatusToast from 'components/ErrorFetchStatusToast';
import ProductTable from 'components/ProductTable';
import { tableConfig } from 'config/table-config';
import { PageContainer } from 'pages/ProductsPageView/style';
import { ProductModel } from 'models/ProductModel';
import { useMemo, useState } from 'react';
import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';
import Pagination from 'components/Pagination';
import useGetSearchParamsForConfig from 'hooks/useGetSearchParamsForConfig';
import SearchBar from 'components/SearchBar';

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

  const { message, statusCode } = useHandleFetchErrors(
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
      <Pagination paginationClickHandler={setQueryConfig}></Pagination>
    </PageContainer>
  );
};

export default ProductsPageView;
