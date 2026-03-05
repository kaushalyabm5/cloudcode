import React, { useRef } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const sectionRef = useRef(null);
 

  useGSAP(
      () => {
        gsap.from(sectionRef.current, {
          y:-100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
        
      }
    )

  return (
    <section ref={sectionRef} id="contact" className="w-full bg-black text-white pb-30 md:pb-16 lg:pb-16 px-6 md:px-12 lg:px-20 py-16">

      
      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
              GET IN TOUCH
            </h1>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base max-w-md">
              <p className="text-[var(--primary-color)]">cloudcodeorg@proton.me</p>

              <p className="leading-relaxed text-neutral-400">
               Reach out to discuss your project, and let us create a website that drives results and grows your business.
              </p>
            </div>

           
          </div>

          {/* CENTER */}
          <div className="space-y-10">

            <div className="text-sm text-gray-300 space-y-1">
              <p className="flex items-center gap-2.5 text-[var(--primary-color)]"><FiPhone />+94 74 113 7308</p>
              <p className="flex items-center gap-2.5 text-[var(--primary-color)]"><FaWhatsapp />+94 72 877 9773</p>
            </div>

            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">

              <div>
                <h3 className="text-white font-medium mb-2 flex items-center gap-2.5"><FaFacebook className="text-[1.3rem] text-[#1877F2]"/><a href="">FACEBOOK</a></h3>
                <p className="text-[var(--primary-color)]/40">
                  Connect with us on Facebook for updates and inspiration.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2 flex items-center gap-2.5"><FiMapPin className="text-[1.3rem] text-[var(--primary-color)]"/>SRI LANKA 🇱🇰</h3>
                <p className="text-[var(--primary-color)]/40">
                  Located in Sri Lanka, delivering expert web solutions to grow your business.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-start lg:justify-end">
            <h1 className="text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] font-light tracking-widest">
            &lt;CLOU<span className="text-[var(--primary-color)]">DC</span>ODE/&gt;
          </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;