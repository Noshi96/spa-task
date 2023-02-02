import { FetchQueryConfigModel } from 'models';
import { useLocation, useSearchParams } from 'react-router-dom';

const useGetSearchParamsForConfig = (): FetchQueryConfigModel => {
  const [searchParams] = useSearchParams();
  const perPage = searchParams.get('per_page');
  const page = searchParams.get('page');
  const id = searchParams.get('id');
  const location = useLocation();
  let validPage = 1,
    validPerPage = 5;

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
