import Select from "./Select";
import SearchInput from "./SearchInput";

const Search = () => {
  return (
    <form className="sm:flex sm:justify-center">
      <Select />
      <SearchInput />
    </form>
  );
};

export default Search;
