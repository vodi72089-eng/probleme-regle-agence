"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const bars = [28, 40, 34, 52, 46, 66, 58, 78, 72, 90, 84, 100];

export default function ImprovementStory({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setStage(3);
      return;
    }
    const t1 = window.setTimeout(() => setStage(1), 250);
    const t2 = window.setTimeout(() => setStage(2), 1150);
    const t3 = window.setTimeout(() => setStage(3), 2100);
    return () => [t1, t2, t3].forEach(window.clearTimeout);
  }, [inView, reduce]);

  useEffect(() => {
    if (stage < 3) return;
    if (reduce) {
      setCount(48290);
      return;
    }
    const controls = animate(0, 48290, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [stage, reduce]);

  const shown = (n: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 14 },
    animate: {
      opacity: stage >= n ? 1 : 0,
      y: stage >= n ? 0 : reduce ? 0 : 14,
    },
    transition: { duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <div
      ref={ref}
      className={`w-full max-w-[400px] rounded-lg border border-ink/15 bg-white p-3 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.5)] ${className}`}
      aria-label="Animation : demande du client, site amélioré, chiffres en hausse"
    >
      <motion.div {...shown(1)} className="flex items-start gap-2">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red text-[8px] font-bold text-ink">
          01
        </span>
        <div className="min-w-0 flex-1">
          <span className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#5E5A53]">
            Le client demande
          </span>
          <p className="mt-0.5 rounded-md bg-[#F2EFE9] px-2 py-1.5 text-[8px] leading-snug">
            « Les clients ne voient pas mes produits. »
          </p>
        </div>
      </motion.div>

      <div className="my-2 flex items-center gap-2">
        <motion.span
          className="h-px flex-1 origin-left bg-red"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={{ scaleX: stage >= 2 ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 0.7 }}
        />
        <motion.span {...shown(2)} className="text-[9px] text-red" aria-hidden="true">
          ↓
        </motion.span>
      </div>

      <motion.div {...shown(2)} className="flex items-start gap-2">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-[8px] font-bold text-paper">
          ✓
        </span>
        <div>
          <span className="text-[6px] font-bold uppercase tracking-[0.18em] text-[#5E5A53]">
            On améliore le site
          </span>
          <p className="mt-0.5 text-[8px] font-semibold">Refonte • SEO • Mise en ligne</p>
        </div>
      </motion.div>

      <motion.div {...shown(3)} className="mt-2 border-t border-ink/10 pt-2">
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-[6px] font-bold uppercase tracking-[0.18em] text-[#5E5A53]">
              Résultat • Chiffre d&apos;affaires
            </span>
            <span className="font-display text-[24px] leading-none">
              {count.toLocaleString("fr-FR")} $
            </span>
          </div>
          <span className="rounded-full bg-[#E7F8EC] px-1.5 py-0.5 text-[6px] font-bold text-[#16803C]">
            +38%
          </span>
        </div>
        <div className="mt-1.5 flex h-8 items-end gap-1">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 origin-bottom rounded-t-[1px] ${i > 8 ? "bg-red" : "bg-ink/20"}`}
              initial={{ scaleY: reduce ? 1 : 0 }}
              animate={{ scaleY: stage >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.06 }}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
