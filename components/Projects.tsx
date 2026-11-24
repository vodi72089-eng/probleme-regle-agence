"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import LaptopMockup from "./visuals/LaptopMockup";
import PhoneMockup from "./visuals/PhoneMockup";
import ImprovementStory from "./visuals/ImprovementStory";
import type { ReactNode } from "react";

function ProjectCard({
  number,
  tag,
  title,
  subtitle,
  children,
  index,
}: {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden border border-ink/15 bg-[#E9E3D9]">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-full w-full items-center justify-center p-4 transition-transform duration-500 ease-out group-hover:scale-[1.08] sm:p-6"
        >
          {children}
        </motion.div>
        <span className="absolute left-3 top-3 text-[8px] font-bold uppercase tracking-[0.2em] text-ink/70">
          {tag}
        </span>
        <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-paper text-base transition-[transform,background-color,color] duration-300 group-hover:rotate-45 group-hover:border-red group-hover:bg-red group-hover:text-white">
          ↗
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3 border-t border-ink pt-3">
        <div>
          <span className="text-[9px] font-bold tracking-[0.2em] text-red">{number}</span>
          <h3 className="mt-1 font-black text-[17px] uppercase leading-none tracking-[-0.03em] sm:text-lg">
            {title}
          </h3>
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.08em] text-muted">{subtitle}</p>
        </div>
        <a
          href="#contact"
          className="self-end text-[9px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-red"
          aria-label={`Voir le projet ${number} ${title} ${subtitle}`}
        >
          Voir ↗
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-b border-ink bg-paper" aria-labelledby="projects-title">
      <span id="journal" className="block scroll-mt-24" aria-hidden="true" />
      <div className="mx-auto max-w-page px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-5 border-b border-ink pb-5">
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] font-bold tracking-[0.22em]">03</span>
            <h2
              id="projects-title"
              className="font-display text-[clamp(1.9rem,4vw,3.4rem)] uppercase leading-none tracking-[-0.01em]"
            >
              Selected Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]"
          >
            <span className="border-b border-ink pb-1 transition-[color,border-color] duration-200 group-hover:border-red group-hover:text-red">
              Voir tous les projets
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-9 grid gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <ProjectCard
            number="001"
            tag="SITE WEB"
            title="Site web"
            subtitle="Boutique en ligne"
            index={0}
          >
            <LaptopMockup />
          </ProjectCard>

          <ProjectCard
            number="002"
            tag="APP"
            title="App"
            subtitle="Application mobile"
            index={1}
          >
            <div className="relative w-[150px] sm:w-[170px]">
              <PhoneMockup variant="app" interactive />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-bold uppercase tracking-[0.14em] text-[#5E5A53]">
                Cochez • ajoutez • naviguez
              </span>
            </div>
          </ProjectCard>

          <ProjectCard
            number="003"
            tag="AUTO"
            title="Auto"
            subtitle="Automatisation WhatsApp"
            index={2}
          >
            <ImprovementStory />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
