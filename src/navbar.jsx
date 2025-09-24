import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 get current route
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/job" },
    { name: "Support", path: "/support" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <div>
      <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50 px-6 py-2 fixed top-0">
        <div className="max-w-7xl mx-5 flex justify-between items-center h-16 px-0">
          <h1
            className="font-bold p-2 m-0 text-3xl text-orange-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            GigConnect
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto mr-6 relative">
            {links.map((link) => (
              <motion.span
                key={link.name}
                className={`text-lg font-medium cursor-pointer ${
                  location.pathname === link.path
                    ? "text-orange-600" // active link
                    : "text-white hover:text-orange-600"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </motion.span>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden flex flex-col items-center bg-[#072019] space-y-6 py-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link) => (
                <motion.span
                  key={link.name}
                  className={`text-lg font-medium cursor-pointer ${
                    location.pathname === link.path
                      ? "text-orange-600"
                      : "text-white hover:text-orange-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
