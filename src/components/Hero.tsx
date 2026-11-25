import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-dev.png";
import { CircularText, MagneticButton, Reveal, SplitLetters } from "@/components/motion";
import { scrollToId } from "@/lib/scroll";

const EASE = [0.16, 1, 0.3, 1] as const;

const META = [
  { k: "Basé à", v: "Kinshasa" },
  { k: "Actif", v: "Partout dans le monde" },
  { k: "Direct", v: "+243 835 113 424" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden border-b border-ink/12 bg-cream pt-28 pb-0 sm:pt-32"
    >
      {/* faint vertical grid lines — editorial magazine structure */}
      <div className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1600px] grid-cols-4 px-12 lg:grid">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-l border-ink/[0.07]" />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        {/* ---------------- LEFT : type ---------------- */}
        <motion.div
          style={{ y: textY }}
          className="relative z-20 pb-6 lg:col-span-7 lg:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="mb-6 flex items-center gap-4 sm:mb-8"
          >
            <span className="font-anton text-sm tracking-[0.1em] whitespace-nowrap sm:text-base">01 / 04</span>
            <motion.span
              className="h-[1.5px] w-16 origin-left bg-red sm:w-28"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
            />
            <span className="font-sans text-[8px] font-bold tracking-[0.24em] uppercase opacity-60 sm:text-[10px] sm:tracking-[0.28em]">
              Agence digitale • Branding • Automation • Web
            </span>
          </motion.div>

          <h1 className="font-anton text-[17vw] leading-[0.82] tracking-[-0.02em] uppercase sm:text-[13.5vw] lg:text-[8.6vw]">
            <span className="block">
              <SplitLetters text="SOLUTIONS" delay={0.35} stagger={0.042} />
            </span>
            <span className="flex flex-wrap items-center gap-x-[0.14em]">
              <SplitLetters text="EN" delay={0.72} stagger={0.05} className="text-red" />
              <SplitLetters text="ACTION" delay={0.86} stagger={0.042} />
              <motion.span
                aria-hidden
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 1.5, ease: EASE }}
                className="ml-[0.1em] hidden size-[0.16em] rounded-full bg-red sm:inline-block"
              />
            </span>
          </h1>

          <div className="mt-7 flex max-w-xl flex-col gap-6 sm:mt-9">
            <Reveal delay={1.15} y={22}>
              <p className="font-sans text-[13px] leading-[1.65] font-medium tracking-[0.06em] uppercase sm:text-[15px]">
                On résout les problèmes. On livre des solutions qui marchent.
              </p>
            </Reveal>

            <Reveal delay={1.3} y={22} className="flex flex-wrap items-center gap-3">
              <MagneticButton variant="neu" onClick={() => scrollToId("#contact")}>
                Démarrer maintenant
              </MagneticButton>
              <MagneticButton variant="outline" onClick={() => scrollToId("#work")}>
                Voir les projets
              </MagneticButton>
            </Reveal>
          </div>

          {/* meta strip */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-y-4 border-t border-ink/12 pt-5 sm:grid-cols-3 sm:gap-4 sm:pt-6">
            {META.map((m, i) => (
              <Reveal key={m.k} delay={1.45 + i * 0.08} y={16}>
                <p className="font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45">
                  {m.k}
                </p>
                <p className="mt-1 font-sans text-[12px] font-semibold tracking-[0.02em]">
                  {m.v}
                </p>
              </Reveal>
            ))}
          </div>
        </motion.div>

        {/* ---------------- RIGHT : image + red circle ---------------- */}
        <div className="relative z-10 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[520px] pb-12 lg:pb-14">
            {/* big red circle — grows in, peeks out behind the photo */}
            <motion.div
              style={{ y: circleY }}
              className="absolute -bottom-[9%] -left-[12%] z-0 aspect-square w-[128%]"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.25, ease: EASE }}
                className="h-full w-full rounded-full bg-red"
              />

            </motion.div>

            {/* photo — slides in from the right, parallaxes on scroll */}
            <motion.div
              style={{ y: imgY, scale: imgScale }}
              className="relative"
            >
              <motion.div
                initial={{ x: "58%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.5, ease: EASE }}
                className="relative overflow-hidden border border-ink/15 bg-cream-2"
              >
                <motion.img
                  src={heroImg}
                  alt="Développeur de l'agence PROBLÈME RÉGLÉ devant un laptop"
                  initial={{ scale: 1.25 }}
                  animate={{ scale: 1.02 }}
                  transition={{ duration: 2.4, delay: 0.5, ease: EASE }}
                  className="block aspect-[4/5] w-full object-cover will-change-transform"
                />
                {/* caption strip */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-cream/25 bg-ink/85 px-4 py-2.5 backdrop-blur-sm">
                  <span className="font-sans text-[9px] font-bold tracking-[0.24em] text-cream uppercase">
                    Dev team — Kinshasa
                  </span>
                  <span className="font-anton text-[10px] text-red">EST. 2019</span>
                </div>
              </motion.div>

              {/* rotating badge */}
              <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.6, ease: EASE }}
                className="absolute -top-14 -left-14 hidden text-ink sm:block"
              >
                <div className="relative">
                  <CircularText text="AGENCE DIGITALE • BRANDING • AUTOMATION • WEB • " size={132} />
                  <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red" />
                </div>
              </motion.div>
            </motion.div>

            {/* handwritten note */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1, delay: 1.75, ease: EASE }}
              className="absolute -top-4 -right-2 z-30 sm:-top-10 sm:-right-8"
            >
              <p className="font-hand text-[26px] leading-none text-ink sm:text-[38px]">
                create par ebrillam
              </p>
              <svg
                width="70"
                height="22"
                viewBox="0 0 70 22"
                fill="none"
                className="ml-auto mt-1 text-ink/60"
              >
                <path
                  d="M2 4c14 12 30 14 50 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path d="M45 8l9 4-4 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

          {/* vertical text on the right edge */}
          <motion.div
            style={{ y: badgeY }}
            className="absolute top-0 -right-1 hidden h-full items-start justify-end lg:flex xl:-right-4"
          >
            <Reveal delay={1.9} y={0} className="h-full">
              <div className="flex h-full items-start gap-3">
                <span className="vertical-rl font-sans text-[9px] font-bold tracking-[0.34em] uppercase opacity-60">
                  Agence créée depuis 2019
                </span>
                <span className="mt-2 h-24 w-[1.5px] bg-red" />
              </div>
            </Reveal>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
        className="absolute bottom-6 left-5 hidden items-center gap-3 sm:left-8 lg:flex"
      >
        <div className="relative h-12 w-[1.5px] overflow-hidden bg-ink/20">
          <span className="absolute inset-x-0 h-1/2 animate-scroll-dot bg-red" />
        </div>
        <span className="font-sans text-[9px] font-bold tracking-[0.28em] uppercase opacity-50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
