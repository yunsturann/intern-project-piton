import Image from "next/image";

import HeroSection from "@/components/herosection/HeroSection";
import IntoSection from "@/components/IntoSection/IntoSection";
import midImg from "@/public/images/mid_image.png";
import TeamSection from "@/components/teamsection/TeamSection";
import MetricSection from "@/components/metricsection/MetricSection";
import ContactSection from "@/components/contactsection/ContactSection";

// Daha az Tailwind css yazarak yapılabilirdi fakat tasarımda verilen pxlere uyumlu yapmaya çalıştım
// Bu yüzden her componentte bir kaç tailwind kodu fazla yazıldı.

export default function Home() {
  return (
    // landing page
    <main className="min-h-screen text-var-black">
      <HeroSection />
      <IntoSection />
      <section className="h-[200px] sm:h-[280px] lg:h-[430px] 2xl:h-[630px] px-[4%] lg:px-[100px]">
        <div className="container h-full relative ">
          <Image src={midImg} alt="mid-img" fill />
        </div>
      </section>
      <TeamSection />
      <MetricSection />
      <ContactSection />
    </main>
  );
}
