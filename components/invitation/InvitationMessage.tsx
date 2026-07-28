import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function InvitationMessage() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">

      {/* Decoración superior izquierda */}
      <Image
        src="/images/gallery/botanical-corners.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          -top-25
          -left-25
          opacity-60
          pointer-events-none
          select-none
        "
      />

      {/* Decoración inferior derecha */}
      <Image
        src="/images/gallery/botanical-corners.png"
        alt=""
        width={300}
        height={300}
        className="
          absolute
          -bottom-25
          -right-25
          opacity-60
          pointer-events-none
          select-none
        "
      />

      <div className="relative z-10 mx-auto max-w-2xl">

        <SectionTitle
          title="Nos haría muy felices contar con tu presencia"
          subtitle="Comparte con nosotros uno de los días más importantes de nuestras vidas."
        />

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-[var(--gold)]/40" />
          <span className="text-[var(--gold)] text-lg">✦</span>
          <div className="h-px w-14 bg-[var(--gold)]/40" />
        </div>

        <div className="mx-auto mt-9 max-w-3xl text-center">

          <p className="text-xl leading-9 text-[var(--secondary)]">
            Será un honor celebrar junto a ti el comienzo de esta nueva etapa y crear
            juntos un recuerdo inolvidable.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[var(--gold)]/40" />
            <span className="text-[var(--gold)] text-lg">✦</span>
            <div className="h-px w-14 bg-[var(--gold)]/40" />
          </div>

        </div>

      </div>

    </section>
  );
}