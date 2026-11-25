import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Variant = "default" | "link" | "view" | "drag";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const dotX = useSpring(x, { stiffness: 1200, damping: 60, mass: 0.22 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 60, mass: 0.22 });
  const ringX = useSpring(x, { stiffness: 170, damping: 20, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 170, damping: 20, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const v = (el?.getAttribute("data-cursor") as Variant | null) ?? "default";
      setVariant(el ? v : "default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const isView = variant === "view";
  const isLink = variant === "link" || variant === "drag";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* trailing ring / label */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        className="absolute top-0 left-0 will-change-transform"
      >
        <motion.div
          animate={{
            width: isView ? 92 : isLink ? 46 : 26,
            height: isView ? 92 : isLink ? 46 : 26,
            opacity: isView ? 1 : 0.55,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/40 bg-red/0"
        >
          <AnimatePresence>
            {isView && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="font-sans text-[9px] font-bold tracking-[0.2em] text-red uppercase"
              >
                Voir
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* red dot */}
      <motion.div
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
        className="absolute top-0 left-0 will-change-transform"
      >
        <motion.div
          animate={{
            scale: isView ? 0 : isLink ? 0.35 : 1,
            backgroundColor: isLink ? "#FF1E1E" : "#FF1E1E",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 26 }}
          className="size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
        />
      </motion.div>
    </div>
  );
}
