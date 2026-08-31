import { useState } from "react";

import Navbar from "../components/Navbar";
import "./UIUXDesign.css";
import "../App.css";

/* =====================================================
   COMPANY LOGOS
===================================================== */

import tcs from "../assets/tcs.png";
import wipro from "../assets/wipro.png";
import cognizant from "../assets/cognizant.png";
import amazon from "../assets/amazon.png";
import microsoft from "../assets/microsoft.png";
import hcl from "../assets/hcl.png";
import zoho from "../assets/zoho.png";
import accenture from "../assets/accenture.png";
import flipkart from "../assets/flipkart.jpg";
import infosys from "../assets/infosys.png";
import samsung from "../assets/samsung.png";
import capgemini from "../assets/capgemini.png";


function UIUXDesign() {

  /* =====================================================
     STUDENT PROJECTS
  ===================================================== */

  const studentProjects = [
    {
      id: 1,
      title: "Glassmorphism UI Design",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 2,
      title: "Animation Landing Page",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 3,
      title: "Travel Agency App",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 4,
      title: "E-Commerce Website",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 5,
      title: "Finance Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 6,
      title: "Food Delivery App",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 7,
      title: "Mobile Banking App",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    },
  ];


  /* =====================================================
     PROJECT SLIDER STATE
  ===================================================== */

  const [projectIndex, setProjectIndex] = useState(0);

  const projectsPerView = 3;

  const maxProjectIndex = Math.max(
    studentProjects.length - projectsPerView,
    0
  );


  /* =====================================================
     NEXT PROJECT
  ===================================================== */

  const nextProjects = () => {
    setProjectIndex((currentIndex) => {
      if (currentIndex >= maxProjectIndex) {
        return 0;
      }

      return currentIndex + 1;
    });
  };


  /* =====================================================
     PREVIOUS PROJECT
  ===================================================== */

  const previousProjects = () => {
    setProjectIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return maxProjectIndex;
      }

      return currentIndex - 1;
    });
  };


  /* =====================================================
     PROJECTS CURRENTLY VISIBLE
  ===================================================== */

  const visibleProjects = studentProjects.slice(
    projectIndex,
    projectIndex + projectsPerView
  );

  const faqItems = [
  {
    question:
      "Can I enroll if I have no prior experience in UI/UX or Digital Marketing?",
    answer:
      "Yes. The course is designed for beginners as well as learners with some prior design or marketing experience.",
  },
  {
    question:
      "How are the courses structured, and what is the duration?",
    answer:
      "The UI/UX program follows a structured 12-week learning path with practical sessions, mentor guidance, projects, and portfolio development.",
  },
  {
    question:
      "Is there any support for job placement after course completion?",
    answer:
      "Yes. Students receive portfolio guidance, interview preparation, career support, and job-assistance support after completing the course.",
  },
];

const [openFaq, setOpenFaq] = useState(null);

