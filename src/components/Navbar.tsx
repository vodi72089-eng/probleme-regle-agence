import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { scrollToId, scrollToTop } from "@/lib/scroll";
import { cn } from "@/utils/cn";

const LINKS = [
  { label: "Work", id: "#work", n: "01" },
  { label: "Services", id: "#services", n: "02" },
  { label: "About", id: "#about", n: "03" },
  { label: "Journal", id: "#journal", n: "04" },
  { label: "Contact", id: "#contact", n: "05" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const go = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), open ? 420 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
        className={cn(
          "fixed top-0 right-0 left-0 z-[200] transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled
            ? "border-b border-ink/10 bg-cream/72 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-5 sm:h-[74px] sm:px-8 lg:px-12">
          {/* logo */}
          <button
            onClick={scrollToTop}
            data-cursor="link"
            className="group flex items-center gap-2.5 text-left"
          >
            <span className="relative flex size-[26px] items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-ink transition-colors duration-500 group-hover:border-red" />
              <span className="size-[9px] rounded-full bg-red transition-transform duration-500 group-hover:scale-[2.1]" />
            </span>
            <span className="font-display text-[13px] leading-[1.05] tracking-[-0.01em] uppercase sm:text-[14px]">
              Problème
              <br />
              Réglé
            </span>
          </button>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-cursor="link"
                className="group relative px-4 py-2"
              >
                <span className="relative inline-flex items-baseline gap-1.5 overflow-hidden font-sans text-[11px] font-bold tracking-[0.2em] uppercase">
                  <span className="font-anton text-[9px] text-red/70">{l.n}</span>
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[120%]">
                      {l.label}
                    </span>
                    <span className="absolute inset-0 block translate-y-[120%] text-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                      {l.label}
                    </span>
                  </span>
                </span>
                <span className="absolute bottom-1 left-4 h-[1.5px] w-[calc(100%-32px)] origin-left scale-x-0 bg-red transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/243835113424"
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="hidden rounded-full border border-ink px-5 py-2.5 font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 hover:border-red hover:bg-red hover:text-cream sm:inline-block"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              data-cursor="link"
              aria-label="Menu"
              className="flex h-10 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="h-[2px] w-6 bg-ink" />
              <span className="h-[2px] w-6 bg-ink" />
              <span className="h-[2px] w-3.5 bg-red" />
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-[2px] w-full origin-left bg-red"
        />
      </motion.header>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[300] flex flex-col bg-ink text-cream lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-[13px] uppercase">Problème Réglé</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase"
              >
                Fermer ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-6">
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.7, ease: EASE }}
                  onClick={() => go(l.id)}
                  className="group flex items-baseline gap-4 border-b border-cream/12 py-4 text-left"
                >
                  <span className="font-anton text-[11px] text-red">{l.n}</span>
                  <span className="font-anton text-[10vw] leading-[0.95] uppercase transition-colors duration-300 group-hover:text-red">
                    {l.label}
                  </span>
                </motion.button>
              ))}
            </nav>
            <div className="px-6 pb-10 font-sans text-[11px] tracking-[0.16em] uppercase opacity-60">
              Kinshasa — Partout dans le monde
              <br />
              +243 835 113 424
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
