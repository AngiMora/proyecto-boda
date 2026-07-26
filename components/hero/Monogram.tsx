import { wedding } from "@/data/wedding";

export default function Monogram() {
  return (
    <div className="text-center">
      <h1 className="font-serif text-6xl font-light tracking-[0.25em] text-[var(--gold)]">
  {wedding.hero.monogram}
      </h1>
    </div>
  );
}