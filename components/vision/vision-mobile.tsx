import { Globe } from "../hero/globe";

export function VisionMobile() {
  return (
    <section className="flex md:hidden w-full flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-wider">Our Vision</h1>

      <Globe className="w-[320px]" />

      <p className="text-black leading-wide text-base">
        We believe every business—whether it's a startup, restaurant, clinic,
        or enterprise—deserves technology that helps it grow, not software
        that slows it down. Our vision is to make professional digital
        solutions accessible to businesses across Egypt by combining software
        development, design, and digital marketing into one seamless
        experience.
      </p>
    </section>
  );
}
