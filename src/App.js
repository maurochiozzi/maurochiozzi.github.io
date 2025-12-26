import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";

import Bar from "./components/bar";
import Footer from "./components/footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import GlobalStyles from "./GlobalStyles";

const About = lazy(() => import("./pages/about"));
const Home = lazy(() => import("./pages/home"));
const Projects = lazy(() => import("./pages/projects"));
const NotFound = lazy(() => import("./pages/notfound"));

export default function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <GlobalStyles />
      <BrowserRouter
        basename="/"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Bar />

        <main className="app-main-content">
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
        </main>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
