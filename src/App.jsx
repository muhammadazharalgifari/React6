import React from "react";
import HomePage from "./screen/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Finish from "./screen/finish/Finish";
import BiodataPage from "./screen/biodata/BiodataPage";
import ListAll from "./screen/biodata/ListAll";
import UpdateBiodata from "./screen/biodata/UpdateBiodata";
import PageNotFound from "./screen/404/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/biodata" element={<BiodataPage />} />
        <Route path="/list" element={<ListAll />} />
        <Route path="biodata/update" element={<UpdateBiodata />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
