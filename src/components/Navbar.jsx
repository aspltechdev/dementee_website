import React from "react";
import { ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import dementeelogo from "../assets/dementeelogo.png";

function Navbar() {
  const location = useLocation();

  const isCoursesActive = location.pathname.startsWith("/courses/");

  const isMoreActive =
    location.pathname.startsWith("/alumni") ||
    location.pathname.startsWith("/blog") ||
    location.pathname.startsWith("/creator");

  return (
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        <img
          src={dementeelogo}
          alt="De Mentee Technologies"
          className="dementee-logo"
        />
      </Link>

      {/* NAVIGATION */}
      <nav className="nav-links">

        {/* HOME */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>

        {/* ABOUT */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active" : ""}`
          }
        >
          About Us
        </NavLink>

        {/* COURSES */}
        <div className="courses-dropdown">

          <button
            type="button"
            className={`courses-dropdown-btn ${
              isCoursesActive ? "active" : ""
            }`}
          >
            <span>Courses</span>
            <ChevronDown
              className="courses-chevron"
              size={14}
            />
          </button>

          <div className="courses-dropdown-menu">

            <NavLink
              to="/courses/ui-ux-design"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              UI / UX Design
            </NavLink>

            <NavLink
              to="/courses/digital-marketing"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Digital Marketing
            </NavLink>

            <NavLink
              to="/courses/full-stack-development"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Full Stack Development
            </NavLink>

            <NavLink
              to="/courses/career-gap"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Career Gap Opportunity
            </NavLink>

          </div>
        </div>

        {/* MORE */}
        <div className="more-dropdown">

          <button
            type="button"
            className={`more-dropdown-btn ${
              isMoreActive ? "active" : ""
            }`}
          >
            <span>More</span>
            <ChevronDown
              className="more-chevron"
              size={14}
            />
          </button>

          <div className="more-dropdown-menu">

            <NavLink
              to="/alumni"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Alumni
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/creator"
              className={({ isActive }) =>
                isActive ? "dropdown-active" : ""
              }
            >
              Creator
            </NavLink>

          </div>
        </div>

        {/* CONTACT */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link contact-nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          Contact Us
        </NavLink>

      </nav>

      {/* GET IN TOUCH */}
      <NavLink
        to="/contact"
        className="get-in-touch"
      >
        Get in touch
      </NavLink>

    </header>
  );
}

export default Navbar;