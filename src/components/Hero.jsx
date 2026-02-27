import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="pt-24 min-h-screen flex flex-col text-white px-5 sm:px-8 lg:px-16">

      {/* Intro Text */}
      <p className="mt-10 md:mt-24 w-full md:w-[70%] lg:w-[45%] text-[0.9rem] leading-relaxed">
        Bayerische Motoren Werke Aktiengesellschaft, trading as BMW Group, is a German multinational conglomerate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Germany.
      </p>

      {/* Main Heading */}
      <h1 className="cloudecode py-10 text-[2.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold">
        CLOUDCO<span className="text-cyan-300">DE</span>
      </h1>

      {/* Button Section */}
      <div className="flex flex-wrap items-center gap-6 mt-4">
        <button>
          <div className="flex bg-white justify-between items-center gap-5 px-4 py-2 rounded-[2rem]">
            <p className="text-black font-bold text-[0.9rem] md:text-[1.1rem]">
              Our Projects
            </p>
            <BsArrowRightCircleFill
              size={36}
              color="black"
              style={{ transform: 'rotate(-45deg)' }}
            />
          </div>
        </button>

        <div className="hidden sm:block w-[0.1rem] h-[3.5rem] bg-white"></div>
        <p className="text-neutral-300 font-bold">Connect With Us</p>
      </div>

      {/* Testimonials */}
      <div className="py-20">

        <h2 className="text-center text-xl sm:text-2xl font-bold mb-12">
          What our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Testimonial 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-neutral-800/40 p-6 rounded-2xl">
            <img
              src="img1.jpg"
              alt="Bellamy Blake"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">Bellamy Blake</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Working with CloudCode was an incredible experience. Their
                technical precision and attention to detail transformed our
                digital presence completely. The responsiveness and performance
                improvements exceeded our expectations.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-neutral-800/40 p-6 rounded-2xl">
            <img
              src="img2.jpg"
              alt="Clark Griffin"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">Clark Griffin</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                The team delivered a high-quality product on time. Their ability
                to handle complex backend systems while maintaining a sleek and
                modern UI makes them stand out in the industry.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-neutral-800/40 p-6 rounded-2xl">
            <img
              src="img3.jpg"
              alt="Raven Reyes"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">Raven Reyes</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                From concept to deployment, everything was handled with
                professionalism. The UI animations, responsiveness, and clean
                architecture make CloudCode a reliable long-term partner.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero