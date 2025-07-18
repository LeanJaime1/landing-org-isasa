import React from "react";
import "./Benefits.css";
import { CheckCircle } from "lucide-react"; // Usamos ícono profesional opcionalmente

const items = [
  "Atención personalizada y cercana",
  "Coberturas a medida",
  "Amplia red de compañías líderes",
  "Gestión rápida y eficiente de siniestros"
];

const Benefits = () => {
  return (
    <section id="beneficios" className="benefits" data-aos="fade-up">
      <h2>¿Por qué elegirnos?</h2>
      <div className="benefits-grid">
        {items.map((b, i) => (
          <div className="benefit-card" key={i}>
            <CheckCircle className="icon" size={24} strokeWidth={2} />
            <p>{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
