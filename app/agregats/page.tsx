/* eslint-disable @next/next/no-img-element */
import { nonRecycledMaterials, recycledMaterials } from "../data";
import { Footer, Header, MobileActions, PageHero } from "../SiteChrome";

export default function Agregats() {
  return <main><Header />
    <PageHero eyebrow="Livraison locale en VL 3,5 T" title="Les bons agrégats. Au bon endroit." text="Photos, usages et prix repères pour choisir sans jargon. Livraison dès 80 € selon secteur, quantité et accès." image="/images/agregats-hero-premium.png" />
    <section className="aggregate-highlights"><div><strong>Dès 80 €</strong><span>la livraison locale selon secteur</span></div><div><strong>Petit camion</strong><span>adapté aux accès résidentiels</span></div><div><strong>Conseil direct</strong><span>le matériau selon votre usage</span></div></section>
    <section className="section aggregate-guide"><div className="choice-banner"><b>Le réflexe économique</b><p>Pour un fond de chemin ou un remblai non visible, le recyclé suffit souvent. Gardez le non recyclé pour les finitions et les usages exigeant une granulométrie régulière.</p><a href="/conseils/tout-venant-recycle-utilisation-chemin/">Voir un exemple de chaussée →</a></div>
      <div className="section-title"><p className="overline">Tarifs recyclés & terre</p><h2>Chaque produit avec son usage.</h2></div>
      <div className="material-catalogue">{recycledMaterials.map(m => <article className={m.featured ? "material-product featured-material" : "material-product"} key={m.name+m.grade}><img src={m.image} alt={m.name} /><div>{m.featured && <small>Le plus demandé pour les chemins</small>}<span>{m.grade}</span><h3>{m.name}</h3><p>{m.use}</p><strong>{m.price}</strong><div className="material-actions">{m.featured && <a href="/conseils/tout-venant-recycle-utilisation-chemin/">Voir les usages →</a>}<a href={`https://wa.me/33610040890?text=${encodeURIComponent(`Bonjour PHENIX STS, je souhaite un tarif livré pour ${m.name} ${m.grade}.`)}`}>Prix livré →</a></div></div></article>)}</div>
      <div className="section-title secondary-title"><p className="overline">Matériaux non recyclés</p><h2>Pour les finitions régulières.</h2></div>
      <div className="simple-price-grid">{nonRecycledMaterials.map(row => <article key={row[0]}><span>{row[1]}</span><h3>{row[0]}</h3><p>{row[3]}</p><strong>{row[2]}</strong></article>)}</div>
      <p className="legal">Prix matériaux TTC issus de la grille PHENIX STS du 24 juillet 2026. Livraison, disponibilité, poids réel et accessibilité à confirmer au devis.</p>
      <div className="aggregate-blog-cta"><div><p className="overline">Fiches matériaux</p><h2>Quel granulat pour quel travail ?</h2><p>Nous ajoutons progressivement des exemples de chemins, fonds de forme, drainage, tranchées, béton et aménagements extérieurs.</p></div><a className="cta" href="/conseils/">Consulter les guides →</a></div>
    </section><Footer /><MobileActions />
  </main>;
}
