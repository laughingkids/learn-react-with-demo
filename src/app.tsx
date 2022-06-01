import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/about";
import HomePage from "./pages/home";
import Hooks from "./pages/react-hooks";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="hooks" element={<Hooks />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}