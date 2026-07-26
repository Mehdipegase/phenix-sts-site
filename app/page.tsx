/* eslint-disable @next/next/no-img-element */
import QuoteForm from "./QuoteForm";
import { contact } from "./data";
import { Footer, Header, MobileActions } from "./SiteChrome";

const universes = [
  { href: "/terrassement/", badge: "Priorité chantier", title: "Terrassement & VRD", text: "Chemins, accès, plateformes, tranchées, réseaux et fondations de portail.", image: "/images/terrassement-hero-noir-jaune.png", cta: "Découvrir les travaux" },
  { href: "/agregats/", badge: "Livraison locale", title: "Agrégats & terre", text: "Recyclé ou non recyclé, avec usages, photos et tarifs lisibles.", image: "/images/agregats-hero-premium.png", cta: "Choisir un matériau" },
  { href: "/location-engins/", badge: "Catalogue complet", title: "Engins avec chauffeur", text: "Toutes les machines, leurs gabarits et les tarifs confirmés.", image: "/images/catalogue-mini-pelle-15t.jpg", cta: "Choisir un engin" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero home-hero" id="accueil">
        <div className="hero-copy">
          <p className="overline">Entreprise locale • Marseille & alentours</p>
          <h1>Votre terrain.<br /><em>Notre solution.</em></h1>
          <p className="lead">Un seul interlocuteur pour préparer un accès, ouvrir un réseau, livrer les bons matériaux ou mobiliser le bon engin.</p>
          <div className="hero-actions">
            <a className="cta" href="#devis">Faire étudier mon chantier →</a>
            <a className="phone-block" href={`tel:${contact.mobileHref}`}><small>Conseil direct</small><strong>{contact.mobile}</strong></a>
          </div>
          <div className="trust-row"><span><b>+20 ans</b> d’expérience terrain</span><span><b>Accès difficiles</b> étudiés</span><span><b>Photos WhatsApp</b> pour commencer</span></div>
        </div>
        <div className="hero-visual premium-machine">
          <img src="/images/kobelco-noire-jaune-hero-wide.png" alt="Mini-pelle Kobelco noire et jaune en terrassement" />
          <span className="visual-label">Terrassement précis • Engin avec chauffeur</span>
        </div>
      </section>

      <div className="ticker"><span>Marseille 11e & 12e</span><i>✦</i><span>Aubagne</span><i>✦</i><span>Allauch</span><i>✦</i><span>Plan-de-Cuques</span><i>✦</i><span>Gémenos</span></div>

      <section className="section hub-section">
        <div className="section-title split"><div><p className="overline">Choisissez votre besoin</p><h2>Trois métiers. Un seul terrain.</h2></div><p>Chaque activité possède maintenant sa propre page détaillée. Vous trouvez plus vite les explications utiles sans parcourir un catalogue interminable.</p></div>
        <div className="universe-grid">
          {universes.map((item) => (
            <a className="universe-card" href={item.href} key={item.href}>
              <div className="universe-photo"><img src={item.image} alt={item.title} /><span className="discover-cue">Découvrir →</span></div>
              <div><small>{item.badge}</small><h3>{item.title}</h3><p>{item.text}</p><b>{item.cta} →</b></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section quick-solutions">
        <div className="section-title"><p className="overline">Demandes fréquentes</p><h2>Partez du résultat recherché.</h2></div>
        <div className="solution-pills">
          {["Refaire un chemin", "Préparer avant béton", "Enterrer un réseau", "Fondations de portail", "Dégager une fuite localisée", "Livrer du tout-venant"].map((x) => <a href="#devis" key={x}>{x}<span>→</span></a>)}
        </div>
      </section>

      <section className="section editorial-callout">
        <div><p className="overline">Conseils chantier</p><h2>Comprendre avant de décider.</h2><p>Chemin, réseau, portail, fuite, choix d’une mini-pelle ou d’un agrégat : nos fiches expliquent simplement les solutions possibles, avec des exemples concrets.</p></div>
        <a className="cta" href="/conseils/">Voir tous les guides →</a>
      </section>

      <section className="contact" id="devis">
        <div className="contact-copy"><p className="overline">Devis & conseil gratuit</p><h2>Montrez-nous le terrain.</h2><p>Commune, dimensions et deux ou trois photos suffisent pour une première orientation.</p><a href={`tel:${contact.mobileHref}`}>{contact.mobile}</a></div>
        <QuoteForm />
      </section>
      <Footer /><MobileActions />
    </main>
  );
}
