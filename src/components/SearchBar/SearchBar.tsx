import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Dispatch, SetStateAction } from 'react';
import { FetchQueryConfigModel } from 'models/FetchQueryConfigModel';
import { SearchContainer } from 'components/SearchBar/style';
import { useSearchParams } from 'react-router-dom';

type Props = {
  handleSearchQuery: Dispatch<SetStateAction<FetchQueryConfigModel>>;
};

const SearchBar = ({ handleSearchQuery }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  return (
    <SearchContainer>
      <TextField
        id='search-bar'
        type='number'
        onInput={(e: React.KeyboardEvent<HTMLInputElement>) => {
          const input = e.target as HTMLInputElement;
          if (input.value) {
            handleSearchQuery({ id: +input.value });
            setSearchParams({ id: input.value });
          }
        }}
        label='Enter id'
        variant='outlined'
        placeholder='Search...'
        size='small'
      />
      <SearchIcon style={{ fill: 'blue' }} />
    </SearchContainer>
  );
};

export default SearchBar;
