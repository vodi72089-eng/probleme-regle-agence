import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import AboutServices from "@/components/AboutServices";
import CustomCursor from "@/components/CustomCursor";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { initLenis } from "@/lib/scroll";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------- Intro curtain ---------------- */
function Loader({ done }: { done: boolean }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.15,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => setPct(Math.round(v)),
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.div
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={{ clipPath: done ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="fixed inset-0 z-[500] flex flex-col justify-between overflow-hidden bg-ink p-6 text-cream sm:p-10"
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <div className="flex items-center justify-between font-sans text-[9px] font-bold tracking-[0.28em] uppercase opacity-60">
        <span>Agence digitale</span>
        <span>Kinshasa — Monde</span>
      </div>

      <div className="relative">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="pointer-events-none absolute top-1/2 left-1/2 size-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
        />
        <div className="relative">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="font-anton text-[13vw] leading-[0.86] uppercase"
          >
            Problème <span className="text-outline-cream">Réglé</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 font-hand text-[24px] text-cream sm:text-[30px]"
          >
            Vous avez un problème ? C'est déjà réglé.
          </motion.p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="h-[2px] w-full max-w-[420px] overflow-hidden bg-cream/15">
          <motion.div className="h-full bg-red" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-anton text-[12vw] leading-[0.8] tabular-nums sm:text-[64px]">
          {pct}
        </span>
      </div>
    </motion.div>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    const nearBottom =
      window.innerHeight + v >= document.documentElement.scrollHeight - 200;
    setShow(v > 700 && !nearBottom);
  });

  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 26, scale: show ? 1 : 0.92 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="pointer-events-none fixed right-4 bottom-4 z-[150] sm:right-6 sm:bottom-6"
    >
      <a
        href="https://wa.me/243835113424"
        target="_blank"
        rel="noreferrer"
        data-cursor="link"
        aria-hidden={!show}
        className={show ? "pointer-events-auto block" : "pointer-events-none block"}
      >
        <span className="pr-comic-button">
          <span className="font-anton text-[12px] tracking-[0.08em] uppercase">
            Régler mon problème
          </span>
          <span className="font-sans text-[11px] font-bold tracking-[0.1em]">↗</span>
        </span>
      </a>
    </motion.div>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initLenis();
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setReady(true);
      document.body.style.overflow = "";
    }, 1250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <CustomCursor />
      <Navbar />

      <main>
        {ready && <Hero />}
        <Marquee />
        <AboutServices />
        <Projects />
        <FinalCTA />
      </main>

      <FloatingWhatsApp />
      <Loader done={ready} />

      {/* film grain over everything */}
      <div className="noise pointer-events-none fixed inset-0 z-[400] opacity-[0.04]" />
    </div>
  );
}
