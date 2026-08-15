import Section from "@/components/ui/Section";
import { wedding } from "@/data/wedding";
import { Heart } from "lucide-react";

export default function Closing() {
  const { title, message } = wedding.closing;

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">

        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
            <Heart
              size={38}
              className="text-[var(--gold)]"
            />
          </div>
        </div>

        <h2 className="mt-10 font-serif text-5xl text-[var(--foreground)]">
          {title}
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-10 text-gray-600">
          {message}
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-[var(--gold)]/40" />
          <span className="text-[var(--gold)] text-lg">♥</span>
          <div className="h-px w-14 bg-[var(--gold)]/40" />
        </div>

        <div className="mt-16">
          <p className="font-serif text-3xl text-[var(--gold)]">
            Angi & Julián
          </p>

          <p className="mt-2 tracking-[0.35em] text-sm uppercase text-gray-500">
            05 · Diciembre · 2026
          </p>
        </div>

      </div>

{/* Ramas superiores */}
      <div className="absolute top-0 left-0 w-44 h-44 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 190C70 150 80 90 170 20"
            stroke="#B8924E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M75 120L55 100"
            stroke="#B8924E"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M120 75L145 50"
            stroke="#B8924E"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="145" cy="50" r="2" fill="#B8924E" />
          <circle cx="55" cy="100" r="2" fill="#B8924E" />
        </svg>
      </div>

      {/* Ramas inferiores */}
      <div className="absolute bottom-0 right-0 w-44 h-44 rotate-180 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 190C70 150 80 90 170 20"
            stroke="#B8924E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M75 120L55 100"
            stroke="#B8924E"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M120 75L145 50"
            stroke="#B8924E"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="145" cy="50" r="2" fill="#B8924E" />
          <circle cx="55" cy="100" r="2" fill="#B8924E" />
        </svg>
      </div>

    </Section>
  );
}