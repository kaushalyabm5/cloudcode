import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

// ⚠️ IMPORTANT: your folder name is "assests"
// Change filenames if needed
import img1 from "../assets/si1.png";
import img2 from "../assets/si3.png";
import img3 from "../assets/si4.png";
import img4 from "../assets/sinew1.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


// ================= SMALL COMPONENTS =================

const StatCard = ({ start, value, suffix = "", label, className = "" }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-center items-center min-h-[140px] ${className}`}
    >
      <h2 className="text-[var(--primary-color)]/40 text-3xl md:text-5xl font-bold">
        {start ? <CountUp end={value} duration={5.2} /> : 0}
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
  const Animate1Ref = useRef(null);
  const Animate2Ref = useRef(null);
  const leftAnimate = useRef(null);

  useGSAP(
    () => {
      gsap.from(Animate1Ref.current, {
        x:100,
        opacity: 0,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(Animate2Ref.current, {
        x:-100,
        opacity: 0,
        duration: 1,
        delay: .5,
        ease: "power3.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(leftAnimate.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: .8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
          onEnter: () => setStartCount(true),
        },
      });
    },
    { scope: sectionRef }
  );

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
    id="stat"
      ref={sectionRef}
      className="w-full bg-black py-12 md:py-16 px-4 md:px-8"
    >

      

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-center mb-10">
          <div className="overflow-hidden">
            <h2 ref={Animate1Ref} className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              We Turn Ideas 
              <br />
              Into <span className="text-[var(--primary-color)]">Powerful </span>Digital Experiences
            </h2>
          </div>

          <div className="overflow-hidden">
            <div ref={Animate2Ref} className="text-[var(--primary-color)]/30 text-sm md:text-base max-w-xl">
            We combine strategy, design, and technology to transform your ideas into engaging digital experiences that attract customers, build trust, and drive measurable growth.
          </div>
          </div>
          
        </div>

        {/* Mosaic Grid */}
        <div ref={leftAnimate}  className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6">
          {/* Left big stat */}
          <StatCard
            
            start={startCount}
            value={50}
            suffix="+"
            label="PROJECTS DELIVERED"
            className="col-span-2 md:col-span-1 md:row-span-2"
          />

          {/* Top images */}
          <ImageCard src={img1} />
          <ImageCard src={img2} />

          {/* NEW missing square */}
          <ImageCard src={img3} />

          {/* Bottom left stat */}
          <StatCard
            start={startCount}
            value={100}
            suffix="%"
            label="RESPONSIVE DESIGNS"
          />

          {/* Center big image */}
          <ImageCard
            src={img4}
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
