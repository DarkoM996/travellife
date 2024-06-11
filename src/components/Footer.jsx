import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdFax, MdHouse, MdLocalPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="max-w-screen-3xl mx-auto px-6 py-4 h-full bg-black text-white">
      <div className="flex justify-between items-center lg:justify-between border-b-2 border-[#1b1b1b] p-6">
        <div className="mr-12 hidden lg:block">
          <span className="text-xl">Find us on social media</span>
        </div>
        {/* Social media icons container!! */}
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl mr-2">
            <FaInstagram />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaFacebook />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaYoutube />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaTwitter />
          </a>
          <a href="/" className="text-2xl mr-2">
            <FaPinterest />
          </a>
        </div>
      </div>
      {/* Grid elements.. the div on top of the grid is for spacing mostly */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-24 ">
          <div className="">
            <h4 className="text-3xl font-bold pb-4">
              Travel{" "}
              <span className="italic font-bodoni font-medium">Life</span>
            </h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              cupiditate nobis consequuntur quasi autem deleniti voluptatem
              corrupti cum possimus officiis molestiae, quos molestias, in
              tempora, quod expedita. Officiis, eius quas?
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-bold md:justify-start">
              Destinations
            </h4>
            <p className="mb-4">
              <a href="/" className="text-[#bebab2]">
                Barcelona
              </a>
            </p>
            <p className="mb-4">
              <a href="/" className="text-[#bebab2] ">
                Amsterdam
              </a>
            </p>
            <p className="mb-4">
              <a className="text-[#bebab2] ">Rome</a>
            </p>
            <p>
              <a href="/" className="text-[#bebab2] ">
                Paris
              </a>
            </p>
          </div>
          {/* <!-- Useful Links --> */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-bold md:justify-start">
              Useful Links
            </h4>
            <p className="mb-4">
              <a href="/" className="text-[#bebab2]">
                Destinations
              </a>
            </p>
            <p className="mb-4">
              <a href="/" className="text-[#bebab2]">
                About
              </a>
            </p>
            <p className="mb-4">
              <a href="/" className="text-[#bebab2]">
                Contact
              </a>
            </p>
            <p>
              <a href="/" className="text-[#bebab2]">
                Instagram
              </a>
            </p>
          </div>
          {/* Links for part of a page */}
          <div className="">
            <h4 className="mb-4 text-3xl flex justify-center font-bold  md:justify-start">
              Informations
            </h4>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdHouse className="text-2xl mr-1" />
              <a className="text-[#bebab2]">London, UK</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdMail className="text-2xl mr-1" />
              <a className="text-[#bebab2]">travellife@contact.com</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdLocalPhone className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 88</a>
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdFax className="text-2xl mr-1" />
              <a className="text-[#bebab2]">+ 01 234 567 89</a>
            </p>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div className="p-6 text-center text-[#ccc]">
        <span>© 2024 Copyright:</span>
        <a href="/" className="text-[#eee] ml-1">
          Sneaker <span className="italic font-bodoni font-medium">Life</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
