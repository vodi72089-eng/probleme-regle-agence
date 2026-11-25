import { motion } from "framer-motion";
import inkImg from "@/assets/ink.png";
import { MagneticButton, Reveal, SectionIndex, WordsScrollReveal } from "@/components/motion";
import { scrollToId, scrollToTop } from "@/lib/scroll";

const CONTACTS = [
  {
    k: "WhatsApp direct",
    v: "+243 835 113 424",
    href: "https://wa.me/243835113424",
    note: "Réponse en moins d'une heure",
  },
  {
    k: "Email",
    v: "contact@problemeregle.cd",
    href: "mailto:contact@problemeregle.cd",
    note: "Brief, cahier des charges, devis",
  },
  {
    k: "Localisation",
    v: "Kinshasa — Partout dans le monde",
    href: null,
    note: "RDC • Afrique • International",
  },
];

const JOURNAL = [
  { date: "12.02.2026", title: "Pourquoi 80% des sites web ne vendent rien", n: "01" },
  { date: "28.01.2026", title: "Automatiser son WhatsApp Business en 3 étapes", n: "02" },
  { date: "09.01.2026", title: "Le branding qui convertit vraiment à Kinshasa", n: "03" },
];

const FOOTER_LINKS = [
  { label: "Work", id: "#work" },
  { label: "Services", id: "#services" },
  { label: "About", id: "#about" },
  { label: "Journal", id: "#journal" },
  { label: "Contact", id: "#contact" },
];

