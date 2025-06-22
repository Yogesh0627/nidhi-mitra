import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  firstName: string;
  lastName: string;
  subtitle: string;
  image: string;
  designation: string;
}

const HeroSection = ({
  firstName = "",
  lastName = "",
  subtitle = "",
  image = "",
  designation = "",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-screen bg-[#1A1F2B] text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-12 gap-10">
        {/* Left (bottom on mobile): Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <p className="uppercase text-sm tracking-widest font-medium flex items-center justify-center md:justify-start gap-2">
            <span className="w-10 h-[2px] bg-white inline-block" />
            <span className="text-yellow-400 text-base">•</span>
            {designation}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-500">{firstName} </span>
            <span className="text-white">{lastName}</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button variant="outline" asChild className="text-black">
              <Link href="/about">Biography</Link>
            </Button>
            {/* 
            <Button className="bg-green-500 hover:bg-green-600 text-black" asChild>
              <Link href="/feedback">Download CV</Link>
            </Button> 
            */}
          </div>
        </div>

        {/* Right (top on mobile): Image */}
        <div className="flex-1 relative flex items-center justify-center">
          <Image
            src={image}
            alt="Nidhi Mitra"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
