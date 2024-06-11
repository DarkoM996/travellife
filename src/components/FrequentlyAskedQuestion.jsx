import React from "react";
import Accordion from "./Accordion";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="p-2">
      <Accordion
        title="What is TravelLife known for?"
        answer="SneakerLife is a small travel agency which specializes in providing unique and fantastic experiences for tourists by giving them organized visits in Europe's known and hidden gems."
      />
      <Accordion
        title="How do I book a trip?"
        answer="Pretty simple. Press the enquire button and a form on your right will appear from which you will easily figure it out."
      />
      <Accordion
        title="How long do I wait for someone to call me?"
        answer="It depends on when you are contacting. We are pretty active and usually we will answer you back throughout the work day as well as anytime between 24-48 hours in total after you've requested us."
      />
      <Accordion
        title="Do you include cancelation?"
        answer="Yes, we do. Even though we promise you won't be disappointed, still for those of you who are first time travelers with our organization, we can always cancel your trip."
      />
    </div>
  );
};

export default FrequentlyAskedQuestion;
