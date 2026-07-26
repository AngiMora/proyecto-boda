import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto w-full max-w-3xl">
        {children}
      </div>
    </section>
  );
}