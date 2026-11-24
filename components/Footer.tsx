const socials = [{ label: "WhatsApp", href: "https://wa.me/243835113424" }];

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <span className="font-black text-[15px] tracking-[-0.05em]">PROBLÈME RÉGLÉ</span>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Réseaux sociaux">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.16em] transition-colors hover:text-red"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
          © 2025 PROBLÈME RÉGLÉ. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
