import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutPart5() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-[#0b1117] overflow-hidden flex items-center justify-center lg:pt-20 lg:pb-15 px-4">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      {/* Top-right arrow */}
      <button className="absolute top-6 right-6 md:top-8 md:right-10 text-white hover:opacity-80 transition hidden">
        <ArrowUpRight size={28} strokeWidth={2} />
      </button>

      {/* Left tiny label */}
      <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 hidden">
        <p className="text-gray-400 text-xs md:text-sm leading-tight">
          Cloud
          <br />
          Code
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h2 className="text-white font-semibold leading-[0.95] tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            WE BUILD 
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            STRATEGIC–DRIVEN 
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-300">
            SOLUTIONS
          </span>
        </h2>

        {/* Right paragraph */}
        <p className="mt-6 md:mt-8 text-gray-400 text-xs sm:text-sm md:text-base max-w-md mx-auto">
          We design, develop, and deploy websites that combine clean design, smart strategy, and scalable technology — helping your business grow and stand out online.
        </p>

        {/* Scroll circle */}
        <div className="mt-10 md:mt-14 flex justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-500/40 flex items-center justify-center">
            <div className="absolute inset-2 rounded-full border border-gray-500/30" />
            <span className="text-white text-xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
