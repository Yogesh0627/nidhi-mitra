import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";

const AboutSummary = () => {
  return (
    <section className="bg-[#0f1115] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Text Section */}
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-green-500" />
              <span className="text-sm uppercase tracking-wider text-green-400">
                Educator Profile
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-500">
              Nidhi Mitra
            </h1>
            <p className="text-xl font-medium text-white">
              Transforming classrooms through{" "}
              <span className="text-green-400">innovative pedagogy</span> and{" "}
              <span className="text-green-400">child-centered learning</span>
            </p>
          </div>

          <div className="space-y-5">
            <div className="p-5 bg-[#1a1d25] rounded-lg border-l-4 border-green-500">
              <p className="text-white font-medium">🏆 Teaching Credentials</p>
              <p className="text-gray-300 mt-2">
                B.El.Ed graduate from{" "}
                <span className="text-green-300">Delhi University</span> with
                70% marks | Certified in{" "}
                <span className="text-green-300">modern teaching aids</span>{" "}
                including smart classes and digital tools
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              With experience across{" "}
              <span className="text-yellow-400">
                4+ prestigious institutions
              </span>{" "}
              including Sarvodya Kanya Vidyalaya and Bal Bharti Public School,
              I&apos;ve developed a unique teaching methodology that blends:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 bg-[#1a1d25]/50 p-3 rounded-lg">
                <span className="text-green-400 mt-1">▸</span>
                <span>
                  Interactive{" "}
                  <span className="text-white">digital lesson plans</span> with
                  PPTs
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#1a1d25]/50 p-3 rounded-lg">
                <span className="text-green-400 mt-1">▸</span>
                <span>
                  Creative <span className="text-white">art integration</span>{" "}
                  techniques
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#1a1d25]/50 p-3 rounded-lg">
                <span className="text-green-400 mt-1">▸</span>
                <span>
                  Multilingual{" "}
                  <span className="text-white">(English+Hindi)</span>{" "}
                  instruction
                </span>
              </li>
              <li className="flex items-start gap-2 bg-[#1a1d25]/50 p-3 rounded-lg">
                <span className="text-green-400 mt-1">▸</span>
                <span>
                  Comprehensive{" "}
                  <span className="text-white">progress tracking</span> systems
                </span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed">
              My classrooms are{" "}
              <span className="text-green-300">safe spaces</span> where children
              explore concepts through
              <span className="text-yellow-400">
                {" "}
                games, field trips, and storytelling
              </span>
              , developing both academic skills and
              <span className="text-yellow-400"> lifelong curiosity</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              asChild
              className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition font-medium"
            >
              <a href="/cv/nidhi-cv.pdf" download>
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Full CV
              </a>
            </Button>
            {/* <Button
          variant="outline"
          asChild
          className="border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
        >
          <a href="#contact">
            <MailIcon className="mr-2 h-4 w-4" />
            Contact for Workshops
          </a>
        </Button> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative rounded-lg overflow-hidden shadow-lg w-[300px] h-[350px] group">
            <Image
              src="/assets/nidhi.jpg"
              alt="Nidhi Mitra engaging with students"
              width={350}
              height={400}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-medium text-lg">
                  “Every child deserves
                </p>
                <p className="text-green-300 font-medium">
                  a joyful learning experience.”
                </p>
              </div>
            </div>
            {/* <div className="absolute top-4 right-4 bg-green-500/90 text-black px-3 py-1 rounded-full text-xs font-bold">
              Certified Educator
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
