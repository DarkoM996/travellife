import React from "react";
import RecommendedDestination from "./RecommendedDestination";
import destination from "../images/prague.jpg";
import destination2 from "../images/vienna.jpg";
import destination3 from "../images/venice.jpg";
import destination4 from "../images/helsinki.jpg";
import destination5 from "../images/lisbon.jpg";
import destination6 from "../images/moscow.jpg";
import destination7 from "../images/nice.jpg";
import destination8 from "../images/madrid.jpg";

const RecommendedDestinations = () => {
  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl font-bold py-12 text-center">
        Our <span className="italic font-medium font-bodoni">Recommended</span>{" "}
        Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <RecommendedDestination img={destination} title="Prague" />
        <RecommendedDestination img={destination2} title="Vienna" />
        <RecommendedDestination img={destination3} title="Venice" />
        <RecommendedDestination img={destination4} title="Helsinki" />
        <RecommendedDestination img={destination5} title="Lisbon" />
        <RecommendedDestination img={destination6} title="Moscow" />
        <RecommendedDestination img={destination7} title="Nice" />
        <RecommendedDestination img={destination8} title="Madrid" />
      </div>
    </div>
  );
};

export default RecommendedDestinations;
