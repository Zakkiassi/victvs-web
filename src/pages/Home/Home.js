import Dropdown from "../../components/Dropdown/Dropdown";
import AllData from "../../components/AllData/AllData";
import NameSearchBar from "../../components/NameSearchBar/NameSearchBar";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const filteredData =
    selectedOption && selectedOption !== "all"
      ? data.filter((item) => item.LocationName === selectedOption)
      : data;
  useEffect(() => {
    axios
      .get("http://localhost:5000/data", {
        params: {
          // fromDate: '2022-01-01',
          // candidate: 'John Doe',
          // location: 'New York'
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="flex max-w-full justify-end gap-10 items-end p-6">
        <NameSearchBar />
        <Dropdown
          data={data}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      </div>
      <div className="max-w-[2000px] flex justify-center">
        <AllData data={filteredData} />
      </div>
    </div>
  );
};
export default Home;
