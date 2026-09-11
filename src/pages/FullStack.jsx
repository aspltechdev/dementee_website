import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Play, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import "./FullStack.css";

function FullStack() {
  const [openFaq, setOpenFaq] = useState(null);

  const technologies = [
    {
      title: "React.js",
      description: "Build modern, interactive user interfaces.",
    },
    {
      title: "Node.js",
      description: "Create scalable server-side applications.",
    },
    {
      title: "Express.js",
      description: "Build fast and flexible backend APIs.",
    },
    {
      title: "MongoDB",
      description: "Work with flexible NoSQL databases.",
    },
    {
      title: "Javascript",
      description:
        "Master the language behind modern web applications.",
    },
    {
      title: "Tailwind CSS",
      description:
        "Design responsive and modern interfaces.",
    },
  ];

  const curriculum = [
    {
      number: "01",
      module: "MODULE 01",
      title: "Frontend Development",
      description:
        "Master HTML, CSS, JavaScript, React.js and modern frontend development practices.",
    },
    {
      number: "02",
      module: "MODULE 02",
      title: "Backend Development",
      description:
        "Build scalable APIs using Node.js, Express.js and learn how modern backend systems work.",
    },
    {
      number: "03",
      module: "MODULE 03",
      title: "Database & Deployment",
      description:
        "Work with MongoDB, authentication, APIs and deployment workflows used in real projects.",
    },
  ];

  const projects = [
    "E-Commerce Platform",
    "Admin Dashboard",
    "Netflix Clone",
    "Real-Time Chat App",
  ];

  const careers = [
    {
      title: "Full Stack Developer",
      description:
        "Build complete web applications across frontend and backend systems.",
    },
    {
      title: "Frontend Developer",
      description:
        "Create modern, responsive and interactive user experiences.",
    },
    {
      title: "Backend Developer",
      description:
        "Develop APIs, databases and scalable server-side applications.",
    },
    {
      title: "Software Engineer",
      description:
        "Design, develop and maintain production-ready software solutions.",
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
      question: "Do I need prior coding experience?",
      answer:
        "No. The course is structured to take learners from the fundamentals through advanced full stack development.",
    },
    {
      question: "What technologies will I learn?",
      answer:
        "You will work with HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB and Tailwind CSS.",
    },
    {
      question: "Will I build real-world projects?",
      answer:
        "Yes. The curriculum includes practical projects designed around real-world applications and business requirements.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes. You will receive a certificate of completion after successfully completing the course.",
    },
    {
      question: "Is EMI available?",
      answer:
        "Yes. EMI is available as 3 monthly payments of ₹15,000.",
    },
  ];

  return (
    <div className="full-stack-page">

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="fs-hero">
        <div className="fs-hero-content">

          <div className="fs-pill">
            <span></span>
            FULL STACK DEVELOPMENT COURSE
          </div>

          <h1>
            Code. Create. <span>Launch.</span>
          </h1>

          <p>
            Master modern web development from frontend to backend
            and build real-world applications that are ready for
            production.
          </p>

          <div className="fs-hero-buttons">

            <a
              href="#pricing"
              className="fs-primary-btn"
            >
              Enroll Now
            </a>

            <a
              href="#curriculum"
              className="fs-secondary-btn"
            >
              View Curriculum
            </a>

          </div>

        </div>
      </section>


      {/* =========================================
          TECHNOLOGIES
      ========================================= */}

      <section className="fs-technologies">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label">
              TECHNOLOGIES INCLUDED
            </div>

            <h2>
              Master the{" "}
              <span>Modern Web Stack</span>
            </h2>

          </div>


          <div className="fs-tech-grid">

            {technologies.map((technology) => (

              <article
                className="fs-tech-card"
                key={technology.title}
              >

                <div className="fs-tech-icon">
                  {technology.title.charAt(0)}
                </div>

                <h3>
                  {technology.title}
                </h3>

                <p>
                  {technology.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CURRICULUM
      ========================================= */}

      <section
        className="fs-curriculum"
        id="curriculum"
      >

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label fs-blue-label">
              CURRICULUM ROAD MAP
            </div>

            <h2>
              Structured Learning From Concept To{" "}
              <span>Code.</span>
            </h2>

            <p>
              A structured curriculum designed to take you from
              the fundamentals of web development to building and
              deploying production-ready applications.
            </p>

          </div>


          <div className="fs-curriculum-grid">

            {curriculum.map((item) => (

              <article
                className="fs-curriculum-card"
                key={item.number}
              >

                <div className="fs-module-number">
                  {item.number}
                </div>

                <div className="fs-module-label">
                  {item.module}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          PROJECTS
      ========================================= */}

      <section className="fs-projects">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label">
              REAL WORLD APPLICATION
            </div>

            <h2>
              Projects You'll{" "}
              <span>Build</span>
            </h2>

            <p>
              Learn by building practical applications inspired
              by real-world products and business requirements.
            </p>

          </div>


          <div className="fs-project-grid">

            {projects.map((project, index) => (

              <article
                className="fs-project-card"
                key={project}
              >

                <div className="fs-project-number">
                  0{index + 1}
                </div>

                <h3>
                  {project}
                </h3>

                <p>
                  Build a practical application while applying
                  the concepts learned throughout the course.
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CAREER OPPORTUNITIES
      ========================================= */}

      <section className="fs-careers">

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label fs-orange-label">
              CAREER OPPORTUNITIES
            </div>

            <h2>
              Where Can These Skills{" "}
              <span>Take You?</span>
            </h2>

            <p>
              Build the skills needed to step into some of the
              most in-demand roles in the technology industry.
            </p>

          </div>


          <div className="fs-career-grid">

            {careers.map((career) => (

              <article
                className="fs-career-card"
                key={career.title}
              >

                <div className="fs-career-icon">
                  ✦
                </div>

                <h3>
                  {career.title}
                </h3>

                <p>
                  {career.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          SUCCESS STORIES
      ========================================= */}

      <section
        className="fs-success"
        id="success"
      >

        <div className="fs-container">

          <div className="fs-section-heading">

            <div className="fs-label">
              SUCCESS STORIES
            </div>

            <h2>
              Built By{" "}
              <span>Learners.</span>
            </h2>

            <p>
              Hear from learners who developed practical skills
              and built projects that helped them move forward
              in their careers.
            </p>

          </div>


          <div className="fs-testimonial-grid">

            {testimonials.map(
              (testimonial, index) => (

                <article
                  className="fs-testimonial-card"
                  key={index}
                >

                  <div className="fs-testimonial-image">

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                    />

                    <div className="fs-testimonial-play">
                      <Play
                        size={18}
                        fill="currentColor"
                      />
                    </div>

                  </div>

                  <div className="fs-testimonial-info">

                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.company}
                    </span>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================
          PRICING
      ========================================= */}

      <section
        className="fs-pricing"
        id="pricing"
      >

        <div className="fs-pricing-container">

          <div className="fs-pricing-content">

            <div className="fs-label">
              FULL STACK COURSE
            </div>

            <h2>
              Learn Full Stack Development,
              <br />
              <span>Build Your Future.</span>
            </h2>

            <p className="fs-pricing-description">
              Everything you need to become a production-ready
              full stack developer.
            </p>


            <div className="fs-features">

              <div>
                <Check size={18} />
                Live Interactive Classes
              </div>

              <div>
                <Check size={18} />
                Certificate of Completion
              </div>

              <div>
                <Check size={18} />
                Real World Projects
              </div>

              <div>
                <Check size={18} />
                Portfolio Review
              </div>

            </div>

          </div>


          <div className="fs-price-card">

            <div className="fs-old-price">
              ₹45,000
            </div>

            <div className="fs-current-price">
              ₹35,000
            </div>

            <div className="fs-payment-highlight">
              🔥 Single Payment: ₹35,000
            </div>

            <div className="fs-saving">
              💰 Save ₹10,000 Today
            </div>

            <div className="fs-emi">
              💳 EMI Available – 3 x ₹15,000
            </div>

            <a
              href="#enquiry"
              className="fs-enroll-btn"
            >
              Enroll now
            </a>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section
        className="fs-vision"
        id="enquiry"
      >

        <div className="fs-vision-container">

          <div>

            <div className="fs-vision-label">
              OUR VISION
            </div>

            <h2>
              Your Future Starts
              <br />
              With One Decision.
            </h2>

          </div>

          <a
            href="#pricing"
            className="fs-vision-button"
          >
            ENQUIRY NOW
          </a>

        </div>

      </section>


      {/* =========================================
          FAQ
      ========================================= */}

      <section className="fs-faq">

        <div className="fs-container">

          <div className="fs-section-heading">

            <h2>
              Common{" "}
              <span>Questions?</span>
            </h2>

          </div>


          <div className="fs-faq-list">

            {faqs.map((faq, index) => {

              const isOpen =
                openFaq === index;

              return (

                <div
                  className={`fs-faq-item ${
                    isOpen
                      ? "fs-faq-open"
                      : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    className="fs-faq-question"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="fs-faq-icon">

                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}

                    </span>

                  </button>


                  {isOpen && (

                    <div className="fs-faq-answer">

                      <p>
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="fs-footer">

        <div className="fs-container">

          <div className="fs-footer-top">

            {/* BRAND */}

            <div className="fs-footer-brand">

              <div className="fs-footer-logo">

                <div className="fs-footer-logo-mark">
                  ✦
                </div>

                <div>

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

            <div className="fs-footer-column">

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

            <div className="fs-footer-column">

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

              <Link to="/courses/career-gap">
                Career Gap Opportunity
              </Link>

            </div>


            {/* INFORMATION */}

            <div className="fs-footer-column">

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


            {/* ENROLL */}

            <a
              href="#pricing"
              className="fs-footer-enroll"
            >
              Enroll Today
            </a>

          </div>


          <div className="fs-footer-divider"></div>


          <div className="fs-footer-bottom">
            © 2024 De Mentee Academy.
            All Rights Reserved
          </div>

        </div>

      </footer>

    </div>
  );
}

export default FullStack;