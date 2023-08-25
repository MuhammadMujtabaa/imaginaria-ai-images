// import { Images } from "config/images";

import React from "react";
import { Images } from "../../assets/images";

const { logo, imaginaria } = Images;
const LazyLoaderSpinner = () => {
  return (
    <div
      role="status"
      className="bg-[#FEFDFF] h-screen flex items-center justify-center"
    >
      <div className="flex items-center flex-col gap-5">
        <img
          className="w-52"
          src={imaginaria}
          draggable={false}
          alt="imaginaria"
        />
        <img className="w-28" src={logo} draggable={false} alt="imaginaria" />
        <div className="w-32 h-32 border-4 border-t-[black] border-r-4 border-l-0 border-b-[purple] rounded-full border-double animate-spin shadow"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LazyLoaderSpinner;
