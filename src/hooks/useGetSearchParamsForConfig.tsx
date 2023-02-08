import {
  MAX_PRODUCTS_PER_PAGE,
  MIN_AVAILABLE_PAGE_NUMBER,
} from 'constants/page-params-boundaries';
import { FetchQueryConfigModel } from 'models';
import { useLocation, useSearchParams } from 'react-router-dom';

const useGetSearchParamsForConfig = (): FetchQueryConfigModel => {
  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('per_page');
  const page = searchParams.get('page');
  const id = searchParams.get('id');
  const location = useLocation();
  let validPage = MIN_AVAILABLE_PAGE_NUMBER,
    validPerPage = MAX_PRODUCTS_PER_PAGE;

  if (location.pathname !== '/spa-task/' && location.pathname !== '/spa-task') {
    validPage = 0;
    validPerPage = 0;
  }
  return {
    perPage: perPage ? Number(perPage) : validPerPage,
    page: page ? Number(page) : validPage,
    id: Number(id),
  } as FetchQueryConfigModel;
};

export default useGetSearchParamsForConfig;
