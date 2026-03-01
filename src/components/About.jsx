import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import AboutPart2 from './AboutPart2'
import AboutPart3 from './AboutPart3'

const About = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-16 bg-neutral-900 py-20">

      <div className="flex flex-col lg:flex-row gap-16 items-center">

        <img
          src="about1.jpg"
          alt="About"
          className="w-full sm:w-[70%] lg:w-[25rem] rounded-lg"
        />

        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
            About Us
          </h1>

          <p className="text-neutral-400 text-[1rem] sm:text-[1.1rem] leading-relaxed mb-8">
            We specialize in building modern, scalable web applications that
            combine powerful backend systems with visually stunning frontend
            interfaces.
          </p>

          <ul className="space-y-4">
            {[
              "High performance architecture",
              "Modern UI/UX design",
              "Scalable backend systems",
              "Long-term technical support"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>


    </section>
  )
}

export default About