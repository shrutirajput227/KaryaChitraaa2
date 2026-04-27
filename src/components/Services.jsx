import React from "react";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            desc: "High-performence SEO-Optimized websites."
        },
        {
            title: "App Development",
            desc: "Scalable Android & iOS applications."
        },
        {
            title: "Digital Marketing",
            desc: "Lead-driven marketing strategies."
        },
        {
            title: "Social Media Management",
            desc: "Brand growth across platforms."
        },
        {
            title: "Video Editing",
            desc: "Professional reels, ads & promos."
        },
        {
            title: "UI/UX & Graphic Design",
            desc: "User-centric design systems."
        },
    ];

    return (
        <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
            Our 
            <span className="text-blue-600"> Services</span>
        </h2>    
        <div className="mt-8 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item,i) => (
                <div key={i} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 rounded-t-xl font-semibold">
                      {item.title}
                    </div>   
                    
                    <div className="p-4">
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                        <button className="mt-3 text-blue-600 font-medium text-sm">
                            Read More -
                        </button>
                    </div>
                </div>    
            ))}
        </div>    
        </section>
    );
}