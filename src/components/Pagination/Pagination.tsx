import { useSearchParams } from 'react-router-dom';
import { ButtonContainer } from 'components/Pagination/style';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import { Dispatch, SetStateAction } from 'react';
import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';

type Props = {
  paginationClickHandler: Dispatch<SetStateAction<FetchQueryConfigModel>>;
};

const Pagination = ({ paginationClickHandler }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('per_page') || '5';

  const decrementPage = () => {
    if (Number(page) < 2) {
      return;
    }

    paginationClickHandler(prev => ({
      perPage: prev.perPage,
      page: prev.page ? prev.page - 1 : 1,
    }));

    setSearchParams({ page: `${Number(page) - 1}`, per_page: perPage });
  };

  const incrementPage = () => {
    if (Number(page) >= Math.ceil(12 / Number(perPage))) {
      return;
    }

    paginationClickHandler(prev => ({
      perPage: prev.perPage,
      page: prev.page ? prev.page + 1 : 1,
    }));

    setSearchParams({ page: `${Number(page) + 1}`, per_page: perPage });
  };

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
