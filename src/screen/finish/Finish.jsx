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
        Kembali
      </NavLink>
      {/* <NavLink
        to={"#"}
        className={
          "h-12 bg-slate-900 hover:bg-slate-950 text-white rounded-md w-[70%] flex justify-center items-center absolute bottom-6 mb-14 z-10"
        }
        role="button"
      >
        Biodata
      </NavLink> */}
      <div className="bg-base-finish"></div>
    </div>
  );
};

export default Finish;
