import { FetchQueryConfigModel } from 'models';

export const queryURL = ({ perPage, page, id }: FetchQueryConfigModel) => {
  const isPaginationSet = perPage && page;
  const queryOneElement = id;

  if (isPaginationSet) {
    return `products?per_page=${perPage}&page=${page}`;
  }

  if (queryOneElement) {
    return `products?id=${id}`;
  }

  return 'products/404';
};
