import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        <div className="logo-mark">✦</div>

        <div className="logo-text">
          <strong>De mentee</strong>
          <span>Technologies</span>
        </div>
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


        {/* COURSES DROPDOWN */}
        <div className="courses-dropdown">

          <button
            className="courses-dropdown-btn"
            type="button"
          >
            Courses
            <ChevronDown
              className="courses-chevron"
              size={15}
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


        {/* MORE DROPDOWN */}
        <div className="courses-dropdown">

          <button
            className="courses-dropdown-btn"
            type="button"
          >
            More
            <ChevronDown size={14} />
          </button>

          <div className="courses-dropdown-menu">

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/alumni">
              Alumni 
            </Link>

            
            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/creator">
              Creator Page
            </Link>

          </div>

        </div>



        {/* CONTACT */}
        <Link to="/contact">
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