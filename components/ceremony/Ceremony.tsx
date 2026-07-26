import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import InfoItem from "@/components/ui/InfoItem";
import { wedding } from "@/data/wedding";

import {
  Church,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

export default function Ceremony() {
  const {
    title,
    subtitle,
    church,
    date,
    time,
    city,
  } = wedding.ceremony;

  return (
    <Section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      <InfoCard>
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
            <Church
              size={40}
              className="text-[var(--gold)]"
            />
          </div>

          <h3 className="mt-8 font-serif text-3xl text-[var(--foreground)]">
            {church}
          </h3>

          <div className="mt-10 space-y-6">
            <InfoItem
              icon={CalendarDays}
              text={date}
            />

            <InfoItem
              icon={Clock3}
              text={time}
            />

            <InfoItem
              icon={MapPin}
              text={city}
            />
          </div>
        </div>
      </InfoCard>
    </Section>
  );
}