const toggleFaq = (index) => {
  setOpenFaq((current) => (current === index ? null : index));
};


  return (
    <div className="uiux-page">

      <Navbar />


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="uiux-hero">

          <div className="uiux-course-badge">
            <span></span>

            UI UX DESIGN COURSE
          </div>


          <h1>
            Become a UI UX Designer

            <br />

            <span>
              in 12 weeks.
            </span>
          </h1>


          <p className="uiux-hero-description">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text
            used in laying out print, graphic or web designs.
          </p>


          {/* =====================================================
              TOOLS
          ===================================================== */}

          <div className="uiux-tools">

            <h3>
              TOOLS YOU WILL MASTER
            </h3>


            <div className="uiux-tools-list">

              <div className="uiux-tool">
                <span className="tool-dot figma-dot"></span>

                Figma
              </div>


              <div className="uiux-tool">
                <span className="tool-dot canva-dot"></span>

                Canva
              </div>


              <div className="uiux-tool">
                <span className="tool-dot balsamiq-dot"></span>

                Balsamiq
              </div>


              <div className="uiux-tool">
                <span className="tool-box ps-tool">
                  Ps
                </span>

                Photoshop
              </div>


              <div className="uiux-tool">
                <span className="tool-box ai-tool">
                  Ai
                </span>

                Illustrator
              </div>


              <div className="uiux-tool">
                <span className="tool-box miro-tool">
                  M
                </span>

                Miro
              </div>

            </div>
          </div>

        </section>



        {/* =====================================================
            JOURNEY PLAN
        ===================================================== */}

        <section className="uiux-journey-section">

          <div className="uiux-journey-heading">

            <div className="uiux-step-badge">
              STEP-BY-STEP CURRICULUM
            </div>


            <h2>
              The <span>Journey Plan</span>
            </h2>


            <p>
              A structured 12-week roadmap designed to take you from
              beginner to job-ready UI/UX designer.
            </p>

          </div>


          <div className="uiux-week-grid">

            {/* WEEK 01 */}

            <article className="uiux-week-card">

              <div className="week-label week-blue">
                WEEK 01
              </div>


              <h3>
                Design Foundations
              </h3>


              <p>
                Learn color theory, typography, spacing, visual hierarchy,
                and wireframing fundamentals.
              </p>

            </article>



            {/* WEEK 03 */}

            <article className="uiux-week-card">

              <div className="week-label week-pink">
                WEEK 03
              </div>


              <h3>
                UX Research & Persona
              </h3>


              <p>
                User research methods, creating user personas,
                journey mapping, and information architecture.
              </p>

            </article>



            {/* WEEK 06 */}

            <article className="uiux-week-card">

              <div className="week-label week-yellow">
                WEEK 06
              </div>


              <h3>
                Figma & Prototyping
              </h3>


              <p>
                Master Figma components, auto-layout,
                interactive prototyping, and design systems.
              </p>

            </article>



            {/* WEEK 09 */}

            <article className="uiux-week-card">

              <div className="week-label week-purple">
                WEEK 09
              </div>


              <h3>
                Real-World Capstone
              </h3>


              <p>
                Build a complete web & mobile design project following
                end-to-end industry standards.
              </p>

            </article>



            {/* WEEK 12 */}

            <article className="uiux-week-card uiux-week-featured">

              <div className="week-label week-final">
                WEEK 12
              </div>


              <h3>
                Portfolio & Career
              </h3>


              <p>
                Publish your Behance/Dribbble portfolio,
                practice mock interviews, and land job offers.
              </p>

            </article>

          </div>
        </section>



        {/* =====================================================
            CAREER POTENTIAL
        ===================================================== */}

        <section className="uiux-career-section">

          <div className="uiux-career-heading">

            <div className="uiux-career-badge">
              CAREER POTENTIAL
            </div>


            <h2>
              Unlocking <span>Opportunities</span>
            </h2>


            <p>
              Explore high-paying career paths waiting for
              certified UI/UX professionals.
            </p>

          </div>



          {/* =====================================================
              CAREER CARDS
          ===================================================== */}

          <div className="uiux-career-grid">

            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  UX Designer
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 6 - 12
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>



            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  UX Researcher
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 5 - 10
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>



            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  UX Architect
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 12 - 20
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>



            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  Product Designer
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 8 - 15
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>



            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  Product Manager
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 14 - 25
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>



            <article className="uiux-career-card">

              <div className="uiux-career-card-top">

                <h3>
                  UX Writer
                </h3>


                <div className="uiux-salary">
                  <span>
                    Avg Salary
                  </span>

                  <strong>
                    ₹ 4 - 9
                    <br />
                    LPA
                  </strong>
                </div>

              </div>


              <p>
                Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print.
              </p>

            </article>

          </div>



          {/* =====================================================
              REASONS TO CHOOSE US
          ===================================================== */}

          <div className="uiux-reasons">

            <h2>
              Reasons you should <span>Choose us</span>
            </h2>


            <div className="uiux-reasons-grid">

              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  🗂️
                </div>


                <p>
                  90 Days Continues Connect with
                  <br />
                  your mentors
                </p>

              </div>



              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  📥
                </div>


                <p>
                  Internship Opportunities
                  <br />
                  available
                </p>

              </div>



              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  🧑‍💼
                </div>


                <p>
                  Interview & Portfolio Lifetime
                  <br />
                  job assistance
                </p>

              </div>



              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  🗓️
                </div>


                <p>
                  Both Online & Classroom
                  <br />
                  Sessions
                </p>

              </div>



              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  🔤
                </div>


                <p>
                  UI UX Design Certification
                </p>

              </div>



              <div className="uiux-reason-card">

                <div className="uiux-reason-icon">
                  🧑‍💻
                </div>


                <p>
                  Live project work experience
                </p>

              </div>

            </div>
          </div>



          {/* =====================================================
              COURSE PRICING CTA
          ===================================================== */}

          <div className="uiux-invest-card">

            {/* LEFT */}

            <div className="uiux-invest-content">

              <div className="uiux-invest-badge">
                UI UX COURSE
              </div>


              <h2>
                Invest in Your{" "}

                <span>
                  Design
                  <br />
                  Career
                </span>
              </h2>


              <div className="uiux-invest-benefits">

                <div>
                  <span>
                    ✓
                  </span>

                  Live Interactive Classes
                </div>


                <div>
                  <span>
                    ✓
                  </span>

                  Real World Projects
                </div>


                <div>
                  <span>
                    ✓
                  </span>

                  Certificate of Completion
                </div>


                <div>
                  <span>
                    ✓
                  </span>

                  Portfolio Review
                </div>

              </div>
            </div>



            {/* RIGHT PRICE CARD */}

            <div className="uiux-price-card">

              <h3>
                UI/UX Design Course
              </h3>


              <div className="uiux-course-price">

                <small>
                  ₹
                </small>

                45,000

              </div>


              <div className="uiux-price-details">

                <p>
                  🔥 Single Payment: ₹ 35,000
                </p>


                <p>
                  💰 Save ₹ 10,000 Today
                </p>


                <p>
                  💳 EMI Available – 3 × ₹ 15,000
                </p>

              </div>


              <a
                href="#contact"
                className="uiux-enroll-btn"
              >
                Enroll now
              </a>

            </div>

          </div>

        </section>



        {/* =====================================================
            EXPERT GUIDANCE
        ===================================================== */}

        <section className="uiux-experts-section">

          <div className="uiux-experts-heading">

            <div className="uiux-experts-badge">
              EXPERT GUIDANCE
            </div>


            <h2>
              Mentored by <span>Industry Experts</span>
            </h2>

          </div>



          {/* =====================================================
              MENTORS
          ===================================================== */}

          <div className="uiux-mentor-grid">

            {/* MENTOR 1 */}

            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-one">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />

              </div>


              <h3>
                Name
              </h3>


              <p className="mentor-role mentor-role-purple">
                Job Role
              </p>


              <a
                href="#"
                className="uiux-linkedin"
                aria-label="Mentor LinkedIn profile"
              >
                in
              </a>

            </article>



            {/* MENTOR 2 */}

            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-two">

                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />

              </div>


              <h3>
                Name
              </h3>


              <p className="mentor-role mentor-role-pink">
                Job Role
              </p>


              <a
                href="#"
                className="uiux-linkedin"
                aria-label="Mentor LinkedIn profile"
              >
                in
              </a>

            </article>



            {/* MENTOR 3 */}

            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-three">

                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />

              </div>


              <h3>
                Name
              </h3>


              <p className="mentor-role">
                Job Role
              </p>


              <a
                href="#"
                className="uiux-linkedin"
                aria-label="Mentor LinkedIn profile"
              >
                in
              </a>

            </article>

          </div>



          {/* =====================================================
              DREAM JOB
          ===================================================== */}

          <div className="uiux-dream-job">

            <h2>
              Land Your <span>Dream Job</span>
            </h2>


            <p>
              Unlock exciting career opportunities with the world's
              leading companies.
            </p>



            {/* COMPANY LOGOS */}

            <div className="uiux-company-logos">

              <img
                src={tcs}
                alt="TCS"
              />

              <img
                src={wipro}
                alt="Wipro"
              />

              <img
                src={cognizant}
                alt="Cognizant"
              />

              <img
                src={amazon}
                alt="Amazon"
              />

              <img
                src={microsoft}
                alt="Microsoft"
              />

              <img
                src={hcl}
                alt="HCL"
              />

              <img
                src={zoho}
                alt="Zoho"
              />

              <img
                src={accenture}
                alt="Accenture"
              />

              <img
                src={flipkart}
                alt="Flipkart"
              />

              <img
                src={infosys}
                alt="Infosys"
              />

              <img
                src={samsung}
                alt="Samsung"
              />

              <img
                src={capgemini}
                alt="Capgemini"
              />

            </div>

          </div>

        </section>



        {/* =====================================================
            STUDENT OUTCOMES / DYNAMIC PORTFOLIO
        ===================================================== */}

        <section className="uiux-outcomes-section">

          <div className="uiux-outcomes-heading">

            <div className="uiux-outcomes-badge">
              PORTFOLIO BUILD HERE
            </div>


            <h2>
              Showcasing Our{" "}

              <span>
                Students
              </span>

              <br />

              <span>
                Outcomes
              </span>
            </h2>

          </div>



          {/* =====================================================
              PROJECT SLIDER
          ===================================================== */}

          <div className="uiux-outcomes-slider">

            {/* PREVIOUS BUTTON */}

            <button
              className="uiux-slider-arrow uiux-slider-arrow-left"
              type="button"
              onClick={previousProjects}
              aria-label="Previous student projects"
            >
              ←
            </button>



            {/* =====================================================
                DYNAMIC PROJECT CARDS
            ===================================================== */}

            <div className="uiux-outcomes-grid">

              {visibleProjects.map((project) => (

                <article
                  className="uiux-project-card"
                  key={project.id}
                >

                  <div className="uiux-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                  </div>


                  <h3>
                    {project.title}
                  </h3>

                </article>

              ))}

            </div>



            {/* NEXT BUTTON */}

            <button
              className="uiux-slider-arrow uiux-slider-arrow-right"
              type="button"
              onClick={nextProjects}
              aria-label="Next student projects"
            >
              →
            </button>

          </div>



          {/* =====================================================
              DYNAMIC SLIDER DOTS
          ===================================================== */}

          <div className="uiux-slider-dots">

            {Array.from({
              length: maxProjectIndex + 1,
            }).map((_, index) => (

              <button
                key={index}
                type="button"
                className={
                  projectIndex === index
                    ? "active"
                    : ""
                }
                onClick={() => setProjectIndex(index)}
                aria-label={`Show student projects ${index + 1}`}
              />

            ))}

          </div>

        </section>

        {/* =====================================================
    FAQ
===================================================== */}
<section className="uiux-faq-section">

  <div className="uiux-faq-heading">
    <div className="uiux-faq-badge">
      EXPERT GUIDANCE
    </div>

    <h2>
      Frequently Asked Questions ?
    </h2>
  </div>


  <div className="uiux-faq-list">

    {faqItems.map((item, index) => (
      <div
        className={`uiux-faq-item ${
          openFaq === index ? "active" : ""
        }`}
        key={item.question}
      >

        <button
          className="uiux-faq-question"
          type="button"
          onClick={() => toggleFaq(index)}
          aria-expanded={openFaq === index}
        >
          <span>
            {item.question}
          </span>

          <span className="uiux-faq-icon">
            {openFaq === index ? "−" : "+"}
          </span>
        </button>


        <div className="uiux-faq-answer">
          <p>
            {item.answer}
          </p>
        </div>

      </div>
    ))}

  </div>

</section>


{/* =====================================================
    FOOTER
===================================================== */}
<footer className="uiux-footer">

  <div className="uiux-footer-inner">

    {/* LEFT */}
    <div className="uiux-footer-brand">

      <div className="uiux-footer-logo">
        <div className="uiux-footer-logo-mark">
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


      <div className="uiux-footer-address">
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

    </div>


    {/* EXPLORE */}
    <div className="uiux-footer-column">
      <h3>
        EXPLORE
      </h3>

      <a href="/">
        Home
      </a>

      <a href="#success">
        Success story
      </a>

      <a href="#blog">
        Blog
      </a>

      <a href="/about">
        About us
      </a>

      <a href="#contact">
        Contact us
      </a>
    </div>


    {/* COURSES */}
    <div className="uiux-footer-column">
      <h3>
        OUR COURSES
      </h3>

      <a href="/courses/ui-ux-design">
        UI / UX Designer
      </a>

      <a href="#digital-marketing">
        Digital marketing
      </a>

      <a href="#web-development">
        Web Development
      </a>
    </div>


    {/* INFORMATION */}
    <div className="uiux-footer-column uiux-footer-info">
      <a
        href="#contact"
        className="uiux-footer-enroll"
      >
        Enroll Today
      </a>

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


  <div className="uiux-footer-bottom">
    © 2024 De Mentee Academy. All Rights Reserved
  </div>

</footer>

      </main>

    </div>
  );
}

export default UIUXDesign;