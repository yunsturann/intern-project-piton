import React from "react";
import Image from "next/image";

// background images
import bg from "../../public/images/BG.png";
import shape_1 from "@/public/images/shape_1.png";
import shape_2 from "@/public/images/shape_2.png";

// hands images
import { hands } from "@/constants/data";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center relative h-screen">
      {/*Background img */}
      <Image src={bg} alt="bg" fill className="absolute -z-30" />
      {/*Shapes */}
      <div className="-z-10 absolute top-32 bottom-64 md:top-16 md:bottom-32 left-16 w-[32%] -rotate-3">
        <Image src={shape_1} alt="shape" fill />
      </div>

      <div className="-z-20 absolute top-20 bottom-20 md:top-4 md:bottom-4 right-16 w-[70%] ">
        <Image src={shape_2} alt="shape" fill />
      </div>

      {/*Title*/}
      <h1 className="text-center font-bold text-[3rem] lg:text-[4rem] 3xl:text-[6.25rem] mx-4 sm:mx-16 lg:mx-44 3xl:mx-[19rem] leading-none lg:leading-[110px]">
        Let’s create something great together.
      </h1>

      {/*Hero Image*/}
      <div className="absolute bottom-0 grid grid-cols-6">
        {hands.map(({ id, img }) => (
          <Image
            key={id}
            src={img}
            alt="finger"
            style={{ objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
