import { Search } from 'lucide-react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
  
}

const SearchBar = ({ search, setSearch, handleSearch}: SearchBarProps) => {

  return (
    <div className="flex">
      <div className="relative w-full text-white">
        <Search className="absolute left-4 top-4"/>
        <input 
          type="text" 
          className="w-full input rounded-full bg-secondary p-4 pl-12"
          placeholder="Search for a company..."  
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute right-4 top-3 rounded-full px-3 py-1" onClick={handleSearch}>Submit</button>
      </div>
    </div>
  )
}

export default SearchBar