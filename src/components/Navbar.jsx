import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import dementeelogo from "../assets/dementeelogo.png";

function Navbar() {
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
        <Link to="/">
          Home
        </Link>


        {/* ABOUT */}
        <Link to="/about">
          About Us
        </Link>


        {/* ================= COURSES ================= */}
        <div className="courses-dropdown">

          <button
            type="button"
            className="courses-dropdown-btn"
          >
            <span>Courses</span>

            <ChevronDown
              className="courses-chevron"
              size={14}
            />
          </button>


          <div className="courses-dropdown-menu">

            <Link to="/courses/ui-ux-design">
              UI / UX Design
            </Link>

            <Link to="/courses/digital-marketing">
              Digital Marketing
            </Link>

            <Link to="/courses/full-stack-development">
              Full Stack Development
            </Link>

            <Link to="/courses/career-gap">
              Career Gap Opportunity
            </Link>

          </div>

        </div>


        {/* ================= MORE ================= */}
          <div className="more-dropdown">

          <button
            type="button"
            className="more-dropdown-btn"
          >
            <span>More</span>

            <ChevronDown
              className="more-chevron"
              size={14}
            />
          </button>


         
        


          <div className="more-dropdown-menu">

            <Link to="/alumni">
              Alumni
            </Link>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/creator">
              Creator
            </Link>

          </div>

</div>

        {/* CONTACT */}
        <Link
          to="/contact"
          className="contact-nav-link"
        >
          Contact Us
        </Link>

      </nav>


      {/* GET IN TOUCH */}
      <Link
        to="/contact"
        className="get-in-touch"
      >
        Get in touch
      </Link>

    </header>
  );
}

export default Navbar;