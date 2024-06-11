import React from "react";
import { Link } from "react-router-dom";

const AmazingDestination = ({ img, title }) => {
  return (
    <div className="relative flex flex-col justify-center h-auto w-full">
      <img
        src={img}
        alt="/"
        className="object-cover w-full h-[624px] rounded-3xl"
      />
      <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
        <h4 className="font-bold text-3xl pb-6">{title}</h4>
        <Link
          to="/page"
          className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
        >
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default AmazingDestination;
