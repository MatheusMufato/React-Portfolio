import { useState } from "react";

const SECTIONS = ["home", "about", "services", "portfolio", "contact"];

// window.scrollTo respeita `html{scroll-behavior:smooth}` (index.css) por
// padrão; ao trocar de seção queremos aterrissar no topo instantaneamente,
// não deslizar pela seção antiga que está saindo.
function scrollToTopInstantly() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}

export function useActiveSection(initial = "home") {
  const [active, setActive] = useState(initial);

  function goTo(sectionId) {
    if (sectionId === active) return;
    setActive(sectionId);
    scrollToTopInstantly();
  }

  function step(direction) {
    const currentIndex = SECTIONS.indexOf(active);
    const targetId = SECTIONS[currentIndex + direction];
    if (targetId) goTo(targetId);
  }

  return {
    active,
    goTo,
    next: () => step(1),
    prev: () => step(-1),
    sections: SECTIONS,
  };
}
