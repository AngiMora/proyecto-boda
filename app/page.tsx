import WelcomeScreen from "@/components/WelcomeScreen";
import Hero from "@/components/hero/Hero";
import Envelope from "@/components/invitation/Envelope";
import InvitationMessage from "@/components/invitation/InvitationMessage";
import Countdown from "@/components/Countdown";
import Ceremony from "@/components/ceremony/Ceremony";
import Reception from "@/components/reception/Reception";
import DressCode from "@/components/dresscode/DressCode";
import Gift from "@/components/gift/Gift";
import RSVP from "@/components/rsvp/RSVP";
import Closing from "@/components/closing/Closing";

export default function Home() {
  return (
    <WelcomeScreen>
      <Hero />
      <Envelope />
      <InvitationMessage />
      <Countdown />
      <Ceremony />
      <Reception />
      <DressCode />
      <Gift />
      <RSVP />
      <Closing />
    </WelcomeScreen>
  );
}