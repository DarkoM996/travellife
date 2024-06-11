import AmazingDestination from "./AmazingDestination";
import destination from "../images/amsterdam.jpg";
import destination2 from "../images/barcelona.jpg";
import destination3 from "../images/copenhagen.jpg";
import destination4 from "../images/paris.jpg";
import destination5 from "../images/rome.jpg";
import destination6 from "../images/vienna.jpg";
import destinations7 from "../images/venice.jpg";
import destinations8 from "../images/helsinki.jpg";
import destinations9 from "../images/chris-czermak-7ybKmhDTcz0-unsplash.jpg";
import destination10 from "../images/prague.jpg";
import destination11 from "../images/nice.jpg";
import destination12 from "../images/lisbon.jpg";

const AmazingDestinations = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl md:text-5xl font-bold py-12 text-center">
        Our <span className="italic font-medium font-bodoni">Amazing</span>{" "}
        Destinations
      </h2>
      {/* Grid elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <AmazingDestination img={destination} title="Amsterdam" />
        <AmazingDestination img={destination2} title="Barcelona" />
        <AmazingDestination img={destination3} title="Copenhagen" />
        <AmazingDestination img={destination4} title="Paris" />
        <AmazingDestination img={destination5} title="Rome" />
        <AmazingDestination img={destination6} title="Vienna" />
        <AmazingDestination img={destinations7} title="Venice" />
        <AmazingDestination img={destinations8} title="Helsinki" />
        <AmazingDestination img={destinations9} title="Vatican" />
        <AmazingDestination img={destination10} title="Prague" />
        <AmazingDestination img={destination11} title="Nice" />
        <AmazingDestination img={destination12} title="Lisbon" />
      </div>
    </div>
  );
};

export default AmazingDestinations;
