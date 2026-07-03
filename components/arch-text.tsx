"use client";

export function ArcText({
  text,
  radius = 300,
  side = "left", // "left" | "right" — controls arc direction
  className = "",
}: {
  text: string;
  radius?: number;
  side?: "left" | "right";
  className?: string;
}) {
  const size = radius * 2 + 40;
  const cx = size / 2;
  const cy = size / 2;

  // Arc path — top half of a circle, flipped depending on side
  const startAngle = side === "left" ? 200 : -20;
  const endAngle = side === "left" ? -20 : 200;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const startX = cx + radius * Math.cos(toRad(startAngle));
  const startY = cy - radius * Math.sin(toRad(startAngle));
  const endX = cx + radius * Math.cos(toRad(endAngle));
  const endY = cy - radius * Math.sin(toRad(endAngle));

  const pathId = `arc-path-${side}`;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className}>
      <defs>
        <path
          id={pathId}
          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
          fill="none"
        />
      </defs>
      <text className="fill-white text-sm">
        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
