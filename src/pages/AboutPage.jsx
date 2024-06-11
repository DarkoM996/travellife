import React from "react";
import video from "../images/video.mp4";
import { MdOutlineArrowDownward } from "react-icons/md";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import WhyTheTraveler from "../components/WhyTheTraveler";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutSection />
      <WhyTheTraveler />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default AboutPage;
