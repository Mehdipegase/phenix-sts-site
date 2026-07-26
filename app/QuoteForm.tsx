"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "33610040890";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = String(form.get("service") ?? "");
    const city = String(form.get("city") ?? "");
    const details = String(form.get("details") ?? "");

    const message = [
      "Bonjour PHENIX STS,",
      `Je souhaite un renseignement pour : ${service}.`,
      `Commune du chantier : ${city}.`,
      details ? `Détails : ${details}` : "",
      "Pouvez-vous me rappeler pour étudier la faisabilité et le tarif ?",
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label>
        <span>Votre besoin</span>
        <select name="service" defaultValue="Chemin / accès / parking" required>
          <option>Chemin / accès / parking</option>
          <option>VRD / tranchée / réseau enterré</option>
          <option>Fondations de portail / clôture</option>
          <option>Excavation après localisation d’une fuite</option>
          <option>Location d’engin avec chauffeur</option>
          <option>Livraison d’agrégats</option>
          <option>Évacuation de terre ou gravats</option>
          <option>Autre besoin</option>
        </select>
      </label>

      <label>
        <span>Commune du chantier</span>
        <input
          name="city"
          type="text"
          placeholder="Ex. Marseille 11e, Aubagne, Allauch…"
          autoComplete="address-level2"
          required
        />
      </label>

      <label className="quote-form-wide">
        <span>Décrivez simplement le chantier</span>
        <textarea
          name="details"
          placeholder="Accès, quantité, dimensions, type de matériau… Vous pourrez joindre les photos sur WhatsApp."
          rows={4}
        />
      </label>

      <div className="quote-form-wide quote-submit-row">
        <button className="button button-accent" type="submit">
          Continuer sur WhatsApp <span aria-hidden="true">↗</span>
        </button>
        <p aria-live="polite">
          {sent
            ? "Votre message est prêt dans WhatsApp."
            : "Aucun compte à créer. Trois informations suffisent."}
        </p>
      </div>
    </form>
  );
}
