import React from "react";
import side_image from "@/public/images/side_image.png";
import Image from "next/image";
import Form from "./Form";

const ContactSection = () => {
  return (
    <section className="py-10 lg:py-40 px-[6%] lg:px-20">
      <div className="container flex justify-center 2xl:justify-between flex-wrap gap-x-[155px] gap-y-8">
        {/*Side Image */}
        <div className=" bg-var-yellow-avatar p-12 lg:pl-[140px] lg:pt-[160px] lg:pr-[104px] lg:pb-[75px]">
          <Image
            src={side_image}
            className=" w-[280px] h-[460px] lg:w-[300px] lg:h-[556px]"
            alt="side-img"
          />
        </div>
        {/*Form side*/}
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
