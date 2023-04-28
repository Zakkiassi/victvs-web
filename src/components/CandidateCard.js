import React from "react";

const CandidateCard = ({ data }) => {
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

export default CandidateCard;
