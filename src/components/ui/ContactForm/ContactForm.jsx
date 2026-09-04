import { useRef, useState } from "react";
import { motion } from "framer-motion";

const INITIAL_STATE = { name: "", email: "", subject: "", message: "" };
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

// idle -> sending -> success | error
export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle");
  const honeypotRef = useRef(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (honeypotRef.current?.checked) {
      // Campo escondido só um bot preencheria. Finge sucesso sem
      // chamar a API nem revelar que ele foi pego.
      setStatus("success");
      setForm(INITIAL_STATE);
      return;
    }

    if (!ACCESS_KEY) {
      // Sem chave configurada (ver .env.example) — não finge que enviou.
      console.error(
        "Contact form: VITE_WEB3FORMS_ACCESS_KEY is not set. Create a .env.local with your Web3Forms access key."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      // FormData (não JSON): um POST com Content-Type application/json
      // dispara preflight CORS, e a API do Web3Forms não responde esse
      // preflight com Access-Control-Allow-Origin — a requisição inteira
      // é bloqueada no navegador antes de sair. FormData com multipart
      // (o Content-Type que o browser define sozinho) conta como
      // "simple request" e não precisa de preflight.
      const payload = new FormData();
      payload.append("access_key", ACCESS_KEY);
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("subject", form.subject ? `Portfolio contact: ${form.subject}` : "New message from portfolio site");
      payload.append("message", form.message);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setForm(INITIAL_STATE);
      } else {
        console.error("Web3Forms error:", result.message);
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        {/* Honeypot: bots costumam preencher campos escondidos; humanos nunca veem isso. */}
        <input
          ref={honeypotRef}
          type="checkbox"
          name="botcheck"
          className="visually-hidden"
          tabIndex={-1}
          autoComplete="off"
        />

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
                disabled={isSending}
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
                disabled={isSending}
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
                disabled={isSending}
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
                disabled={isSending}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15 form-actions">
            <motion.button
              type="submit"
              className="btn"
              disabled={isSending}
              whileHover={isSending ? undefined : { scale: 1.05 }}
              whileTap={isSending ? undefined : { scale: 0.95 }}
            >
              {isSending ? "Sending…" : "Send Message"}
            </motion.button>

            <span className="form-status" role="status" aria-live="polite">
              {status === "success" && (
                <span className="form-status-success">
                  <i className="fa fa-check-circle" aria-hidden="true"></i> Message sent — I'll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="form-status-error">
                  <i className="fa fa-circle-exclamation" aria-hidden="true"></i> Couldn't send — try again, or email
                  me directly at mmufato@gmail.com.
                </span>
              )}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
