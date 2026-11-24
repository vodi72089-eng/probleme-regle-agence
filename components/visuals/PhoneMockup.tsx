"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useReducedMotion } from "framer-motion";

type PhoneMockupProps = {
  variant?: "whatsapp" | "app";
  className?: string;
  interactive?: boolean;
};

type Message = { from: "them" | "me"; text: string; time: string };
type Task = { id: number; label: string; tag: string; done: boolean };

const initialMessages: Message[] = [
  { from: "them", text: "Bonjour ! J'ai un problème avec mon site web…", time: "11:28" },
  { from: "me", text: "Bonjour 🙂 On est là. Expliquez-nous en quelques mots.", time: "11:29" },
  { from: "them", text: "Je reçois des commandes mais personne ne répond.", time: "11:29" },
  { from: "me", text: "On va automatiser ça ✅", time: "11:30" },
  { from: "them", text: "Vraiment ? Montrez-moi 👀", time: "11:30" },
];

const liveScript: Omit<Message, "time">[] = [
  { from: "me", text: "Regardez : dès qu'un client écrit, l'assistant répond instantanément." },
  { from: "them", text: "Et ça marche même la nuit ?" },
  { from: "me", text: "Oui ✅ 24h/24, 7j/7. On vous envoie un résumé chaque matin." },
  { from: "them", text: "Parfait ! Je veux ça pour ma boutique." },
  { from: "me", text: "✅ Demande reçue ! On vous contacte sur ce numéro." },
  { from: "them", text: "Super, merci beaucoup 🙏" },
];

const initialTasks: Task[] = [
  { id: 1, label: "Refonte du site", tag: "Web", done: true },
  { id: 2, label: "Relance client", tag: "Social", done: false },
  { id: 3, label: "Commande #204", tag: "Auto", done: true },
  { id: 4, label: "Rapport mensuel", tag: "Data", done: false },
];

/* ---------- Icônes WhatsApp ---------- */

function StatusIcons() {
  return (
    <span className="flex items-center gap-1 text-white" aria-hidden="true">
      <svg viewBox="0 0 18 12" className="h-2.5 w-3.5 fill-current">
        <path d="M1 9h2v3H1zM5 7h2v5H5zM9 4.5h2V12H9zM13 1h2v11h-2z" />
      </svg>
      <svg viewBox="0 0 16 12" className="h-2.5 w-3 fill-current">
        <path d="M8 9.5a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm0-6.2c2 0 3.9.8 5.3 2.1l1.4-1.5A9.5 9.5 0 0 0 8 1.6 9.5 9.5 0 0 0 1.3 3.9l1.4 1.5A7.4 7.4 0 0 1 8 3.3Z" />
      </svg>
      <svg viewBox="0 0 20 10" className="h-2.5 w-4 fill-none stroke-current" strokeWidth="1">
        <rect x="1" y="1" width="15" height="8" rx="2" /><rect x="3" y="3" width="10" height="4" rx="1" className="fill-current stroke-none" /><path d="M18 3.5v3" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="13" height="12" rx="2" /><path d="m15 11 6-3v8l-6-3z" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" />
    </svg>
  );
}

