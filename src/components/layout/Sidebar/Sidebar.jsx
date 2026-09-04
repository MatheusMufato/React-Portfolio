import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "~/home", icon: "fa-home" },
  { id: "about", label: "~/about", icon: "fa-user" },
  { id: "services", label: "~/services", icon: "fa-list" },
  { id: "portfolio", label: "~/work", icon: "fa-briefcase" },
  { id: "contact", label: "~/contact", icon: "fa-comments" },
];

export default function Sidebar({ active, onNavigate, menuOpen, onToggleMenu, profileName }) {
  function handleClick(e, id) {
    e.preventDefault();
    onNavigate(id);
    if (window.innerWidth < 1200) onToggleMenu();
  }

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-backdrop"
            onClick={onToggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <div className={`aside${menuOpen ? " open" : ""}`}>
        <div className="logo">
          <a href="#home" onClick={(e) => handleClick(e, "home")}>
            <span>
              <span className="bracket">&lt;</span>
              {profileName}
              <span className="bracket">/&gt;</span>
            </span>
          </a>
        </div>
        <div className={`nav-toggler${menuOpen ? " open" : ""}`} onClick={onToggleMenu}>
          <span></span>
        </div>
        <ul className="nav">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  className={isActive ? "active" : ""}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  <i className={`fa ${item.icon}`}></i>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
