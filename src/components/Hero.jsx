import React from "react";
import hero from "../images/hero.jpg";
import { MdOutlineArrowDownward } from "react-icons/md";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

const Hero = () => {
  return (
    // Here's an idea on how to implement the original design: add black overlay on the background image in PS, import said picture here. Then, remove the absolute class on the text container and make it the same with relative class. And afterwards, you can try to make the glass like navbar effect.
    <div className="max-w-screen-3xl mx-auto relative h-screen ">
      <div className="h-full">
        <img
          src={hero}
          alt="/"
          className="object-cover bg-center w-[1920px] h-full"
        />
      </div>
      {/* Text Container */}
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
            Join Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.6, duration: 0.6, ease: easeOut },
            }}
            className="text-white text-center text-4xl  md:text-6xl leading-custom-height  font-bold pb-4"
          >
            Experience Europe{" "}
            <span className="italic font-bodoni font-medium">In Style</span>{" "}
            <br />
            With Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.8, duration: 0.8, ease: easeIn },
            }}
            className="flex flex-col md:flex-row justify-center items-center gap-4 w-2/3 md:w-[60%]"
          >
            <button className="p-4 bg-black hover:bg-[#161616] text-white rounded-full w-full">
              Get Started
            </button>
            <button className="p-4 bg-white text-black rounded-full w-full hover:bg-[#ebebeb] flex flex-row justify-center items-center">
              Scroll Down
              <MdOutlineArrowDownward className="text-xl ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

// Working
