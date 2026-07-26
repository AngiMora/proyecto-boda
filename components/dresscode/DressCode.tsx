import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { Shirt, PersonStanding } from "lucide-react";
import { wedding } from "@/data/wedding";

export default function DressCode() {
  const {
    title,
    subtitle,
    men,
    women,
  } = wedding.dressCode;

  return (
    <Section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      <div className="grid gap-8 md:grid-cols-2">

        <InfoCard>
          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/20">
              <Shirt
                size={42}
                className="text-[var(--gold)]"
              />
            </div>

            <h3 className="mt-6 font-serif text-3xl">
              Caballeros
            </h3>

            <p className="mt-3 text-lg text-[var(--secondary)]">
              {men}
            </p>

          </div>
        </InfoCard>

        <InfoCard>
          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/20">
              <PersonStanding
                size={42}
                className="text-[var(--gold)]"
              />
            </div>

            <h3 className="mt-6 font-serif text-3xl">
              Damas
            </h3>

            <p className="mt-3 text-lg text-[var(--secondary)]">
              {women}
            </p>

          </div>
        </InfoCard>

      </div>
    </Section>
  );
}