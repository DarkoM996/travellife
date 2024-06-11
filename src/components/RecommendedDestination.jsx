import { Link } from "react-router-dom";

const RecommendedDestination = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full ">
      <img
        src={img}
        alt="/"
        className="w-full h-[624px] rounded-2xl object-cover bg-center"
      />

      <div className="absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-full bg-black/40 rounded-2xl">
        <h4 className="text-3xl pb-6 text-white font-bold">{title}</h4>
        <Link to="/page">
          <button className="px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedDestination;
