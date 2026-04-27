import React from "react";

export default function CaseStudy() {
  const data2 = [
    {
      title: "BrightGrocer",
      desc: "E-commerce Store • 40% Growth"
    },
    {
      title: "TechStart",
      desc: "SaaS Platform • Lead Generation"
    },
    {
      title: "LocalFitGym",
      desc: "Fitness Brand • Social Media Growth"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-6 lg:px-16 bg-white">

      {/* heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
          See How We’ve Helped Businesses Transform Their Digital Presence
        </h2>
      </div>

      {/* cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {data2.map((item, i) => (
          <div
            key={i}
            className="bg-blue-900 text-white rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >

            {/* left content */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                {item.desc}
              </p>
            </div>

            {/* right button */}
            <button className="bg-blue-500 hover:bg-blue-400 transition text-white text-sm sm:text-base px-5 py-2 rounded-lg whitespace-nowrap mx-auto md:mx-0">
              View Full Case Study →
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}