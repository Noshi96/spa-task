import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchedProductsDataModel } from 'models/FetchedProductsDataModel';
import { apiUrl } from 'utils/apiUrl';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl.toString() }),
  endpoints: build => ({
    getProducts: build.query<FetchedProductsDataModel, string>({
      query: () => ({
        url: `products`,
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = api;
