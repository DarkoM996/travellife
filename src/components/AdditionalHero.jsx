import React from "react";
import { MdOutlineArrowDownward } from "react-icons/md";

const AdditionalHero = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-full gap-4  bg-black/40">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-transform: uppercase text-white">Join Us</p>
        <h1 className="text-white text-center text-4xl  md:text-5xl font-bold pb-4">
          Experience Europe{" "}
          <span className="italic font-bodoni font-medium">In Style</span>{" "}
          <br />
          With Us
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-2/3">
          <button className="p-4 bg-black hover:bg-[#161616] text-white rounded-full w-full">
            Get Started
          </button>
          <button className="p-4 bg-white text-black rounded-full w-full hover:bg-[#ebebeb] flex flex-row justify-center items-center">
            Scroll Down
            <MdOutlineArrowDownward className="text-xl ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalHero;
