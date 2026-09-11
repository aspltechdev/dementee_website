import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Gallery.css";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const galleryRefs = useRef({});
  const scrollGallery = (sectionNumber, direction) => {
  const gallery = galleryRefs.current[sectionNumber];

  if (!gallery) return;

  gallery.scrollBy({
    left: direction === "left" ? -300 : 300,
    behavior: "smooth",
  });
};

  const categories = [
    "All",
    "Workshops",
    "Podcast Videos",
    "Convocation",
    "Session Videos",
  ];

  /*
    Replace these image URLs with your actual gallery images
    once you have them in src/assets.
  */

  const sections = [
    {
      number: "01",
      title: "Workshops & Presentations",
      category: "Workshops",
      images: [
        {
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=90",
        },
        {
          src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=90",
        },
        {
          src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=90",
          arrow: true,
        },
      ],
    },

    {
      number: "02",
      title: "Podcast Videos",
      category: "Podcast Videos",
      images: [
        {
          src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=90",
          video: true,
        },
        {
          src: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1000&q=90",
          video: true,
        },
        {
          src: "https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?auto=format&fit=crop&w=1000&q=90",
          video: true,
        },
        {
          src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=90",
          arrow: true,
        },
      ],
    },

    {
      number: "03",
      title: "Convocation Day",
      category: "Convocation",
      images: [
        {
          src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1000&q=90",
        },
        {
          src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=90",
        },
        {
          src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1000&q=90",
          arrow: true,
        },
      ],
    },

    {
      number: "04",
      title: "Session Demo Videos",
      category: "Session Videos",
      images: [
        {
          src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1000&q=90",
          video: true,
        },
        {
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=90",
          video: true,
        },
        {
          src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1000&q=90",
          video: true,
          arrow: true,
        },
      ],
    },
  ];

  const visibleSections =
    activeFilter === "All"
      ? sections
      : sections.filter(
          (section) => section.category === activeFilter
        );

  return (
    <div className="gallery-page">

      <Navbar />

      <main>

        {/* ================= HERO ================= */}

        <section className="gallery-hero">

          <div className="gallery-badge">
            <span></span>
            GALLERY SECTION
          </div>

          <h1>
            Moments That <span>Matter.</span>
          </h1>

          <p>
            Take a glimpse into our vibrant workplace through events,
            workshops, knowledge-
            <br className="desktop-break" />
            sharing sessions, and memorable moments captured along the way.
          </p>

          {/* ================= FILTER ================= */}

          <div className="gallery-filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeFilter === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}

          </div>

        </section>


        {/* ================= GALLERY SECTIONS ================= */}

        <section className="gallery-area">

          <div className="gallery-wrapper">

            {visibleSections.map((section) => (

              <section
                className="gallery-block"
                key={section.number}
              >

                {/* SECTION TITLE */}

                <div className="gallery-block-title">

                  <div className="gallery-section-number">
                    {section.number}
                  </div>

                  <h2>
                    {section.title}
                  </h2>

                </div>


                {/* IMAGE STRIP */}

               <div
  className="gallery-strip"
  ref={(element) => {
    galleryRefs.current[section.number] = element;
  }}
>
  {section.images.map((image, index) => (

                    <div
                      className="gallery-card"
                      key={index}
                    >

                      <img
                        src={image.src}
                        alt={section.title}
                      />


                      {/* VIDEO PLAY */}

                      {image.video && (
                        <button
                          className="gallery-play"
                          type="button"
                        >
                          <Play
                            size={17}
                            fill="currentColor"
                          />
                        </button>
                      )}


                      {/* NEXT BUTTON */}

                      {image.arrow && (
                        <button
                          className="gallery-arrow"
                          type="button"
                        >
                          <ArrowRight size={19} />
                        </button>
                      )}

                    </div>

                  ))}

                </div>

              </section>

            ))}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="gallery-footer">

        <div className="gallery-footer-inner">

          <div className="gallery-footer-content">

            {/* BRAND */}

            <div className="gallery-brand">

              <div className="gallery-logo">

                <div className="gallery-logo-symbol">
                  ✦
                </div>

                <div className="gallery-logo-name">
                  <strong>De mentee</strong>
                  <span>Technologies</span>
                </div>

              </div>


              <h3>ADDRESS</h3>

              <p>
                Address : 142, 2nd Floor, Kamaraj Salai,
                Puducherry,
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

            <div className="gallery-footer-column">

              <h3>EXPLORE</h3>

              <Link to="/">
                Home
              </Link>

              <a href="/#success">
                Success story
              </a>

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

            <div className="gallery-footer-column">

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


            {/* INFORMATION */}

            <div className="gallery-footer-column">

              <Link
                to="/contact"
                className="gallery-enroll"
              >
                Enroll Today
              </Link>

              <h3>INFORMATION</h3>

              <a href="#privacy">
                Privacy policy
              </a>

              <a href="#terms">
                Terms & Conditions
              </a>

            </div>

          </div>


          <div className="gallery-footer-line"></div>

          <div className="gallery-copyright">
            © 2024 De Mentee Academy. All Rights Reserved
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Gallery;