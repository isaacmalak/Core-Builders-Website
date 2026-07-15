import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface GlobeProps {
  className?: string;
}

export function Globe({ className = "w-[300px]" }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dpr = window.devicePixelRatio || 1;

    // Track the canvas's actual rendered box size so the globe's internal
    // buffer/projection always matches it 1:1 — a mismatch here is what
    // makes cobe clip the sphere against its buffer edges (looks like a
    // right-angle slice cut out of the circle).
    let width = canvasRef.current.offsetWidth;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
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
        state.width = width * dpr;
        state.height = width * dpr;
      },
    });

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
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
      style={{ cursor: "grab", touchAction: "none" }}
      className={`z-10 aspect-square mx-auto ${className}`}
    />
  );
}
