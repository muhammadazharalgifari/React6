import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import db from "../../firebase";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const ListAll = () => {
  const [allBiodata, setAllBiodata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // mengambil data dari collection "biodata" yang ada di firebase
  async function getAllBiodata() {
    let result = [];

    const collRef = collection(db, "biodata");

    const allData = await getDocs(collRef);
    allData.forEach((e) => {
      result.push(e.data());
    });
    console.info(result);

    return result;
  }

  useEffect(() => {
    getAllBiodata().then((res) => {
      setAllBiodata((prev) => (prev = res));
    });
  }, []);

  const filteredBiodata = allBiodata.filter((biodata) =>
    biodata.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-6 gap-4">
      <NavLink
        to={"/"}
        className={
          "w-10 h-10 flex justify-center items-center absolute text-2xl"
        }
      >
        <IoIosArrowBack />
      </NavLink>
      <NavLink
        to={"#"}
        className={
          "w-10 h-10 flex justify-center items-center absolute text-2xl right-3"
        }
      >
        <RxHamburgerMenu />
      </NavLink>

      <div className="text-center">
        <h1 className="font-thin text-3xl select-none uppercase">List</h1>
        <h1 className="font-bold text-4xl  select-none uppercase">Biodata</h1>

        {/* start Search input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-md my-6"
        />
        {/* end Search input */}

        {/* start card biodata */}
        <div className="flex w-full flex-col gap-4">
          {filteredBiodata.map((e) => (
            <div
              key={e.email}
              className="w-full flex flex-col gap-2 border border-gray-400 p-4 rounded-md shadow-md font-thin"
            >
              <p>Fullname : {e.fullname} </p>
              <p>Email : {e.email} </p>
              <details>
                <summary className="font-semibold my-2">Details</summary>
                <div className="flex gap-2 flex-col text-center">
                  <p>Address : {e.address} </p>
                  <p>Date of Birth : {e.dob} </p>
                  <p>Place of Birth : {e.pob} </p>
                  <p>Phone Number : {e.phone} </p>
                </div>
              </details>
            </div>
          ))}
        </div>
        {/* end card biodata */}
      </div>
    </div>
  );
};

export default ListAll;
