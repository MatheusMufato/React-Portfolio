import { motion } from "framer-motion";

export default function Reveal({ children, className, delay = 0, as = "div", ...rest }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
