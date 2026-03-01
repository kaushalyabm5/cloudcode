import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full text-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:min-h-screen">

        {/* TOP CONTENT */}
        <div className="space-y-6 max-w-xl mt-12 md:mt-20">

          {/* Small Description */}
          <div className="flex items-start gap-3">
            
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
             CloudCode is a modern web development company that designs, develops, and deploys high-performance websites tailored to your business needs. We combine strategy, clean design, and scalable technology to create digital experiences that drive real growth.
            </p>
          </div>

          {/* Big Title */}
          <h1 className="text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-widest">
            CLOU<span className="text-cyan-400">DC</span>ODE
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium transition hover:scale-105 cursor-pointer">
              Discover →
            </button>

            <button className="px-6 py-3 border border-white/40 rounded-full text-sm transition hover:bg-white/10 cursor-pointer">
              Connect With Us
            </button>
          </div>
        </div>

        {/* BOTTOM GLASS CARDS */}
        <div className="mt-16 md:mt-20 lg:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 transition hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20"></div>
              <div>
                <h3 className="font-medium">Strategic Website Design</h3>
                <p className="text-sm text-gray-300">
                  Modern, conversion-focused designs that build trust and turn visitors into customers.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 transition hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20"></div>
              <div>
                <h3 className="font-medium">Custom Web Development</h3>
                <p className="text-sm text-gray-300">
                  Fast, scalable, and fully responsive websites tailored to your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 transition hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20"></div>
              <div>
                <h3 className="font-medium">Launch & Growth Optimization</h3>
                <p className="text-sm text-gray-300">
                  Seamless deployment with performance and SEO foundations to drive real results.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;