import contactimage from "../images/mathew-schwartz-s87bBFZviAU-unsplash.jpg";
import { motion } from "framer-motion";

const ContactPage = () => {
  // Usually this page would have a fragment with components that add parts of the page but there's no need for that because this will be the only part of the page.

  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-screen">
      <img src={contactimage} alt="/" className="w-full h-full object-cover" />

      {/* Frosted Glass Form */}
      <motion.div
        initial="initial"
        animate="animate"
        className="max-w-screen-xl mx-auto w-full h-screen absolute top-0 left-0 right-0 px-8 py-4 md:py-8"
      >
        <form
          action="#"
          className="max-w-screen-xl p-8 mx-auto w-full h-full flex flex-col justify-center items-center bg-white/0 backdrop-blur-2xl gap-6 md:gap-12 rounded-2xl border border-black/20"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
              }}
              className="text-transform: uppercase"
            >
              Contact Page
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
              }}
              className="text-4xl md:text-6xl font-bold text-center"
            >
              Get{" "}
              <span className="italic font-bodoni font-medium">
                explanation
              </span>{" "}
              in <br />
              your inbox
            </motion.h1>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            className="flex flex-col gap-4 justify-center items-center w-full h-1/2"
          >
            <motion.input
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.8, duration: 0.8, ease: "easeInOut" },
              }}
              className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
              type="email"
              placeholder="E.g Adam Smith"
              name="Smith"
            />
            <motion.input
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.9, duration: 0.9, ease: "easeInOut" },
              }}
              className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-full w-full md:w-2/3"
              type="email"
              placeholder="E.g adamsmith93@gmail.com"
              name="email"
            />
            <motion.textarea
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.0, duration: 1.0, ease: "easeInOut" },
              }}
              className=" p-4 bg-white hover:bg-[#f1f1f1] rounded-2xl w-full md:w-2/3"
              name="message"
              rows="10"
              placeholder="Your message here"
            />
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
