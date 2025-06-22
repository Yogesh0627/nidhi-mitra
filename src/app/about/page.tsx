import AboutSummary from "@/components/AboutSummary";
import EducationSection from "@/components/EducationSection";
import TestimonialSection from "@/components/TestimonialSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-10">
        <AboutSummary />
      </div>
      <div className="mt-10">
        <EducationSection />
      </div>
      <div className="mt-10">
        <TestimonialSection />
      </div>
    </>
  );
};

export default page;
