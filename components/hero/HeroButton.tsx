export default function HeroButton() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <button
        className="
          group
          relative
          overflow-hidden
          rounded-full
          border
          border-[var(--gold)]
          bg-white/30
          px-10
          py-4
          text-[11px]
          uppercase
          tracking-[0.35em]
          text-[var(--gold)]
          backdrop-blur-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:bg-[var(--gold)]
          hover:text-white
          hover:shadow-[0_12px_30px_rgba(184,146,78,0.18)]
        "
      >
        Descubrir la invitación
      </button>

      <div className="mt-8 flex flex-col items-center text-[var(--gold)]/70">
        <span className="text-xs tracking-[0.4em]">DESLIZA</span>
        <span className="mt-2 text-lg animate-pulse">⌄</span>
      </div>
    </div>
  );
}