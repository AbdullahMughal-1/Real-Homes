import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-transparent fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo.png"
              alt="RealHomes Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center font-medium text-white">
          <Link
            to="/"
            className="relative overflow-hidden px-3 py-2 rounded group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("properties")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/properties"
              className="flex items-center relative overflow-hidden px-3 py-2 rounded group"
            >
              <span className="relative z-10 flex items-center">
                Properties <ChevronDown size={16} className="ml-1" />
              </span>
              <span className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded"></span>
            </Link>
            {activeDropdown === "properties" && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded w-40 py-2">
                <Link
                  to="/property/1"
                  className="block px-4 py-2 hover:bg-gray-100 text-black"
                >
                  View Listing
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown("agents")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/agents"
              className="flex items-center relative overflow-hidden px-3 py-2 rounded group"
            >
              <span className="relative z-10 flex items-center">
                Agents <ChevronDown size={16} className="ml-1" />
              </span>
              <span className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded"></span>
            </Link>
            {activeDropdown === "agents" && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded w-40 py-2">
                <Link
                  to="/agent/1"
                  className="block px-4 py-2 hover:bg-gray-100 text-black"
                >
                  Meet Agent
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 relative overflow-hidden px-3 py-2 rounded group cursor-pointer">
            <FaWhatsapp className="text-green-500 relative z-10" size={20} />
            <span className="relative z-10 text-sm">+92 301 1122334</span>
            <span className="absolute inset-0 bg-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded"></span>
          </div>

          <Link
            to=""
            className="relative overflow-hidden px-4 py-2 text-white font-medium bg-blue-600 rounded group"
          >
            <span className="relative z-10">Submit</span>
            <span className="absolute inset-0 bg-blue-900 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white w-full px-4 py-2">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/properties" className="block py-2">Properties</Link>
          <Link to="/agents" className="block py-2">Agents</Link>
          <Link to="/submit" className="block py-2">Submit</Link>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
