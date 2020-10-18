import React from "react";
import "./App.css";
import Routes from "./routes";
import UpperBar from "./components/upperbar";

function App() {
  return (
    <div>
      <UpperBar />
      <Routes />
    </div>
  );
}

export default App;
