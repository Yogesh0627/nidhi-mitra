import AboutSection from "@/components/AboutSection";
import ContactPromptSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import MyServices from "@/components/MyServices";
import OurBeliefsSection from "@/components/OurBeliefSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
  <>
    <div className="pt-10">
      <HeroSection
    firstName="Nidhi"
    lastName="Mitra"
    designation="Primary Teacher"
    image="/assets/nidhi.jpg"
    subtitle="All students can learn and succeed, but not in the same way and not in the same day"
    // title="Teacher"

    />
    </div>

    <div className="mt-10">
      <AboutSection/>
    </div>

    <div className="mt-20">
      <OurBeliefsSection/>
    </div>

    <div className="mt-20">
      <MyServices/>
    </div>

    <div className="mt-20">
      <SkillsSection/>
    </div>
    <div className="mt-20">
      <TestimonialSection/>
    </div>
    <div className="mt-20">
      <ContactPromptSection/>
    </div>
  </>
  );
}
