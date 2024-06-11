import React from "react";

const PopularDestination = ({ img, title, subtitle }) => {
  return (
    <div className="relative flex flex-col justify-between h-auto w-full">
      {/* div added around the image tag so the hover scale effect can keep the image within constraits and for the effect to work */}
      <div className="overflow-hidden inline-block rounded-xl">
        <img
          src={img}
          alt="/"
          className="h-[520px] w-full object-cover bg-center rounded-2xl hover:scale-110 duration-500 transition-transform"
        />
      </div>
      {/* bg-black/20 class can be added/removed if the text isn't readable enough */}
      <div className="absolute top-0 left-0 right text-white w-full h-full flex flex-col justify-end items-start rounded-2xl p-4 hover:scale-90 duration-500 transition-transform">
        <p className="text-transform: uppercase">Popular Destination</p>
        <h2 className="text-3xl font-bold pb-1">
          {title}{" "}
          <span className="italic font-bodoni font-medium text-white">
            {subtitle}
          </span>{" "}
          Here
        </h2>
        <div className="py-2">
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, iusto voluptatibus.
          </p>
          <button className="p-4 border rounded-full border-white hover:bg-white hover:text-black w-1/3">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;

// Solution with black hover effect

{
  /* <div className=" text-white overflow-hidden inline-block ">
<div className="absolute top-0 left-0 right bg-black/40 w-full h-full flex flex-col justify-end items-start rounded-2xl p-4 hover:scale-90 duration-500 transition-transform">
  <p className="text-transform: uppercase">Popular Destination</p>
  <h2 className="text-3xl font-bold pb-1">
    {title}{" "}
    <span className="italic font-bodoni font-medium text-white">
      {subtitle}
    </span>{" "}
    Here
  </h2>
  <div className="py-2">
    <p className="pb-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dignissimos, iusto voluptatibus.
    </p>
    <button className="p-4 border rounded-full border-white hover:bg-white hover:text-black w-1/3">
      Discover
    </button>
  </div>
</div>
</div> */
}
