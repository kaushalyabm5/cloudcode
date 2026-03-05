import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const Animation1Ref = useRef(null);
  const Animation2Ref = useRef(null);
  const Animation3Ref = useRef(null);
  const Animation4Ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(Animation1Ref.current, {
        y:0,
        opacity: 0,
        duration: .5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(Animation2Ref.current, {
        x:100,
        opacity: 0,
        duration: 1,
        delay: .8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(Animation3Ref.current, {
        x:-100,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

       gsap.from(Animation4Ref.current, {
        y:-100,
        opacity: 0,
        duration: 1,
        delay: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }
  )



  const cards = [
    {
      tag: "PROFESSIONALISM",
      title: "Boost Your Online Presence",
      desc: "Get a website that represents your brand professionally, attracts visitors, and builds trust instantly.",
    },
    {
      tag: "GROWTH",
      title: "Increase Leads & Sales",
      desc: "Our responsive, conversion-focused websites attract visitors, engage them, and turn them into loyal customers.",
    },
    {
      tag: "EFFICIENCY",
      title: "Save Time & Effort",
      desc: "We handle design, development, and deployment, so you can focus on growing your business.",
    },
  ];

  return (
    <section ref={sectionRef} id="what-we-do" className="relative w-full bg-[#0b1117]/0 overflow-hidden">
     

      {/* Background Overlay (UNCHANGED) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0b1117]/60 to-[#0b1117]/60" />
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* ===== Top header ===== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <p ref={Animation1Ref} className="text-[10px] tracking-[0.25em] text-gray-400 mb-4">
              • WHAT WE DO
            </p>

            <h2 ref={Animation2Ref} className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Turning ideas into responsive websites and
              <br className="hidden sm:block" /> measurable 
              <span className="text-[var(--primary-color)]"> business</span> results.
            </h2>
          </div>

          <p ref={Animation3Ref} className="text-[var(--primary-color)]/30 text-sm md:text-base max-w-md">
            Delivering responsive, user-friendly websites and web solutions that help businesses connect with customers and achieve real results.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div ref={Animation4Ref} className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[var(--primary-color)]/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between hover:bg-white/[0.06] transition"
            >
              {/* icon square */}
              <div className="w-10 h-10 rounded-lg border border-[var(--primary-color)]/20 flex items-center justify-center mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-color)]" />
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-3">
                  • {card.tag}
                </p>

                <h3 className="text-[var(--primary-color)]/80 text-lg md:text-xl font-medium leading-snug">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
