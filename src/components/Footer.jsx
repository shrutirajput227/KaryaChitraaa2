import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-6 sm:px-10 lg:px-20">

      {/*Top grid*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

        {/*brand*/}
        <div>
          <h2 className="text-xl font-bold">
            Karya<span className="text-blue-400"> Chitra</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Karya Chitra is a next-generation digital agency delivering high-quality web, 
            app, design, and marketing solutions to help brands grow and scale online.
          </p>
        </div>

        {/*links*/}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Services</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/*contact*/}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: contact@karyachitra.com</li>
            <li>Phone: 9897658784</li>
            <li>Location: Noida, Uttar Pradesh, India</li>
          </ul>

          {/*social icons*/}
          <div className="flex gap-3 mt-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-600 cursor-pointer">
              in
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-600 cursor-pointer">
              IG
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-600 cursor-pointer">
              X
            </div>
          </div>
        </div>

      </div>

      {/*divider*/}
      <div className="border-t border-blue-800 pt-4 text-center text-sm text-gray-400">
        © 2026 Karya Chitra. All rights reserved.
      </div>
    </footer>
  );
}