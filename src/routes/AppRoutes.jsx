import { Routes, Route } from "react-router-dom";

import About from "../pages/About";
import UIUXDesign from "../pages/UIUXDesign";
import DigitalMarketing from "../pages/DigitalMarketing";
import CareerGap from "../pages/CareerGap";
import FullStack from "../pages/FullStack";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Alumni from "../pages/Alumni";
import Gallery from "../pages/Gallery";
import CreatorPage from "../pages/CreatorPage";
function AppRoutes({ HomePage }) {
  return (
    <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={<HomePage />}
      />


      {/* ABOUT */}
      <Route
        path="/about"
        element={<About />}
      />


      {/* COURSES */}

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


      {/* CONTACT */}
      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* BLOG */}
      <Route
        path="/blog"
        element={<Blog />}
      />

      {/* ALUMNI */}
      <Route
        path="/alumni"
        element={<Alumni />}
      />

      {/* GALLERY */}
      <Route
        path="/gallery"
        element={<Gallery />}
      />

      {/* CREATOR PAGE */}
      <Route
        path="/creator"
        element={<CreatorPage />}
      />

    </Routes>
  );
}

export default AppRoutes;