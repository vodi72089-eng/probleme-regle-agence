"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

/* ------------------------------------------------------------------ */
/* 001 — Mini boutique                                                 */
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
    <div className="relative flex h-full w-full flex-col bg-[#FAF8F4] p-2.5 text-ink">
      <div className="flex items-center justify-between border-b border-ink/15 pb-1.5">
        <span className="font-display text-[11px] tracking-[-0.05em]">ATELIER.</span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-ink/25 px-2 py-0.5 font-sans text-[7px] font-bold uppercase tracking-wide"
          aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
        >
          Panier ({count})
        </button>
      </div>

      <div className="flex gap-1 py-1.5">
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
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-[8px] leading-none text-white hover:bg-red"
              >
                +
              </button>
            </span>
          </div>
        ))}
      </div>

      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          className="absolute right-0 top-0 flex h-full w-3/4 flex-col border-l border-ink/15 bg-white px-2 py-1.5 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-[11px] uppercase">Panier</span>
            <button onClick={() => setOpen(false)} className="text-[9px]" aria-label="Fermer le panier">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {lines.length === 0 && <p className="mt-6 text-center font-sans text-[6px]">Panier vide.</p>}
            {lines.map((l) => (
              <div key={l.id} className="flex justify-between border-b border-ink/10 py-0.5 font-sans text-[6px]">
                <span>{l.name} ×{l.qty}</span>
                <span>{l.price * l.qty} $</span>
              </div>
            ))}
            {done && <p className="font-sans text-[6px] font-bold text-[#16803C]">Commande reçue ✅</p>}
          </div>
          <div className="flex justify-between border-t border-ink/15 pt-1 font-display text-[10px]">
            <span>Total</span>
            <span>{total} $</span>
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
  );
}

/* ------------------------------------------------------------------ */
/* 002 — Mini app de gestion                                           */
/* ------------------------------------------------------------------ */

type Task = { id: number; label: string; done: boolean };

function AppDemo() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: "Refonte du site", done: true },
    { id: 2, label: "Relance client", done: false },
    { id: 3, label: "Commande #204", done: true },
    { id: 4, label: "Rapport mensuel", done: false },
  ]);
  const [view, setView] = useState<"home" | "tasks">("home");
  const [draft, setDraft] = useState("");

  const add = (e: FormEvent) => {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    setTasks((t) => [...t, { id: Date.now(), label: v, done: false }]);
    setDraft("");
  };
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div className="flex h-full w-full flex-col bg-[#F5F3EE] p-3 text-ink">
      <div className="flex items-center justify-between">
        <span className="font-black text-[11px] tracking-tight">taskflow</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[7px] text-cream">PR</span>
      </div>

      {view === "home" ? (
        <>
          <p className="mt-3 font-sans text-[7px] uppercase tracking-widest opacity-50">Aujourd&apos;hui</p>
          <p className="font-display text-[19px] leading-none">Bonjour, Patrick</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-ink p-2 text-cream">
              <span className="block font-sans text-[6px] uppercase opacity-70">En cours</span>
              <span className="font-display text-[16px]">{tasks.length - doneCount}</span>
            </div>
            <div className="rounded-lg border border-ink/15 bg-white p-2">
              <span className="block font-sans text-[6px] uppercase opacity-50">Terminé</span>
              <span className="font-display text-[16px]">{doneCount}</span>
            </div>
          </div>
          <div className="mt-2 flex-1 space-y-1 overflow-y-auto">
            {tasks.slice(0, 4).map((t) => (
              <TaskLine key={t.id} task={t} onToggle={() => setTasks((l) => l.map((x) => x.id === t.id ? { ...x, done: !x.done } : x))} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="mt-3 font-display text-[15px] uppercase">Toutes les tâches</p>
          <div className="mt-2 flex-1 space-y-1 overflow-y-auto">
            {tasks.map((t) => (
              <TaskLine key={t.id} task={t} onToggle={() => setTasks((l) => l.map((x) => x.id === t.id ? { ...x, done: !x.done } : x))} />
            ))}
          </div>
        </>
      )}

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
            className={`font-sans text-[7px] font-bold uppercase ${view === v ? "text-red" : "opacity-40"}`}
          >
            {v === "home" ? "⌂ Accueil" : "▤ Tâches"}
          </button>
        ))}
      </div>
    </div>
  );
}

function TaskLine({ task, onToggle }: { task: Task; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-ink/10 bg-white px-1.5 py-1">
      <button
        onClick={onToggle}
        aria-pressed={task.done}
        className={`h-3 w-3 shrink-0 rounded-full border text-[7px] leading-none ${task.done ? "border-red bg-red text-white" : "border-ink/40"}`}
      >
        {task.done ? "✓" : ""}
      </button>
      <span className={`flex-1 font-sans text-[7px] ${task.done ? "line-through opacity-40" : ""}`}>{task.label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 003 — Simulation WhatsApp + dashboard                              */
/* ------------------------------------------------------------------ */

type Msg = { from: "me" | "them"; text: string };

function AutoDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "them", text: "Bonjour, j'ai un problème avec mon site…" },
    { from: "me", text: "On s'en occupe ✅ Notre assistant répond en direct." },
    { from: "them", text: "Et les chiffres ?" },
  ]);
  const [draft, setDraft] = useState("");

  const send = (e: FormEvent) => {
    e.preventDefault();
    const v = draft.trim();
    if (!v) return;
    setMsgs((m) => [...m, { from: "me", text: v }]);
    setDraft("");
    window.setTimeout(() => {
      setMsgs((m) => [...m, { from: "me", text: "✅ Demande reçue ! On vous contacte sur WhatsApp." }]);
    }, 950);
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#ECE5DD] text-[#1F2C24]">
      <div className="flex items-center gap-1.5 bg-[#075E54] px-2 py-1.5 text-white">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[7px] font-bold">PR</span>
        <span className="flex-1 font-sans text-[8px] font-semibold">Support Client • Auto <span className="opacity-70">en ligne</span></span>
        <span className="text-[9px]">⋮</span>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto px-2 py-2">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[86%] rounded-lg px-1.5 py-1 font-sans text-[7px] leading-snug shadow-sm ${m.from === "me" ? "rounded-br-sm bg-[#DCF8C6]" : "rounded-bl-sm bg-white"}`}>
              {m.text}
              <span className="mt-0.5 block text-right text-[5px] opacity-50">11:3{i % 9} ✓✓</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-ink/10 bg-[#F0F2F5] p-1.5">
        <div className="mb-1.5 rounded-md border border-ink/10 bg-white p-1.5">
          <div className="flex items-end justify-between">
            <div>
              <span className="block font-sans text-[5px] uppercase tracking-wider opacity-50">Chiffre d&apos;affaires</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-display text-[15px] leading-none"
              >
                48 290 $
              </motion.span>
            </div>
            <span className="rounded-full bg-[#E7F8EC] px-1.5 py-0.5 font-sans text-[5px] font-bold text-[#16803C]">+38%</span>
          </div>
          <div className="mt-1 flex h-5 items-end gap-0.5">
            {[30, 45, 38, 60, 52, 74, 68, 90].map((h, i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`flex-1 origin-bottom rounded-t-[1px] ${i > 5 ? "bg-red" : "bg-ink/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <form onSubmit={send} className="flex gap-1">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Message..."
            aria-label="Votre message"
            className="min-w-0 flex-1 rounded-full bg-white px-2 py-1 font-sans text-[7px] outline-none"
          />
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A884] text-[9px] text-white" aria-label="Envoyer">➤</button>
        </form>
      </div>
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
