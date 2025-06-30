import { useState } from 'react';
import { useFetchSuggestions } from '../hooks/useFetchSuggestions';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const Home = () => {
  const [search, setSearch] = useState('');
  const { refetch, isFetching, isError, data } = useFetchSuggestions(search);

  const handleSearch = async() => {
    if (!search.trim()) return;
    await refetch();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-primary text-header font-semibold text-secondary">CompSearch</h1>
      <p className="font-primary text-secondary mt-2">Streamline company research when appling for job.</p>
      <div className="mt-10 w-md">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        {isFetching && <p>Searching...</p>}
        {isError && <p>Error loading results.</p>}
        {data && data.length === 0 && <p>No Results Found.</p>}
        {data && data.length > 0 && <Results suggestions={data} />}
      </div>
    </div>
  )
}

export default Home;