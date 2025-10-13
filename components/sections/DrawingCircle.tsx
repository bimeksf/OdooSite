"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper na normalizaci progressu (0..1) z `progress` (0..1) nebo `percent` (0..100)
function normalizeProgress(progress?: number, percent?: number) {
  let v = 1;
  if (typeof progress === "number") v = progress;
  if (typeof percent === "number") v = percent / 100;
  return Math.max(0, Math.min(1, v));
}

/**
 * Varianta A (doporučená): SVG + Framer Motion
 * - "kreslí" čáru po obvodu. `percent` určuje, do jaké části se má vykreslit (0..100).
 */
export function DrawingCircle({
  size = 256,
  stroke = 10,
  color = "#111827",
  bg = "#e5e7eb",
  duration = 1.4,
  delay = 0,
  clockwise = true,
  progress,
  percent,
  animateOnView = true,
  children,
}: {
  size?: number;
  stroke?: number;
  color?: string;
  bg?: string;
  duration?: number;
  delay?: number;
  clockwise?: boolean; // false = proti směru hodin
  progress?: number; // 0..1
  percent?: number; // 0..100
  animateOnView?: boolean;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const center = size / 2;
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const target = normalizeProgress(progress, percent);

  return (
    <div
      style={{ width: size, height: size }}
      className="relative grid place-items-center"
    >
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={clockwise ? "" : "-scale-x-100"}
      >
        {/* stopa v pozadí */}
        <circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke={bg}
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* kreslený tah do procent */}
        <motion.circle
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ pathLength: animateOnView ? 0 : target, opacity: 1 }}
          animate={
            animateOnView
              ? inView
                ? { pathLength: target }
                : {}
              : { pathLength: target }
          }
          transition={{ duration, ease: "easeInOut", delay }}
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  );
}
