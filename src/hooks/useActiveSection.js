import { useState } from "react";

const SECTIONS = ["home", "about", "services", "portfolio", "contact"];

export function useActiveSection(initial = "home") {
  const [active, setActive] = useState(initial);

  function goTo(sectionId) {
    if (sectionId === active) return;
    setActive(sectionId);
  }

  return { active, goTo, sections: SECTIONS };
}
