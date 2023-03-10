import { useState } from "react";

import { RxMagnifyingGlass } from "react-icons/rx";

const Search = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (evt) => {
    const query = evt.target.value;
    setSearchValue(query)
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleSearch(searchValue);
    }
  };

  return (
    <div className="menu-search icons-name">
      <input
        type="text"
        placeholder="Search games..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={searchValue}
      />
      <h3 className="menu-search-icon" onClick={() => handleSearch(searchValue)}>
        <RxMagnifyingGlass />
      </h3>
    </div>
  );
};

export default Search;
