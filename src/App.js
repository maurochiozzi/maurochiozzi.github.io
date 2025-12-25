import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Bar from "./components/bar";
import Footer from "./components/footer";

import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import NotFound from "./pages/notfound";

export default function App() {
  return (
    <HashRouter basename="/">
      <Bar />

      <div className="app-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  );
}
