import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import "./About.css";

import Navbar from "../components/Navbar";
import Footer from "./Footer";

import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";

import clientbrand1 from "../assets/clientbrand1.jpg";
import clientbrand2 from "../assets/clientbrand2.png";
import clientbrand3 from "../assets/clentbrand3.png";
import clientbrand4 from "../assets/clientbrand4.png";
import clientbrand5 from "../assets/clientbrand5.png";
import clientbrand6 from "../assets/cleintbrand6.png";
import clientbrand7 from "../assets/clientbrand7.png";

import growingstrong from "../assets/growingstrong.png";
import thebegenning from "../assets/thebegenning.png";
import scalingnewweights from "../assets/scalingnewheights.png";
import innovation from "../assets/innovation.png";

import buildfuture from "../assets/buildfuture.jpg";
import journey from "../assets/journey.jpg";

import Nivetha from "../assets/Nivetha.png";

function About() {
  const youtubeIframeRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const sendYoutubeCommand = (func) => {
    if (!youtubeIframeRef.current) return;

    youtubeIframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args: [],
      }),
      "*"
    );
  };

  const toggleYoutubeVideo = () => {
    if (isVideoPlaying) {
      sendYoutubeCommand("pauseVideo");
      setIsVideoPlaying(false);
    } else {
      sendYoutubeCommand("playVideo");
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="about-page">

      <Navbar />

      {/* ================= ABOUT HERO ================= */}

      <section className="about-hero">
        <div className="about-badge">
          <span></span>
          ABOUT ORGANISATION
        </div>

        <h1>
          Transforming Potential <span>Into</span>
          <br />
          <span>Possibility.</span>
        </h1>

        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
          in laying out print, graphic or web designs.
        </p>
      </section>


      {/* ================= FOUNDATION ================= */}

      <section className="foundation-section">
        <div className="foundation-card">

          <div className="foundation-media">

            <div className="foundation-iframe-layer">
              <iframe
                ref={youtubeIframeRef}
                src="https://www.youtube.com/embed/g9H1D2d-CAI?enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
                title="Empowering Growth Through Mentorship"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div
              className="foundation-video-click-blocker"
              aria-hidden="true"
            />

            <button
              type="button"
              className={`foundation-play ${
                isVideoPlaying ? "playing" : ""
              }`}
              onClick={toggleYoutubeVideo}
              aria-label={
                isVideoPlaying ? "Pause video" : "Play video"
              }
            >
              {isVideoPlaying ? (
                <Pause size={22} fill="currentColor" />
              ) : (
                <Play size={22} fill="currentColor" />
              )}
            </button>

          </div>

          <div className="foundation-content">

            <div className="foundation-label">
              OUR FOUNDATION
            </div>

            <h2>
              Empowering Growth Through
              <br />
              Mentorship
            </h2>

            <p>
              At De Mentee, we believe in the transformative power of
              mentorship. Guided by a passion for personal and professional
              development, we serve as the compass for your journey,
              illuminating paths to success.
            </p>

            <blockquote>
              “Success isn't about being the smartest or the most talented.
              It's about taking action when everyone else is making excuses.”
            </blockquote>

          </div>
        </div>
      </section>


      {/* ================= DRIVEN BY PURPOSE ================= */}

      <section className="purpose-section">
        <div className="purpose-container">

          <div className="purpose-heading">
            <h2>
              Driven By <span>Purpose</span>
            </h2>

            <p>
              Clear objectives fueling our daily commitment to global learners.
            </p>
          </div>

          <div className="purpose-grid">

            <article className="purpose-card vision-card">

              <div className="purpose-icon">
                🚀
              </div>

              <div className="purpose-label vision-label">
                OUR VISION
              </div>

              <h3>
                Empowering learners to build
                <br />
                successful careers.
              </h3>

              <p>
                At De Mentee, we bridge the gap between education and industry
                through practical learning, expert mentorship, and real-world
                experiences.
              </p>

            </article>


            <article className="purpose-card mission-card">

              <div className="purpose-icon light-purpose-icon">
                🎯
              </div>

              <div className="purpose-label mission-label">
                OUR MISSION
              </div>

              <h3>
                Shaping the future of digital
                <br />
                education.
              </h3>

              <p>
                Our vision is to create a learning ecosystem where every
                individual has access to industry-relevant education,
                innovative thinking, and mentorship.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* ================= OUR JOURNEY ================= */}

      <section className="journey-section">

        <div className="journey-container">

          <div className="journey-cards">

            <article className="journey-card">
              <div className="journey-image">
                <img
                  src={thebegenning}
                  alt="De Mentee beginning"
                />
                <div className="journey-year">2022</div>
              </div>

              <div className="journey-card-content">
                <h3>THE BEGINNING</h3>
                <p>
                  What began as a small dream from home marked the first step
                  of our journey.
                </p>
              </div>
            </article>


            <article className="journey-card">
              <div className="journey-image">
                <img
                  src={growingstrong}
                  alt="De Mentee growing strong"
                />
                <div className="journey-year">2023</div>
              </div>

              <div className="journey-card-content">
                <h3>GROWING STRONG</h3>
                <p>
                  As our vision grew, we moved into a new space and began
                  building something bigger.
                </p>
              </div>
            </article>


            <article className="journey-card">
              <div className="journey-image">
                <img
                  src={innovation}
                  alt="De Mentee innovation"
                />
                <div className="journey-year">2024</div>
              </div>

              <div className="journey-card-content">
                <h3>INNOVATION IN ACTION</h3>
                <p>
                  With more people joining us, our small team grew into a
                  community driven by shared goals.
                </p>
              </div>
            </article>


            <article className="journey-card">
              <div className="journey-image">
                <img
                  src={scalingnewweights}
                  alt="De Mentee scaling new heights"
                />
                <div className="journey-year">2026</div>
              </div>

              <div className="journey-card-content">
                <h3>SCALING NEW HEIGHTS</h3>
                <p>
                  From a small beginning at home to our own company — a
                  milestone worth celebrating.
                </p>
              </div>
            </article>

          </div>


          <div className="journey-sticky-area">

            <div className="journey-sticky">

              <div className="journey-label">
                OUR LEGACY
              </div>

              <h2>
                Our Journey
                <br />
                Over
                <br />
                <span>The years.</span>
              </h2>

              <p>
                What began as a modest initiative has evolved into a growing
                organization with a dedicated team and a space of our own.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= AWARDS & BRANDS ================= */}

      <section className="recognition-section">

        <div className="recognition-container">

          <div className="recognition-heading">

            <div className="recognition-badge">
              RECOGNITION
            </div>

            <h2>
              Awards & <span>Meetups</span>
            </h2>

          </div>


          <div className="awards-grid">

            <article className="award-card">
              <div className="award-image">
                <img src={award1} alt="De Mentee award" />
              </div>

              <div className="award-content">
                <span className="award-year pink">
                  YEAR
                </span>

                <h3>
                  Network Kalam Logo Design
                  <br />
                  awarded by Seyal
                </h3>
              </div>
            </article>


            <article className="award-card">
              <div className="award-image">
                <img src={award2} alt="De Mentee award" />
              </div>

              <div className="award-content">
                <span className="award-year purple">
                  YEAR
                </span>

                <h3>
                  Award name
                </h3>
              </div>
            </article>


            <article className="award-card">
              <div className="award-image">
                <img src={award3} alt="De Mentee recognition" />
              </div>

              <div className="award-content">
                <span className="award-year yellow">
                  YEAR
                </span>

                <h3>
                  Award name
                </h3>
              </div>
            </article>


            <article className="award-card">
              <div className="award-image">
                <img src={award4} alt="De Mentee meetup" />
              </div>

              <div className="award-content">
                <span className="award-year pink">
                  YEAR
                </span>

                <h3>
                  Award name
                </h3>
              </div>
            </article>

          </div>


          {/* ================= BRANDS ================= */}

          <div className="brands-heading">

            <div className="brands-badge">
              BRANDS
            </div>

            <h2>
              <span>Brands</span> We Working With
            </h2>

            <p>
              Proudly delivering creative solutions for businesses across
              diverse industries.
            </p>

          </div>


          <div className="brands-grid">

            <div className="brand-card">
              <img src={clientbrand1} alt="Client brand 1" />
            </div>

            <div className="brand-card">
              <img src={clientbrand2} alt="Client brand 2" />
            </div>

            <div className="brand-card">
              <img src={clientbrand3} alt="Client brand 3" />
            </div>

            <div className="brand-card">
              <img src={clientbrand4} alt="Client brand 4" />
            </div>

            <div className="brand-card">
              <img src={clientbrand5} alt="Client brand 5" />
            </div>

            <div className="brand-card">
              <img src={clientbrand6} alt="Client brand 6" />
            </div>

            <div className="brand-card">
              <img src={clientbrand7} alt="Client brand 7" />
            </div>

          </div>

        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section className="team-section">

        <div className="team-container">

          <div className="team-heading">
            <h2>
              Meet Our <span>Team</span>
            </h2>
          </div>


          <div className="team-grid">

            <article className="team-card">
              <div className="team-image">
                <img
                  src="/images/team-1.jpg"
                  alt="Team member"
                />
              </div>

              <h3>Name</h3>
              <p>Role</p>
            </article>


            <article className="team-card">
              <div className="team-image">
                <img
                  src="/images/team-2.jpg"
                  alt="Team member"
                />
              </div>

              <h3>Name</h3>
              <p>Role</p>
            </article>


            <article className="team-card">
              <div className="team-image">
                <img
                  src={Nivetha}
                  alt="Nivetha"
                />
              </div>

              <h3>Nivetha</h3>
              <p>UI UX Designer</p>
            </article>


            <article className="team-card">
              <div className="team-image">
                <img
                  src="/images/team-4.jpg"
                  alt="Team member"
                />
              </div>

              <h3>Name</h3>
              <p>Role</p>
            </article>

          </div>


          {/* ================= FOUNDER MESSAGE ================= */}

          <div className="founder-message-card">

            <div className="founder-photo">
              <img
                src={buildfuture}
                alt="Building Futures, Creating Impact"
              />
            </div>

            <div className="founder-message-content">

              <h2>
                Building Futures, Creating Impact.
              </h2>

              <p className="founder-description">
                De Mentee was founded with a simple yet powerful vision—to make
                practical, industry-focused learning accessible to everyone.
              </p>

              <div className="founder-details">

                <h3>
                  AURO LAKSHMANAN
                </h3>

                <p>
                  Founder & Chief Mentor
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT CTA ================= */}

      <section className="about-cta-section">

        <div className="about-cta-container">

          <div className="about-cta-card">

            <div className="about-cta-content">

              <div className="about-cta-badge">
                START YOUR JOURNEY
              </div>

              <h2>
                Ready to transform your career
                <br />
                as a UI / UX Designer or Digital
                <br />
                Marketer ?
              </h2>

              <div className="about-cta-line"></div>

              <a
                href="/#courses"
                className="about-cta-button"
              >
                Explore Programs Now
              </a>

            </div>


            <div className="about-cta-image">

              <img
                src={journey}
                alt="De Mentee journey"
              />

            </div>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default About;