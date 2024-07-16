import React from "react";
import { useSearchParams } from "react-router-dom";

const UpdateBiodata = () => {
  // mengambil query dari parameter
  const [query] = useSearchParams();
  const mail = query.get("email");
  const fullname = query.get("fullname");
  const address = query.get("address");
  const dob = query.get("dob");
  const pob = query.get("pob");
  const phone = query.get("phone");
  
  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-6 gap-4">
      {/* start judul */}
      <div className="text-center">
        <h1 className="text-3xl font-thin uppercase select-none">Update</h1>
        <h1 className="text-4xl font-bold uppercase select-none">Biodata</h1>
      </div>
      {/* end judul */}

      {/* FORMULIR ISI BIODATA */}
      {/* start form */}
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="pob">Place of Birth</label>
          <input
            type="text"
            id="pob"
            name="pob"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full h-12 rounded-md p-4 border border-black"
            required
          />
        </div>
        <button
          type="submit"
          className="h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-lg"
        >
          Confirm
        </button>
        <NavLink
          to={"/"}
          className={
            "h-12 bg-black text-white flex justify-center items-center rounded-md shadow-lg"
          }
          role="button"
        >
          Back to Home
        </NavLink>
      </form>
      {/* end form */}
    </div>
  );
};

export default UpdateBiodata;
