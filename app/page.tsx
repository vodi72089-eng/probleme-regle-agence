import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutServices from "@/components/AboutServices";
import Projects from "@/components/Projects";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-4 focus:py-3 focus:text-[11px] focus:font-bold focus:uppercase focus:tracking-widest focus:text-paper"
      >
        Aller au contenu
      </a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <AboutServices />
        <Projects />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
