import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { wedding } from "@/data/wedding";

import {
  MessageCircle,
} from "lucide-react";

export default function RSVP() {
  const {
    title,
    subtitle,
    phone,
    deadline,
    message,
  } = wedding.rsvp;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section>
      <SectionHeader
        title={title}
        subtitle={subtitle}
      />

      <InfoCard>
        <div className="flex flex-col items-center text-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--gold)]/30">
            <MessageCircle
              size={40}
              className="text-[var(--gold)]"
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Agradecemos confirmar tu asistencia antes del
            <strong> {deadline}</strong>.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 rounded-full border border-[var(--gold)] bg-[var(--gold)] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Confirmar por WhatsApp
          </a>

        </div>
      </InfoCard>
    </Section>
  );
}