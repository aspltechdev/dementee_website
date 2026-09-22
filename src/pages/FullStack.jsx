import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./FullStack.css";
import footerlogo from "../assets/footerlogo.png";
import Footer from "./Footer";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import journey from "../assets/journey.jpg";

import reactimage from "../assets/reactimage.png";
import nodeimage from "../assets/nodeimage.png";
import expressimage from "../assets/expressimage.png";
import mongoimage from "../assets/mongoimage.png";
import javascriptimage from "../assets/javascriptimage.png";
import tailwindimage from "../assets/tailwingimage.png";

const FullStack = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Do I need prior coding experience to join this course?",
    "Will I get assistance with job placement and interviews?",
    "What if I miss a live class?",
  ];

  return (
    <div className="full-stack-page">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="fs-hero">
        <div className="fs-hero-container">

          <div className="fs-course-badge">
            <span></span>
            FULL STACK DEVELOPMENT COURSE
          </div>

          <h1>
            Code. Create. <span>Launch.</span>
          </h1>

          <p>
            Learn the complete web development stack from frontend to backend
            and gain the practical skills needed to build modern, scalable web
            applications.
          </p>


          {/* TECHNOLOGIES */}

          <div className="fs-technologies-card">

            <div className="fs-tech-heading">
              <span>TECHNOLOGIES INCLUDED</span>

              <h2>Master the Modern Web Stack</h2>
            </div>

            <div className="fs-tech-divider"></div>
<div className="fs-tech-grid">

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={reactimage} alt="React.js" />
    </div>
    <strong>React.js</strong>
  </div>

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={nodeimage} alt="Node.js" />
    </div>
    <strong>Node.js</strong>
  </div>

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={expressimage} alt="Express.js" />
    </div>
    <strong>Express.js</strong>
  </div>

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={mongoimage} alt="MongoDB" />
    </div>
    <strong>MongoDB</strong>
  </div>

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={javascriptimage} alt="Javascript" />
    </div>
    <strong>Javascript</strong>
  </div>

  <div className="fs-tech-card">
    <div className="fs-tech-icon">
      <img src={tailwindimage} alt="Tailwind CSS" />
    </div>
    <strong>Tailwind CSS</strong>
  </div>

</div>
          </div>

        </div>
      </section>


      {/* =====================================================
          CURRICULUM ROAD MAP
      ===================================================== */}

      <section className="fs-curriculum">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label purple-label">
              CURRICULUM ROAD MAP
            </div>

            <h2>
              Structured Learning
              <span>From Concept To Code.</span>
            </h2>

          </div>


          <div className="fs-curriculum-grid">

            {/* MODULE 1 */}

            <article className="fs-curriculum-card">

              <div className="fs-module-label">
                MODULE 1
              </div>

              <h3>
                Frontend foundation
                <br />
                &amp; Modern Js
              </h3>

              <div className="fs-card-divider"></div>

              <p>
                Master HTML5, CSS3, Flexbox/Grid, Responsive Web Design, ES6
                JavaScript, DOM Manipulation, and Tailwind CSS.
              </p>

            </article>


            {/* MODULE 2 */}

            <article className="fs-curriculum-card">

              <div className="fs-module-label">
                MODULE 2
              </div>

              <h3>
                React js &amp; Next js
                <br />
                Ecosystem
              </h3>

              <div className="fs-card-divider"></div>

              <p>
                Deep dive into React components, State management, React Hooks,
                Next.js App Router, SSR, and API integration.
              </p>

            </article>


            {/* MODULE 3 */}

            <article className="fs-curriculum-card">

              <div className="fs-module-label">
                MODULE 3
              </div>

              <h3>
                Backend Development
                <br />
                &amp; Databases
              </h3>

              <div className="fs-card-divider"></div>

              <p>
                Build RESTful APIs with Node.js &amp; Express. Learn MongoDB
                schemas, JWT authentication, and security best practices.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

<section className="fs-projects">

  <div className="fs-container">

    <div className="fs-project-heading">

      <div className="fs-label red-label">
        REAL WORLD APPLICATION
      </div>

      <h2>
        Projects You'll <span>Build</span>
      </h2>

      <p>
        Build high-impact web apps featuring dynamic UI previews to build
        a job-ready portfolio.
      </p>

    </div>


    <div className="fs-project-grid">

      {/* ================= PROJECT 1 ================= */}

      <article className="fs-project-card fs-project-large">

        <h3>
          E-Commerce Website
        </h3>

        <div className="fs-project-image">

          <img
            src={project1}
            alt="E-Commerce Website"
          />

        </div>

      </article>


      {/* ================= PROJECT 2 ================= */}

      <article className="fs-project-card">

        <h3>
          Admin Dashboard
        </h3>

        <div className="fs-project-image">

          <img
            src={project2}
            alt="Admin Dashboard"
          />

        </div>

      </article>


      {/* ================= PROJECT 3 ================= */}

      <article className="fs-project-card">

        <h3>
          Netflix Clone
        </h3>

        <div className="fs-project-image">

          <img
            src={project3}
            alt="Netflix Clone"
          />

        </div>

      </article>


      {/* ================= PROJECT 4 ================= */}

      <article className="fs-project-card">

        <h3>
          Real Time Chat App
        </h3>

        <div className="fs-project-image">

          <img
            src={project4}
            alt="Real Time Chat App"
          />

        </div>

      </article>

    </div>

  </div>

</section>

      {/* =====================================================
          CAREER PATHWAYS
      ===================================================== */}

      <section className="fs-careers">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label purple-label">
              CAREER PATHWAYS
            </div>

            <h2>
              Roles You Can <span>Target</span>
            </h2>

            <p>
              Prepare for high-demand tech positions across top tech startups
              and MNCs.
            </p>

          </div>


          <div className="fs-career-grid">

            {/* CARD 1 */}

            <article className="fs-career-card">

              <div className="fs-career-icon">
                💻
              </div>

              <h3>Full Stack Engineer</h3>

              <p>
                Build end-to-end web applications, handling both client UI and
                server logic.
              </p>

              <span>
                Avg Salary: ₹8L - ₹18L/yr
              </span>

            </article>


            {/* CARD 2 */}

            <article className="fs-career-card">

              <div className="fs-career-icon">
                ⚛️
              </div>

              <h3>Frontend Developer</h3>

              <p>
                Specialize in crafting high-performance, pixel-perfect user
                interfaces in React &amp; Next.js.
              </p>

              <span>
                Avg Salary: ₹6L - ₹14L/yr
              </span>

            </article>


            {/* CARD 3 */}

            <article className="fs-career-card">

              <div className="fs-career-icon">
                ⚙️
              </div>

              <h3>Backend Developer</h3>

              <p>
                Architect scalable APIs, manage MongoDB databases, and handle
                microservices architecture.
              </p>

              <span>
                Avg Salary: ₹7L - ₹16L/yr
              </span>

            </article>


            {/* CARD 4 */}

            <article className="fs-career-card">

              <div className="fs-career-icon">
                🚀
              </div>

              <h3>Technical Founder</h3>

              <p>
                Turn your digital product ideas into real, scalable SaaS
                products independently.
              </p>

              <span>
                Unlimited Potential
              </span>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}

      <section className="fs-success">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label red-label">
              SUCCESS STORIES
            </div>

            <h2>
              What Our <span>Students Say</span>
            </h2>

            <p>
              Hear directly from graduates who transformed their coding journey.
            </p>

          </div>


          <div className="fs-testimonial-grid">

            {/* TESTIMONIAL 1 */}

            <article className="fs-testimonial-card">

              <div className="fs-stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="fs-testimonial-quote">
                “ Lorem ipsum, or lipsum as it is sometimes known, is dummy
                text used in laying out print, graphic or web designs.”
              </p>

              <div className="fs-testimonial-divider"></div>

              <div className="fs-testimonial-user">

                <div className="fs-user-avatar">
                  R
                </div>

                <div>
                  <strong>Name</strong>
                  <span>Company</span>
                </div>

              </div>

            </article>


            {/* TESTIMONIAL 2 */}

            <article className="fs-testimonial-card">

              <div className="fs-stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="fs-testimonial-quote">
                “ Lorem ipsum, or lipsum as it is sometimes known, is dummy
                text used in laying out print, graphic or web designs.”
              </p>

              <div className="fs-testimonial-divider"></div>

              <div className="fs-testimonial-user">

                <div className="fs-user-avatar">
                  R
                </div>

                <div>
                  <strong>Name</strong>
                  <span>Company</span>
                </div>

              </div>

            </article>


            {/* TESTIMONIAL 3 */}

            <article className="fs-testimonial-card">

              <div className="fs-stars">
                ★ ★ ★ ★ ★
              </div>

              <p className="fs-testimonial-quote">
                “ Lorem ipsum, or lipsum as it is sometimes known, is dummy
                text used in laying out print, graphic or web designs.”
              </p>

              <div className="fs-testimonial-divider"></div>

              <div className="fs-testimonial-user">

                <div className="fs-user-avatar">
                  R
                </div>

                <div>
                  <strong>Name</strong>
                  <span>Company</span>
                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRICING / ENROLL
      ===================================================== */}

      <section className="fs-pricing-section">

        <div className="fs-pricing-container">

          <div className="fs-pricing-left">

            <div className="fs-pricing-badge">
              FULL STACK COURSE
            </div>

            <h2>
              Learn Full Stack
              <br />
              Development,
              <br />
              <span>Build Your Future.</span>
            </h2>


            <div className="fs-features">

              <div>
                <span>✓</span>
                Live Interactive Classes
              </div>

              <div>
                <span>✓</span>
                Certificate of Completion
              </div>

              <div>
                <span>✓</span>
                Real World Projects
              </div>

              <div>
                <span>✓</span>
                Portfolio Review
              </div>

            </div>

          </div>


          <div className="fs-price-card">

            <h3>
              Full Stack Development Course
            </h3>

            <div className="fs-price">
              ₹45,000
            </div>

            <ul>

              <li>
                🔥 Single Payment: ₹35,000
              </li>

              <li>
                💰 Save ₹10,000 Today
              </li>

              <li>
                💳 EMI Available – 3 x ₹15,000
              </li>

            </ul>

             <Link
  to="/contact"
  className="uiux-enroll-btn"
>
  Enroll now
</Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION CTA
      ===================================================== */}

      <section className="fs-vision">

        <div className="fs-vision-container">

          <div className="fs-vision-content">

            <h2>
              Ready to Build the Future with Code?
            </h2>

            <p>
              Join our Full Stack Development program and develop the skills,
              projects, and confidence needed to become a professional software
              developer.
            </p>

            <button>
              ENROLL NOW
            </button>

          </div>


          <div className="fs-vision-image">

            <img
              src={journey}
              alt="Full Stack Development"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="fs-faq">

        <div className="fs-faq-container">

          <h2>
            Frequently Asked Questions ?
          </h2>


          <div className="fs-faq-list">

            {faqs.map((question, index) => (

              <div
                className={`fs-faq-item ${
                  openFaq === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                >

                  <span>
                    {question}
                  </span>

                  {openFaq === index ? (
                    <Minus size={14} />
                  ) : (
                    <Plus size={14} />
                  )}

                </button>


                {openFaq === index && (
                  <div className="fs-faq-answer">
                    Yes. Our Full Stack Development course is designed to
                    provide practical learning, live classes, projects and
                    guidance throughout the program.
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

<Footer />
    </div>
  );
};

export default FullStack;