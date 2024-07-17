import React from "react";
import { NavLink } from "react-router-dom";

const Finish = () => {
  return (
    <div className="finish-home">
      <div className="text-center z-10">
        <h1 className="font-thin text-4xl select-none uppercase">thankyou</h1>
        <h1 className="font-bold text-5xl select-none uppercase">
          for join us
        </h1>
      </div>
      <NavLink to={"/"} className={"btn-finish-back"} role="button">
        Back To Home
      </NavLink>
      <div className="bg-base-finish"></div>
    </div>
  );
};

export default Finish;
