import { Play } from "lucide-react";
import "./HomeAbout.css";
import Navbar from "../components/Navbar";


function About() {
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

      {/* ================= FOUNDATION CARD ================= */}
      <section className="foundation-section">
        <div className="foundation-card">
          <div className="foundation-media">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
              alt="De mentee founder"
            />

            <button
              className="foundation-play"
              type="button"
              aria-label="Play foundation video"
            >
              <Play size={24} fill="currentColor" />
            </button>
          </div>

          <div className="foundation-content">
            <div className="foundation-label">OUR FOUNDATION</div>

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
            {/* VISION */}
            <article className="purpose-card vision-card">
              <div className="purpose-icon">🚀</div>

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

            {/* MISSION */}
            <article className="purpose-card mission-card">
              <div className="purpose-icon light-purpose-icon">🎯</div>

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
          <div className="journey-grid">
            {/* LEFT TIMELINE CARDS */}
            <div className="journey-cards">
              {/* 2022 */}
              <article className="journey-card">
                <div className="journey-image">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                    alt="De mentee beginning"
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

              {/* 2023 */}
              <article className="journey-card">
                <div className="journey-image">
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                    alt="De mentee growing strong"
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

              {/* 2024 */}
              <article className="journey-card">
                <div className="journey-image">
                  <img
                    src="/images/journey-2024.jpg"
                    alt="De Mentee team working together"
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

              {/* 2026 */}
              <article className="journey-card">
                <div className="journey-image">
                  <img
                    src="/images/journey-2026.jpg"
                    alt="De Mentee company building"
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

            {/* RIGHT TEXT */}
            <div className="journey-content">
              <div className="journey-label">OUR LEGACY</div>

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

    {/* ================= AWARDS ================= */}
    <div className="recognition-heading">
      <div className="recognition-badge">RECOGNITION</div>

      <h2>
        Awards & <span>Meetups</span>
      </h2>
    </div>

    <div className="awards-grid">

      {/* AWARD 1 */}
      <article className="award-card">
        <div className="award-image">
          <img
            src="/images/award-1.jpg"
            alt="Network Kalam Logo Design Award"
          />
        </div>

        <div className="award-content">
          <span className="award-year pink">YEAR</span>

          <h3>
            Network Kalam Logo Design
            <br />
            awarded by Seyal
          </h3>
        </div>
      </article>

      {/* AWARD 2 */}
      <article className="award-card">
        <div className="award-image">
          <img
            src="/images/award-2.jpg"
            alt="De Mentee award"
          />
        </div>

        <div className="award-content">
          <span className="award-year purple">YEAR</span>

          <h3>Award name</h3>
        </div>
      </article>

      {/* AWARD 3 */}
      <article className="award-card">
        <div className="award-image">
          <img
            src="/images/award-3.jpg"
            alt="De Mentee recognition"
          />
        </div>

        <div className="award-content">
          <span className="award-year yellow">YEAR</span>

          <h3>Award name</h3>
        </div>
      </article>

      {/* AWARD 4 */}
      <article className="award-card">
        <div className="award-image">
          <img
            src="/images/award-4.jpg"
            alt="De Mentee meetup"
          />
        </div>

        <div className="award-content">
          <span className="award-year pink">YEAR</span>

          <h3>Award name</h3>
        </div>
      </article>
    </div>

    {/* ================= BRANDS ================= */}
    <div className="brands-heading">
      <div className="brands-badge">BRANDS</div>

      <h2>
        <span>Brands</span> We Working With
      </h2>

      <p>
        Proudly delivering creative solutions for businesses across diverse
        industries.
      </p>
    </div>

    <div className="brands-grid">

      <div className="brand-card">
        <img
          src="/images/brand-1.png"
          alt="Akshayaa"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-2.png"
          alt="Uvagai Foundation"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-3.png"
          alt="Anbarasan"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-4.png"
          alt="Safety Glass Toughened"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-5.png"
          alt="Big Gift"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-6.png"
          alt="Meta Sruthi Entertainers"
        />
      </div>

      <div className="brand-card">
        <img
          src="/images/brand-7.png"
          alt="IUVGG"
        />
      </div>

    </div>
  </div>
</section>

{/* ================= MEET OUR TEAM ================= */}
<section className="team-section">
  <div className="team-container">
    <div className="team-heading">
      <h2>
        Meet Our <span>Team</span>
      </h2>
    </div>

    <div className="team-grid">
      {/* MEMBER 1 */}
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

      {/* MEMBER 2 */}
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

      {/* MEMBER 3 */}
      <article className="team-card">
        <div className="team-image">
          <img
            src="/images/team-3.jpg"
            alt="Team member"
          />
        </div>

        <h3>Name</h3>
        <p>Role</p>
      </article>

      {/* MEMBER 4 */}
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
          src="/images/founder.jpg"
          alt="Auro Lakshmanan"
        />
      </div>

      <div className="founder-message-content">
        <h2>Building Futures, Creating Impact.</h2>

        <p className="founder-description">
          De Mentee was founded with a simple yet powerful vision—to make
          practical, industry-focused learning accessible to everyone.
        </p>

        <div className="founder-details">
          <h3>AURO LAKSHMANAN</h3>
          <p>Founder & Chief Mentor</p>
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

        <a href="#courses" className="about-cta-button">
          Explore Programs Now
        </a>
      </div>

      <div className="about-cta-image">
        <img
          src="/images/about-cta.jpg"
          alt="Student working at a computer"
        />
      </div>
    </div>
  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="site-footer">
  <div className="footer-container">
    <div className="footer-top">
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

      <div className="footer-column">
        <h3>EXPLORE</h3>

        <a href="/">Home</a>
        <a href="#success">Success story</a>
        <a href="#blog">Blog</a>
        <a href="/about">About us</a>
        <a href="#contact">Contact us</a>
      </div>

      <div className="footer-column">
        <h3>OUR COURSES</h3>

        <a href="/#courses">UI / UX Designer</a>
        <a href="/#courses">Digital marketing</a>
        <a href="/#courses">Web Development</a>
      </div>

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

    </div>
  );
}

export default About;