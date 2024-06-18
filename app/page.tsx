import HeroLanding from "@/components/sections/hero-landing";
import Services from "@/components/sections/services";
import BentoGrid from "@/components/sections/bento-grid";
import { infos } from "@/config/landing";
import InfoLanding from "@/components/sections/info-landing";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <HeroLanding />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <Services />
      <Testimonials />
    </main>
  );
}
