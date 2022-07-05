import React, { useState } from "react";
import Create from "../Components/Create";
import Navbar from "../Components/Navbar";

const create = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Create />
      </div>
    </>
  );
};

export default create;
