import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import projectImg1 from "../assets/projectimg1.png";
import projectImg2 from "../assets/projectimg2.png";

import projectModal1 from "../assets/projectModal1.jpg";
import projectModal2 from "../assets/projectModal2.jpg";
import projectModal3 from "../assets/projectModal3.jpg";

import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "THE WITCHER",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people are often more wicked than beasts.",
    image: projectImg1,
    modalImage: projectModal1,
    technologies: ["React", "TailwindCSS", "Firebase"],
    duration: "3 Weeks",
    client: "Private Business Owner",
    type: "Business Website",
    features: [
      "Responsive design",
      "Admin dashboard",
      "Booking system",
      "SEO optimization",
    ],
  },
  {
    title: "CYBER FUTURE",
    description:
      "A dark futuristic world where technology controls everything and survival is the only rule.",
    image: projectImg2,
    modalImage: projectModal2,
    technologies: ["React", "Node.js", "MongoDB"],
    duration: "1 Month",
    client: "Startup Company",
    type: "Web Application",
    features: [
      "Authentication system",
      "Realtime database",
      "Modern UI/UX",
      "Performance optimized",
    ],
  },
  {
    title: "DARK KINGDOM",
    description:
      "A fallen empire, rising warriors, and secrets buried deep in the shadows.",
    image: projectImg1,
    modalImage: projectModal3,
    technologies: ["Next.js", "TailwindCSS"],
    duration: "2 Weeks",
    client: "Agency Client",
    type: "Portfolio Website",
    features: [
      "Animated sections",
      "SEO ready",
      "Fast loading",
      "Mobile optimized",
    ],
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const sectionRef = useRef(null);
  const Animation1Ref = useRef(null);
  const Animation2Ref = useRef(null);
  const modalRef = useRef(null);

  useGSAP(() => {
    gsap.from(Animation1Ref.current, {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ease: "power3.in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(Animation2Ref.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  });

  /* ================= SCROLL LOCK + ESC ================= */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";

      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} id="projects" className="relative w-full ">
        {/* Background Overlay (UNCHANGED) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0b1117]/60 to-[#000000]" />
        </div>
      
     <div className="relative w-full overflow-hidden min-h-[75vh] pb-20 pt-40">
  <Projects />

  <AnimatePresence initial={false} mode="wait">
    <motion.div
      key={current}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-col lg:flex-row w-full h-full"
    >
      {/* LEFT */}
      <div className="w-full lg:w-[40%] flex items-center px-6 md:px-12 text-white space-y-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">{slides[current].title}</h1>
          <p className="text-gray-300 mt-4">{slides[current].description}</p>

          <button
            onClick={() => setIsOpen(true)}
            className="cursor-pointer mt-6 px-6 py-3 bg-[var(--primary-color)] text-black rounded font-medium hover:bg-[var(--primary-color)]/50 transition"
          >
            View Project Details
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-[60%] flex items-center mt-6 lg:mt-0">
        <div className="w-full h-[90%] mx-4 md:mx-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* ===== SLIDE NAVIGATION BUTTONS FIXED ===== */}
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
    <button onClick={prevSlide} className="cursor-pointer w-9 h-9 rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/0 text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white">❮</button>
    <button onClick={nextSlide} className="cursor-pointer w-9 h-9 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white">❯</button>
  </div>
</div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl
              bg-gradient-to-br from-[#0f1720] via-[#0b1117] to-[#0a0f14]
              border border-[var(--primary-color)]/20
              shadow-[0_0_60px_rgba(0,255,255,0.08)]
              text-white"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer absolute top-4 right-4 w-10 h-10 rounded-full 
                border border-[var(--primary-color)]/30 
                text-[var(--primary-color)] 
                flex items-center justify-center
                hover:bg-[var(--primary-color)] hover:text-black
                transition-all duration-300"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row">

                {/* POSTER */}
                <div className="w-full md:w-[35%] p-6 flex justify-center">
                  <div className="w-[180px] sm:w-[220px] md:w-[240px] aspect-[2/3] rounded-lg overflow-hidden border border-[var(--primary-color)]/30">
                    <img
                      src={slides[current].modalImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-[65%] p-6 md:p-10 space-y-6">

                  <div className="text-[var(--primary-color)] text-xs tracking-[0.3em] uppercase">
                    Project Overview
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                    {slides[current].title}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {slides[current].description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-300">
                    <div>
                      <span className="text-[var(--primary-color)] block text-xs">Duration</span>
                      {slides[current].duration}
                    </div>
                    <div>
                      <span className="text-[var(--primary-color)] block text-xs">Client</span>
                      {slides[current].client}
                    </div>
                    <div>
                      <span className="text-[var(--primary-color)] block text-xs">Type</span>
                      {slides[current].type}
                    </div>
                  </div>

                  <div>
                    <p className="text-[var(--primary-color)] text-xs uppercase tracking-widest mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {slides[current].technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-1 text-xs border border-[var(--primary-color)]/30 text-[var(--primary-color)] rounded-full bg-[#ff00ea]/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[var(--primary-color)] text-xs uppercase tracking-widest mb-3">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-400">
                      {slides[current].features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}