import { Globe } from "../hero/globe";

export function VisionDesktop() {
  return (
    <section className="hidden md:flex w-full lg:h-screen flex-col justify-center items-center">
      <div className="relative max-w-4xl mx-auto">
        {/* Invisible floated circle — text will wrap AROUND this */}
        <div
          className="float-left"
          style={{
            shapeOutside: "circle(50% at 50% 50%)",
            width: "420px",
            height: "400px",
          }}
        />

        {/* Normal flow text — wraps around the floated shape above */}
        <h1 className="text-5xl pt-5 font-extrabold tracking-wider">
          Our Vision
        </h1>
        <p className="text-black leading-wide text-lg mt-5">
          We believe every business—whether it's a startup, restaurant,
          clinic, or enterprise—deserves technology that helps it grow, not
          software that slows it down. Our vision is to make professional
          digital solutions accessible to businesses across Egypt by combining
          software development, design, and digital marketing into one
          seamless experience.
        </p>

        {/* Globe positioned absolutely on top of the invisible float shape */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] flex items-center justify-center">
          <Globe className="w-[400px]" />
        </div>
      </div>
    </section>
  );
}
