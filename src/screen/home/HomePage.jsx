import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-home">
      <div className="text-center z-10">
        <h1 className="font-thin text-3xl select-none uppercase text-white">
          application
        </h1>
        <h1 className="font-bold text-4xl select-none uppercase">biodata</h1>
      </div>
      <NavLink to={"/list"} className={"btn-list"} role="button">
        List Biodata
      </NavLink>
      <NavLink to={"/biodata"} className={"btn-biodata"} role="button">
        Fill in Biodata
      </NavLink>
      <div className="bg-base"></div>
    </div>
  );
};

export default HomePage;
