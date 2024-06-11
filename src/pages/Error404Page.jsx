import background from "../images/ryan-lum-1ak3Z7ZmtQA-unsplash.jpg";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      <img
        src={background}
        alt="error 404 page"
        className="object-cover w-full h-full bg-center"
      />
      <div className="absolute top-0 left-0  w-full h-full text-white">
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-2 bg-black/40">
          <p className="text-transform: uppercase">Error 404</p>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Something{" "}
            <span className="italic font-medium font-bodoni">went</span> wrong
          </h1>
          <div className="flex flex-col md:flex-row py-4 gap-4">
            <Link to="/" className="bg-black rounded-full px-6 py-4 text-white">
              Back To Homepage
            </Link>

            <Link
              to="/destinations"
              className="bg-white rounded-full px-6 py-4 text-black hover:bg-[#ccc]"
            >
              Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
