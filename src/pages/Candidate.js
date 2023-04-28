import CandidateCard from "../components/CandidateCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Candidate = () => {
  const [data, setData] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/candidates/${title}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [title]);

  return (
    <div>
      <CandidateCard data={data} />
    </div>
  );
};

export default Candidate;
