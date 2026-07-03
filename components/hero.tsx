"use client";

import { Vanta } from "vanta-react";
import { Smartphone, Laptop } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Vanta
        effect="cells"
        loadingComponent={<LoadingHero />}
        className="absolute "
        options={{
          backgroundColor: 0x000000,
          size: 1.5,
          color1: 0x19595,
          color2: 0x989898,
          spacing: 20,
          showLines: true,
          waveSpeed: 1,
          waveAmplitude: 3,
        }}
      />
      <div className="flex flex-col z-10 justify-center items-center ">
        <h1 className="text-5xl font-bold text-white leading-tight text-center">
          Welcome to <br />
          Link{" "}
          <span className="italic bg-cyan-400/30 px-2 rounded-xl font-[Playfair_Display]">
            Design
          </span>{" "}
          Studio
        </h1>
        <h2 className="text-5xl text-white  my-6 text-center leading-tight font-[Playfair_Display] tracking-wide ">
          Websites and apps that actually convert
        </h2>
        <Link href="/contact" className="flex items-center gap-2">
          <Button
            className="text-3xl py-6  text-[#00FFFF]/50"
            variant={"ghost"}
          >
            Meet with us
          </Button>
        </Link>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
          <p className=" text-white text-lg">
            Link your business with the future
          </p>
        </div>
      </div>
    </section>
  );
}

function LoadingHero() {
  return (
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
  );
}
