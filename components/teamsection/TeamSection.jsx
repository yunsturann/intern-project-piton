import React from "react";
import { teamMembers } from "@/constants/data";
import CardMember from "./CardMember";

const TeamSection = () => {
  return (
    <section className="px-[6%] lg:px-[144px] py-20 lg:py-40 2xl:py-52">
      <div className="container">
        <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-[44px]">
          Meet the heroes behind the magic
        </h2>
        <ul className="flex flex-wrap justify-center gap-6 lg:gap-12 mt-12 lg:mt-24 ">
          {/*Cards*/}
          {teamMembers.map((item) => (
            <CardMember key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
