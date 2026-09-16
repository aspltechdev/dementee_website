import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Play } from "lucide-react";
import footerlogo from "../assets/footerlogo.png";
import Footer from "./Footer";

import "./CreatorPage.css";

import meetup1 from "../assets/meetup1.jpg";
import meetup2 from "../assets/meetup2.jpg";
import meetup3 from "../assets/meetup3.jpg";
import meetup4 from "../assets/meetup4.jpg";
import meetup5 from "../assets/meetup5.jpg";

import Navbar from "../components/Navbar";
import "./CreatorPage.css";

function CreatorPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const realityCards = [
    {
      text: "I don't know my niche.",
      className: "reality-white",
    },
    {
      text: "I'm not confident on camera.",
      className: "reality-pink",
    },
    {
      text: "I don't know what to post.",
      className: "reality-yellow",
    },
    {
      text: "My content isn't growing.",
      className: "reality-purple",
    },
    {
      text: "I don't know where to start.",
      className: "reality-red",
    },
  ];

  const journey = [
    {
      week: "WEEK 01",
      title: "Writing & Prep",
      description:
        "The art of hook, scriptwriting for retention, and writing your own scripts.",
    },
    {
      week: "WEEK 01",
      title: "Vibe Matching",
      description:
        "Check in, meet your cohort, psychology of storytelling, community night.",
    },
    {
      week: "WEEK 02",
      title: "The Outdoor Shoot",
      description:
        "Camera and lighting, then your first shoot at the beach.",
    },
    {
      week: "WEEK 03",
      title: "Edit with mentors",
      description:
        "Acting on camera, mentor edit sessions, and posting your first reel.",
    },
    {
      week: "WEEK 04",
      title: "The Screening",
      description:
        "Watch your cohort's work, celebrate, graduate.",
        featured: true,
    },
  ];

  const learnCards = [
    {
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=85",
      title: "Podcast Style videos",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=85",
      title: "Vlogs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=700&q=85",
      title: "Storytelling Reels",
    },
  ];

 const meetups = [
  meetup1,
  meetup2,
  meetup3,
  meetup4,
  meetup5,
  meetup3,
];

  const faqs = [
    "Is there an age limit for the programs?",
    "Is this program only for full time creators?",
    "Do I need to bring my own camera?",
    "What type of content will we be making?",
    "What is the application process like?",
  ];

  return (
    <div className="creator-page">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="creator-hero">
        <div className="creator-hero-content">

          <div className="creator-pill">
            <span></span>
            THE FAC
          </div>

          <h1>
            How to become a
            <br />
            <span>Creator.</span>
          </h1>

          <p>
            De Mentee Creator Course helps you turn your knowledge into
            meaningful content, build your creator journey and create an
            impact.
          </p>

         <Link to="/contact" className="creator-primary-btn">
  Request an Invite
</Link>
        </div>

        {/* =================================================
            FAC INTRO
        ================================================= */}
        <div className="creator-intro">

          <div className="creator-intro-content">

            <div className="creator-small-pill">
              WHAT IS FAC?
            </div>

            <h2>
              <span>FAC</span> — Founder as a Creator
            </h2>

            <p>
              FAC is where aspiring creators learn how to think, create and
              grow. From discovering your content identity to creating your
              first videos, FAC gives you the skills, structure and confidence
              to start building a meaningful creator journey.
            </p>

          </div>

          <div className="creator-intro-video">

            <img
              src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&w=1200&q=85"
              alt="Creator recording content"
            />

            <button className="creator-video-play">
              <Play size={23} fill="white" />
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          CREATOR REALITY
      ===================================================== */}
      <section className="creator-reality">

        <div className="creator-reality-heading">

          <div className="creator-gray-pill">
            CREATOR REALITY
          </div>

          <h2>
            “Everyone Can Post. Not Everyone
            <br />
            Knows <span>What to Create.</span>”
          </h2>

          <p>
            Many aspiring creators start with excitement—but stop because of:
          </p>

        </div>

        <div className="reality-wheel">

          {realityCards.map((card, index) => (
            <div
              key={index}
              className={`reality-card ${card.className} reality-${index}`}
            >
              {card.text}
            </div>
          ))}

          <div className="drag-indicator">
            ← Drag →
          </div>

        </div>

      </section>

      {/* =====================================================
          ANYONE CAN BE A CREATOR
      ===================================================== */}
      <section className="creator-anyone">

        <div className="creator-anyone-content">

          <h2>
            An <span>aspiring</span> creator can be
            <br />
            anyone
          </h2>

          <p>
            Creativity has no fixed path, background, or profession. Whether
            you’re a designer, developer, artist, engineer, entrepreneur,
            student, or simply someone with a curious mind, your ideas have
            the power to create something meaningful.
          </p>

        </div>

        <div className="creator-feature-video">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
            alt="Creator speaking"
          />

          <button className="feature-play">
            <Play size={25} fill="white" />
          </button>

        </div>

        {/* Statistics */}
        <div className="creator-stats">

          <div className="creator-stat-main">

           <div className="instagram-icon">◎</div>

            <p>
              The content creation
              <br />
              industry in India has over
            </p>

            <strong>100M active</strong>

            <p>
              creators on platforms like
              <br />
              Instagram, YouTube and
              <br />
              LinkedIn.
            </p>

           <div className="youtube-icon">▶</div>
            <div className="linkedin-icon">in</div>

          </div>

          <div className="creator-stat-side">

            <div className="stat-yellow">
              <span>Brands are spending</span>
              <strong>₹4,000 Cr+</strong>
              <small>
                Yearly on influencer and
                UGC campaigns
              </small>
            </div>

            <div className="stat-purple">
              Top 1% creators earn ₹5L to
              ₹25L+ per month through
              brand deals, courses, and
              digital products
            </div>

          </div>

        </div>

        {/* Brands */}
        <div className="creator-brands">

          <h3>
            <span>Brands</span> that you’ll work With
          </h3>

          <div className="brand-list">

            <div className="brand-box">
              <span>Accenture</span>
            </div>

            <div className="brand-box">
              <strong>Akshaya</strong>
              <small>Sweets & Bakery</small>
            </div>

            <div className="brand-box">
              <span className="canva-text">Canva</span>
            </div>

            <div className="brand-box">
              <span className="sony-text">SONY</span>
            </div>

            <div className="brand-box">
              <span>Victoria's Secret</span>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          JOURNEY PLAN
      ===================================================== */}
      <section className="creator-journey">

        <div className="creator-section-label">
          THE FAC JOURNEY
        </div>

        <h2>
          The Journey <span>Plan</span>
        </h2>

        <div className="journey-grid">

          {journey.map((item, index) => (
            <article
              key={index}
              className={`journey-card ${
                item.featured ? "journey-featured" : ""
              }`}
            >

              <div className="journey-week">
                {item.week}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>
          ))}

        </div>

        <Link to="/contact" className="creator-primary-btn">
  Request an Invite
