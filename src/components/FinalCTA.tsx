import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FinalCTA.tsx?v=fix");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=36699e44"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=36699e44";
import inkImg from "/src/assets/ink.png?import";
import { MagneticButton, Reveal, SectionIndex, WordsScrollReveal } from "/src/components/motion.tsx";
import { scrollToId, scrollToTop } from "/src/lib/scroll.ts";
const CONTACTS = [
  {
    k: "WhatsApp direct",
    v: "+243 835 113 424",
    href: "https://wa.me/243835113424",
    note: "Réponse en moins d'une heure"
  },
  {
    k: "Email",
    v: "contact@problemeregle.cd",
    href: "mailto:contact@problemeregle.cd",
    note: "Brief, cahier des charges, devis"
  },
  {
    k: "Localisation",
    v: "Kinshasa — Partout dans le monde",
    href: null,
    note: "RDC • Afrique • International"
  }
];
const JOURNAL = [
  { date: "12.02.2026", title: "Pourquoi 80% des sites web ne vendent rien", n: "01" },
  { date: "28.01.2026", title: "Automatiser son WhatsApp Business en 3 étapes", n: "02" },
  { date: "09.01.2026", title: "Le branding qui convertit vraiment à Kinshasa", n: "03" }
];
const FOOTER_LINKS = [
  { label: "Work", id: "#work" },
  { label: "Services", id: "#services" },
  { label: "About", id: "#about" },
  { label: "Journal", id: "#journal" },
  { label: "Contact", id: "#contact" }
];
export default function FinalCTA() {
  return /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "scroll-mt-20 bg-cream", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto w-full max-w-[1600px] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24", children: [
      /* @__PURE__ */ jsxDEV(SectionIndex, { index: "04", label: "Let's work" }, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Reveal, { y: 46, className: "mt-8", children: /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden border border-ink/15 bg-cream-2", children: [
        /* @__PURE__ */ jsxDEV(
          motion.img,
          {
            src: inkImg,
            alt: "",
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 h-full w-full animate-ink object-cover will-change-transform"
          },
          void 0,
          false,
          {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 51,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "radial-gradient(120% 90% at 50% 45%, rgba(242,239,233,0.96) 0%, rgba(242,239,233,0.72) 42%, rgba(242,239,233,0) 78%)"
            }
          },
          void 0,
          false,
          {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 58,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "relative flex min-h-[420px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[520px] sm:py-24", children: [
          /* @__PURE__ */ jsxDEV(Reveal, { y: 18, children: /* @__PURE__ */ jsxDEV("p", { className: "font-hand text-[26px] leading-none text-red sm:text-[34px]", children: "Vous avez un problème ?" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("h2", { className: "mt-4 max-w-[16ch] font-anton text-[13vw] leading-[0.88] tracking-[-0.02em] uppercase sm:text-[10vw] lg:text-[7.4vw]", children: /* @__PURE__ */ jsxDEV(WordsScrollReveal, { text: "Let's fix it together" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 74,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 0.15, y: 20, className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxDEV(MagneticButton, { pulse: true, href: "https://wa.me/243835113424", children: "Écrire sur WhatsApp" }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 78,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(MagneticButton, { variant: "outline", onClick: () => scrollToId("#work"), children: "Revoir les projets" }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 81,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV(Reveal, { delay: 0.3, y: 16, children: /* @__PURE__ */ jsxDEV("p", { className: "mt-8 font-sans text-[10px] font-bold tracking-[0.26em] uppercase opacity-50", children: "On résout les problèmes. On livre des solutions qui marchent." }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 87,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-14 grid grid-cols-1 border-t border-ink/15 md:grid-cols-3", children: CONTACTS.map((c, i) => {
        const Inner = /* @__PURE__ */ jsxDEV("div", { className: "group flex h-full flex-col justify-between gap-6 py-7 transition-colors duration-500 md:border-l md:border-ink/15 md:py-9 md:first:border-l-0 md:pl-8 md:first:pl-0", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45", children: c.k }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-[10px] text-ink/25 transition-colors duration-500 group-hover:text-red", children: [
              "0",
              i + 1
            ] }, void 0, true, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 104,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("p", { className: "font-display text-[15px] leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-[18px]", children: c.v }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 109,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-2 font-sans text-[10px] tracking-[0.14em] uppercase opacity-40", children: c.note }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 112,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 108,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "block h-[1.5px] w-full origin-left scale-x-100 bg-ink/15 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-red" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 116,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 99,
          columnNumber: 13
        }, this);
        return /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 0.08, y: 26, children: c.href ? /* @__PURE__ */ jsxDEV("a", { href: c.href, target: "_blank", rel: "noreferrer", "data-cursor": "link", className: "block", children: Inner }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 122,
          columnNumber: 17
        }, this) : Inner }, c.k, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 120,
          columnNumber: 15
        }, this);
      }) }, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { id: "journal", className: "scroll-mt-24 grid grid-cols-1 border-t border-ink/15 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxDEV(Reveal, { y: 20, children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "font-anton text-[10vw] leading-[0.9] uppercase sm:text-[38px]", children: "Journal" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 137,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-3 max-w-xs font-sans text-[12px] leading-relaxed text-ink/60", children: "Notes courtes sur le digital, l'automatisation et le business en RDC." }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 136,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8 lg:col-span-8 lg:mt-0", children: JOURNAL.map(
          (j, i) => /* @__PURE__ */ jsxDEV(Reveal, { delay: i * 0.08, y: 20, children: /* @__PURE__ */ jsxDEV(
            "div",
            {
              "data-cursor": "link",
              className: "group flex items-center justify-between gap-5 border-t border-ink/15 py-5 transition-colors duration-500 last:border-b hover:border-red",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-baseline gap-5", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-[10px] text-ink/30 transition-colors duration-500 group-hover:text-red", children: j.n }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                    lineNumber: 153,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "font-sans text-[9px] font-bold tracking-[0.22em] uppercase opacity-40", children: j.date }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                      lineNumber: 157,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("h4", { className: "mt-1 font-display text-[14px] leading-tight transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 sm:text-[17px]", children: j.title }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                      lineNumber: 160,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                    lineNumber: 156,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                  lineNumber: 152,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "inline-block text-lg opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:rotate-45 group-hover:opacity-100", children: "↗" }, void 0, false, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                  lineNumber: 165,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 148,
              columnNumber: 17
            },
            this
          ) }, j.title, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 147,
            columnNumber: 13
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "mt-6 bg-ink text-cream", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto w-full max-w-[1600px] px-5 pt-14 sm:px-8 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-10 pb-12 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45", children: "Agence digitale" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-3 max-w-xs font-sans text-[12px] leading-relaxed opacity-70", children: "Branding • Automation • Web. Basés à Kinshasa, on travaille avec des clients partout dans le monde." }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 183,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("p", { className: "font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45", children: "Navigation" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 189,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-3 flex flex-col gap-1.5", children: FOOTER_LINKS.map(
            (l) => /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: () => scrollToId(l.id),
                "data-cursor": "link",
                className: "group inline-flex w-fit items-center gap-2 font-sans text-[12px] font-semibold tracking-[0.06em] uppercase opacity-80 transition-opacity hover:opacity-100",
                children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "h-[1.5px] w-0 bg-red transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-4" }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                    lineNumber: 200,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "transition-transform duration-500 group-hover:translate-x-1", children: l.label }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                    lineNumber: 201,
                    columnNumber: 21
                  }, this)
                ]
              },
              l.id,
              true,
              {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                lineNumber: 194,
                columnNumber: 17
              },
              this
            )
          ) }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 192,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-start justify-between gap-6 sm:items-end", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://wa.me/243835113424",
              target: "_blank",
              rel: "noreferrer",
              "data-cursor": "link",
              className: "font-anton text-[22px] tracking-[0.02em] uppercase transition-colors duration-500 hover:text-red sm:text-[26px]",
              children: "+243 835 113 424"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 209,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: scrollToTop,
              "data-cursor": "link",
              className: "group flex items-center gap-3 font-sans text-[10px] font-bold tracking-[0.24em] uppercase opacity-60 transition-opacity hover:opacity-100",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "flex size-9 items-center justify-center rounded-full border border-cream/30 transition-colors duration-500 group-hover:border-red group-hover:bg-red", children: /* @__PURE__ */ jsxDEV("span", { className: "transition-transform duration-500 group-hover:-translate-y-0.5", children: "↑" }, void 0, false, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                  lineNumber: 224,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
                  lineNumber: 223,
                  columnNumber: 17
                }, this),
                "Haut de page"
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
              lineNumber: 218,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 178,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "group relative border-t border-cream/12 pt-8 pb-2", children: /* @__PURE__ */ jsxDEV("h3", { className: "font-anton text-[clamp(34px,14.5vw,240px)] leading-[0.95] tracking-[-0.02em] whitespace-nowrap uppercase select-none", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-outline-cream transition-colors duration-700 group-hover:text-red", children: "Problème" }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 236,
          columnNumber: 15
        }, this),
        " ",
        /* @__PURE__ */ jsxDEV("span", { className: "text-cream transition-colors duration-700 group-hover:text-red", children: "Réglé" }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 239,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 235,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 234,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t border-cream/12 py-6 font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45", children: [
        /* @__PURE__ */ jsxDEV("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Problème Réglé — Kinshasa / Monde"
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 246,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "size-1.5 animate-blink rounded-full bg-red" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
            lineNumber: 248,
            columnNumber: 15
          }, this),
          "Disponible pour nouveaux projets"
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
          lineNumber: 247,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
        lineNumber: 245,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
      lineNumber: 177,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
_c = FinalCTA;
var _c;
$RefreshReg$(_c, "FinalCTA");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/FinalCTA.tsx?v=fix " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxRQUFRO0FBQUEsUUFDUix1QkFBQyxVQUFLLFdBQVUsa0VBQWdFLHFCQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUE7QUFBQSxXQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFPQSxLQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFTQTtBQUFBLE1BRUEsdUJBQUMsU0FBSSxXQUFVLHlKQUNiO0FBQUEsK0JBQUMsVUFBSztBQUFBO0FBQUEsV0FBRyxvQkFBSXFCLEtBQUssR0FBRUMsWUFBWTtBQUFBLFVBQUU7QUFBQSxhQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW9FO0FBQUEsUUFDcEUsdUJBQUMsVUFBSyxXQUFVLDJCQUNkO0FBQUEsaUNBQUMsVUFBSyxXQUFVLGdEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE0RDtBQUFBO0FBQUEsYUFEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUdBO0FBQUEsV0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTUE7QUFBQSxTQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBMkVBLEtBNUVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0E2RUE7QUFBQSxPQWxORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBbU5BO0FBRUo7QUFBQ0MsS0F2TnVCVjtBQUFRLElBQUFVO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIm1vdGlvbiIsImlua0ltZyIsIk1hZ25ldGljQnV0dG9uIiwiUmV2ZWFsIiwiU2VjdGlvbkluZGV4IiwiV29yZHNTY3JvbGxSZXZlYWwiLCJzY3JvbGxUb0lkIiwic2Nyb2xsVG9Ub3AiLCJDT05UQUNUUyIsImsiLCJ2IiwiaHJlZiIsIm5vdGUiLCJKT1VSTkFMIiwiZGF0ZSIsInRpdGxlIiwibiIsIkZPT1RFUl9MSU5LUyIsImxhYmVsIiwiaWQiLCJGaW5hbENUQSIsImJhY2tncm91bmQiLCJtYXAiLCJjIiwiaSIsIklubmVyIiwiaiIsImwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGaW5hbENUQS50c3giXSwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBpbmtJbWcgZnJvbSBcIkAvYXNzZXRzL2luay5wbmdcIjtcbmltcG9ydCB7IE1hZ25ldGljQnV0dG9uLCBSZXZlYWwsIFNlY3Rpb25JbmRleCwgV29yZHNTY3JvbGxSZXZlYWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL21vdGlvblwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9JZCwgc2Nyb2xsVG9Ub3AgfSBmcm9tIFwiQC9saWIvc2Nyb2xsXCI7XG5cbmNvbnN0IENPTlRBQ1RTID0gW1xuICB7XG4gICAgazogXCJXaGF0c0FwcCBkaXJlY3RcIixcbiAgICB2OiBcIisyNDMgODM1IDExMyA0MjRcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd2EubWUvMjQzODM1MTEzNDI0XCIsXG4gICAgbm90ZTogXCJSw6lwb25zZSBlbiBtb2lucyBkJ3VuZSBoZXVyZVwiLFxuICB9LFxuICB7XG4gICAgazogXCJFbWFpbFwiLFxuICAgIHY6IFwiY29udGFjdEBwcm9ibGVtZXJlZ2xlLmNkXCIsXG4gICAgaHJlZjogXCJtYWlsdG86Y29udGFjdEBwcm9ibGVtZXJlZ2xlLmNkXCIsXG4gICAgbm90ZTogXCJCcmllZiwgY2FoaWVyIGRlcyBjaGFyZ2VzLCBkZXZpc1wiLFxuICB9LFxuICB7XG4gICAgazogXCJMb2NhbGlzYXRpb25cIixcbiAgICB2OiBcIktpbnNoYXNhIOKAlCBQYXJ0b3V0IGRhbnMgbGUgbW9uZGVcIixcbiAgICBocmVmOiBudWxsLFxuICAgIG5vdGU6IFwiUkRDIOKAoiBBZnJpcXVlIOKAoiBJbnRlcm5hdGlvbmFsXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBKT1VSTkFMID0gW1xuICB7IGRhdGU6IFwiMTIuMDIuMjAyNlwiLCB0aXRsZTogXCJQb3VycXVvaSA4MCUgZGVzIHNpdGVzIHdlYiBuZSB2ZW5kZW50IHJpZW5cIiwgbjogXCIwMVwiIH0sXG4gIHsgZGF0ZTogXCIyOC4wMS4yMDI2XCIsIHRpdGxlOiBcIkF1dG9tYXRpc2VyIHNvbiBXaGF0c0FwcCBCdXNpbmVzcyBlbiAzIMOpdGFwZXNcIiwgbjogXCIwMlwiIH0sXG4gIHsgZGF0ZTogXCIwOS4wMS4yMDI2XCIsIHRpdGxlOiBcIkxlIGJyYW5kaW5nIHF1aSBjb252ZXJ0aXQgdnJhaW1lbnQgw6AgS2luc2hhc2FcIiwgbjogXCIwM1wiIH0sXG5dO1xuXG5jb25zdCBGT09URVJfTElOS1MgPSBbXG4gIHsgbGFiZWw6IFwiV29ya1wiLCBpZDogXCIjd29ya1wiIH0sXG4gIHsgbGFiZWw6IFwiU2VydmljZXNcIiwgaWQ6IFwiI3NlcnZpY2VzXCIgfSxcbiAgeyBsYWJlbDogXCJBYm91dFwiLCBpZDogXCIjYWJvdXRcIiB9LFxuICB7IGxhYmVsOiBcIkpvdXJuYWxcIiwgaWQ6IFwiI2pvdXJuYWxcIiB9LFxuICB7IGxhYmVsOiBcIkNvbnRhY3RcIiwgaWQ6IFwiI2NvbnRhY3RcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmluYWxDVEEoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwic2Nyb2xsLW10LTIwIGJnLWNyZWFtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIG1heC13LVsxNjAwcHhdIHB4LTUgcHQtMTYgc206cHgtOCBzbTpwdC0yMCBsZzpweC0xMiBsZzpwdC0yNFwiPlxuICAgICAgICA8U2VjdGlvbkluZGV4IGluZGV4PVwiMDRcIiBsYWJlbD1cIkxldCdzIHdvcmtcIiAvPlxuXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tIElOSyBQQU5FTCAtLS0tLS0tLS0tICovfVxuICAgICAgICA8UmV2ZWFsIHk9ezQ2fSBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci1pbmsvMTUgYmctY3JlYW0tMlwiPlxuICAgICAgICAgICAgey8qIGxpcXVpZCBpbmsg4oCUIGRyaWZ0cyBmb3JldmVyICovfVxuICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgc3JjPXtpbmtJbWd9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIGFuaW1hdGUtaW5rIG9iamVjdC1jb3ZlciB3aWxsLWNoYW5nZS10cmFuc2Zvcm1cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBjZW50cmUgZ2xvdyB0byBrZWVwIHR5cGUgbGVnaWJsZSAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgXCJyYWRpYWwtZ3JhZGllbnQoMTIwJSA5MCUgYXQgNTAlIDQ1JSwgcmdiYSgyNDIsMjM5LDIzMywwLjk2KSAwJSwgcmdiYSgyNDIsMjM5LDIzMywwLjcyKSA0MiUsIHJnYmEoMjQyLDIzOSwyMzMsMCkgNzglKVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IG1pbi1oLVs0MjBweF0gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTUgcHktMTYgdGV4dC1jZW50ZXIgc206bWluLWgtWzUyMHB4XSBzbTpweS0yNFwiPlxuICAgICAgICAgICAgICA8UmV2ZWFsIHk9ezE4fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWhhbmQgdGV4dC1bMjZweF0gbGVhZGluZy1ub25lIHRleHQtcmVkIHNtOnRleHQtWzM0cHhdXCI+XG4gICAgICAgICAgICAgICAgICBWb3VzIGF2ZXogdW4gcHJvYmzDqG1lID9cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmV2ZWFsPlxuXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC00IG1heC13LVsxNmNoXSBmb250LWFudG9uIHRleHQtWzEzdnddIGxlYWRpbmctWzAuODhdIHRyYWNraW5nLVstMC4wMmVtXSB1cHBlcmNhc2Ugc206dGV4dC1bMTB2d10gbGc6dGV4dC1bNy40dnddXCI+XG4gICAgICAgICAgICAgICAgPFdvcmRzU2Nyb2xsUmV2ZWFsIHRleHQ9XCJMZXQncyBmaXggaXQgdG9nZXRoZXJcIiAvPlxuICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgIDxSZXZlYWwgZGVsYXk9ezAuMTV9IHk9ezIwfSBjbGFzc05hbWU9XCJtdC05IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxNYWduZXRpY0J1dHRvbiBwdWxzZSBocmVmPVwiaHR0cHM6Ly93YS5tZS8yNDM4MzUxMTM0MjRcIj5cbiAgICAgICAgICAgICAgICAgIMOJY3JpcmUgc3VyIFdoYXRzQXBwXG4gICAgICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TWFnbmV0aWNCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb0lkKFwiI3dvcmtcIil9PlxuICAgICAgICAgICAgICAgICAgUmV2b2lyIGxlcyBwcm9qZXRzXG4gICAgICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9SZXZlYWw+XG5cbiAgICAgICAgICAgICAgPFJldmVhbCBkZWxheT17MC4zfSB5PXsxNn0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOCBmb250LXNhbnMgdGV4dC1bMTBweF0gZm9udC1ib2xkIHRyYWNraW5nLVswLjI2ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTUwXCI+XG4gICAgICAgICAgICAgICAgICBPbiByw6lzb3V0IGxlcyBwcm9ibMOobWVzLiBPbiBsaXZyZSBkZXMgc29sdXRpb25zIHF1aSBtYXJjaGVudC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmV2ZWFsPlxuXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tIENPTlRBQ1QgR1JJRCAtLS0tLS0tLS0tICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE0IGdyaWQgZ3JpZC1jb2xzLTEgYm9yZGVyLXQgYm9yZGVyLWluay8xNSBtZDpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgIHtDT05UQUNUUy5tYXAoKGMsIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IElubmVyID0gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaC1mdWxsIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBweS03IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCBtZDpib3JkZXItbCBtZDpib3JkZXItaW5rLzE1IG1kOnB5LTkgbWQ6Zmlyc3Q6Ym9yZGVyLWwtMCBtZDpwbC04IG1kOmZpcnN0OnBsLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtWzlweF0gZm9udC1ib2xkIHRyYWNraW5nLVswLjI0ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTQ1XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjLmt9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWFudG9uIHRleHQtWzEwcHhdIHRleHQtaW5rLzI1IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjp0ZXh0LXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAwe2kgKyAxfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC1bMTVweF0gbGVhZGluZy10aWdodCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi1bNjAwbXNdIGVhc2UtW2N1YmljLWJlemllcigwLjE2LDEsMC4zLDEpXSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0yIHNtOnRleHQtWzE4cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjLnZ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZvbnQtc2FucyB0ZXh0LVsxMHB4XSB0cmFja2luZy1bMC4xNGVtXSB1cHBlcmNhc2Ugb3BhY2l0eS00MFwiPlxuICAgICAgICAgICAgICAgICAgICB7Yy5ub3RlfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGgtWzEuNXB4XSB3LWZ1bGwgb3JpZ2luLWxlZnQgc2NhbGUteC0xMDAgYmctaW5rLzE1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLVs2MDBtc10gZWFzZS1bY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSldIGdyb3VwLWhvdmVyOmJnLXJlZFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSZXZlYWwga2V5PXtjLmt9IGRlbGF5PXtpICogMC4wOH0geT17MjZ9PlxuICAgICAgICAgICAgICAgIHtjLmhyZWYgPyAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtjLmhyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBkYXRhLWN1cnNvcj1cImxpbmtcIiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICB7SW5uZXJ9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIElubmVyXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZXZlYWw+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogLS0tLS0tLS0tLSBKT1VSTkFMIC0tLS0tLS0tLS0gKi99XG4gICAgICAgIDxkaXYgaWQ9XCJqb3VybmFsXCIgY2xhc3NOYW1lPVwic2Nyb2xsLW10LTI0IGdyaWQgZ3JpZC1jb2xzLTEgYm9yZGVyLXQgYm9yZGVyLWluay8xNSBweS0xMCBsZzpncmlkLWNvbHMtMTIgbGc6Z2FwLTggbGc6cHktMTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTRcIj5cbiAgICAgICAgICAgIDxSZXZlYWwgeT17MjB9PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1hbnRvbiB0ZXh0LVsxMHZ3XSBsZWFkaW5nLVswLjldIHVwcGVyY2FzZSBzbTp0ZXh0LVszOHB4XVwiPlxuICAgICAgICAgICAgICAgIEpvdXJuYWxcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyBtYXgtdy14cyBmb250LXNhbnMgdGV4dC1bMTJweF0gbGVhZGluZy1yZWxheGVkIHRleHQtaW5rLzYwXCI+XG4gICAgICAgICAgICAgICAgTm90ZXMgY291cnRlcyBzdXIgbGUgZGlnaXRhbCwgbCdhdXRvbWF0aXNhdGlvbiBldCBsZSBidXNpbmVzcyBlbiBSREMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBsZzpjb2wtc3Bhbi04IGxnOm10LTBcIj5cbiAgICAgICAgICAgIHtKT1VSTkFMLm1hcCgoaiwgaSkgPT4gKFxuICAgICAgICAgICAgICA8UmV2ZWFsIGtleT17ai50aXRsZX0gZGVsYXk9e2kgKiAwLjA4fSB5PXsyMH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgZGF0YS1jdXJzb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNSBib3JkZXItdCBib3JkZXItaW5rLzE1IHB5LTUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwIGxhc3Q6Ym9yZGVyLWIgaG92ZXI6Ym9yZGVyLXJlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYW50b24gdGV4dC1bMTBweF0gdGV4dC1pbmsvMzAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnRleHQtcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2oubn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LVs5cHhdIGZvbnQtYm9sZCB0cmFja2luZy1bMC4yMmVtXSB1cHBlcmNhc2Ugb3BhY2l0eS00MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2ouZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm10LTEgZm9udC1kaXNwbGF5IHRleHQtWzE0cHhdIGxlYWRpbmctdGlnaHQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tWzYwMG1zXSBlYXNlLVtjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKV0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMyBzbTp0ZXh0LVsxN3B4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2oudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LWxnIG9wYWNpdHktMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1bY3ViaWMtYmV6aWVyKDAuMTYsMSwwLjMsMSldIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgZ3JvdXAtaG92ZXI6cm90YXRlLTQ1IGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIOKGl1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JldmVhbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogLS0tLS0tLS0tLSBGT09URVIgLS0tLS0tLS0tLSAqL31cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibXQtNiBiZy1pbmsgdGV4dC1jcmVhbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gdy1mdWxsIG1heC13LVsxNjAwcHhdIHB4LTUgcHQtMTQgc206cHgtOCBsZzpweC0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMTAgcGItMTIgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LVs5cHhdIGZvbnQtYm9sZCB0cmFja2luZy1bMC4yNGVtXSB1cHBlcmNhc2Ugb3BhY2l0eS00NVwiPlxuICAgICAgICAgICAgICAgIEFnZW5jZSBkaWdpdGFsZVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTMgbWF4LXcteHMgZm9udC1zYW5zIHRleHQtWzEycHhdIGxlYWRpbmctcmVsYXhlZCBvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICAgICAgQnJhbmRpbmcg4oCiIEF1dG9tYXRpb24g4oCiIFdlYi4gQmFzw6lzIMOgIEtpbnNoYXNhLCBvbiB0cmF2YWlsbGUgYXZlYyBkZXMgY2xpZW50c1xuICAgICAgICAgICAgICAgIHBhcnRvdXQgZGFucyBsZSBtb25kZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1bOXB4XSBmb250LWJvbGQgdHJhY2tpbmctWzAuMjRlbV0gdXBwZXJjYXNlIG9wYWNpdHktNDVcIj5cbiAgICAgICAgICAgICAgICBOYXZpZ2F0aW9uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggZmxleC1jb2wgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgIHtGT09URVJfTElOS1MubWFwKChsKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGtleT17bC5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9JZChsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jdXJzb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgaW5saW5lLWZsZXggdy1maXQgaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtc2FucyB0ZXh0LVsxMnB4XSBmb250LXNlbWlib2xkIHRyYWNraW5nLVswLjA2ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTgwIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtWzEuNXB4XSB3LTAgYmctcmVkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlLVtjdWJpYy1iZXppZXIoMC4xNiwxLDAuMywxKV0gZ3JvdXAtaG92ZXI6dy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC02IHNtOml0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3dhLm1lLzI0MzgzNTExMzQyNFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLWN1cnNvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtYW50b24gdGV4dC1bMjJweF0gdHJhY2tpbmctWzAuMDJlbV0gdXBwZXJjYXNlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCBob3Zlcjp0ZXh0LXJlZCBzbTp0ZXh0LVsyNnB4XVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICArMjQzIDgzNSAxMTMgNDI0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfVxuICAgICAgICAgICAgICAgIGRhdGEtY3Vyc29yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgZm9udC1zYW5zIHRleHQtWzEwcHhdIGZvbnQtYm9sZCB0cmFja2luZy1bMC4yNGVtXSB1cHBlcmNhc2Ugb3BhY2l0eS02MCB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBzaXplLTkgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWNyZWFtLzMwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjpib3JkZXItcmVkIGdyb3VwLWhvdmVyOmJnLXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOi10cmFuc2xhdGUteS0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAg4oaRXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIEhhdXQgZGUgcGFnZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIGdpYW50IHdvcmRtYXJrICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgYm9yZGVyLXQgYm9yZGVyLWNyZWFtLzEyIHB0LTggcGItMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYW50b24gdGV4dC1bY2xhbXAoMzRweCwxNC41dncsMjQwcHgpXSBsZWFkaW5nLVswLjk1XSB0cmFja2luZy1bLTAuMDJlbV0gd2hpdGVzcGFjZS1ub3dyYXAgdXBwZXJjYXNlIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3V0bGluZS1jcmVhbSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi03MDAgZ3JvdXAtaG92ZXI6dGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICBQcm9ibMOobWVcbiAgICAgICAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jcmVhbSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi03MDAgZ3JvdXAtaG92ZXI6dGV4dC1yZWRcIj5cbiAgICAgICAgICAgICAgICBSw6lnbMOpXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgYm9yZGVyLXQgYm9yZGVyLWNyZWFtLzEyIHB5LTYgZm9udC1zYW5zIHRleHQtWzlweF0gZm9udC1ib2xkIHRyYWNraW5nLVswLjI0ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTQ1XCI+XG4gICAgICAgICAgICA8c3Bhbj7CqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBQcm9ibMOobWUgUsOpZ2zDqSDigJQgS2luc2hhc2EgLyBNb25kZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpemUtMS41IGFuaW1hdGUtYmxpbmsgcm91bmRlZC1mdWxsIGJnLXJlZFwiIC8+XG4gICAgICAgICAgICAgIERpc3BvbmlibGUgcG91ciBub3V2ZWF1eCBwcm9qZXRzXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sImZpbGUiOiJDOi9Vc2Vycy9lbHV5bS9Eb3dubG9hZHMvcHJvYmxlbWUtcmVnbGUtYWdlbmNlL3NyYy9jb21wb25lbnRzL0ZpbmFsQ1RBLnRzeCJ9