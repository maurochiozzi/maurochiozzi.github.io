import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Bar from "./components/bar";
import Footer from "./components/footer";

import About from "./pages/about";

export default function Routes() {
  return (
    <BrowserRouter>
      <Bar />

      <Switch>
        <Route path="/" component={About} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
