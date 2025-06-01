import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CTA_Button from "./CTA_Button";
import logo from "../assets/images/logos/jiva-jago-sa-high-resolution-logo-transparent-main-title-only6.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md w-full z-[1000] sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Jiva Jago Logo" className="w-10 h-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-800 hover:text-orange-500">About</Link>
            <Link to="/volunteer" className="text-gray-800 hover:text-orange-500">Volunteer</Link>
            <Link to="/contact" className="text-gray-800 hover:text-orange-500">Contact</Link>
            <CTA_Button>Donate</CTA_Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none z-50 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "75%" }}
      >
        <div className="p-6 flex flex-col space-y-6 text-lg text-gray-800">
          <Link to="/about" onClick={toggleMenu} className="hover:text-orange-500">About</Link>
          <Link to="/volunteer" onClick={toggleMenu} className="hover:text-orange-500">Volunteer</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-orange-500">Contact</Link>
          <CTA_Button onClick={toggleMenu}>Donate</CTA_Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
