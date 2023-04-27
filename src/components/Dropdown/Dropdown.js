import React, { useState } from "react";

const Dropdown = ({ data, selectedOption, setSelectedOption }) => {
  const cities = data.map((item) => item.LocationName);
  const options = [...new Set(cities)];

  return (
    <div className="flex flex-col">
      <label htmlFor="dropdown" className="font-medium">
        Select a city:
      </label>
      <select
        className="shadow-lg rounded-lg px-3 py-2"
        id="dropdown"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="all" className="">
          Choose an option
        </option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
