import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 py-6 border border-[#33353F] mx-auto z-10 flex items-center justify-between">
      <p className="font-serif text-xl font-semibold">
        © {new Date().getFullYear()} BookHaven. All Rights Reserved.
      </p>
      
      <div className="flex gap-4">
        {/* Social Media Icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
