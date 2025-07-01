import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-12 px-4 sm:px-8 font-serif  bg-[#F3F0E8]">
      <div className="max-w-4xl mx-auto">
        {/* Centered content */}
        <div className="flex flex-col text-center items-center mb-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-400 mt-10">
            Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>
          <div className="space-y-2">
            <p className=" mt-10 text-base sm:text-lg">
              <a
                href="mailto:serena@blakepsychology.com"
                className="hover:text-blue-600 underline"
              >
                serena@blakepsychology.com
              </a>
            </p>
            <p className="text-base sm:text-lg">Phone: (323) 555-0192</p>
            <p className="text-base sm:text-lg">
              1287 Maplewood Drive, Los Angeles, CA 90026
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-base sm:text-lg hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-base sm:text-lg hover:text-blue-600">
              Privacy Policy
            </a>
          </div>

          <div>
            <a
              href="#"
              className="text-base sm:text-lg font-medium hover:text-blue-600 underline"
            >
              Client Portal
            </a>
          </div>

          <div className="text-sm sm:text-base text-gray-500">
            <p>
              © {new Date().getFullYear()} Dr. Serena Blake PsyD Psychological
              Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
