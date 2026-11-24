import Reveal from "./Reveal";
import PhoneMockup from "./visuals/PhoneMockup";

const services = [
  "Création Sites Web",
  "Applications & Logiciels",
  "Automatisations",
  "Gestion Réseaux Sociaux",
];

export default function AboutServices() {
  return (
    <section id="about" className="border-b border-ink bg-paper" aria-label="À propos et services">
      <div className="mx-auto grid max-w-page lg:grid-cols-3">
        {/* 02 — ABOUT */}
        <Reveal className="border-b border-ink px-5 py-12 sm:px-8 lg:border-b-0 lg:px-10 lg:py-16">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em]">
            <span>02</span>
            <span className="h-px w-8 bg-ink" aria-hidden="true" />
            <span>About</span>
          </div>

          <h2 className="mt-8 font-display text-[clamp(3rem,5.4vw,5.6rem)] uppercase leading-[0.86] tracking-[-0.02em]">
            More than
            <br />
            Digital
          </h2>

          <p className="mt-7 max-w-md text-[13px] leading-[1.85] text-ink/80">
            PROBLÈME RÉGLÉ est une agence digitale basée à Kinshasa. On aide les PME et
            entrepreneurs à digitaliser leur activité : sites web, applications, automatisations
            qui font gagner du temps. Pragmatique, rapide, efficace. Nous transformons vos
            défis en résultats mesurables.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em]"
          >
            <span className="border-b border-ink pb-1 transition-[color,border-color] duration-200 group-hover:border-red group-hover:text-red">
              En savoir plus
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </a>
        </Reveal>

        {/* Visuel central — WhatsApp automatisé */}
        <Reveal
          delay={0.12}
          className="relative flex items-center justify-center overflow-hidden border-b border-ink px-5 py-14 sm:px-8 lg:border-b-0 lg:border-l lg:px-10 lg:py-16"
        >
          <span
            className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/15"
            aria-hidden="true"
          />
          <span
            className="absolute left-1/2 top-1/2 aspect-square w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/90"
            aria-hidden="true"
          />
          <div className="float-soft relative z-10 w-[210px] sm:w-[235px] lg:w-[250px]">
            <PhoneMockup interactive />
          </div>
          <span className="absolute bottom-6 left-6 z-10 rotate-[-6deg] border border-ink bg-paper px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] shadow-sm">
            Écrivez un message ↗
          </span>
        </Reveal>

        {/* SERVICES */}
        <Reveal
          delay={0.2}
          id="services"
          className="border-t border-ink px-5 py-12 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-16"
        >
          <h2 className="font-display text-[clamp(2.8rem,4.4vw,4.4rem)] uppercase leading-[0.9] tracking-[-0.02em]">
            Services
          </h2>
          <span className="mt-5 block h-px w-16 bg-ink" aria-hidden="true" />

          <ul className="mt-6">
            {services.map((s) => (
              <li
                key={s}
                className="group flex items-center gap-3 border-b border-ink/20 py-3.5 transition-colors duration-200 hover:border-red"
              >
                <span className="text-xs text-red transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  •
                </span>
                <span className="text-[13px] font-medium transition-[transform,color] duration-200 group-hover:translate-x-2 group-hover:text-red sm:text-sm">
                  {s}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em]"
          >
            <span className="border-b border-ink pb-1 transition-[color,border-color] duration-200 group-hover:border-red group-hover:text-red">
              Voir tous les services
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
