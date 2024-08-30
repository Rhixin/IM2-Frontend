import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Movies from "./components/Movies.jsx";
import { Global } from "./components/Global.jsx";

import SignInModal from "./components/SignInModal.jsx";

function App() {
  const [mode, setMode] = useState("dark-mode");

  function toggleDarkTheme() {
    mode === "light-mode" ? setMode("dark-mode") : setMode("light-mode");
    console.log(mode);
  }

  useEffect(() => {
    document.body.className = "gradient-" + mode;
  }, [mode]);

  return (
    <Global>
      <Router>
        <Navbar
          toggleDarkModeSwitch={toggleDarkTheme}
          theme={mode}
          loggedIn={false}
        />

        <SignInModal />

        <Routes>
          <Route path="/" element={<Home theme={mode} />} />
          <Route path="/movies" element={<Movies theme={mode} />} />
        </Routes>
      </Router>
    </Global>
  );
}

export default App;
