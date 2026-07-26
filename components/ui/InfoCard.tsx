import { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
};

export default function InfoCard({
  children,
}: InfoCardProps) {
  return (
    <div className="rounded-[2rem] border border-[var(--gold)]/20 bg-white p-10 shadow-sm">
      {children}
    </div>
  );
}