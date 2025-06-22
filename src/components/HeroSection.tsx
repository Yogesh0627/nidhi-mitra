import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Download, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  firstName: string;
  lastName: string;
  subtitle: string;
  image: string;
  designation: string;
}

const HeroSection = ({
  firstName = "Nidhi",
  lastName = "Mitra",
  subtitle = "Passionate educator creating engaging learning experiences through innovative teaching methods",
  image = "/assets/nidhi.jpg",
  designation = "Elementary Education Specialist",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[90vh] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1115] to-[#1A1F2B] text-white flex items-center">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Text Content - Left Side */}
        <div className="flex-1 w-full md:w-auto space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              {designation}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-green-500">{firstName} </span>
            <span className="text-white">{lastName}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all group px-6 py-3"
              asChild
            >
              <Link href="/about" className="flex items-center gap-1">
                View Biography
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 flex items-center gap-2"
              asChild
            >
              <Link href="/cv/nidhi-cv.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-green-500">2+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-blue-500">10+</p>
              <p className="text-sm text-gray-400">Students Taught</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-yellow-500">EN/HI</p>
              <p className="text-sm text-gray-400">Bilingual</p>
            </div>
          </div>
        </div>

        {/* Image Content - Right Side */}
        <div className="flex-1 w-full md:w-auto flex justify-center relative max-w-md mx-auto">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px]">
            <Image
              src={image}
              alt={`${firstName} ${lastName}`}
              fill
              className="rounded-lg object-cover border-4 border-green-500/20 shadow-xl"
              priority
            />
            {/* <div className="absolute -bottom-4 -right-4 bg-green-600 text-black px-3 py-1 rounded-full text-xs font-bold rotate-3 shadow-md">
              Certified Teacher
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;