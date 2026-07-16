"use client";

import { Vanta } from "vanta-react";
import { Smartphone, Laptop } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <Vanta
        effect="cells"
        loadingComponent={<LoadingHero />}
        className="absolute"
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
      <div className="flex flex-col z-10 justify-center items-center py-[100px] md:py-[200px] lg:py-0 ">
        <h1 className=" text-3xl lg:text-5xl font-bold text-white leading-tight text-center">
          Welcome to <br />
          <span className="pl-4">Link </span>
          <span className="italic backdrop-blur-lg px-4 py-1 rounded-xl font-[Playfair_Display]">
            Design
          </span>{" "}
          Studio
        </h1>
        <h2 className=" md:px-0 px-10 text-2xl lg:text-5xl text-white  my-6 text-center leading-tight font-[Playfair_Display] tracking-wide ">
          Websites and apps that actually convert
        </h2>
        <Link href="/contact" className="flex items-center gap-2">
          <Button
            className="md:text-3xl md:py-8 md:px-4 bg-backdrop backdrop-blur-lg rounded-3xl hover:bg-black/80 transition-colors duration-300 text-white font-bold"
            variant={"default"}
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
