"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "JOURNAL", href: "#journal" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
        scrolled
          ? "bg-paper/85 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-paper"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        <a href="#top" className="group leading-none">
          <span className="block font-black text-[15px] tracking-[-0.05em] lg:text-[17px]">
            PROBLÈME RÉGLÉ
          </span>
          <span className="mt-1 hidden text-[7px] font-medium uppercase tracking-[0.18em] text-muted sm:block lg:text-[8px]">
            Agence digitale • Branding • Automation • Web
          </span>
        </a>

        <nav className="hidden items-center gap-0 lg:flex" aria-label="Navigation principale">
          {links.map((l, i) => (
            <div key={l.label} className="flex items-center">
              {i > 0 && <span className="mx-3 h-3 w-px bg-ink/25" aria-hidden="true" />}
              <a
                href={l.href}
                className="text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-red"
              >
                {l.label}
              </a>
            </div>
          ))}
          <span className="ml-5 h-3.5 w-3.5 rounded-full bg-ink" aria-hidden="true" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-ink lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            className="block h-px w-5 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink bg-paper lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col px-5 py-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-3 font-display text-2xl tracking-wide"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
