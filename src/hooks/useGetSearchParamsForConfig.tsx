import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';
import { useLocation, useSearchParams } from 'react-router-dom';
import { isNumber } from 'utils/isNumber';

const useGetSearchParamsForConfig = (): FetchQueryConfigModel => {
  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('per_page');
  const page = searchParams.get('page');
  const location = useLocation();
  let id = 0,
    validPage = 1,
    validPerPage = 5;

  if (!perPage && !page && location.pathname.includes('/')) {
    if (isNumber(location.pathname.slice(1))) {
      id = Number(location.pathname.slice(1));
    }
  }

  if (location.pathname !== '/') {
    validPage = 0;
    validPerPage = 0;
  }

  return {
    perPage: perPage ? Number(perPage) : validPerPage,
    page: page ? Number(page) : validPage,
    id: id,
  } as FetchQueryConfigModel;
};

export default useGetSearchParamsForConfig;
