import ProjectDemo from "@/components/ProjectDemos";
import {
  CurtainReveal,
  MagneticButton,
  Reveal,
  SectionIndex,
  ZoomImage,
} from "@/components/motion";
import { scrollToId } from "@/lib/scroll";

const PROJECTS = [
  {
    id: "001",
    tag: "Site web",
    title: "Boutique en ligne",
    year: "2024",
    note: "E-commerce • Paiement • Livraison",
  },
  {
    id: "002",
    tag: "App",
    title: "Application mobile",
    year: "2025",
    note: "Gestion • Stock • Rapports",
  },
  {
    id: "003",
    tag: "Auto",
    title: "Automatisation WhatsApp",
    year: "2025",
    note: "Chatbot • CRM • Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-ink/12 bg-cream">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionIndex index="03" label="Selected projects" />
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-anton text-[12vw] leading-[0.86] uppercase sm:text-[64px] lg:text-[84px]">
                Selected
                <br />
                <span className="text-outline">Projects</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mb-2">
            <button
              onClick={() => scrollToId("#contact")}
              data-cursor="link"
              className="group inline-flex items-center gap-3 font-sans text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                Voir tous les projets
              </span>
              <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:rotate-45">
                →
              </span>
              <span className="absolute" />
            </button>
            <span className="mt-3 block h-[1.5px] w-full bg-ink/20" />
          </Reveal>
        </div>

        {/* grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} y={44} className="group">
              <div className="block">
                <CurtainReveal tone="ink">
                  <div className="relative overflow-hidden border border-ink/15 bg-cream-2">
                    <div className="aspect-[4/5] w-full">
                      <ProjectDemo index={i} />
                    </div>
                    {/* index + year overlay */}
                  <div className="absolute top-0 right-0 left-0 flex items-start justify-between p-4">
                    <span className="font-anton text-[11px] tracking-[0.14em] text-cream mix-blend-difference">
                      {p.id}
                    </span>
                    <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-cream mix-blend-difference">
                      {p.year}
                    </span>
                  </div>
                  {/* arrow */}
                  <a
                    href="https://wa.me/243835113424"
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="view"
                    aria-label={`Discuter du projet ${p.title}`}
                    className="absolute right-4 bottom-4 flex size-12 items-center justify-center rounded-full border border-cream/70 bg-cream/10 backdrop-blur-[2px] transition-colors duration-500 group-hover:border-cream group-hover:bg-red"
                  >
                    <span className="text-lg text-cream transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45">
                      →
                    </span>
                  </a>
                  {/* red wash on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-red/0 transition-colors duration-700 group-hover:bg-red/15"
                  />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-red transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </div>
                </CurtainReveal>

                <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-ink/15 pt-3 transition-colors duration-500 group-hover:border-red">
                  <div>
                    <p className="font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45 transition-opacity duration-500 group-hover:opacity-100">
                      {p.id} — {p.tag}
                    </p>
                    <a
                      href="https://wa.me/243835113424"
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="view"
                      className="mt-1.5 inline-block font-display text-[16px] leading-tight transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 sm:text-[18px]"
                    >
                      {p.title}
                    </a>
                    <p className="mt-1 font-sans text-[10px] tracking-[0.12em] uppercase opacity-40">
                      {p.note}
                    </p>
                  </div>
                  <span className="font-anton text-[11px] text-ink/25 transition-colors duration-500 group-hover:text-red">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* bottom cta strip */}
        <Reveal delay={0.15} className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/15 pt-8">
          <p className="max-w-lg font-sans text-[13px] leading-relaxed tracking-[0.03em] text-ink/70 uppercase">
            Chaque projet part du même point : un problème concret. Chaque projet finit au même
            endroit : réglé.
          </p>
          <MagneticButton variant="ink" onClick={() => scrollToId("#contact")}>
            Lancer mon projet
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
