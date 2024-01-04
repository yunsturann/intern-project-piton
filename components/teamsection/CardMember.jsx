import React from "react";
import Image from "next/image";

const CardMember = ({ name, role, img }) => {
  return (
    <li className="flex flex-col justify-between pt-2 lg:pt-4 pb-4 lg:pb-8 px-[20px] h-[25rem] w-[19rem] xl:h-[560px] xl:w-[433px] bg-var-white card-shadow">
      {/*Card Image */}
      <div className="relative h-[67%]">
        <Image src={img} alt={name} className="h-full w-full" loading="lazy" />
      </div>
      {/*Card Content */}
      <div className="space-y-2 xl:space-y-4">
        <h3 className="text-xl xl:text-[34px] font-bold">{name}</h3>
        <p className="text-lg xl:text-[24px] opacity-50">{role}</p>
      </div>
    </li>
  );
};

export default CardMember;
