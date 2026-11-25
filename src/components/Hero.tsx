import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Hero.tsx?v=fix");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=36699e44"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { motion, useScroll, useTransform } from "/node_modules/.vite/deps/framer-motion.js?v=36699e44";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=36699e44"; const useRef = __vite__cjsImport2_react["useRef"];
import heroImg from "/src/assets/hero-dev.png?import";
import { CircularText, MagneticButton, Reveal, SplitLetters } from "/src/components/motion.tsx";
import { scrollToId } from "/src/lib/scroll.ts";
const EASE = [0.16, 1, 0.3, 1];
const META = [
  { k: "Basé à", v: "Kinshasa" },
  { k: "Actif", v: "Partout dans le monde" },
  { k: "Direct", v: "+243 835 113 424" }
];
export default function Hero() {
  _s();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const circleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  return /* @__PURE__ */ jsxDEV(
    "section",
    {
      ref,
      id: "hero",
      className: "relative overflow-hidden border-b border-ink/12 bg-cream pt-28 pb-0 sm:pt-32",
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "pointer-events-none absolute inset-0 mx-auto hidden max-w-[1600px] grid-cols-4 px-12 lg:grid", children: [0, 1, 2, 3].map(
          (i) => /* @__PURE__ */ jsxDEV("div", { className: "border-l border-ink/[0.07]" }, i, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ) }, void 0, false, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              style: { y: textY },
              className: "relative z-20 pb-6 lg:col-span-7 lg:pb-24",
              children: [
                /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.2, ease: EASE },
                    className: "mb-6 flex items-center gap-4 sm:mb-8",
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-sm tracking-[0.1em] whitespace-nowrap sm:text-base", children: "01 / 04" }, void 0, false, {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 53,
                        columnNumber: 13
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        motion.span,
                        {
                          className: "h-[1.5px] w-16 origin-left bg-red sm:w-28",
                          initial: { scaleX: 0 },
                          animate: { scaleX: 1 },
                          transition: { duration: 1.2, delay: 0.5, ease: EASE }
                        },
                        void 0,
                        false,
                        {
                          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                          lineNumber: 54,
                          columnNumber: 13
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-sans text-[8px] font-bold tracking-[0.24em] uppercase opacity-60 sm:text-[10px] sm:tracking-[0.28em]", children: "Agence digitale • Branding • Automation • Web" }, void 0, false, {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 60,
                        columnNumber: 13
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 47,
                    columnNumber: 11
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("h1", { className: "font-anton text-[17vw] leading-[0.82] tracking-[-0.02em] uppercase sm:text-[13.5vw] lg:text-[8.6vw]", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "block", children: /* @__PURE__ */ jsxDEV(SplitLetters, { text: "SOLUTIONS", delay: 0.35, stagger: 0.042 }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 66,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "flex flex-wrap items-center gap-x-[0.14em]", children: [
                    /* @__PURE__ */ jsxDEV(SplitLetters, { text: "EN", delay: 0.72, stagger: 0.05, className: "text-red" }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 70,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV(SplitLetters, { text: "ACTION", delay: 0.86, stagger: 0.042 }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 71,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      motion.span,
                      {
                        "aria-hidden": true,
                        initial: { scale: 0, rotate: -90 },
                        animate: { scale: 1, rotate: 0 },
                        transition: { duration: 0.9, delay: 1.5, ease: EASE },
                        className: "ml-[0.1em] hidden size-[0.16em] rounded-full bg-red sm:inline-block"
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 72,
                        columnNumber: 15
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 69,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 65,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-7 flex max-w-xl flex-col gap-6 sm:mt-9", children: [
                  /* @__PURE__ */ jsxDEV(Reveal, { delay: 1.15, y: 22, children: /* @__PURE__ */ jsxDEV("p", { className: "font-sans text-[13px] leading-[1.65] font-medium tracking-[0.06em] uppercase sm:text-[15px]", children: "On résout les problèmes. On livre des solutions qui marchent." }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 84,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 83,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ jsxDEV(Reveal, { delay: 1.3, y: 22, className: "flex flex-wrap items-center gap-3", children: [
                    /* @__PURE__ */ jsxDEV(MagneticButton, { pulse: true, onClick: () => scrollToId("#contact"), children: "Démarrer maintenant" }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 90,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV(MagneticButton, { variant: "outline", onClick: () => scrollToId("#work"), children: "Voir les projets" }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 93,
                      columnNumber: 15
                    }, this)
                  ] }, void 0, true, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 89,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 82,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-10 grid max-w-2xl grid-cols-1 gap-y-4 border-t border-ink/12 pt-5 sm:grid-cols-3 sm:gap-4 sm:pt-6", children: META.map(
                  (m, i) => /* @__PURE__ */ jsxDEV(Reveal, { delay: 1.45 + i * 0.08, y: 16, children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "font-sans text-[9px] font-bold tracking-[0.24em] uppercase opacity-45", children: m.k }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 103,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "mt-1 font-sans text-[12px] font-semibold tracking-[0.02em]", children: m.v }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 106,
                      columnNumber: 17
                    }, this)
                  ] }, m.k, true, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 102,
                    columnNumber: 13
                  }, this)
                ) }, void 0, false, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 100,
                  columnNumber: 11
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
              lineNumber: 43,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "relative z-10 lg:col-span-5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "relative mx-auto w-full max-w-[520px] pb-12 lg:pb-14", children: [
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  style: { y: circleY },
                  className: "absolute -bottom-[9%] -left-[12%] z-0 aspect-square w-[128%]",
                  children: /* @__PURE__ */ jsxDEV(
                    motion.div,
                    {
                      initial: { scale: 0, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      transition: { duration: 1.6, delay: 0.25, ease: EASE },
                      className: "h-full w-full rounded-full bg-red"
                    },
                    void 0,
                    false,
                    {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 122,
                      columnNumber: 15
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 118,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  style: { y: imgY, scale: imgScale },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsxDEV(
                      motion.div,
                      {
                        initial: { x: "58%", opacity: 0 },
                        animate: { x: 0, opacity: 1 },
                        transition: { duration: 1.6, delay: 0.5, ease: EASE },
                        className: "relative overflow-hidden border border-ink/15 bg-cream-2",
                        children: [
                          /* @__PURE__ */ jsxDEV(
                            motion.img,
                            {
                              src: heroImg,
                              alt: "Développeur de l'agence PROBLÈME RÉGLÉ devant un laptop",
                              initial: { scale: 1.25 },
                              animate: { scale: 1.02 },
                              transition: { duration: 2.4, delay: 0.5, ease: EASE },
                              className: "block aspect-[4/5] w-full object-cover will-change-transform"
                            },
                            void 0,
                            false,
                            {
                              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                              lineNumber: 142,
                              columnNumber: 17
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-cream/25 bg-ink/85 px-4 py-2.5 backdrop-blur-sm", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "font-sans text-[9px] font-bold tracking-[0.24em] text-cream uppercase", children: "Dev team — Kinshasa" }, void 0, false, {
                              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                              lineNumber: 152,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-[10px] text-red", children: "EST. 2019" }, void 0, false, {
                              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                              lineNumber: 155,
                              columnNumber: 19
                            }, this)
                          ] }, void 0, true, {
                            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                            lineNumber: 151,
                            columnNumber: 17
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 136,
                        columnNumber: 15
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV(
                      motion.div,
                      {
                        style: { y: badgeY },
                        initial: { opacity: 0, scale: 0.6 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { duration: 1, delay: 1.6, ease: EASE },
                        className: "absolute -top-14 -left-14 hidden text-ink sm:block",
                        children: /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxDEV(CircularText, { text: "AGENCE DIGITALE • BRANDING • AUTOMATION • WEB • ", size: 132 }, void 0, false, {
                            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                            lineNumber: 168,
                            columnNumber: 19
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red" }, void 0, false, {
                            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                            lineNumber: 169,
                            columnNumber: 19
                          }, this)
                        ] }, void 0, true, {
                          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                          lineNumber: 167,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      false,
                      {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 160,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 132,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                motion.div,
                {
                  initial: { opacity: 0, y: 20, rotate: -8 },
                  animate: { opacity: 1, y: 0, rotate: -4 },
                  transition: { duration: 1, delay: 1.75, ease: EASE },
                  className: "absolute -top-4 -right-2 z-30 sm:-top-10 sm:-right-8",
                  children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "font-hand text-[26px] leading-none text-ink sm:text-[38px]", children: "Create Bigger" }, void 0, false, {
                      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                      lineNumber: 181,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "svg",
                      {
                        width: "70",
                        height: "22",
                        viewBox: "0 0 70 22",
                        fill: "none",
                        className: "ml-auto mt-1 text-ink/60",
                        children: [
                          /* @__PURE__ */ jsxDEV(
                            "path",
                            {
                              d: "M2 4c14 12 30 14 50 8",
                              stroke: "currentColor",
                              strokeWidth: "1.6",
                              strokeLinecap: "round"
                            },
                            void 0,
                            false,
                            {
                              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                              lineNumber: 191,
                              columnNumber: 17
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV("path", { d: "M45 8l9 4-4 8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round" }, void 0, false, {
                            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                            lineNumber: 197,
                            columnNumber: 17
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                        lineNumber: 184,
                        columnNumber: 15
                      },
                      this
                    )
                  ]
                },
                void 0,
                true,
                {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 175,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, true, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
              lineNumber: 116,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.div,
              {
                style: { y: badgeY },
                className: "absolute top-0 -right-1 hidden h-full items-start justify-end lg:flex xl:-right-4",
                children: /* @__PURE__ */ jsxDEV(Reveal, { delay: 1.9, y: 0, className: "h-full", children: /* @__PURE__ */ jsxDEV("div", { className: "flex h-full items-start gap-3", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "vertical-rl font-sans text-[9px] font-bold tracking-[0.34em] uppercase opacity-60", children: "Agence créée depuis 2019" }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 209,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "mt-2 h-24 w-[1.5px] bg-red" }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                    lineNumber: 212,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 208,
                  columnNumber: 15
                }, this) }, void 0, false, {
                  fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                  lineNumber: 207,
                  columnNumber: 13
                }, this)
              },
              void 0,
              false,
              {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                lineNumber: 203,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
            lineNumber: 115,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1, delay: 2.1 },
            className: "absolute bottom-6 left-5 hidden items-center gap-3 sm:left-8 lg:flex",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative h-12 w-[1.5px] overflow-hidden bg-ink/20", children: /* @__PURE__ */ jsxDEV("span", { className: "absolute inset-x-0 h-1/2 animate-scroll-dot bg-red" }, void 0, false, {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                lineNumber: 227,
                columnNumber: 11
              }, this) }, void 0, false, {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                lineNumber: 226,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "font-sans text-[9px] font-bold tracking-[0.28em] uppercase opacity-50", children: "Scroll" }, void 0, false, {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
                lineNumber: 229,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
            lineNumber: 220,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
_s(Hero, "Ivsw/liIogtrN2AVQjuxPeW3rNE=", false, function() {
  return [useScroll, useTransform, useTransform, useTransform, useTransform, useTransform];
});
_c = Hero;
var _c;
$RefreshReg$(_c, "Hero");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/eluym/Downloads/probleme-regle-agence/src/components/Hero.tsx?v=fix " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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WTtBQUFBO0FBQUEsS0FYTFk7QUFBSSxJQUFBdUI7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlUmVmIiwiaGVyb0ltZyIsIkNpcmN1bGFyVGV4dCIsIk1hZ25ldGljQnV0dG9uIiwiUmV2ZWFsIiwiU3BsaXRMZXR0ZXJzIiwic2Nyb2xsVG9JZCIsIkVBU0UiLCJNRVRBIiwiayIsInYiLCJIZXJvIiwiX3MiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJpbWdZIiwiaW1nU2NhbGUiLCJ0ZXh0WSIsImNpcmNsZVkiLCJiYWRnZVkiLCJtYXAiLCJpIiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSIsInNjYWxlWCIsInNjYWxlIiwicm90YXRlIiwibSIsIngiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGhlcm9JbWcgZnJvbSBcIkAvYXNzZXRzL2hlcm8tZGV2LnBuZ1wiO1xuaW1wb3J0IHsgQ2lyY3VsYXJUZXh0LCBNYWduZXRpY0J1dHRvbiwgUmV2ZWFsLCBTcGxpdExldHRlcnMgfSBmcm9tIFwiQC9jb21wb25lbnRzL21vdGlvblwiO1xuaW1wb3J0IHsgc2Nyb2xsVG9JZCB9IGZyb20gXCJAL2xpYi9zY3JvbGxcIjtcblxuY29uc3QgRUFTRSA9IFswLjE2LCAxLCAwLjMsIDFdIGFzIGNvbnN0O1xuXG5jb25zdCBNRVRBID0gW1xuICB7IGs6IFwiQmFzw6kgw6BcIiwgdjogXCJLaW5zaGFzYVwiIH0sXG4gIHsgazogXCJBY3RpZlwiLCB2OiBcIlBhcnRvdXQgZGFucyBsZSBtb25kZVwiIH0sXG4gIHsgazogXCJEaXJlY3RcIiwgdjogXCIrMjQzIDgzNSAxMTMgNDI0XCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIHRhcmdldDogcmVmLFxuICAgIG9mZnNldDogW1wic3RhcnQgc3RhcnRcIiwgXCJlbmQgc3RhcnRcIl0sXG4gIH0pO1xuXG4gIGNvbnN0IGltZ1kgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCAtMTEwXSk7XG4gIGNvbnN0IGltZ1NjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMSwgMS4wOF0pO1xuICBjb25zdCB0ZXh0WSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIDkwXSk7XG4gIGNvbnN0IGNpcmNsZVkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCAxNTBdKTtcbiAgY29uc3QgYmFkZ2VZID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgLTIyMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIHJlZj17cmVmfVxuICAgICAgaWQ9XCJoZXJvXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBib3JkZXItYiBib3JkZXItaW5rLzEyIGJnLWNyZWFtIHB0LTI4IHBiLTAgc206cHQtMzJcIlxuICAgID5cbiAgICAgIHsvKiBmYWludCB2ZXJ0aWNhbCBncmlkIGxpbmVzIOKAlCBlZGl0b3JpYWwgbWFnYXppbmUgc3RydWN0dXJlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgbXgtYXV0byBoaWRkZW4gbWF4LXctWzE2MDBweF0gZ3JpZC1jb2xzLTQgcHgtMTIgbGc6Z3JpZFwiPlxuICAgICAgICB7WzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXItbCBib3JkZXItaW5rL1swLjA3XVwiIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBncmlkIHctZnVsbCBtYXgtdy1bMTYwMHB4XSBncmlkLWNvbHMtMSBpdGVtcy1lbmQgZ2FwLTEwIHB4LTUgc206cHgtOCBsZzpncmlkLWNvbHMtMTIgbGc6Z2FwLTYgbGc6cHgtMTJcIj5cbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0gTEVGVCA6IHR5cGUgLS0tLS0tLS0tLS0tLS0tLSAqL31cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBzdHlsZT17eyB5OiB0ZXh0WSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgcGItNiBsZzpjb2wtc3Bhbi03IGxnOnBiLTI0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE4IH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOSwgZGVsYXk6IDAuMiwgZWFzZTogRUFTRSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBzbTptYi04XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWFudG9uIHRleHQtc20gdHJhY2tpbmctWzAuMWVtXSB3aGl0ZXNwYWNlLW5vd3JhcCBzbTp0ZXh0LWJhc2VcIj4wMSAvIDA0PC9zcGFuPlxuICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtWzEuNXB4XSB3LTE2IG9yaWdpbi1sZWZ0IGJnLXJlZCBzbTp3LTI4XCJcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZVg6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZVg6IDEgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS4yLCBkZWxheTogMC41LCBlYXNlOiBFQVNFIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtWzhweF0gZm9udC1ib2xkIHRyYWNraW5nLVswLjI0ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTYwIHNtOnRleHQtWzEwcHhdIHNtOnRyYWNraW5nLVswLjI4ZW1dXCI+XG4gICAgICAgICAgICAgIEFnZW5jZSBkaWdpdGFsZSDigKIgQnJhbmRpbmcg4oCiIEF1dG9tYXRpb24g4oCiIFdlYlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWFudG9uIHRleHQtWzE3dnddIGxlYWRpbmctWzAuODJdIHRyYWNraW5nLVstMC4wMmVtXSB1cHBlcmNhc2Ugc206dGV4dC1bMTMuNXZ3XSBsZzp0ZXh0LVs4LjZ2d11cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgIDxTcGxpdExldHRlcnMgdGV4dD1cIlNPTFVUSU9OU1wiIGRlbGF5PXswLjM1fSBzdGFnZ2VyPXswLjA0Mn0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAteC1bMC4xNGVtXVwiPlxuICAgICAgICAgICAgICA8U3BsaXRMZXR0ZXJzIHRleHQ9XCJFTlwiIGRlbGF5PXswLjcyfSBzdGFnZ2VyPXswLjA1fSBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiIC8+XG4gICAgICAgICAgICAgIDxTcGxpdExldHRlcnMgdGV4dD1cIkFDVElPTlwiIGRlbGF5PXswLjg2fSBzdGFnZ2VyPXswLjA0Mn0gLz5cbiAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLCByb3RhdGU6IC05MCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIHJvdGF0ZTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOSwgZGVsYXk6IDEuNSwgZWFzZTogRUFTRSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLVswLjFlbV0gaGlkZGVuIHNpemUtWzAuMTZlbV0gcm91bmRlZC1mdWxsIGJnLXJlZCBzbTppbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTcgZmxleCBtYXgtdy14bCBmbGV4LWNvbCBnYXAtNiBzbTptdC05XCI+XG4gICAgICAgICAgICA8UmV2ZWFsIGRlbGF5PXsxLjE1fSB5PXsyMn0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LVsxM3B4XSBsZWFkaW5nLVsxLjY1XSBmb250LW1lZGl1bSB0cmFja2luZy1bMC4wNmVtXSB1cHBlcmNhc2Ugc206dGV4dC1bMTVweF1cIj5cbiAgICAgICAgICAgICAgICBPbiByw6lzb3V0IGxlcyBwcm9ibMOobWVzLiBPbiBsaXZyZSBkZXMgc29sdXRpb25zIHF1aSBtYXJjaGVudC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9SZXZlYWw+XG5cbiAgICAgICAgICAgIDxSZXZlYWwgZGVsYXk9ezEuM30geT17MjJ9IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICA8TWFnbmV0aWNCdXR0b24gcHVsc2Ugb25DbGljaz17KCkgPT4gc2Nyb2xsVG9JZChcIiNjb250YWN0XCIpfT5cbiAgICAgICAgICAgICAgICBEw6ltYXJyZXIgbWFpbnRlbmFudFxuICAgICAgICAgICAgICA8L01hZ25ldGljQnV0dG9uPlxuICAgICAgICAgICAgICA8TWFnbmV0aWNCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb0lkKFwiI3dvcmtcIil9PlxuICAgICAgICAgICAgICAgIFZvaXIgbGVzIHByb2pldHNcbiAgICAgICAgICAgICAgPC9NYWduZXRpY0J1dHRvbj5cbiAgICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIG1ldGEgc3RyaXAgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBncmlkIG1heC13LTJ4bCBncmlkLWNvbHMtMSBnYXAteS00IGJvcmRlci10IGJvcmRlci1pbmsvMTIgcHQtNSBzbTpncmlkLWNvbHMtMyBzbTpnYXAtNCBzbTpwdC02XCI+XG4gICAgICAgICAgICB7TUVUQS5tYXAoKG0sIGkpID0+IChcbiAgICAgICAgICAgICAgPFJldmVhbCBrZXk9e20ua30gZGVsYXk9ezEuNDUgKyBpICogMC4wOH0geT17MTZ9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LVs5cHhdIGZvbnQtYm9sZCB0cmFja2luZy1bMC4yNGVtXSB1cHBlcmNhc2Ugb3BhY2l0eS00NVwiPlxuICAgICAgICAgICAgICAgICAge20ua31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSBmb250LXNhbnMgdGV4dC1bMTJweF0gZm9udC1zZW1pYm9sZCB0cmFja2luZy1bMC4wMmVtXVwiPlxuICAgICAgICAgICAgICAgICAge20udn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLSBSSUdIVCA6IGltYWdlICsgcmVkIGNpcmNsZSAtLS0tLS0tLS0tLS0tLS0tICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbGc6Y29sLXNwYW4tNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byB3LWZ1bGwgbWF4LXctWzUyMHB4XSBwYi0xMiBsZzpwYi0xNFwiPlxuICAgICAgICAgICAgey8qIGJpZyByZWQgY2lyY2xlIOKAlCBncm93cyBpbiwgcGVla3Mgb3V0IGJlaGluZCB0aGUgcGhvdG8gKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB5OiBjaXJjbGVZIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tWzklXSAtbGVmdC1bMTIlXSB6LTAgYXNwZWN0LXNxdWFyZSB3LVsxMjglXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjYsIGRlbGF5OiAwLjI1LCBlYXNlOiBFQVNFIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctcmVkXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICB7LyogcGhvdG8g4oCUIHNsaWRlcyBpbiBmcm9tIHRoZSByaWdodCwgcGFyYWxsYXhlcyBvbiBzY3JvbGwgKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBzdHlsZT17eyB5OiBpbWdZLCBzY2FsZTogaW1nU2NhbGUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogXCI1OCVcIiwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNiwgZGVsYXk6IDAuNSwgZWFzZTogRUFTRSB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLWluay8xNSBiZy1jcmVhbS0yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2hlcm9JbWd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJEw6l2ZWxvcHBldXIgZGUgbCdhZ2VuY2UgUFJPQkzDiE1FIFLDiUdMw4kgZGV2YW50IHVuIGxhcHRvcFwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAxLjI1IH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAyLjQsIGRlbGF5OiAwLjUsIGVhc2U6IEVBU0UgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGFzcGVjdC1bNC81XSB3LWZ1bGwgb2JqZWN0LWNvdmVyIHdpbGwtY2hhbmdlLXRyYW5zZm9ybVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogY2FwdGlvbiBzdHJpcCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWNyZWFtLzI1IGJnLWluay84NSBweC00IHB5LTIuNSBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1bOXB4XSBmb250LWJvbGQgdHJhY2tpbmctWzAuMjRlbV0gdGV4dC1jcmVhbSB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgRGV2IHRlYW0g4oCUIEtpbnNoYXNhXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWFudG9uIHRleHQtWzEwcHhdIHRleHQtcmVkXCI+RVNULiAyMDE5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgICAgey8qIHJvdGF0aW5nIGJhZGdlICovfVxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHk6IGJhZGdlWSB9fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuNiB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMS42LCBlYXNlOiBFQVNFIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xNCAtbGVmdC0xNCBoaWRkZW4gdGV4dC1pbmsgc206YmxvY2tcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPENpcmN1bGFyVGV4dCB0ZXh0PVwiQUdFTkNFIERJR0lUQUxFIOKAoiBCUkFORElORyDigKIgQVVUT01BVElPTiDigKIgV0VCIOKAoiBcIiBzaXplPXsxMzJ9IC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHNpemUtMyAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgcm91bmRlZC1mdWxsIGJnLXJlZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgey8qIGhhbmR3cml0dGVuIG5vdGUgKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwLCByb3RhdGU6IC04IH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCwgcm90YXRlOiAtNCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMS43NSwgZWFzZTogRUFTRSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTQgLXJpZ2h0LTIgei0zMCBzbTotdG9wLTEwIHNtOi1yaWdodC04XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1oYW5kIHRleHQtWzI2cHhdIGxlYWRpbmctbm9uZSB0ZXh0LWluayBzbTp0ZXh0LVszOHB4XVwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBCaWdnZXJcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI3MFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjJcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNzAgMjJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1hdXRvIG10LTEgdGV4dC1pbmsvNjBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMiA0YzE0IDEyIDMwIDE0IDUwIDhcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS42XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ1IDhsOSA0LTQgOFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMS42XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogdmVydGljYWwgdGV4dCBvbiB0aGUgcmlnaHQgZWRnZSAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgeTogYmFkZ2VZIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCAtcmlnaHQtMSBoaWRkZW4gaC1mdWxsIGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kIGxnOmZsZXggeGw6LXJpZ2h0LTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSZXZlYWwgZGVsYXk9ezEuOX0geT17MH0gY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbC1ybCBmb250LXNhbnMgdGV4dC1bOXB4XSBmb250LWJvbGQgdHJhY2tpbmctWzAuMzRlbV0gdXBwZXJjYXNlIG9wYWNpdHktNjBcIj5cbiAgICAgICAgICAgICAgICAgIEFnZW5jZSBjcsOpw6llIGRlcHVpcyAyMDE5XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgaC0yNCB3LVsxLjVweF0gYmctcmVkXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JldmVhbD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBzY3JvbGwgY3VlICovfVxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMi4xIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS02IGxlZnQtNSBoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0zIHNtOmxlZnQtOCBsZzpmbGV4XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTEyIHctWzEuNXB4XSBvdmVyZmxvdy1oaWRkZW4gYmctaW5rLzIwXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGgtMS8yIGFuaW1hdGUtc2Nyb2xsLWRvdCBiZy1yZWRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtWzlweF0gZm9udC1ib2xkIHRyYWNraW5nLVswLjI4ZW1dIHVwcGVyY2FzZSBvcGFjaXR5LTUwXCI+XG4gICAgICAgICAgU2Nyb2xsXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwiZmlsZSI6IkM6L1VzZXJzL2VsdXltL0Rvd25sb2Fkcy9wcm9ibGVtZS1yZWdsZS1hZ2VuY2Uvc3JjL2NvbXBvbmVudHMvSGVyby50c3gifQ==