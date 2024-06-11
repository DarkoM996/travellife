import React from "react";
import image from "../images/caleb-miller-0Bs3et8FYyg-unsplash.jpg";
import { MdOutlineArrowDownward } from "react-icons/md";
import { motion } from "framer-motion";

const DestinationsHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      <img src={image} alt="image" className="object-cover w-full h-full" />
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 w-full h-full gap-4  bg-black/40"
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="text-transform: uppercase text-white"
          >
            Join Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.6, duration: 0.6, ease: "easeOut" },
            }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            Discover Europe's{" "}
            <span className="italic font-medium font-bodoni">Finest</span>{" "}
            Destinations
          </motion.h1>
        </div>
        {/* Swipe Down Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
          }}
          className="flex justify-center items-center gap-2 bg-white hover:bg-[#eeec] text-black px-6 py-4 border rounded-full"
        >
          <button>Swipe Down</button>
          <MdOutlineArrowDownward />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DestinationsHero;

// Working H1

{
  /* <h1 className="text-4xl md:text-6xl font-bold">
Discover Europe's{" "}
<span className="italic font-medium font-bodoni">Finest</span>{" "}
Destinations
</h1> */
}
