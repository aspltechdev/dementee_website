import { Link } from "react-router-dom";
import "./Gallery.css";


import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.png";

function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-container">

        {/* ================= HEADING ================= */}

        <div className="gallery-heading">

          <div className="gallery-badge">
            LIFE AT DE MENTEE
          </div>

          <h2>
            Our <span>Gallery & Community</span>
          </h2>

        </div>


        {/* ================= GALLERY GRID ================= */}

        <div className="gallery-grid">

          {/* ================= IMAGE 1 ================= */}

          <article className="gallery-card gallery-card-large">

            <img
              src={about1}
              alt="Workshops"
            />

            <div className="gallery-overlay"></div>

            <div className="gallery-content">

              <div className="gallery-label">
                WORKSHOPS
              </div>

              <h3>
                Sharing Ideas, Creating Impact
              </h3>

              <p>
                Inspiring conversations and connecting with the community.
              </p>

            </div>

          </article>


          {/* ================= IMAGE 2 ================= */}

          <article className="gallery-card gallery-card-small">

            <img
              src={about2}
              alt="Convocation celebration"
            />

            <div className="gallery-overlay"></div>

            <div className="gallery-content">

              <div className="gallery-label purple-label">
                CONVOCATION DAY
              </div>

              <h3>
                Celebrating New Beginnings
              </h3>

            </div>

          </article>


          {/* ================= IMAGE 3 ================= */}

          <article className="gallery-card gallery-bottom-card">

            <img
              src={about3}
              alt="Opening ceremony"
            />

            <div className="gallery-overlay"></div>

            <div className="gallery-content">

              <div className="gallery-label purple-label">
                OPENING CEREMONY
              </div>

              <h3>
                A New Chapter Begins
              </h3>

            </div>

          </article>


          {/* ================= IMAGE 4 ================= */}

          <article className="gallery-card gallery-bottom-card">

            <img
              src={about4}
              alt="Podcast conversation"
            />

            <div className="gallery-overlay"></div>

            <div className="gallery-content">

              <div className="gallery-label dark-label">
                PODCAST STORIES
              </div>

              <h3>
                Conversations That Inspire
              </h3>

            </div>

          </article>


          {/* ================= IMAGE 5 ================= */}

          <article className="gallery-card community-card">

            <img
              src={about5}
              alt="Join our community"
            />

            <div className="gallery-overlay"></div>

          </article>

        </div>


        {/* ================= VIEW ALL ================= */}

        <div className="gallery-view-all-wrapper">

          <Link
            to="/gallery"
            className="view-all-btn"
          >
            <span>View all</span>
            <span className="view-all-arrow">→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Gallery;