import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";

const MainPage = React.lazy(() => import("../pages/mainPage/MainPage"));
const About = React.lazy(() => import("../pages/aboutPage/About"));
const NotFound = React.lazy(() => import("../pages/NotFound404/NotFound"));

export default function AnimatedPages() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      x: "50vw",
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: "-50vw",
      opacity: 0,
    },
  };

  const pageTransition = {
    duration: 0.4,
    type: "tween",
    ease: "easeInOut",
  };

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <MainPage />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <ProjectsPage />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
