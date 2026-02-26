import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  // To trigger count when visible
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { id: 1, label: "Projects Completed", value: 30, icon: "📁" },
    { id: 30, label: "Countries Served", value: 5, icon: "😀" },
    { id: 3, label: "Problems Solved", value: 25, icon: "🛠️" },
  ];

  return (
    <section className="bg-neutral-800/70 py-16">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className=" rounded-2xl p-6 transition-shadow duration-300"
            >
              
              <div className="text-5xl font-bold text-white">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
              </div>
              <div className="mt-2 text-neutral-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;