import SectionTitle from "./ui/SectionTitle";

export default function Countdown() {
  return (
    <section className="bg-[var(--background)] py-32 px-6">

      <SectionTitle
        title="El gran día se acerca"
        subtitle="Cada día nos acerca un poco más al momento de comenzar esta nueva historia juntos."
      />

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {[
          { value: "128", label: "Días" },
          { value: "08", label: "Horas" },
          { value: "32", label: "Minutos" },
          { value: "15", label: "Segundos" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-3xl shadow-sm py-10 px-6 border border-[#EFE7DA]"
          >
            <h3 className="font-title text-6xl text-[var(--primary)]">
              {item.value}
            </h3>

            <p className="mt-4 uppercase tracking-[0.3em] text-xs text-[var(--secondary)]">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}