export default function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-cream">
      <div className="mx-auto w-full max-w-[1600px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <SectionIndex index="04" label="Let's work" />

        {/* ---------- INK PANEL ---------- */}
        <Reveal y={46} className="mt-8">
          <div className="relative overflow-hidden border border-ink/15 bg-cream-2">
            {/* liquid ink — drifts forever */}
            <motion.img
              src={inkImg}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full animate-ink object-cover will-change-transform"
            />
            {/* centre glow to keep type legible */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 45%, rgba(242,239,233,0.96) 0%, rgba(242,239,233,0.72) 42%, rgba(242,239,233,0) 78%)",
              }}
            />

            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[520px] sm:py-24">
              <Reveal y={18}>
                <p className="font-hand text-[26px] leading-none text-red sm:text-[34px]">
                  Vous avez un problème ?
                </p>
              </Reveal>

              <h2 className="mt-4 max-w-[16ch] font-anton text-[13vw] leading-[0.88] tracking-[-0.02em] uppercase sm:text-[10vw] lg:text-[7.4vw]">
                <WordsScrollReveal text="Let's fix it together" />
              </h2>

              <Reveal delay={0.15} y={20} className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton pulse href="https://wa.me/243835113424">
                  Écrire sur WhatsApp
                </MagneticButton>
                <MagneticButton variant="outline" onClick={() => scrollToId("#work")}>
                  Revoir les projets
                </MagneticButton>
              </Reveal>

              <Reveal delay={0.3} y={16}>
                <p className="mt-8 font-sans text-[10px] font-bold tracking-[0.26em] uppercase opacity-50">
                  On résout les problèmes. On livre des solutions qui marchent.
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* ---------- CONTACT GRID ---------- */}
        <div className="mt-14 grid grid-cols-1 border-t border-ink/15 md:grid-cols-3">
          {CONTACTS.map((c, i) => {
            const Inner = (
              <div className="group flex h-full flex-col justify-between gap-6 py-7 transition-colors duration-500 md:border-l md:border-ink/15 md:py-9 md:first:border-l-0 md:pl-8 md:first:pl-0">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45">
                    {c.k}
                  </span>
                  <span className="font-anton text-[10px] text-ink/25 transition-colors duration-500 group-hover:text-red">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <p className="font-display text-[15px] leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-[18px]">
                    {c.v}
                  </p>
                  <p className="mt-2 font-sans text-[10px] tracking-[0.14em] uppercase opacity-40">
                    {c.note}
                  </p>
                </div>
                <span className="block h-[1.5px] w-full origin-left scale-x-100 bg-ink/15 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-red" />
              </div>
            );
            return (
              <Reveal key={c.k} delay={i * 0.08} y={26}>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" data-cursor="link" className="block">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </Reveal>
            );
          })}
        </div>

        {/* ---------- JOURNAL ---------- */}
        <div id="journal" className="scroll-mt-24 grid grid-cols-1 border-t border-ink/15 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <Reveal y={20}>
              <h3 className="font-anton text-[10vw] leading-[0.9] uppercase sm:text-[38px]">
                Journal
              </h3>
              <p className="mt-3 max-w-xs font-sans text-[12px] leading-relaxed text-ink/60">
                Notes courtes sur le digital, l'automatisation et le business en RDC.
              </p>
            </Reveal>
          </div>
          <div className="mt-8 lg:col-span-8 lg:mt-0">
            {JOURNAL.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.08} y={20}>
                <div
                  data-cursor="link"
                  className="group flex items-center justify-between gap-5 border-t border-ink/15 py-5 transition-colors duration-500 last:border-b hover:border-red"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-anton text-[10px] text-ink/30 transition-colors duration-500 group-hover:text-red">
                      {j.n}
                    </span>
                    <div>
                      <p className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase opacity-40">
                        {j.date}
                      </p>
                      <h4 className="mt-1 font-display text-[14px] leading-tight transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 sm:text-[17px]">
                        {j.title}
                      </h4>
                    </div>
                  </div>
                  <span className="inline-block text-lg opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:rotate-45 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
      <footer className="mt-6 bg-ink text-cream">
        <div className="mx-auto w-full max-w-[1600px] px-5 pt-14 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-3">
            <div>
              <p className="font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45">
                Agence digitale
              </p>
              <p className="mt-3 max-w-xs font-sans text-[12px] leading-relaxed opacity-70">
                Branding • Automation • Web. Basés à Kinshasa, on travaille avec des clients
                partout dans le monde.
              </p>
            </div>
            <div>
              <p className="font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45">
                Navigation
              </p>
              <div className="mt-3 flex flex-col gap-1.5">
                {FOOTER_LINKS.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => scrollToId(l.id)}
                    data-cursor="link"
                    className="group inline-flex w-fit items-center gap-2 font-sans text-[12px] font-semibold tracking-[0.06em] uppercase opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="h-[1.5px] w-0 bg-red transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-4" />
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      {l.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 sm:items-end">
              <a
                href="https://wa.me/243835113424"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="font-anton text-[22px] tracking-[0.02em] uppercase transition-colors duration-500 hover:text-red sm:text-[26px]"
              >
                +243 835 113 424
              </a>
              <button
                onClick={scrollToTop}
                data-cursor="link"
                className="group flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.24em] uppercase opacity-60 transition-opacity hover:opacity-100"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-cream/30 transition-colors duration-500 group-hover:border-red group-hover:bg-red">
                  <span className="transition-transform duration-500 group-hover:-translate-y-0.5">
                    ↑
                  </span>
                </span>
                Haut de page
              </button>
            </div>
          </div>

          {/* giant wordmark */}
          <div className="group relative overflow-hidden border-t border-cream/12 pt-6">
            <h3 className="font-anton text-[15.5vw] leading-[0.82] tracking-[-0.02em] whitespace-nowrap uppercase select-none">
              <span className="text-outline-cream transition-colors duration-700 group-hover:text-red">
                Problème
              </span>{" "}
              <span className="text-cream transition-colors duration-700 group-hover:text-red">
                Réglé
              </span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/12 py-6 font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45">
            <span>© {new Date().getFullYear()} Problème Réglé — Kinshasa / Monde</span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 animate-blink rounded-full bg-red" />
              Disponible pour nouveaux projets
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
