import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f1115] text-gray-400 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NiYo Learners. All rights reserved.
        </p>
        <div className="text-sm">
          Built with ❤️ by <span className="text-green-500 font-semibold">Team NiYo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
