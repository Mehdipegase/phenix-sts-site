/* eslint-disable @next/next/no-img-element */
import { contact } from "./data";

export function Header() {
  return (
    <>
      <div className="top-contact">
        <span>Marseille Est • Aubagne • Allauch • Plan-de-Cuques</span>
        <a href={`tel:${contact.mobileHref}`}>Conseil direct : {contact.mobile}</a>
      </div>
      <header className="site-header">
        <a className="brand" href="/" aria-label="PHENIX STS, accueil">
          <span className="brand-mark"><img src="/images/logo-phoenix.png" alt="" /></span>
          <strong>PHENIX STS</strong>
        </a>
        <nav aria-label="Navigation principale">
          <a href="/terrassement/">Terrassement</a>
          <a href="/agregats/">Agrégats</a>
          <a href="/location-engins/">Location</a>
          <a className="blog-nav" href="/conseils/">Guides & blog</a>
        </nav>
        <a className="cta cta-small" href="/#devis">Devis WhatsApp</a>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-logo"><span className="brand-mark"><img src="/images/logo-phoenix.png" alt="" /></span><b>PHENIX STS</b></div>
      <p>Terrassement • VRD • Agrégats • Engins avec chauffeur<br /><a href="/conseils/">Voir les guides & le blog →</a></p>
      <p>{contact.address}<br />SIRET 918 063 546 00017</p>
      <p><a href={`mailto:${contact.email}`}>{contact.email}</a><br /><a href={`tel:${contact.mobileHref}`}>{contact.mobile}</a></p>
    </footer>
  );
}

export function MobileActions() {
  return <div className="mobile-actions"><a href="/conseils/">Guides</a><a href={`tel:${contact.mobileHref}`}>Appeler</a><a href="/#devis">Devis WhatsApp</a></div>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="page-hero">
      <div><p className="overline">{eyebrow}</p><h1>{title}</h1><p>{text}</p><a className="cta" href="/#devis">Recevoir un devis →</a></div>
      <img src={image} alt="" />
    </section>
  );
}
