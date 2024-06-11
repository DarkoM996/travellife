import React from "react";
import PopularDestination from "./PopularDestination";
import paris from "../images/paris.jpg";
import barcelona from "../images/barcelona.jpg";
import rome from "../images/rome.jpg";
import amsterdam from "../images/amsterdam.jpg";

const MostPopularDestinations = () => {
  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl py-12 font-bold text-center ">
        Most <span className="font-bodoni italic font-medium">Popular</span>{" "}
        Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        <PopularDestination
          img={paris}
          title="Barcelona"
          subtitle="Phenomenal"
        />
        <PopularDestination img={barcelona} title="Paris" subtitle="Amazing" />
        <PopularDestination img={rome} title="Rome" subtitle="Eternal" />
        <PopularDestination
          img={amsterdam}
          title="Amsterdam"
          subtitle="Phenomenal"
        />
      </div>
    </div>
  );
};

export default MostPopularDestinations;
