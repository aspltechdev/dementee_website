import { useState } from "react";
import Navbar from "../../components/Navbar";
import Course from "./Course";
import Gallery from "./Gallery";
import { Play, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../Footer";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question:
        "Can I enroll if I have no prior experience in UI/UX or Digital Marketing?",
      answer:
        "Yes. The courses are designed to start from the fundamentals and gradually move into practical, industry-focused projects.",
    },
    {
      question:
        "How are the courses structured, and what is the duration?",
      answer:
        "Each course combines guided learning, practical assignments, mentorship, and project work. Duration depends on the selected program.",
    },
    {
      question:
        "Is there any support for job placement after course completion?",
      answer:
        "Yes. Learners receive placement support including resume guidance, interview preparation, job referrals, and hiring-drive assistance.",
    },
  ];

  return (
    <div className="site">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="company-tag">
              <span></span>
              DE MENTEE TECHNOLOGIES
            </div>

            <h1>
              Creating Digital
              <br />
              Experiences
              <br />
              That <span>Drive</span>
              <br />
              <span>Growth.</span>
            </h1>

            <p className="hero-description">
              We design high-impact learning experiences for individual
              ambitious learners and deliver custom workforce training
              programs for growing businesses.
            </p>

            <div className="hero-actions">
              <a href="#courses" className="explore-btn">
                EXPLORE ALL COURSES
              </a>

              <Link to="/contact" className="enroll-btn">
  ENROLL NOW
</Link>
            </div>

            <div className="students">
              <div className="student-icons">
                <span>👩🏻</span>
                <span>👨🏻</span>
                <span>👩🏽</span>
                <span>👨🏽</span>
              </div>

              <strong>500+ Students already learning with us</strong>
            </div>
          </div>

          <div className="hero-visual">
            <div className="training-card">
              <div className="training-content">
                <div className="live-badge">
                  🚀 LIVE PROJECT TRAINING
                </div>

                <div>
                  <h2>
                    Interactive Mentorship & Practical skills
                  </h2>

                  <p>
                    Build Portfolio Ready Projects guided by senior
                    leaders in tech and product design.
                  </p>
                </div>
              </div>
            </div>

            <div className="mini-cards">
              <div className="career-card">
                <div className="card-label">⚡ CAREER GROWTH</div>

                <h3>
                  95<span>%</span>
                </h3>

                <p>Graduates achieved their desired outcomes.</p>
              </div>

              <div className="placement-card">
                <div className="card-label">💼 JOB READY</div>

                <h3>Placement Assistance</h3>

                <p>
                  Develop in-demand skills that leading companies seek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stats-bar">
            <div className="stat-item">
              <h3 className="yellow">50+</h3>
              <p>INDUSTRY MENTORS</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h3 className="pink">500+</h3>
              <p>CERTIFIED STUDENTS</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h3>100,000 +</h3>
              <p>HOURS OF LIVE CLASS</p>
            </div>
          </div>
        </section>

        {/* SPECIALIZATIONS */}
        <section className="specializations" id="courses">
          <div className="section-badge">OUR SPECIALIZATIONS</div>

          <h2>
            What <span>We Do</span>
          </h2>

          <p className="section-subtitle">
            Everything you need to master modern industry skills from
            scratch.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🧑‍💼</div>

              <h3>Branding</h3>

              <p>
                Build a memorable brand identity with compelling visuals,
                clear messaging, and a consistent presence across every
                platform.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">✋</div>

              <h3>Design Strategy</h3>

              <p>
                Create user-focused design strategies that align business
                goals with seamless experiences and measurable results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📺</div>

              <h3>Digital Marketing</h3>

              <p>
                Drive growth through SEO, social media, paid campaigns,
                and data-driven marketing strategies that deliver results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🖥️</div>

              <h3>Web development</h3>

              <p>
                Develop fast, responsive, and scalable websites using
                modern technologies for exceptional performance and user
                experience.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📝</div>

              <h3>UI / UX Design</h3>

              <p>
                Design intuitive, engaging, and visually appealing
                digital experiences that users love to interact with.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>

              <h3>AI Training</h3>

              <p>
                Master practical AI tools, automation, and prompt
                engineering to enhance productivity and solve real-world
                challenges.
              </p>
            </div>
          </div>
        </section>

        <Course />

        {/* ================= LEARNING FRAMEWORK ================= */}
        <section className="framework-section">
          <div className="framework-container">
            <div className="framework-heading">
              <h2>
                Everything You Need To <span>Succeed</span>
              </h2>

              <p>
                A structured, agency-grade learning framework designed
                to take you from foundational concepts to enterprise-ready
                execution.
              </p>
            </div>

            <div className="framework-grid">
              <div className="framework-card learn-card">
                <div className="framework-number yellow-number">
                  01
                </div>

                <h3>Learn Real Skills</h3>

                <p>
                  Master high-demand skillsets designed directly
                  alongside current tech market job specifications.
                </p>
              </div>

              <div className="framework-card practical-card">
                <div className="framework-number purple-number">
                  02
                </div>

                <h3>Practical Learning</h3>

                <p>
                  Build live production-grade applications and solve
                  real architectural challenges.
                </p>
              </div>
            </div>

            <div className="benefit-grid">
              <div className="benefit-card mentor-card">
                <div className="benefit-icon">🖥️</div>

                <h3>Mentors</h3>

                <p>
                  Weekly 1-on-1 code reviews with senior leads.
                </p>
              </div>

              <div className="benefit-card job-card">
                <div className="benefit-icon light-icon">🚀</div>

                <h3>Job Ready</h3>

                <p>
                  Resume optimization & mock interviews.
                </p>
              </div>

              <div className="benefit-card placement-support-card">
                <div className="benefit-icon light-icon">🎯</div>

                <h3>100% Placement Support</h3>

                <p>
                  Direct access to hiring drives and active referral
                  pipelines.
                </p>
              </div>
            </div>

            <div className="why-section">
              <div className="why-content">
                <h2>
                  Why <span>De mentee ?</span>
                </h2>

                <div className="why-list">
                  <div className="why-item">
                    <div className="why-number">1</div>

                    <div>
                      <h3>Industry-Relevant Learning</h3>
                      <p>
                        Learn skills that match today's industry needs.
                      </p>
                    </div>
                  </div>

                  <div className="why-item">
                    <div className="why-number">2</div>

                    <div>
                      <h3>Expert Mentorship</h3>
                      <p>
                        Grow with guidance from experienced professionals.
                      </p>
                    </div>
                  </div>

                  <div className="why-item">
                    <div className="why-number">3</div>

                    <div>
                      <h3>Hands-On Projects</h3>

                      <p>
                        Build confidence through hands-on projects and
                        real-world experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="career-gap-card">
                <div className="career-gap-label">DE MENTEE</div>

                <h2>
                  Have a Career Gap? We've
                  <br />
                  Got You Covered.
                </h2>

                <p>
                  Our hands-on capstone project structure converts your
                  learning period into verifiable practical experience
                  for recruiters.
                </p>

                {/* REDIRECTS TO CONTACT PAGE */}
                <Link to="/contact" className="counsellor-btn">
                  Talk to our counsellor
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        {/* ================= STUDENT TESTIMONIALS ================= */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-heading">
              <div className="testimonials-badge">
                REAL STUDENTS EXPERIENCES
              </div>

              <h2>
                Hear from <span>our students</span>
              </h2>
            </div>

            <div className="testimonials-grid">
              {/* CARD 1 */}
              <article className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85"
                    alt="Student testimonial"
                  />

                  <button
                    type="button"
                    className="testimonial-play"
                    aria-label="Play testimonial video"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>

                <div className="testimonial-info">
                  <div className="testimonial-name-row">
                    <h3>Name</h3>
                    <span>0:39</span>
                  </div>

                  <p>Role</p>
                </div>
              </article>

              {/* CARD 2 */}
              <article className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=85"
                    alt="Student testimonial"
                  />

                  <button
                    type="button"
                    className="testimonial-play"
                    aria-label="Play testimonial video"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>

                <div className="testimonial-info">
                  <div className="testimonial-name-row">
                    <h3>Name</h3>
                    <span>1:32</span>
                  </div>

                  <p>Role</p>
                </div>
              </article>

              {/* CARD 3 */}
              <article className="testimonial-card">
                <div className="testimonial-image">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85"
                    alt="Student testimonial"
                  />

                  <button
                    type="button"
                    className="testimonial-play"
                    aria-label="Play testimonial video"
                  >
                    <Play size={18} fill="currentColor" />
                  </button>
                </div>

                <div className="testimonial-info">
                  <div className="testimonial-name-row">
                    <h3>Name</h3>
                    <span>1:43</span>
                  </div>

                  <p>Role</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= SUCCESS STORIES ================= */}
        <section className="success-section">
          <div className="success-container">
            <div className="success-header">
              <h2>
                Success <span>Stories</span>
              </h2>

              <Link
                to="/courses/ui-ux-design"
                className="course-view-details"
              >
                VIEW DETAILS
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="success-grid">
              {/* STORY 1 */}
              <article className="success-card">
                <div className="success-card-top">
                  <div className="success-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85"
                      alt="Suganya"
                    />
                  </div>

                  <span className="quote-mark">“</span>
                </div>

                <p className="success-message">
                  Lorem ipsum, or lipsum as it is sometimes known, is
                  dummy text used in laying out print, graphic or web
                  designs.
                </p>

                <div className="success-divider"></div>

                <h3>Suganya</h3>

                <p className="placement-text red-placement">
                  Placed at Largstone Pvt Ltd
                </p>
              </article>

              {/* STORY 2 */}
              <article className="success-card featured-success">
                <div className="success-card-top">
                  <div className="success-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85"
                      alt="R Sowmiya"
                    />
                  </div>

                  <span className="quote-mark">“</span>
                </div>

                <p className="success-message">
                  Lorem ipsum, or lipsum as it is sometimes known, is
                  dummy text used in laying out print, graphic or web
                  designs.
                </p>

                <div className="success-divider"></div>

                <h3>R Sowmiya</h3>

                <p className="placement-text yellow-placement">
                  Placed at isolvte Technologies Pvt Ltd
                </p>
              </article>

              {/* STORY 3 */}
              <article className="success-card">
                <div className="success-card-top">
                  <div className="success-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85"
                      alt="N Gnana guru"
                    />
                  </div>

                  <span className="quote-mark">“</span>
                </div>

                <p className="success-message">
                  Lorem ipsum, or lipsum as it is sometimes known, is
                  dummy text used in laying out print, graphic or web
                  designs.
                </p>

                <div className="success-divider"></div>

                <h3>N Gnana guru</h3>

                <p className="placement-text purple-placement">
                  Placed at Matrix labs Pvt Ltd
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= LEARN FROM THE BEST ================= */}
        <section className="mentors-section">
          <div className="mentors-container">
            <div className="mentors-heading">
              <h2>
                Learn From <span>The Best</span>
              </h2>
            </div>

            <div className="mentors-grid">
              {/* MENTOR 1 */}
              <article className="mentor-profile-card">
                <div className="mentor-photo purple-ring">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85"
                    alt="Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="linkedin-icon"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>

              {/* MENTOR 2 */}
              <article className="mentor-profile-card">
                <div className="mentor-photo pink-ring">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=85"
                    alt="Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="linkedin-icon"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>

              {/* MENTOR 3 */}
              <article className="mentor-profile-card">
                <div className="mentor-photo">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85"
                    alt="Mentor"
                  />
                </div>

                <h3>Name</h3>
                <p>Job Role</p>

                <a
                  href="#"
                  className="linkedin-icon"
                  aria-label="LinkedIn profile"
                >
                  in
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ================= LEARNER REVIEWS + CTA + FAQ ================= */}
        <section className="reviews-faq-section">
          <div className="reviews-faq-container">
            {/* TESTIMONIALS */}
            <div className="learner-reviews">
              <div className="reviews-heading">
                <div className="reviews-badge">
                  TESTIMONIALS
                </div>

                <h2>
                  What our <span>Learners Say</span>
                </h2>
              </div>

              <div className="review-grid">
                {[1, 2, 3].map((item) => (
                  <article className="review-card" key={item}>
                    <div className="stars">★★★★★</div>

                    <p className="review-text">
                      “ Lorem ipsum, or lipsum as it is sometimes known,
                      is dummy text used in laying out print, graphic or
                      web designs. ”
                    </p>

                    <div className="review-divider"></div>

                    <div className="review-author">
                      <div className="review-avatar">R</div>

                      <div>
                        <h3>Name</h3>
                        <p>Company</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* FREELANCING CTA */}
            <div className="freelance-banner">
              <div className="freelance-content">
                <h2>Ready to Start Freelancing?</h2>

                <p>
                  Turn your skills into a reliable source of income.
                </p>

                <div className="freelance-line"></div>

                <Link to="/contact" className="enquire-btn">
                  Enquire Now
                </Link>
              </div>

              <div className="freelance-person">
                <div className="person-placeholder">👨‍💻</div>
              </div>
            </div>

            {/* FAQ */}
            <div className="faq-section">
              <h2>Got Questions ?</h2>

              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      className={`faq-item ${
                        isOpen ? "faq-open" : ""
                      }`}
                      key={faq.question}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                      >
                        <span>{faq.question}</span>

                        <span className="faq-icon">
                          {isOpen ? (
                            <Minus size={14} />
                          ) : (
                            <Plus size={14} />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;