export default function HeroButton() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <button className="group rounded-full border border-[var(--gold)] px-8 py-3 text-sm uppercase tracking-[0.3em] text-[var(--gold)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-white">
        Descubrir la invitación
      </button>

      <span className="mt-6 text-2xl text-[var(--gold)] animate-bounce">
        ↓
      </span>
    </div>
  );
}