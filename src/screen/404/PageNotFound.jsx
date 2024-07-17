import React from "react";
import { IoIosWarning } from "react-icons/io";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center justify-center gap-5">
      <div className="flex justify-center items-center gap-2">
        <IoIosWarning className="text-7xl fill-yellow-400" />
        <h1 className="text-6xl font-bold">Oops!</h1>
      </div>
      <div className="text-center">
        <p>
          The page are looking for doesn't exist or an other error occurend.
        </p>
        <p>Go back, or choose a home page.</p>
      </div>

      <NavLink
        to={"/"}
        className={
          "w-[250px] h-14 flex justify-center items-center text-xl bg-blue-600 hover:bg-blue-700 rounded-md text-white shadow-lg"
        }
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
