import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import phoneImg from "@/assets/about-phone.png";
import { CurtainReveal, MagneticButton, Reveal, SectionIndex, ZoomImage } from "@/components/motion";
import { scrollToId } from "@/lib/scroll";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  { n: "01", title: "Création Sites Web", note: "Vitrine • E-commerce • SEO" },
  { n: "02", title: "Applications & Logiciels", note: "Mobile • Web app • Sur mesure" },
  { n: "03", title: "Automatisations", note: "WhatsApp • CRM • Workflows" },
  { n: "04", title: "Gestion Réseaux Sociaux", note: "Contenu • Ads • Community" },
];

const STATS = [
  { to: 120, suffix: "+", label: "Projets livrés" },
  { to: 68, suffix: "", label: "Clients accompagnés" },
  { to: 6, suffix: " ans", label: "D'expérience" },
];

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.7,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-anton text-[13vw] leading-[0.85] sm:text-[42px] lg:text-[46px]">
      {val}
      <span className="text-red">{suffix}</span>
    </span>
  );
}

export default function AboutServices() {
  return (
    <section id="about" className="relative border-b border-ink/12 bg-cream">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 divide-y divide-ink/12 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {/* ---------------- COL 1 : ABOUT ---------------- */}
          <div className="flex flex-col justify-between py-12 lg:py-16 lg:pr-10">
            <div>
              <SectionIndex index="02" label="About" />
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-anton text-[13vw] leading-[0.86] uppercase sm:text-[52px] lg:text-[58px]">
                  More
                  <br />
                  Than
                  <br />
                  <span className="text-outline">Digital</span>
                </h2>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-7 max-w-md font-sans text-[13px] leading-[1.75] text-ink/75 sm:text-[14px]">
                  PROBLÈME RÉGLÉ est une agence digitale basée à Kinshasa. On aide les PME et
                  entrepreneurs à digitaliser leur activité : sites web, applications,
                  automatisations qui font gagner du temps.
                </p>
              </Reveal>
            </div>

            <div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/12 pt-6">
                {STATS.map((s, i) => (
                  <Reveal key={s.label} delay={0.1 + i * 0.08} y={20}>
                    <Counter to={s.to} suffix={s.suffix} />
                    <p className="mt-2 font-sans text-[9px] font-bold tracking-[0.18em] uppercase opacity-50">
                      {s.label}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.25} className="mt-9">
                <button
                  onClick={() => scrollToId("#contact")}
                  data-cursor="link"
                  className="group inline-flex items-center gap-3 font-sans text-[11px] font-bold tracking-[0.2em] uppercase"
                >
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                    En savoir plus
                  </span>
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:rotate-45">
                    →
                  </span>
                </button>
                <span className="mt-3 block h-[1.5px] w-full origin-left scale-x-100 bg-ink/20" />
              </Reveal>
            </div>
          </div>

          {/* ---------------- COL 2 : IMAGE ---------------- */}
          <div className="relative flex items-center justify-center bg-cream-2/60 py-12 lg:py-16 lg:px-10">
            <Reveal y={40} className="w-full max-w-[420px]">
              <div className="group relative">
                <CurtainReveal tone="ink">
                  <ZoomImage
                    src={phoneImg}
                    alt="Téléphone avec WhatsApp Business automatisé"
                    className="aspect-[4/5] w-full border border-ink/15"
                    from={1.16}
                    hoverZoom
                    parallax={26}
                  />
                </CurtainReveal>
                {/* floating automation card */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay: 0.4, ease: EASE }}
                  className="absolute bottom-5 -left-4 w-[190px] border border-ink/15 bg-cream px-3.5 py-3 shadow-[0_18px_40px_-24px_rgba(10,10,10,0.5)] sm:-left-8"
                >
                  <div className="flex items-center gap-2">
                    <span className="size-2 animate-blink rounded-full bg-red" />
                    <p className="font-sans text-[9px] font-bold tracking-[0.18em] uppercase">
                      Auto-reply
                    </p>
                  </div>
                  <p className="mt-2 font-sans text-[11px] leading-snug text-ink/70">
                    « Merci pour votre message, un conseiller arrive… »
                  </p>
                  <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-ink/10">
                    <motion.div
                      className="h-full w-full origin-left bg-red"
                      initial={{ scaleX: 0.08 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: 0.6, ease: EASE }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay: 0.55, ease: EASE }}
                  className="absolute -top-4 -right-3 border border-ink/15 bg-ink px-3.5 py-2 sm:-right-6"
                >
                  <p className="font-anton text-[11px] tracking-[0.1em] text-cream uppercase">
                    24/7 <span className="text-red">en ligne</span>
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* ---------------- COL 3 : SERVICES ---------------- */}
          <div id="services" className="scroll-mt-24 py-12 lg:py-16 lg:pl-10">
            <SectionIndex index="02.2" label="Services" />

            <Reveal delay={0.1}>
              <h2 className="mt-6 font-anton text-[13vw] leading-[0.86] uppercase sm:text-[52px] lg:text-[58px]">
                Services
              </h2>
            </Reveal>

            <div className="mt-8">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={0.08 * i} y={22}>
                  <div
                    data-cursor="link"
                    className="group relative border-t border-ink/15 py-5 transition-colors duration-500 last:border-b hover:border-red"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-anton text-[10px] tracking-[0.1em] text-ink/35 transition-colors duration-500 group-hover:text-red">
                          {s.n}
                        </span>
                        <div>
                          <h3 className="font-display text-[15px] leading-tight tracking-[-0.01em] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 sm:text-[19px]">
                            {s.title}
                          </h3>
                          <p className="mt-1 font-sans text-[10px] tracking-[0.12em] uppercase opacity-45 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-hover:opacity-70">
                            {s.note}
                          </p>
                        </div>
                      </div>
                      <span className="inline-block translate-y-1 text-lg opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:translate-x-1 group-hover:rotate-45 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                    <span className="absolute -bottom-[0.5px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-red transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-9">
              <MagneticButton variant="ink" strength={0.18} onClick={() => scrollToId("#work")}>
                Voir tous les services
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
