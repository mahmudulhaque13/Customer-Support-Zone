import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white px-10 py-12 pt-22 border-t border-purple-600">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 min-w-[260px]">
          <h3 className="text-xl font-bold mb-3">CS — Ticket System</h3>

          <p className="text-gray-400 text-sm leading-6">
            Welcome to the Customer Support Zone. This React-based application
            helps manage customer tickets, track progress, and resolve issues
            efficiently with a responsive and user-friendly interface.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="flex flex-wrap gap-10">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <p className="text-sm text-gray-400">About Us</p>
            <p className="text-sm text-gray-400">Our Mission</p>
            <p className="text-sm text-gray-400">Contact Sales</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <p className="text-sm text-gray-400">Products & Services</p>
            <p className="text-sm text-gray-400">Customer Stories</p>
            <p className="text-sm text-gray-400">Download Apps</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <p className="text-sm text-gray-400">Privacy Policy</p>
            <p className="text-sm text-gray-400">Terms & Conditions</p>
            <p className="text-sm text-gray-400">Join Us</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Social Links</h4>

            <p className="flex items-center gap-2 text-sm text-gray-400">
              <FaTwitter /> @CS — Ticket System
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-400">
              <FaLinkedin /> @CS — Ticket System
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-400">
              <FaFacebook /> @CS — Ticket System
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-400">
              <FaEnvelope /> support@cst.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
