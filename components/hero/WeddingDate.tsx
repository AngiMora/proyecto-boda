import { wedding } from "@/data/wedding";

export default function WeddingDate() {
  return (
    <div className="mt-12 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-[var(--gold)]">
        {wedding.wedding.day} &nbsp; • &nbsp;
        {wedding.wedding.month} &nbsp; • &nbsp;
        {wedding.wedding.year}
      </p>
    </div>
  );
}