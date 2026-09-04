import { useState } from "react";
import { motion } from "framer-motion";

const INITIAL_STATE = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: sem backend/API conectado ainda. Quando houver endpoint de contato,
    // substituir por uma chamada real (fetch/EmailJS/etc.) aqui.
    console.log("Contact form submitted:", form);
    setForm(INITIAL_STATE);
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <motion.button
              type="submit"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
}
