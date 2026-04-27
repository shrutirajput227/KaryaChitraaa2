import React from "react";

export default function WhyChooseCards() {
    const data = [
        {
            num: "01",
            title: "Experienced Professionals",
            desc: "Our talented team brings together years of expertise in design, development, and digital marketing. Each member is passionate about delivering excellence and staying ahead of industry trends."
        },
        {
            num: "02",
            title: "Customized Solutions",
            desc: "We don't believe in cookie cutter solutions. Every project is uniquely crafted to align with your specific business goals, target audience, and brand identity."
        },
        {
            num: "03",
            title: "Measurable Outcomes",
            desc: "We focus on delivering tangible results that matter to your business whether that's increased traffic, higher conversions, or stronger brand presence."
        },
        {
            num: "04",
            title: "Transparent Process",
            desc: "We focus on delivering tangible results that matter to your business whether that's increased traffic, higher conversions, or stronger brand presence."
        },
        {
            num: "05",
            title: "On-Time Delivery",
            desc: "We respect your time and deadlines. Our efficient project management ensures timely delivery without compromising on quality."
        },
        {
            num: "06",
            title: "Continuous Support",
            desc: "Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to ensure your continued success."
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-r from-black via-blue-900 to-black text-white">

            <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold">
                Why Choose Us
                <span className="text-blue-400"> Karya Chitra?</span>
            </h2>
            <p className="mt-3 text-gray-300">Why Partner With Us?</p>

            <div className="mt-2 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {data.map((items, i) => (
                    <div 
                       key={i} 
                       className="mt-10 rounded-3xl cursor-pointer p-8 text-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(0,150,255,0.2)] hover:scale-105 transition duration-300"
                       >
                        {/*number circle*/}
                        <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border border-blue-300 text-2xl font-bold mb-6">
                            {items.num}
                        </div>
                         {/*tag*/}
                         <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">
                            KARYACHITRA
                         </span>
                         {/*title*/}
                         <h3 className="mt-5 text-xl font-semibold">
                            {items.title}
                         </h3>
                        {/*description*/}
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            {items.desc}
                        </p>
                        {/*bottom icon*/}
                        <div className="mt-6 w-10 h-10 border border-white/30 mx-auto rounded">
                        
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}