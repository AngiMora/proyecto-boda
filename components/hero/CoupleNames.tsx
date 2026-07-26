import { wedding } from "@/data/wedding";

export default function CoupleNames() {
  return (
    <div className="mt-8 text-center">
      <h3 className="font-serif text-5xl text-[var(--foreground)] leading-tight">
        {wedding.couple.bride.firstName}
      </h3>

      <p className="mt-1 text-lg tracking-[0.25em] uppercase text-[var(--foreground)]">
        {wedding.couple.bride.lastName}
      </p>

      <div className="my-8 text-3xl text-[var(--gold)]">
        ♡
      </div>

      <h3 className="font-serif text-5xl text-[var(--foreground)] leading-tight">
        {wedding.couple.groom.firstName}
      </h3>

      <p className="mt-1 text-lg tracking-[0.25em] uppercase text-[var(--foreground)]">
        {wedding.couple.groom.lastName}
      </p>
    </div>
  );
}