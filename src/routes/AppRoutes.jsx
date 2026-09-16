import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import UIUXDesign from "../pages/UIUXDesign";
import DigitalMarketing from "../pages/DigitalMarketing";
import FullStack from "../pages/FullStack";
import CareerGap from "../pages/CareerGap";

import Alumni from "../pages/Alumni";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import CreatorPage from "../pages/CreatorPage";
import Footer from "../pages/Footer";

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      {/* ================= HOME ================= */}
<Route
        path="/footer"
        element={<Footer />}
      />
      

      {/* ================= HOME ================= */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* ================= ABOUT ================= */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* ================= GALLERY ================= */}
      <Route
        path="/gallery"
        element={<Gallery />}
      />

      {/* ================= COURSES ================= */}
      <Route
        path="/courses/ui-ux-design"
        element={<UIUXDesign />}
      />

      <Route
        path="/courses/digital-marketing"
        element={<DigitalMarketing />}
      />

      <Route
        path="/courses/full-stack-development"
        element={<FullStack />}
      />

      <Route
        path="/courses/career-gap"
        element={<CareerGap />}
      />

      {/* ================= OTHER PAGES ================= */}

      <Route
        path="/alumni"
        element={<Alumni />}
      />

      <Route
        path="/blog"
        element={<Blog />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/creator"
        element={<CreatorPage />}
      />

    </Routes>
  );
}

export default AppRoutes;