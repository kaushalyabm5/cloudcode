import React, { useRef } from "react";
import { cards } from "../data/testimonials";

const CardCarousel = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div>
      {/* Desktop arrows */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur items-center justify-center text-white"
      >
        ‹
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur items-center justify-center text-white"
      >
        ›
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          scrollbar-hide px-5 md:px-0
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              min-w-[85%] md:min-w-[32%]
              bg-white/20 backdrop-blur-lg
              rounded-3xl p-6 flex gap-4 items-center
              text-white
            "
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold">{card.name}</h3>
              <p className="text-sm opacity-80 mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;