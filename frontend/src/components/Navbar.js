import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="TrueLoans Logo" className="h-12" />
            <span className="brand-font text-2xl font-bold text-gray-800">TrueLoans</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-[#005A9C] transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-[#005A9C] transition duration-300">About Us</Link>
          <Link to="/services" className="hover:text-[#005A9C] transition duration-300">Loan Services</Link>
          <Link to="/contact" className="hover:text-[#005A9C] transition duration-300">Contact Us</Link> {/* <-- Add this Link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;