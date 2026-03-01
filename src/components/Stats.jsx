import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { id: 1, label: "Projects Completed", value: 30 },
    { id: 2, label: "Countries Served", value: 5 },
    { id: 3, label: "Problems Solved", value: 25 },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="p-8">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
              </div>
              <div className="mt-4 text-neutral-700 text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Stats