import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import "./UIUXDesign.css";

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
     UX CURRICULUM
  ===================================================== */

  const uxCurriculum = [
    {
      id: 1,
      title: "UX",
      description: "",
      type: "ux-green",
    },

    {
      id: 2,
      title: "UX beginner\nSession\n1 week",
      description: "",
      type: "ux-yellow",
    },

    {
      id: 3,
      title: "Product Thinking\nand\nProduct Designing",
      description: "",
      type: "ux-yellow",
    },

    {
      id: 4,
      title: "Problem Solving\nTechniques\n3 Types",
      description: "",
      type: "ux-yellow",
    },

    {
      id: 5,
      title: "Design Thinking\nProcess\nIndustry",
      description: "",
      type: "ux-pink",
    },

    {
      id: 6,
      title: "Research\nDiscovery\nAnalysis",
      description: "",
      type: "ux-pink",
    },

    {
      id: 7,
      title: "Define\nProblem\nstatement",
      description: "",
      type: "ux-pink",
    },

    {
      id: 8,
      title: "Ideate\nIdea Generation\nGroup Activity",
      description: "",
      type: "ux-pink",
    },

    {
      id: 9,
      title: "UX Laws\nRules Visual\nDesign",
      description: "",
      type: "ux-green",
    },

    {
      id: 10,
      title: "Heuristic\nEvolution\n-----------\nMethod",
      description: "",
      type: "ux-green",
    },
  ];


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


  /* =====================================================
     FAQ
  ===================================================== */

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
    setOpenFaq((current) =>
      current === index ? null : index
    );
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


          {/* =====================================================
              UX CURRICULUM - 10 CARDS
              5 TOP + 5 BOTTOM
          ===================================================== */}

          <div className="uiux-curriculum-grid">

            {uxCurriculum.map((item) => (
              <article
                className={`uiux-curriculum-card ${item.type}`}
                key={item.id}
              >

                <h3>
                  {item.title.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index <
                        item.title.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </h3>


                {item.id !== 1 && (
                  <div className="uiux-curriculum-author">
                    Auro lakshmanan
                  </div>
                )}

              </article>
            ))}

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
                <h3>UX Designer</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 6 - 12
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                  Design intuitive and user-friendly digital experiences by
                  understanding user needs, creating wireframes, and improving
                  product usability.
              </p>
            </article>


            <article className="uiux-career-card">
              <div className="uiux-career-card-top">
                <h3>UX Researcher</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 5 - 10
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                 Study user behavior and needs through interviews, surveys,
                 and usability testing to help teams build better digital products.
              </p>
            </article>


            <article className="uiux-career-card">
              <div className="uiux-career-card-top">
                <h3>UX Architect</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 12 - 20
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                 Plan the structure and user flow of digital products,
                 organizing information and interactions to create clear and
                 effective user experiences.
              </p>
            </article>


            <article className="uiux-career-card">
              <div className="uiux-career-card-top">
                <h3>Product Designer</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 8 - 15
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                 Combine UX research, visual design, and problem-solving to
                 design complete digital products that meet both user and
                 business needs.
              </p>
            </article>


            <article className="uiux-career-card">
              <div className="uiux-career-card-top">
                <h3>Product Manager</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 14 - 25
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                Define product goals, coordinate teams, and guide the product
                from idea to launch while balancing customer needs and business
                objectives.
              </p>
            </article>


            <article className="uiux-career-card">
              <div className="uiux-career-card-top">
                <h3>UX Writer</h3>

                <div className="uiux-salary">
                  <span>Avg Salary</span>

                  <strong>
                    ₹ 4 - 9
                    <br />
                    LPA
                  </strong>
                </div>
              </div>

              <p>
                 Create clear and helpful content for digital products, including
                 buttons, messages, instructions, and interface text that guide
                 users through their experience..
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
                <div className="uiux-reason-icon">🗂️</div>

                <p>
                  90 Days Continues Connect with
                  <br />
                  your mentors
                </p>
              </div>


              <div className="uiux-reason-card">
                <div className="uiux-reason-icon">📥</div>

                <p>
                  Internship Opportunities
                  <br />
                  available
                </p>
              </div>


              <div className="uiux-reason-card">
                <div className="uiux-reason-icon">🧑‍💼</div>

                <p>
                  Interview & Portfolio Lifetime
                  <br />
                  job assistance
                </p>
              </div>


              <div className="uiux-reason-card">
                <div className="uiux-reason-icon">🗓️</div>

                <p>
                  Both Online & Classroom
                  <br />
                  Sessions
                </p>
              </div>


              <div className="uiux-reason-card">
                <div className="uiux-reason-icon">🔤</div>

                <p>
                  UI UX Design Certification
                </p>
              </div>


              <div className="uiux-reason-card">
                <div className="uiux-reason-icon">🧑‍💻</div>

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
                  <span>✓</span>
                  Live Interactive Classes
                </div>

                <div>
                  <span>✓</span>
                  Real World Projects
                </div>

                <div>
                  <span>✓</span>
                  Certificate of Completion
                </div>

                <div>
                  <span>✓</span>
                  Portfolio Review
                </div>

              </div>

            </div>


            <div className="uiux-price-card">

              <h3>
                UI/UX Design Course
              </h3>


              <div className="uiux-course-price">
                <small>₹</small>
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


          {/* MENTORS */}

          <div className="uiux-mentor-grid">

            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-one">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />
              </div>

              <h3>Name</h3>

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


            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-two">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />
              </div>

              <h3>Name</h3>

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


            <article className="uiux-mentor-card">

              <div className="uiux-mentor-image mentor-three">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
                  alt="UI UX Mentor"
                />
              </div>

              <h3>Name</h3>

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


          {/* DREAM JOB */}

          <div className="uiux-dream-job">

            <h2>
              Land Your <span>Dream Job</span>
            </h2>

            <p>
              Unlock exciting career opportunities with the world's
              leading companies.
            </p>


            <div className="uiux-company-logos">

              <img src={tcs} alt="TCS" />
              <img src={wipro} alt="Wipro" />
              <img src={cognizant} alt="Cognizant" />
              <img src={amazon} alt="Amazon" />
              <img src={microsoft} alt="Microsoft" />
              <img src={hcl} alt="HCL" />

              <img src={zoho} alt="Zoho" />
              <img src={accenture} alt="Accenture" />
              <img src={flipkart} alt="Flipkart" />
              <img src={infosys} alt="Infosys" />
              <img src={samsung} alt="Samsung" />
              <img src={capgemini} alt="Capgemini" />

            </div>

          </div>

        </section>


        {/* =====================================================
            STUDENT OUTCOMES
        ===================================================== */}

        <section className="uiux-outcomes-section">

          <div className="uiux-outcomes-heading">

            <div className="uiux-outcomes-badge">
              PORTFOLIO BUILD HERE
            </div>

            <h2>
              Showcasing Our{" "}
              <span>Students</span>
              <br />
              <span>Outcomes</span>
            </h2>

          </div>


          {/* PROJECT SLIDER */}

          <div className="uiux-outcomes-slider">

            <button
              className="uiux-slider-arrow uiux-slider-arrow-left"
              type="button"
              onClick={previousProjects}
              aria-label="Previous student projects"
            >
              ←
            </button>


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


            <button
              className="uiux-slider-arrow uiux-slider-arrow-right"
              type="button"
              onClick={nextProjects}
              aria-label="Next student projects"
            >
              →
            </button>

          </div>


          {/* DYNAMIC SLIDER DOTS */}

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

      </main>


      <Footer />

    </div>
  );
}


export default UIUXDesign;
