import React from "react";
import { Link } from "react-router-dom";
import lwk from '../assets/images/lwk_logos/full_logos/dark/living-with-krishna-dark-high-resolution-logo-transparent-cropped.png';
import { IoLogoFacebook } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black border-t mt-16 shadow-xl text-center md:text-start">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Short Description */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white hover:text-orange-600">
            <img src={lwk} alt="Living with Krishna Logo" className="w-52 md:w-60 h-auto mx-auto sm:mx-0" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white hover:text-orange-500">Home</Link>
            </li>
            <li>
              <Link to="/our-mission" className="text-white hover:text-orange-500">Our Mission</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-orange-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Plans & Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/explore" className="text-white hover:text-orange-500">Explore</Link>
            </li>
            <li>
              <Link to="/plans-and-pricing" className="text-white hover:text-orange-500">Plans & Pricing</Link>
            </li>
            <li>
              <Link to="/become-an-instructor" className="text-white hover:text-orange-500">Become an Instructor</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="text-white hover:text-orange-500">
              <IoLogoFacebook size={24} />
            </a>
            <a href="https://twitter.com/your-profile" className="text-white hover:text-orange-500">
              <RiTwitterXFill size={24} />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <IoLogoInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-orange-500">
              <FaLinkedin size={24} />
            </a>
          </div>
          {/* Text */}
          <p className="text-sm text-white mt-4 text-center sm:text-left">
            Your one-stop platform for learning and mastering skills from the comfort of your home.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black py-4">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-sm">
          &copy; 2024 Living With Krishna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;