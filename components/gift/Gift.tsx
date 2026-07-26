import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { wedding } from "@/data/wedding";

import { Gift as GiftIcon } from "lucide-react";

export default function Gift() {
  const {
    title,
    subtitle,
  } = wedding.gift;

  return (
    <Section>
      <SectionHeader
        title={title}
      />

      <InfoCard>
        <div className="flex flex-col items-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
            <GiftIcon
              size={40}
              className="text-[var(--gold)]"
            />
          </div>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
            {subtitle}
          </p>

        </div>
      </InfoCard>
    </Section>
  );
}