import FilterDropdown from "../components/FilterDropdown";
import Candidates from "../components/Candidates";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

const Home = () => {
  const [initialData, setInitialData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);

  const onSearch = (searchTerm) => {
    setData(
      data.filter((item) =>
        item.CandidateName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const resetSearch = () => {
    setData(initialData);
  };

  const filteredData =
    selectedOption && selectedOption !== "all"
      ? data.filter((item) => item.LocationName === selectedOption)
      : data;

  useEffect(() => {
    axios
      .get("http://localhost:5000/candidates", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setInitialData(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-w-[1300px] flex flex-col">
      <div className="flex px-48 md:flex-row flex-col md:justify-between items-center p-6">
        <SearchBar onSearch={onSearch} resetSearch={resetSearch} />
        <FilterDropdown
          data={data}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className="w-full flex justify-center">
        <Candidates data={filteredData} />
      </div>
    </div>
  );
};
export default Home;
