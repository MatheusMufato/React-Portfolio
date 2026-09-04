import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import { profile } from "../../../data/profile";
import PortfolioCard from "../../ui/PortfolioCard/PortfolioCard";
import Reveal from "../../ui/Reveal/Reveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfólio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects : </h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, i) => (
            <PortfolioCard key={project.title} {...project} delay={i * 0.08} />
          ))}

          <Reveal className="portfolio-item padd-15" delay={projects.length * 0.08}>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-item-inner shadow-dark"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                minHeight: "200px",
                textDecoration: "none",
              }}
            >
              <i className="fab fa-github" style={{ fontSize: "40px", color: "var(--skin-color)" }}></i>
              <span style={{ color: "var(--text-black-900)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                See more on GitHub
              </span>
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
