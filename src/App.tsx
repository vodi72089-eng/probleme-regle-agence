import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx?v=fix");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=36699e44"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
import { animate, motion, useMotionValueEvent, useScroll } from "/node_modules/.vite/deps/framer-motion.js?v=36699e44";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=36699e44"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
import AboutServices from "/src/components/AboutServices.tsx?t=1795614872741";
import CustomCursor from "/src/components/CustomCursor.tsx";
import FinalCTA from "/src/components/FinalCTA.tsx?t=1795615177399";
import Hero from "/src/components/Hero.tsx?t=1795615203633";
import Marquee from "/src/components/Marquee.tsx";
import Navbar from "/src/components/Navbar.tsx";
import Projects from "/src/components/Projects.tsx";
import { initLenis } from "/src/lib/scroll.ts";
const EASE = [0.16, 1, 0.3, 1];
function Loader({ done }) {
  _s();
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.15,
      ease: [0.4, 0, 0.2, 1],
      onUpdate: (v) => setPct(Math.round(v))
    });
    return () => controls.stop();
  }, []);
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: { clipPath: "inset(0% 0% 0% 0%)" },
      animate: { clipPath: done ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)" },
      transition: { duration: 0.9, ease: EASE },
      className: "fixed inset-0 z-[500] flex flex-col justify-between overflow-hidden bg-ink p-6 text-cream sm:p-10",
      style: { pointerEvents: done ? "none" : "auto" },
      children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between font-sans text-[9px] font-bold tracking-[0.28em] uppercase opacity-60", children: [
          /* @__PURE__ */ jsxDEV("span", { children: "Agence digitale" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 36,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: "Kinshasa — Monde" }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 37,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 1.4, ease: EASE },
              className: "pointer-events-none absolute top-1/2 left-1/2 size-[62vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
            },
            void 0,
            false,
            {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
              lineNumber: 41,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV(
              motion.h2,
              {
                initial: { y: 40, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 1, delay: 0.15, ease: EASE },
                className: "font-anton text-[13vw] leading-[0.86] uppercase",
                children: [
                  "Problème ",
                  /* @__PURE__ */ jsxDEV("span", { className: "text-outline-cream", children: "Réglé" }, void 0, false, {
                    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
                    lineNumber: 54,
                    columnNumber: 22
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
                lineNumber: 48,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 0.5 },
                className: "mt-3 font-hand text-[24px] text-cream sm:text-[30px]",
                children: "Vous avez un problème ? C'est déjà réglé."
              },
              void 0,
              false,
              {
                fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
                lineNumber: 56,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-end justify-between", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "h-[2px] w-full max-w-[420px] overflow-hidden bg-cream/15", children: /* @__PURE__ */ jsxDEV(motion.div, { className: "h-full bg-red", style: { width: `${pct}%` } }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 69,
            columnNumber: 11
          }, this) }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-[12vw] leading-[0.8] tabular-nums sm:text-[64px]", children: pct }, void 0, false, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 71,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
          lineNumber: 67,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
_s(Loader, "HfwZ8/Grx6oOQimUEoCUcZYGoGk=");
_c = Loader;
function FloatingWhatsApp() {
  _s2();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    const nearBottom = window.innerHeight + v >= document.documentElement.scrollHeight - 200;
    setShow(v > 700 && !nearBottom);
  });
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      initial: false,
      animate: { opacity: show ? 1 : 0, y: show ? 0 : 26, scale: show ? 1 : 0.92 },
      transition: { duration: 0.5, ease: EASE },
      className: "pointer-events-none fixed right-4 bottom-4 z-[150] sm:right-6 sm:bottom-6",
      children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "https://wa.me/243835113424",
          target: "_blank",
          rel: "noreferrer",
          "data-cursor": "link",
          "aria-hidden": !show,
          className: show ? "pointer-events-auto block" : "pointer-events-none block",
          children: /* @__PURE__ */ jsxDEV("span", { className: "animate-pulse-red flex items-center gap-3 rounded-full bg-red px-4 py-3.5 text-cream shadow-[0_18px_40px_-18px_rgba(255,30,30,0.9)] sm:px-5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-anton text-[12px] tracking-[0.08em] uppercase", children: "Régler mon problème" }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
              lineNumber: 105,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "font-sans text-[11px] font-bold tracking-[0.1em]", children: "↗" }, void 0, false, {
              fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
              lineNumber: 108,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
            lineNumber: 104,
            columnNumber: 9
          }, this)
        },
        void 0,
        false,
        {
          fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
          lineNumber: 96,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 90,
      columnNumber: 5
    },
    this
  );
}
_s2(FloatingWhatsApp, "9/v1sg3JcNU0D61avOqYTN9m3YQ=", false, function() {
  return [useScroll, useMotionValueEvent];
});
_c2 = FloatingWhatsApp;
export default function App() {
  _s3();
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
  return /* @__PURE__ */ jsxDEV("div", { className: "relative min-h-screen bg-cream text-ink", children: [
    /* @__PURE__ */ jsxDEV(CustomCursor, {}, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 130,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Navbar, {}, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { children: [
      ready && /* @__PURE__ */ jsxDEV(Hero, {}, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
        lineNumber: 134,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV(Marquee, {}, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AboutServices, {}, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Projects, {}, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(FinalCTA, {}, void 0, false, {
        fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
        lineNumber: 138,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(FloatingWhatsApp, {}, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Loader, { done: ready }, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 142,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "noise pointer-events-none fixed inset-0 z-[400] opacity-[0.04]" }, void 0, false, {
      fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix",
    lineNumber: 129,
    columnNumber: 5
  }, this);
}
_s3(App, "KuazqYXqOk+6VRk8yHVvoClyoeE=");
_c3 = App;
var _c, _c2, _c3;
$RefreshReg$(_c, "Loader");
$RefreshReg$(_c2, "FloatingWhatsApp");
$RefreshReg$(_c3, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/eluym/Downloads/probleme-regle-agence/src/App.tsx?v=fix " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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RUFBRTtBQUVMLFNBQ0UsdUJBQUMsU0FBSSxXQUFVLDJDQUNiO0FBQUEsMkJBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFhO0FBQUEsSUFDYix1QkFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBTztBQUFBLElBRVAsdUJBQUMsVUFDRUw7QUFBQUEsZUFBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSztBQUFBLE1BQ2YsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVE7QUFBQSxNQUNSLHVCQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYztBQUFBLE1BQ2QsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVM7QUFBQSxNQUNULHVCQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFTO0FBQUEsU0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUE7QUFBQSxJQUVBLHVCQUFDLHNCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUI7QUFBQSxJQUNqQix1QkFBQyxVQUFPLE1BQU1BLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFvQjtBQUFBLElBR3BCLHVCQUFDLFNBQUksV0FBVSxvRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQStFO0FBQUEsT0FoQmpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQkE7QUFFSjtBQUFDRCxJQWpDdUJELEtBQUc7QUFBQSxNQUFIQTtBQUFHLElBQUFVLElBQUFDLEtBQUFDO0FBQUEsYUFBQUYsSUFBQTtBQUFBLGFBQUFDLEtBQUE7QUFBQSxhQUFBQyxLQUFBIiwibmFtZXMiOlsiYW5pbWF0ZSIsIm1vdGlvbiIsInVzZU1vdGlvblZhbHVlRXZlbnQiLCJ1c2VTY3JvbGwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFib3V0U2VydmljZXMiLCJDdXN0b21DdXJzb3IiLCJGaW5hbENUQSIsIkhlcm8iLCJNYXJxdWVlIiwiTmF2YmFyIiwiUHJvamVjdHMiLCJpbml0TGVuaXMiLCJFQVNFIiwiTG9hZGVyIiwiZG9uZSIsIl9zIiwicGN0Iiwic2V0UGN0IiwiY29udHJvbHMiLCJkdXJhdGlvbiIsImVhc2UiLCJvblVwZGF0ZSIsInYiLCJNYXRoIiwicm91bmQiLCJzdG9wIiwiY2xpcFBhdGgiLCJwb2ludGVyRXZlbnRzIiwic2NhbGUiLCJvcGFjaXR5IiwieSIsImRlbGF5Iiwid2lkdGgiLCJGbG9hdGluZ1doYXRzQXBwIiwiX3MyIiwic2Nyb2xsWSIsInNob3ciLCJzZXRTaG93IiwibmVhckJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJBcHAiLCJfczMiLCJyZWFkeSIsInNldFJlYWR5IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9jIiwiX2MyIiwiX2MzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgbW90aW9uLCB1c2VNb3Rpb25WYWx1ZUV2ZW50LCB1c2VTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFib3V0U2VydmljZXMgZnJvbSBcIkAvY29tcG9uZW50cy9BYm91dFNlcnZpY2VzXCI7XG5pbXBvcnQgQ3VzdG9tQ3Vyc29yIGZyb20gXCJAL2NvbXBvbmVudHMvQ3VzdG9tQ3Vyc29yXCI7XG5pbXBvcnQgRmluYWxDVEEgZnJvbSBcIkAvY29tcG9uZW50cy9GaW5hbENUQVwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9IZXJvXCI7XG5pbXBvcnQgTWFycXVlZSBmcm9tIFwiQC9jb21wb25lbnRzL01hcnF1ZWVcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5pbXBvcnQgeyBpbml0TGVuaXMgfSBmcm9tIFwiQC9saWIvc2Nyb2xsXCI7XG5cbmNvbnN0IEVBU0UgPSBbMC4xNiwgMSwgMC4zLCAxXSBhcyBjb25zdDtcblxuLyogLS0tLS0tLS0tLS0tLS0tLSBJbnRybyBjdXJ0YWluIC0tLS0tLS0tLS0tLS0tLS0gKi9cbmZ1bmN0aW9uIExvYWRlcih7IGRvbmUgfTogeyBkb25lOiBib29sZWFuIH0pIHtcbiAgY29uc3QgW3BjdCwgc2V0UGN0XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udHJvbHMgPSBhbmltYXRlKDAsIDEwMCwge1xuICAgICAgZHVyYXRpb246IDEuMTUsXG4gICAgICBlYXNlOiBbMC40LCAwLCAwLjIsIDFdLFxuICAgICAgb25VcGRhdGU6ICh2KSA9PiBzZXRQY3QoTWF0aC5yb3VuZCh2KSksXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IGNvbnRyb2xzLnN0b3AoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgY2xpcFBhdGg6IFwiaW5zZXQoMCUgMCUgMCUgMCUpXCIgfX1cbiAgICAgIGFuaW1hdGU9e3sgY2xpcFBhdGg6IGRvbmUgPyBcImluc2V0KDAlIDAlIDEwMCUgMCUpXCIgOiBcImluc2V0KDAlIDAlIDAlIDAlKVwiIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjksIGVhc2U6IEVBU0UgfX1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bNTAwXSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBvdmVyZmxvdy1oaWRkZW4gYmctaW5rIHAtNiB0ZXh0LWNyZWFtIHNtOnAtMTBcIlxuICAgICAgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogZG9uZSA/IFwibm9uZVwiIDogXCJhdXRvXCIgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBmb250LXNhbnMgdGV4dC1bOXB4XSBmb250LWJvbGQgdHJhY2tpbmctWzAuMjhlbV0gdXBwZXJjYXNlIG9wYWNpdHktNjBcIj5cbiAgICAgICAgPHNwYW4+QWdlbmNlIGRpZ2l0YWxlPC9zcGFuPlxuICAgICAgICA8c3Bhbj5LaW5zaGFzYSDigJQgTW9uZGU8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMS40LCBlYXNlOiBFQVNFIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHNpemUtWzYydm1pbl0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHJvdW5kZWQtZnVsbCBiZy1yZWRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiA0MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMC4xNSwgZWFzZTogRUFTRSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1hbnRvbiB0ZXh0LVsxM3Z3XSBsZWFkaW5nLVswLjg2XSB1cHBlcmNhc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByb2Jsw6htZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW91dGxpbmUtY3JlYW1cIj5Sw6lnbMOpPC9zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZGVsYXk6IDAuNSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyBmb250LWhhbmQgdGV4dC1bMjRweF0gdGV4dC1jcmVhbSBzbTp0ZXh0LVszMHB4XVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVm91cyBhdmV6IHVuIHByb2Jsw6htZSA/IEMnZXN0IGTDqWrDoCByw6lnbMOpLlxuICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMnB4XSB3LWZ1bGwgbWF4LXctWzQyMHB4XSBvdmVyZmxvdy1oaWRkZW4gYmctY3JlYW0vMTVcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYmctcmVkXCIgc3R5bGU9e3sgd2lkdGg6IGAke3BjdH0lYCB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1hbnRvbiB0ZXh0LVsxMnZ3XSBsZWFkaW5nLVswLjhdIHRhYnVsYXItbnVtcyBzbTp0ZXh0LVs2NHB4XVwiPlxuICAgICAgICAgIHtwY3R9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLSBGbG9hdGluZyBXaGF0c0FwcCAtLS0tLS0tLS0tLS0tLS0tICovXG5mdW5jdGlvbiBGbG9hdGluZ1doYXRzQXBwKCkge1xuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZU1vdGlvblZhbHVlRXZlbnQoc2Nyb2xsWSwgXCJjaGFuZ2VcIiwgKHYpID0+IHtcbiAgICBjb25zdCBuZWFyQm90dG9tID1cbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCArIHYgPj0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDIwMDtcbiAgICBzZXRTaG93KHYgPiA3MDAgJiYgIW5lYXJCb3R0b20pO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogc2hvdyA/IDEgOiAwLCB5OiBzaG93ID8gMCA6IDI2LCBzY2FsZTogc2hvdyA/IDEgOiAwLjkyIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGVhc2U6IEVBU0UgfX1cbiAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgcmlnaHQtNCBib3R0b20tNCB6LVsxNTBdIHNtOnJpZ2h0LTYgc206Ym90dG9tLTZcIlxuICAgID5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL3dhLm1lLzI0MzgzNTExMzQyNFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICBkYXRhLWN1cnNvcj1cImxpbmtcIlxuICAgICAgICBhcmlhLWhpZGRlbj17IXNob3d9XG4gICAgICAgIGNsYXNzTmFtZT17c2hvdyA/IFwicG9pbnRlci1ldmVudHMtYXV0byBibG9ja1wiIDogXCJwb2ludGVyLWV2ZW50cy1ub25lIGJsb2NrXCJ9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UtcmVkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQtZnVsbCBiZy1yZWQgcHgtNCBweS0zLjUgdGV4dC1jcmVhbSBzaGFkb3ctWzBfMThweF80MHB4Xy0xOHB4X3JnYmEoMjU1LDMwLDMwLDAuOSldIHNtOnB4LTVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWFudG9uIHRleHQtWzEycHhdIHRyYWNraW5nLVswLjA4ZW1dIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgUsOpZ2xlciBtb24gcHJvYmzDqG1lXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LVsxMXB4XSBmb250LWJvbGQgdHJhY2tpbmctWzAuMWVtXVwiPuKGlzwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXRMZW5pcygpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIGNvbnN0IHQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRSZWFkeSh0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIH0sIDEyNTApO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KHQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXNjcmVlbiBiZy1jcmVhbSB0ZXh0LWlua1wiPlxuICAgICAgPEN1c3RvbUN1cnNvciAvPlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAge3JlYWR5ICYmIDxIZXJvIC8+fVxuICAgICAgICA8TWFycXVlZSAvPlxuICAgICAgICA8QWJvdXRTZXJ2aWNlcyAvPlxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgPEZpbmFsQ1RBIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGbG9hdGluZ1doYXRzQXBwIC8+XG4gICAgICA8TG9hZGVyIGRvbmU9e3JlYWR5fSAvPlxuXG4gICAgICB7LyogZmlsbSBncmFpbiBvdmVyIGV2ZXJ5dGhpbmcgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vaXNlIHBvaW50ZXItZXZlbnRzLW5vbmUgZml4ZWQgaW5zZXQtMCB6LVs0MDBdIG9wYWNpdHktWzAuMDRdXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiQzovVXNlcnMvZWx1eW0vRG93bmxvYWRzL3Byb2JsZW1lLXJlZ2xlLWFnZW5jZS9zcmMvQXBwLnRzeCJ9