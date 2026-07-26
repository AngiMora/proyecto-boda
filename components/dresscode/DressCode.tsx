import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { wedding } from "@/data/wedding";

import {
  UserRound,
  Shirt,
} from "lucide-react";

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

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
              <UserRound
                size={40}
                className="text-[var(--gold)]"
              />
            </div>

            <h3 className="mt-8 font-serif text-3xl">
              Hombres
            </h3>

            <p className="mt-4 text-xl text-gray-600">
              {men}
            </p>

          </div>
        </InfoCard>

        <InfoCard>
          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
              <Shirt
                size={40}
                className="text-[var(--gold)]"
              />
            </div>

            <h3 className="mt-8 font-serif text-3xl">
              Mujeres
            </h3>

            <p className="mt-4 text-xl text-gray-600">
              {women}
            </p>

          </div>
        </InfoCard>

      </div>
    </Section>
  );
}