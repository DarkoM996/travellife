import image from "../images/prague.jpg";
import image2 from "../images/prague2.jpg";
import image3 from "../images/prague3.jpg";

const PragueSection = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4 md:py-8 lg:py-24">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-x-6">
        {/* Image or Images */}
        <div className="relative w-full">
          <img
            src={image2}
            alt="/"
            className="object-cover w-full h-[600px] rounded-2xl"
          />
        </div>
        {/* Text Container */}
        <div className="p-4 grid place-content-center gap-2">
          <p className="text-transform: uppercase">The Initial Start</p>
          <h2 className="text-4xl md:text-5xl font-bold pb-6">
            {" "}
            <span className="italic font-medium font-bodoni">Our</span>{" "}
            Beginning
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-wrap">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              ipsum eligendi, corrupti rem doloremque placeat ab beatae pariatur
              consectetur tempora quo incidunt voluptate iste accusamus
              similique voluptates esse facilis odit.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus id commodi asperiores sed quis consectetur
              repudiandae totam aliquid ducimus obcaecati optio ut magnam unde
              quam incidunt ullam sapiente, nulla tenetur!
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-x-6 md:py-8 lg:py-24">
        {/* Text Container */}
        <div className="p-4 grid place-content-center gap-2">
          <p className="text-transform: uppercase">Passion Led Us Here</p>
          <h2 className="text-4xl md:text-5xl font-bold pb-6">
            Strong{" "}
            <span className="italic font-medium font-bodoni">Support</span>
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Also The Traveler has a commited and experienced Custom Support
              that helps with all the technicality and unexpected problems that
              may arise during a stay in a hotel, problem with a flight etc.{" "}
            </p>
            <p>
              Additionally The Traveler offers a good guide on our site about
              what to do in a certain city if you truly want to experience a
              certain city in an unique way.
            </p>
          </div>
        </div>
        {/* Image or Images */}
        <div className="relative w-full pr-6">
          <img
            src={image3}
            alt="/"
            className="object-cover w-full h-[600px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PragueSection;
