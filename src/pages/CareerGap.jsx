import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Play } from "lucide-react";
import footerlogo from "../assets/footerlogo.png";
import Navbar from "../components/Navbar";

import "./CareerGap.css";

function CareerGap() {
  const [openFaq, setOpenFaq] = useState(null);

  const journeySteps = [
    {
      number: "STEP 01",
      title: "Rebuild Confidence",
      description:
        "Overcome initial mental barriers with 1-on-1 mentor guidance and career mindset coaching.",
    },
    {
      number: "STEP 02",
      title: "Learn Future Skills",
      description:
        "Master the latest tools, frameworks, and AI-driven workflows demanded in today's tech market.",
    },
    {
      number: "STEP 03",
      title: "Build Your Portfolio",
      description:
        "Work on live client projects to build proof of work that replaces your career break on your resume.",
    },
    {
      number: "STEP 04",
      title: "Launch Your Career",
      description:
        "Get interview prep, resume optimization, and direct referrals to hiring partners actively recruiting.",
      featured: true,
    },
  ];

  const tracks = [
    {
      icon: "👩🏻‍💼",
      title: "Mothers Returning",
      description:
        "Women returning to work after maternity leave or extended family caregiving breaks.",
    },
    {
      icon: "⚕️",
      title: "Medical Break",
      description:
        "Individuals returning after taking time off for personal health recovery or family medical care.",
    },
    {
      icon: "🎓",
      title: "Career Switchers",
      description:
        "Professionals looking to transition from non-tech domains into modern tech, design, or marketing.",
    },
    {
      icon: "📚",
      title: "Higher Education",
      description:
        "Graduates or professionals who took breaks to pursue higher studies or competitive exams.",
    },
    {
      icon: "💼",
      title: "Laid-off Workforce",
      description:
        "Tech workers facing employment gaps due to company restructuring.",
    },
    {
      icon: "📍",
      title: "Relocated Pros",
      description:
        "Individuals who moved cities or countries and experienced career breaks during settlement.",
    },
    {
      icon: "👨🏻‍💻",
      title: "Future freelancers",
      description:
        "Candidates who prepared for public exams and are now ready to build a private tech career.",
    },
    {
      icon: "🧑🏻‍💼",
      title: "Ex-Entrepreneurs",
      description:
        "Founders or freelancers seeking structured corporate stability after running independent businesses.",
    },
  ];

  const testimonials = [
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
      name: "Name",
      company: "Company",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
      name: "Name",
      company: "Company",
    },
  ];

  const faqs = [
    {
      question: "Is there an age limit for the programs?",
    },
    {
      question: "Do I need prior technical knowledge?",
    },
    {
      question:
        "Is there any support for job placement after course completion?",
    },
  ];

  return (
    <div className="career-gap-page">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="cg-hero">

        <div className="cg-hero-content">

          <div className="cg-pill">
            <span></span>
            CAREER COMEBACK
          </div>

          <h1>
            It's Never Too Late
            <br />
            To <span>Start Again.</span>
          </h1>

          <p>
            Turn your career gap into your greatest strength. Rebuild your
            technical skills, master modern workflows, and rejoin the industry
            with unshakeable confidence.
          </p>

        </div>


        {/* =================================================
            THE REALITY
            ================================================= */}

        <div className="cg-reality">

          <div className="cg-reality-content">

            <div className="cg-small-pill">
              THE REALITY
            </div>

            <h2>
              Every Comeback Begins
              <br />
              <span>With Courage</span>
            </h2>

            <p>
              We know taking a career gap can make you feel out of touch with
              the industry. But gaps happen—for family, health, personal
              choices, or unexpected life turns. What matters now is how you
              step back in.
            </p>


            <div className="cg-confidence-card">

              <div className="cg-confidence-icon">
                🔥
              </div>

              <div>

                <h3>
                  Rebuild Your Confidence
                </h3>

                <p>
                  Overcome self-doubt with structured mentorship and hands-on
                  guidance designed specifically for returnees.
                </p>

              </div>

            </div>

          </div>


          <div className="cg-reality-image">

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
              alt="Professional returning to work"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          4 STEP ROAD MAP
          ===================================================== */}

      <section className="cg-roadmap-section">

        <div className="cg-roadmap-container">

          <div className="cg-section-heading">

            <div className="cg-small-pill cg-blue-pill">
              4-STEP ROAD MAP
            </div>

            <h2>
              Your Journey <span>To Success</span>
            </h2>

            <p>
              A structured, step-by-step framework to bridge your gap and
              relaunch your career.
            </p>

          </div>


          <div className="cg-steps-grid">

            {journeySteps.map((step) => (
              <article
                className={`cg-step-card ${
                  step.featured ? "cg-step-featured" : ""
                }`}
                key={step.number}
              >

                <div className="cg-step-number">
                  {step.number}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TAILORED TRACKS
          ===================================================== */}

      <section className="cg-tracks-section">

        <div className="cg-tracks-container">

          <div className="cg-section-heading">

            <div className="cg-small-pill cg-red-pill">
              TAILORED TRACKS
            </div>

            <h2>
              Who Is This <span>Program For?</span>
            </h2>

            <p>
              Whether you took a break for family, health, or career
              transition—we have a path built for you.
            </p>

          </div>


          <div className="cg-track-grid">

            {tracks.map((track) => (
              <article
                className="cg-track-card"
                key={track.title}
              >

                <div className="cg-track-icon">
                  {track.icon}
                </div>

                <h3>
                  {track.title}
                </h3>

                <p>
                  {track.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VOICES OF TRANSFORMATION
          ===================================================== */}

      <section className="cg-voices-section">

        <div className="cg-voices-container">

          <div className="cg-section-heading">

            <h2>
              <span>Voices</span> of Transformation
            </h2>

            <p>
              Hear how fellow returnees restarted their professional careers
              after 2–5 year gaps.
            </p>

          </div>


          <div className="cg-testimonial-grid">

            {testimonials.map((testimonial, index) => (
              <article
                className="cg-testimonial-card"
                key={index}
              >

                <div className="cg-video-image">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                  <button
                    type="button"
                    className="cg-play-button"
                    aria-label="Play testimonial"
                  >
                    <Play
                      size={18}
                      fill="white"
                    />
                  </button>

                </div>


                <div className="cg-testimonial-info">

                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.company}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VISION
          ===================================================== */}

      <section className="cg-vision-section">

        <div className="cg-vision-container">

          <div className="cg-vision-content">

            <div className="cg-vision-pill">
              OUR VISION
            </div>

            <h2>
              Your Future Starts With One
              <br />
              Decision.
            </h2>

          </div>


          <a
            href="#cg-faq"
            className="cg-vision-button"
          >
            ENQUIRY NOW
          </a>

        </div>

      </section>


      {/* =====================================================
          FAQ
          ===================================================== */}

      <section
        className="cg-faq-section"
        id="cg-faq"
      >

        <div className="cg-faq-container">

          <div className="cg-section-heading">

            <h2>
              Common <span>Questions?</span>
            </h2>

          </div>


          <div className="cg-faq-list">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  className={`cg-faq-item ${
                    isOpen ? "cg-faq-open" : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    className="cg-faq-question"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="cg-faq-icon">

                      {isOpen ? (
                        <Minus size={15} />
                      ) : (
                        <Plus size={15} />
                      )}

                    </span>

                  </button>


                  {isOpen && (
                    <div className="cg-faq-answer">

                      <p>
                        Please contact our team for more information about
                        this program.
                      </p>

                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="cg-footer">

        <div className="cg-footer-container">

          <div className="cg-footer-top">


            {/* BRAND */}

            <div className="cg-footer-brand">

            <div className="cg-footer-logo">
  <img
    src={footerlogo}
    alt="De Mentee Technologies"
  />
</div>

              <h3>
                ADDRESS
              </h3>


              <p>
                Address : 142, 2nd Floor, Kamaraj Salai,
                Puducherry, 605013
              </p>


              <p>
                Phone: +91 88703 97432
              </p>


              <p>
                info@dementee.in
              </p>

            </div>


            {/* EXPLORE */}

            <div className="cg-footer-column">

              <h3>
                EXPLORE
              </h3>

              <Link to="/">
                Home
              </Link>

              <a href="#success">
                Success story
              </a>

              <a href="#blog">
                Blog
              </a>

              <Link to="/about">
                About us
              </Link>

              <a href="#contact">
                Contact us
              </a>

            </div>


            {/* COURSES */}

            <div className="cg-footer-column">

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

            <div className="cg-footer-column">

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


            <a
              href="#cg-faq"
              className="cg-footer-enroll"
            >
              Enroll Today
            </a>

          </div>


          <div className="cg-footer-divider"></div>


          <div className="cg-footer-bottom">

            © 2024 De Mentee Academy. All Rights Reserved

          </div>

        </div>

      </footer>

    </div>
  );
}

export default CareerGap;