export default function HeroDivider() {
  return (
    <div className="my-8 flex items-center justify-center gap-4">
      <div className="h-px w-20 bg-[var(--gold)] opacity-50"></div>

      <div className="h-2 w-2 rotate-45 border border-[var(--gold)]"></div>

      <div className="h-px w-20 bg-[var(--gold)] opacity-50"></div>
    </div>
  );
}