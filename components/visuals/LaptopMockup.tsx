"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  cat: "Femme" | "Homme" | "Accessoires";
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Robe lin", price: 89, cat: "Femme", image: "/images/products/robe-lin.jpg" },
  { id: 2, name: "Veste bordeaux", price: 149, cat: "Femme", image: "/images/products/veste.jpg" },
  { id: 3, name: "Sac cuir rouge", price: 119, cat: "Accessoires", image: "/images/products/sac.jpg" },
  { id: 4, name: "Chemise denim", price: 69, cat: "Homme", image: "/images/products/chemise.jpg" },
  { id: 5, name: "Manteau long", price: 189, cat: "Homme", image: "/images/products/manteau.jpg" },
  { id: 6, name: "Pantalon jean", price: 99, cat: "Femme", image: "/images/products/pantalon.jpg" },
];

const categories = ["Tout", "Femme", "Homme", "Accessoires"] as const;

export default function LaptopMockup() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Tout");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [openCart, setOpenCart] = useState(false);
  const [toast, setToast] = useState(false);
  const [ordered, setOrdered] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  const shown = cat === "Tout" ? products : products.filter((p) => p.cat === cat);
  const items = products.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
  const count = items.reduce((n, p) => n + p.qty, 0);
  const total = items.reduce((n, p) => n + p.qty * p.price, 0);

  function add(id: number) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setOrdered(false);
    setToast(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(false), 1200);
  }

  function checkout() {
    setCart({});
    setOrdered(true);
  }

  return (
    <div className="w-full max-w-[430px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-[10px] border-[7px] border-ink bg-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
        <div className="flex h-full flex-col bg-[#FAF8F4] text-ink">
          <header className="flex items-center gap-2 border-b border-ink/10 px-2.5 py-1.5">
            <span className="font-black text-[10px] tracking-[-0.05em]">ATELIER.</span>
            <nav className="flex flex-1 justify-center gap-1" aria-label="Catégories de la boutique">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                  className={`rounded-full px-1.5 py-0.5 text-[5.5px] font-semibold uppercase tracking-wide transition-colors ${
                    cat === c ? "bg-ink text-paper" : "text-ink/60 hover:text-red"
                  }`}
                >
                  {c}
                </button>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setOpenCart((v) => !v)}
              aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
              aria-expanded={openCart}
              className="flex items-center gap-1 rounded-full border border-ink/20 px-1.5 py-0.5 text-[5.5px] font-semibold"
            >
              <span aria-hidden="true">▣</span> PANIER ({count})
            </button>
          </header>

          <div className="flex min-h-0 flex-1 gap-2 p-2.5">
            <div className="flex w-[38%] shrink-0 flex-col justify-center">
              <span className="text-[5px] font-bold uppercase tracking-[0.2em] text-red">Collection 2025</span>
              <span className="font-display text-[18px] leading-[0.95]">
                L&apos;ESSENTIEL
                <br />
                DU STYLE.
              </span>
              <button
                type="button"
                onClick={() => { setCat("Tout"); setOpenCart(false); }}
                className="mt-1.5 w-fit bg-ink px-2 py-1 text-[5px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-red"
              >
                Voir la collection →
              </button>
            </div>

            <div className="phone-scroll grid min-h-0 flex-1 grid-cols-3 gap-1.5 overflow-y-auto">
              {shown.map((p) => (
                <div key={p.id} className="flex min-h-0 flex-col">
                  <div className="relative flex-1 overflow-hidden rounded-sm bg-[#E9E3D9]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 80px, 130px"
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <span className="mt-0.5 truncate text-[5px] font-semibold">{p.name}</span>
                  <span className="flex items-center justify-between text-[5px] text-ink/60">
                    {p.price} $
                    <button
                      type="button"
                      onClick={() => add(p.id)}
                      aria-label={`Ajouter ${p.name} au panier`}
                      className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-[7px] leading-none text-white transition-colors hover:bg-red"
                    >
                      +
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {toast && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="absolute right-3 top-9 rounded-full bg-[#128C7E] px-2 py-0.5 text-[5.5px] font-bold text-white shadow"
              >
                Ajouté au panier ✓
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {openCart && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                className="absolute right-0 top-0 flex h-full w-[62%] flex-col border-l border-ink/15 bg-white px-2.5 py-2 shadow-[-8px_0_24px_-12px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase">Votre panier</span>
                  <button
                    type="button"
                    onClick={() => setOpenCart(false)}
                    aria-label="Fermer le panier"
                    className="flex h-4 w-4 items-center justify-center border border-ink/20 text-[7px]"
                  >
                    ✕
                  </button>
                </div>
                <div className="phone-scroll mt-1 flex-1 space-y-1 overflow-y-auto">
                  {items.length === 0 ? (
                    <p className="mt-6 text-center text-[6px] text-[#5E5A53]">Votre panier est vide.</p>
                  ) : (
                    items.map((p) => (
                      <div key={p.id} className="flex items-center justify-between border-b border-ink/10 pb-0.5 text-[6px]">
                        <span className="truncate">{p.name} ×{p.qty}</span>
                        <span>{p.price * p.qty} $</span>
                      </div>
                    ))
                  )}
                  {ordered && <p className="text-[6px] font-bold text-[#128C7E]">Commande reçue ✅</p>}
                </div>
                <div className="flex items-center justify-between border-t border-ink/15 pt-1 text-[7px] font-bold">
                  <span>Total</span>
                  <span>{total} $</span>
                </div>
                <button
                  type="button"
                  onClick={checkout}
                  disabled={items.length === 0}
                  className="mt-1 bg-ink py-1 text-[6px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-red disabled:opacity-40"
                >
                  Passer commande →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div
        className="relative mx-auto h-3 w-[110%] -translate-x-[4.5%] bg-gradient-to-b from-[#d5d5d5] via-[#bdbdbd] to-[#8f8f8f]"
        style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0 100%)" }}
      >
        <span className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b bg-[#9a9a9a]" />
      </div>
    </div>
  );
}
