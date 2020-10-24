import React, { useEffect } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Bar from "./components/bar";
import Footer from "./components/footer";

import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import NotFound from "./pages/notfound";

import ReactGA from "react-ga";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-VXQFQJF6VJ");
    ReactGA.pageview("/");
  }, []);

  return (
    <HashRouter basename="/">
      <Bar />

      <div className="app-main-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </HashRouter>
  );
}
