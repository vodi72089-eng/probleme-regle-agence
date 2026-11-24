export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      <span className="wa-halo absolute inset-0 rounded-full bg-red" aria-hidden="true" />
      <a
        href="https://wa.me/243835113424?text=Bonjour%20PROBL%C3%88ME%20R%C3%89GL%C3%89%2C%20j%27ai%20un%20projet%20%C3%A0%20discuter."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec PROBLÈME RÉGLÉ sur WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red text-white shadow-[0_12px_30px_-10px_rgba(255,30,30,0.75)] transition-transform duration-200 hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current sm:h-8 sm:w-8" aria-hidden="true">
          <path d="M16.04 3C9.4 3 3.99 8.4 3.99 15.04c0 2.12.55 4.19 1.6 6.02L3 29l8.1-2.53a12.1 12.1 0 0 0 4.94 1.05h.01c6.64 0 12.04-5.4 12.04-12.04C28.09 8.4 22.68 3 16.04 3Zm0 22.02h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.81 1.5 1.53-4.69-.24-.38a10 10 0 0 1-1.54-5.34c0-5.55 4.52-10.06 10.07-10.06 2.69 0 5.22 1.05 7.12 2.95a10 10 0 0 1 2.95 7.12c0 5.55-4.52 10.06-10.07 10.06Zm5.52-7.53c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.08 3.17 5.04 4.45.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </div>
  );
}
