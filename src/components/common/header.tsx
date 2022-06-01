import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/hooks">Hooks</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}