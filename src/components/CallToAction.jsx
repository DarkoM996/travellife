import React from "react";
import background from "../images/nice.jpg";

const CallToAction = () => {
  return (
    // Something seems off about this form. At this moment its the best I can do. Look ways to deal with this shit.
    <div className="relative">
      {/* image div */}
      <div>
        <img
          src={background}
          alt="/"
          className="object-cover w-full h-[800px]"
        />
      </div>
      {/* Frosted Glass Form */}
      <div className="max-w-screen-2xl mx-auto h-screen absolute top-0 left-0 right-0 px-6 py-4 md:py-8 lg:py-16">
        <form
          action="#"
          className="max-w-[720px] p-8 mx-auto h-2/3 flex flex-col justify-center items-stretch bg-white/0 backdrop-blur-xl gap-4 rounded-2xl border border-black/5"
        >
          <div className="flex flex-col justify-center items-center">
            <p className="text-transform: uppercase">Join us</p>
            <h2 className="text-4xl font-bold py-2 text-center">
              Get{" "}
              <span className="italic font-bodoni font-medium">
                inspiration
              </span>{" "}
              in <br />
              your inbox
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center w-full">
            <input
              className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
              type="email"
              placeholder="E.g adamsmith93@gmail.com"
              name="email"
            />
            <button className="p-4 bg-black text-white rounded-full hover:bg-[#141313cc]">
              Let's Colaborate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
