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

      <div className="relative z-10 mx-auto w-full max-w-xl text-center">
        <FadeInSection>
          <Monogram />
        </FadeInSection>

        <FadeInSection>
          <HeroDivider />
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
      </div>
    </section>
  );
}