import React from "react";
import heroImage from "../images/comp.jpg";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-r from-black via-blue-900 to-black text-white pt-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Your Partner In Digital Excellence & Brand Growth
          </h1>

          <p className="mt-6 text-gray-300 text-sm md:text-base">
            We Combine Creative Design, Cutting-Edge Development, And Strategic
            Marketing To Build Digital Experiences That Captivate Audiences And
            Drive Real Business Results.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 rounded-lg font-semibold text-black">
              START YOUR PROJECT
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Browse Services
            </button>
          </div>

          {/* Bottom Points */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-300">
            <p>✔ Quality Over Quantity</p>
            <p>🚀 Fresh Ideas, Proven Results</p>
            <p>≡ 100% Client Commitment</p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="dashboard"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}