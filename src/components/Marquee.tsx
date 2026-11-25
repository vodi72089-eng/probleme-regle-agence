import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

const ITEMS = ["Sites web", "Apps", "Automatisations", "Réseaux sociaux", "Problème réglé"];

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/* Row that loops forever, speeds up + skews with scroll velocity */
function VelocityRow({
  baseVelocity = 8,
  tone = "ink",
  outline = false,
  startDirection = 1,
}: {
  baseVelocity?: number;
  tone?: "ink" | "cream";
  outline?: boolean;
  startDirection?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 380 });
  const factor = useTransform(smooth, [0, 900], [0, 4.5], { clamp: false });
  const skew = useTransform(smooth, [-1200, 1200], [3.5, -3.5]);
  const direction = useRef(startDirection);

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = startDirection * -1;
    else if (f > 0) direction.current = startDirection;
    moveBy += direction.current * moveBy * Math.abs(f);
    baseX.set(baseX.get() + moveBy);
  });

  const seq = [...ITEMS, ...ITEMS];

  return (
    <motion.div style={{ x, skewX: skew }} className="marquee-track">
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0 items-center">
          {seq.map((it, i) => (
            <span key={`${half}-${i}`} className="flex items-center">
              <span
                className={cn(
                  "font-anton text-[7vw] leading-[1.05] tracking-[-0.01em] whitespace-nowrap uppercase sm:text-[4.4vw] lg:text-[3.4vw]",
                  tone === "ink" ? "text-cream" : "text-ink",
                  outline && (tone === "ink" ? "text-outline-cream" : "text-outline"),
                )}
              >
                {it}
              </span>
              <span className="mx-[0.5em] inline-block size-[0.16em] shrink-0 rounded-full bg-red" />
            </span>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

/* Simple CSS loop for the echo band */
function StaticRow({ reverse }: { reverse?: boolean }) {
  const seq = [...ITEMS, ...ITEMS];
  return (
    <div className={cn("marquee-track", reverse ? "animate-marquee-rev" : "animate-marquee")}>
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0 items-center">
          {seq.map((it, i) => (
            <span key={`${half}-${i}`} className="flex items-center">
              <span className="text-outline font-anton text-[3.2vw] leading-[1.2] whitespace-nowrap uppercase">
                {it}
              </span>
              <span className="mx-[0.6em] inline-block size-[0.18em] shrink-0 rounded-full bg-red" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-hidden className="relative select-none">
      <div className="overflow-hidden border-y border-ink bg-ink py-4 sm:py-6">
        <VelocityRow baseVelocity={9} />
      </div>
      <div className="overflow-hidden border-b border-ink/12 bg-cream py-2.5">
        <StaticRow reverse />
      </div>
    </section>
  );
}
