import SearchBar from '../components/SearchBar';
import Results from '../components/Results';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-primary text-header font-semibold text-secondary">CompSearch</h1>
      <text className="font-primary text-secondary mt-2">Streamline company research when appling for job.</text>
      <div className="mt-10 w-md">
        <SearchBar/>
        <Results />
      </div>
    </div>
  )
}

export default Home;