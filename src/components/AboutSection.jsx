import image from "../images/mathew-schwartz-s87bBFZviAU-unsplash.jpg";
import image2 from "../images/vienna.jpg";

const AboutSection = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4 md:py-8 lg:py-24">
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-x-6">
        {/* Image or Images */}
        <div className="relative w-full">
          <img
            src={image}
            alt="/"
            className="object-cover w-full h-full rounded-2xl"
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
            <p className="text-wrap text-base">
              Founded in 2010, The Traveler is a medium sized agency based in
              London that aims to give its users unforgettable travelling
              experiences and allow them to experience the best destinations in
              Europe.{" "}
            </p>
            <p className="text-base">
              Whether you like to experience the party and tremendous night
              life, the fantastic architecture and history or everything in
              between, The Traveler gives you all the best choices possible for
              that
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
            <p className="text-base">
              Also The Traveler has a commited and experienced Custom Support
              that helps with all the technicality and unexpected problems that
              may arise during a stay in a hotel, problem with a flight etc.{" "}
            </p>
            <p className="text-base ">
              Additionally The Traveler offers a good guide on our site about
              what to do in a certain city if you truly want to experience a
              certain city in an unique way.
            </p>
          </div>
        </div>
        {/* Image or Images */}
        <div className="relative w-full pr-6">
          <img
            src={image2}
            alt="/"
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
