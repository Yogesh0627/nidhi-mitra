import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const contactLinks = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "nidhimitra05a@gmail.com",
      href: "mailto:nidhimitra05a@gmail.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "New Delhi, India",
      href: "https://maps.google.com?q=New+Delhi"
    }
  ];

  return (
    <footer className="bg-[#0f1115] text-gray-400 border-t border-[#1f2a38] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Nidhi Mitra
            </span>
          </h3>
          <p className="text-sm">
            Passionate elementary educator dedicated to shaping young minds through innovative teaching methods.
          </p>
          <div className="flex gap-4 pt-2">
            {contactLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Quick Links
          </h4>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-sm hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="/work" className="text-sm hover:text-green-400 transition-colors">
              Work Experience
            </Link>
            <Link href="/my-recommendations" className="text-sm hover:text-green-400 transition-colors">
              My Recommendations
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            Contact Info
          </h4>
          <div className="space-y-3">
            {contactLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors"
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#1f2a38] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-xs">
            &copy; {currentYear} Nidhi Mitra. All rights reserved.
          </p>
          <div className="text-xs">
            Built with <span className="text-green-400">♥</span> by{" "}
            <Link href="#" className="text-green-400 hover:underline">
              Team NiYo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;