function Verified({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-3 w-3 shrink-0 ${className}`} aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="#53BDEB" />
      <path d="M5.5 10.3l3 3 6-6.3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-2 w-2 fill-current" aria-hidden="true">
      <path d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H3.5A1.5 1.5 0 0 0 2 7.5v6A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 12.5 6h-1V4.5A3.5 3.5 0 0 0 8 1Zm-2 5V4.5a2 2 0 1 1 4 0V6H6Z" />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M8.5 14.5c1 1.6 2.1 2.4 3.5 2.4s2.5-.8 3.5-2.4" strokeLinecap="round" />
    </svg>
  );
}

function ClipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 11.5 12 20a5 5 0 0 1-7-7l8.5-8.5a3.5 3.5 0 0 1 5 5L10 18a2 2 0 0 1-3-3l8-8" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#8696A0]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" /><circle cx="12" cy="13.5" r="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="currentColor" aria-hidden="true">
      <path d="M2.5 21.5 23 12 2.5 2.5 2.5 9.7 16.6 12 2.5 14.3z" />
    </svg>
  );
}

function Ticks({ read }: { read: boolean }) {
  return (
    <svg viewBox="0 0 18 12" className="h-2.5 w-3.5" aria-hidden="true">
      <path
        d="M1 6.5 5 10.5 12.5 2M7 10.5 9 8.5 16.5 0"
        fill="none"
        stroke={read ? "#53BDEB" : "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tail({ side, color }: { side: "left" | "right"; color: string }) {
  return (
    <svg
      viewBox="0 0 10 10"
      className={`absolute bottom-0 h-2 w-2 ${side === "right" ? "-right-[5px]" : "-left-[5px]"}`}
      aria-hidden="true"
    >
      <path d={side === "right" ? "M0 0 L10 10 L0 10 Z" : "M10 0 L0 10 L10 10 Z"} fill={color} />
    </svg>
  );
}

function VoiceBubble() {
  return (
    <div className="relative ml-0 max-w-[86%] rounded-lg rounded-bl-sm bg-white px-2 py-1.5 shadow-[0_1px_0.5px_rgba(11,11,11,0.16)]">
      <Tail side="left" color="#FFFFFF" />
      <span className="flex items-center gap-1.5">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#128C7E] text-[7px] text-white">▶</span>
        <span className="flex h-4 flex-1 items-center gap-[2px]">
          {[5, 9, 6, 12, 8, 14, 7, 11, 5, 13, 9, 6, 10, 4, 8, 5].map((h, i) => (
            <span key={i} className="w-[2px] rounded-full bg-[#9AA5A0]" style={{ height: `${h}px` }} />
          ))}
        </span>
        <span className="text-[6.5px] text-[#667781]">0:12</span>
      </span>
      <span className="mt-0.5 flex items-center justify-end text-[6.5px] text-[#667781]">11:30</span>
    </div>
  );
}

function Wallpaper() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
      <defs>
        <pattern id="wa-doodles" width="70" height="70" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#A89B82" strokeWidth="1.1" strokeLinecap="round">
            <circle cx="14" cy="14" r="5" />
            <path d="M44 8l4.5 4.5L44 17l-4.5-4.5z" />
            <path d="M18 44c4-6 12-6 16 0-4 6-12 6-16 0z" />
            <path d="M54 44l2 4.5 4.5 2-4.5 2-2 4.5-2-4.5-4.5-2 4.5-2z" />
            <path d="M6 62c0-4 3-7 7-7s7 3 7 7" />
            <path d="M36 28c3-3 7-3 10 0M36 32c3 3 7 3 10 0" />
            <path d="M62 18c2 2 2 6 0 8M66 16c3 3 3 8 0 11" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wa-doodles)" />
    </svg>
  );
}

/* ---------- Logique ---------- */

function clock() {
  return new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function replyTo(text: string) {
  const t = text.toLowerCase();
  if (t.includes("site") || t.includes("web"))
    return "✅ On s'occupe de votre site : audit, refonte et mise en ligne.";
  if (t.includes("prix") || t.includes("tarif") || t.includes("devis") || t.includes("coute"))
    return "✅ Merci ! On vous envoie un devis personnalisé sur WhatsApp.";
  if (t.includes("commande") || t.includes("produit"))
    return "✅ Commande bien reçue — on prépare tout ça !";
  return "✅ Message reçu ! Notre équipe vous répond en quelques secondes.";
}

export default function PhoneMockup({
  variant = "whatsapp",
  className = "",
  interactive = false,
}: PhoneMockupProps) {
  const reduce = useReducedMotion();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const livePaused = useRef(false);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [taskDraft, setTaskDraft] = useState("");
  const nextId = useRef(5);
  const [view, setView] = useState<"home" | "tasks" | "stats">("home");
  const [filter, setFilter] = useState<"all" | "open" | "done">("all");

  useEffect(() => {
    if (variant === "whatsapp" && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing, variant]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  // Conversation "en direct" : les messages arrivent seuls et bouclent.
  useEffect(() => {
    if (variant !== "whatsapp" || !interactive || reduce) return;
    let cancelled = false;
    const local: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        local.push(window.setTimeout(resolve, ms));
      });

    let i = 0;
    void (async () => {
      await wait(1400);
      while (!cancelled) {
        if (livePaused.current) {
          await wait(600);
          continue;
        }
        setTyping(true);
        await wait(850);
        if (cancelled) return;
        setTyping(false);
        const next = liveScript[i % liveScript.length];
        setMessages((m) => [...m.slice(-11), { ...next, time: clock() }]);
        i += 1;
        await wait(2800);
      }
    })();

    return () => {
      cancelled = true;
      local.forEach(window.clearTimeout);
    };
  }, [variant, interactive, reduce]);

  function send(e: FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: "me", text, time: clock() }]);
    setDraft("");
    livePaused.current = true;
    timers.current.push(window.setTimeout(() => { livePaused.current = false; }, 9000));
    setTyping(true);
    timers.current.push(
      window.setTimeout(
        () => {
          setTyping(false);
          setMessages((m) => [...m, { from: "me", text: replyTo(text), time: clock() }]);
        },
        reduce ? 150 : 1100,
      ),
    );
  }

  function toggleTask(id: number) {
    setTasks((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function addTask(e: FormEvent) {
    e.preventDefault();
    const label = taskDraft.trim();
    if (!label) return;
    setTasks((list) => [...list, { id: nextId.current++, label, tag: "Nouveau", done: false }]);
    setTaskDraft("");
  }

  const doneCount = tasks.filter((t) => t.done).length;
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => (filter === "done" ? t.done : !t.done));

  return (
    <div
      className={`relative aspect-[9/19.5] w-full rounded-[2.6rem] bg-gradient-to-br from-[#6a6a6e] via-[#151517] to-[#3d3d41] p-[3px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)] ${className}`}
      role={interactive ? "group" : undefined}
      aria-label={
        interactive
          ? variant === "whatsapp"
            ? "Démo WhatsApp Business interactive"
            : "Mini application TaskFlow interactive"
          : undefined
      }
      aria-hidden={interactive ? undefined : true}
    >
      {/* Boutons latéraux */}
      <span className="absolute -left-[3px] top-[17%] h-[5%] w-[3px] rounded-l-sm bg-gradient-to-r from-[#262628] to-[#77777c]" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[25%] h-[9%] w-[3px] rounded-l-sm bg-gradient-to-r from-[#262628] to-[#77777c]" aria-hidden="true" />
      <span className="absolute -left-[3px] top-[36%] h-[9%] w-[3px] rounded-l-sm bg-gradient-to-r from-[#262628] to-[#77777c]" aria-hidden="true" />
      <span className="absolute -right-[3px] top-[27%] h-[12%] w-[3px] rounded-r-sm bg-gradient-to-l from-[#262628] to-[#77777c]" aria-hidden="true" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-ink ring-1 ring-white/10">
        {/* Dynamic Island */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-[70] flex h-[19px] w-[32%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2 shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          <span className="h-2 w-2 rounded-full bg-[#0d1620] ring-1 ring-white/10" />
        </div>

        {variant === "whatsapp" ? (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-[#ECE5DD]">
          {/* Barre d'état + en-tête */}
          <div className="bg-[#075E54] text-white">
            <div className="flex items-center justify-between px-3 pb-0.5 pt-1.5 text-[7.5px] font-semibold">
              <span>11:33</span>
              <StatusIcons />
            </div>
            <div className="flex items-center gap-2 px-2.5 pb-2 pt-1">
              <BackIcon />
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#CFE6D8] text-[9px] font-bold text-[#075E54]">
                PR
                <span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-px">
                  <Verified className="h-2.5 w-2.5" />
                </span>
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="flex items-center gap-1 truncate text-[9.5px] font-semibold">
                  Support Client <Verified />
                </span>
                <span className="block text-[7.5px] text-white/85">en ligne</span>
              </span>
              <VideoIcon />
              <DotsIcon />
            </div>
          </div>

          {/* Conversation */}
          <div className="relative flex-1 overflow-hidden bg-[#ECE5DD]">
            <Wallpaper />
            <span className="pointer-events-none absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full border border-[#128C7E]/30 bg-white/90 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wider text-[#128C7E] shadow-sm">
              <span className="h-1 w-1 animate-pulse rounded-full bg-[#25D366]" aria-hidden="true" />
              En direct
            </span>
            <div
              ref={chatRef}
              className="phone-scroll relative z-10 h-full space-y-1 overflow-y-auto px-2.5 py-2"
              role={interactive ? "log" : undefined}
              aria-live={interactive ? "polite" : undefined}
            >
              <div className="mx-auto w-fit rounded bg-[#FFF3C4] px-2 py-0.5 text-[6.5px] font-medium text-[#6B5A2E] shadow-sm">
                AUJOURD&apos;HUI
              </div>
              <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-[#F8F5EE]/95 px-2 py-0.5 text-[6px] text-[#667781] shadow-sm">
                <LockIcon /> Les messages sont chiffrés de bout en bout.
              </div>

              {messages.slice(0, 4).map((m, i) => (
                <Bubble key={`a-${i}`} m={m} index={i} />
              ))}

              <div className="flex justify-center py-0.5">
                <span className="rounded-full bg-[#D9D4C8] px-2 py-0.5 text-[6px] font-medium text-[#5E5A53]">11:30</span>
              </div>
              <VoiceBubble />

              {messages.slice(4).map((m, i) => (
                <Bubble key={`b-${i}`} m={m} index={i + 4} />
              ))}

              {typing && (
                <div className="flex justify-end">
                  <div className="relative rounded-lg rounded-br-sm bg-[#DCF8C6] px-2.5 py-2 shadow-[0_1px_0.5px_rgba(11,11,11,0.16)]">
                    <Tail side="right" color="#DCF8C6" />
                    <span className="flex gap-1">
                      {[0, 1, 2].map((n) => (
                        <span
                          key={n}
                          className="h-1 w-1 animate-bounce rounded-full bg-[#6B7C64]"
                          style={{ animationDelay: `${n * 0.15}s` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Barre de saisie */}
          <form
            onSubmit={interactive ? send : (e) => e.preventDefault()}
            className="flex items-center gap-1.5 bg-[#F0F2F5] px-2 py-1.5"
          >
            <SmileIcon />
            <input
              value={interactive ? draft : ""}
              onChange={(e) => setDraft(e.target.value)}
              readOnly={!interactive}
              placeholder="Message"
              aria-label="Votre message"
              tabIndex={interactive ? 0 : -1}
              className="min-w-0 flex-1 rounded-full bg-white px-2.5 py-1.5 text-[8.5px] text-[#1F2C24] outline-none placeholder:text-[#8696A0] focus:ring-1 focus:ring-[#128C7E]"
            />
            <ClipIcon />
            <CameraIcon />
            <button
              type="submit"
              aria-label="Envoyer le message"
              tabIndex={interactive ? 0 : -1}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00A884] shadow-sm transition-transform active:scale-95"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.2rem] bg-[#F5F3EE]">
          <div className="flex items-center justify-between px-3 pb-1 pt-5">
            <span className="font-black text-[11px] tracking-tight">taskflow</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[7px] text-paper">PR</span>
          </div>

          {view === "home" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="px-3">
                <p className="text-[7px] uppercase tracking-[0.15em] text-[#5E5A53]">Aujourd&apos;hui</p>
                <p className="font-display text-[20px] leading-none">Bonjour, Patrick</p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1.5 px-3">
                <div className="rounded-lg bg-ink p-2 text-paper">
                  <span className="block text-[6px] uppercase tracking-wider opacity-80">En cours</span>
                  <span className="font-display text-[17px]">{tasks.length - doneCount}</span>
                </div>
                <div className="rounded-lg border border-ink/15 bg-white p-2">
                  <span className="block text-[6px] uppercase tracking-wider text-[#5E5A53]">Terminé</span>
                  <span className="font-display text-[17px]">{doneCount}</span>
                </div>
              </div>
              <div className="phone-scroll mt-2 min-h-0 flex-1 space-y-1 overflow-y-auto px-3">
                {tasks.slice(0, 4).map((t) => (
                  <TaskRow key={t.id} task={t} onToggle={toggleTask} interactive={interactive} />
                ))}
              </div>
              {interactive && <AddTaskForm draft={taskDraft} setDraft={setTaskDraft} onSubmit={addTask} />}
            </div>
          )}

          {view === "tasks" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex gap-1 px-3 py-1.5">
                {(["all", "open", "done"] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={`rounded-full px-2 py-0.5 text-[6px] font-semibold uppercase transition-colors ${
                      filter === f ? "bg-ink text-paper" : "border border-ink/20 text-[#5E5A53]"
                    }`}
                  >
                    {f === "all" ? "Tout" : f === "open" ? "À faire" : "Fait"}
                  </button>
                ))}
              </div>
              <div className="phone-scroll min-h-0 flex-1 space-y-1 overflow-y-auto px-3">
                {filteredTasks.length === 0 ? (
                  <p className="mt-5 text-center text-[7px] text-[#5E5A53]">Aucune tâche ici.</p>
                ) : (
                  filteredTasks.map((t) => (
                    <TaskRow key={t.id} task={t} onToggle={toggleTask} interactive={interactive} />
                  ))
                )}
              </div>
              {interactive && <AddTaskForm draft={taskDraft} setDraft={setTaskDraft} onSubmit={addTask} />}
            </div>
          )}

          {view === "stats" && (
            <div className="flex min-h-0 flex-1 flex-col px-3 pt-1">
              <span className="text-[6px] uppercase tracking-[0.18em] text-[#5E5A53]">Productivité</span>
              <span className="font-display text-[30px] leading-none">
                {tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0}%
              </span>
              <span className="text-[7px] text-[#5E5A53]">des tâches terminées</span>
              <div className="mt-3 flex h-16 items-end gap-1.5 border-b border-ink/15 pb-1">
                {[35, 55, 42, 68, 50, 78, 64, 88, 72, 96].map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-t-[2px] ${i > 7 ? "bg-red" : "bg-ink/20"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                <div className="rounded-lg bg-white p-2">
                  <span className="block text-[6px] uppercase text-[#5E5A53]">Cette semaine</span>
                  <span className="font-display text-[15px]">+24%</span>
                </div>
                <div className="rounded-lg bg-white p-2">
                  <span className="block text-[6px] uppercase text-[#5E5A53]">Temps gagné</span>
                  <span className="font-display text-[15px]">6h</span>
                </div>
              </div>
            </div>
          )}

          <nav className="flex justify-around border-t border-ink/10 bg-white py-1.5" aria-label="Navigation TaskFlow">
            {([
              { key: "home", label: "Accueil", icon: "⌂" },
              { key: "tasks", label: "Tâches", icon: "▤" },
              { key: "stats", label: "Stats", icon: "◔" },
            ] as const).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => interactive && setView(item.key)}
                aria-current={view === item.key ? "page" : undefined}
                aria-label={item.label}
                tabIndex={interactive ? 0 : -1}
                className={`flex flex-col items-center gap-0.5 text-[6px] font-semibold ${
                  view === item.key ? "text-red" : "text-ink/40"
                }`}
              >
                <span className="text-[12px] leading-none" aria-hidden="true">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

        {/* Reflet de verre */}
        <div className="pointer-events-none absolute inset-0 z-[65] rounded-[2.35rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function Bubble({ m, index }: { m: Message; index: number }) {
  const mine = m.from === "me";
  const color = mine ? "#DCF8C6" : "#FFFFFF";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[86%] rounded-lg px-2 py-1.5 text-[8.5px] leading-[1.4] text-[#1F2C24] shadow-[0_1px_0.5px_rgba(11,11,11,0.16)] ${
          mine ? "rounded-br-sm" : "rounded-bl-sm"
        }`}
        style={{ backgroundColor: color }}
      >
        <Tail side={mine ? "right" : "left"} color={color} />
        <span>{m.text}</span>
        {m.text.startsWith("✅ Demande reçue") && (
          <span className="mt-0.5 block text-[6px] font-semibold uppercase tracking-wide text-[#128C7E]">
            Réponse automatique
          </span>
        )}
        <span className="mt-0.5 flex items-center justify-end gap-1 text-[6.5px] text-[#667781]">
          {m.time}
          <Ticks read={mine} />
        </span>
      </div>
    </div>
  );
}

function TaskRow({
  task,
  onToggle,
  interactive,
}: {
  task: Task;
  onToggle: (id: number) => void;
  interactive: boolean;
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-ink/10 bg-white px-2 py-1.5">
      <button
        type="button"
        onClick={() => interactive && onToggle(task.id)}
        aria-pressed={task.done}
        aria-label={`${task.done ? "Marquer comme non terminé" : "Marquer comme terminé"} : ${task.label}`}
        tabIndex={interactive ? 0 : -1}
        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border text-[7px] ${
          task.done ? "border-red bg-red text-white" : "border-ink/40"
        }`}
      >
        {task.done ? "✓" : ""}
      </button>
      <span className={`flex-1 text-[7.5px] font-medium ${task.done ? "text-[#5E5A53] line-through" : ""}`}>
        {task.label}
      </span>
      <span className="text-[6px] uppercase tracking-wide text-[#5E5A53]">{task.tag}</span>
    </div>
  );
}

function AddTaskForm({
  draft,
  setDraft,
  onSubmit,
}: {
  draft: string;
  setDraft: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="flex gap-1 border-t border-ink/10 bg-white px-2 py-1.5">
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Nouvelle tâche..."
        aria-label="Nouvelle tâche"
        className="min-w-0 flex-1 bg-transparent text-[7px] outline-none placeholder:text-[#7A7A7A]"
      />
      <button type="submit" aria-label="Ajouter la tâche" className="bg-ink px-2 text-[7px] font-bold text-paper">
        +
      </button>
    </form>
  );
}
