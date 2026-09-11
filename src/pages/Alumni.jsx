import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import "./Alumni.css";

function Alumni() {
  const [visibleAlumni, setVisibleAlumni] = useState(8);

  const featuredAlumni = [
    {
      name: "Suganya",
      role: "UI / UX DESIGNER",
      batch: "2024",
      company: "Placed at Largstone Pvt Ltd",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",
      featured: true,
    },
    {
      name: "R Sowmiya",
      role: "UI / UX DESIGNER",
      batch: "2024",
      company: "",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",
      featured: true,
    },
  ];

  const alumni = [
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Full name",
      role: "UI / UX DESIGNER",
    },
  ];

  const handleLoadMore = () => {
    setVisibleAlumni((prev) =>
      Math.min(prev + 4, alumni.length)
    );
  };

  return (
    <div className="alumni-page">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section className="alumni-hero">

          <div className="alumni-hero-content">

            <div className="alumni-pill">
              <span></span>
              ALUMNI PORTFOLIOS
            </div>

            <h1>
              Meet Our{" "}
              <span>Designers.</span>
            </h1>

            <p>
              Welcome to our Alumni Community! This is your gateway
              to connect with our Former Mentees around the World.
            </p>

          </div>

        </section>


        {/* ================= FEATURED ================= */}

        <section className="featured-alumni-section">

          <div className="alumni-container">

            <h2 className="alumni-section-title">
              Top Industry Achievers
            </h2>


            <div className="featured-label">
              <span></span>
              FEATURED
            </div>


            <div className="featured-alumni-grid">

              {featuredAlumni.map((person) => (

                <article
                  className={
                    person.featured
                      ? "featured-alumni-card"
                      : "featured-alumni-card"
                  }
                  key={person.name}
                >

                  <div className="featured-person-image">

                    <img
                      src={person.image}
                      alt={person.name}
                    />

                  </div>


                  <div className="featured-person-content">

                    <div className="featured-batch">
                      BATCH : {person.batch}
                    </div>

                    <div className="featured-role">
                      {person.role}
                    </div>

                    <h3>
                      {person.name}
                    </h3>

                    <p>
                      Lorem ipsum, or lipsum as it is sometimes
                      known, is dummy text used in laying out
                      print, graphic or web designs.
                    </p>


                    {person.company && (
                      <div className="featured-company">
                        {person.company}
                      </div>
                    )}

                  </div>


                  <button
                    className="featured-connect"
                    type="button"
                  >
                    CONNECT
                    <ArrowRight size={14} />
                  </button>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* ================= ALL ALUMNI ================= */}

        <section className="all-alumni-section">

          <div className="alumni-container">

            <h2 className="alumni-section-title">
              All Graduates & Designers
            </h2>


            <div className="alumni-grid">

              {alumni
                .slice(0, visibleAlumni)
                .map((person, index) => (

                  <article
                    className="alumni-card"
                    key={index}
                  >

                    <div className="alumni-card-image">
                      {/* Placeholder matching the Figma design */}
                    </div>


                    <div className="alumni-card-content">

                      <div className="alumni-card-role">
                        {person.role}
                      </div>

                      <h3>
                        {person.name}
                      </h3>


                      <button
                        type="button"
                        className="alumni-connect-btn"
                      >
                        CONNECT
                        <ArrowRight size={13} />
                      </button>

                    </div>

                  </article>

                ))}

            </div>


            {/* ================= LOAD MORE ================= */}

            {visibleAlumni < alumni.length && (

              <button
                type="button"
                className="load-more-btn"
                onClick={handleLoadMore}
              >
                Load More Alumni
                <ChevronDown size={15} />
              </button>

            )}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="alumni-footer">

        <div className="alumni-footer-container">

          <div className="alumni-footer-top">


            {/* BRAND / ADDRESS */}

            <div className="alumni-footer-brand">

              <div className="alumni-footer-logo">

                <div className="alumni-footer-logo-mark">
                  ✦
                </div>

                <div className="alumni-footer-logo-text">

                  <strong>
                    De mentee
                  </strong>

                  <span>
                    Technologies
                  </span>

                </div>

              </div>


              <h3>
                ADDRESS
              </h3>

              <p>
                Address : 142, 2nd Floor,
                Kamaraj Salai, Puducherry,
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


            {/* EXPLORE */}

            <div className="alumni-footer-column">

              <h3>
                EXPLORE
              </h3>

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


            {/* COURSES */}

            <div className="alumni-footer-column">

              <h3>
                OUR COURSES
              </h3>

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


            {/* INFORMATION */}

            <div className="alumni-footer-column alumni-information">

              <Link
                to="/contact"
                className="alumni-footer-enroll"
              >
                Enroll Today
              </Link>

              <h3>
                INFORMATION
              </h3>

              <a href="#privacy">
                Privacy policy
              </a>

              <a href="#terms">
                Terms & Conditions
              </a>

            </div>

          </div>


          <div className="alumni-footer-divider"></div>


          <div className="alumni-footer-bottom">

            © 2024 De Mentee Academy. All Rights Reserved

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Alumni;