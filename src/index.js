import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { install } from "ga-gtag";

install("G-9RF05WQMZY");

const query = new URLSearchParams(window.location.search);
const redirect = query.get("redirect");
if (redirect) {
  window.history.replaceState(null, null, redirect);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
