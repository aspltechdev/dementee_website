import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import "./Alumni.css";
import footerlogo from "../assets/footerlogo.png";
import Nivetha from "../assets/Nivetha.png";
import Karthikumar from "../assets/Karthikumar.png";
import Footer from "./Footer";

function Alumni() {
  const [visibleAlumni, setVisibleAlumni] = useState(8);

  /* ================= FEATURED ALUMNI ================= */

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

  /* ================= ALL ALUMNI ================= */

  const alumni = [
    {
      name: "Suganya",
      role: "UI / UX DESIGNER",
    },
    {
      name: "R Sowmiya",
      role: "UI / UX DESIGNER",
    },
    {
      name: "Nivetha",
      role: "UI / UX DESIGNER",
      image: Nivetha,
    },
    {
      name: "Karthikuma",
      role: "UI / UX DESIGNER",
      image: Karthikumar,
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

  /* ================= LOAD MORE ================= */

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
                  className="featured-alumni-card"
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

                    {/* ================= ALUMNI IMAGE ================= */}

                    <div className="alumni-card-image">

                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                        />
                      ) : null}

                    </div>

                    {/* ================= ALUMNI CONTENT ================= */}

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

<Footer />
    </div>
  );
}

export default Alumni;