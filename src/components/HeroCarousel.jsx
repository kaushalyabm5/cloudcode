import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";

const slides = [
  {
    title: "THE WITCHER",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people are often more wicked than beasts.",
    image: "/src/assets/witcher-1.jpg",
  },
  {
    title: "CYBER FUTURE",
    description:
      "A dark futuristic world where technology controls everything and survival is the only rule.",
    image: "/src/assets/witcher-2.jpg",
  },
  {
    title: "DARK KINGDOM",
    description:
      "A fallen empire, rising warriors, and secrets buried deep in the shadows.",
    image: "/src/assets/witcher-3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "120%" : "-120%",
    scale: 0.95,
    opacity: 0.8,
    filter: "blur(8px)",
    position: "absolute",
  }),
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    position: "relative",
  },
  exit: (dir) => ({
    x: dir > 0 ? "-120%" : "120%",
    scale: 0.95,
    opacity: 0.8,
    filter: "blur(8px)",
    position: "absolute",
  }),
};

  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[75vh] overflow-hidden pb-25 pt-10">

        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1117]/40 via-[#0b1117]/60 to-[#0b1117]" />
        </div>

        <Projects />

        {/* SLIDE WRAPPER */}
        <div className="relative z-10 min-h-[75vh] overflow-hidden">

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
             transition={{
  x: { duration: 0.23, ease: [0.4, 0, 0.2, 1] },
  scale: { duration: 0.4 },
  opacity: { duration: 0.4 },
  filter: { duration: 0.4 },
}}
              className="w-full h-full"
            >
              <div className="flex flex-col lg:flex-row min-h-[75vh]">

                {/* LEFT */}
                <div className="w-full lg:w-[40%] flex items-center">
                  <div className="px-6 md:px-12 text-white space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {slides[current].title}
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {slides[current].description}
                    </p>

                    <div className="flex gap-4">
                      <button className="cursor-pointer px-6 py-3 bg-white text-black rounded font-medium hover:bg-gray-200 transition">
                        View Project
                      </button>
                      <button className="cursor-pointer px-6 py-3 border border-white/50 rounded hover:bg-white/10 transition">
                        Details
                      </button>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4 pt-4">
                      <button
                        onClick={prevSlide}
                        className="w-9 h-9 cursor-pointer rounded-full border border-white/40 hover:bg-white/10 transition"
                      >
                        ❮
                      </button>
                      <button
                        onClick={nextSlide}
                        className="w-9 h-9 cursor-pointer rounded-full border border-white/40 hover:bg-white/10 transition"
                      >
                        ❯
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[60%] flex items-center mt-6 lg:mt-0">
                  <div className="w-full h-[90%] mx-4 md:mx-8 rounded-xl overflow-hidden relative shadow-lg">
                    <img
                      src={slides[current].image}
                      alt={slides[current].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}