import Monogram from "./Monogram";
import HeroTitle from "./HeroTitle";
import CoupleNames from "./CoupleNames";
import WeddingDate from "./WeddingDate";
import HeroMessage from "./HeroMessage";
import DecorativeFlowers from "./DecorativeFlowers";
import HeroDivider from "./HeroDivider";
import FadeInSection from "../ui/FadeInSection";
import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section className="hero-background relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <DecorativeFlowers />

      {/* textura muy sutil */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/paper-texture.png')]" />

      {/* marco */}
      <div className="absolute inset-5 rounded-[36px] border border-[#d7b97a]/40 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">

        <FadeInSection>
          <HeroDivider />
        </FadeInSection>

        <FadeInSection>
          <Monogram />
        </FadeInSection>

        <FadeInSection>
          <HeroTitle />
        </FadeInSection>

        <FadeInSection>
          <CoupleNames />
        </FadeInSection>

        <FadeInSection>
          <WeddingDate />
        </FadeInSection>

        <FadeInSection>
          <HeroMessage />
        </FadeInSection>

        <FadeInSection>
          <HeroButton />
        </FadeInSection>

        <div className="mt-12 flex items-center justify-center gap-3 text-[#b78c47] opacity-70">
          <div className="h-px w-20 bg-[#d7b97a]" />
          ♥
          <div className="h-px w-20 bg-[#d7b97a]" />
        </div>

      </div>
    </section>
  );
}