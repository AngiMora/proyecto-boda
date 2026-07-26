import { wedding } from "@/data/wedding";

export default function HeroMessage() {
  return (
    <div className="mt-10 text-center">
      <p className="mx-auto max-w-sm text-base leading-8 text-[var(--foreground)]/80">
        {wedding.hero.message}
      </p>
    </div>
  );
}