import React from "react";
import db from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";

const BiodataPage = () => {
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
    console.info(fullname, dob, pob, address, email, phone);

    const conf = window.confirm(`
        Fullname : ${fullname},
        Date of Birth : ${dob},
        Place of Birth : ${pob},
        Address : ${address},
        Email : ${email},
        Phone : ${phone} `);

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

export default BiodataPage;
