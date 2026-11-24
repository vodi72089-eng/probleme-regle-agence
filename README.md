# PROBLÈME RÉGLÉ — site vitrine animé

Site vitrine éditorial (magazine) pour l'agence digitale PROBLÈME RÉGLÉ, construit avec Next.js 15, Tailwind CSS, Framer Motion et GSAP.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir <http://localhost:3000>.

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — assemblage des quatre blocs
- `app/globals.css` — tokens, pulses, reduced-motion
- `components/` — Navbar, Hero, NeuButton, AboutServices, Projects, FinalCTA, Footer, CustomCursor, WhatsAppFloat
- `components/visuals/` — visuels éditoriaux en CSS/SVG (téléphone WhatsApp, laptop boutique, dashboard, encre, développeur)
- `public/images/hero-code.jpg` — photo du poste de travail

## Animations

- Hero : titre lettre par lettre, cercle rouge en zoom, parallaxe au scroll
- Reveals fade-up + slide-up, zoom lent des visuels au scroll
- Hover projets (zoom + flèche 45°), services (ligne rouge + décalage), boutons magnétiques
- CTA final : mots révélés au scroll + encre animée en GSAP
- Curseur rouge sur desktop, navbar flottante au scroll, bouton WhatsApp flottant
- Conversation WhatsApp **en direct** : les messages arrivent seuls en boucle avec indicateur de frappe, et l'utilisateur peut écrire à tout moment (la réponse automatique reprend ensuite)
- Mini-app TaskFlow interactive (cocher / ajouter des tâches, navigation Accueil / Tâches / Stats), animation « demande → site amélioré → chiffres en hausse » sur le 3ᵉ projet
- Hero : composition éditoriale avec carte de code animée, badge « En direct » et carte de résultats

`prefers-reduced-motion` est respecté : les mouvements sont supprimés, les contenus restent visibles.
