import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { NavbarLinks } from "../utils/constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppChat = () => {
    const message = `Hi, I’d like to Donate`;
    const whatsappLink = `https://wa.me/8239498447?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md py-1"
          : "bg-gradient-to-b from-gray-50 to-white py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img width={70} src="/images/logo.avif"></img>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {NavbarLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `group flex items-center text-gray-600 hover:text-blue-600 transition-colors px-2 py-1
                      ${isActive ? "text-blue-600 font-semibold" : ""}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Donate
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-4 space-y-4">
            <ul className="space-y-2">
              {NavbarLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="px-4 pt-2">
              <button
                onClick={handleWhatsAppChat}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
