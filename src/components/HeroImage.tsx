import Image from "next/image";

export default function HeroImage() {
  return (
    <section className="flex justify-center mt-6 relative">
      <div className="w-full max-w-5xl px-4 text-center">
        <Image src="/hero-section/hero-banner.webp" alt="Hero" width={800} height={400} className="mx-auto" />
      </div>
    </section>
  );
}
