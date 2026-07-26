"use client";

import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function WelcomeScreen({ children }: Props) {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]">

      <div className="max-w-xl text-center px-8">

        <p className="font-title text-7xl text-[var(--gold)]">
          A & J
        </p>

        <div className="w-24 h-px bg-[var(--gold)] mx-auto my-10" />

        <h1 className="font-title text-5xl text-[var(--primary)] leading-tight">
          El comienzo de
          <br />
          nuestro para siempre
        </h1>

        <p className="mt-8 text-xl leading-8 text-[var(--secondary)]">
          Nos haría muy felices compartir contigo uno de los días más importantes de nuestras vidas.
        </p>

        <button
          onClick={() => setOpened(true)}
          className="mt-14 rounded-full border border-[var(--gold)] px-10 py-3 text-[var(--primary)] transition-all duration-500 hover:bg-[var(--gold)] hover:text-white"
        >
          Descubrir la invitación
        </button>

      </div>

    </div>
  );
}