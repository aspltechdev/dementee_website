import { Routes, Route } from "react-router-dom";

import About from "../pages/About";
import UIUXDesign from "../pages/UIUXDesign";
import DigitalMarketing from "../pages/DigitalMarketing";

function AppRoutes({ HomePage }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/courses/ui-ux-design"
        element={<UIUXDesign />}
      />

      <Route
        path="/courses/digital-marketing"
        element={<DigitalMarketing />}
      />
    </Routes>
  );
}

export default AppRoutes;