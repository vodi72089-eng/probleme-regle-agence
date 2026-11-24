"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import MagneticButton from "./MagneticButton";
import InkArt from "./visuals/InkArt";

const words = ["LET'S", "FIX", "IT", "TOGETHER"];

export default function FinalCTA() {
  const inkRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !inkRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(inkRef.current, {
        x: 18,
        y: -14,
        rotation: 6,
        scale: 1.07,
        duration: 13,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, inkRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="contact" className="border-b border-ink bg-paper" aria-labelledby="cta-title">
      <div className="mx-auto grid max-w-page lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-9 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em]"
          >
            <span>04 / Contact</span>
            <span className="h-px w-10 bg-ink" aria-hidden="true" />
          </motion.div>

          <motion.h2
            id="cta-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: reduce ? 0 : 0.13, delayChildren: 0.05 }}
            className="font-display text-[clamp(3.2rem,8.4vw,8.4rem)] uppercase leading-[0.84] tracking-[-0.025em]"
          >
            {words.map((word) => (
              <span key={word} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 },
                    visible: { y: "0%", opacity: 1 },
                  }}
                  transition={{
                    duration: reduce ? 0 : 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 max-w-lg text-[12px] font-semibold uppercase leading-[1.9] tracking-[0.1em] sm:text-[13px]"
          >
            Vous avez un projet ? Parlons-en — nous sommes prêts à résoudre votre problème.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-7"
          >
            <MagneticButton
              href="https://wa.me/243835113424?text=Bonjour%20PROBL%C3%88ME%20R%C3%89GL%C3%89%2C%20j%27ai%20un%20projet%20%C3%A0%20discuter."
              tone="black"
              external
            >
              Contact us <span aria-hidden="true">→</span>
            </MagneticButton>
            <a
              href="tel:+243835113424"
              className="font-display text-[clamp(1.3rem,2.6vw,2rem)] tracking-tight transition-colors hover:text-red"
            >
              +243 835 113 424
            </a>
          </motion.div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden border-t border-ink lg:min-h-[620px] lg:border-l lg:border-t-0">
          <div
            ref={inkRef}
            className="absolute inset-[-8%] flex items-center justify-center will-transform"
          >
            <InkArt className="h-full w-full" />
          </div>
          <span className="absolute left-6 top-6 text-[9px] font-bold uppercase tracking-[0.2em] text-ink/70">
            Créativité en mouvement
          </span>
        </div>
      </div>
    </section>
  );
}
