import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bar from "./components/bar";
import Footer from "./components/footer";

import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Bar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
