type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <header className="mb-16 text-center">
      {/* Divisor superior */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <div className="h-px w-20 bg-[var(--gold)]/40"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--gold)]"></div>
        <div className="h-px w-20 bg-[var(--gold)]/40"></div>
      </div>

      {/* Título */}
      <h2 className="font-serif text-5xl text-[var(--foreground)]">
        {title}
      </h2>

      {/* Subtítulo */}
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground)]/70">
          {subtitle}
        </p>
      )}

      {/* Divisor inferior */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px w-20 bg-[var(--gold)]/40"></div>
        <div className="h-2 w-2 rounded-full bg-[var(--gold)]"></div>
        <div className="h-px w-20 bg-[var(--gold)]/40"></div>
      </div>
    </header>
  );
}