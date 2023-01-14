import { useSearchParams } from 'react-router-dom';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = searchParams.get('per_page');
  const page = searchParams.get('page');

  return (
    <>
      <h1>Filter Page</h1>
      <h1>perPage is {perPage} </h1>
      <h1>page is {page} </h1>
      <button onClick={() => setSearchParams({ per_page: '2', page: '2' })}>
        Set params
      </button>
      <input
        type='text'
        onChange={e => setSearchParams({ page: e.target.value })}
      />
    </>
  );
};

export default Pagination;
