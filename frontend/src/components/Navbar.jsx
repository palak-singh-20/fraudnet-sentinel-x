import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        🛡 FraudNet Sentinel X
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#dashboard">Dashboard</a>
        </li>

        <li>
          <a href="#analyzer">Analyzer</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Right Side */}
      <div className="nav-right">

        <button className="nav-btn">
          Get Started
        </button>

        <ThemeToggle />

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

    </nav>

  );
}

export default Navbar;
