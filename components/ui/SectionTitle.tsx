type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <div className="flex items-center justify-center gap-4 mb-6">

        <div className="w-16 h-px bg-[var(--gold)]" />

        <span className="text-[var(--gold)] text-xl">
          ✦
        </span>

        <div className="w-16 h-px bg-[var(--gold)]" />

      </div>

      <h2 className="font-title text-5xl text-[var(--primary)]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-[var(--secondary)]">
          {subtitle}
        </p>
      )}

    </div>
  );
}