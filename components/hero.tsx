"use client";
import { useEffect, useRef } from "react";
import { Vanta } from "vanta-react";
import createGlobe from "cobe";

function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dpr = window.devicePixelRatio || 1;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: 600 * dpr,
      height: 600 * dpr,
      phi: 0,
      theta: 0,
      dark: 1, // 0-1 range, 1 = dark ocean/land
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.4, 0.5],
      markerColor: [0, 0.9, 0.9],
      glowColor: [0.2, 0.5, 0.5],
      markers: [
        { location: [30.0444, 31.2357], size: 0.08 }, // Cairo, Egypt
      ],
      onRender: (state) => {
        // auto-rotate only when not being dragged
        if (pointerInteracting.current === null) {
          phiRef.current += 0.003;
        }
        state.phi = phiRef.current;
      },
    });

    return () => globe.destroy();
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  };

  const handlePointerUp = () => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerInteracting.current === null) return;
    const delta = e.clientX - pointerInteracting.current;
    pointerInteracting.current = e.clientX;
    phiRef.current += delta / 200;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (pointerInteracting.current === null || !e.touches[0]) return;
    const delta = e.touches[0].clientX - pointerInteracting.current;
    pointerInteracting.current = e.touches[0].clientX;
    phiRef.current += delta / 200;
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp}
      onPointerMove={handlePointerMove}
      onTouchStart={(e) => {
        if (e.touches[0]) pointerInteracting.current = e.touches[0].clientX;
      }}
      onTouchEnd={handlePointerUp}
      onTouchMove={handleTouchMove}
      style={{ width: 600, height: 600, cursor: "grab", touchAction: "none" }}
      className="absolute right-10 top-1/2 -translate-y-1/2 z-10"
    />
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
      <div className="relative z-10 grid grid-cols-2 w-full px-5">
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-6xl font-bold text-white leading-tight">
            Welcome to <br />
            Link{" "}
            <span className="italic bg-cyan-400/30 px-2 rounded-xl">
              Design
            </span>{" "}
            Studio
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Globe />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <p className="text-white text-lg">Link your business with the future</p>
      </div>
    </section>
  );
}

function LoadingHero() {
  return (
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin opacity-50" />
  );
}
