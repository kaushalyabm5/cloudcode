import React from "react";

export default function WhatWeDo() {
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
    <section className="relative w-full bg-[#0b1117]/0 overflow-hidden">
      {/* ===== Background image/overlay look ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1117]/40 via-[#0b1117]/60 to-[#0b1117]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* ===== Top header ===== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-4">
              • WHAT WE DO
            </p>

            <h2 className="text-white font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Turning ideas into responsive websites and
              <br className="hidden sm:block" /> measurable 
              <span className="text-cyan-400"> business</span> results.
            </h2>
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-md">
            Delivering responsive, user-friendly websites and web solutions that help businesses connect with customers and achieve real results.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 min-h-[260px] flex flex-col justify-between hover:bg-white/[0.06] transition"
            >
              {/* icon square */}
              <div className="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>

              <div>
                <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-3">
                  • {card.tag}
                </p>

                <h3 className="text-white text-lg md:text-xl font-medium leading-snug">
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
