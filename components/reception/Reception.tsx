import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { wedding } from "@/data/wedding";

import {
  PartyPopper,
  Clock3,
  MapPin,
} from "lucide-react";

export default function Reception() {
  const {
    title,
    subtitle,
    venue,
    time,
    city,
    address,
  } = wedding.reception;

  return (
    <Section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      <InfoCard>
        <div className="flex flex-col items-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
            <PartyPopper
              size={40}
              className="text-[var(--gold)]"
            />
          </div>

          <h3 className="mt-8 font-serif text-3xl text-[var(--foreground)]">
            {venue}
          </h3>

          <div className="mt-10 space-y-6">

            <div className="flex items-center justify-center gap-3">
              <Clock3
                size={20}
                className="text-[var(--gold)]"
              />
              <span>{time}</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <MapPin
                size={20}
                className="text-[var(--gold)]"
              />
              <span>{city}</span>
            </div>

            <p className="max-w-lg text-center text-sm leading-7 text-gray-600">
              {address}
            </p>

          </div>

        </div>
      </InfoCard>
    </Section>
  );
}