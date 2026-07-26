# Modifier le contenu PHENIX STS

- Tarifs, machines et matériaux : `app/data.ts`
- Accueil : `app/page.tsx`
- Terrassement : `app/terrassement/page.tsx`
- Agrégats : `app/agregats/page.tsx`
- Location : `app/location-engins/page.tsx`
- Conseils : `app/conseils/page.tsx`
- Articles SEO : `app/seo-content.ts` (une entrée ajoutée crée automatiquement sa fiche)
- Modèle des articles : `app/conseils/[slug]/page.tsx`
- Modèle des fiches machines : `app/location-engins/[slug]/page.tsx`
- Couleurs et mise en page : `app/globals.css`

La commande `npm run build:github` crée le site statique dans `out/`.
Le workflow `.github/workflows/deploy-pages.yml` publie automatiquement la branche `main` sur GitHub Pages.
