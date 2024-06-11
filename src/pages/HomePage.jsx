import React from "react";
import Hero from "../components/Hero";
import MostPopularDestinations from "./../components/MostPopularDestinations";
import CallToAction from "./../components/CallToAction";
import FrequentlyAskedQuestions from "./../components/FrequentlyAskedQuestions";
import Testimonials from "./../components/Testimonials";
import Footer from "../components/Footer";
import AmazingDestinations2 from "../components/AmazingDestinations2";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MostPopularDestinations />
      <AmazingDestinations2 />
      <Testimonials />
      <CallToAction />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default HomePage;
