import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchedProductsDataModel } from 'models/FetchedProductsDataModel';
import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';
import { apiUrl } from 'utils/apiUrl';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl.toString() }),
  endpoints: build => ({
    getProducts: build.query<FetchedProductsDataModel, FetchQueryConfigModel>({
      query: ({ perPage, page, id }) => {
        console.log({ perPage, page, id });
        const url = id
          ? `products?id=${id}`
          : perPage && page
          ? `products?per_page=${perPage}&page=${page}`
          : 'products/404';
        console.log({ perPage, page, id, url });
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
