import React from "react";
import { Link } from "react-router-dom";

const AllData = ({ data }) => {
  return (
    <div className="rounded-xl shadow-2xl px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {data.map((d) => (
          <div key={d.id} className=" flex flex-col gap-6 p-6 border">
            <div className="flex flex-col gap-4 pl-2 pr-10 pt-2">
              <div className="flex gap-2 items-center">
                <svg
                  width="24px"
                  height="24px"
                  fill="none"
                  stroke="#800080"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <h3 className="font-bold">{d.CandidateName}</h3>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  fill="none"
                  width="24px"
                  height="24px"
                  stroke="#800080"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  ></path>
                </svg>
                <p className="font-semibold">{d.LocationName}</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  fill="none"
                  width="24px"
                  height="24px"
                  stroke="#800080"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="text-sm">{d.Date}</p>
              </div>
            </div>
            <Link
              to={`/${d.title}`}
              className="bg-ultra-marine-blue px-3 py-1 w-full text-center text-white font-semibold text-sm hover:bg-primary"
            >
              View full details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllData;
