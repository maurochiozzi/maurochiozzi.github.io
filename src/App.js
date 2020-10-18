import React from "react";

import "./App.css";

import Routes from "./routes";
import UpperBar from "./components/upperbar";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <UpperBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
