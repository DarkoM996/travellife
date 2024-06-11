import React from "react";
import image from "../images/prague4.jpg";

const WhyPrague = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4 md:py-8 lg:py-16 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center py-12">
        Why You Should
        <span className="italic font-medium font-bodoni"> Visit</span> Prague
      </h2>
      {/* Grid Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
        {/* Grid elements for values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
          {/* Grid element */}
          <div>
            <h4 className="text-3xl font-bold pb-4">
              <span className="italic font-medium font-bodoni">
                Unforgettable{" "}
              </span>{" "}
              experiences
            </h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              obcaecati debitis saepe eligendi asperiores vitae repellat eveniet
              suscipit doloremque ullam quos exercitationem eius ea fugit, nihil
              commodi eos voluptatibus qui!
            </p>
          </div>
          {/* Grid element */}
          <div>
            <h4 className="text-3xl font-bold pb-4">
              Tremendous{" "}
              <span className="italic font-medium font-bodoni">Community</span>{" "}
            </h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              obcaecati debitis saepe eligendi asperiores vitae repellat eveniet
              suscipit doloremque ullam quos exercitationem eius ea fugit, nihil
              commodi eos voluptatibus qui!
            </p>
          </div>
          {/* Grid element */}
          <div>
            <h4 className="text-3xl font-bold pb-4">
              Fairness and{" "}
              <span className="italic font-medium font-bodoni">
                Transparency
              </span>
            </h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              obcaecati debitis saepe eligendi asperiores vitae repellat eveniet
              suscipit doloremque ullam quos exercitationem eius ea fugit, nihil
              commodi eos voluptatibus qui!
            </p>
          </div>
          {/* Grid element */}
          <div>
            <h4 className="text-3xl font-bold pb-4">Strong Company Vision</h4>
            <p className="text-base text-[#eeee]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              obcaecati debitis saepe eligendi asperiores vitae repellat eveniet
              suscipit doloremque ullam quos exercitationem eius ea fugit, nihil
              commodi eos voluptatibus qui!
            </p>
          </div>
        </div>
        {/* Image on the right */}
        <div className="relative w-full">
          <img
            src={image}
            alt="/"
            className="w-full h-[600px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyPrague;
