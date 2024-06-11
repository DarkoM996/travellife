import React from "react";
import video from "../images/video2.mp4";
import { MdOutlineArrowDownward } from "react-icons/md";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

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
              transition: { delay: 0.4, duration: 0.4, ease: easeInOut },
            }}
            className="text-transform: uppercase text-white"
          >
            The Motto
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.6, duration: 0.6, ease: easeInOut },
            }}
            className="text-white text-center text-4xl  md:text-6xl font-bold pb-4"
          >
            Traveling Is{" "}
            <span className="italic font-bodoni font-medium">Good</span> For The
            <br />
            Soul
          </motion.h1>
        </div>
        {/* Swipe Down Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.8, ease: easeInOut },
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

export default AboutHero;
