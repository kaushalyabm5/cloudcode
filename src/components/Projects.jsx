import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const sectionRef = useRef(null);
  const AnimationRef = useRef(null);


  useGSAP(
      () => {
        gsap.from(AnimationRef.current, {
          x:100,
          opacity: 0,
          duration:1,
          ease: "power3.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
        
      }
    )


  return (
    <section ref={sectionRef} className="pb-8 pt-7 px-5 sm:px-8 lg:px-16">

      <div className="max-w-[1400px] mx-auto">

        <h1 ref={AnimationRef} className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide pb-14">
          OUR LATEST <span className='text-[var(--primary-color)]'>PROJECTS</span>
        </h1>

      

       

      </div>

    </section>
  )
}

export default Projects