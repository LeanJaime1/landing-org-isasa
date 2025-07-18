import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false); // ⬅️ nuevo estado

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ⬅️ mostrar “enviando…”

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ nombre: "", email: "", mensaje: "" });
        setModalOpen(true);
      } else {
        alert("Error al enviar el mensaje. Intente nuevamente.");
      }
    } catch (error) {
      alert("Ocurrió un error. Intente nuevamente.");
    } finally {
      setLoading(false); // ⬅️ volver al estado normal
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Mensaje"
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {modalOpen && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="contact-modal-title">¡Gracias por tu mensaje!</h2>
            <p className="contact-modal-text">Nos pondremos en contacto pronto.</p>
            <button className="contact-modal-button" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
