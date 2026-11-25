"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

/* ------------------------------------------------------------------ */
/* 001 — Mini boutique dans un ordinateur portable                     */
/* ------------------------------------------------------------------ */

type ShopItem = { id: number; name: string; price: number; cat: string; bg: string };

const SHOP_ITEMS: ShopItem[] = [
  { id: 1, name: "Robe lin", price: 89, cat: "Femme", bg: "linear-gradient(135deg,#D9C7B0,#9C8165)" },
  { id: 2, name: "Veste", price: 149, cat: "Femme", bg: "linear-gradient(135deg,#2A2A2A,#5C5C5C)" },
  { id: 3, name: "Sac cuir", price: 119, cat: "Accessoires", bg: "linear-gradient(135deg,#C0563B,#7A3224)" },
  { id: 4, name: "Chemise", price: 69, cat: "Homme", bg: "linear-gradient(135deg,#7E9BB5,#3F5A73)" },
  { id: 5, name: "Manteau", price: 189, cat: "Homme", bg: "linear-gradient(135deg,#5B4A3B,#241D17)" },
  { id: 6, name: "Pantalon", price: 99, cat: "Femme", bg: "linear-gradient(135deg,#CBB79C,#8B7458)" },
];

function ShopDemo() {
  const [cat, setCat] = useState("Tout");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  const shown = cat === "Tout" ? SHOP_ITEMS : SHOP_ITEMS.filter((i) => i.cat === cat);
  const lines = SHOP_ITEMS.filter((i) => cart[i.id]).map((i) => ({ ...i, qty: cart[i.id] }));
  const total = lines.reduce((n, i) => n + i.price * i.qty, 0);
  const count = lines.reduce((n, i) => n + i.qty, 0);

  const add = (id: number) => {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setDone(false);
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#E9E3D9] px-2 py-3">
      <div className="w-full max-w-[430px]">
        {/* écran */}
        <div className="rounded-t-[8px] border-[5px] border-ink bg-ink p-[2px] shadow-[0_16px_30px_-18px_rgba(0,0,0,0.6)]">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[3px] bg-[#FAF8F4]">
            <div className="flex h-full w-full flex-col p-2 text-ink">
              <div className="flex items-center justify-between border-b border-ink/15 pb-1">
                <span className="font-display text-[10px] tracking-[-0.05em]">ATELIER.</span>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="rounded-full border border-ink/25 px-1.5 py-0.5 font-sans text-[6px] font-bold uppercase"
                  aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
                >
                  Panier ({count})
                </button>
              </div>

              <div className="flex gap-1 py-1">
                {["Tout", "Femme", "Homme"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`rounded-full px-1.5 py-0.5 font-sans text-[6px] font-bold uppercase ${
                      cat === c ? "bg-ink text-cream" : "border border-ink/20"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="grid flex-1 grid-cols-3 gap-1.5 overflow-y-auto">
                {shown.map((item) => (
                  <div key={item.id} className="flex min-h-0 flex-col">
                    <div className="flex-1 rounded-sm" style={{ background: item.bg }} />
                    <span className="mt-0.5 truncate font-sans text-[6px] font-semibold">{item.name}</span>
                    <span className="flex items-center justify-between font-sans text-[6px]">
                      {item.price} $
                      <button
                        onClick={() => add(item.id)}
                        aria-label={`Ajouter ${item.name}`}
                        className="flex h-3 w-3 items-center justify-center rounded-full bg-ink text-[7px] leading-none text-white hover:bg-red"
                      >
                        +
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {open && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                className="absolute right-0 top-0 flex h-full w-3/4 flex-col border-l border-ink/15 bg-white px-2 py-1 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] uppercase">Panier</span>
                  <button onClick={() => setOpen(false)} className="text-[8px]" aria-label="Fermer le panier">✕</button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {lines.length === 0 && <p className="mt-5 text-center font-sans text-[6px]">Panier vide.</p>}
                  {lines.map((l) => (
                    <div key={l.id} className="flex justify-between border-b border-ink/10 py-0.5 font-sans text-[6px]">
                      <span>{l.name} ×{l.qty}</span><span>{l.price * l.qty} $</span>
                    </div>
                  ))}
                  {done && <p className="font-sans text-[6px] font-bold text-[#16803C]">Commande reçue ✅</p>}
                </div>
                <div className="flex justify-between border-t border-ink/15 pt-1 font-display text-[9px]">
                  <span>Total</span><span>{total} $</span>
                </div>
                <button
                  onClick={() => { setCart({}); setDone(true); }}
                  disabled={!count}
                  className="mt-1 bg-ink py-1 font-sans text-[6px] font-bold uppercase text-white disabled:opacity-40"
                >
                  Passer commande
                </button>
              </motion.div>
            )}
          </div>
        </div>
        {/* clavier / base */}
        <div
          className="relative mx-auto h-2 w-[110%] -translate-x-[4.5%] bg-gradient-to-b from-[#d8d8d8] via-[#bcbcbc] to-[#8f8f8f]"
          style={{ clipPath: "polygon(4% 0,96% 0,100% 100%,0 100%)" }}
        >
          <span className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b bg-[#9a9a9a]" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 002 — Mini app de gestion dans un téléphone                         */
/* ------------------------------------------------------------------ */

type Task = { id: number; label: string; tag: string; done: boolean };

function AppDemo() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: "Refonte du site", tag: "WEB", done: true },
    { id: 2, label: "Relance client", tag: "SOCIAL", done: false },
    { id: 3, label: "Commande #204", tag: "AUTO", done: true },
    { id: 4, label: "Rapport mensuel", tag: "DATA", done: false },
  ]);
  const [view, setView] = useState<"home" | "tasks">("home");
  const [draft, setDraft] = useState("");

  const add = (e: FormEvent) => {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    setTasks((t) => [...t, { id: Date.now(), label: v, tag: "NEW", done: false }]);
    setDraft("");
  };
  const doneCount = tasks.filter((t) => t.done).length;
  const visible = view === "home" ? tasks.slice(0, 3) : tasks;

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#E9E3D9] p-2">
      <div className="relative h-full max-h-[430px] rounded-[26px] border-[5px] border-ink bg-gradient-to-br from-[#666] via-[#111] to-[#3a3a3a] p-[2px] shadow-[0_22px_44px_-18px_rgba(0,0,0,0.65)]">
        <span className="absolute -left-[3px] top-[22%] h-6 w-[3px] rounded-l bg-[#333]" aria-hidden />
        <span className="absolute -left-[3px] top-[33%] h-6 w-[3px] rounded-l bg-[#333]" aria-hidden />
        <span className="absolute -right-[3px] top-[26%] h-9 w-[3px] rounded-r bg-[#333]" aria-hidden />
        <div className="relative h-full w-full overflow-hidden rounded-[21px] bg-[#F5F3EE]">
          <div className="absolute left-1/2 top-1.5 z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-ink" aria-hidden />
          <div className="flex h-full w-full flex-col p-2.5 pt-6 text-ink">
            <div className="flex items-center justify-between">
              <span className="font-black text-[12px] tracking-tight">taskflow</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[7px] text-cream">PR</span>
            </div>

            <p className="mt-2 font-sans text-[7px] font-bold uppercase tracking-[0.18em] text-[#5E5A53]">Aujourd&apos;hui</p>
            <p className="font-display text-[19px] leading-none">Bonjour, Patrick</p>

            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="rounded-lg bg-ink p-2 text-cream">
                <span className="block font-sans text-[6px] uppercase tracking-wider opacity-75">À faire</span>
                <span className="font-display text-[18px]">{tasks.length - doneCount}</span>
              </div>
              <div className="rounded-lg border border-ink/15 bg-white p-2">
                <span className="block font-sans text-[6px] uppercase tracking-wider text-[#5E5A53]">Terminé</span>
                <span className="font-display text-[18px]">{doneCount}</span>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <span className="font-sans text-[7px] font-bold uppercase tracking-widest text-[#5E5A53]">
                {view === "home" ? "Tâches du jour" : "Toutes les tâches"}
              </span>
              <span className="font-sans text-[6px] text-[#5E5A53]">{tasks.length} tâches</span>
            </div>

            <div className="mt-1 flex-1 space-y-1 overflow-y-auto">
              {visible.map((t) => (
                <div key={t.id} className="flex items-center gap-1.5 rounded-lg border border-ink/10 bg-white px-1.5 py-1.5">
                  <button
                    onClick={() => setTasks((l) => l.map((x) => x.id === t.id ? { ...x, done: !x.done } : x))}
                    aria-pressed={t.done}
                    aria-label={`${t.done ? "Rouvrir" : "Terminer"} ${t.label}`}
                    className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border text-[8px] leading-none ${t.done ? "border-red bg-red text-white" : "border-ink/40"}`}
                  >
                    {t.done ? "✓" : ""}
                  </button>
                  <span className={`flex-1 font-sans text-[7.5px] font-semibold ${t.done ? "text-[#5E5A53] line-through" : ""}`}>{t.label}</span>
                  <span className="rounded bg-ink/5 px-1 py-0.5 font-sans text-[5px] font-bold tracking-wide text-[#5E5A53]">{t.tag}</span>
                </div>
              ))}
            </div>

            <form onSubmit={add} className="mt-1 flex gap-1">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Nouvelle tâche..."
                aria-label="Nouvelle tâche"
                className="min-w-0 flex-1 rounded border border-ink/15 bg-white px-1.5 py-1 font-sans text-[7px] outline-none"
              />
              <button className="bg-ink px-2 font-sans text-[9px] text-cream" aria-label="Ajouter">+</button>
            </form>

            <div className="mt-2 flex justify-around border-t border-ink/10 pt-1.5">
              {(["home", "tasks"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`font-sans text-[7px] font-bold uppercase tracking-wide ${view === v ? "text-red" : "text-ink/40"}`}
                >
                  {v === "home" ? "⌂ Accueil" : "▤ Tâches"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 003 — Automatisation expliquée étape par étape                      */
/* ------------------------------------------------------------------ */

function AutoDemo() {
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState<string | null>(null);

  const send = (e: FormEvent) => {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    setSent(v);
    setDraft("");
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#F7F5F0] p-2.5 text-ink">
      <div className="flex items-center justify-between border-b border-ink/12 pb-1.5">
        <span className="font-display text-[10px] tracking-[-0.04em]">Automatisation WhatsApp</span>
        <span className="flex items-center gap-1 rounded-full bg-[#E7F8EC] px-1.5 py-0.5 font-sans text-[6px] font-bold text-[#16803C]">
          <span className="h-1 w-1 rounded-full bg-[#25D366]" /> EN DIRECT
        </span>
      </div>

      {/* étape 1 */}
      <div className="mt-2 flex items-start gap-1.5">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink font-anton text-[8px] text-cream">1</span>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[7px] font-bold uppercase tracking-wider text-[#5E5A53]">Le client écrit</p>
          <div className="mt-1 inline-block max-w-[92%] rounded-lg rounded-bl-sm bg-white px-2 py-1 font-sans text-[7px] leading-snug shadow-sm">
            {sent ?? "Bonjour, j'ai un problème avec mon site…"}
          </div>
        </div>
      </div>

      <div className="my-1 flex items-center gap-1.5 pl-5">
        <span className="h-px flex-1 bg-red" />
        <span className="font-sans text-[6px] font-bold uppercase tracking-wider text-red">réponse auto</span>
      </div>

      {/* étape 2 */}
      <div className="flex items-start gap-1.5">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red font-anton text-[8px] text-ink">2</span>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-[7px] font-bold uppercase tracking-wider text-[#5E5A53]">L&apos;assistant répond instantanément</p>
          <div className="mt-1 inline-block max-w-[92%] rounded-lg rounded-br-sm bg-[#DCF8C6] px-2 py-1 font-sans text-[7px] leading-snug shadow-sm">
            Bonjour 🙂 On s&apos;occupe de votre site : audit, refonte et mise en ligne. ✅
          </div>
        </div>
      </div>

      {/* étape 3 */}
      <div className="mt-2 flex items-start gap-1.5">
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink font-anton text-[8px] text-cream">3</span>
        <div className="min-w-0 flex-1 rounded-lg border border-ink/12 bg-white p-2">
          <div className="flex items-end justify-between">
            <div>
              <span className="block font-sans text-[6px] font-bold uppercase tracking-wider text-[#5E5A53]">Chiffre d&apos;affaires</span>
              <span className="font-display text-[19px] leading-none">48 290 $</span>
            </div>
            <span className="rounded-full bg-[#E7F8EC] px-1.5 py-0.5 font-sans text-[6px] font-bold text-[#16803C]">+38%</span>
          </div>
          <div className="mt-1.5 flex h-7 items-end gap-0.5">
            {[28, 42, 36, 58, 50, 72, 66, 88, 80, 100].map((h, i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className={`flex-1 origin-bottom rounded-t-[1px] ${i > 7 ? "bg-red" : "bg-ink/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={send} className="mt-auto flex gap-1 pt-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Écrivez un message..."
          aria-label="Votre message"
          className="min-w-0 flex-1 rounded-full border border-ink/15 bg-white px-2 py-1 font-sans text-[7px] outline-none"
        />
        <button className="rounded-full bg-[#128C7E] px-2 font-sans text-[9px] text-white" aria-label="Envoyer">➤</button>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function ProjectDemo({ index }: { index: number }) {
  return (
    <div className="h-full w-full">
      {index === 0 ? <ShopDemo /> : index === 1 ? <AppDemo /> : <AutoDemo />}
    </div>
  );
}
