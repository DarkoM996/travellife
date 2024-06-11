import React from "react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import PragueHero from "../components/PragueHero";
import PragueSection from "../components/PragueSection";
import Testimonials from "../components/Testimonials";
import UnforgettableExperience from "../components/UnforgettableExperience";
import WhyPrague from "../components/WhyPrague";

const Prague = () => {
  return (
    <>
      <PragueHero />
      <PragueSection />
      <UnforgettableExperience />
      <WhyPrague />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Prague;
