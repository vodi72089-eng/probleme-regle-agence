import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Fade-up reveal on scroll                                            */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 34,
  duration = 0.95,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Scroll-triggered via IntersectionObserver...
  const inView = useInView(ref, { once: true, amount });
  useEffect(() => {
    if (inView) setShown(true);
  }, [inView]);

  // ...plus a mount-time check so anything already in (or above) the viewport
  // is revealed immediately — never left invisible.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) setShown(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Letter-by-letter title reveal                                       */
/* ------------------------------------------------------------------ */
export function SplitLetters({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  start = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: boolean;
}) {
  const chars = Array.from(text);
  return (
    <span className={cn("inline-flex overflow-hidden pb-[0.06em]", className)} aria-label={text}>
      {chars.map((c, i) => (
        <span key={`${c}-${i}`} className="inline-block overflow-hidden" aria-hidden>
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "112%", rotate: 7, opacity: 0 }}
            animate={start ? { y: "0%", rotate: 0, opacity: 1 } : undefined}
            transition={{
              duration: 1.05,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic button — follows the cursor, swaps black -> red on hover    */
/* ------------------------------------------------------------------ */
type BtnVariant = "red" | "ink" | "outline" | "neu";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "red",
  className,
  pulse = false,
  cursor = "link",
  strength = 0.26,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: BtnVariant;
  className?: string;
  pulse?: boolean;
  cursor?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.35 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const skin: Record<BtnVariant, string> = {
    red: "bg-red text-cream hover:bg-ink",
    ink: "bg-ink text-cream hover:bg-red",
    outline:
      "border border-ink bg-transparent text-ink hover:border-red hover:bg-red hover:text-cream",
    neu: "",
  };

  const base =
    variant === "neu"
      ? "pr-neu-button group relative inline-flex items-center gap-3"
      : "group relative inline-flex origin-center items-center gap-3 overflow-hidden rounded-full px-7 py-4 font-sans text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-500 active:scale-[0.96] sm:px-9 sm:py-[18px] sm:text-xs";

  const cls = cn(
    base,
    skin[variant],
    variant !== "neu" && pulse && "animate-pulse-red",
    className,
  );

  const inner = href ? (
    <a href={href} onClick={onClick} data-cursor={cursor} className={cls}>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1.5">
        →
      </span>
    </a>
  ) : (
    <button type="button" onClick={onClick} data-cursor={cursor} className={cls}>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1.5">
        →
      </span>
    </button>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Editorial curtain reveal — uses scaleY on an overlay curtain, never  */
/* clip-path on the content itself (clip-path can stay stuck at 100%    */
/* and permanently hide the media inside scroll-triggered wrappers).    */
/* ------------------------------------------------------------------ */
export function CurtainReveal({
  children,
  className,
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "red";
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Scroll-position driven (no IntersectionObserver) — the curtain always lifts
  // exactly in proportion to how far the media has entered the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.28"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 0.72], [1, 0], { clamp: true });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* content is always rendered un-clipped */}
      {children}
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className={cn(
          "pointer-events-none absolute inset-0 z-20 origin-top will-change-transform",
          tone === "ink" ? "bg-ink" : "bg-red",
        )}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Image with slow scroll zoom (1.18 -> 1.0)                           */
/* ------------------------------------------------------------------ */
export function ZoomImage({
  src,
  alt,
  className,
  imgClassName,
  from = 1.18,
  hoverZoom = false,
  parallax = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  from?: number;
  hoverZoom?: boolean;
  parallax?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [from, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ scale, y }} className="h-full w-full">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full object-cover will-change-transform",
            hoverZoom &&
              "transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]",
            imgClassName,
          )}
        />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Word-by-word scroll reveal (for the final statement)                */
/* ------------------------------------------------------------------ */
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [14, 0]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block will-change-transform">
        {word}
      </motion.span>
    </span>
  );
}

export function WordsScrollReveal({
  text,
  className,
  offset = ["start 0.9", "end 0.42"] as [string, string],
}: {
  text: string;
  className?: string;
  offset?: [string, string];
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as never,
  });
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1 / words.length + 0.08);
        return <Word key={`${w}-${i}`} word={w} progress={scrollYProgress} range={[start, end]} />;
      })}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Rotating circular badge (SVG text on path)                          */
/* ------------------------------------------------------------------ */
export function CircularText({
  text,
  className,
  size = 132,
}: {
  text: string;
  className?: string;
  size?: number;
}) {
  const id = `circle-${text.replace(/\s+/g, "").slice(0, 10)}`;
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <defs>
          <path
            id={id}
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "0.28em",
          }}
        >
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section index label, e.g. "01 / 04"                                 */
/* ------------------------------------------------------------------ */
export function SectionIndex({
  index,
  label,
  className,
  tone = "ink",
}: {
  index: string;
  label?: string;
  className?: string;
  tone?: "ink" | "cream";
}) {
  const color = tone === "ink" ? "text-ink" : "text-cream";
  return (
    <Reveal className={cn("flex items-center gap-4", color, className)} y={16}>
      <span className="font-anton text-sm tracking-[0.1em]">{index}</span>
      <motion.span
        className="h-[1.5px] origin-left bg-red"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
        style={{ width: 64 }}
      />
      {label && (
        <span className="font-sans text-[10px] font-bold tracking-[0.28em] uppercase opacity-70">
          {label}
        </span>
      )}
    </Reveal>
  );
}
