import { motion } from "framer-motion";
import Reveal from "../Reveal/Reveal";

export default function PortfolioCard({ title, link, imgBase, ext, delay = 0 }) {
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
            <source srcSet={`${imgBase}.webp`} type="image/webp" />
            <source srcSet={`${imgBase}.${ext}`} type={`image/${ext}`} />
            <img src={`${imgBase}.${ext}`} loading="lazy" alt={title} />
          </picture>
        </div>
      </motion.a>
    </Reveal>
  );
}
