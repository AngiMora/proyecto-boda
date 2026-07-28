"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

export default function WelcomeScreen({ children }: Props) {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[var(--background)]">

      {/* Marco */}
      <div className="absolute inset-6 rounded-[32px] border border-[var(--gold)]/20 pointer-events-none" />

      {/* Fondo botánico 1 */}
      <Image
        src="/images/gallery/botanical-corners.png"
        alt=""
        fill
        priority
        className="pointer-events-none select-none object-cover opacity-60"
      />

      {/* Fondo botánico 2 */}
      <Image
        src="/images/gallery/botanical-overlay.png"
        alt=""
        fill
        priority
        className="pointer-events-none select-none object-cover opacity-60"
      />

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

      <div className="relative max-w-xl px-8 text-center">

        <p className="font-title text-5xl tracking-[0.12em] text-[var(--gold)]">
          Angi & Julián
        </p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-[var(--gold)]/40" />
          <span className="text-[var(--gold)] text-lg">♥</span>
          <div className="h-px w-14 bg-[var(--gold)]/40" />
        </div>

        <h1 className="mt-8 font-title text-4xl leading-tight text-[var(--primary)]">
          El comienzo de
          <br />
          nuestro para siempre
        </h1>

        <p className="mt-8 text-lg leading-8 text-[var(--secondary)]">
          Nos haría muy felices compartir contigo uno de los días más importantes de nuestras vidas.
        </p>

        <button
          onClick={() => setOpened(true)}
          className="mt-14 rounded-full border border-[var(--gold)] bg-white/40 px-10 py-4 text-sm uppercase tracking-[0.25em] text-[var(--primary)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-[var(--gold)] hover:text-white hover:shadow-lg"
        >
          Abrir invitación
        </button>

        <div className="mt-10 text-[var(--gold)]/60 text-xl">
          ❦
        </div>

      </div>
    </div>
  );
}