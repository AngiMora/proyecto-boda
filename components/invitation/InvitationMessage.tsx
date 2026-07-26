import SectionTitle from "../ui/SectionTitle";

export default function InvitationMessage() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-2xl">

        <SectionTitle
          title="Nos haría muy felices contar con tu presencia"
          subtitle="Con inmensa alegría queremos compartir contigo uno de los días más importantes de nuestras vidas."
        />
        <span className="block text-center text-xl text-[var(--gold)]">
        ✦
        </span>

        <div className="mx-auto mt-9 max-w-3xl text-center">

          <p className="text-xl leading-9 text-[var(--secondary)]">
            Será un honor celebrar junto a ti el comienzo de esta nueva etapa y crear
            juntos un recuerdo inolvidable.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-px w-24 bg-[var(--gold)]"></div>
          </div>

        </div>

      </div>
    </section>
  );
}