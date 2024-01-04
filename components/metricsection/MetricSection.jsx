import React from "react";
import { metrics } from "@/constants/data";

const MetricSection = () => {
  return (
    <section className="bg-var-black px-[4%] lg:px-[100px] py-8 lg:py-[60px]">
      <div className="container flex justify-between items-center gap-4 text-var-primary-darker ">
        {
          // Metric Section
          metrics.map(({ id, title, text }) => (
            <article key={id} className="space-y-2 xl:space-y-8">
              <h2 className="text-lg sm:text-3xl lg:text-5xl 2xl:text-[60px] font-bold">
                {title}
              </h2>
              <p className="text-var-white text-xs sm:text-lg xl:text-[28px]">
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
