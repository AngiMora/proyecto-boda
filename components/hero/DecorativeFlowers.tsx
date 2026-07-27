import Image from "next/image";

export default function DecorativeFlowers() {
  return (
    <>
      {/* Primera ilustración */}
      <Image
        src="/images/gallery/botanical-all.png"
        alt=""
        fill
        priority
        className="pointer-events-none select-none object-cover opacity-70"
      />

    </>
  );
}