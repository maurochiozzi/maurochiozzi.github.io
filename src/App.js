import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";

import Bar from "./components/bar";
import Footer from "./components/footer";

const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const NotFound = lazy(() => import("./pages/notfound"));

export default function App() {
  return (
    <HashRouter basename="/">
      <Bar />

      <div className="app-main-content">
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </HashRouter>
  );
}
