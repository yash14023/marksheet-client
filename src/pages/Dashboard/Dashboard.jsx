import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-center py-10">
      <Link
        to="/marksheet"
        className="w-full bg-jhc-blue-primary  rounded-md  p-10 cursor-pointer"
      >
        <div className="flex items-center justify-center space-x-4">
          <button className="text-xl text-[#e8e8ff]">View Marksheets</button>
          <FontAwesomeIcon icon={faFile} className="text-[#9194ff] text-3xl" />
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
