import React from "react";

export default function Cards() {
    return (
        <section className="py-16 px-6 bg-blue-50 text-center">
        <div className="mt-2 space-y-6 max-w-5xl mx-auto">
            
            <div className="bg-blue-900 text-white p-6 md:p-8 rounded-xl shadow-lg">
                <span className="bg-white text-blue-900 font-bold px-6 py-2 rounded-md text-sm font-medium">
                    Our Achievements
                </span>
                <p className="mt-4 text-sm md:text-base">
                    10+ Websites & Marketing Projects Delivered. Improved Client Website Load Speed By Up To 40%. 
                    Helped Brands Increase Leads By 2x - 5x Through Smart Digital Strategies.
                </p>
            </div>

            <div className="bg-blue-900 text-white p-6 md:p-8 rounded-xl shadow-lg">
                <span className="bg-white text-blue-900 font-bold px-6 py-2 rounded-md text-sm font-medium">
                    What Makes Us Different
                </span>
                <p className="mt-4 text-sm md:text-base">
                    We combine creative design, scalable web technology, and performance marketing
                    to build solutions that are not just beautiful, but also profitable and growth-focused.
                </p>
            </div>
        </div>   
        </section>     
    );
}