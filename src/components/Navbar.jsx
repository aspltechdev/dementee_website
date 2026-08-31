import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logo-mark">✦</div>
        <div className="logo-text">
          <strong>De mentee</strong>
          <span>Technologies</span>
        </div>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>

        <div className="courses-dropdown">
          <button className="courses-dropdown-btn" type="button">
            Courses
            <ChevronDown className="courses-chevron" size={15} />
          </button>

          <div className="courses-dropdown-menu">
           <Link to="/courses/ui-ux-design">
  UI / UX Design
</Link>
           <Link to="/courses/digital-marketing">
  Digital Marketing
</Link>
            <a href="/#courses">Full Stack Development</a>
            <a href="/#courses">Career Gap opportunity</a>
          </div>
        </div>

        <a href="#more" className="nav-more">
          More
          <ChevronDown size={14} />
        </a>

        <a href="#contact">Contact Us</a>
      </nav>

      <a href="#contact" className="get-in-touch">
        Get in touch
      </a>
    </header>
  );
}

export default Navbar;
