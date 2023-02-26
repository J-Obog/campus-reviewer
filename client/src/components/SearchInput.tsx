

const SearchInput = () => {
  return (
    <>
      <div className="form-control sm:ml-3 md:inline-block">
        <div className="input-group w-full">
          <label htmlFor="search" className="w-full sm:w-96 lg:w-139">
            <input type="text" id="search" name="search" placeholder="Type college name..." className="input-bordered input w-full rounded-r-none" />
          </label>
          <button type="submit" className="btn-square btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
