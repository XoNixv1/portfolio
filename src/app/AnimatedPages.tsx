import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";

const MainPage = React.lazy(() => import("../pages/mainPage/MainPage"));
const About = React.lazy(() => import("../pages/aboutPage/About"));
const NotFound = React.lazy(() => import("../pages/NotFound404/NotFound"));

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

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

export default function AnimatedPages() {
  const location = useLocation();

  const routes: RouteConfig[] = [
    { path: "/", element: <MainPage /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<AnimatedPage>{element}</AnimatedPage>}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
