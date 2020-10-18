import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bar from "./components/bar";
import Footer from "./components/footer";

import About from "./pages/about";
import Home from "./pages/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Bar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
