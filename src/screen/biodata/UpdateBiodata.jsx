import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import db from "../../firebase";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const UpdateBiodata = () => {
  const navigate = useNavigate();

  // mengambil query dari parameter
  const [query] = useSearchParams();
  const email = query.get("email");
  const fullname = query.get("fullname");
  const address = query.get("address");
  const dob = query.get("dob");
  const pob = query.get("pob");
  const phone = query.get("phone");

  async function handleSubmit(e) {
    // stop form untuk merefresh page
    e.preventDefault();

    // tangkap value dari input element
    const fullname = e.target.fullname.value;
    const dob = e.target.dob.value;
    const pob = e.target.pob.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    // tampilkan di console
    console.info(`
      Fullname : ${fullname}
      Date of Birth : ${dob}
      Place of Birth : ${pob}
      Address : ${address}
      Email : ${email}
      Phone Number : ${phone}`);

    const conf = window.confirm(`
      Fullname        : ${fullname}
      Date of Birth   : ${dob}
      Place of Birth  : ${pob}
      Address         : ${address}
      Email           : ${email}
      Phone Number    : ${phone}`);

    if (!conf) return;

    storeBiodata({
      fullname,
      dob,
      pob,
      address,
      email,
      phone,
    }).then((res) => console.info("data berhasil di update"));
    navigate("/list");

    // try {
    //   await storeBiodata({
    //     fullname,
    //     dob,
    //     pob,
    //     address,
    //     email,
    //     phone,
    //   });
    //   console.info("Data berhasil di update");
    //   navigate("/list");
    // } catch (error) {
    //   console.error("Error", error);
    // }
  }

  async function storeBiodata(data) {
    const docref = doc(db, "/biodata/", data.email);
    const store = await updateDoc(docref, data);
    return store;
  }

  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-6 gap-4">
      {/* start judul */}
      <div className="text-center">
        <h1 className="text-3xl font-thin uppercase select-none">Update</h1>
        <h1 className="text-4xl font-bold uppercase select-none">Biodata</h1>
      </div>
      {/* end judul */}

      {/* FORMULIR UPDATE BIODATA */}
      {/* start form */}
      <form className="w-full flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center gap-2">
          <FiUser className="text-2xl" />
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={fullname}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <SlCalender className="text-2xl" />
          <input
            type="date"
            id="dob"
            name="dob"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={dob}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <AiOutlineHome className="text-2xl" />
          <input
            type="text"
            id="pob"
            name="pob"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={pob}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <MdPlace className="text-2xl" />
          <input
            type="text"
            id="address"
            name="address"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={address}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <MdOutlineMailOutline className="text-2xl" />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={email}
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <FiPhone className="text-2xl" />
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            defaultValue={phone}
            required
          />
        </div>

        {/* button untuk confirm */}
        <button
          type="submit"
          className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg"
        >
          Confirm
        </button>
        {/* button untuk confirm */}
      </form>
      {/* end form */}
    </div>
  );
};

export default UpdateBiodata;
