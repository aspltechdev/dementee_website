import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/footerlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* =====================================================
            FOOTER TOP
        ===================================================== */}

        <div className="footer-top">

          {/* =================================================
              BRAND / ADDRESS
          ================================================= */}

          <div className="footer-brand">

            <div className="footer-logo">
              <img
                src={footerlogo}
                alt="De Mentee Technologies"
              />
            </div>

            <h3>ADDRESS</h3>

            <p>
              Address : 142, 2nd Floor, Kamaraj Salai, Puducherry,
              <br />
              605013
            </p>

            <p>
              Phone: +91 88703 97432
            </p>

            <p>
              info@dementee.in
            </p>

          </div>


          {/* =================================================
              EXPLORE
          ================================================= */}

          <div className="footer-column footer-explore">

            <h3>EXPLORE</h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/#success">
              Success story
            </Link>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/about">
              About us
            </Link>

            <Link to="/contact">
              Contact us
            </Link>

          </div>


          {/* =================================================
              OUR COURSES
          ================================================= */}

          <div className="footer-column footer-courses">

            <h3>OUR COURSES</h3>

            <Link to="/courses/ui-ux-design">
              UI / UX Designer
            </Link>

            <Link to="/courses/digital-marketing">
              Digital marketing
            </Link>

            <Link to="/courses/full-stack-development">
              Web Development
            </Link>

          </div>


          {/* =================================================
              INFORMATION
          ================================================= */}

          <div className="footer-column footer-info">

            <div className="footer-action">

              <Link
                to="/contact"
                className="footer-enroll-btn"
              >
                Enroll Today
              </Link>

            </div>

            <h3>
              INFORMATION
            </h3>

            <Link to="#">
              Privacy policy
            </Link>

            <Link to="#">
              Terms & Conditions
            </Link>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="footer-divider"></div>


        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="footer-bottom">
          © 2024 De Mentee Academy. All Rights Reserved
        </div>

      </div>

    </footer>
  );
};

export default Footer;