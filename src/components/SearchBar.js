import React, { useState } from "react";

function NameSearchBar({ onSearch, resetSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex gap-0 items-center">
      <div className="relative">
        <input
          id="search-box"
          type="text"
          placeholder="Zakaria Kiassi"
          className="flex justify-end px-3 py-2 rounded-l-lg text-black font-medium shadow-lg placeholder:font-normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute right-2 top-2"
          onClick={() => {
            resetSearch();
            setSearchTerm("");
          }}
        >
          <svg
            width="24px"
            height="24px"
            fill="none"
            stroke="gray"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <button
        className="bg-ultra-marine-blue px-4 rounded-r-lg py-2 text-white shadow-lg"
        type="button"
        onClick={() => onSearch(searchTerm)}
      >
        Search
      </button>
    </div>
  );
}

export default NameSearchBar;
