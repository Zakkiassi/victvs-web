import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Candidate = () => {
  const [data, setData] = useState([]);
  const { CandidateName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/data/${CandidateName}`, {
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
    <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex w-full gap-5 justify-center ">
      <div className="flex flex-col gap-6 p-6 border mt-14" key={data.id}>
        <p className="text-xl">{data.CandidateName}</p>
        <p>{data.LocationName}</p>
        <p>{data.Date}</p>
      </div>
    </div>
  );
};

export default Candidate;
