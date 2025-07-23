import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
        VitalSpoon
      </Link>
      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <ul className={`navbar-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
