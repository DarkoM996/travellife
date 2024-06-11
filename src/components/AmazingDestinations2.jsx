import React from "react";
import { NavLink } from "react-router-dom";
import destination from "../images/prague.jpg";
import destination2 from "../images/vienna.jpg";
import destination3 from "../images/venice.jpg";
import destination4 from "../images/helsinki.jpg";
import destination5 from "../images/lisbon.jpg";
import destination6 from "../images/moscow.jpg";
import destination7 from "../images/nice.jpg";
import destination8 from "../images/madrid.jpg";

const AmazingDestinations2 = () => {
  return (
    // General styles of the section
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4 md:py-8 lg:py-16">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold py-12 text-center">
        Our <span className="italic font-medium font-bodoni">Amazing</span>{" "}
        Destinations
      </h2>
      {/* Grid Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Grid Element #1 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Prague</h4>
            <NavLink
              to="/prague"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination2}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Vienna</h4>
            <NavLink
              to="/vienna"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #3 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination3}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Venice</h4>
            <NavLink
              to="/venice"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination4}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Helsinki</h4>
            <NavLink
              to="/helsinki"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination5}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Lisbon</h4>
            <NavLink
              to="/lisbon"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination6}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Moscow</h4>
            <NavLink
              to="/prague"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination7}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Nice</h4>
            <NavLink
              to="/nice"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
        {/* Grid Element #2 */}
        <div className="relative flex flex-col justify-center h-auto w-full">
          <img
            src={destination8}
            alt="/"
            className="object-cover w-full h-[624px] rounded-3xl"
          />
          <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-3xl text-white">
            <h4 className="font-bold text-3xl pb-6">Madrid</h4>
            <NavLink
              to="/madrid"
              className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black"
            >
              Click Here
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingDestinations2;
