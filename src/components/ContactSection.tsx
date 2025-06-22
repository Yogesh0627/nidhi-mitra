import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Twitter,
  Linkedin,
} from "lucide-react";

const contacts = [
  {
    id: "contact-1",
    icon: <Phone className="text-black w-5 h-5" />,
    label: "Call Me At:",
    value: "999-888-7777",
  },
  {
    id: "contact-2",
    icon: <Mail className="text-black w-5 h-5" />,
    label: "Email At:",
    value: "nidhi.mitra@example.com",
  },
  {
    id: "contact-3",
    icon: <MessageCircle className="text-black w-5 h-5" />,
    label: "WeChat:",
    value: "@nidhim",
  },
  {
    id: "contact-4",
    icon: <Twitter className="text-black w-5 h-5" />,
    label: "Twitter:",
    value: "@nidhiM_official",
  },
  {
    id: "contact-5",
    icon: <Linkedin className="text-black w-5 h-5" />,
    label: "LinkedIn:",
    value: "linkedin.com/in/nidhimitra",
  },
];

const ContactPromptSection = () => {
  return (
    <section className="bg-[#0f1115] text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Connect & Collaborate!
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Whether you&apos;re a parent, fellow educator, or simply curious — feel free to reach out. I&apos;d love to hear from you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {contacts.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1e23] hover:bg-[#23272f] transition-colors duration-300 rounded-md py-6 px-4 flex flex-col items-center shadow-md hover:shadow-lg group"
            >
              <div className="bg-yellow-400 p-3 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <p className="text-sm text-gray-300">{item.label}</p>
              <p className="text-white font-medium text-sm sm:text-base break-words text-center">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPromptSection;
