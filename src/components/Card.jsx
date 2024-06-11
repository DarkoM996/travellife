import React, { useState } from "react";

const Card = ({ img }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="relative overflow-hidden h-[420px] min-w-[600px] bg-slate-200 rounded-2xl flex justify-center items-center">
      {showOverlay && (
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div className="absolute  pointer-events-none h-full w-full" />
          <h1 className="bg-white font-bold text-lg z-10 px-4 py-2 rounded-full flex items-center hover:opacity-5">
            <span>Explore now</span>
          </h1>
        </div>
      )}
      <img src={img} alt={img} className="w-full h-[420px] object-cover" />
    </div>
  );
};

export default Card;
