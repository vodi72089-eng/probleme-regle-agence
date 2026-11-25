import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  lenis = new Lenis({
    duration: reduce ? 0.1 : 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !reduce,
    touchMultiplier: 1.6,
    wheelMultiplier: 1,
  });

  let raf = 0;
  const loop = (time: number) => {
    lenis?.raf(time);
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  (lenis as unknown as { __destroy: () => void }).__destroy = () => {
    cancelAnimationFrame(raf);
    lenis?.destroy();
    lenis = null;
  };

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenis;
}

export function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (!target) return;
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset: -64, duration: 1.4 });
  } else {
    (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.5 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
