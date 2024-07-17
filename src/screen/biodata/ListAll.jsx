import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import db from "../../firebase";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";

const ListAll = () => {
  const navigate = useNavigate();
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

  // handle remove sesuai email
  async function removeDocument(email) {
    let docref = doc(db, `biodata/${email}`);
    let removeDoc = deleteDoc(docref);
    return removeDoc;
  }

  // handle remove list biodata
  function handleRemoveList(email) {
    const conf = window.confirm(`Anda Yakin Ingin Menghapus Data ${email} ?`);
    if (!conf) return;

    removeDocument(email).then((res) => {
      window.location.reload();
      console.log("Data Sudah Terhapus");
    });
  }

  // handle update list
  function handleUpdate(data) {
    const { fullname, address, dob, pob, email, phone } = data;
    navigate(
      `/biodata/update?fullname=${fullname}&address=${address}&dob=${dob}&pob=${pob}&email=${email}&phone=${phone}`
    );
  }

  useEffect(() => {
    getAllBiodata().then((res) => {
      setAllBiodata((prev) => (prev = res));
    });
  }, []);

  // fitur filter
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
                <summary className="font-semibold mb-2">Details</summary>
                <div className="flex gap-2 flex-col text-center">
                  <p>Address : {e.address} </p>
                  <p>Date of Birth : {e.dob} </p>
                  <p>Place of Birth : {e.pob} </p>
                  <p>Phone Number : {e.phone} </p>
                </div>
              </details>
              <div className={"flex justify-end gap-4 text-2xl"}>
                {/* icon untuk mengupdate data */}
                <button
                  onClick={() => {
                    handleUpdate(e);
                  }}
                >
                  <MdEditNote />
                </button>
                {/* icon untuk mengupdate data */}

                {/* icon untuk menghapus data */}
                <button
                  onClick={() => {
                    handleRemoveList(e.email);
                  }}
                >
                  <RiDeleteBinLine />
                </button>
                {/* icon untuk menghapus data */}
              </div>
            </div>
          ))}
        </div>
        {/* end card biodata */}

        {/* button untuk selesai */}
        <NavLink
          to={"/finish"}
          className={
            "h-12 w-full my-4 bg-blue-600 hover:bg-blue-700 flex items-center justify-center font-thin rounded-md shadow-lg text-white"
          }
          role="button"
        >
          Done
        </NavLink>
        {/* button untuk selesai */}
      </div>
    </div>
  );
};

export default ListAll;
