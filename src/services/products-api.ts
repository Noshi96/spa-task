import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchedProductsDataModel, FetchQueryConfigModel } from 'models';
import { queryURL } from 'utils/generate-query-url';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_PUBLIC_PRODUCTS_API_URL?.toString(),
  }),
  endpoints: build => ({
    getProducts: build.query<FetchedProductsDataModel, FetchQueryConfigModel>({
      query: ({ perPage, page, id }) => {
        const url = queryURL({ perPage, page, id });
        return {
          url: url,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = api;
