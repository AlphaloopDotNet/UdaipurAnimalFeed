import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center space-x-2">
                <img width={70} src="/images/logo.avif"></img>
              </NavLink>
            </div>
            <p className="text-gray-600">
              Dedicated to the protection and welfare of animals in Udaipur.
              Together we can make a difference in their lives.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Animal Welfare Street, Udaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-600">help@ngoudaipur.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t  border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Udaipur Animal Feed . All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
