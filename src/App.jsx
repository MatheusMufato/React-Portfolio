import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { useActiveSection } from "./hooks/useActiveSection";
import { useSectionScrollNav } from "./hooks/useSectionScrollNav";
import { profile } from "./data/profile";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import ThemeSwitcher from "./components/layout/ThemeSwitcher/ThemeSwitcher";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Services from "./components/sections/Services/Services";
import Portfolio from "./components/sections/Portfolio/Portfolio";
import Contact from "./components/sections/Contact/Contact";

const SECTION_COMPONENTS = {
  home: Hero,
  about: About,
  services: Services,
  portfolio: Portfolio,
  contact: Contact,
};

const sectionVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

function AppShell() {
  const { active, goTo, next, prev } = useActiveSection("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Rolar até o topo/fundo da seção atual e continuar na mesma direção
  // avança pra próxima/anterior — pausado enquanto o menu mobile está
  // aberto, pra não trocar de seção por baixo do overlay.
  useSectionScrollNav({ enabled: !menuOpen, onNext: next, onPrev: prev });

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  const ActiveSection = SECTION_COMPONENTS[active];

  return (
    <div className="main-container">
      <Sidebar
        active={active}
        onNavigate={goTo}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        profileName={profile.firstName}
      />

      <div className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="section"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ActiveSection onHireMe={active === "about" ? (e) => { e.preventDefault(); goTo("contact"); } : undefined} />
          </motion.div>
        </AnimatePresence>
      </div>

      <ThemeSwitcher />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
