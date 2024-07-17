import React from "react";
import db from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineHome } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const BiodataPage = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    // stop form untuk merefresh page
    e.preventDefault();

    // tangkap value dari element input (untuk sementara kita tampilin ke console)
    const fullname = e.target.fullname.value;
    const dob = e.target.dob.value;
    const pob = e.target.pob.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    // tampil di console
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
        Phone Number    : ${phone} `);

    if (!conf) return;

    // store data ke firebase
    storeBiodata({
      fullname,
      dob,
      pob,
      address,
      email,
      phone,
    }).then((res) => console.info("data berhasil masuk"));
    navigate("/list");
  }

  // fungsi yang menerima parameter data
  async function storeBiodata(data) {
    // // membuat referensi ke dokumen di dalam koleksi "biodata"
    const docref = doc(db, "/biodata/" + data.email);

    // menyimpan data ke dokumen yang direferensikan,async await (untuk menunggu operasi ini selesai sebelum melanjutkan)
    const store = await setDoc(docref, data);

    return store;

    // try {
    //   // membuat referensi ke dokumen di dalam koleksi "biodata"
    //   const docref = doc(db, "biodata", data.email);
    //   // menyimpan data ke dokumen yang direferensikan,async await (untuk menunggu operasi ini selesai sebelum melanjutkan)
    //   await setDoc(docref, data);
    // } catch (error) {
    //   console.error("Gagal menyimpan data: ", error);
    // }
  }

  return (
    <div className="w-full min-h-[100dvh] flex flex-col p-6 gap-4">
      {/* start judul */}
      <div className="text-center">
        <h1 className="text-3xl font-thin uppercase select-none">
          Application
        </h1>
        <h1 className="text-4xl font-bold uppercase select-none">Biodata</h1>
      </div>
      {/* end judul */}

      {/* FORMULIR ISI BIODATA */}
      {/* start form */}
      <form className="w-full flex flex-col gap-6 mt-4" onSubmit={handleSubmit}>
        <div className="w-full flex justify-center items-center gap-2">
          <FiUser className="text-2xl" />
          <input
            type="text"
            placeholder="Fullname"
            id="fullname"
            name="fullname"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <SlCalender className="text-2xl" />
          <input
            type="date"
            placeholder="Date of Birth"
            id="dob"
            name="dob"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <AiOutlineHome className="text-2xl" />
          <input
            type="text"
            placeholder="Place of Birth"
            id="pob"
            name="pob"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <MdPlace className="text-2xl" />
          <input
            type="text"
            placeholder="Address"
            id="address"
            name="address"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <MdOutlineMailOutline className="text-2xl" />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>
        <div className="w-full flex justify-center items-center gap-2">
          <FiPhone className="text-2xl" />
          <input
            type="tel"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            className="w-full h-12 rounded-md p-4 border border-gray-400 shadow-md"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          {/* button untuk confirm */}
          <button
            type="submit"
            className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md"
          >
            Confirm
          </button>
          {/* button untuk confirm */}

          {/* button untuk kembali ke halaman home */}
          <NavLink
            to={"/"}
            className={
              "h-12 bg-black text-white flex justify-center items-center rounded-md shadow-md"
            }
            role="button"
          >
            Back to Home
          </NavLink>
          {/* button untuk kembali ke halaman home */}
        </div>
      </form>
      {/* end form */}
    </div>
  );
};

export default BiodataPage;
