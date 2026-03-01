import React from "react";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
              GET IN TOUCH
            </h1>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base max-w-md">
              <p>attitude@mail.com</p>

              <p className="leading-relaxed">
               Reach out to discuss your project, and let us create a website that drives results and grows your business.
              </p>
            </div>

           
          </div>

          {/* CENTER */}
          <div className="space-y-10">

            <div className="text-sm text-gray-300 space-y-1">
              <p>+94 74 113 7308</p>
              <p>+94 72 877 9773</p>
            </div>

            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">

              <div>
                <h3 className="text-white font-medium mb-2 flex items-center gap-2.5"><FaFacebook className="text-[1.3rem] text-[#1877F2]"/><a href="">FACEBOOK</a></h3>
                <p>
                  Connect with us on Facebook for updates and inspiration.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2">SRI LANKA 🇱🇰</h3>
                <p>
                  Located in Sri Lanka, delivering expert web solutions to grow your business.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-start lg:justify-end">
            <h1 className="text-[1rem] sm:text-[1rem] md:text-[1rem] lg:text-[1rem] font-light tracking-widest">
            &lt;CLOU<span className="text-cyan-400">DC</span>ODE/&gt;
          </h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;