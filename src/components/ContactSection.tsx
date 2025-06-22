import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Mailbox,
  School,
  UserRoundPlus
} from "lucide-react";

const contacts = [
  {
    id: "contact-1",
    icon: <Phone className="w-5 h-5" />,
    label: "Call Me",
    value: "+91 98765 43210",
    color: "bg-green-500",
    action: "tel:+919876543210"
  },
  {
    id: "contact-2",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "nidhimitra05a@gmail.com",
    color: "bg-blue-500",
    action: "mailto:nidhimitra05a@gmail.com"
  },
  {
    id: "contact-3",
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+91 98765 43210",
    color: "bg-emerald-500",
    action: "https://wa.me/919876543210"
  },
  {
    id: "contact-4",
    icon: <School className="w-5 h-5" />,
    label: "For Schools",
    value: "School inquiries",
    color: "bg-purple-500",
    action: "mailto:nidhimitra05a@gmail.com?subject=School%20Inquiry"
  },
  {
    id: "contact-5",
    icon: <UserRoundPlus className="w-5 h-5" />,
    label: "Tutoring",
    value: "Private lessons",
    color: "bg-yellow-500",
    action: "mailto:nidhimitra05a@gmail.com?subject=Private%20Tutoring"
  },
];

const ContactPromptSection = () => {
  return (
    <section className="bg-[#0f1115] text-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-green-500" />
            <span className="text-sm uppercase tracking-wider text-green-400">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-green-500">Let&apos;s </span>
            <span className="text-white">Connect & </span>
            <span className="text-yellow-400">Collaborate</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Parents, educators, or institutions - I&apos;m always open to discussing teaching opportunities and educational collaborations.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {contacts.map((item) => (
            <a
              key={item.id}
              href={item.action}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1e23] hover:bg-[#23272f] border border-[#2a3748] rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300 group"
            >
              <div className={`${item.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:rotate-6`}>
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1 text-center">
                {item.label}
              </h3>
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                {item.value}
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block text-xs text-green-400 font-medium border border-green-500/30 px-2 py-1 rounded-full group-hover:bg-green-500/10 transition-colors">
                  Contact Now
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-[#1a1e23] border border-[#2a3748] rounded-full px-6 py-3 mx-auto w-fit">
            <Mailbox className="w-5 h-5 text-yellow-400 mr-2" />
            <p className="text-gray-300 text-sm">
              Typically responds within <span className="text-green-400">24 hours</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPromptSection;