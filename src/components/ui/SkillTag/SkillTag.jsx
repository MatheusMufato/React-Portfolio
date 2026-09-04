import { motion } from "framer-motion";

export default function SkillTag({ label, delay = 0, muted = false }) {
  return (
    <motion.span
      className={`skill-tag${muted ? " skill-tag-muted" : ""}`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
    >
      {label}
    </motion.span>
  );
}
