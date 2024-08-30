import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ProfileButton from "../ProfileButton/ProfileButton.jsx";
import "./Navbar.css";
import Button from "../Button/Button.jsx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useModal } from "../Global.jsx";

export default function Navbar({ toggleDarkModeSwitch, theme, loggedIn }) {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const { scrollY } = useScroll();
  const currentPath = useLocation();
  const { open, handleOpen } = useModal();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 850) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    toggleDarkModeSwitch();
  };

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`navbar ${theme} fixed top-0 left-0 right-0 z-20`}
    >
      <div className={`logo-container ${theme}`}>
        <a href="#">
          <img src="logo.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className={`links-container ${theme}`}>
        <Link
          to="/"
          className={`link ${theme} ${
            currentPath.pathname === "/" ? "font-bold text-xl" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={`link ${theme} ${
            currentPath.pathname === "/movies" ? "font-bold text-xl" : ""
          }`}
        >
          Movies
        </Link>
      </div>
      <div className={`actions-container ${theme}`}>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          className="dark-mode-switch"
        />

        {loggedIn ? (
          <ProfileButton theme={theme} />
        ) : (
          <Button
            text={"Sign in"}
            color={"Yellow"}
            theme={theme}
            onClick={handleOpen}
          />
        )}
      </div>
    </motion.nav>
  );
}
