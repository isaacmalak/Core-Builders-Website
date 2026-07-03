import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export function Globe() {
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