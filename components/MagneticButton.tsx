"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "red" | "black" | "outline";
  pulse?: boolean;
  external?: boolean;
};

const tones = {
  red: "bg-red text-ink hover:bg-ink hover:text-paper",
  black: "bg-ink text-paper hover:bg-red hover:text-white",
  outline: "border border-ink bg-transparent text-ink hover:bg-red hover:border-red hover:text-white",
};

export default function MagneticButton({
  children,
  href,
  className = "",
  tone = "black",
  pulse = false,
  external = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.22);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${tones[tone]} ${pulse ? "cta-pulse" : ""} ${className}`}
    >
      {children}
    </motion.a>
  );
}
