import React from "react";

const Select = () => {
  return (
    <>
      <label htmlFor="sort"></label>
      <select id="sort" name="sort" defaultValue={"default"} className="select-bordered select mb-3 w-full max-w-3xl sm:inline-block sm:w-48">
        <option value="default" disabled>
          Sort by
        </option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
        <option value="state">State</option>
        <option value="city">City</option>
      </select>
    </>
  );
};

export default Select;
