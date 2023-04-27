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
    <div className="candidate">
      <div key={data.id}>
        <p>{data.CandidateName}</p>
        <p>{data.LocationName}</p>
        <p>{data.Date}</p>
      </div>
    </div>
  );
};

export default Candidate;
