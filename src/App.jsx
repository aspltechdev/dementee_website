import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { ChevronDown, ArrowRight, Play, Plus, Minus } from "lucide-react";
import UIUXDesign from "./pages/UIUXDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import AppRoutes from "./routes/AppRoutes";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import About from "./pages/About";

function HomePage() {

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

              <a href="#enroll" className="enroll-btn">
                ENROLL NOW
              </a>
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
                <div className="live-badge">🚀 LIVE PROJECT TRAINING</div>

                <div>
                  <h2>Interactive Mentorship & Practical skills</h2>

                  <p>
                    Build Portfolio Ready Projects guided by senior leaders in
                    tech and product design.
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
            Everything you need to master modern industry skills from scratch.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🧑‍💼</div>

              <h3>Branding</h3>

              <p>
                Build a memorable brand identity with compelling visuals, clear
                messaging, and a consistent presence across every platform.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">✋</div>

              <h3>Design Strategy</h3>

              <p>
                Create user-focused design strategies that align business goals
                with seamless experiences and measurable results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📺</div>

              <h3>Digital Marketing</h3>

              <p>
                Drive growth through SEO, social media, paid campaigns, and
                data-driven marketing strategies that deliver results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🖥️</div>

              <h3>Web development</h3>

              <p>
                Develop fast, responsive, and scalable websites using modern
                technologies for exceptional performance and user experience.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📝</div>

              <h3>UI / UX Design</h3>

              <p>
                Design intuitive, engaging, and visually appealing digital
                experiences that users love to interact with.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>

              <h3>AI Training</h3>

              <p>
                Master practical AI tools, automation, and prompt engineering to
                enhance productivity and solve real-world challenges.
              </p>
            </div>
          </div>
        </section>

{/* ================= OUR COURSES ================= */}
<section className="courses-section">
  <div className="courses-container">
    <h2 className="courses-title">
      Our <span>Courses</span>
    </h2>

    <div className="course-stack">

      {/* COURSE 1 */}
      <article className="course-card course-card-1">
        <div className="course-info">
          <div className="course-badge">
            01 • DESIGN
          </div>

          <h3>UI / UX Design</h3>

          <p>
            Master wireframing, Figma prototyping, design systems, and
            user research to build sleek interfaces.
          </p>

          <div className="course-line"></div>

       <div className="course-footer">
  <span>Duration : 12 Weeks</span>

  <Link to="/courses/ui-ux-design">
    VIEW DETAILS
    <ArrowRight size={14} />
  </Link>
</div>
        </div>

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=85"
            alt="UI UX design"
          />
        </div>
      </article>

      {/* COURSE 2 */}
      <article className="course-card course-card-2">
        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
            alt="Digital marketing"
          />
        </div>

        <div className="course-info">
          <div className="course-badge pink-badge">
            02 • MARKETING
          </div>

          <h3>Digital Marketing</h3>

          <p>
            Performance marketing, SEO, Google Ads, Meta campaigns, and
            growth analytics for brand scaling.
          </p>

          <div className="course-line"></div>

          <div className="course-footer">
            <span>Duration : 12 Weeks</span>

            <a href="#">
              VIEW DETAILS
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </article>

      {/* COURSE 3 */}
      <article className="course-card course-card-3">
        <div className="course-info">
          <div className="course-badge blue-badge">
            03 • DEVELOPMENT
          </div>

          <h3>Full Stack Web development</h3>

          <p>
            Master React, Next.js, Node.js, and MongoDB. Build real-world
            SaaS applications with authentication, databases, and
            deployment pipelines.
          </p>

          <div className="course-line"></div>

        <div className="course-footer">
  <span>Duration : 2 Months</span>

  <Link to="/courses/full-stack-development">
    VIEW DETAILS
    <ArrowRight size={14} />
  </Link>
</div>
        </div>

        <div className="course-image">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85"
            alt="Full stack web development"
          />
        </div>
      </article>

    </div>
  </div>
</section>
        
{/* ================= LEARNING FRAMEWORK ================= */}
<section className="framework-section">
  <div className="framework-container">
    <div className="framework-heading">
      <h2>
        Everything You Need To <span>Succeed</span>
      </h2>

      <p>
        A structured, agency-grade learning framework designed to take you from
        foundational concepts to enterprise-ready execution.
      </p>
    </div>

    <div className="framework-grid">
      <div className="framework-card learn-card">
        <div className="framework-number yellow-number">01</div>

        <h3>Learn Real Skills</h3>

        <p>
          Master high-demand skillsets designed directly alongside current tech
          market job specifications.
        </p>
      </div>

      <div className="framework-card practical-card">
        <div className="framework-number purple-number">02</div>

        <h3>Practical Learning</h3>

        <p>
          Build live production-grade applications and solve real architectural
          challenges.
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
          Direct access to hiring drives and active referral pipelines.
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
              <p>Learn skills that match today's industry needs.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">2</div>

            <div>
              <h3>Expert Mentorship</h3>
              <p>Grow with guidance from experienced professionals.</p>
            </div>
          </div>

          <div className="why-item">
            <div className="why-number">3</div>

            <div>
              <h3>Hands-On Projects</h3>
              <p>
                Build confidence through hands-on projects and real-world
                experience.
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
          Our hands-on capstone project structure converts your learning period
          into verifiable practical experience for recruiters.
        </p>

        <a href="#contact" className="counsellor-btn">
          Talk to our counsellor
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>

{/* ================= GALLERY & COMMUNITY ================= */}
<section className="gallery-section">
  <div className="gallery-container">
    <div className="gallery-heading">
      <div className="gallery-badge">LIFE AT DE MENTEE</div>

      <h2>
        Our <span>Gallery & Community</span>
      </h2>
    </div>

    <div className="gallery-grid">
      {/* BIG CARD */}
      <article className="gallery-card gallery-card-large">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85"
          alt="Workshop event"
        />

        <div className="gallery-overlay"></div>

        <div className="gallery-content">
          <div className="gallery-label">WORKSHOPS</div>

          <h3>Sharing Ideas, Creating Impact</h3>

          <p>
            Inspiring conversations and connecting with the community.
          </p>
        </div>
      </article>

      {/* TOP RIGHT */}
      <article className="gallery-card gallery-card-small">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85"
          alt="Convocation celebration"
        />

        <div className="gallery-overlay"></div>

        <div className="gallery-content">
          <div className="gallery-label purple-label">CONVOCATION DAY</div>

          <h3>Celebrating New Beginnings</h3>
        </div>
      </article>

      {/* BOTTOM LEFT */}
      <article className="gallery-card gallery-bottom-card">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
          alt="Opening ceremony"
        />

        <div className="gallery-overlay"></div>

        <div className="gallery-content">
          <div className="gallery-label purple-label">
            OPENING CEREMONY
          </div>

          <h3>A New Chapter Begins</h3>
        </div>
      </article>

      {/* BOTTOM MIDDLE */}
      <article className="gallery-card gallery-bottom-card">
        <img
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85"
          alt="Podcast conversation"
        />

        <div className="gallery-overlay"></div>

        <div className="gallery-content">
          <div className="gallery-label dark-label">PODCAST STORIES</div>

          <h3>Conversations That Inspire</h3>
        </div>
      </article>

      {/* BOTTOM RIGHT */}
      <article className="gallery-card community-card">
        <div className="community-top">
          <span>JOIN OUR COMMUNITY</span>
        </div>

        <div className="community-visual">
          <div className="community-name">
            <strong>Auro</strong>
            <small>Lakshmanan</small>
          </div>

          <div className="avatar-art">😎</div>

          <div className="spotify-mark">
            ● Spotify
          </div>
        </div>
      </article>
    </div>

    <div className="gallery-footer">
      <a href="#" className="view-all-btn">
        View all
        <span>→</span>
      </a>
    </div>
  </div>
</section>

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

      <a href="#" className="alumni-btn">
        View all Alumni
      </a>
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
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
          in laying out print, graphic or web designs.
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
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
          in laying out print, graphic or web designs.
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
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
          in laying out print, graphic or web designs.
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
        <div className="reviews-badge">TESTIMONIALS</div>

        <h2>
          What our <span>Learners Say</span>
        </h2>
      </div>

      <div className="review-grid">
        {[1, 2, 3].map((item) => (
          <article className="review-card" key={item}>
            <div className="stars">★★★★★</div>

            <p className="review-text">
              “ Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. ”
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

        <p>Turn your skills into a reliable source of income.</p>

        <div className="freelance-line"></div>

        <a href="#contact" className="enquire-btn">
          Enquire Now
        </a>
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
              className={`faq-item ${isOpen ? "faq-open" : ""}`}
              key={faq.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenFaq(isOpen ? null : index)}
              >
                <span>{faq.question}</span>

                <span className="faq-icon">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
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

{/* ================= FINAL FOOTER ================= */}
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-top">
      {/* BRAND / ADDRESS */}
      <div className="footer-brand">
        <div className="footer-logo">
          <div className="footer-logo-mark">✦</div>

          <div>
            <strong>De mentee</strong>
            <span>Technologies</span>
          </div>
        </div>

        <h3>ADDRESS</h3>

        <p>
          Address : 142, 2nd Floor, Kamaraj Salai, Puducherry,
          <br />
          605013
        </p>

        <p>Phone: +91 88703 97432</p>

        <p>info@dementee.in</p>
      </div>

      {/* EXPLORE */}
      <div className="footer-column">
        <h3>EXPLORE</h3>

        <Link to="/">Home</Link>
        <a href="#success">Success story</a>
        <a href="#blog">Blog</a>
        <Link to="/about">About us</Link>
        <a href="#contact">Contact us</a>
      </div>

      {/* COURSES */}
      <div className="footer-column">
        <h3>OUR COURSES</h3>

        <a href="#courses">UI / UX Designer</a>
        <a href="#courses">Digital marketing</a>
        <a href="#courses">Web Development</a>
      </div>

      {/* INFORMATION */}
      <div className="footer-column footer-info">
        <div className="footer-action">
          <a href="#contact" className="footer-enroll-btn">
            Enroll Today
          </a>
        </div>

        <h3>INFORMATION</h3>

        <a href="#">Privacy policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>

    <div className="footer-divider"></div>

    <div className="footer-bottom">
      © 2024 De Mentee Academy. All Rights Reserved
    </div>
  </div>
</footer>

      </main>
    </div>
  );
}

function App() {
  return (
    <AppRoutes
      HomePage={HomePage}
    
    />
  );
}
export default App;