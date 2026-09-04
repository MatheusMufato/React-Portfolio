import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../../../data/profile";
import PlexusBackground from "./PlexusBackground";

// Posicionadas só no "corredor" vazio entre as duas colunas (~50-55%) ou
// sobre a própria foto (~78-82%) — nunca sobre a coluna de texto (0-45%),
// então não cobrem "Hi,", o nome, o cargo, o parágrafo, o botão ou os
// ícones sociais, seja qual for a altura do conteúdo.
const CHIPS = [
  { label: "React", top: "0%", left: "50%", rotate: -6 },
  { label: "Three.js", top: "10%", left: "80%", rotate: 4 },
  { label: "Tailwind", top: "48%", left: "48%", rotate: 5 },
  { label: "Framer Motion", top: "86%", left: "80%", rotate: -4 },
];

// Blob "hexágono distorcido" desenhado à mão, em duas versões do mesmo path:
// - 0..1 (objectBoundingBox) para recortar a foto com clip-path
// - 0..100 (viewBox) para desenhar o contorno em laranja por cima
const BLOB_PATH_UNIT =
  "M0.30,0.02 C0.45,-0.03 0.65,0.00 0.78,0.10 C0.92,0.20 1.00,0.35 0.97,0.52 " +
  "C0.94,0.70 0.85,0.82 0.68,0.90 C0.52,0.98 0.32,0.99 0.18,0.88 " +
  "C0.04,0.78 0.00,0.60 0.03,0.42 C0.06,0.25 0.15,0.07 0.30,0.02 Z";
const BLOB_PATH_100 =
  "M30,2 C45,-3 65,0 78,10 C92,20 100,35 97,52 " +
  "C94,70 85,82 68,90 C52,98 32,99 18,88 " +
  "C4,78 0,60 3,42 C6,25 15,7 30,2 Z";

export default function Hero() {
  const typedElRef = useRef(null);
  const boundsRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: [...profile.professions, ""],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="home">
      <PlexusBackground />
      <div className="home-scrim" />

      <div className="container">
        <div className="row" ref={boundsRef}>
          <motion.div
            className="home-info padd-15"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="hero-hi">Hi,</h3>
            <h3 className="hero-name">
              I'm <span className="hero-bracket">[</span>
              <span className="hero-accent-text">{profile.firstName}</span>
              <span className="hero-bracket">]</span>
            </h3>
            <h3 className="hero-role">
              <span className="hero-bracket">[</span>
              <span className="typing hero-accent-text" ref={typedElRef}></span>
              <span className="hero-bracket">]</span>
            </h3>
            <p>{profile.heroText}</p>
            <motion.a
              href={profile.cvUrl}
              className="btn btn-hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>

            <div className="hero-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href={profile.behance} target="_blank" rel="noreferrer" aria-label="Behance">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="home-img padd-15"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="hero-photo-frame">
              <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
                <defs>
                  <clipPath id="heroBlobClip" clipPathUnits="objectBoundingBox">
                    <path d={BLOB_PATH_UNIT} />
                  </clipPath>
                </defs>
              </svg>

              <div className="hero-photo-glow" />

              {!photoFailed ? (
                <picture>
                  <source srcSet={`${import.meta.env.BASE_URL}imagens/Matheus.jpg`} type="image/jpeg" />
                  <img
                    className="hero-photo"
                    src={`${import.meta.env.BASE_URL}imagens/Matheus.jpg`}
                    loading="lazy"
                    alt={profile.name}
                    onError={() => setPhotoFailed(true)}
                  />
                </picture>
              ) : (
                <div className="hero-photo-fallback" aria-hidden="true">
                  <i className="fa fa-user"></i>
                </div>
              )}

              <svg
                className="hero-photo-outline"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d={BLOB_PATH_100} vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </motion.div>

          {!shouldReduceMotion && (
            <div className="hero-chips-layer">
              {CHIPS.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  className="hero-chip"
                  style={{ top: chip.top, left: chip.left }}
                  drag
                  dragConstraints={boundsRef}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.08, boxShadow: "0 16px 32px rgba(0,0,0,0.45)" }}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: chip.rotate }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.4 + i * 0.1,
                  }}
                >
                  <span className="chip-tag">&lt;</span>
                  {chip.label}
                  <span className="chip-tag">/&gt;</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
