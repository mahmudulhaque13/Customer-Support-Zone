import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b shadow-sm px-6 py-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-lg font-bold text-gray-800 cursor-pointer">
          CS — Ticket System
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-gray-700">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Changelog</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Download</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          <button className="btn btn-sm btn-primary">+ New Ticket</button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={handleMenuToggle}>
          <div className="space-y-1">
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
            <span className="block w-6 h-[2px] bg-gray-700"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border rounded shadow-sm p-4">
          <ul className="flex flex-col gap-3 text-sm text-gray-700">
            <li onClick={handleNavLinkClick}>Home</li>
            <li onClick={handleNavLinkClick}>FAQ</li>
            <li onClick={handleNavLinkClick}>Changelog</li>
            <li onClick={handleNavLinkClick}>Blog</li>
            <li onClick={handleNavLinkClick}>Download</li>
            <li onClick={handleNavLinkClick}>Contact</li>
          </ul>

          <button
            className="btn btn-primary btn-sm w-full mt-4"
            onClick={handleNavLinkClick}
          >
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
