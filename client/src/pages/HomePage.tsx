import { useState } from 'react';
import type { FC } from 'react';
import { useCompanyStore } from '../store/companyStore';
import { useFetchCompany } from '../hooks/useFetchCompany';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const Home: FC= () => {
  const [search, setSearch] = useState('');
  const setCompany = useCompanyStore((state) => state.setCompany);
  const { refetch, isFetching, isError, data } = useFetchCompany(search);

  const handleSearch = async() => {
    if (!search.trim()) return;
    const { data } = await refetch();
    if (data) setCompany(data);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-primary text-header font-semibold text-secondary">CompSearch</h1>
      <p className="font-primary text-secondary mt-2">Streamline company research when appling for job.</p>
      <div className="mt-10 w-md">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch}/>
        {isFetching && <p>Searching...</p>}
        {isError && <p>No Results Found.</p>}
        {data && <Results/>}
      </div>
    </div>
  )
}

export default Home;