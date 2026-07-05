"use client";
import { useEffect, useRef, useState } from "react";

const DARK_THRESHOLD = 0.8; // pixels lighter than this are skipped entirely

export function AsciiHands({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const cellSize = 4;
      const cols = Math.floor(container.clientWidth / cellSize);
      const aspect = img.height / img.width;
      const rows = Math.floor(cols * aspect); // removed the * 0.55 — no longer needed for circular dots

      // Supersample: render the source image into a properly smoothed offscreen canvas
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = cols;
      sampleCanvas.height = rows;
      const sampleCtx = sampleCanvas.getContext("2d");
      if (!sampleCtx) return;
      sampleCtx.imageSmoothingEnabled = true;
      sampleCtx.imageSmoothingQuality = "high";
      sampleCtx.drawImage(img, 0, 0, cols, rows);
      const data = sampleCtx.getImageData(0, 0, cols, rows).data;

      // Render at device pixel ratio for crisp dots on retina screens
      canvas.width = cols * cellSize * dpr;
      canvas.height = rows * cellSize * dpr;
      canvas.style.width = `${cols * cellSize}px`;
      canvas.style.height = `${rows * cellSize}px`;
      ctx.scale(dpr, dpr);

      const maxRadius = cellSize * 0.62;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / 3 / 255; // 0 dark → 1 light

          if (brightness >= DARK_THRESHOLD) continue; // skip light/white pixels entirely

          const darkness = 1 - brightness / DARK_THRESHOLD; // 0 → 1
          const radius = darkness * maxRadius;
          if (radius < 0.35) continue;

          const cx = x * cellSize + cellSize / 2;
          const cy = y * cellSize + cellSize / 2;

          // Use the image's real color, deepened toward black as darkness increases
          const mix = 0.55 + darkness * 0.45; // how much we pull toward pure black
          const dr = Math.floor(r * (1 - mix));
          const dg = Math.floor(g * (1 - mix));
          const db = Math.floor(b * (1 - mix));

          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${dr}, ${dg}, ${db})`;
          ctx.fill();
        }
      }

      setReady(true);
    };
  }, [src]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-auto transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
