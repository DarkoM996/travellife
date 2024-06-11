import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // How to write a function to have an active navlink in React with react router v6
  const linkClass = ({ isActive }) =>
    isActive
      ? " bg-white text-black p-2 hover:bg-neutral-200 hover:text-black rounded-full"
      : " text-white  p-2 hover:bg-neutral-100 hover:text-black rounded-full";

  return (
    <nav className=" border-b border-[#161616cc]">
      <div className="max-w-screen-3xl mx-auto flex justify-between items-center h-20 p-8 bg-black text-white">
        {/* Logo */}
        <h3 className="font-bold text-3xl">
          Travel <span className="italic font-bodoni font-medium">Life</span>
        </h3>
        {/* Menu Items */}
        <ul className="hidden md:flex justify-center items-center gap-2">
          <NavLink to="/" className={linkClass}>
            <li className="">Home</li>
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <li>About</li>
          </NavLink>
          <NavLink to="/destinations" className={linkClass}>
            <li>Destinations</li>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <li>Contact</li>
          </NavLink>
        </ul>
        {/* Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden text-2xl z-50">
          {!nav ? <IoMdMenu /> : <FaTimes />}
        </div>
        {/* Menu Dropdown */}
        <ul
          // Write the onclick function here so your menu works properly and when you click on a route taking you somewhere, it works correctly smh.
          // Fixed size on navigation links per design requirements.
          onClick={handleClick}
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/40 backdrop-blur-2xl z-40"
          }
        >
          <NavLink
            to="/"
            className="text-5xl leading-custom-height font-bold py-6"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-5xl leading-custom-height font-bold py-6"
          >
            About
          </NavLink>
          <NavLink
            to="/destinations"
            className="text-5xl leading-custom-height font-bold py-6"
          >
            Destinations
          </NavLink>
          <NavLink
            to="/contact"
            className="text-5xl leading-custom-height font-bold py-6"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
