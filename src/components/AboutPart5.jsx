import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";





export default function AboutPart5() {

  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  

  useGSAP(
    () => {
      gsap.from(h1Ref.current, {
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        
      });

      gsap.from(pRef.current, {
        y: 0,
        opacity: 0,
        duration: 1.1,
        delay: .5,
        ease: "power3.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });


    },
    { scope: sectionRef }
  );



  return (
    <section ref={sectionRef} id="about" className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-[#0b1117] overflow-hidden flex items-center justify-center lg:pt-20 lg:pb-15 px-4">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[var(--primary-color)]/1" />
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
        <div className="overflow-hidden">
          <h2 ref={h1Ref} className="text-white font-semibold leading-[0.95] tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            WE <span className="text-[var(--primary-color)]"> BUILD</span> 
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            STRATEGIC–DRIVEN 
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-300">
            SOLUTIONS
          </span>
        </h2>
        </div>
        

        {/* Right paragraph */}
        <div className="overflow-hidden">
          <p ref={pRef} className="mt-6 md:mt-8 text-[var(--primary-color)]/30 text-xs sm:text-sm md:text-base max-w-md mx-auto">
          We design, develop, and deploy websites that combine clean design, smart strategy, and scalable technology — helping your business grow and stand out online.
        </p>
        </div>
        

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
