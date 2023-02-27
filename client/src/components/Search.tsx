import { useRef } from "react";
import { updateSearch } from "../redux/slices/SearchInputSlice";
import { updateFilter } from "../redux/slices/SelectInputSlice";
import { useAppDispatch } from "../redux/store";

const Search = () => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selectedOption = selectRef.current?.value;
    const newSearch = inputRef.current?.value;

    if (selectedOption) {
      dispatch(updateFilter(selectedOption));
    }

    if (newSearch) {
      dispatch(updateSearch(newSearch));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:flex sm:justify-center">
      <label htmlFor="sort"></label>
      <select ref={selectRef} id="sort" name="sort" defaultValue={"default"} className="select-bordered select mb-3 w-full max-w-3xl sm:inline-block sm:w-48">
        <option value="default" disabled>
          Sort by
        </option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
        <option value="state">State</option>
        <option value="city">City</option>
      </select>
      <div className="form-control sm:ml-3 md:inline-block">
        <div className="input-group w-full">
          <label htmlFor="search" className="w-full sm:w-96 lg:w-139">
            <input ref={inputRef} type="text" id="search" name="search" placeholder="Type college name..." required className="input-bordered input w-full rounded-r-none" />
          </label>
          <button type="submit" className="btn-square btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
