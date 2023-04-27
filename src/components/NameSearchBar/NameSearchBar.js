import React, { useState } from "react";

function NameSearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <div className="flex gap-0 items-center">
      <input
        id="search-box"
        type="text"
        placeholder="Zakaria Kiassi"
        className="px-3 py-2 rounded-l-lg text-black font-medium shadow-lg placeholder:font-normal "
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="bg-ultra-marine-blue px-4 rounded-r-lg py-2 text-white shadow-lg"
        type="submit"
      >
        Search
      </button>
    </div>
  );
}

export default NameSearchBar;
