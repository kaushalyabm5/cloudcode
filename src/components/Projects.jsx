import React from 'react'

const Projects = () => {
  return (
    <section className="py-20 px-5 sm:px-8 lg:px-16">

      <div className="max-w-[1400px] mx-auto">

        <h1 className="text-white text-[2.5rem] sm:text-[3rem] lg:text-[4.3rem] mb-6">
          Our Latest Projects
        </h1>

        <p className="text-neutral-300 sm:w-[80%] lg:w-[60%] mb-12 leading-relaxed">
          We build scalable digital products with clean architecture and
          premium user experience. Below are some of our recent works.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

          {["pr1.jpg", "project2.jpg", "project3.jpg"].map((img, index) => (
            <div
              key={index}
              className="relative w-full max-w-[18rem] h-[24rem] rounded-[1rem] overflow-hidden"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              ></div>

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                Project Name
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects