import React, { useRef } from "react";

// Import images
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);




const testimonials = [
  
  {
    name: "James Roy",
    role: "CEO, TechCorp",
    image: person1,
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Hendry Earns",
    role: "Founder, StartupX",
    image: person2,
    rating: 5,
    description:
      "Morbi non arcu risus quis varius. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.",
  },
  {
    name: "Henry Vane",
    role: "Product Manager",
    image: person3,
    rating: 4,
    description:
      "Cras fermentum odio eu feugiat pretium nibh ipsum consequat.",
  },
 
];

const Testimonials = () => {

  const sectionRef = useRef(null);
    const Animate1Ref = useRef(null);
    const Animate2Ref = useRef(null);
   


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
        y:100,
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

      
    },
    { scope: sectionRef }
  );




  return (
    <section ref={sectionRef} className="relative py-20 px-6 lg:px-20 overflow-hidden">
      
      {/* ✅ Background Layer (Behind Everything) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1117]/60 via-[#0b1117]/60 to-black" />
      </div>

      {/* ✅ Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 ref={Animate1Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-white">
            What Our <span className="text-[var(--primary-color)]"> Clients</span> Say
          </h2>
          
        </div>

        {/* Testimonials Grid */}
        <div ref={Animate2Ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-[var(--primary-color)]/10 bg-white/[0.04] backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-neutral-400"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-neutral-200">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-3">{item.role}</p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < item.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[var(--primary-color)]/40 text-sm leading-relaxed">
                “{item.description}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;