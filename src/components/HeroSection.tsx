import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  firstName: string;
  lastName: string;
//   title: string;
  subtitle: string;
  image: string;
  designation: string;
}

const HeroSection = ({
  firstName = "",
  lastName = "",
//   title = "",
  subtitle = "",
  image = "",
  designation = "",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-screen bg-[#1A1F2B] text-white flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12 gap-10">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <p className="uppercase text-sm tracking-widest font-medium flex items-center gap-2">
            <span className="w-10 h-[2px] bg-white inline-block" />
            <span className="text-yellow-400 text-base">•</span>
            {designation}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-500">{firstName} </span>
            <span className="text-white">{lastName}</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            {subtitle}
          </p>

          <div className="flex gap-4 pt-4">
            <Button variant="outline" asChild className="text-black">
              <Link href="/about">Biography</Link>
            </Button>
            {/* <Button
              className="bg-green-500 hover:bg-green-600 text-black"
              asChild
            >
              <Link href="/feedback">Download CV</Link>
            </Button> */}
          </div>
        </div>

        {/* Right: Image + Social */}
        <div className="flex-1 relative flex items-center justify-center">
          <Image
            src={image}
            alt="Nidhi Mitra"
            width={400}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
