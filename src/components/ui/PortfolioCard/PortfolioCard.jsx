import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";

export default function PortfolioCard({ title, link, imgBase, ext, delay = 0 }) {
  // imgBase vem de projects.js como caminho absoluto ("/imagens/Foo");
  // com `base` configurado no vite.config.js (deploy no GitHub Pages),
  // um caminho absoluto puro ignora esse prefixo e sempre dá 404.
  const resolvedBase = `${import.meta.env.BASE_URL}${imgBase.replace(/^\//, "")}`;

  return (
    <Reveal className="portfolio-item padd-15" delay={delay}>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        className="portfolio-item-inner shadow-dark"
        style={{ display: "block" }}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <div className="portfolio-img">
          <picture>
            <source srcSet={`${resolvedBase}.webp`} type="image/webp" />
            <source srcSet={`${resolvedBase}.${ext}`} type={`image/${ext}`} />
            <img src={`${resolvedBase}.${ext}`} loading="lazy" alt={title} />
          </picture>
        </div>
      </motion.a>
    </Reveal>
  );
}
