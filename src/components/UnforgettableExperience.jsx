import image from "../images/praguecastle.jpg";
import { MdOutlineArrowDownward } from "react-icons/md";

const UnforgettableExperience = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      {/* Image Container */}
      <img src={image} alt="/" className="w-full h-full object-cover" />
      {/* Text Container */}
      <div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-full gap-4  bg-black/40">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="text-transform: uppercase text-white">Join Us</p>
          <h1 className="text-white text-center text-4xl  md:text-6xl leading-custom-height  font-bold pb-4">
            Enjoy Prague{" "}
            <span className="italic font-bodoni font-medium">In Style</span>{" "}
            <br />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UnforgettableExperience;
