import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function GsapTesting() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".stagger-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: .3,
          ease: "power3.out",
          repeat: -1,
          yoyo: true,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 gap-6 px-6 py-16 text-center"
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="stagger-item w-full max-w-2xl bg-gray-200 p-4 rounded-lg"
        >
          <h2 className="text-xl font-bold">Section {index + 1}</h2>
        </div>
      ))}
    </div>
  );
}