"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NeuButton from "./NeuButton";
import DeveloperScene from "./visuals/DeveloperScene";

function AnimatedWord({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block whitespace-nowrap">
      {text.split("").map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: reduce ? 0 : 0.85,
              delay: reduce ? 0 : delay + i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative border-b border-ink bg-paper"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-page lg:grid-cols-[1.05fr_0.95fr]">
        {/* Colonne gauche */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-8 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.24em]"
          >
            <span>01 / 04</span>
            <span className="h-px w-12 bg-ink" aria-hidden="true" />
          </motion.div>

          <h1
            id="hero-title"
            className="font-display text-[clamp(3.6rem,10.5vw,10.5rem)] uppercase leading-[0.82] tracking-[-0.025em]"
          >
            <span className="block">
              <AnimatedWord text="SOLUTIONS" delay={0.22} />
            </span>
            <span className="block">
              <AnimatedWord text="EN ACTION" delay={0.45} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-[12px] font-semibold uppercase leading-[1.8] tracking-[0.1em] sm:text-[13px]"
          >
            On résout les problèmes. On livre des solutions qui marchent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <NeuButton href="#contact">
              Démarrer maintenant <span aria-hidden="true">↗</span>
            </NeuButton>
          </motion.div>
        </div>

        {/* Colonne droite — visuel */}
        <motion.div
          style={{ x, y }}
          className="relative min-h-[420px] border-t border-ink lg:min-h-[680px] lg:border-l lg:border-t-0"
        >
          <DeveloperScene />

          <motion.span
            initial={{ opacity: 0, rotate: -14, y: -12 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute right-[7%] top-5 z-10 font-script text-[clamp(2rem,4vw,3.4rem)] leading-none sm:top-8"
          >
            Create Bigger
          </motion.span>

        </motion.div>
      </div>
    </section>
  );
}
