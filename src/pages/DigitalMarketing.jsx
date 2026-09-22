import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./DigitalMarketing.css";
import { useState } from "react";
import Footer from "./Footer";
import footerlogo from "../assets/footerlogo.png";

/* =====================================================
   CAREER ROLE IMAGES
===================================================== */

import jrdm1 from "../assets/jrdm1.png";
import jrdm2 from "../assets/jrdm2.png";
import jrdm3 from "../assets/jrdm3.png";
import jrdm4 from "../assets/jrdm4.png";
import jrdm5 from "../assets/jrdm5.png";
import jrdm6 from "../assets/jrdm6.png";
import jrdm7 from "../assets/jrdm7.png";
import jrdm8 from "../assets/jrdm8.png";


function DigitalMarketing() {
  const tools = [
    {
      name: "Google Ads",
      icon: "G",
      className: "dm-google",
    },
    {
      name: "Meta Ads",
      icon: "∞",
      className: "dm-meta",
    },
    {
      name: "Instagram Growth",
      icon: "◎",
      className: "dm-instagram",
    },
    {
      name: "Hostinger",
      icon: "H",
      className: "dm-hostinger",
    },
    {
      name: "SEMrush",
      icon: "S",
      className: "dm-semrush",
    },
    {
      name: "Word Press",
      icon: "W",
      className: "dm-wordpress",
    },
  ];

  const dmFaqs = [
    {
      question:
        "Can I enroll if I have no prior experience in UI/UX or Digital Marketing?",
      answer:
        "Yes. The course is beginner-friendly and starts from the fundamentals before moving into practical digital marketing strategies and projects.",
    },
    {
      question:
        "How are the courses structured, and what is the duration?",
      answer:
        "The Digital Marketing course runs for 3 months and combines guided learning, practical sessions, assignments, projects, and mentor support.",
    },
    {
      question:
        "Is there any support for job placement after course completion?",
      answer:
        "Yes. Learners receive career guidance, portfolio support, interview preparation, and placement assistance after completing the course.",
    },
  ];

  const [openDmFaq, setOpenDmFaq] = useState(null);

  return (
    <div className="digital-marketing-page">
      <Navbar />

      <main>
        {/* =============================================
            DIGITAL MARKETING HERO
        ============================================== */}
        <section className="dm-hero">
          <div className="dm-course-badge">
            <span></span>
            DIGITAL MARKETING COURSE
          </div>

          <h1 className="dm-main-title">
            Master Digital Marketing,
            <br />
            <span>Build careers.</span>
          </h1>

          <p className="dm-hero-description">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print,
            <br className="dm-desktop-break" />
            graphic or web designs.
          </p>

          {/* BUTTONS */}
          <div className="dm-hero-buttons">
            <a href="#dm-enroll" className="dm-enroll-btn">
              ENROLL NOW - ₹ 40,000
            </a>

            <a href="#dm-syllabus" className="dm-syllabus-btn">
              Explore Syllabus
            </a>
          </div>

          {/* =============================================
              TOOLS
          ============================================== */}
          <div className="dm-tools-section">
            <h3>HANDS ON MASTERY OF 8+ INDUSTRY TOOLS</h3>

            <div className="dm-tools-list">
              {tools.map((tool) => (
                <div className="dm-tool-pill" key={tool.name}>
                  <span className={`dm-tool-icon ${tool.className}`}>
                    {tool.icon}
                  </span>

                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =============================================
            WHY CHOOSE DIGITAL MARKETING
        ============================================== */}
        <section className="dm-why-intro">
          <h2>
            Why Choose Our{" "}
            <span>
              Digital
              <br />
              Marketing Course ?
            </span>
          </h2>

          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying
            <br className="dm-desktop-break" />
            out print, graphic or web designs.
          </p>
        </section>

        {/* =====================================================
            WHY CHOOSE COURSE CARDS
        ===================================================== */}
        <section className="dm-benefits-section">
          <div className="dm-benefits-grid">

            <article className="dm-benefit-card dm-benefit-dark">
              <div className="dm-benefit-number dm-number-yellow">
                01
              </div>

              <h3>Expert-Led Learning</h3>

              <p>
                Our seasoned instructors bring years of industry experience,
                providing you with real-world insights and practical knowledge.
                Learn from the best to become the best!
              </p>
            </article>


            <article className="dm-benefit-card">
              <div className="dm-benefit-number dm-number-purple">
                02
              </div>

              <h3>Hands-On Experience</h3>

              <p>
                Dive into real-world projects, case studies, and interactive
                exercises that prepare you for the challenges of digital marketing.
              </p>
            </article>


            <article className="dm-benefit-card">
              <div className="dm-benefit-number dm-number-yellow-soft">
                03
              </div>

              <h3>Career-Ready Skills</h3>

              <p>
                Our course is designed to make you job-ready, giving you a
                competitive edge in the digital job market.
              </p>
            </article>


            <article className="dm-benefit-card dm-benefit-wide">
              <div className="dm-benefit-number dm-number-pink">
                04
              </div>

              <h3>Comprehensive Curriculum</h3>

              <p>
                Whether you're a beginner or looking to upskill, our curriculum
                caters to all levels. Master the art of online advertising,
                email marketing, and more with a carefully crafted syllabus.
              </p>
            </article>

          </div>
        </section>


        {/* =====================================================
            SKILL SET
        ===================================================== */}
        <section className="dm-skill-section">
          <div className="dm-skill-heading">
            <div className="dm-skill-badge">
              SKILL SET
            </div>

            <h2>
              Uncover the Exciting Skills That Awaits You
              <br />
              in <span>Our Masterclass Program</span>
            </h2>
          </div>


          <div className="dm-skill-grid">

            <div className="dm-skill-card">
              <div className="dm-skill-icon">📱</div>
              <span>
                Social Media
                <br />
                Optimization (SMO)
              </span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon">📊</div>
              <span>SEO Strategies</span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon">✉️</div>
              <span>Email Marketing</span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon">📈</div>
              <span>
                Google Marketing
                <br />
                Tools
              </span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon dm-wordpress-icon">
                W
              </div>

              <span>
                WordPress
                <br />
                Management
              </span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon">🔑</div>
              <span>Keyword Analysis</span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon">🌐</div>
              <span>Website Creation</span>
            </div>


            <div className="dm-skill-card">
              <div className="dm-skill-icon dm-wix-icon">
                WIX
              </div>

              <span>Wordpress &amp; WIX</span>
            </div>

          </div>
        </section>


        {/* =====================================================
            CAREER SCOPE INTRO
        ===================================================== */}
        <section className="dm-career-scope-section">
          <div className="dm-career-scope-heading">
            <div className="dm-job-badge">
              JOB ROLES
            </div>

            <h2>
              Career Scope of <span>Digital marketing</span>
            </h2>
          </div>
        </section>

        {/* =====================================================
            CAREER ROLES — images jrdm1 ... jrdm8
        ===================================================== */}
        <section className="dm-career-roles-section">

          <div className="dm-career-roles-grid">

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm1} alt="Digital Marketing Specialist" />
              </div>
              <h3>Digital Marketing Specialist</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm2} alt="Social Media Manager" />
              </div>
              <h3>Social Media Manager</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm3} alt="SEO Specialist" />
              </div>
              <h3>SEO Specialist</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm4} alt="Digital Advertising Specialist" />
              </div>
              <h3>Digital Advertising Specialist</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm5} alt="Email Marketing Specialist" />
              </div>
              <h3>Email Marketing Specialist</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm6} alt="Brand Manager" />
              </div>
              <h3>Brand Manager</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm7} alt="Digital Strategist" />
              </div>
              <h3>Digital Strategist</h3>
            </article>

            <article className="dm-career-role-card">
              <div className="dm-career-role-icon">
                <img src={jrdm8} alt="Content Marketing Manager" />
              </div>
              <h3>Content Marketing Manager</h3>
            </article>

          </div>
        </section>


        {/* =====================================================
            SYLLABUS BREAKDOWN
        ===================================================== */}
        <section className="dm-syllabus-section" id="dm-syllabus">

          <div className="dm-syllabus-heading">
            <h2>
              Our Digital Marketing <span>Syllabus</span>
              <br />
              <span>Breakdown</span>
            </h2>

            <p>
              A Structured journey designed with strategic tools practical Insights
            </p>
          </div>


          {/* WEEK TABS */}
          <div className="dm-week-tabs">

            <button className="dm-week-tab active" type="button">
              <span className="dm-week-tab-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="8" y="14" width="5" height="5" rx="1" />
                </svg>
              </span>
              Week 1 - 2
            </button>

            <button className="dm-week-tab" type="button">
              <span className="dm-week-tab-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="8" y="14" width="5" height="5" rx="1" />
                </svg>
              </span>
              Week 3
            </button>

            <button className="dm-week-tab" type="button">
              <span className="dm-week-tab-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="8" y="14" width="5" height="5" rx="1" />
                </svg>
              </span>
              Week 4
            </button>

          </div>


          {/* PHASE CARD */}
          <div className="dm-phase-card">

            <div className="dm-phase-title-row">

              <div className="dm-phase-badge">
                PHASE 01
              </div>

              <h3>
                Establishing a Strong Foundation
              </h3>

            </div>


            <div className="dm-phase-content-grid">

              <article className="dm-phase-topic-card">
                <h4>
                  Fundamentals &amp; Objectives of Marketing:
                </h4>

                <p>
                  Lay the groundwork with an in-depth understanding of marketing
                  principles and objectives.
                </p>
              </article>


              <article className="dm-phase-topic-card">
                <h4>
                  Social Media Marketing:
                </h4>

                <p>
                  Dive into the world of social media, learning strategies to engage
                  and grow your audience.
                </p>
              </article>

            </div>

          </div>

        </section>

        {/* =====================================================
            DIGITAL MARKETING PRICING
        ===================================================== */}
        <section className="dm-pricing-section" id="dm-enroll">
          <div className="dm-pricing-card">

            {/* LEFT */}
            <div className="dm-pricing-content">
              <div className="dm-pricing-badge">
                DIGITAL MARKETING COURSE
              </div>

              <h2>
                <span>Do More,</span> Earn More ?
              </h2>

              <div className="dm-pricing-details">
                <p>Duration : 3 Months</p>
                <p>Format : Both offline and Online</p>
                <p>EMI Available - 4 × ₹10,000</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="dm-pricing-box">
              <h3>Digital Marketing Course</h3>

              <div className="dm-price">
                <small>₹</small>
                40,000
              </div>

              <p>Inclusive of all taxes</p>

              <a href="#contact" className="dm-pricing-enroll-btn">
                Enroll now
              </a>
            </div>

          </div>
        </section>


        {/* =====================================================
            TARGET AUDIENCE
        ===================================================== */}
        <section className="dm-target-section">

          <div className="dm-target-heading">
            <div className="dm-target-badge">
              TARGET AUDIENCE
            </div>

            <h2>
              <span>Who Qualifies</span> for This Uplifting
              <br />
              Course
            </h2>
          </div>


          <div className="dm-target-grid">

            {/* BUSINESS OWNERS */}
            <article className="dm-target-card">

              <div className="dm-target-icon">
                🧑‍💼
              </div>

              <h3>Business Owners</h3>

              <p>
                Perfect for business owners like you! This course helps you
                understand digital marketing basics. Learn how to make your
                business stand out online, reach more people, and grow.
              </p>

            </article>


            {/* STUDENTS */}
            <article className="dm-target-card dm-target-card-dark">

              <div className="dm-target-icon dm-target-icon-dark">
                🔮
              </div>

              <h3>Students</h3>

              <p>
                This course is your gateway to mastering the essentials of
                digital marketing. From social media optimization to SEO
                strategies, empower your academic journey.
              </p>

            </article>

          </div>

        </section>

        {/* =====================================================
            LEARN FROM THE BEST
        ===================================================== */}
        <section className="dm-mentors-section">
          <div className="dm-mentors-container">
            <h2>
              Learn From <span>The Best</span>
            </h2>

            <div className="dm-mentors-grid">

              <article className="dm-mentor-card">
                <div className="dm-mentor-photo dm-mentor-purple">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85"
                    alt="Digital Marketing Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="dm-linkedin"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>


              <article className="dm-mentor-card">
                <div className="dm-mentor-photo dm-mentor-pink">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85"
                    alt="Digital Marketing Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="dm-linkedin"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>


              <article className="dm-mentor-card">
                <div className="dm-mentor-photo dm-mentor-dark">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                    alt="Digital Marketing Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="dm-linkedin"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>

            </div>
          </div>
        </section>


        {/* =====================================================
            JOURNEY CTA + FAQ
        ===================================================== */}
        <section className="dm-final-section">

          {/* CTA */}
          <div className="dm-journey-cta">
            <div className="dm-journey-content">
              <h2>
                Start Your Journey to Excellence Today!
              </h2>

              <p>
                Join our next Digital Marketing course and build real portfolio
                experience.
              </p>
            </div>
            <Link
              to="/contact"
              className="dm-journey-enroll"
            >
              Enroll now
            </Link>
          </div>


          {/* FAQ */}
          <div className="dm-faq-wrap">
            <h2>
              Frequently Asked Questions ?
            </h2>

            <div className="dm-faq-list">
              {dmFaqs.map((faq, index) => {
                const isOpen = openDmFaq === index;

                return (
                  <div
                    className={`dm-faq-item ${isOpen ? "active" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="dm-faq-question"
                      onClick={() =>
                        setOpenDmFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <span className="dm-faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="dm-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default DigitalMarketing;