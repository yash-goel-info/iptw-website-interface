import { useState } from "react";
import { cn } from "../utils/cn";

/** Vector recreation of the Ideal Place to Work™ Certified logo (fallback). */
export function LogoSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} role="img" aria-label="Ideal Place to Work Certified">
      {/* infinity dots */}
      <g fill="none" stroke="#253c8f" strokeWidth="13">
        <ellipse cx="168" cy="58" rx="24" ry="36" transform="skewX(-12)" />
        <ellipse cx="226" cy="58" rx="24" ry="36" transform="skewX(-12)" />
      </g>
      {/* stylised i / 1 stem */}
      <path
        d="M112 168 C 128 132 176 116 214 124 L 138 470 L 70 470 L 138 196 C 128 186 118 178 112 168 Z"
        fill="#253c8f"
      />
      <g fontFamily="'Plus Jakarta Sans', Arial Black, sans-serif" fontWeight="800" fill="#253c8f">
        <text x="176" y="222" fontSize="66" letterSpacing="-1">IDEAL</text>
        <text x="160" y="296" fontSize="66" letterSpacing="-1">PLACE</text>
        <text x="146" y="370" fontSize="66" letterSpacing="-1">T</text>
        <text x="130" y="444" fontSize="66" letterSpacing="-1">W</text>
        <text x="266" y="444" fontSize="66" letterSpacing="-1">RK</text>
      </g>
      {/* red infinity "8" in TO */}
      <g fill="none" stroke="#be2026" strokeWidth="9">
        <circle cx="210" cy="325" r="20" />
        <circle cx="206" cy="360" r="20" />
      </g>
      {/* red O in WORK */}
      <circle cx="234" cy="420" r="23" fill="none" stroke="#be2026" strokeWidth="10" />
      <circle cx="234" cy="420" r="8" fill="#be2026" />
      {/* certified ribbon */}
      <path d="M92 458 L 352 458 L 340 496 L 80 496 Z" fill="#be2026" />
      <text
        x="216"
        y="487"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
        fontWeight="800"
        fontSize="28"
        letterSpacing="3"
        fill="#fff"
      >
        CERTIFIED
      </text>
    </svg>
  );
}

export default function Logo({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <LogoSvg className={cn("h-full w-auto", className)} />;
  return (
    <img
      src="/logo.png"
      alt="Ideal Place to Work Certified"
      className={cn("h-full w-auto object-contain", className)}
      onError={() => setFailed(true)}
    />
  );
}
