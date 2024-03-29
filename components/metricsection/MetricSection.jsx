import React from "react";
import { metrics } from "@/constants/data";

const MetricSection = () => {
  return (
    <section className="bg-var-black px-[4%] xl:px-[100px] py-12 xl:py-16">
      {/*Metrics Container */}
      <div className="container flex justify-between items-center gap-4 text-var-primary-darker">
        {
          // Metric Section
          metrics.map(({ id, title, text }) => (
            <article key={id} className="space-y-2 xl:space-y-8">
              <h2 className="text-lg sm:text-3xl xl:text-5xl font-bold">
                {title}
              </h2>
              <p className="text-var-white text-xs sm:text-xl xl:text-2xl">
                {text}
              </p>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default MetricSection;
