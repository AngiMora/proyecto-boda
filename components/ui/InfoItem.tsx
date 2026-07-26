import { LucideIcon } from "lucide-react";

type InfoItemProps = {
  icon: LucideIcon;
  text: string;
};

export default function InfoItem({
  icon: Icon,
  text,
}: InfoItemProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Icon
        size={20}
        className="text-[var(--gold)]"
      />
      <span className="text-lg text-[var(--foreground)]">
        {text}
      </span>
    </div>
  );
}