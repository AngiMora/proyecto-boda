import { wedding } from "@/data/wedding";

export default function CoupleNames() {
  return (
    <div className="mt-10 text-center">

      <h3 className="font-serif text-6xl font-light leading-none text-[var(--foreground)]">
        {wedding.couple.bride.firstName}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.45em] text-[var(--foreground)]/70">
        {wedding.couple.bride.lastName}
      </p>

      <div className="my-10 flex items-center justify-center gap-4">
        <div className="h-px w-14 bg-[var(--gold)]/40" />
        <span className="text-[var(--gold)] text-lg">♥</span>
        <div className="h-px w-14 bg-[var(--gold)]/40" />
      </div>

      <h3 className="font-serif text-6xl font-light leading-none text-[var(--foreground)]">
        {wedding.couple.groom.firstName}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.45em] text-[var(--foreground)]/70">
        {wedding.couple.groom.lastName}
      </p>

    </div>
  );
}