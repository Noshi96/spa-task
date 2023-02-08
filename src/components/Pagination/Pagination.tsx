import { useSearchParams } from 'react-router-dom';
import { ButtonContainer } from 'components/Pagination/style';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { FetchQueryConfigModel } from 'models';
import {
  MAX_PRODUCTS_PER_PAGE,
  MIN_AVAILABLE_PAGE_NUMBER,
} from 'constants/page-params-boundaries';

type IPaginationProps = {
  paginationClickHandler: Dispatch<SetStateAction<FetchQueryConfigModel>>;
};

const Pagination = ({ paginationClickHandler }: IPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || `${MIN_AVAILABLE_PAGE_NUMBER}`;
  const perPage = searchParams.get('per_page') || `${MAX_PRODUCTS_PER_PAGE}`;

  const decrementPage = useCallback(() => {
    if (Number(page) < 2) {
      return;
    }

    paginationClickHandler(prev => ({
      perPage: prev.perPage ? prev.perPage : MAX_PRODUCTS_PER_PAGE,
      page:
        prev.page && prev.page > MIN_AVAILABLE_PAGE_NUMBER
          ? prev.page - 1
          : MIN_AVAILABLE_PAGE_NUMBER,
    }));

    setSearchParams({ page: `${Number(page) - 1}`, per_page: perPage });
  }, [page, perPage, paginationClickHandler, setSearchParams]);

  const incrementPage = useCallback(() => {
    if (Number(page) >= Math.ceil(12 / Number(perPage))) {
      return;
    }

    paginationClickHandler(prev => ({
      perPage: prev.perPage ? prev.perPage : MAX_PRODUCTS_PER_PAGE,
      page: prev.page ? prev.page + 1 : MIN_AVAILABLE_PAGE_NUMBER,
    }));

    setSearchParams({ page: `${Number(page) + 1}`, per_page: perPage });
  }, [page, perPage, paginationClickHandler, setSearchParams]);

  return (
    <ButtonContainer>
      <IconButton
        size='large'
        aria-label='previous page'
        onClick={decrementPage}
      >
        <ArrowCircleLeftIcon sx={{ fontSize: '40px', color: '#1976d2' }} />
      </IconButton>
      <p>{page}</p>
      <IconButton size='large' aria-label='next page' onClick={incrementPage}>
        <ArrowCircleRightIcon sx={{ fontSize: '40px', color: '#1976d2' }} />
      </IconButton>
    </ButtonContainer>
  );
};

export default Pagination;
