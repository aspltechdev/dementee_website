import React, { useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Gallery.css";
import Footer from "./Footer";

import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";

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

  const sections = [
    {
      number: "01",
      title: "Workshops & Presentations",
      category: "Workshops",
      images: [
        {
          src: about1,
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
          src: about2,
          video: true,
        },
      ],
    },

    {
      number: "03",
      title: "Convocation Day",
      category: "Convocation",
      images: [
        {
          src: about3,
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
          src: about4,
          video: true,
        },
        {
          src: about5,
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

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= MAIN ================= */}

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
                type="button"
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

                      {/* VIDEO PLAY BUTTON */}

                      {image.video && (
                        <button
                          className="gallery-play"
                          type="button"
                          aria-label="Play video"
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
                          aria-label="Next image"
                          onClick={() =>
                            scrollGallery(section.number, "right")
                          }
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

      <Footer />
    </div>
  );
}

export default Gallery;