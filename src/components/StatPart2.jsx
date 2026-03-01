import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

// ⚠️ IMPORTANT: your folder name is "assests"
// Change filenames if needed
import imgDeer from "../assets/statimg4.png";
import imgSphere from "../assets/statImg1.jpeg";
import imgBurst from "../assets/statImg2.jpeg";
import imgExtra from "../assets/statImg3.jpeg";

// ================= SMALL COMPONENTS =================

const StatCard = ({ start, value, suffix = "", label, className = "" }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center min-h-[140px] ${className}`}
    >
      <h2 className="text-white text-3xl md:text-4xl font-bold">
        {start ? <CountUp end={value} duration={2.2} /> : 0}
        {suffix}
      </h2>
      <p className="text-gray-400 text-xs md:text-sm mt-2 tracking-wide">
        {label}
      </p>
    </div>
  );
};

const ImageCard = ({ src, className = "" }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-[#0f1720] min-h-[140px] ${className}`}
    >
      <img
        src={src}
        alt="stat visual"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// ================= MAIN COMPONENT =================

export default function StatPart2() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCount(true);
      },
      { threshold: 0.25 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black py-12 md:py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
          <div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              We Turn Ideas 
              <br />
              Into Powerful Digital Experiences
            </h2>
          </div>

          <div className="text-gray-400 text-sm md:text-base max-w-xl">
            We combine strategy, design, and technology to transform your ideas into engaging digital experiences that attract customers, build trust, and drive measurable growth.
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6">
          {/* Left big stat */}
          <StatCard
            start={startCount}
            value={50}
            suffix="+"
            label="PROJECTS DELIVERED"
            className="col-span-2 md:col-span-1 md:row-span-2"
          />

          {/* Top images */}
          <ImageCard src={imgDeer} />
          <ImageCard src={imgSphere} />

          {/* NEW missing square */}
          <ImageCard src={imgExtra} />

          {/* Bottom left stat */}
          <StatCard
            start={startCount}
            value={100}
            suffix="%"
            label="RESPONSIVE DESIGNS"
          />

          {/* Center big image */}
          <ImageCard
            src={imgBurst}
            className="col-span-2 md:col-span-2 md:row-span-2"
          />

          {/* Right stats */}
          <StatCard
            start={startCount}
            value={6}
            suffix="+"
            label="COUNTRIES SERVED"
          />
          <StatCard
            start={startCount}
            value={97}
            suffix="%"
            label="CLIENT SATISFACTION"
          />
        </div>
      </div>
    </section>
  );
}
