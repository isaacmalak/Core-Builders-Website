"use client";

import { Vanta } from "vanta-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden ">
      <Vanta
        effect="cells"
        loadingComponent={<LoadingHero />}
        className="h-full w-full absolute top-0 left-0 z-0"
        options={{
          backgroundColor: 0x000000,
          size: 1.5,
          color1: 0x19595,
          color2: 0x989898,
          spacing: 20.0,
          showLines: true,
          waveSpeed: 1.0,
          waveAmplitude: 3.0,
        }}
      />
      <div className="grid grid-cols-2 px-5  z-19 w-full">
        <div className="flex flex-col justify-center items-start gap-5 z-10 ">
          <h1
            className={`text-6xl font-bold text-white  leading-tight font-[family-name:var(--font-space-grotesk)] text-start `}
          >
            Welcome to <br />
            Link{" "}
            <span className="font-[family-name:var(--font-playfair-display)] italic bg-cyan-400/30 text-white px-2 rounded-xl ">
              Design
            </span>{" "}
            Studio
          </h1>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <p className="text-white text-lg ">Link your business to the future</p>
      </div>
    </section>
  );
}

function LoadingHero() {
  return (
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
  );
}
