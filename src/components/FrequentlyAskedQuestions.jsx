import React from "react";
import destination from "../images/vienna.jpg";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-full px-6 py-4 md:py-8 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {/* Image On the left */}
        <div className="w-full h-fit py-8">
          <img
            src={destination}
            alt="beautiful vienna"
            className="object-cover w-full h-full bg-center rounded-2xl"
          />
        </div>
        {/* Dropdown on the right */}
        <div className="flex flex-col w-full h-full justify-center">
          <h2 className="text-4xl font-bold pb-8">
            {" "}
            <span className="italic font-bodoni font-medium">
              Frequently
            </span>{" "}
            Asked Questions
          </h2>
          <FrequentlyAskedQuestion />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
