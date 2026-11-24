import type { Metadata, Viewport } from "next";
import "@fontsource/anton/400.css";
import "@fontsource/archivo-black/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/caveat/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROBLÈME RÉGLÉ — Agence digitale à Kinshasa",
  description:
    "Vous avez un problème ? C'est déjà réglé. Agence digitale à Kinshasa : sites web, applications, automatisations et réseaux sociaux.",
  openGraph: {
    title: "PROBLÈME RÉGLÉ — Solutions en action",
    description:
      "On résout les problèmes. On livre des solutions qui marchent.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F2EFE9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
