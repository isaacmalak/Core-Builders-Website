"use client";

import { Vanta } from "vanta-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
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
          waveAmplitude: 1.0,
        }}
      />
    </section>
  );
}

function LoadingHero() {
  return (
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
  );
}
