import IntoSection from "@/components/IntoSection";
import HeroSection from "@/components/herosection/HeroSection";
import Image from "next/image";

import midImg from "@/public/images/mid_image.png";
import TeamSection from "@/components/teamsection/TeamSection";
import MetricSection from "@/components/metricsection/MetricSection";
import ContactSection from "@/components/contactsection/ContactSection";

export default function Home() {
  return (
    // landing page
    <main className="min-h-screen text-var-black">
      <HeroSection />
      <IntoSection />
      <section className="h-[200px] sm:h-[280px] lg:h-[430px] 2xl:h-[630px] px-[4%] lg:px-[100px]">
        <div className="container h-full mx-auto relative ">
          <Image src={midImg} alt="mid-img" fill />
        </div>
      </section>
      <TeamSection />
      <MetricSection />
      <ContactSection />
    </main>
  );
}