</Link>

      </section>

      {/* =====================================================
          WHAT YOU'LL LEARN
      ===================================================== */}
      <section className="creator-learning">

        <div className="creator-section-label learning-label">
          THE LEARNING
        </div>

        <h2>
          What you’ll learn to
          <br />
          <span>Create</span>
        </h2>

        <div className="learning-grid">

          {learnCards.map((card, index) => (
            <article className="learning-card" key={index}>

              <div className="learning-image">

                <img
                  src={card.image}
                  alt={card.title}
                />

                <button>
                  <Play size={18} fill="white" />
                </button>

              </div>

              <h3>{card.title}</h3>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          MEET AURO
      ===================================================== */}
      <section className="creator-mentor">

        <div className="mentor-content">

          <div className="mentor-text">

            <h2>
              Meet
              <br />
              <span>Auro Lakshmanan</span>
            </h2>

            <p>
              With over 10 years of experience in the creative and digital
              industry, Lakshmanan has worked as a UI/UX Designer with leading
              organisations, including Accenture, Victoria Secret and Chennai
              Super Kings (CSK).
            </p>

            <p>
              His professional journey has given him practical experience in
              design, digital platforms, branding and user experience. To
              further expand his understanding of the creator ecosystem, he
              completed a Creator Course in Goa and earned his certification.
            </p>

            <p>
              Lakshmanan wanted to take everything he had learned throughout
              his professional and creator journey and share it with the next
              generation. This vision led to the FAC (Founder as a Creator)
              Programme at De Mentee.
            </p>

            <div className="mentor-brands">
              <span>Prodian</span>
              <span>Victoria's Secret</span>
              <strong>accenture</strong>
              <span>CSK</span>
              <strong>netlink</strong>
            </div>

          </div>

          <div className="mentor-phone">

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=85"
              alt="Creator mentor"
            />

            <button>
              <Play size={20} fill="white" />
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROGRAM / PRICING
      ===================================================== */}
      <section className="creator-program" id="apply">

        <div className="program-ticket">

          <div className="ticket-main">

            <h2>FAC PROGRAM</h2>

            <div className="ticket-location">
              LOCATION
              <strong>PONDICHERRY</strong>
            </div>

            <div className="program-fee">
              <span>PROGRAM FEE</span>
              <strong>INR 45,000</strong>
            </div>

          </div>

          <div className="ticket-barcode">
            <div className="barcode-lines"></div>
            <span>FAC 45 19 68 11 00</span>
          </div>

        </div>

        <div className="program-info">

          <div className="program-pill">
            CREATOR COURSE
          </div>

          <strong>Saturday - Sunday</strong>
          <strong>4 Weeks</strong>
          <strong>EMI available</strong>

        </div>

      </section>

      {/* =====================================================
          MEETUPS GALLERY
      ===================================================== */}
      {/* =====================================================
    MEETUPS GALLERY
===================================================== */}
<section className="creator-gallery">
  <h2>
    Meetups <span>Gallery</span>
  </h2>

  <div className="meetup-gallery">

    {/* ROW 1 */}
    <div className="meetup-row meetup-row-1">
      <div className="meetup-image meetup-large">
        <img src={meetups[0]} alt="FAC meetup 1" />
      </div>

      <div className="meetup-image meetup-small">
        <img src={meetups[1]} alt="FAC meetup 2" />
      </div>

      <div className="meetup-image meetup-small">
        <img src={meetups[2]} alt="FAC meetup 3" />
      </div>
    </div>

    {/* ROW 2 */}
    <div className="meetup-row meetup-row-2">
      <div className="meetup-image meetup-small">
        <img src={meetups[3]} alt="FAC meetup 4" />
      </div>

      <div className="meetup-image meetup-small">
        <img src={meetups[4]} alt="FAC meetup 5" />
      </div>

      <div className="meetup-image meetup-large">
        <img src={meetups[5]} alt="FAC meetup 6" />
      </div>
    </div>

  </div>
</section>
      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="creator-faq">

        <h2>FAQ</h2>

        <div className="creator-faq-list">

          {faqs.map((question, index) => {

            const isOpen = openFaq === index;

            return (
              <div
                className={`creator-faq-item ${
                  isOpen ? "faq-open" : ""
                }`}
                key={question}
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                >

                  <span>{question}</span>

                  {isOpen ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}

                </button>

                {isOpen && (
                  <div className="creator-faq-answer">
                    <p>
                      Please contact the De Mentee team for more information
                      about the FAC Creator Programme and its application
                      process.
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </section>
<Footer />

    </div>
  );
}

export default CreatorPage;