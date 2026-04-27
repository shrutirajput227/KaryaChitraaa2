import React from "react";

export default function WorkProcess() {
    const steps = [
        {
            num: "1",
            title: "Discovery & Consultation",
            desc: "Understanding your goals & challenges."
        },
        {
            num: "2",
            title: "Strategy & Planning",
            desc: "Crafting data-driven solutions."
        },
        {
            num: "3",
            title: "Design & Development",
            desc: "Pixel-perfect UI & scalable tech."
        },
    ];
    return (
        <section className="py-20 px-6 bg-blue-900">
            {/*heading*/}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Our Work Process
                </h2>
            </div>
            {/*cards*/}
            <div className="mt-2 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((item, i) => (
                    <div 
                    key={i} 
                    className="relative bg-white p-6 rounded-lg shadow-lg"
                    >
                        {/*number*/}
                        <div className="absolute top-4 left-6 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                            {item.num}
                        </div>
                        {/*content*/}
                        <div className="mt-10">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>  
                    </div>    
                    ))}
                </div>      

        </section>
    );
}