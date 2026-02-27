import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const AboutPart2 = () => {
  return (
    <div className='lg:flex-row flex py-15 flex-col gap-5 text-center items-center lg:items-start lg:text-left'>
        <div>
            <h1 className='text-white font-bold text-[1.5rem] py-6'>What We Offer</h1>
            <p className='text-neutral-400 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium adipisci nisi doloribus, iusto dolorum laboriosam odit? Ad commodi esse sapiente, autem quibusdam dolo.</p>
            <ul className="space-y-4 text-neutral-400">
                        {[
                          "High performance architecture",
                          "Modern UI/UX design",
                          "Scalable backend systems",
                          "Long-term technical support"
                        ].map((item1, index2) => (
                          <li key={index2} className="flex items-start gap-3">
                            <FaCheck className="text-green-500 mt-1" />
                            <span>{item1}</span>
                          </li>
                        ))}
                      </ul>
        </div>

        <img src='about1.jpg' alt='about-2' className='w-full sm:w-[70%] lg:w-[25rem] rounded-lg mt-6'/>
    </div>
  )
}

export default AboutPart2