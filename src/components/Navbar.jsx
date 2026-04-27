import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Karya<span className="text-blue-600">Chitra</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Our Team</li>
          <li className="hover:text-blue-500 cursor-pointer">Services</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg">
          Free Consultation
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setMenu(!menu)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>Our Team</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}