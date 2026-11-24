"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const codeLines = [
  { w: "78%", color: "bg-red" },
  { w: "54%", color: "bg-ink/70" },
  { w: "88%", color: "bg-[#128C7E]" },
  { w: "42%", color: "bg-ink/60" },
  { w: "66%", color: "bg-red" },
  { w: "34%", color: "bg-ink/75" },
];

const bars = [32, 48, 38, 62, 54, 78, 70, 92];

export default function DeveloperScene() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.8, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div className="relative h-full w-full overflow-hidden bg-paper">
      {/* Cercle rouge */}
      <motion.div
        className="absolute right-[3%] top-[5%] aspect-square w-[78%] rounded-full bg-red"
        initial={{ scale: reduce ? 1 : 0.35, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduce ? 0 : 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      />

      {/* Photo du poste de travail */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[74%]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 32%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 32%, black 100%)",
        }}
        initial={{ opacity: 0, y: reduce ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/images/hero-code.jpg"
          alt="Poste de travail avec du code sur l'écran de l'ordinateur"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Badge live */}
      <motion.div
        {...enter(0.75)}
        className="absolute left-[6%] top-[7%] z-20 flex items-center gap-2 border border-ink bg-paper px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] shadow-[4px_4px_0_#0B0B0B]"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red" aria-hidden="true" />
        En direct
      </motion.div>

      {/* Fenêtre de code flottante */}
      <motion.div
        {...enter(0.9)}
        className="absolute left-[5%] top-[21%] z-20 w-[50%] min-w-[190px] rounded-lg border border-ink/25 bg-white/95 p-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] backdrop-blur-sm"
      >
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
          <span className="ml-1.5 font-mono text-[6px] text-[#5E5A53]">probleme-regle.ts</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {codeLines.map((l, i) => (
            <motion.span
              key={i}
              className={`block h-[7px] origin-left rounded-full ${l.color}`}
              style={{ width: l.w }}
              initial={{ scaleX: reduce ? 1 : 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.1 + i * 0.09 }}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 border-t border-ink/10 pt-1.5 text-[6px] font-semibold uppercase tracking-wider text-[#128C7E]">
          <span className="h-1 w-1 rounded-full bg-[#128C7E]" aria-hidden="true" />
          Automatisation active
        </div>
      </motion.div>

      {/* Carte de résultats */}
      <motion.div
        {...enter(1.05)}
        className="absolute bottom-[7%] right-[5%] z-20 w-[40%] min-w-[150px] rotate-3 rounded-lg border border-ink bg-paper p-2.5 shadow-[6px_6px_0_#0B0B0B]"
      >
        <span className="block text-[6px] font-bold uppercase tracking-[0.16em] text-[#5E5A53]">
          Résultats en direct
        </span>
        <span className="font-display text-[28px] leading-none">+38%</span>
        <div className="mt-1.5 flex h-6 items-end gap-[3px]">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 rounded-t-[1px] ${i > 5 ? "bg-red" : "bg-ink/20"}`}
              initial={{ scaleY: reduce ? 1 : 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 1.2 + i * 0.05 }}
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
